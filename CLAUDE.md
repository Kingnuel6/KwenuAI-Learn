# CLAUDE.md: KwenuAI Learn Portal

> This file is read by Claude Code at the start of every session.
> Follow every instruction here precisely. Do not deviate unless Khamzi explicitly overrides a rule.

---

## PROJECT OVERVIEW

**What this is:** A free, open-access mini-course portal for The AI Trybe, KwenuAI's WhatsApp learning community for non-technical Nigerians.

**What it does:** Hosts short video-based mini-courses. Each course contains sequentially ordered lessons. Videos are generated via NotebookLM and embedded as YouTube/video embeds. No login. No paywall. Access via direct link.

**Who uses it:** Non-technical Nigerians. Mostly on mobile. Mostly on free Claude/AI plans. Attention spans are short. Make everything obvious.

**How it connects to the main site:** This portal lives at `learn.kwenuai.com.ng` (subdomain) or as a hyperlink from `kwenuai.com.ng`. The footer always links back to the main site.

---

## TECH STACK: DO NOT DEVIATE

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js 14 (App Router) | Not Pages Router |
| Language | TypeScript | Add `/* eslint-disable @typescript-eslint/no-explicit-any */` to API routes |
| Styling | Tailwind CSS | No other CSS frameworks |
| Deployment | Vercel | No other deployment targets |
| Auth | None | Portal is fully public, no login required |
| Database | None | Course data lives in static TypeScript config files |
| Video | YouTube embed (iframe) | NotebookLM videos uploaded to YouTube first, then embedded |
| Progress tracking | localStorage | No backend. Browser-side only. Does not sync across devices, this is acceptable |

---

## BRAND: APPLY EXACTLY

> **Update (Khamzi override):** The whole site is light-themed now: no dark pages anywhere, including course/lesson pages. Fonts are `Poppins` (headings) + `Inter` (body), replacing Syne/DM Sans.

### Home / Catalogue Page
- Background: `#F8F7FF` (light lavender-white)
- Primary text: `#0D0E1A`
- Secondary text: `#6B6A80`
- Accent / CTA: `#8B3CF7` (KwenuAI purple)
- Borders: `#E8E5F0`
- Card background: `#FFFFFF`
- Font: `Poppins` (headings) + `Inter` (body), loaded from Google Fonts

### Course / Lesson Pages
- Background: `#F8F7FF` (same light lavender-white as home, no dark theme)
- Primary text: `#0D0E1A`
- Secondary text: `#6B6A80`
- Accent: `#8B3CF7`
- Card background: `#FFFFFF`
- Border: `#E8E5F0`
- Font: `Poppins` + `Inter` (same as home)

### Brand Rules
- "Powered by KwenuAI" must appear in the footer of every page
- Footer always links back to `https://kwenuai.com.ng`
- Use the official KwenuAI logo wordmark, not a placeholder mark: `public/kwenuai-logo-black.png` on light backgrounds (the whole site, currently), `public/kwenuai-logo-white.png` reserved for any future dark background
- Never use gradients on buttons: flat fills only
- Purple `#8B3CF7` is the only accent color. Do not introduce other accent colors.

---

## FILE STRUCTURE

```
/
├── app/
│   ├── page.tsx                          # Home: course catalogue
│   ├── layout.tsx                        # Root layout with fonts + metadata
│   ├── globals.css                       # Tailwind base + custom CSS vars
│   └── course/
│       └── [courseSlug]/
│           ├── page.tsx                  # Course page: lesson list
│           └── lesson/
│               └── [lessonId]/
│                   └── page.tsx          # Lesson page: video player
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CourseCard.tsx
│   ├── LessonCard.tsx
│   ├── VideoPlayer.tsx
│   └── ProgressBar.tsx
├── data/
│   └── courses.ts                        # ALL course and lesson data lives here
├── lib/
│   └── progress.ts                       # localStorage progress helpers
├── public/
│   ├── kwenuai-logo-black.png
│   └── kwenuai-logo-white.png
└── CLAUDE.md
```

---

## DATA ARCHITECTURE

All course content is defined in `/data/courses.ts`. This is the single source of truth. No database, no CMS, no API calls for content.

