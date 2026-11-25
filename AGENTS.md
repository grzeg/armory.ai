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

## Scope and boundaries

- Do not publish (deploy, push to a remote) without the user's explicit approval for that step.
- Do not change the fixed stack, structure or project rules without asking. Those are the user's decisions, not the agent's.
- When content is unclear (numbers, names, photos), ask the user instead of guessing.

When to decide yourself and when to ask:

- **Decide yourself, no question needed**: commit message text, branch names, small code conventions (formatting, variable and file names) within the fixed stack.
- **Ask when there is more than one reasonable approach**: choice of a specific pattern, library or approach within the fixed stack (e.g. how to split a file into modules). If there is no single obvious solution, stop and ask instead of guessing.

## Model routing (AI agent)

- Boilerplate, tests, mechanical renames and refactors: a cheap, fast model is enough.
- Architecture decisions, routing, integrations, anything where a mistake is costly: a stronger model.

## Agent communication style

- In chat: concise, no filler, no pleasantries. Substance, not fluff. This does not apply to code, commits and PR descriptions, which always use full, correct language.
- Never shorten at the expense of technical content: numbers, file names and exact commands always stay.

## Commit messages

- Convention: [Conventional Commits](https://www.conventionalcommits.org/) with prefixes `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`, `ci:`. Subject in English, imperative mood, no trailing period.
- Add a body only when the "why" is not obvious from the diff (do not describe the "what"; the code shows it).
- The `/caveman-commit` skill generates messages in the same format (Conventional Commits, ultra-compressed). Use it freely; it implements this convention faster, it does not replace it.
