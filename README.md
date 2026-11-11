# One function deep

**Agent-agnostic coding discipline** for human and automated contributors: thin entry points, logic one call away, no pointless wrappers, and project-specific overlays when you need them.

These rules came out of real production use on [Aesop](https://github.com/ryancosans/aesop). The core ideas transfer to any stack; only examples and overlays are language- or product-specific.

## Quick start

| Harness | What to add |
|--------|----------------|
| **Any agent with a repo root doc** | Copy [`assembled/AGENTS.md`](assembled/AGENTS.md) into your repo, or symlink it. |
| **Cursor** | Same as above, or split with [`harnesses/cursor.md`](harnesses/cursor.md). |
| **Claude Code** | Point `CLAUDE.md` at the core doc or use [`harnesses/claude-code.md`](harnesses/claude-code.md). |
| **Custom system prompt** | Paste from [`harnesses/system-prompt.txt`](harnesses/system-prompt.txt). |
| **CI / lint (optional)** | See [`tools/compose.sh`](tools/compose.sh) to build one file from modules. |

## Layout

```
rules/           # Small, composable rule modules (source of truth)
assembled/       # Pre-built AGENTS.md for drop-in use
harnesses/       # How to wire modules into each environment
examples/        # Generic before/after code samples
overlays/        # Patterns for project-specific sections
manifest.yaml    # Machine-readable list of modules and harness hints
```

Edit **`rules/`** when the discipline evolves. Re-run `./tools/compose.sh` to refresh **`assembled/AGENTS.md`** and harness snippets.

## Composing rules

```bash
./tools/compose.sh              # writes assembled/AGENTS.md
./tools/compose.sh --prompt     # writes harnesses/system-prompt.txt (compact)
```

Each file under `rules/` has YAML frontmatter (`id`, `title`, `tags`) so future tooling can subset rules (e.g. only `layering` + `typescript`).

## Project overlay

Keep **universal** rules in this package (or a submodule). Keep **your product** in a short overlay next to your code:

- `DESIGN.md` — architecture constitution
- A “Project summary” section appended to `AGENTS.md` (see [`overlays/TEMPLATE.md`](overlays/TEMPLATE.md))

Example consumer: Aesop’s repo keeps game-specific layout in its own `AGENTS.md` and links to the shared layering rules.

## License

MIT — see [LICENSE](LICENSE).
