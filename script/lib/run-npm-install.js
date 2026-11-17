'use strict';

const childProcess = require('child_process');

const CONFIG = require('../config');

// Environment that makes npm (and node-gyp / prebuild-install) build native
// modules against Electron's headers instead of the host Node. This replaces
// what the bundled apm used to configure.
function getElectronInstallEnv() {
  return Object.assign({}, process.env, {
    npm_config_runtime: 'electron',
    npm_config_target: CONFIG.appMetadata.electronVersion,
    npm_config_disturl: 'https://electronjs.org/headers',
    npm_config_arch: process.arch,
    npm_config_target_arch: process.arch,
    // Electron 11's headers do not define openssl_fips, which current node-gyp
    // expects in common.gypi; an empty value makes gyp evaluate it as unset.
    npm_config_openssl_fips: '',
    // Recognised by '@electron/get'
    ELECTRON_CUSTOM_VERSION: CONFIG.appMetadata.electronVersion
  });
}

module.exports = function(packagePath, ci, stdioOptions) {
  childProcess.execFileSync(
    CONFIG.getNpmBinPath(),
    ['--loglevel=error', '--no-fund', '--no-audit', ci ? 'ci' : 'install'],
    {
      env: getElectronInstallEnv(),
      cwd: packagePath,
      stdio: stdioOptions || 'inherit'
    }
  );
};

module.exports.getElectronInstallEnv = getElectronInstallEnv;
