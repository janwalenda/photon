# Photon – Arbeitsregeln

Photon ist ein eigenständiges Projekt auf Basis eines Atom-Forks, mit eigenen neuen Features.
Repo: https://github.com/janwalenda/photon

> Dieselben Regeln stehen für Cursor in `.cursor/rules/photon-workflow.mdc`.
> Wer eine der beiden Dateien ändert, ändert die andere mit.

## Branching: git flow

- `main`: nur veröffentlichte Releases, jeder Merge wird getaggt (`v<version>`).
- `develop`: Integrationsbranch und Basis für alle Arbeit.
- `feature/<name>`: neue Funktionen, von `develop`, zurück nach `develop`.
- `bugfix/<name>`: Fehlerbehebungen für `develop`, von `develop`, zurück nach `develop`.
- `release/<version>`: Release-Vorbereitung, von `develop`, nach `main` und `develop`.
- `hotfix/<version>`: dringende Fehler in einem Release, von `main`, nach `main` und `develop`.
- `support/<name>`: Pflege älterer Versionen, von `main`.

Benutze die `git flow`-Befehle (git-flow AVH, Konfiguration liegt in `.git/config`):

```sh
git flow feature start <name>     # git flow feature finish <name>
git flow bugfix start <name>
git flow release start <version>
git flow hotfix start <version>
```

Niemals direkt auf `main` oder `develop` committen. Änderungen landen per Pull Request
(Ziel `develop`, bei Releases und Hotfixes zusätzlich `main`).

## Code-Standards

- Vor **jedem** Commit laufen Linter und Prettier:
  - `node script/lint` (ESLint mit Prettier-Plugin, CoffeeLint, Stylelint)
  - `node script/lint --fix` behebt automatisch, was möglich ist.
- Der Pre-Commit-Hook in `.githooks/pre-commit` erzwingt das. Einmal pro Klon aktivieren:
  `git config core.hooksPath .githooks`
- Prettier-Konfiguration: `.prettierrc`. ESLint-Konfiguration: `.eslintrc.json`.
- Den Hook nicht mit `--no-verify` umgehen.

## CHANGELOG

- `CHANGELOG.md` folgt [Keep a Changelog](https://keepachangelog.com/de/1.1.0/) und SemVer.
- Jede nutzerrelevante Änderung kommt im selben Branch unter `## [Unreleased]` in die passende
  Rubrik (`Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`).
- Beim Release (`release/*`, `hotfix/*`) wird `Unreleased` in die neue Versionsnummer mit Datum umbenannt.

## Dokumentation in Notion

Bereich „Photon“: https://app.notion.com/p/41ba3c986bc98107a990e81cc28112a1

- **Pläne** (https://app.notion.com/p/41ba3c986bc981339bafebbdf1bc3182): jeder Plan bekommt
  einen Eintrag, bevor die Umsetzung beginnt; Status wird beim Umsetzen gepflegt.
- **Arbeitsprotokoll** (https://app.notion.com/p/41ba3c986bc9816d9bcbcca1c9ddcbae): jede Änderung
  bekommt einen Eintrag mit Typ, Status, Branch, PR, Datum und Beschreibung.

## Pull Requests und Verhalten

- PRs folgen `PULL_REQUEST_TEMPLATE.md`: passendes Template wählen (Bugfix, Performance, Docs,
  Verhalten) und alle Abschnitte ausfüllen.
- Es gilt `CODE_OF_CONDUCT.md` (Contributor Covenant 1.4).

## Checkliste pro Änderung

1. Plan in Notion anlegen (bei mehr als einer Kleinigkeit).
2. Passenden git-flow-Branch starten.
3. Umsetzen, `CHANGELOG.md` unter `Unreleased` ergänzen.
4. `node script/lint` ausführen, Fehler beheben, committen.
5. PR nach Template öffnen, Eintrag im Arbeitsprotokoll anlegen bzw. aktualisieren.
