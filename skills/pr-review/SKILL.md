---
name: pr-review
description: Review a frontend PR or the current diff (React/TypeScript) for logic bugs, React and performance issues, accessibility, tests and types. Use when asked to review a PR, branch, diff or changed files. Reports in the terminal; never posts to GitHub.
---

# PR review (React / TypeScript)

Review the change as a senior frontend engineer. Report problems only: no praise, no filler.

## 1. Get the change

- PR number or URL: `gh pr diff <n>` and `gh pr view <n>`.
- Branch: `git diff <base>...<branch>`.
- Nothing given: `git diff` plus staged changes against the default branch.
- Skip generated files, lockfiles and snapshots unless they look wrong.

## 2. Run the project checks

Read the commands from `AGENTS.md` (fall back to `package.json` scripts). Run type check, lint and tests if they exist and are cheap. Attach failures to the report. If no commands are documented, say so and continue with the diff only.

## 3. Review by risk, not by file order

On a large diff, start with the riskiest code (business logic, state, async, data flow, server/client boundaries), then everything else, cosmetics last. If the PR is too large to review well, say so and suggest how to split it before continuing.

Check, in this order:

1. **Correctness**: edge cases, race conditions, error handling, loading / empty / error states, data loss.
2. **React**:
   - `useEffect` used where it is not needed (derived state, fetch in effect, syncing state instead of computing in render)
   - stale closures and missing or wrong dependencies
   - bad `key` (index keys), unstable object / function references breaking memoization
   - server / client boundaries: needless `"use client"`, server code leaking to the client, hydration mismatch (browser-only values read during render)
3. **Performance**: re-renders, bundle size (heavy imports), waterfalls, layout shift.
4. **Accessibility**: semantic HTML, keyboard support, focus, labels, contrast, ARIA misuse.
5. **Security**: XSS, `dangerouslySetInnerHTML`, secrets in client code, unvalidated input.
6. **Tests and types**: new logic without a test, tests that assert nothing, `any`, unsafe `as`, `@ts-ignore`.

Only report what you can point to in the diff. If unsure, say what you could not verify instead of asserting.

## 4. Severity

- **blocker** (blocks merge): a bug or data loss, a security issue, an accessibility regression on key elements, new business logic without a test.
- **important**: should be fixed, but does not break behavior now.
- **nit**: style or preference. Keep to a few, and skip what the formatter or linter already enforces.

## 5. Output

Terminal only. Do not post comments to GitHub, push, or edit files unless the user asks.

```text
Summary: <one line: scope and overall verdict>
Checks: tsc ✓ | lint ✗ (3) | tests ✓   (or "not run: <reason>")

BLOCKER
- path/to/file.tsx:42 <problem>. Why it matters. Suggested fix.

IMPORTANT
- ...

NIT
- ...
```

Omit empty sections. Every finding has `file:line`. End with the questions you could not answer from the diff, if any.
