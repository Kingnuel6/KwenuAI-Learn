const PROGRESS_KEY = 'kwenuai_learn_progress'

type ProgressStore = {
  [courseSlug: string]: number[] // array of completed lesson IDs
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
