# Changelog

All notable changes to Photon are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Working rules for Claude Code (`CLAUDE.md`) and Cursor (`.cursor/rules/photon-workflow.mdc`).
- Pre-commit hook (`.githooks/pre-commit`) that runs the linter and Prettier before every commit.
- GitHub issue templates (Feature, Bug, Task).
- `.nvmrc` and `engines` pin Node 24 for development.
- Vendored `tree-sitter` 0.17.1, `superstring` 2.4.4, `git-utils` 5.7.1 and `github` 0.36.10 into `packages/`, with fixes for the current macOS SDK.
- Imported the bundled Atom packages from archived `github.com/atom/*` repositories into `packages/`; origins are listed in `packages/VENDORED.md`.

### Changed

- Renamed the repository to `photon` and switched to git flow (`main` for releases, `develop` as the base and default branch).
- Switched the CHANGELOG to the Keep a Changelog format.
- `script/bootstrap` now requires Node 24 or newer.
- `script/bootstrap` installs dependencies with the system npm instead of the bundled apm, which cannot run on Apple Silicon. It requires Python 3.10 or newer.
- `packages/*` are npm workspaces; the `overrides` for the patched `superstring` and `git-utils` are no longer needed.
- The packaged app no longer contains packages that `package-lock.json` marks as development-only (about 210 MB smaller).
- Linting uses ESLint 10 with a flat config (`eslint.config.js`, `neostandard` without style rules) and Prettier 3; the existing formatting is kept (`trailingComma: none`, `arrowParens: avoid`).
- Stylesheets are linted with Stylelint 18 (`stylelint-config-standard` 41, `postcss-less`). Rules that misread Less or require CSS that Electron 11 does not support are off until the Electron upgrade.
- Build scripts use current `glob` 14, `yargs` 18, `semver` 7, `fs-extra` 11 and `terser` 5, and `minidump` 0.25 (the last version that installs without Yarn); the unused `mkdirp` dependency is gone.
- The bundled Atom packages in `packages/` are formatted with Prettier and linted with ESLint like the rest of the repository; only the vendored `github`, `git-utils`, `superstring` and `tree-sitter` keep their upstream style.

### Fixed

- find-and-replace: the button that adds trailing context lines in the project results no longer also toggles "Don't override tab".
- spell-check: debug logging no longer creates a global `debug` variable.
- The "Unable to watch path" notification for `config.cson` now includes the underlying error.

### Removed

- The bundled apm is no longer installed by `script/bootstrap` or packaged with the app.

## History

Photon is based on Atom 1.65.0-dev. Atom's release history up to 1.64 is at
https://github.com/atom/atom/releases.

[unreleased]: https://github.com/janwalenda/photon/compare/main...develop
