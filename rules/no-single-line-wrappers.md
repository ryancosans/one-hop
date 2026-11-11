---
id: no-single-line-wrappers
title: No single-line wrappers
tags: [layering]
---

### No single-line functions

Do not extract a function whose body is a single statement that reads clearer inline.

```typescript
// Bad — wrapper adds nothing
export function healthResponse(): Response {
  return new Response("ok", { headers: { "Content-Type": "text/plain" } });
}

// Good — inline at the call site
return new Response("ok", { headers: { "Content-Type": "text/plain" } });
```

A function is worth keeping when it has **multiple statements** or **real logic** (conditionals, error handling, loops).

Passthrough wrappers (`handleRequest` → `routeRequest` with no other work) are not allowed — call the target directly.

Shared helpers used in many places are fine when the body has **multiple statements** or non-trivial logic.
