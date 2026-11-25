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
