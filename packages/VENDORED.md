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
| `language-make`          | 0.23.0  | [atom/language-make](https://github.com/atom/language-make)                   | `498cbe10cbb4` | none          |
| `language-mustache`      | 0.14.5  | [atom/language-mustache](https://github.com/atom/language-mustache)           | `ea735f51e3f7` | none          |
| `language-objective-c`   | 0.16.0  | [atom/language-objective-c](https://github.com/atom/language-objective-c)     | `1c490d387602` | none          |
| `language-perl`          | 0.38.1  | [atom/language-perl](https://github.com/atom/language-perl)                   | `c3f8900382f7` | none          |
| `language-php`           | 0.48.1  | [atom/language-php](https://github.com/atom/language-php)                     | `36a073b084be` | none          |
| `language-property-list` | 0.9.1   | [atom/language-property-list](https://github.com/atom/language-property-list) | `d2abd7d9ada8` | none          |
| `language-python`        | 0.53.6  | [atom/language-python](https://github.com/atom/language-python)               | `fd7182548b88` | none          |
| `language-ruby`          | 0.73.0  | [atom/language-ruby](https://github.com/atom/language-ruby)                   | `a8df7251b304` | none          |
| `language-ruby-on-rails` | 0.25.3  | [atom/language-ruby-on-rails](https://github.com/atom/language-ruby-on-rails) | `c51d37c2c14e` | none          |
| `language-sass`          | 0.62.1  | [atom/language-sass](https://github.com/atom/language-sass)                   | `32ee25fa7828` | none          |
| `language-shellscript`   | 0.28.2  | [atom/language-shellscript](https://github.com/atom/language-shellscript)     | `b4e945380ecd` | none          |
| `language-source`        | 0.9.0   | [atom/language-source](https://github.com/atom/language-source)               | `cb2798ff79ae` | none          |
| `language-sql`           | 0.25.10 | [atom/language-sql](https://github.com/atom/language-sql)                     | `8ad4e7508513` | none          |
| `language-text`          | 0.7.4   | [atom/language-text](https://github.com/atom/language-text)                   | `28e0690ebd5d` | none          |
| `language-todo`          | 0.29.4  | [atom/language-todo](https://github.com/atom/language-todo)                   | `18859d1201f7` | none          |
| `language-toml`          | 0.20.0  | [atom/language-toml](https://github.com/atom/language-toml)                   | `83510d0cd34a` | none          |
| `language-typescript`    | 0.6.3   | [atom/language-typescript](https://github.com/atom/language-typescript)       | `08eb09967453` | none          |
| `language-xml`           | 0.35.3  | [atom/language-xml](https://github.com/atom/language-xml)                     | `c5d2003b4613` | none          |
| `language-yaml`          | 0.32.0  | [atom/language-yaml](https://github.com/atom/language-yaml)                   | `f8d98ba7d651` | none          |
| `markdown-preview`       | 0.160.2 | [atom/markdown-preview](https://github.com/atom/markdown-preview)             | `c6df136f67f4` | none          |
| `metrics`                | 1.8.1   | [atom/metrics](https://github.com/atom/metrics)                               | `d35d0345cac8` | none          |
| `notifications`          | 0.72.1  | [atom/notifications](https://github.com/atom/notifications)                   | `47da1756c8ca` | none          |
| `open-on-github`         | 1.3.2   | [atom/open-on-github](https://github.com/atom/open-on-github)                 | `c12ffbefcb79` | none          |
| `package-generator`      | 1.3.0   | [atom/package-generator](https://github.com/atom/package-generator)           | `5c45f8007153` | none          |
| `settings-view`          | 0.261.8 | [atom/settings-view](https://github.com/atom/settings-view)                   | `94418d66db1b` | none          |
| `snippets`               | 1.5.1   | [atom/snippets](https://github.com/atom/snippets)                             | `e8e6b895a7af` | none          |
| `spell-check`            | 0.77.1  | [atom/spell-check](https://github.com/atom/spell-check)                       | `df4dfebdf55c` | none          |
| `status-bar`             | 1.8.17  | [atom/status-bar](https://github.com/atom/status-bar)                         | `4edfaa891b5c` | none          |
| `styleguide`             | 0.49.12 | [atom/styleguide](https://github.com/atom/styleguide)                         | `aa4f682f402f` | none          |
| `symbols-view`           | 0.118.4 | [atom/symbols-view](https://github.com/atom/symbols-view)                     | `36c4dd4c5a89` | none          |
