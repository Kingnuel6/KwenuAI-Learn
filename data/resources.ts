// /data/resources.ts
// Single source of truth for library resources (videos, articles, tools).
// These are NOT courses: standalone curated pieces shown on the home page library tabs.
// Content sourced and rewritten from the KwenuAI Content Bank Notion database.

export type ResourceType = 'article' | 'video' | 'tool'
export type ResourceCategory = 'small-business' | 'content-creator' | 'student' | 'productivity'

export type Resource = {
  id: string
  type: ResourceType
  title: string
  category: ResourceCategory[]
  summary: string              // one-sentence outcome-focused summary shown on the card
  content: string              // full rewritten body (markdown), only used when type is 'article'
  externalUrl: string | null   // for type 'video' or 'tool': link out directly
  sourceUrl: string            // original source URL, stored but not displayed on the card
  channel: string | null       // YouTube channel name, only used when type is 'video'
}

export const resources: Resource[] = [
  {
    id: 'automate-repetitive-office-tasks-with-zapier-ai',
    type: 'article',
    title: "Automate Repetitive Office Tasks with Zapier AI",
    category: ['small-business'],
    summary: "Let AI handle the task you do every single day without thinking.",
    content: `Most "automation" advice assumes you already have a dev team. You don't. Zapier is a no-code automation tool that connects the apps you already use, Gmail, Google Sheets, Slack, and can add an AI step in between to summarize, draft, or sort information automatically, without writing a single line of code.

Start with one annoying task, not ten. Pick the thing you do every day that doesn't need real judgment: forwarding a meeting note, replying to the same three questions, compiling a daily report.

1. Pick one repetitive task to automate first, summarizing notes, drafting replies, or sending a daily report.
2. Go to [zapier.com](http://zapier.com) and create a Zap. Choose a trigger app (Gmail, Google Sheets) and a trigger event, like "New email received."
3. Add an AI step: click + Add Action, choose AI by Zapier or ChatGPT, and give it a plain instruction like "Summarize this email in 2 lines and list action items." Map it to the data from your trigger.
4. Decide where the result should land: post it to Slack, add it as a task in ClickUp or Todoist, or drop it into a Google Sheet.
5. Run a test, check the output makes sense, then click Publish. From here it runs on its own every time the trigger fires.

The free tier caps you at a small number of tasks per month. That's enough to prove the automation actually saves you time before you decide if it's worth paying for more.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/openai-just-dropped-38b-on-aws',
    channel: null,
  },
  {
    id: 'professional-email-template-using-ai-mailui',
    type: 'tool',
    title: "Professional Email Template Using AI (MailUI)",
    category: ['small-business'],
    summary: "Fifteen minutes to an email that looks like a real business sent it.",
    content: '',
    externalUrl: 'https://mailui.co',
    sourceUrl: 'https://www.joinhorizon.ai/p/google-s-nano-banana-pro-solves-ai-s-biggest-text-problem',
    channel: null,
  },
  {
    id: 'product-launch-landing-page-in-youware',
    type: 'tool',
    title: "Product-Launch Landing Page in YouWare",
    category: ['small-business'],
    summary: "Get a real launch page live in two days, not two weeks.",
    content: '',
    externalUrl: 'https://youware.com',
    sourceUrl: 'https://www.joinhorizon.ai/p/how-to-build-a-product-launch-landing-page-with-ai',
    channel: null,
  },
  {
    id: 'pitch-a-business-deck-with-pitch-com',
    type: 'tool',
    title: "Pitch a Business Deck with Pitch.com's AI Presentation Maker",
    category: ['small-business'],
    summary: "Turn a handful of bullet points into an investor-ready deck.",
    content: '',
    externalUrl: 'https://pitch.com',
    sourceUrl: 'https://www.joinhorizon.ai/p/softbank-and-openai-launch-joint-venture-in-japan',
    channel: null,
  },
  {
    id: 'build-a-mini-ai-customer-support-bot-yourgpt',
    type: 'tool',
    title: "Build a Mini AI Customer Support Bot (YourGPT)",
    category: ['small-business'],
    summary: "Answer customer questions automatically, even while you're asleep.",
    content: '',
    externalUrl: 'https://www.yourgpt.ai',
    sourceUrl: 'https://www.joinhorizon.ai/p/xai-s-grok-4-1-sets-new-standard-for-emotional-and-human-aligned-ai',
    channel: null,
  },
  {
    id: 'record-and-summarize-meetings-on-a-mac-using-chatgpt',
    type: 'article',
    title: "Record and Summarize Meetings on a Mac Using ChatGPT",
    category: ['productivity', 'small-business'],
    summary: "Never lose a commitment made in a call again.",
    content: `You're in a call with a supplier, trying to lock down pricing and delivery dates, and you're also supposed to be taking notes. So you split your attention between listening and typing, and you catch about 70% of what actually gets said. Two days later someone asks "wait, what did we agree on delivery," and you're scrolling through half-finished notes trying to reconstruct a conversation you were technically present for.

This happens in every meeting you don't record, and it compounds. Small details get lost, commitments get fuzzy, and eventually someone's remembering the conversation differently than you are, with nothing to check it against.

ChatGPT's desktop app for Mac has a built-in Record feature that transcribes a live meeting and turns it into a structured summary with action items, no separate recording or transcription tool needed.

If you're on a Mac, ChatGPT's desktop app records the whole thing, transcribes every speaker, and hands you back a structured summary with action items before you've even left your chair.

1. Open the ChatGPT desktop app on your Mac.
2. Click Record at the bottom of the screen and grant the permissions it asks for.
3. Let it run through the meeting (capped at 120 minutes per session), then click Stop.
4. Select Send to upload the transcript and generate the summary.
5. ChatGPT opens a private canvas with a structured summary, key points, and action items. From there, ask it to rewrite anything as an email, a project plan, or a task list you can forward straight to your team.

Heads up: Record mode needs a Plus, Business, Team, Enterprise, or Edu ChatGPT plan, and right now it's Mac desktop app only, no Windows, no mobile. If you've got a MacBook, this alone is worth checking your plan for.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/how-to-record-and-summarize-meetings-on-a-mac-using-chatgpt',
    channel: null,
  },
  {
    id: 'work-with-pdfs-10x-faster-using-ai-updf',
    type: 'tool',
    title: "Work with PDFs 10x Faster Using AI (UPDF)",
    category: ['student', 'small-business', 'productivity'],
    summary: "Ask your PDF a question instead of reading the whole thing.",
    content: '',
    externalUrl: 'https://updf.com',
    sourceUrl: 'https://www.joinhorizon.ai/p/work-with-pdfs-10x-faster-using-ai',
    channel: null,
  },
  {
    id: 'turn-any-skill-into-a-productized-service',
    type: 'article',
    title: "Turn Any Skill Into a Productized Service (Packages, Pricing, Pitch)",
    category: ['small-business'],
    summary: "Stop freezing when a client asks how much you charge.",
    content: `You're good at something. Graphic design, bookkeeping, social media management, whatever it is, people already pay you for it sometimes. But every time someone asks "how much do you charge," you freeze for a second and then quote a number you basically made up on the spot. Sometimes it's too low and you resent the job halfway through. Sometimes it scares the client off entirely. Either way, you're negotiating from scratch every single time, because you never actually built a service, you just have a skill and a rough hourly rate in your head.

That's the real problem. Not that you're not good enough, but that you're selling your time instead of selling an outcome. Clients don't wake up wanting to buy "3 hours of your time." They want a logo, a clean set of books, a month of content that doesn't require them to think about it. When you don't package what you do into something with a name and a price, you're stuck re-explaining and re-negotiating with every single person who reaches out.

This is a copy-paste prompt for Claude or ChatGPT that turns any skill you have into a structured, sellable service, three pricing tiers, a ready-to-send pitch, and responses to the objections your ideal client will raise.

This prompt builds the actual package: three tiers, real pricing logic, and a pitch you can send today.

1. Paste the prompt into Claude or ChatGPT.
2. When it asks, answer with your skill, your experience level, your target client, and your income goal.
3. It designs 3 packages (Starter / Growth / Premium) with outcome-focused names, not "Basic/Pro/Enterprise."
4. It suggests pricing based on market positioning and your income goal, not your hourly rate.
5. It writes you a 150-word pitch and lists the 5 objections your ideal client will raise, with responses ready to use.

Skip naming your packages after subscription tiers. The whole point is that a client should understand exactly what they're buying without asking a follow-up question, and you should never have to freeze and make up a number again.

**Copy-paste prompt:**

\`\`\`
You are an expert business strategist and productized service consultant.
I want to turn my skill into a scalable, sellable productized service.
Follow this exact process:

1. Skill Audit: Ask me to describe my skill, experience level, target client, and income goal. Based on my answers, identify:
   - The most monetizable application of my skill
   - The specific problem I solve
   - Who is in the most pain and willing to pay to solve it

2. Service Design: Create 3 packages (Starter / Growth / Premium) with:
   - A clear, outcome-focused name (not "Basic/Pro/Enterprise")
   - Exactly what's included (deliverables, not time)
   - Turnaround time
   - What's intentionally excluded (to protect scope)

3. Pricing Strategy: Suggest pricing for each tier based on:
   - Market positioning (not my hourly rate)
   - Perceived value to the client
   - My stated income goal
   - Include a one-time offer and a retainer option

4. Irresistible Offer Layer: For each package, add:
   - A specific guarantee (outcome or money-back)
   - 1 high-value bonus that costs me little but increases perceived value
   - A urgency/scarcity mechanism that feels natural, not pushy

5. The Pitch: Write a 150-word pitch I can use on LinkedIn, cold DMs, or a sales call that:
   - Opens with the client's pain point
   - Positions my service as the obvious solution
   - Ends with a clear, low-friction CTA

6. Objection Killer: List the 5 most common objections my ideal client will have and give me exact responses to each.

First message to me should be: ask for my skill, experience level, target client type, and monthly income goal. Then wait for my answers before proceeding. Keep everything outcome-focused, specific, and ready to copy-paste into real conversations.
\`\`\``,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/this-prompt-turns-any-skill-you-have-into-a-productized-service-with-packages-pricing-and-a-pitch',
    channel: null,
  },
  {
    id: 'use-claude-to-build-edit-and-refine-presentations-inside-powerpoint',
    type: 'tool',
    title: "Use Claude to Build, Edit, and Refine Presentations Inside PowerPoint",
    category: ['small-business', 'content-creator', 'productivity'],
    summary: "Skip the blank-slide problem entirely.",
    content: '',
    externalUrl: 'https://www.anthropic.com',
    sourceUrl: 'https://www.joinhorizon.ai/p/how-to-use-claude-to-build-edit-and-refine-presentations-inside-powerpoint',
    channel: null,
  },
  {
    id: 'the-linkedin-voice-cloner-30-day-post-generator-prompt',
    type: 'article',
    title: "The LinkedIn Voice Cloner & 30-Day Post Generator Prompt",
    category: ['content-creator', 'small-business'],
    summary: "A month of content that sounds like you, not a marketing agency.",
    content: `You posted on LinkedIn three times in January. Good engagement, a few comments, maybe a lead. Then February happened, work got busy, and the account went quiet. By March you're staring at a blank post box thinking "what do I even say" and closing the tab instead. This is basically everyone's LinkedIn story. Not because people run out of ideas, but because writing something that sounds like you, every single day, for a month, is genuinely exhausting when you also have a business to run.

The usual fix people reach for makes it worse: hire someone to "manage your LinkedIn," and three weeks later your posts sound like a marketing agency wrote them, because one did. Generic hooks, generic hashtags, zero of your actual voice. Followers can tell. Engagement drops even further than when you were just posting nothing.

This is a copy-paste prompt for ChatGPT or Claude that studies how you naturally write from one paragraph, then generates 30 days of LinkedIn posts in that same voice, not a generic AI tone.

This prompt solves the actual problem instead of working around it. It clones your voice from one paragraph you write about your business, then builds a full month of content in that same voice, not a "professional" version of you, the real one.

1. Open ChatGPT or Claude.
2. Paste the prompt below and fill in your business, your goal, your tone, your audience, and 3-5 topics you want to cover.
3. The AI analyzes your writing voice first and tells you the rules it's going to follow, so you can correct it before it writes a single post.
4. It builds 5 content pillars tied to your actual goals, not generic categories pulled from a template.
5. It writes all 30 posts across a mix of formats, storytelling, educational, contrarian, social proof, engagement, plus 10 extra hooks you can reuse whenever you're stuck.

The prompt only works if your input paragraph sounds like you. Don't write a polished "professional bio," describe your business the way you'd explain it to a friend over the phone.

**Copy-paste prompt:**

\`\`\`
You are an expert LinkedIn ghostwriter and personal branding strategist who has written for top creators across business, tech, finance, and entrepreneurship niches.

I want you to fully clone my writing voice and generate 30 days of LinkedIn posts that sound exactly like me, not like AI, not like a generic copywriter.

Here is my input:
- About my business: [PASTE 1 PARAGRAPH ABOUT WHAT YOU DO, WHO YOU HELP, AND WHAT MAKES YOU DIFFERENT]
- My goal on LinkedIn: [e.g. get clients / build audience / establish thought leadership / promote my product]
- My tone: [e.g. direct and no-BS / warm and motivational / analytical and data-driven / casual and humorous]
- My audience: [e.g. early-stage founders / marketing managers / freelancers / HR professionals]
- Topics I want to talk about: [LIST 3-5 THEMES e.g. productivity, sales, mindset, AI tools, entrepreneurship]
- Things I never want to say: [e.g. "hustle culture", "crush it", "synergy", list words or phrases to avoid]

Follow this exact process:

1. VOICE ANALYSIS: Based on my paragraph, identify and list my:
   - Sentence structure style (short/punchy vs long/flowing)
   - Vocabulary level (simple vs sophisticated)
   - Personality traits that come through
   - Signature phrases or patterns I seem to use
   - Emotional tone (inspiring / educational / provocative)
   Confirm: "Here is how I will write your posts:" and summarize the voice rules you will follow strictly.

2. CONTENT PILLARS: Define 5 content pillars based on my goals and topics. For each pillar give:
   - Pillar name
   - Why it builds my brand/business
   - 2 example angles I can take

3. 30-DAY POST CALENDAR: Generate all 30 posts. For each post include:
   [DAY #] · [PILLAR NAME] · [POST FORMAT]
   HOOK: (first line, must stop the scroll)
   BODY: (full post content)
   CTA: (one specific call to action)
   ---
   Use this exact mix of formats across the 30 days:
   - 10 storytelling posts (personal experience or lesson)
   - 7 educational posts (tips, frameworks, how-tos)
   - 5 contrarian/opinion posts (challenge a common belief)
   - 4 social proof posts (results, wins, case studies)
   - 2 engagement posts (questions, polls, debates)
   - 2 behind-the-scenes posts (your process or journey)

4. HOOK VAULT: After the 30 posts, give me 10 extra scroll-stopping hooks I can reuse anytime, written in my voice.

5. POSTING RULES: Give me 5 LinkedIn-specific rules I must follow for formatting, hashtags, length, and posting time based on current best practices.

Critical instructions:
- Every post must sound like a human wrote it
- Vary sentence length throughout each post
- Never start two posts with the same word
- Each hook must be completely different in structure
- No emojis unless I specifically use them in my input paragraph
- No hashtags unless I ask for them
- Posts should feel like a conversation, not a press release
\`\`\`

Set aside 30 minutes once, and you've got a month of content that sounds like you instead of zero posts and a guilty conscience.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/this-prompt-writes-30-days-of-linkedin-posts-in-your-voice-from-a-paragraph-about-your-business',
    channel: null,
  },
  {
    id: 'create-quizzes-flashcards-study-guides-with-gemini',
    type: 'article',
    title: "Create Quizzes, Flashcards & Study Guides with Gemini",
    category: ['student'],
    summary: "Turn any set of lecture notes into a study guide before your next exam.",
    content: `It's 11pm, the exam is at 9am, and you're staring at 60 pages of notes you should have started reviewing three days ago. Making flashcards by hand at this point would eat an hour you don't have, and you'll spend half that hour just deciding what's actually important enough to write down.

Gemini is Google's free AI assistant, available at [gemini.google.com](http://gemini.google.com), that can turn class notes or a textbook PDF into a ready-to-use quiz, flashcard set, or study guide.

Gemini can build the whole study set for you in the time it takes to type one sentence.

1. Go to [gemini.google.com](http://gemini.google.com) and sign in.
2. Tell it what you need, being specific: "Quiz me on the rise of industrialization" or "Create flashcards about the French Revolution."
3. Upload your own notes or a textbook PDF first (click the "+") if you want it working from your actual material instead of general knowledge.
4. For a study guide you can keep and edit later, select Canvas before generating.
5. Share the quiz, flashcards, or guide with a classmate from the "Share" button in the top right of the Canvas panel.

It's not a replacement for actually understanding the material, but at 11pm the night before, it's the difference between a real review session and just re-reading the same page four times hoping something sticks.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/how-to-create-quizzes-flashcards-more-with-gemini',
    channel: null,
  },
  {
    id: 'create-qr-codes-in-seconds-with-chatgpt',
    type: 'article',
    title: "Create QR Codes in Seconds with ChatGPT",
    category: ['productivity', 'small-business'],
    summary: "Skip the sketchy \"free\" QR generator with a watermark.",
    content: `You just finished printing 200 flyers for your event this weekend, then somebody in the group chat asks "how do I pay you again" for the fifth time today. You don't have a QR code. You go looking for one online and land on a "free" generator that wants your email, wants you to sign up, and slaps its own logo in the corner of your code like it did you a favor.

That five-minute detour just cost you the flyers. You either reprint everything or hand out something that already looks unfinished.

ChatGPT can generate a free, working QR code for any link directly inside a chat, no signup wall, no watermark, no third-party app required.

1. Open ChatGPT (free tier works).
2. Type: "Create a functional QR code that encodes the URL: [your link]."
3. ChatGPT generates a downloadable QR code image.
4. Scan it with your own phone before you print anything, cheap insurance against a typo in the link.
5. Drop it into your flyer, invoice, business card, or product photo.

Works for anything: a WhatsApp number, an Instagram page, a payment link, a Google Form. Next time someone asks "how do I pay," point at the code instead of typing your account number for the sixth time.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/create-qr-codes-in-seconds-with-chatgpt',
    channel: null,
  },
  {
    id: 'make-any-pdf-beautiful-with-ai',
    type: 'tool',
    title: "Make Any PDF Beautiful with AI",
    category: ['small-business', 'content-creator'],
    summary: "Turn an ugly rate card or resume into something that looks designed.",
    content: '',
    externalUrl: 'https://moda.app',
    sourceUrl: 'https://www.joinhorizon.ai/p/make-any-pdf-beautiful-with-ai',
    channel: null,
  },
  {
    id: 'stop-telling-chatgpt-analyze-my-business',
    type: 'article',
    title: "Stop Telling ChatGPT \"Analyze My Business.\" Use These 5 Prompts Instead",
    category: ['small-business'],
    summary: "Find where your business is quietly losing money, in about ten minutes.",
    content: `Your business feels busy. Orders are coming in, the shop is never empty, your phone doesn't stop. And yet at the end of the month there's somehow less money than the amount of work suggested there should be. You know something's leaking, you just can't point at exactly where, so you keep doing what you've always done and hope next month is better.

A business consultant would charge a few hundred thousand naira to sit you down and tell you what these two prompts will tell you for free, in about ten minutes.

These are two copy-paste prompts for ChatGPT or Claude, a Pricing Audit and an Offer Autopsy, that use your own numbers to find where a business is underpricing, misaligned, or wasting time on the wrong offer.

1. Pricing Audit: paste your offer, current price, and rough delivery cost, and get a direct read on whether you're underpricing, overpricing, or misaligned with your market.
2. Offer Autopsy: list everything you sell with rough revenue and time spent on each, and find out which offer has the worst time-to-revenue ratio and which one to cut.
3. Run both back to back. The pricing prompt tells you if you're charging enough. The offer autopsy tells you if you're spending time on the wrong thing entirely.
4. Be honest with your numbers. Vague inputs get you vague advice, and vague advice doesn't fix a leak.
5. Treat the output as a starting point for a real decision, not a verdict carved in stone.

**Prompt 1 (Pricing Audit):**

\`\`\`
I run a [type of business] and my main offer is [describe offer]. I currently charge [price] and my costs to deliver it are roughly [cost]. My target client is [describe client]. Based on this, I want you to act as a pricing consultant. Analyze whether my pricing is too low, too high, or misaligned with my market. Point out any obvious gaps, and suggest 2–3 pricing adjustments I should consider, including whether I should restructure, repackage, or reposition the offer entirely.
\`\`\`

**Prompt 2 (Offer Autopsy):**

\`\`\`
Here are the offers/services/products I currently sell: [list them with rough monthly revenue and time spent on each]. Act as a business strategist. Identify which offer has the worst time-to-revenue ratio, which one has the most untapped potential, and which one I should consider cutting or restructuring. Be direct and specific.
\`\`\`

Ten minutes with these two prompts and you'll know more about where your money actually goes than a month of "just work harder" ever told you.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/stop-telling-chatgpt-analyze-my-business-use-these-prompts-to-find-where-you-re-losing-money',
    channel: null,
  },
  {
    id: 'chatgpt-work-completely-changes-how-you-use-chatgpt',
    type: 'video',
    title: 'ChatGPT Work Completely Changes How You Use ChatGPT (full guide)',
    category: ['productivity', 'small-business'],
    summary: 'A full walkthrough of ChatGPT features most people never turn on.',
    content: '',
    externalUrl: 'https://youtube.com/watch?v=tqKGaqaQkNk',
    sourceUrl: 'https://youtube.com/watch?v=tqKGaqaQkNk',
    channel: 'Futurepedia',
  },
  {
    id: 'from-zero-to-your-first-ai-voice-agent',
    type: 'video',
    title: 'From Zero to Your First AI Voice Agent in 18 Minutes (No Coding)',
    category: ['small-business'],
    summary: 'Build a voice agent that answers customer calls, no code required.',
    content: '',
    externalUrl: 'https://youtube.com/watch?v=oB7gia1kC_g',
    sourceUrl: 'https://youtube.com/watch?v=oB7gia1kC_g',
    channel: 'Liam Ottley',
  },
  {
    id: 'full-claude-tutorial-beginner-to-advanced',
    type: 'video',
    title: 'Full Claude Tutorial: Beginner to Advanced in 19 Minutes',
    category: ['productivity'],
    summary: 'Everything Claude can do, from your first prompt to advanced workflows.',
    content: '',
    externalUrl: 'https://youtube.com/watch?v=WSPChlfxJyA',
    sourceUrl: 'https://youtube.com/watch?v=WSPChlfxJyA',
    channel: 'Futurepedia',
  },
  {
    id: 'how-i-use-claude-to-automate-content-creation',
    type: 'video',
    title: 'How I Use Claude to Automate 99% of Content Creation (Full Guide)',
    category: ['content-creator'],
    summary: 'One creator\'s real Claude workflow for producing content on autopilot.',
    content: '',
    externalUrl: 'https://youtube.com/watch?v=WvuLxxDY37U',
    sourceUrl: 'https://youtube.com/watch?v=WvuLxxDY37U',
    channel: 'Jason Lee',
  },
  {
    id: 'how-to-make-20000-a-month-with-claude-code',
    type: 'video',
    title: 'How to Make $20,000/Month with Claude Code',
    category: ['small-business', 'productivity'],
    summary: 'A real workflow breakdown using Claude Code, not just an income claim.',
    content: '',
    externalUrl: 'https://youtube.com/watch?v=NlGIl5-gpHM',
    sourceUrl: 'https://youtube.com/watch?v=NlGIl5-gpHM',
    channel: 'Liam Ottley',
  },
  {
    id: 'how-to-start-making-ai-videos-in-2026',
    type: 'video',
    title: 'How to Start Making AI Videos in 2026: Full Course',
    category: ['content-creator'],
    summary: 'A full course on generating AI video content, start to finish.',
    content: '',
    externalUrl: 'https://youtube.com/watch?v=gY9KTfMGauU',
    sourceUrl: 'https://youtube.com/watch?v=gY9KTfMGauU',
    channel: 'Youri van Hofwegen',
  },
  {
    id: 'how-to-use-google-gemini-better-than-99-percent',
    type: 'video',
    title: 'How to Use Google Gemini Better Than 99% of People',
    category: ['student', 'productivity'],
    summary: 'The Gemini features almost nobody actually uses.',
    content: '',
    externalUrl: 'https://youtube.com/watch?v=Zm9El6rng-o',
    sourceUrl: 'https://youtube.com/watch?v=Zm9El6rng-o',
    channel: 'Futurepedia',
  },
  {
    id: 'learn-97-percent-of-claude-in-under-16-minutes',
    type: 'video',
    title: 'Learn 97% of Claude in Under 16 Minutes',
    category: ['productivity'],
    summary: 'The fastest, most-watched crash course on Claude out there.',
    content: '',
    externalUrl: 'https://youtube.com/watch?v=wZeOwqmSw84',
    sourceUrl: 'https://youtube.com/watch?v=wZeOwqmSw84',
    channel: 'Dan Martell',
  },
  {
    id: 'master-notebooklm-in-2026',
    type: 'video',
    title: "Master NotebookLM in 2026 Before It's Too Late",
    category: ['student', 'productivity'],
    summary: 'Turn any material into study guides, quizzes, and audio overviews.',
    content: '',
    externalUrl: 'https://youtube.com/watch?v=KXT_YJ4rAMo',
    sourceUrl: 'https://youtube.com/watch?v=KXT_YJ4rAMo',
    channel: 'Science and Fun Motivation',
  },
  {
    id: 'youre-not-behind-yet-how-to-build-ai-agents',
    type: 'video',
    title: "You're Not Behind (Yet): How to Build AI Agents in 2026 (no coding)",
    category: ['small-business'],
    summary: 'Build your first AI agent without writing a line of code.',
    content: '',
    externalUrl: 'https://youtube.com/watch?v=ibFJ--CH3cQ',
    sourceUrl: 'https://youtube.com/watch?v=ibFJ--CH3cQ',
    channel: 'Futurepedia',
  },
]
