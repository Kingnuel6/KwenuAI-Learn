// /lib/leads.ts
// localStorage helper for the site-wide lead gate: prompts once per browser.

const LEADS_KEY = 'kwenuai_learn_leads'

type LeadFlags = {
  unlocked?: boolean
  guides?: boolean // legacy flag from the guides-only gate, still honored
}

function readFlags(): LeadFlags {
  if (typeof window === 'undefined') return {}
  const raw = localStorage.getItem(LEADS_KEY)
  if (!raw) return {}
  try {
    return JSON.parse(raw) as LeadFlags
  } catch {
    return {}
  }
}

export function hasUnlockedContent(): boolean {
  const flags = readFlags()
  return !!(flags.unlocked || flags.guides)
}

export function markContentUnlocked(): void {
  if (typeof window === 'undefined') return
  const flags = readFlags()
  flags.unlocked = true
  localStorage.setItem(LEADS_KEY, JSON.stringify(flags))
}
