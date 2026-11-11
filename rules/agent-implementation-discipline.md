---
id: agent-implementation-discipline
title: Implementation discipline (agents and humans)
tags: [agents, process]
---

## When implementing changes

These apply especially to automated agents; humans benefit too.

1. **Minimize scope** — Smallest correct diff. Do not touch unrelated code.
2. **Avoid over-engineering** — No one-line helpers, no deep abstraction for a single call site.
3. **Use existing conventions** — Read surrounding code; match naming, types, and layout.
4. **Comments** — Only for non-obvious business or performance constraints.
5. **Tests** — Add them when requested or when they cover real behavior; skip trivial assertions.

When the task is **question-only** or **review-only**, do not edit code unless asked.
