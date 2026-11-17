'use strict';

const CompileCache = require('../../src/compile-cache');
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');

const CONFIG = require('../config');

require('colors');

module.exports = function() {
  console.log(
    `Transpiling packages with custom transpiler configurations in ${
      CONFIG.intermediateAppPath
    }`
  );
  for (let packageName of Object.keys(CONFIG.appMetadata.packageDependencies)) {
    const intermediatePackagePath = path.join(
      CONFIG.intermediateAppPath,
      'node_modules',
      packageName
    );

    const metadataPath = path.join(intermediatePackagePath, 'package.json');
    const metadata = require(metadataPath);

    if (metadata.atomTranspilers) {
      console.log(' transpiling for package '.cyan + packageName.cyan);
      // Transpiler dependencies are regular dependencies, installed (and
      // hoisted) by bootstrap, so no separate install in the package is needed.

      CompileCache.addTranspilerConfigForPath(
        intermediatePackagePath,
        metadata.name,
        metadata,
        metadata.atomTranspilers
      );
      for (let config of metadata.atomTranspilers) {
        const pathsToCompile = glob.sync(
          path.join(intermediatePackagePath, config.glob),
          { nodir: true }
        );
        pathsToCompile.forEach(transpilePath);
      }

      // Now that we've transpiled everything in-place, we no longer want Atom to try to transpile
      // the same files when they're being required.
      delete metadata.atomTranspilers;
      fs.writeFileSync(
        metadataPath,
        JSON.stringify(metadata, null, '  '),
        'utf8'
      );

      CompileCache.removeTranspilerConfigForPath(intermediatePackagePath);
    }
  }
};

function transpilePath(path) {
  fs.writeFileSync(
    path,
    CompileCache.addPathToCache(path, CONFIG.atomHomeDirPath)
  );
}
