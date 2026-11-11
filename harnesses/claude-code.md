# Claude Code

Claude Code loads **`CLAUDE.md`** from the repo root (and parent directories).

## Setup

```markdown
# CLAUDE.md

Follow the coding discipline in [AGENTS.md](./AGENTS.md).

@AGENTS.md
```

Place `AGENTS.md` in the root — use the composed file from this package plus your overlay.

## Submodule

```bash
git submodule add https://github.com/ryancosans/one-function-deep.git .agent/one-function-deep
ln -sf .agent/one-function-deep/assembled/AGENTS.md AGENTS.md
```

## Compact mode

For a smaller context window, point at selected modules only:

```markdown
Layering rules: `.agent/one-function-deep/rules/one-function-deep.md`
Change discipline: `.agent/one-function-deep/rules/agent-implementation-discipline.md`
```
