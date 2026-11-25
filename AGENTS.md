# AGENTS.md

armory.ai: personal toolkit for AI work (skills, agents, commands, settings, templates, notes). Mostly Markdown and JSON, no build step.

## Commands

- `node scripts/validate.mjs`: checks skill frontmatter (`name` matches folder, `description` present) and JSON in `settings/`. CI also runs markdownlint, lychee (links) and gitleaks.

## Layout

- `skills/<name>/SKILL.md`: skills
- `agents/`, `commands/`: subagents and slash commands
- `settings/`: reusable `settings.json` fragments
- `templates/`: files to copy into other repos
- `notes/`: dated notes and experiments
- `scripts/`: repo tooling (`validate.mjs`)
- `assets/`: README artwork

## Conventions

- Docs and file names in English.
- Add an item only after the second time it is needed.
- Every folder has a short `README.md` saying what goes there.

## Gotchas

- Never commit secrets, tokens or machine-specific paths; use git-ignored `*.local.*` files.
- `templates/` files are copied elsewhere, so keep them generic (placeholders in `<angle brackets>`).

## Zakres i granice

- Nie publikuj (deploy, push do zdalnego repo) bez wyraźnej zgody usera na dany krok.
- Nie zmieniaj ustalonego stacku, struktury ani zasad projektu bez pytania — to decyzje usera, nie agenta.
- Przy niejasności co do treści (dane liczbowe, nazwy, zdjęcia) — pytaj usera, nie zgaduj.

Kiedy decydować samemu, a kiedy pytać:

- **Decyduj sam, bez pytania**: treść commit message, nazwy branchy, drobne konwencje kodu (formatowanie, nazwy zmiennych/plików) w ramach ustalonego stacku.
- **Pytaj, gdy jest więcej niż jedno rozsądne podejście**: wybór konkretnego wzorca/biblioteki/podejścia w ramach ustalonego stacku (np. jak rozbić plik na moduły) — jeśli nie ma jednego oczywistego rozwiązania, zatrzymaj się i zapytaj zamiast zgadywać.

## Model routing (agent AI)

- Boilerplate, testy, mechaniczne rename/refaktor — tani/szybki model wystarcza.
- Decyzje architektoniczne, routing, integracje, cokolwiek o dużym koszcie błędu — mocniejszy model.

## Styl komunikacji agenta

- W czacie: zwięźle, bez lania wody, bez grzecznościowych zwrotów — meritum, nie fluff. Nie dotyczy kodu, commitów i opisów PR — te zawsze pełnym, poprawnym językiem.
- Nie skracaj kosztem treści technicznej — liczby, nazwy plików, konkretne komendy zawsze zostają.

## Commit messages

- Konwencja: [Conventional Commits](https://www.conventionalcommits.org/) — prefiks `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`, `ci:`. Subject po angielsku, tryb rozkazujący, bez kropki na końcu.
- Body tylko gdy "why" nieoczywiste z samego diffu (nie opisuj "co" — to widać w kodzie).
- Skill `/caveman-commit` generuje message w tym samym formacie (Conventional Commits, ultra-skompresowany) — użyj go swobodnie, nie zastępuje tej konwencji, tylko ją realizuje szybciej.
