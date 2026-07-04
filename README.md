# KwenuAI Learn Portal

Free, open-access mini-course portal for The AI Trybe — KwenuAI's WhatsApp learning community.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. No login, no backend — course content lives in `data/courses.ts` and progress is tracked client-side in `localStorage`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a lesson video

See `CLAUDE.md` for the full workflow — in short, update the matching lesson's `youtubeId` in `data/courses.ts` and push to `main`.

## Deployment

Deployed on Vercel. Every push to `main` auto-deploys.