```typescript
// /data/courses.ts

export type LessonTier = 'foundation' | 'expanding' | 'power'

export type Lesson = {
  id: number
  title: string
  description: string
  duration: string
  tier: LessonTier
  youtubeId: string | null  // null = video not yet uploaded, shows placeholder
}

export type Course = {
  slug: string
  title: string
  tagline: string
  description: string
  tag: string
  status: 'live' | 'coming-soon'
  lessonCount: number
  totalDuration: string
  colorTheme: 'purple' | 'dark' | 'teal'
  lessons: Lesson[]
}

export const courses: Course[] = [
  {
    slug: 'advanced-claude-user',
    title: 'The advanced Claude user',
    tagline: 'Go from typing random prompts to running Claude like a system.',
    description: '9 lessons covering RICCE, CRAFT, Projects, Skills, and Connectors.',
    tag: 'Claude · AI Tools',
    status: 'live',
    lessonCount: 9,
    totalDuration: '~18 min',
    colorTheme: 'purple',
    lessons: [
      {
        id: 1,
        title: 'Context Profile',
        description: 'Teach Claude who you are, once and for all.',
        duration: '2 min',
        tier: 'foundation',
        youtubeId: null,
      },
      {
        id: 2,
        title: 'P.R.E.E',
        description: 'Teach Claude how other people think.',
        duration: '2 min',
        tier: 'foundation',
        youtubeId: null,
      },
      {
        id: 3,
        title: 'The RICCE Framework',
        description: 'How to talk to Claude and get precise outputs every time.',
        duration: '2 min',
        tier: 'foundation',
        youtubeId: null,
      },
      {
        id: 4,
        title: 'Web Search and Vision',
        description: 'Claude can see images and search the internet live.',
        duration: '2 min',
        tier: 'expanding',
        youtubeId: null,
      },
      {
        id: 5,
        title: 'Custom Instructions',
        description: 'Build your personal AI operating system.',
        duration: '2 min',
        tier: 'expanding',
        youtubeId: null,
      },
      {
        id: 6,
        title: 'Claude Projects',
        description: 'Your company headquarters inside Claude.',
        duration: '2 min',
        tier: 'expanding',
        youtubeId: null,
      },
      {
        id: 7,
        title: 'Claude Skills',
        description: 'Give Claude a permanent job to do.',
        duration: '2 min',
        tier: 'power',
        youtubeId: null,
      },
      {
        id: 8,
        title: 'Build Skills with CRAFT',
        description: 'Your framework for building permanent AI staff.',
        duration: '2 min',
        tier: 'power',
        youtubeId: null,
      },
      {
        id: 9,
        title: 'Claude Connectors',
        description: 'Plug Claude into your calendar, email, and Drive.',
        duration: '2 min',
        tier: 'power',
        youtubeId: null,
      },
    ],
  },
  {
    slug: 'build-your-own-gpt',
    title: 'Build your own GPT',
    tagline: 'Create custom GPTs and deploy them for real tasks.',
    description: 'No coding needed. Give them a job, a personality, and put them to work.',
    tag: 'ChatGPT · AI Tools',
    status: 'coming-soon',
    lessonCount: 0,
    totalDuration: 'TBD',
    colorTheme: 'dark',
    lessons: [],
  },
  {
    slug: 'build-it-without-code',
    title: 'Build it without code',
    tagline: 'Ship real products using Claude Code: no dev background needed.',
    description: 'From idea to deployed app, step by step using AI as your developer.',
    tag: 'Claude Code · Building',
    status: 'coming-soon',
    lessonCount: 0,
    totalDuration: 'TBD',
    colorTheme: 'teal',
    lessons: [],
  },
]
```

**To add a new course:** Add a new object to the `courses` array.
**To add a lesson video:** Update `youtubeId` from `null` to the YouTube video ID string (e.g. `'dQw4w9WgXcQ'`).
**To publish a coming-soon course:** Change `status` from `'coming-soon'` to `'live'`.

---

## PROGRESS TRACKING

Progress is tracked in `localStorage` only. No backend. No accounts.

