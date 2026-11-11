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
git submodule add https://github.com/ryancosans/one-hop.git .agent/one-hop
ln -sf .agent/one-hop/assembled/AGENTS.md AGENTS.md
```

## Compact mode

For a smaller context window, point at selected modules only:

```markdown
Layering rules: `.agent/one-hop/rules/one-hop.md`
Change discipline: `.agent/one-hop/rules/agent-implementation-discipline.md`
```
