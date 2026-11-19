'use strict';

const { glob } = require('glob');

module.exports = function (globPaths) {
  return Promise.all(
    globPaths.map(g => glob(g, { windowsPathsNoEscape: true }))
  ).then(paths => paths.map(p => p.sort()).reduce((a, b) => a.concat(b), []));
};
