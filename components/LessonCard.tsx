import Link from 'next/link'
import type { Lesson } from '@/data/courses'

export default function LessonCard({
  lesson,
  courseSlug,
  completed,
  isCurrent,
  locked,
}: {
  lesson: Lesson
  courseSlug: string
  completed: boolean
  isCurrent: boolean
  locked: boolean
}) {
  return (
    <Link
      href={`/course/${courseSlug}/lesson/${lesson.id}`}
      className={`flex items-center gap-4 rounded-xl border p-4 transition-colors ${
        isCurrent
          ? 'border-brand-purple bg-light-card'
          : 'border-light-border bg-light-card hover:border-brand-purple/40'
      }`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-light-border font-body text-sm text-light-text-secondary">
        {completed ? '✓' : locked ? '🔒' : lesson.id}
      </div>
      <div className="flex-1">
        <h4 className="font-heading text-base font-semibold text-light-text">
          {lesson.title}
        </h4>
        <p className="font-body text-sm text-light-text-secondary">{lesson.description}</p>
      </div>
      <span className="shrink-0 font-body text-xs text-light-text-secondary">
        {lesson.duration}
      </span>
    </Link>
  )
}
