import Link from 'next/link'
import type { Course } from '@/data/courses'

export default function CourseCard({ course }: { course: Course }) {
  const isLive = course.status === 'live'

  const content = (
    <div
      className={`h-full rounded-2xl border border-light-border bg-light-card p-6 transition-shadow ${
        isLive ? 'hover:shadow-lg' : 'opacity-60'
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-body text-xs font-medium text-brand-purple">
          {course.tag}
        </span>
        {!isLive && (
          <span className="rounded-full bg-light-border px-3 py-1 font-body text-xs font-medium text-light-text-secondary">
            Coming soon
          </span>
        )}
      </div>
      <h3 className="mb-2 font-heading text-xl font-semibold text-light-text">
        {course.title}
      </h3>
      <p className="mb-4 font-body text-sm text-light-text-secondary">
        {course.tagline}
      </p>
      {isLive && (
        <div className="flex items-center gap-3 font-body text-xs text-light-text-secondary">
          <span>{course.lessonCount} lessons</span>
          <span>·</span>
          <span>{course.totalDuration}</span>
        </div>
      )}
    </div>
  )

  if (!isLive) {
    return content
  }

  return (
    <Link href={`/course/${course.slug}`} className="block h-full">
      {content}
    </Link>
  )
}
