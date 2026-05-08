// Vercel serverless function — boots the TanStack Start SSR server
import handler from "../dist/server/server.js";

export default async function (req, res) {
  // Convert Node IncomingMessage → Web Request
  const url = `https://${req.headers.host}${req.url}`;
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
  }

  let body = undefined;
  if (req.method !== "GET" && req.method !== "HEAD") {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    body = Buffer.concat(chunks);
  }

  const webRequest = new Request(url, {
    method: req.method,
    headers,
    body: body?.length ? body : undefined,
  });

  const webResponse = await handler.fetch(webRequest, process.env, {});

  res.statusCode = webResponse.status;
  webResponse.headers.forEach((value, key) => res.setHeader(key, value));
  const buffer = Buffer.from(await webResponse.arrayBuffer());
  res.end(buffer);
}
