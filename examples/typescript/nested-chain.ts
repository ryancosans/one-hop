// Not allowed: matryoshka stack (entry → a → b → logic)
export async function handleRequest(request: Request): Promise<Response> {
  return dispatchRequest(request);
}

function dispatchRequest(request: Request): Promise<Response> {
  return processRequest(request);
}

async function processRequest(request: Request): Promise<Response> {
  const payload = await readBody(request);
  return jsonResponse(validatePayload(payload));
}

async function readBody(request: Request): Promise<unknown> {
  return request.json();
}

function validatePayload(payload: unknown): { ok: true } {
  return { ok: true };
}

function jsonResponse(data: unknown): Response {
  return Response.json(data);
}
