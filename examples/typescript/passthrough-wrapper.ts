// Not allowed: entry that only forwards to another orchestrator
export function handleRequest(request: Request): Promise<Response> {
  return routeRequest(request);
}

async function routeRequest(request: Request): Promise<Response> {
  const apiResponse = await handleApiRequest(request);
  if (apiResponse) return apiResponse;
  return new Response("Not Found", { status: 404 });
}

async function handleApiRequest(request: Request): Promise<Response | null> {
  return null;
}
