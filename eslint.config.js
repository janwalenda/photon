'use strict';

// ESLint flat config. Lint tooling lives in script/node_modules, so plugins and
// configs are required from there.
const path = require('path');

const scriptModules = name =>
  require(path.join(__dirname, 'script', 'node_modules', name));

const neostandard = scriptModules('neostandard');
const prettierRecommended = scriptModules('eslint-plugin-prettier/recommended');
const globals = scriptModules('globals');

module.exports = [
  {
    ignores: [
      // Generated and third-party code
      '**/spec/fixtures/**/*.js',
      '**/node_modules/**',
      'vendor/**',
      'out/**',
      // Vendored third-party packages, kept as upstream until reworked (#7)
      'packages/github/**',
      'packages/tree-sitter/**',
      'packages/superstring/**',
      'packages/git-utils/**',
      // Imported Atom packages, upstream formatting until the Prettier 3 switch (#8)
      'packages/archive-view/**',
      'packages/autocomplete-atom-api/**',
      'packages/autocomplete-css/**',
      'packages/autocomplete-html/**',
      'packages/autocomplete-plus/**',
      'packages/autocomplete-snippets/**',
      'packages/autosave/**',
      'packages/background-tips/**',
      'packages/bookmarks/**',
      'packages/bracket-matcher/**',
      'packages/command-palette/**',
      'packages/encoding-selector/**',
      'packages/find-and-replace/**',
      'packages/fuzzy-finder/**',
      'packages/image-view/**',
      'packages/keybinding-resolver/**',
      'packages/language-c/**',
      'packages/language-clojure/**',
      'packages/language-coffee-script/**',
      'packages/language-csharp/**',
      'packages/language-css/**',
      'packages/language-gfm/**',
      'packages/language-git/**',
      'packages/language-go/**',
      'packages/language-html/**',
      'packages/language-hyperlink/**',
      'packages/language-java/**',
      'packages/language-javascript/**',
      'packages/language-json/**',
      'packages/language-less/**',
      'packages/language-make/**',
      'packages/language-mustache/**',
      'packages/language-objective-c/**',
      'packages/language-perl/**',
      'packages/language-php/**',
      'packages/language-property-list/**',
      'packages/language-python/**',
      'packages/language-ruby/**',
      'packages/language-ruby-on-rails/**',
      'packages/language-sass/**',
      'packages/language-shellscript/**',
      'packages/language-source/**',
      'packages/language-sql/**',
      'packages/language-text/**',
      'packages/language-todo/**',
      'packages/language-toml/**',
      'packages/language-typescript/**',
      'packages/language-xml/**',
      'packages/language-yaml/**',
      'packages/markdown-preview/**',
      'packages/metrics/**',
      'packages/notifications/**',
      'packages/open-on-github/**',
      'packages/package-generator/**',
      'packages/settings-view/**',
      'packages/snippets/**',
      'packages/spell-check/**',
      'packages/status-bar/**',
      'packages/styleguide/**',
      'packages/symbols-view/**',
      'packages/tabs/**',
      'packages/timecop/**',
      'packages/tree-view/**',
      'packages/whitespace/**',
      'packages/wrap-guide/**'
    ]
  },

  // Standard rules without the stylistic ones; Prettier owns formatting.
  ...neostandard({ noStyle: true, noJsx: true }),

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
        ...globals.node,
        atom: 'readonly',
        snapshotResult: 'readonly'
      }
    },
    rules: {
      'n/no-callback-literal': 'off',
      'n/no-deprecated-api': 'off',
      // Rules that the previous config (standard 12) did not have. Existing
      // violations would need logic changes in core, so they are enabled
      // again while core is rewritten in TypeScript (#15).
      'array-callback-return': 'off',
      'no-async-promise-executor': 'off',
      'no-prototype-builtins': 'off',
      'no-var': 'off',
      'prefer-const': 'off',
      'prefer-regex-literals': 'off'
    }
  },

  // Files written as ES modules (transpiled by Babel at load time).
  {
    files: ['**/*.js'],
    ignores: ['eslint.config.js'],
    languageOptions: { sourceType: 'module' }
  },

  {
    files: ['spec/**', '**/*-spec.js', '**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jasmine,
        advanceClock: 'readonly',
        fakeClearInterval: 'readonly',
        fakeSetInterval: 'readonly',
        waitsForPromise: 'readonly'
      }
    }
  },

  prettierRecommended
];
