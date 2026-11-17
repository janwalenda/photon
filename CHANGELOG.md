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

### Changed

- Renamed the repository to `photon` and switched to git flow (`main` for releases, `develop` as the base and default branch).
- Switched the CHANGELOG to the Keep a Changelog format.
- `script/bootstrap` now requires Node 24 or newer.
- `script/bootstrap` installs dependencies with the system npm instead of the bundled apm, which cannot run on Apple Silicon. It requires Python 3.10 or newer.

### Removed

- The bundled apm is no longer installed by `script/bootstrap` or packaged with the app.

## History

Photon is based on Atom 1.65.0-dev. Atom's release history up to 1.64 is at
https://github.com/atom/atom/releases.

[unreleased]: https://github.com/janwalenda/photon/compare/main...develop
