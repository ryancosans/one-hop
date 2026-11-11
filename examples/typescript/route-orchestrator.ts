// Allowed: orchestrator sequences steps — one call per line, early return
export async function routeRequest(request: Request): Promise<Response> {
  const apiResponse = await handleApiRequest(request);
  if (apiResponse) return apiResponse;

  const staticResponse = await serveStaticFile(request);
  if (staticResponse) return staticResponse;

  return new Response("Not Found", { status: 404 });
}

async function handleApiRequest(request: Request): Promise<Response | null> {
  return null;
}

async function serveStaticFile(request: Request): Promise<Response | null> {
  return null;
}
