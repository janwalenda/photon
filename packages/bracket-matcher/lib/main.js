const MatchManager = require('./match-manager');
const BracketMatcherView = require('./bracket-matcher-view');
const BracketMatcher = require('./bracket-matcher');

module.exports = {
  activate() {
    const watchedEditors = new WeakSet();

    atom.workspace.observeTextEditors(editor => {
      if (watchedEditors.has(editor)) return;

      const editorElement = atom.views.getView(editor);
      const matchManager = new MatchManager(editor, editorElement);
      // The views subscribe to the editor and clean up when it is destroyed.
      new BracketMatcherView(editor, editorElement, matchManager); // eslint-disable-line no-new
      new BracketMatcher(editor, editorElement, matchManager); // eslint-disable-line no-new
      watchedEditors.add(editor);
      editor.onDidDestroy(() => watchedEditors.delete(editor));
    });
  }
};
