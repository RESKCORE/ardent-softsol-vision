# Deployment Plan — Ardent Softsol Website

## Overview

This project is a **TanStack Start** (React 19) application with **Vite 8** as the build tool and **Tailwind CSS v4** for styling. It supports two deployment targets: **Vercel** (primary) and **Cloudflare Workers** (alternative).

---

## 1. Deploy to Vercel

### Prerequisites

- Node.js >= 24.15.0 (see `.nvmrc`)
- A [Vercel](https://vercel.com) account
- A [Brevo (Sendinblue)](https://www.brevo.com) account for email

### Steps

#### 1.1 Set up the project on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# From the project root
vercel link
```

Or connect via the Vercel dashboard:
1. Go to **Dashboard → Add New → Project**
2. Import your Git repository
3. The existing `vercel.json` will be auto-detected

#### 1.2 Configure environment variables

In the Vercel dashboard (**Project Settings → Environment Variables**), add:

| Variable | Value |
|---|---|
| `SENDINBLUE_API_KEY` | Your Brevo API key |
| `SENDINBLUE_SENDER_EMAIL` | Verified sender email in your Brevo account |

#### 1.3 Deploy

```bash
# Production deploy
vercel --prod

# Or trigger via Git push (if linked)
git push
```

### How the Vercel deployment works

The `vercel.json` configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/client",
  "framework": null,
  "functions": {
    "api/ssr.js": {
      "includeFiles": "dist/server/**"
    }
  },
  "rewrites": [
    { "source": "/(.*)", "destination": "/api/ssr" }
  ]
}
```

**Flow:**
1. `npm run build` produces `dist/client/` (static assets) and `dist/server/` (server bundle)
2. All requests (`/(.*)`) are rewritten to a single **Vercel serverless function** at `api/ssr.js`
3. `api/ssr.js` imports the built server (`dist/server/server.js`) and converts Node.js `IncomingMessage`/`ServerResponse` to Web `Request`/`Response` objects, then passes `process.env` as the environment
4. The SSR handler in `src/server.ts` either returns a rendered page or handles `/api/send-resume` POST requests

### Build output structure

```
dist/
├── client/          ← static assets (served by Vercel CDN)
│   ├── index.html
│   ├── assets/
│   └── ...
└── server/
    └── server.js    ← SSR entry bundled by Vite
```

---

## 2. APIs Used in the Project

### 2.1 Internal API — `POST /api/send-resume`

| Property | Value |
|---|---|
| **Route** | `/api/send-resume` |
| **Method** | `POST` |
| **Content-Type** | `multipart/form-data` |
| **Source** | `src/server.ts:72-177` |
| **Client call** | `src/routes/career.tsx:75` |

#### Request fields

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | yes | Applicant name |
| `email` | string | yes | Applicant email |
| `message` | string | no | Cover note |
| `jobTitle` | string | no | Position applied for (default: "General Application") |
| `resume` | file | yes | Resume file (PDF or DOC/DOCX, max 5 MB) |

#### Response

```json
// Success
{ "ok": true }

// Error
{ "error": "Failed to send email. Please try again later." }
```

#### How it works

1. Career page (`career.tsx`) submits the form as `multipart/form-data` to `/api/send-resume`
2. `src/server.ts` parses the form data, reads env vars (`SENDINBLUE_API_KEY`, `SENDINBLUE_SENDER_EMAIL`)
3. Converts the resume file to base64
4. Sends a **Brevo transactional email** via their REST API with the resume attached
5. email is delivered to `santoshkumarreddy.ai@gmail.com`

### 2.2 External API — Brevo (Sendinblue) Transactional Email

| Property | Value |
|---|---|
| **Endpoint** | `POST https://api.brevo.com/v3/smtp/email` |
| **Source** | `src/server.ts:155-163` |
| **Auth** | API key in `api-key` header |

#### Request payload

```json
{
  "sender": {
    "name": "Ardent Softsol Website",
    "email": "<SENDINBLUE_SENDER_EMAIL>"
  },
  "to": [
    { "email": "santoshkumarreddy.ai@gmail.com", "name": "Ardent Softsol" }
  ],
  "replyTo": {
    "email": "<applicant-email>",
    "name": "<applicant-name>"
  },
  "subject": "Resume Application: <jobTitle> — <name>",
  "textContent": "New resume submission...",
  "attachment": [
    {
      "content": "<base64-encoded-file>",
      "name": "resume.pdf"
    }
  ]
}
```

#### Environment variables required

| Variable | Purpose |
|---|---|
| `SENDINBLUE_API_KEY` | Brevo API key for authentication |
| `SENDINBLUE_SENDER_EMAIL` | Verified sender email in Brevo account |

### 2.3 External resources (non-API)

| Resource | Usage | Location |
|---|---|---|
| Google Fonts | Font loading | `src/styles.css:1` |
| Google Maps Embed | Office location map | `src/routes/contact.tsx:95` |
| LinkedIn | Company profile link | `src/components/Footer.tsx:17` |

---

## 3. Alternative: Deploy to Cloudflare Workers

The project also includes a `wrangler.jsonc` configuration for Cloudflare Workers:

```json
{
  "name": "tanstack-start-app",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "main": "src/server.ts"
}
```

Deploy with:

```bash
npx wrangler deploy
```

Environment variables must be set via `wrangler secret put` or the Cloudflare dashboard.

---

## 4. Local Development

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Fill in your Brevo API key and sender email in .env.local
# SENDINBLUE_API_KEY=your-key
# SENDINBLUE_SENDER_EMAIL=your-email

# Start dev server (loads .env.local automatically)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 5. Environment Variables Summary

| Variable | Required | Where set (Vercel) | Where set (local) | Consumed in |
|---|---|---|---|---|
| `SENDINBLUE_API_KEY` | Yes | Vercel Dashboard → Environment Variables | `.env.local` | `src/server.ts:109-111` |
| `SENDINBLUE_SENDER_EMAIL` | No (falls back to `info@ardentsoftsol.com`) | Vercel Dashboard → Environment Variables | `.env.local` | `src/server.ts:112-115` |
