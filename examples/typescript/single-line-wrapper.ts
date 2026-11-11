// Not allowed: one-statement wrapper with no extra logic
export function healthResponse(): Response {
  return new Response("ok", { headers: { "Content-Type": "text/plain" } });
}

// Prefer at the call site:
// return new Response("ok", { headers: { "Content-Type": "text/plain" } });
