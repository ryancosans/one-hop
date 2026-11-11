---
id: one-hop
title: One hop
tags: [layering, architecture]
---

## One hop

**Entry points delegate. Logic lives one call away. No matryoshka call stacks.**

**Entry points:** HTTP handlers, CLI main, framework route handlers, `main`, anything wired into routing or the public API of a module.

### Allowed

```typescript
// Single delegation, then the response
export async function handleCreateUser(request: Request): Promise<Response> {
  const user = await createUserFromRequest(request);
  return jsonResponse(user);
}

// Sequential steps — one call per line, in order
export async function routeRequest(request: Request): Promise<Response> {
  const apiResponse = await handleApiRequest(request);
  if (apiResponse) return apiResponse;

  const staticResponse = await serveStaticFile(request);
  if (staticResponse) return staticResponse;

  return new Response("Not Found", { status: 404 });
}
```

Each called function owns the logic for that step.

### Not allowed

```typescript
// Logic inside an entry point
export async function handleCreateUser(request: Request): Promise<Response> {
  const body = await request.json();
  if (!body.email) {
    return new Response("bad request", { status: 400 });
  }
  const row = await db.insert("users", body);
  return jsonResponse(row);
}

// Nested calls on one line
return jsonResponse(parsePayload(await readBody(request)));

// Deep chains — entry calls a, a calls b, b calls c
export function handleRequest(request: Request) {
  return routeRequest(request); // routeRequest must not call another orchestrator
}
```

**Orchestrators** may sequence steps with early returns only. They must not contain business rules, parsing, or I/O beyond handing off to the next function.
