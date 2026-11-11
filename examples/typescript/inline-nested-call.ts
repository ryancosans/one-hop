// Not allowed: nested calls on one line in an entry
export async function handleCreateUser(request: Request): Promise<Response> {
  return jsonResponse(await parsePayload(await readBody(request)));
}

async function readBody(request: Request): Promise<unknown> {
  return request.json();
}

function parsePayload(body: unknown): { email: string } {
  return body as { email: string };
}

function jsonResponse(data: unknown): Response {
  return Response.json(data);
}
