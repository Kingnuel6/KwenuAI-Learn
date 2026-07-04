export type LessonTier = 'foundation' | 'expanding' | 'power'

export type Lesson = {
  id: number
  title: string
  description: string
  duration: string
  tier: LessonTier
  youtubeId: string | null // null = video not yet uploaded, shows placeholder
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
        description: 'Teach Claude who you are — once.',
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
    tagline: 'Ship real products using Claude Code — no dev background needed.',
    description: 'From idea to deployed app, step by step using AI as your developer.',
    tag: 'Claude Code · Building',
    status: 'coming-soon',
    lessonCount: 0,
    totalDuration: 'TBD',
    colorTheme: 'teal',
    lessons: [],
  },
]
