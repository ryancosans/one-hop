# OpenAI Codex / cloud agents

Many harnesses accept:

- A repo-level `AGENTS.md` (GitHub Codex, Cursor Cloud Agents, similar products)
- A user or environment **custom instruction** block

## Repository doc

Commit [`assembled/AGENTS.md`](../assembled/AGENTS.md) as `AGENTS.md` at the repository root. Add your product-specific sections at the bottom.

## Environment / custom instructions

Paste the contents of [`system-prompt.txt`](./system-prompt.txt) (generate with `./tools/compose.sh --prompt`) into the harness “custom instructions” or “agent rules” field when you cannot rely on repo files.

## CI annotation (optional)

Some teams add a one-line pointer in `README.md`:

```markdown
**Agent rules:** see [AGENTS.md](AGENTS.md) (layering based on [one-function-deep](https://github.com/ryancosans/one-function-deep)).
```
