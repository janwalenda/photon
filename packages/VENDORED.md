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

| Package                  | Version | Source                                                                        | Commit         | Local changes |
| ------------------------ | ------- | ----------------------------------------------------------------------------- | -------------- | ------------- |
| `archive-view`           | 0.66.0  | [atom/archive-view](https://github.com/atom/archive-view)                     | `762c5b6b2667` | none          |
| `autocomplete-atom-api`  | 0.10.7  | [atom/autocomplete-atom-api](https://github.com/atom/autocomplete-atom-api)   | `f772a3fa84ea` | none          |
| `autocomplete-css`       | 0.17.5  | [atom/autocomplete-css](https://github.com/atom/autocomplete-css)             | `53079283bfcd` | none          |
| `autocomplete-html`      | 0.8.8   | [atom/autocomplete-html](https://github.com/atom/autocomplete-html)           | `cee24674f32e` | none          |
| `autocomplete-plus`      | 2.42.4  | [atom/autocomplete-plus](https://github.com/atom/autocomplete-plus)           | `3bdb3f2b4ade` | none          |
| `autocomplete-snippets`  | 1.12.1  | [atom/autocomplete-snippets](https://github.com/atom/autocomplete-snippets)   | `2da0e23f6b4e` | none          |
| `autosave`               | 0.24.6  | [atom/autosave](https://github.com/atom/autosave)                             | `129cbb928535` | none          |
| `background-tips`        | 0.28.0  | [atom/background-tips](https://github.com/atom/background-tips)               | `e54189c74d92` | none          |
| `bookmarks`              | 0.46.0  | [atom/bookmarks](https://github.com/atom/bookmarks)                           | `35363fb36307` | none          |
| `bracket-matcher`        | 0.92.0  | [atom/bracket-matcher](https://github.com/atom/bracket-matcher)               | `d07c17c6a007` | none          |
| `command-palette`        | 0.43.5  | [atom/command-palette](https://github.com/atom/command-palette)               | `e8920c80c4e3` | none          |
| `encoding-selector`      | 0.23.9  | [atom/encoding-selector](https://github.com/atom/encoding-selector)           | `e445c690aeee` | none          |
| `find-and-replace`       | 0.219.8 | [atom/find-and-replace](https://github.com/atom/find-and-replace)             | `61fe02539f2a` | none          |
| `fuzzy-finder`           | 1.14.3  | [atom/fuzzy-finder](https://github.com/atom/fuzzy-finder)                     | `470978ca231c` | none          |
| `image-view`             | 0.64.0  | [atom/image-view](https://github.com/atom/image-view)                         | `4b5eb1091853` | none          |
| `keybinding-resolver`    | 0.39.1  | [atom/keybinding-resolver](https://github.com/atom/keybinding-resolver)       | `c65b0fb34547` | none          |
| `language-c`             | 0.60.19 | [atom/language-c](https://github.com/atom/language-c)                         | `af1e7f5ec8a2` | none          |
| `language-clojure`       | 0.22.8  | [atom/language-clojure](https://github.com/atom/language-clojure)             | `54cde5069ea4` | none          |
| `language-coffee-script` | 0.50.0  | [atom/language-coffee-script](https://github.com/atom/language-coffee-script) | `b76b47f7d3fc` | none          |
| `language-csharp`        | 1.1.0   | [atom/language-csharp](https://github.com/atom/language-csharp)               | `c2fea34f343b` | none          |
| `language-css`           | 0.45.1  | [atom/language-css](https://github.com/atom/language-css)                     | `01cfa5a2e6da` | none          |
| `language-gfm`           | 0.90.8  | [atom/language-gfm](https://github.com/atom/language-gfm)                     | `ce39df9b892a` | none          |
| `language-git`           | 0.19.1  | [atom/language-git](https://github.com/atom/language-git)                     | `738a90031421` | none          |
| `language-go`            | 0.47.2  | [atom/language-go](https://github.com/atom/language-go)                       | `16c8071aecf7` | none          |
| `language-html`          | 0.53.1  | [atom/language-html](https://github.com/atom/language-html)                   | `8ab471db6a9c` | none          |
| `language-hyperlink`     | 0.17.1  | [atom/language-hyperlink](https://github.com/atom/language-hyperlink)         | `96bda003585e` | none          |
| `language-java`          | 0.32.1  | [atom/language-java](https://github.com/atom/language-java)                   | `5f2f89060975` | none          |
| `language-javascript`    | 0.134.1 | [atom/language-javascript](https://github.com/atom/language-javascript)       | `c3443f016c07` | none          |
| `language-json`          | 1.0.5   | [atom/language-json](https://github.com/atom/language-json)                   | `98bf51be7145` | none          |
| `language-less`          | 0.34.3  | [atom/language-less](https://github.com/atom/language-less)                   | `4a1426a08d40` | none          |
