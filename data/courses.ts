// /data/courses.ts
// Single source of truth for all course and lesson content.
// To add a video: replace youtubeId null with the YouTube video ID string.
// To publish a coming-soon course: change status to 'live'.
// To add a new course: add a new object to the courses array.

export type LessonTier = 'foundation' | 'expanding' | 'power'

export type ActionStep = {
  label: string        // e.g. "Copy this prompt"
  type: 'prompt' | 'link' | 'checklist' | 'template'
  content: string      // the actual prompt, URL, or checklist text
}

export type LessonResources = {
  takeaway: string     // 2-3 sentence summary of the lesson
  actionStep: ActionStep
  nextTeaser: string   // one line teasing the next lesson
}

export type Lesson = {
  id: number
  title: string
  notebooklmTitle: string   // the evocative NotebookLM-generated title
  description: string
  duration: string
  tier: LessonTier
  youtubeId: string | null  // null = video not yet uploaded, shows placeholder
  resources: LessonResources
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
  iconPath: string
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
    iconPath: '/icons/claude-course-icon.png',
    lessons: [
      {
        id: 1,
        title: 'Context Profile',
        notebooklmTitle: 'The Missing Introduction',
        description: 'Teach Claude who you are, once and for all.',
        duration: '2 min',
        tier: 'foundation',
        youtubeId: 'I08JKsmOU70',
        resources: {
          takeaway: `Every time you start a new chat without a Context Profile, Claude is meeting you for the first time. It doesn't know where you are, what you're building, how you communicate, or what you never want to see. A Context Profile fixes this permanently. You build it once and Claude carries it into every conversation.`,
          actionStep: {
            label: 'Copy this prompt and paste it into Claude',
            type: 'prompt',
            content: `You are Context Architect, an AI designed to create a personal Context Profile for the user.

The Context Profile will be used inside AI tools like Claude Projects, ChatGPT, or agent systems so the AI understands the user's goals, background, and preferences.

The user may answer in different ways:
- normal text answers
- messy brain dump
- long paragraph
- voice note transcript
- incomplete thoughts

Your job is to extract meaning even if the input is unstructured.

STEP 1: ASK FOR BRAIN DUMP
Ask the user to describe themselves freely. Say:
"Tell me about yourself, what you do, what you're learning, what you want to achieve, and how you want AI to help you. You can type normally or paste a voice note transcript. You don't need to be organized. Just talk."
Wait for the response.

STEP 2: ANALYZE THE INPUT
From the user's message, try to identify:
- name, background, current situation, skills, interests, goals
- why they want to use AI, what they want to build
- preferred style of answers

If the brain dump already contains enough information, DO NOT ask too many questions.
If something important is missing, ask only the necessary follow-up questions, one at a time.

STEP 3: GENERATE CONTEXT PROFILE
After enough information is collected, generate a CONTEXT PROFILE written as instructions for an AI assistant, formatted exactly like this:

Name:
Background:
Current situation:
Short-term goals:
Long-term goals:
Skills being learned:
How the user wants AI to help:
Preferred response style:
How the AI should behave:
Important notes about the user:

STEP 4: FINAL CHECK
Ask: "Do you want to edit anything before using this in your AI project?"`,
          },
          nextTeaser: 'Next: What if Claude could think like your mentor or your ideal client? That\'s exactly what P.R.E.E does.',
        },
      },
      {
        id: 2,
        title: 'P.R.E.E',
        notebooklmTitle: 'The Genius Brain Heist',
        description: 'Teach Claude how other people think.',
        duration: '2 min',
        tier: 'foundation',
        youtubeId: 'b4Yr-sqnYrc',
        resources: {
          takeaway: `P.R.E.E stands for Personality Reverse-Engineering Engine. It maps how a specific person thinks, including their mental models, communication style, problem-solving patterns, and blind spots, and turns it into an AI-ready profile. Once you have that profile, Claude can reason through problems the way that person would reason through them.`,
          actionStep: {
            label: 'Open P.R.E.E and build your first thinking profile',
            type: 'link',
            content: `https://gemini.google.com/gem/1osD18Ch6KwzqCbYavJ4WECNk2QdUH_GU?usp=sharing`,
          },
          nextTeaser: 'Next: Claude knows who you are and how others think. Now learn the exact framework for getting precise outputs every single time.',
        },
      },
      {
        id: 3,
        title: 'The Conversation Blueprint',
        notebooklmTitle: 'Better AI Results with the RICCE Framework',
        description: 'How to talk to Claude and get precise outputs every time.',
        duration: '2 min',
        tier: 'foundation',
        youtubeId: 'M3eitCdLB-4',
        resources: {
          takeaway: `Most people treat Claude like a search engine: type something vague and hope for the best. RICCE is the framework that fixes this. Five elements that together give Claude everything it needs to give you something precise and useful. Role tells Claude who to be. Instructions tell it what to do. Context gives it your situation. Constraints set the guardrails. Examples show it what good looks like.`,
          actionStep: {
            label: 'Copy this RICCE template and use it for your next Claude prompt',
            type: 'template',
            content: `ROLE:
You are a [specific role relevant to the task, e.g. Nigerian marketing strategist, HR professional, business writing coach].

INSTRUCTIONS:
[Tell Claude exactly what to do. Be specific. Use action verbs.]
Example: Write three Instagram captions that attract paying clients, not just followers.

CONTEXT:
[Give Claude your situation. Where are you? What have you tried? What's your audience like?]
Example: I run a small tailoring business in Lagos. I post three times a week but only get engagement from people who never buy.

CONSTRAINTS:
[What should Claude never do in this response?]
Example: No hashtag lists. No generic motivational quotes. No dollar amounts (I work in Naira). Keep each caption under 100 words.

EXAMPLES:
[Paste an example of output you liked before, or describe what good looks like.]
Example: Here is a caption I liked: "Spent 3 hours fixing a rushed job from another tailor. The hem was wrong, the lining was off, the client was stressed. This is why I take my time. Your event is too important for shortcuts."

Now generate the output.`,
          },
          nextTeaser: 'Next: Claude can actually search the internet live and read images. Most people never turn this on.',
        },
      },
      {
        id: 4,
        title: 'Web Search and Vision',
        notebooklmTitle: 'The Digital Apprentice',
        description: 'Claude can see images and search the internet live.',
        duration: '2 min',
        tier: 'expanding',
        youtubeId: 'lgrIhPWgG4Y',
        resources: {
          takeaway: `By default Claude only knows what it was trained on, and that has a cutoff date. Web Search gives Claude live access to the internet so it can pull current information, research competitors, and find what's happening right now. Vision lets Claude read and analyze images, screenshots, PDFs, and documents you upload. Together they turn Claude from a text generator into a research partner.`,
          actionStep: {
            label: 'How to turn on Web Search and Vision: step by step',
            type: 'checklist',
            content: `To turn on Web Search:
1. Open a new Claude chat
2. Look for the "+" icon or the tools button in the chat input bar
3. Click it and select "Web Search"
4. You'll see a globe icon appear: that means it's active
5. Now ask Claude something current: "What are Nigerian businesses complaining about most on Twitter this week?"

To use Vision (image upload):
1. In the same chat input bar, click the image/attachment icon
2. Upload any image, screenshot, or PDF
3. Type your question about what you uploaded
Example: Upload a screenshot of your landing page and ask: "What is the first thing someone would want to change on this page to get more people to take action?"

Test both features today. They're free and already in your Claude account.`,
          },
          nextTeaser: 'Next: Stop setting up Claude from scratch every conversation. Build your personal AI operating system, once.',
        },
      },
      {
        id: 5,
        title: 'Custom Instructions',
        notebooklmTitle: 'Building Your Personal AI Operating System',
        description: 'Build your personal AI operating system.',
        duration: '2 min',
        tier: 'expanding',
        youtubeId: '4ULY9o1WIHo',
        resources: {
          takeaway: `Custom Instructions is where you paste your Context Profile so that Claude knows who you are before you type a single word. Every conversation, in every new chat, starts with Claude already knowing your goals, your market, your communication preferences, and your non-negotiables. You set it once. It works forever. This is the difference between using Claude and having Claude work for you.`,
          actionStep: {
            label: 'Copy this Custom Instructions starter template',
            type: 'template',
            content: `Paste your Context Profile here, then add these sections underneath:

---

COMMUNICATION STYLE:
- [How do you want Claude to talk to you? e.g. Direct and short. No long explanations unless I ask.]
- [What format do you prefer? e.g. Bullet points for lists, short paragraphs for explanations.]
- [Anything specific? e.g. Always give me options, not just one answer.]

MY MARKET AND CONTEXT:
- I am based in Nigeria
- I work in [your industry]
- My audience is [describe them]
- I price in Naira, not dollars
- [Any other market-specific context]

NEVER DO THESE:
- Do not add long disclaimers or "consult a professional" unless I specifically ask
- Do not give me generic advice that could apply to anyone anywhere
- Do not use overly formal corporate language
- [Add your own non-negotiables]

HOW TO BEHAVE:
- Be direct. Give me the answer first, context after.
- If you're not sure about something, say so clearly instead of guessing
- Push back if my idea has obvious problems
- Always consider the Nigerian market context in your suggestions

---

Where to paste this:
1. Click your profile icon in the bottom left of Claude
2. Go to Settings
3. Click "Personal Preferences" or "Custom Instructions"
4. Paste everything above (with your details filled in)
5. Save`,
          },
          nextTeaser: 'Next: What if you had separate workspaces for your business, your content, and your clients, each one fully briefed before you type anything?',
        },
      },
      {
        id: 6,
        title: 'Claude Projects',
        notebooklmTitle: 'The Multi-Hustle Headquarters',
        description: 'Your company headquarters inside Claude.',
        duration: '2 min',
        tier: 'expanding',
        youtubeId: '38asE44PqyY',
        resources: {
          takeaway: `A Claude Project is a dedicated workspace, like a company headquarters for a specific part of your life or business. Each project has its own files (your documents, brand info, client details), its own instructions (how Claude behaves in this specific space), and its own memory that carries across every conversation inside it. You never start from scratch again. Claude walks into the project fully briefed.`,
          actionStep: {
            label: 'Build your first Claude Project: 5 steps',
            type: 'checklist',
            content: `Step 1: Open Claude and find Projects in the left sidebar. Click "New Project". Give it a name that represents one area of your life or work. Example: "My Business", "Content Creation", "Client: [Name]"

Step 2: Go to the Files section inside the project. Upload documents Claude should always know about in this space. Ideas: your Context Profile, your CV, a description of your business, past work samples, your brand voice document, a client brief.

Step 3: Write 2-3 sentences in the Instructions section. How should every conversation in this project behave? Example: "Always respond in a direct, professional tone. I am a Lagos-based AI consultant. Price everything in Naira. Never suggest tools that require a credit card."

Step 4: Open a new chat inside the project. Type something to test it. Notice how Claude already knows your context without you explaining anything.

Step 5: Share in The AI Trybe WhatsApp group: What did you name your project? What's the first thing you put in the Files section?`,
          },
          nextTeaser: 'Next: Now that your headquarters is set up, it\'s time to hire your first employee: a Claude Skill that executes a specific job on demand.',
        },
      },
      {
        id: 7,
        title: 'Claude Skills',
        notebooklmTitle: 'The Power of Claude Skills',
        description: 'Give Claude a permanent job to do.',
        duration: '2 min',
        tier: 'power',
        youtubeId: 'lTuYtGeQTKA',
        resources: {
          takeaway: `A Claude Skill is a saved slash command that gives Claude a specific job with a specific output standard. Instead of explaining what you want every time, you type /skillname and Claude immediately knows the role, the workflow, and the format. Skills are the difference between using Claude occasionally and having Claude execute reliably. Thousands of skills already exist in the Skills library, so you don't have to build everything from scratch.`,
          actionStep: {
            label: 'Find and install your first Claude Skill: step by step',
            type: 'checklist',
            content: `Step 1: Open Claude and click the "Customize" button in the left sidebar (you may need to look for a pencil or settings icon near the bottom).

Step 2: Click on "Skills". You'll see a library of skills already built by other users.

Step 3: Browse or search for a skill that matches something you do regularly. Good starting points:
- /linkedin: write LinkedIn posts
- /email: draft professional emails
- /summarize: summarize long documents
- /brainstorm: generate structured ideas

Step 4: Click to add/install the skill to your account.

Step 5: Open a new chat (inside one of your Projects for best results). Type / and the skill name. Watch how Claude immediately knows what to do with no setup required.

Step 6: Test it with a real task from your work this week. Share your result in The AI Trybe.`,
          },
          nextTeaser: 'Next: The skills in the library are useful, but the most powerful skills are the ones you build yourself. Learn the CRAFT framework.',
        },
      },
      {
        id: 8,
        title: 'Build Your AI Employee',
        notebooklmTitle: 'The Digital Staff Member',
        description: 'Build your own Claude Skills using the CRAFT framework.',
        duration: '2 min',
        tier: 'power',
        youtubeId: '3l_RYdUP_Lw',
        resources: {
          takeaway: `CRAFT is the framework for building Claude Skills. It stands for Command, Role, Actions, Format, Tools. RICCE tells Claude how to think. CRAFT tells Claude how to work. A prompt is a conversation. A skill built with CRAFT is a permanent employee with a job title, a workflow, a standard output, and the tools it needs to do the job. The difference in consistency and quality is immediate.`,
          actionStep: {
            label: 'Copy this CRAFT template and build your first custom skill',
            type: 'template',
            content: `Use this template to design your skill, then paste the whole thing into Claude and say: "Use this CRAFT breakdown to write me a Claude Skill I can save."

---

COMMAND:
/[choose a short memorable slash command]
Example: /proposal, /weeklyreview, /clientemail, /contentideas

ROLE:
You are a [specific job title and description].
Example: You are a professional business proposal writer who creates concise, persuasive proposals for Nigerian SMEs. You write in a direct tone, always price in Naira, and never use corporate fluff.

ACTIONS (step-by-step workflow):
1. [First thing the skill should do]
2. [Second thing]
3. [Third thing]
4. [Continue until the full workflow is mapped]
Example:
1. Ask for the client's name and the problem they need solved
2. Ask for the proposed solution in one sentence
3. Outline 3-4 clear deliverables
4. State the timeline and investment in Naira
5. Close with a next step (e.g. "To get started, reply to confirm scope")

FORMAT:
[What should the final output look like?]
Example: A structured proposal with these sections: Problem, Solution, Deliverables, Timeline, Investment, Next Step. Maximum 400 words. No bullet points in the main body. Write in short paragraphs.

TOOLS (optional):
[Does this skill need to connect to any external tool?]
Example: Needs access to Google Drive to pull from my previous proposals folder.
OR: No external tools needed.

---

Now paste the whole thing into Claude with: "Build me a Claude Skill from this CRAFT breakdown."`,
          },
          nextTeaser: 'Next: The final unlock: connect Claude to your real tools. Calendar, email, Drive. Claude stops thinking about your work and starts doing it.',
        },
      },
      {
        id: 9,
        title: 'Claude Connectors',
        notebooklmTitle: 'Claude Connectors: From Consultant to EA',
        description: 'Plug Claude into your calendar, email, and Google Drive.',
        duration: '2 min',
        tier: 'power',
        youtubeId: 'HDJ_99kVDJg',
        resources: {
          takeaway: `Connectors are what turn Claude from a smart chat window into infrastructure. By connecting Claude to Google Calendar, Gmail, and Google Drive, Claude stops just generating text about your work and starts actually moving inside the tools you use every day. It reads your real calendar, finds your actual documents, drafts replies to your real emails. This is where Claude becomes an executive assistant, not just a consultant.`,
          actionStep: {
            label: 'Connect your first tool to Claude: step by step',
            type: 'checklist',
            content: `Step 1: Open Claude and go to the "Customize" section in the left sidebar.

Step 2: Click on "Connectors". You'll see a list of tools you can connect. Available on the free plan: Google Calendar, Gmail, Google Drive.

Step 3: Click "Connect" next to Google Calendar first (it's the safest one to start with, read-only by default).

Step 4: Follow the Google sign-in flow to give Claude permission.

Step 5: Set your approval preferences carefully:
✅ Auto-approve: Reading calendar events, listing emails, finding documents
⛔ Always require approval: Creating events, sending emails, deleting anything

Step 6: Test it immediately. Open a new chat and type:
"What do I have on my calendar this week?"
Claude will read your actual Google Calendar and tell you.

Step 7: Try a second test:
"Find the most recent document I worked on in Google Drive."
Claude will search your Drive and bring it back.

Step 8: Now think about your CRAFT skills from Lesson 8. If any of them need to read your calendar or Drive to do their job, go back and update the T (Tools) field with the connector name. Your skills just got smarter.

Welcome to Level 5.`,
          },
          nextTeaser: 'You\'ve completed The Advanced Claude User. You now have a full AI operating system. Share what you built in The AI Trybe. The community wants to see it.',
        },
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
    iconPath: '/icons/gpt-course-icon.png',
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
    iconPath: '/icons/claude-code-course-icon.png',
    lessons: [],
  },
]
