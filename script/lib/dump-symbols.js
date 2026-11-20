'use strict';

const fs = require('fs-extra');
const globSync = require('./glob-sync');
const path = require('path');

const CONFIG = require('../config');
module.exports = function () {
  if (process.platform === 'win32') {
    console.log(
      'Skipping symbol dumping because minidump is not supported on Windows'
        .gray
    );
    return Promise.resolve();
  } else if (!hasDumpSymsBinary()) {
    console.log(
      `Skipping symbol dumping because minidump is not installed or has no dump_syms binary for ${
        process.platform
      }-${process.arch}`.gray
    );
    return Promise.resolve();
  } else {
    console.log(`Dumping symbols in ${CONFIG.symbolsPath}`);
    const binaryPaths = globSync(
      path.join(CONFIG.intermediateAppPath, 'node_modules', '**', '*.node')
    );
    return Promise.all(binaryPaths.map(dumpSymbol));
  }
};

function hasDumpSymsBinary() {
  // minidump is an optional dependency: its install builds Breakpad from
  // source, which can fail with newer Xcode versions.
  let minidumpPath;
  try {
    minidumpPath = path.dirname(require.resolve('minidump/package.json'));
  } catch (error) {
    return false;
  }
  return fs.existsSync(
    path.join(
      minidumpPath,
      'bin',
      `${process.platform}-${process.arch}`,
      'dump_syms'
    )
  );
}

function dumpSymbol(binaryPath) {
  const minidump = require('minidump');

  return new Promise(function (resolve, reject) {
    minidump.dumpSymbol(binaryPath, function (error, content) {
      if (error) {
        // fswin.node is only used on windows, ignore the error on other platforms
        if (process.platform !== 'win32' && binaryPath.match(/fswin.node/))
          return resolve();
        throw new Error(error);
      } else {
        const moduleLine = /MODULE [^ ]+ [^ ]+ ([0-9A-F]+) (.*)\n/.exec(
          content
        );
        if (moduleLine.length !== 3) {
          const errorMessage = `Invalid output when dumping symbol for ${binaryPath}`;
          console.error(errorMessage);
          throw new Error(errorMessage);
        } else {
          const filename = moduleLine[2];
          const symbolDirPath = path.join(
            CONFIG.symbolsPath,
            filename,
            moduleLine[1]
          );
          const symbolFilePath = path.join(symbolDirPath, `${filename}.sym`);
          fs.mkdirpSync(symbolDirPath);
          fs.writeFileSync(symbolFilePath, content);
          resolve();
        }
      }
    });
  });
}
