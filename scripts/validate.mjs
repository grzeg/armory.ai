#!/usr/bin/env node
// Validates the toolkit: skill frontmatter and JSON files. No dependencies.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const errors = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);

// Reads the `key: value` lines between the opening and closing `---`.
function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, "");
  }
  return data;
}

// skills/<name>/SKILL.md must exist and have a matching `name` and a `description`.
function checkSkills() {
  const dir = join(root, "skills");
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const skillDir = join(dir, name);
    if (!statSync(skillDir).isDirectory()) continue; // skips skills/README.md
    const rel = `skills/${name}/SKILL.md`;
    const file = join(skillDir, "SKILL.md");
    if (!existsSync(file)) {
      fail(rel, "missing SKILL.md");
      continue;
    }
    const fm = parseFrontmatter(readFileSync(file, "utf8"));
    if (!fm) fail(rel, "missing frontmatter (--- block at top)");
    else {
      if (!fm.name) fail(rel, "frontmatter needs `name`");
      else if (fm.name !== name) fail(rel, `name "${fm.name}" must equal folder "${name}"`);
      if (!fm.description) fail(rel, "frontmatter needs `description`");
    }
  }
}

// Every *.json under settings/ must parse.
function checkJson() {
  const dir = join(root, "settings");
  if (!existsSync(dir)) return;
  const walk = (d) => {
    for (const entry of readdirSync(d)) {
      const p = join(d, entry);
      if (statSync(p).isDirectory()) walk(p);
      else if (extname(p) === ".json") {
        try {
          JSON.parse(readFileSync(p, "utf8"));
        } catch (e) {
          fail(p.slice(root.length), `invalid JSON (${e.message})`);
        }
      }
    }
  };
  walk(dir);
}

checkSkills();
checkJson();

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join("\n"));
  process.exit(1);
}
console.log("✓ skills and settings valid");