```typescript
// /lib/progress.ts

const PROGRESS_KEY = 'kwenuai_learn_progress'

type ProgressStore = {
  [courseSlug: string]: number[]  // array of completed lesson IDs
}

export function getProgress(courseSlug: string): number[] {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem(PROGRESS_KEY)
  if (!raw) return []
  const store: ProgressStore = JSON.parse(raw)
  return store[courseSlug] ?? []
}

export function markComplete(courseSlug: string, lessonId: number): void {
  if (typeof window === 'undefined') return
  const raw = localStorage.getItem(PROGRESS_KEY)
  const store: ProgressStore = raw ? JSON.parse(raw) : {}
  const current = store[courseSlug] ?? []
  if (!current.includes(lessonId)) {
    store[courseSlug] = [...current, lessonId]
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(store))
  }
}

export function resetProgress(courseSlug: string): void {
  if (typeof window === 'undefined') return
  const raw = localStorage.getItem(PROGRESS_KEY)
  if (!raw) return
  const store: ProgressStore = JSON.parse(raw)
  delete store[courseSlug]
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(store))
}
```

---

## PAGE BEHAVIOUR RULES

### Home Page (`/`)
- Show all courses from `courses.ts`
- Live courses and coming-soon courses in separate sections
- No filters, no search: keep it simple
- Clicking a live course card navigates to `/course/[slug]`
- Coming-soon cards are not clickable: no navigation

### Course Page (`/course/[slug]`)
- Dark navy theme
- Show course title, tagline, lesson count, total duration
- Show a progress bar based on localStorage
- Group lessons by tier: Foundation / Expanding Claude / Power User
- Completed lessons show a check mark
- Current lesson (first incomplete) is highlighted
- Locked lessons (future) show a lock icon, but are still clickable
- Clicking any lesson navigates to `/course/[slug]/lesson/[id]`
- "Continue" button always jumps to the first incomplete lesson

### Lesson Page (`/course/[slug]/lesson/[id]`)
- Dark navy theme
- Show the video player prominently at top
- If `youtubeId` is null, show a styled placeholder: "Video coming soon. Check back shortly."
- Show lesson title and description below the video
- Previous / Next lesson navigation at the bottom
- "Mark as complete" button: fires `markComplete()` then navigates to next lesson
- Breadcrumb at top: Home → Course name → Lesson title

---

## VIDEO PLAYER RULES

- Use a responsive iframe embed for YouTube
- Aspect ratio: 16:9, always
- No autoplay
- YouTube embed URL format: `https://www.youtube.com/embed/{youtubeId}`
- Add `?rel=0&modestbranding=1` to the embed URL to suppress YouTube recommendations
- When `youtubeId` is null, render a placeholder div with the same 16:9 dimensions and a "Coming soon" message styled to match the dark theme

---

## WHAT NOT TO BUILD

- No authentication or login of any kind
- No payment or access gating
- No backend API routes: this is a static content site
- No CMS integration: all content lives in `courses.ts`
- No comments, ratings, or social features
- No newsletter or email capture on the portal itself
- No dark/light mode toggle: home page is always light, course/lesson pages are always dark
- No animations beyond simple Tailwind transitions: keep it fast on mobile Nigerian networks

---

## DEPLOYMENT

- Deploy to Vercel
- Connect to GitHub repo
- Every push to `main` auto-deploys
- No environment variables needed: no secrets, no API keys
- Target domain: `learn.kwenuai.com.ng` (Khamzi sets up subdomain in Vercel after deploy)

---

## HOW TO ADD A NEW LESSON VIDEO (KHAMZI'S WORKFLOW)

1. Generate lesson source doc from the AI Trybe lesson docs
2. Paste into NotebookLM, add steering prompt, generate Video Overview
3. Download video from NotebookLM
4. Upload to KwenuAI YouTube channel
5. Copy the YouTube video ID from the URL (the part after `v=`)
6. Open `/data/courses.ts`
7. Find the correct lesson object
8. Replace `youtubeId: null` with `youtubeId: 'PASTE_ID_HERE'`
9. Push to GitHub: Vercel auto-deploys

---

## WHEN KHAMZI ASKS YOU TO BUILD SOMETHING NEW

1. Check `courses.ts` first: does the data model support it?
2. If yes, build the UI component against existing data
3. If no, update the data model in `courses.ts` first, then build
4. Always ask: does this need a backend, or can it be done statically? Default to static.
5. Always test the mobile layout: majority of Trybe members are on phones
6. Never add a dependency that isn't already in the project unless absolutely necessary

---

*Last updated: July 2026 | KwenuAI Learn Portal*
*Built by KwenuAI · kwenuai.com.ng*
