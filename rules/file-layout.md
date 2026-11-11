---
id: file-layout
title: File layout for shallow call stacks
tags: [layering, filesystem]
---

### File layout for this rule

| Layer | Role | Typical location |
|-------|------|------------------|
| Entry | One call, or sequential calls with early return | `src/server/`, `cmd/`, route files |
| Step | Logic for one concern | next to domain code, one concern per file |
| Orchestrator | Sequences steps only — no business logic | domain `handle-*-request` style files |

**One file per exported function.** File name matches the function name (kebab-case file → camelCase or named export per your language conventions).

Avoid generic buckets (`services/`, `controllers/`, `utils/` catch-alls) until the project genuinely outgrows a flat layout.

**Client mirrors server (optional):** If the UI has no bundler, use the same rule: one action or step per file; entry file only wires listeners and delegates.
