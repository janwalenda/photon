# Photon – Working Rules

Photon is an independent project built on a fork of Atom, with its own new features.
Repo: https://github.com/janwalenda/photon

> The same rules are in `.cursor/rules/photon-workflow.mdc` for Cursor.
> When you change one of the two files, change the other as well.

## Language

All docs, notes, commit messages, issues, PRs and Notion entries are written in English.

## Project management: GitHub Issues

- Every piece of work starts as an issue: https://github.com/janwalenda/photon/issues
- Use the issue templates (Feature, Bug, Task) and labels:
  - Type: `enhancement`, `bug`, `chore`, `documentation`, `hotfix`, `release`
  - Area: `area: branding`, `area: build`, `area: editor`, `area: workflow`
  - `plan`: needs a plan in Notion before work starts
- Branch names start with the issue number: `feature/<issue>-<short-name>`, e.g. `feature/3-rebrand-photon`.
- Commits and PRs reference the issue (`Refs #3`, in the PR `Closes #3`).
- `develop` is the default branch on GitHub, so `Closes #n` closes the issue when the PR is
  merged into `develop`, and new PRs target `develop` by default.

## Branching: git flow

- `main`: published releases only; every merge is tagged (`v<version>`).
- `develop`: integration branch, base for all work, and default branch on GitHub.
- `feature/<name>`: new features, from `develop`, back into `develop`.
- `bugfix/<name>`: fixes for `develop`, from `develop`, back into `develop`.
- `release/<version>`: release preparation, from `develop`, into `main` and `develop`.
- `hotfix/<version>`: urgent fixes for a release, from `main`, into `main` and `develop`.
- `support/<name>`: maintenance of older versions, from `main`.

Use the `git flow` commands (git-flow AVH; the configuration lives in `.git/config`):

```sh
git flow feature start <issue>-<name>     # git flow feature finish <issue>-<name>
git flow bugfix start <issue>-<name>
git flow release start <version>
git flow hotfix start <version>
```

AI agents (Claude Code, Cursor) always commit with the author and committer email
`log@janwalenda.de`, without changing the repo's git config:

```sh
GIT_AUTHOR_EMAIL=log@janwalenda.de GIT_COMMITTER_EMAIL=log@janwalenda.de git commit ...
```

Never commit directly to `main` or `develop`. Changes land through pull requests
(target `develop`; releases and hotfixes also target `main`).

## Code standards

- Linter and Prettier run before **every** commit:
  - `node script/lint` (ESLint with the Prettier plugin, CoffeeLint, Stylelint)
  - `node script/lint --fix` fixes what it can automatically.
- The pre-commit hook in `.githooks/pre-commit` enforces this. Enable it once per clone:
  `git config core.hooksPath .githooks`
- Prettier configuration: `.prettierrc`. ESLint configuration: `.eslintrc.json`.
- Do not bypass the hook with `--no-verify`.

## CHANGELOG

- `CHANGELOG.md` follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and SemVer.
- Every user-relevant change goes under `## [Unreleased]` in the same branch, in the matching
  section (`Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`).
- On release (`release/*`, `hotfix/*`), rename `Unreleased` to the new version with its date.

## Documentation in Notion

Space "Photon": https://app.notion.com/p/41ba3c986bc98107a990e81cc28112a1

- **Plans** (https://app.notion.com/p/41ba3c986bc981339bafebbdf1bc3182): every plan gets an entry
  before work starts, linked to its issue; keep the status current while implementing.
- **Work Log** (https://app.notion.com/p/41ba3c986bc9816d9bcbcca1c9ddcbae): every change gets an
  entry with type, status, branch, issue, PR, date and description.

## Pull requests and conduct

- PRs follow `PULL_REQUEST_TEMPLATE.md`: pick the matching template (bug fix, performance, docs,
  behavior change) and fill in every section.
- `CODE_OF_CONDUCT.md` (Contributor Covenant 1.4) applies.

## Checklist per change

1. Open or pick an issue; for anything beyond a small fix, write a plan in Notion and link it.
2. Start the matching git flow branch with the issue number.
3. Implement, add an entry under `Unreleased` in `CHANGELOG.md`.
4. Run `node script/lint`, fix errors, commit with `Refs #<issue>`.
5. Open a PR following the template (`Closes #<issue>`), add or update the Work Log entry.
6. After merging, check that the issue was closed and set the plan and Work Log entry to done.
