'use strict';

const childProcess = require('child_process');

module.exports = function (ci) {
  verifyNode();
  verifyPython();
};

function verifyNode() {
  const fullVersion = process.versions.node;
  const majorVersion = Number(fullVersion.split('.')[0]);
  if (majorVersion >= 24) {
    console.log(`Node:\tv${fullVersion}`);
  } else {
    throw new Error(
      `node v24+ is required to build Photon (see .nvmrc). node v${fullVersion} is installed.`
    );
  }
}

function verifyPython() {
  // node-gyp 10+ (bundled with current npm) needs Python 3.10 or newer.
  // Versioned binaries come first because macOS ships an older /usr/bin/python3.
  const candidates = [
    process.env.NODE_GYP_FORCE_PYTHON,
    process.env.PYTHON,
    ...[15, 14, 13, 12, 11, 10].map(minor => `python3.${minor}`),
    'python3',
    'python'
  ].filter(Boolean);
  if (process.platform === 'win32') candidates.push('py.exe');

  let triedLog = '';
  for (const binary of candidates) {
    let fullVersion = '';
    try {
      fullVersion = childProcess
        .execFileSync(
          binary,
          ['-c', 'import platform\nprint(platform.python_version())'],
          { env: process.env, stdio: ['ignore', 'pipe', 'ignore'] }
        )
        .toString()
        .replace(/\+/g, '')
        .replace(/rc(.*)$/gi, '')
        .trim();
    } catch (e) {}
    triedLog += `tried "${binary}", got: "${fullVersion}"\n`;

    const [major, minor] = fullVersion.split('.').map(Number);
    if (major === 3 && minor >= 10) {
      // Make node-gyp use exactly this interpreter.
      process.env.PYTHON = binary;
      console.log(`Python:\tv${fullVersion} (${binary})`);
      return;
    }
  }

  throw new Error(
    `\n${triedLog}\n` +
      'Python 3.10+ is required to build Photon (needed by node-gyp).\n' +
      'Install it (e.g. `brew install python@3.13`) or set the PYTHON env var\n' +
      'to a Python 3.10+ binary.\n'
  );
}
