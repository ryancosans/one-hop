---
id: readme
title: Working in this repository
---

# Working in this repository

These standards apply to **everyone** in the repo — human or automated.

**Before making changes**

1. Read the project’s architecture doc (often `DESIGN.md` or `ARCHITECTURE.md`) if it exists.
2. Check whether the change crosses a **shared contract** (types, API shape, client/server agreement).
3. Extend existing patterns before introducing new ones.
4. If the change runs on **every request** (or every frame, every tick), it must be fast.

Add a **project-specific** section after the shared rules (stack, directories, commands). See [`overlays/TEMPLATE.md`](../overlays/TEMPLATE.md) in this package.
