---
id: performance-checklist
title: Performance checklist
tags: [performance]
---

## Performance checklist

Before opening a PR, confirm for **your** hot path (every request, every frame, every job tick):

- [ ] No new per-request file I/O except static assets or explicit caches.
- [ ] No heavy middleware on the hot path without measurement.
- [ ] Expensive remote calls only for features the user explicitly triggered.
- [ ] Production path does not load dev-only tooling.

When adding a feature, ask: *“Does this run on every request?”* If yes, it must be fast.
