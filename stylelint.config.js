const path = require('path');

module.exports = {
  extends: 'stylelint-config-standard',
  customSyntax: 'postcss-less',
  ignoreFiles: [path.resolve(__dirname, 'static', 'atom.less')],
  rules: {
    'selector-type-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null, // needed for octicons (no sensible fallback)
    'declaration-empty-line-before': null, // TODO: enable?
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'selector-pseudo-element-colon-notation': null, // TODO: enable?
    'rule-empty-line-before': null, // TODO: enable?
    'at-rule-empty-line-before': null, // TODO: enable?
    'font-family-no-duplicate-names': null, // TODO: enable?
    'unit-no-unknown': [true, { ignoreUnits: ['x'] }], // Needed for -webkit-image-set 1x/2x units

    // These rules validate plain CSS and report Less variables, mixins,
    // functions, `//` comments and `~` escapes as errors.
    'declaration-property-value-no-unknown': null,
    'font-family-name-quotes': null,
    'import-notation': null, // Less needs `@import "file"`, not `url()`
    'media-query-no-invalid': null,
    'no-invalid-double-slash-comments': null,
    'property-no-unknown': [true, { ignoreProperties: ['src'] }], // @font-face mixins
    'selector-class-pattern': null,
    'selector-no-invalid': null,
    'value-keyword-case': [
      'lower',
      { ignoreProperties: [/^--.*font-family$/] }
    ],
    'value-no-invalid': null,

    // Modern notations that Chromium 87 (Electron 11) does not support yet.
    // TODO: enable with the Electron upgrade (#9).
    'alpha-value-notation': null,
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'hue-degree-notation': null,
    'media-feature-range-notation': null,
    'selector-not-notation': null,

    // Electron only runs Chromium, where these prefixes are still in use.
    // TODO: review with the Electron upgrade (#9).
    'property-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,

    // Keep the values from Bootstrap and normalize.css. TODO: enable?
    'declaration-block-no-redundant-longhand-properties': null,
    'number-max-precision': null,
    'property-no-deprecated': null
  }
};
