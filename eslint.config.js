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
      'packages/git-utils/**'
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
      // As in neostandard, plus `_` for unused positions in array patterns
      // (regex groups, for example).
      'no-unused-vars': [
        'error',
        {
          args: 'none',
          caughtErrors: 'none',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all'
        }
      ],
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
    files: ['spec/**', 'packages/*/spec/**', '**/*-spec.js', '**/*.test.js'],
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

  // Snippet bodies use ${1:placeholder} syntax inside plain strings.
  {
    files: ['packages/snippets/spec/**', 'packages/bracket-matcher/spec/**'],
    rules: { 'no-template-curly-in-string': 'off' }
  },

  prettierRecommended
];
