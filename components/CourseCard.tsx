import Link from 'next/link'
import type { Course } from '@/data/courses'

function CapIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
    </svg>
  )
}

export default function CourseCard({ course, flagship = false }: { course: Course; flagship?: boolean }) {
  const isLive = course.status === 'live'

  if (flagship && isLive) {
    return (
      <Link
        href={`/course/${course.slug}`}
        className="flex flex-col overflow-hidden rounded-xl bg-flagship-bg sm:flex-row"
      >
        <div
          className="flex shrink-0 flex-col justify-center gap-2 p-6 sm:w-60"
          style={{ background: 'linear-gradient(180deg, #8B1E8E 0%, #53205E 100%)' }}
        >
          <CapIcon className="text-white" />
          <span className="font-body text-xs font-bold uppercase tracking-wide text-white/70">
            KwenuAI Course 01
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8">
          <span className="font-body text-xs font-medium text-white/50">{course.tag}</span>
          <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {course.title}
          </h3>
          <p className="max-w-xl font-body text-sm text-white/70">{course.tagline}</p>
          <p className="font-body text-xs font-semibold uppercase tracking-wide text-white/40">
            {course.lessonCount} lessons · {course.totalDuration} total
          </p>
          <span className="mt-2 inline-block w-fit rounded-lg bg-white px-5 py-2.5 font-body text-sm font-semibold text-flagship-bg">
            Start Learning
          </span>
        </div>
      </Link>
    )
  }

  const content = (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-xl border border-light-border bg-light-card transition-shadow sm:flex-row ${
        isLive ? 'hover:shadow-lg' : 'opacity-60'
      }`}
    >
      <div className="flex shrink-0 items-center justify-center bg-brand-purple p-6 sm:w-40">
        <CapIcon className="text-white" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="font-body text-xs font-medium text-brand-purple">
            {course.tag}
          </span>
          <span
            className={`rounded-full px-3 py-1 font-body text-xs font-medium ${
              isLive
                ? 'bg-brand-purple-tint text-brand-purple'
                : 'bg-light-border text-light-text-secondary'
            }`}
          >
            {isLive ? 'Live' : 'Coming soon'}
          </span>
        </div>
        <h3 className="mb-2 font-heading text-xl font-semibold text-light-text">
          {course.title}
        </h3>
        <p className="mb-4 font-body text-sm text-light-text-secondary">
          {course.tagline}
        </p>

        {isLive && (
          <div className="mt-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 font-body text-xs text-light-text-secondary">
              <span>{course.lessonCount} lessons</span>
              <span>·</span>
              <span>{course.totalDuration}</span>
            </div>
            <span className="rounded-lg bg-brand-purple px-4 py-2 font-body text-xs font-semibold text-white">
              Start learning
            </span>
          </div>
        )}
      </div>
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
