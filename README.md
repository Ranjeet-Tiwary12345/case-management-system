# Ranjeet Tiwary | Advocate

A premium legal website for Advocate Ranjeet Tiwary built with Next.js, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 18+
- npm

## Setup

1. Install dependencies:
   npm install
2. Copy the environment example:
   copy .env.local.example .env.local
3. Update the values in `.env.local` with your actual n8n webhook details.
4. In PowerShell, if script execution is restricted, run:
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
5. Start the app:
   npm run dev
6. Open http://localhost:3000

## Environment variables

Create a `.env.local` file and set:

```env
N8N_WEBHOOK_URL=https://YOUR-N8N-WEBHOOK-URL
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://YOUR-N8N-WEBHOOK-URL
N8N_FILE_FIELD=data
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

If your n8n workflow uses a different binary field name, change `N8N_FILE_FIELD`.

## Production build

```bash
npm run build
```

## Notes

- The site routes PDF uploads through the Next.js API route at `/api/case-analysis`.
- The website does not expose live credentials in frontend code.
- The Case Document Analysis page expects a PDF upload and sends it to the configured n8n webhook.
