import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);

      // Handle resume upload API: POST /api/send-resume
      if (url.pathname === "/api/send-resume" && request.method === "POST") {
        return await handleSendResume(request, env);
      }

      // Handle contact form: POST /api/send-contact
      if (url.pathname === "/api/send-contact" && request.method === "POST") {
        return await handleSendContact(request, env);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function resolveEnv(env: unknown, key: string): string | undefined {
  const envRecord = env as Record<string, string | undefined>;
  return envRecord?.[key] ?? (typeof process !== "undefined" ? process.env[key] : undefined);
}

async function sendBrevoEmail(
  apiKey: string,
  payload: Record<string, unknown>,
): Promise<Response> {
  const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const text = await resp.text();
    console.error("Sendinblue/Brevo error", resp.status, text);
  }

  return resp;
}

async function handleSendContact(request: Request, env: unknown): Promise<Response> {
  try {
    const body = await request.json() as Record<string, string | undefined>;
    const firstName = body.firstName ?? "";
    const lastName = body.lastName ?? "";
    const email = body.email ?? "";
    const phone = body.phone ?? "";
    const company = body.company ?? "";
    const subject = body.subject ?? "";
    const message = body.message ?? "";

    if (!email || !message) {
      return json({ error: "Email and message are required" }, 400);
    }

    const apiKey = resolveEnv(env, "SENDINBLUE_API_KEY");

    if (!apiKey) {
      return json({ error: "Sendinblue API key not configured" }, 500);
    }

    const textContent = [
      `New contact form submission from the Ardent Softsol website.`,
      ``,
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Company: ${company || "Not provided"}`,
      `Subject: ${subject || "Not provided"}`,
      `Message: ${message}`,
    ].join("\n");

    const payload = {
      sender: { name: "SK", email: "notifications@resk.work.gd" },
      to: [{ email: "santoshkumarreddy.ai@gmail.com", name: "Ardent Softsol" }],
      replyTo: email ? { email, name: `${firstName} ${lastName}`.trim() || undefined } : undefined,
      subject: `Contact Form${subject ? `: ${subject}` : ""}${firstName ? ` — ${firstName} ${lastName}`.trim() : ""}`,
      textContent,
    };

    const resp = await sendBrevoEmail(apiKey, payload);

    if (!resp.ok) {
      return json({ error: "Failed to send message. Please try again later." }, 502);
    }

    return json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("handleSendContact error:", msg);
    return json({ error: msg }, 500);
  }
}

async function handleSendResume(request: Request, env: unknown): Promise<Response> {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const jobTitle = String(formData.get("jobTitle") ?? "General Application").trim();
    const resume = formData.get("resume") as File | null;

    if (!resume || resume.size === 0) {
      return json({ error: "No resume uploaded" }, 400);
    }

    const apiKey = resolveEnv(env, "SENDINBLUE_API_KEY");

    if (!apiKey) {
      return json({ error: "Sendinblue API key not configured" }, 500);
    }

    // Convert file to base64 for the attachment
    const arrayBuffer = await resume.arrayBuffer();
    const uint8 = new Uint8Array(arrayBuffer);
    let binary = "";
    for (let i = 0; i < uint8.length; i++) {
      binary += String.fromCharCode(uint8[i]);
    }
    const base64Content = btoa(binary);

    const bodyText = [
      `New resume submission from the Ardent Softsol website.`,
      ``,
      `Position Applied: ${jobTitle}`,
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const payload = {
      sender: { name: "SK", email: "notifications@resk.work.gd" },
      to: [{ email: "santoshkumarreddy.ai@gmail.com", name: "Ardent Softsol" }],
      replyTo: email ? { email, name: name || undefined } : undefined,
      subject: `Resume Application: ${jobTitle}${name ? ` — ${name}` : ""}`,
      textContent: bodyText,
      attachment: [
        {
          content: base64Content,
          name: resume.name || "resume.pdf",
        },
      ],
    };

    const resp = await sendBrevoEmail(apiKey, payload);

    if (!resp.ok) {
      return json({ error: "Failed to send email. Please try again later." }, 502);
    }

    return json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("handleSendResume error:", message);
    return json({ error: message }, 500);
  }
}
