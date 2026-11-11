---
id: guardrails
title: Guardrails
tags: [process]
---

## Out of scope without updating the architecture doc

Treat these as **constitution-level** changes — update `DESIGN.md` (or equivalent) before implementing:

- Runtime or platform switches without a deliberate migration plan.
- Heavy frameworks on paths that are intentionally minimal today.
- New persistence layers or server-side session stores when the product is client-held state.
- Deep configuration systems or indirection layers the project does not need yet.
