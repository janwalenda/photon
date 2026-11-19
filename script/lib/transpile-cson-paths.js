'use strict';

const CompileCache = require('../../src/compile-cache');
const fs = require('fs');
const globSync = require('./glob-sync');
const path = require('path');

const CONFIG = require('../config');

module.exports = function () {
  console.log(`Transpiling CSON paths in ${CONFIG.intermediateAppPath}`);
  for (const path of getPathsToTranspile()) {
    transpileCsonPath(path);
  }
};

function getPathsToTranspile() {
  let paths = [];
  for (const packageName of Object.keys(
    CONFIG.appMetadata.packageDependencies
  )) {
    paths = paths.concat(
      globSync(
        path.join(
          CONFIG.intermediateAppPath,
          'node_modules',
          packageName,
          '**',
          '*.cson'
        ),
        {
          ignore: path.join(
            CONFIG.intermediateAppPath,
            'node_modules',
            packageName,
            'spec',
            '**',
            '*.cson'
          ),
          nodir: true
        }
      )
    );
  }
  return paths;
}

function transpileCsonPath(csonPath) {
  const jsonPath = csonPath.replace(/cson$/g, 'json');
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(
      CompileCache.addPathToCache(csonPath, CONFIG.atomHomeDirPath)
    )
  );
  fs.unlinkSync(csonPath);
}
