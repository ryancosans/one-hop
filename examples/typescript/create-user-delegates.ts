// Allowed: HTTP entry delegates parsing and persistence
export async function handleCreateUser(request: Request): Promise<Response> {
  const user = await createUserFromRequest(request);
  return jsonResponse(user);
}

// Step file (e.g. create-user-from-request.ts) owns validation and I/O.
async function createUserFromRequest(request: Request): Promise<{ id: string }> {
  const body = await request.json();
  if (!body.email) {
    throw new Error("email required");
  }
  return { id: "user_1" };
}

function jsonResponse(data: unknown): Response {
  return Response.json(data);
}
