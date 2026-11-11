<p align="center">
  <img src="assets/logo.jpg" alt="One hop — a document character leaping one arc: no matryoshka call stacks" width="420" />
</p>

# One hop

**No matryoshka call stacks.**

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

Thin entry points. Logic **one hop** away — for human and automated contributors. Drop in `AGENTS.md`, wire your harness, and add a project overlay when you need product-specific rules.

**Free to use:** copy these rules into your repos, agent prompts, and internal docs at no cost — including commercial work. See [License](#license) below.

These rules came out of real production use on [Aesop](https://github.com/ryancosans/aesop). The core ideas transfer to any stack; [`examples/`](examples/README.md) and overlays are language- or product-specific.

## Quick start

| Harness | What to add |
|--------|----------------|
| **Any agent with a repo root doc** | Copy [`assembled/AGENTS.md`](assembled/AGENTS.md) into your repo, or symlink it. |
| **Cursor** | Same as above, or split with [`harnesses/cursor.md`](harnesses/cursor.md). |
| **Claude Code** | Point `CLAUDE.md` at the core doc or use [`harnesses/claude-code.md`](harnesses/claude-code.md). |
| **Custom system prompt** | Paste from [`harnesses/system-prompt.txt`](harnesses/system-prompt.txt). |
| **GitHub Codex / cloud agents** | Same as root `AGENTS.md`, or paste `system-prompt.txt` when repo context is unavailable. |
| **CI / lint (optional)** | See [`tools/compose.sh`](tools/compose.sh) to build one file from modules. |

## Layout

```
rules/           # Small, composable rule modules (source of truth)
assembled/       # Pre-built AGENTS.md for drop-in use
harnesses/       # How to wire modules into each environment
examples/        # Before/after code samples (see examples/README.md)
overlays/        # Patterns for project-specific sections
manifest.yaml    # Machine-readable list of modules and harness hints
```

## Examples

See [`examples/README.md`](examples/README.md) for allowed vs not-allowed TypeScript snippets (entries, orchestrators, wrappers, and nested chains).

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

Example consumer: Aesop’s repo keeps game-specific layout in its own `AGENTS.md` and links to the shared one-hop rules.

## License

**[MIT License](LICENSE)** — Copyright (c) Ryan Cosans

You may use, copy, modify, merge, publish, distribute, sublicense, and sell this material **free of charge**, including in commercial products and client work. The only requirement is that the copyright notice and license text stay with copies or substantial portions you share.

There is no warranty; the rules are provided as-is. Full legal text is in [`LICENSE`](LICENSE).
