# AGENTS.md

<One sentence: what the project is and its stack.>

## Stack (fixed, do not change without asking)

- <language / framework>
- <tooling, CMS, database, deploy>

## Commands

- `<install>`
- `<dev>`
- `<build / test>`

## Layout

- `<dir>`: <what lives there>

## Conventions

- <rule that is not obvious from the code>
- No new dependencies outside the fixed stack without asking the user.
- No placeholder content such as "Lorem ipsum" in committed code. Use clearly marked TODOs or ask the user for real content.
- Do not invent data (numbers, metrics, names, quotes). If the user did not provide it, leave a TODO or ask.

## Gotchas

- <thing that is easy to break>

## Tests and formatting

- Before calling a task done, run `<test command>`.
- For new logic without UI (helpers, rules), add a colocated test modeled on the existing ones.
- The formatter (`<command>`) is the source of truth for style. Run it before committing. The linter does not duplicate style rules.
- Optional: a commit-msg hook (commitlint) enforces Conventional Commits instead of relying on documentation alone.

## Deploy and CI

- Treat a red CI the same as a red build: do not merge.
- Tests that do not run in the host's build (unit, e2e) must run in CI as a required check on PRs.
- Dependabot opens PRs for updates. They need user review; never merge automatically.
- Environment variables are set in the host's dashboard (per environment), not in the repo. `.env.example` is only a template for local dev.

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
