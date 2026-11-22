const { assert } = require('chai');
const fs = require('fs');
const path = require('path');
const temp = require('temp').track();
const ConfigFile = require('../../src/config-file');
const { stopAllWatchers } = require('../../src/path-watcher');

// The main process watches config.cson, and it has no global `atom`.
describe('ConfigFile in the main process', function () {
  this.timeout(10 * 1000);

  let filePath, configFile, subscription, savedAtom;

  beforeEach(() => {
    // Other main process specs leave a stub `atom` behind.
    savedAtom = global.atom;
    delete global.atom;
    filePath = path.join(temp.mkdirSync('atom-config-file'), 'config.cson');
    fs.writeFileSync(filePath, "'*':\n  core:\n    themes: ['a']\n");
    configFile = ConfigFile.at(filePath);
  });

  afterEach(async () => {
    if (subscription) subscription.dispose();
    await stopAllWatchers();
    temp.cleanupSync();
    global.atom = savedAtom;
  });

  it('watches the file and reports changes', async () => {
    const errors = [];
    configFile.onDidError(message => errors.push(message));

    subscription = await configFile.watch();
    assert.deepEqual(errors, []);

    const changed = new Promise(resolve =>
      configFile.onDidChange(settings => resolve(settings))
    );
    fs.writeFileSync(filePath, "'*':\n  core:\n    themes: ['b']\n");

    const settings = await changed;
    assert.deepEqual(settings['*'].core.themes, ['b']);
  });
});
