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
  },
  {
    id: 'professional-email-template-using-ai-mailui',
    type: 'article',
    title: "Professional Email Template Using AI (MailUI)",
    category: ['small-business'],
    summary: "Fifteen minutes to an email that looks like a real business sent it.",
    content: `You put together a newsletter announcing your new product, hit send, and check the open rate the next day: barely anyone opened it, and of the ones who did, almost nobody clicked. You go back and actually look at what you sent, and it's black text on white, no structure, no button, nothing that separates it from spam. It looked like an afterthought because, honestly, it was one, thrown together in fifteen minutes between other tasks.

An email that looks unfinished doesn't get a second chance. People decide whether to keep reading in about two seconds.

MailUI is a free drag-and-drop email builder that creates professional, branded email templates without needing any code or design software.

MailUI's drag-and-drop builder fixes that without needing to touch code.

1. Go to [MailUI.co](http://MailUI.co), log in, and open the Email Builder.
2. Pick a ready-made template or start from a blank one.
3. Drag in blocks for the header, body, and footer, keep the structure simple.
4. Set your brand colors, fonts, and one clear CTA button. One offer, one button, no clutter.
5. Write a short subject line and preheader, a clear headline, and scannable body text.
6. Add personalization tags like {first_name} if your email platform supports it, then preview on desktop and mobile before sending a test.
7. Export the HTML and upload it into whatever you send from.

Fifteen minutes gets you something that actually looks like it came from a real business, and that's usually the whole difference between opened and ignored.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/google-s-nano-banana-pro-solves-ai-s-biggest-text-problem',
  },
  {
    id: 'product-launch-landing-page-in-youware',
    type: 'article',
    title: "Product-Launch Landing Page in YouWare",
    category: ['small-business'],
    summary: "Get a real launch page live in two days, not two weeks.",
    content: `You're two days from launching a product and someone asks for "the link," meaning a proper page where people can actually see what it is, not just a caption on Instagram. You don't have one. Building a real website feels like a whole separate project, one you don't have the time, budget, or patience for two days before launch, so you consider just skipping it and hoping the Instagram post does enough work on its own.

It won't. A caption disappears in the feed within a day. A proper page is where someone lands when they're actually interested, and if that page doesn't exist, neither does the sale you were hoping for.

YouWare is a no-code website builder that can generate a complete, working landing page, hero section, features, pricing, FAQ, from a single written prompt, no developer required.

YouWare builds the whole thing, hero section, features, testimonials, pricing, FAQ, from a single prompt, no developer required.

1. Create a YouWare account, confirm your email, and start a new project. Choose a Landing Page template or a blank site.
2. Generate the page with one prompt: "Create a modern product-launch landing page with hero, features, testimonials, email signup, pricing, FAQ, and footer. Use my brand colors and a clean, responsive layout."
3. Replace the placeholder headline, subheadline, and CTAs with your real copy, and add product screenshots and 3 core features.
4. Connect email capture (Mailchimp or similar) so you're actually collecting leads, not just showing a form that goes nowhere.
5. Preview on mobile first, since most of your visitors will land on a phone, fix any spacing or button issues, then publish to a YouWare subdomain or connect your own domain.

Two days is enough time to have a real page live before launch, instead of a caption that vanishes into the feed by the following morning.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/how-to-build-a-product-launch-landing-page-with-ai',
  },
  {
    id: 'pitch-a-business-deck-with-pitch-com',
    type: 'article',
    title: "Pitch a Business Deck with Pitch.com's AI Presentation Maker",
    category: ['small-business'],
    summary: "Turn a handful of bullet points into an investor-ready deck.",
    content: `You finally got a meeting with an investor, or a bank, or a grant panel, whatever the opportunity is, it's real and it's in three days. You open PowerPoint to start the deck and immediately hit the wall everyone hits: you know your business better than anyone in the room, but you have no idea how to make that knowledge look like a deck a stranger can understand in ten slides. You end up with either a wall of text nobody will read, or six slides that don't actually say anything, three days from now, still staring at slide one.

The deck is often the difference between getting a real conversation and getting a polite no. Not because your business is worse than the ones that got funded, but because the pitch didn't communicate it.

Pitch is a free presentation tool with an AI Presentation Maker that turns short bullet points into a structured, investor-ready slide deck.

Pitch's AI Presentation Maker turns a handful of bullet points into a structured deck you can actually walk someone through.

1. Write short bullets for 10-12 slides: Problem, Solution, Market, Product, Traction, Business Model, Competition, Team, Financials, and the Ask.
2. Go to [pitch.com](http://pitch.com), create a free account, click "New Presentation," and pick a pitch or investor template.
3. Select AI Presentation Maker and type a short brief describing your business and what you're asking for, it drafts structured slides from that.
4. Replace the stock visuals with your own product photos or real numbers, and match your brand colors.
5. Keep one message per slide. Export as PDF or PPTX, or share a link, then actually practice saying it out loud before you send it to anyone.

Good for accelerator applications, a bank loan pitch, or a grant submission. Three days is enough time to build something that actually gets you a second conversation, if you stop trying to write it from a blank page.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/softbank-and-openai-launch-joint-venture-in-japan',
  },
  {
    id: 'build-a-mini-ai-customer-support-bot-yourgpt',
    type: 'article',
    title: "Build a Mini AI Customer Support Bot (YourGPT)",
    category: ['small-business'],
    summary: "Answer customer questions automatically, even while you're asleep.",
    content: `It's 10pm and your Instagram DMs have four new messages: "is this still available," "do you deliver to Surulere," "how much for the blue one," and one customer asking the exact same question you already answered this morning. You're not running a business at this point, you're running a customer service desk, alone, with no closing time, and every hour you spend retyping the same answer is an hour you're not spending on the parts of the business that actually need you.

The volume itself isn't the problem, the repetition is. Most of what people ask you has a fixed answer. It doesn't need your judgment, it needs a fast, correct response, at any hour, without you personally typing it.

YourGPT is a tool that builds a custom chatbot trained on your own business information, so it can answer customer questions automatically on your website or WhatsApp, and hand off to you only when it's genuinely stuck.

YourGPT builds a chatbot trained on your own business info that handles exactly this, and hands off to you only when it's genuinely stuck.

1. Create a YourGPT account and start a new agent project.
2. Go to the Training / Knowledge Base section and feed it your real business info: paste your website URLs (FAQ, policies), upload key documents (PDFs, price lists), and add manual Q&A pairs for anything that needs an exact answer, delivery time, return policy, pricing.
3. Set the widget's colors, logo, and welcome message to match your brand.
4. Define a trigger phrase like "talk to an agent" and set up an alert (Slack or email) for whenever the bot isn't confident, so a real person steps in.
5. Copy the widget script from Integrations and paste it into your website (works with Shopify, WordPress, and most site builders).
6. Test it with the questions your customers actually ask, then switch it to Active.

Check the Resolution Rate weekly and feed it the questions it couldn't answer to keep it improving. Built for anyone running volume on WhatsApp Business, Instagram, or a storefront site who's tired of being the customer service desk at 10pm.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/xai-s-grok-4-1-sets-new-standard-for-emotional-and-human-aligned-ai',
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
  },
  {
    id: 'work-with-pdfs-10x-faster-using-ai-updf',
    type: 'article',
    title: "Work with PDFs 10x Faster Using AI (UPDF)",
    category: ['student', 'small-business', 'productivity'],
    summary: "Ask your PDF a question instead of reading the whole thing.",
    content: `You've got a 40-page supplier contract in your downloads folder, written in English that seems designed specifically to make you fall asleep. You need to know exactly one thing from it: the payment terms. So you open it, start reading, lose focus by page 3, and end up scrolling to the end hoping the important part is highlighted somehow. It isn't. Now you're either reading the whole thing properly, which eats your afternoon, or signing something you haven't fully understood, which is worse.

This is the actual cost of PDFs: they're not built to be searched, they're built to be printed. Every question you have about one turns into a manual hunt.

UPDF is a PDF app with a built-in AI Assistant that lets you ask questions about a document directly, instead of reading the whole thing.

UPDF fixes the actual friction, not just the viewing.

1. Go to the UPDF website and download the app for your device.
2. Install it and drop in your PDF.
3. Use the built-in AI Assistant to chat with the document directly: "what are the payment terms" gets you an answer in seconds instead of a full read-through.
4. Use side-by-side translation if the document isn't in a language you're fully comfortable with, it keeps the original layout intact while showing the translation next to it (12 languages supported).
5. Convert to Word, Excel, or PowerPoint when you actually need to edit the content, not just read it.

It's freemium, the free version has limits, but no forced trial-then-charge trap. Good for students buried in readings and for anyone who deals with contracts, reports, or research PDFs on a regular basis. Next contract, you'll know the payment terms in thirty seconds instead of an afternoon.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/work-with-pdfs-10x-faster-using-ai',
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
  },
  {
    id: 'use-claude-to-build-edit-and-refine-presentations-inside-powerpoint',
    type: 'article',
    title: "Use Claude to Build, Edit, and Refine Presentations Inside PowerPoint",
    category: ['small-business', 'content-creator', 'productivity'],
    summary: "Skip the blank-slide problem entirely.",
    content: `It's 11pm the night before the pitch, and you're still moving text boxes around slide 7, trying to make "Our Growth Strategy" not look like it was designed by someone who's never opened PowerPoint before tonight. You've rewritten the same three bullet points four times. The deck is due at 9am. You are, at this point, just rearranging furniture in a house that was never going to look good no matter where the couch goes.

This is the actual cost of building decks from a blank slide: it's not that you don't have good ideas, it's that turning ideas into slides that look intentional eats hours you don't have the night before something matters.

Claude's PowerPoint add-in is a Microsoft Marketplace tool that lets you build and edit real presentation slides using plain-language instructions, instead of starting from a blank slide.

Claude's PowerPoint add-in skips the blank-slide part entirely. You describe what you need in plain language, it builds and edits the actual slides.

1. Install the "Claude by Anthropic in PowerPoint" add-in from the Microsoft Marketplace.
2. Open PowerPoint. You'll find Claude under the add-ins section, click it to open the sidebar.
3. Ask it to build a full deck from a brief: "Create a presentation based on this marketing campaign brief. I need about 12 slides covering target audience, strategy, timeline, budget, and expected outcomes."
4. Ask it to match your existing template if you already have brand slides, so it doesn't look like it was bolted on from somewhere else.
5. Keep editing slide by slide with follow-up prompts instead of manually dragging text boxes around at midnight.

Heads up: this add-in needs a Claude Pro, Max, Team, or Enterprise plan, it's not on the free tier. Worth it the first time you're not still awake at midnight the night before a pitch.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/how-to-use-claude-to-build-edit-and-refine-presentations-inside-powerpoint',
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
  },
  {
    id: 'make-any-pdf-beautiful-with-ai',
    type: 'article',
    title: "Make Any PDF Beautiful with AI",
    category: ['small-business', 'content-creator'],
    summary: "Turn an ugly rate card or resume into something that looks designed.",
    content: `You send your rate card to a potential client. Fifteen minutes later they've gone quiet. You check it again and see it for what it actually is: black text on a white background, Times New Roman, formatted in Word years ago and never touched since. Compare that to the last "professional" quote you received from someone else, clean columns, a logo, a bit of color, and you already know why they went quiet.

This isn't really about design skill. Most people running a small business or freelance gig don't have the time or the software to make things look expensive. You end up choosing between spending a whole afternoon fighting with Canva, or sending the ugly version anyway and hoping the client judges you on the numbers, not the paper.

Moda is a tool that rebuilds a poorly formatted PDF, a resume, invoice, or rate card, into a properly designed version, using free monthly credits and no design skill required.

Moda skips the afternoon. Upload the ugly PDF, get a rebuilt, designed version back.

1. Go to [moda.app](http://moda.app) and sign in (you get free monthly credits).
2. Upload the PDF you want fixed, resume, invoice, rate card, whatever's embarrassing you right now.
3. Moda pulls out the text and images and rebuilds the layout with real design.
4. Make manual tweaks to text, images, or spacing if something's off.
5. Export it back out as a PDF.

Try it on the free tier before deciding whether the paid version is worth it. The next quote you send should look like the business you're actually trying to run, not the one you started with a laptop and good intentions.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/make-any-pdf-beautiful-with-ai',
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
  },
]
