// Allowed: handler delegates once
export async function handlePing(): Promise<Response> {
  const body = buildPingBody();
  return jsonResponse(body);
}

function buildPingBody(): { ok: true } {
  return { ok: true };
}

function jsonResponse(data: unknown): Response {
  return Response.json(data);
}
