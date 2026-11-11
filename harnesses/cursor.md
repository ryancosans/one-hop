# Cursor

Cursor reads repository context from several places. Pick one approach.

## Recommended: root `AGENTS.md`

1. Copy or submodule [`assembled/AGENTS.md`](../assembled/AGENTS.md) to your repo root as `AGENTS.md`.
2. Append your project overlay from [`overlays/TEMPLATE.md`](../overlays/TEMPLATE.md).

Cursor’s agent treats `AGENTS.md` as always-applied workspace guidance (same family of doc as this package’s source rules).

## Optional: split rules under `.cursor/rules/`

For very large projects, copy individual files from `rules/` into `.cursor/rules/` as `.mdc` files. Keep frontmatter `description` short so the agent knows when each rule applies.

Example frontmatter for a Cursor rule file:

```yaml
---
description: Entry points delegate; logic lives one call away
globs: src/**/*.ts
alwaysApply: true
---
```

Paste the body from `rules/one-function-deep.md` (without the duplicate `---` block if you merge fields).

## Skills

Reference this repo from a skill with:

```markdown
## Standards

Read the consuming repo’s `AGENTS.md`. If it points here, read:
https://github.com/ryancosans/one-function-deep/blob/main/assembled/AGENTS.md
```

## Submodule

```bash
git submodule add https://github.com/ryancosans/one-function-deep.git docs/one-function-deep
ln -sf docs/one-function-deep/assembled/AGENTS.md AGENTS.md
```

Symlink keeps a single source of truth when you bump the submodule.
