# Ardent Softsol — Company Website

Official website for **Ardent Softsol Inc.**, a software development and consulting firm based in Surrey, British Columbia, Canada.

Live site: [ardentsoftsol.com](https://ardentsoftsol.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR) |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + custom design system |
| UI Components | [Radix UI](https://radix-ui.com) primitives |
| Icons | [Lucide React](https://lucide.dev) |
| Animations | [Framer Motion](https://framer.motion.com) + CSS IntersectionObserver |
| Email | [Brevo (Sendinblue)](https://brevo.com) transactional API |
| Build Tool | [Vite 8](https://vite.dev) |
| Deployment | Cloudflare Workers / Vercel |
| Language | TypeScript |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, services overview, stats, process, FAQs |
| `/about` | Company info, vision/mission/values, team culture, locations |
| `/services` | Services overview with all four pillars |
| `/services/mobile` | Mobile development (Android, iOS, cross-platform) |
| `/services/full-stack` | Full-stack web development |
| `/services/testing` | Software QA and testing |
| `/services/staffing` | Staff augmentation services |
| `/career` | Job listings with search, job detail modal, resume upload |
| `/contact` | Contact form, map, FAQs |

---

## Getting Started

### Prerequisites

- Node.js **22.x** or higher
- npm 10+

### Install

```bash
npm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

`.env.local` contents:

```env
SENDINBLUE_API_KEY=your-brevo-api-key-here
SENDINBLUE_SENDER_EMAIL=your-verified-sender@yourdomain.com
```

> `.env.local` is git-ignored and must never be committed.

### Run locally

```bash
npm run dev
```

The dev script loads `.env.local` automatically via `dotenv-cli`.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview production build

```bash
npm run preview
```

---

## Resume Upload Feature

The career page allows applicants to submit their resume directly from the site.

**How it works:**
1. Applicant fills in name, email, optional message, and attaches a PDF/DOC/DOCX (max 5 MB)
2. The form POSTs to the server-side endpoint `/api/send-resume`
3. The server calls the **Brevo (Sendinblue)** transactional email API
4. The resume arrives as an email attachment at `santoshkumarreddy.ai@gmail.com`
5. The reply-to is set to the applicant's email for easy response

**Required env vars:**

| Variable | Description |
|---|---|
| `SENDINBLUE_API_KEY` | API key from [app.brevo.com](https://app.brevo.com/settings/keys/api) |
| `SENDINBLUE_SENDER_EMAIL` | A verified sender email in your Brevo account |

---

## Project Structure

```
src/
├── assets/
│   ├── illustrations.tsx   # Inline SVG illustrations for service pages
│   ├── logo.png
│   └── *.png               # Page hero images
├── components/
│   ├── Header.tsx          # Sticky nav with dropdown
│   ├── Footer.tsx          # Footer with links and contact info
│   ├── PageHero.tsx        # Reusable hero section for inner pages
│   ├── CtaBanner.tsx       # Call-to-action banner
│   └── ui/                 # Radix UI based primitives
├── routes/
│   ├── __root.tsx          # Root layout, IntersectionObserver setup
│   ├── index.tsx           # Homepage
│   ├── about.tsx
│   ├── career.tsx          # Job listings + resume upload
│   ├── contact.tsx
│   ├── services.tsx        # Services layout
│   ├── services.index.tsx  # Services overview
│   ├── services.mobile.tsx
│   ├── services.full-stack.tsx
│   ├── services.testing.tsx
│   └── services.staffing.tsx
├── lib/
│   ├── utils.ts
│   ├── error-capture.ts
│   └── error-page.ts
├── server.ts               # Server entry + /api/send-resume handler
├── router.tsx
├── start.ts
└── styles.css              # Global styles + Tailwind config
```

---

## Deployment

### Vercel

Vercel auto-detects TanStack Start. No adapter needed.

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Add environment variables in **Project Settings → Environment Variables**:
   - `SENDINBLUE_API_KEY`
   - `SENDINBLUE_SENDER_EMAIL`
4. Deploy — Vercel handles the rest

Build settings (auto-detected, but if needed):
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 22.x

### Cloudflare Workers

```bash
# Authenticate
npx wrangler login

# Set secrets
npx wrangler secret put SENDINBLUE_API_KEY
npx wrangler secret put SENDINBLUE_SENDER_EMAIL

# Deploy
npm run build
npx wrangler deploy
```

---

## Environment Variables Reference

| Variable | Required | Used in | Description |
|---|---|---|---|
| `SENDINBLUE_API_KEY` | Yes | `src/server.ts` | Brevo API key for sending emails |
| `SENDINBLUE_SENDER_EMAIL` | Yes | `src/server.ts` | Verified sender address in Brevo |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (loads `.env.local`) |
| `npm run build` | Production build |
| `npm run build:dev` | Development build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

---

## Company Info

**Ardent Softsol Inc.**
- 📍 15464 96 Ave, Surrey, BC V3R1G5, Canada
- 📞 +1 (604) 401-2800
- 📧 info@ardentsoftsol.com
- 🔗 [LinkedIn](https://www.linkedin.com/company/ardent-softsol-inc/posts/?feedView=all)
