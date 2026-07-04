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
          ? 'border-brand-purple bg-dark-card'
          : 'border-dark-border bg-dark-card hover:border-white/20'
      }`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-dark-border font-body text-sm text-white/50">
        {completed ? '✓' : locked ? '🔒' : lesson.id}
      </div>
      <div className="flex-1">
        <h4 className="font-heading text-base font-semibold text-white">
          {lesson.title}
        </h4>
        <p className="font-body text-sm text-white/50">{lesson.description}</p>
      </div>
      <span className="shrink-0 font-body text-xs text-white/50">
        {lesson.duration}
      </span>
    </Link>
  )
}
