# Changelog

Alle nennenswerten Änderungen an Photon werden in dieser Datei festgehalten.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.1.0/),
und das Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

### Added

- Arbeitsregeln für Claude Code (`CLAUDE.md`) und Cursor (`.cursor/rules/photon-workflow.mdc`).
- Pre-Commit-Hook (`.githooks/pre-commit`), der Linter und Prettier vor jedem Commit ausführt.

### Changed

- Repository in `photon` umbenannt; Workflow auf git flow umgestellt (`main` für Releases, `develop` als Basis).
- CHANGELOG auf das Format „Keep a Changelog“ umgestellt.

## Historie

Photon basiert auf Atom 1.65.0-dev. Die Release-Historie von Atom bis 1.64 steht unter
https://github.com/atom/atom/releases.

[unreleased]: https://github.com/janwalenda/photon/compare/main...develop
