# Vendored packages

Packages that used to be installed from archived or unmaintained git
repositories, or that needed fixes to build with current tooling. Each one was
imported at the exact commit Atom pinned, without git history.

## Third-party packages with local fixes

These keep their upstream code style and are excluded from ESLint and Prettier
(`.eslintignore`, `.prettierignore`).

| Package       | Version | Source                                        | Commit    | Local changes                                                                              |
| ------------- | ------- | --------------------------------------------- | --------- | ------------------------------------------------------------------------------------------ |
| `git-utils`   | 5.7.1   | npm `git-utils@5.7.1`                         | –         | zlib `fdopen` macro limited to classic `MACOS`; devDependencies and scripts removed        |
| `github`      | 0.36.10 | [atom/github](https://github.com/atom/github) | `2053290` | tests, dev tooling and `postinstall` removed                                               |
| `superstring` | 2.4.4   | npm `superstring@2.4.4`                       | –         | `iconv_t` casts in `encoding-conversion.cc`; devDependencies and scripts removed           |
| `tree-sitter` | 0.17.1  | npm `tree-sitter@0.17.1`                      | –         | C++14 (from DeeDeeG/node-tree-sitter `bb298ea`); devDependencies and build scripts removed |

## Imported Atom packages

Bundled Atom packages from archived `github.com/atom/*` repositories. They are
Photon's own packages now; they keep upstream formatting until the Prettier 3
switch (#8) reformats them.

| Package                 | Version | Source                                                                      | Commit         | Local changes |
| ----------------------- | ------- | --------------------------------------------------------------------------- | -------------- | ------------- |
| `archive-view`          | 0.66.0  | [atom/archive-view](https://github.com/atom/archive-view)                   | `762c5b6b2667` | none          |
| `autocomplete-atom-api` | 0.10.7  | [atom/autocomplete-atom-api](https://github.com/atom/autocomplete-atom-api) | `f772a3fa84ea` | none          |
| `autocomplete-css`      | 0.17.5  | [atom/autocomplete-css](https://github.com/atom/autocomplete-css)           | `53079283bfcd` | none          |
| `autocomplete-html`     | 0.8.8   | [atom/autocomplete-html](https://github.com/atom/autocomplete-html)         | `cee24674f32e` | none          |
| `autocomplete-plus`     | 2.42.4  | [atom/autocomplete-plus](https://github.com/atom/autocomplete-plus)         | `3bdb3f2b4ade` | none          |
| `autocomplete-snippets` | 1.12.1  | [atom/autocomplete-snippets](https://github.com/atom/autocomplete-snippets) | `2da0e23f6b4e` | none          |
| `autosave`              | 0.24.6  | [atom/autosave](https://github.com/atom/autosave)                           | `129cbb928535` | none          |
| `background-tips`       | 0.28.0  | [atom/background-tips](https://github.com/atom/background-tips)             | `e54189c74d92` | none          |
| `bookmarks`             | 0.46.0  | [atom/bookmarks](https://github.com/atom/bookmarks)                         | `35363fb36307` | none          |
| `bracket-matcher`       | 0.92.0  | [atom/bracket-matcher](https://github.com/atom/bracket-matcher)             | `d07c17c6a007` | none          |
