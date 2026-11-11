---
id: http-handlers
title: HTTP handlers
tags: [http, layering]
---

### HTTP handlers

Handlers are **entry points** — delegate, then return:

```typescript
export async function handleCreateUser(request: Request): Promise<Response> {
  const user = await createUserFromRequest(request);
  return jsonResponse(user);
}
```

Parsing, validation, and side effects live in the step file (`create-user-from-request.ts`), not in the handler.

Handlers that do not match a path should return `null` (or your framework’s equivalent) so a router can try the next handler.
