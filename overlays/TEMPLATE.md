# Project overlay template

Append this **below** the shared rules in your repo’s `AGENTS.md`. Replace placeholders. For a filled-in example, see [`aesop.md`](aesop.md).

---

## Project summary

- **Stack:** _e.g. Bun, TypeScript_
- **Priority:** _e.g. speed, low memory_
- **Entry:** _e.g. `server.ts`_
- **Client:** _e.g. `public/app.js`_

## Before making changes (project)

1. Read [`DESIGN.md`](DESIGN.md).
2. _Domain-specific checklist — e.g. shared beat shape, API contract._
3. Extend existing patterns in `src/...` before new abstractions.

## File placement

| What | Where |
|------|-------|
| _Routing_ | _path_ |
| _Domain logic_ | _path_ |
| _Shared types_ | _path_ |

## Commands

```bash
# install, dev, test, prod
```

## Domain change checklist

_When you change a cross-cutting type or API: list files that must move together._

## Out of scope without updating DESIGN.md

_Bullets specific to this product._
