<p align="center">
  <img src="assets/banner.jpg" alt="Cyberpunk armory: racks of custom weapons and ammo under neon light" width="100%">
</p>

<h1 align="center">armory.ai</h1>

<p align="center">
  <em>"Guns. Lots of guns."</em><br>
  My personal AI toolkit: skills, agents, settings, templates, notes.
</p>

<p align="center">
  <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-00e5ff?style=flat-square">
  <img alt="Made for Claude Code" src="https://img.shields.io/badge/made%20for-Claude%20Code-ff2d6f?style=flat-square">
  <img alt="Status: work in progress" src="https://img.shields.io/badge/status-loading...-8a2be2?style=flat-square">
</p>

---

Like the armory in The Matrix: the place I come back to before a mission, pick what I need and load it.

## Loadout

| Folder | What lives there |
|---|---|
| [`skills/`](skills) | Reusable procedures (`skills/<name>/SKILL.md`) |
| [`agents/`](agents) | Subagent definitions |
| [`commands/`](commands) | Slash commands |
| [`settings/`](settings) | `settings.json` fragments: permissions, hooks, env |
| [`templates/`](templates) | `AGENTS.md` / `CLAUDE.md` to copy into new repos |
| [`notes/`](notes) | Dated experiments: models, costs, what worked |

## Using it

Copy what you need into a project, or link a folder into `~/.claude/` so this repo stays the single source of truth.

```bash
# new project: start from the templates
cp templates/AGENTS.md templates/CLAUDE.md /path/to/project/

# global skill: symlink instead of copying
ln -s "$PWD/skills/<name>" ~/.claude/skills/<name>
```

## Rules of the armory

- Add an item only when it is needed a second time.
- No secrets, tokens or machine-specific paths. Local overrides live in git-ignored `*.local.*` files.
- Notes are dated; they age better than memory.

## License

[MIT](LICENSE)
