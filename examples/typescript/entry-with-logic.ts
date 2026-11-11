// Not allowed: business logic in the entry
export async function handlePing(): Promise<Response> {
  const now = Date.now();
  if (now % 2 === 0) {
    return new Response("even", { status: 200 });
  }
  return new Response("odd", { status: 200 });
}
