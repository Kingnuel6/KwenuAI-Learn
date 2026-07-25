// /lib/leads.ts
// localStorage helpers for gates that should only prompt once per browser.

const LEADS_KEY = 'kwenuai_learn_leads'

type LeadFlags = {
  guides?: boolean
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

export function hasUnlockedGuides(): boolean {
  return !!readFlags().guides
}

export function markGuidesUnlocked(): void {
  if (typeof window === 'undefined') return
  const flags = readFlags()
  flags.guides = true
  localStorage.setItem(LEADS_KEY, JSON.stringify(flags))
}
