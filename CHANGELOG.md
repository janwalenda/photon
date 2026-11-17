# Changelog

All notable changes to Photon are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Working rules for Claude Code (`CLAUDE.md`) and Cursor (`.cursor/rules/photon-workflow.mdc`).
- Pre-commit hook (`.githooks/pre-commit`) that runs the linter and Prettier before every commit.
- GitHub issue templates (Feature, Bug, Task).

### Changed

- Renamed the repository to `photon` and switched to git flow (`main` for releases, `develop` as the base).
- Switched the CHANGELOG to the Keep a Changelog format.

## History

Photon is based on Atom 1.65.0-dev. Atom's release history up to 1.64 is at
https://github.com/atom/atom/releases.

[unreleased]: https://github.com/janwalenda/photon/compare/main...develop
