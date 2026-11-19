'use strict';

const { globSync } = require('glob');

// glob 9+ no longer sorts its results and treats `\` as an escape character.
// Keep the glob 7 behavior the build scripts rely on: sorted paths, and
// patterns built with path.join() work on Windows.
module.exports = function (pattern, options = {}) {
  return globSync(pattern, { windowsPathsNoEscape: true, ...options }).sort();
};
