// /data/resources.ts
// Single source of truth for library resources (videos, articles, tools).
// These are NOT courses: standalone curated pieces shown on the home page library tabs.

export type ResourceType = 'article' | 'video' | 'tool'
export type ResourceCategory = 'small-business' | 'content-creator' | 'student' | 'productivity'

export type Resource = {
  id: string
  type: ResourceType
  title: string
  category: ResourceCategory[]
  summary: string              // one-sentence description shown on the card
  content: string              // full rewritten body (markdown), only used when type is 'article'
  externalUrl: string | null   // for type 'video' or 'tool': link out directly
  sourceUrl: string            // original source URL, stored but not displayed on the card
}

export const resources: Resource[] = [
  // Populate this array from the KwenuAI Content Bank Notion database.
  {
    id: 'chatgpt-business-prompts',
    type: 'article',
    title: 'Stop telling ChatGPT "analyze my business": use these 5 prompts instead',
    category: ['small-business'],
    summary: 'Two prompts that find where your business is leaking money, in about ten minutes.',
    content: `Full rewritten article body goes here in markdown.`,
    externalUrl: null,
    sourceUrl: 'https://www.joinhorizon.ai/p/stop-telling-chatgpt-analyze-my-business-use-these-prompts-to-find-where-you-re-losing-money',
  },
  // ...add remaining entries
]
