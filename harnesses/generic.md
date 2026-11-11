# Generic harness

Any tool that accepts **markdown instructions** or a **repository context file** can use this package.

## Full rules

Ship [`assembled/AGENTS.md`](../assembled/AGENTS.md) as `AGENTS.md`, `CONTRIBUTING.md`, or paste into the agent’s “project instructions” field.

## Compact rules

Run:

```bash
./tools/compose.sh --prompt
```

Use [`system-prompt.txt`](./system-prompt.txt) when token budget is tight.

## Modular rules

Point the harness at individual files in `rules/` if it supports multiple context files. Order should follow `manifest.yaml`.

## Versioning

Pin a git tag or submodule commit in your consumer repo so agent behavior does not drift when `main` updates.
