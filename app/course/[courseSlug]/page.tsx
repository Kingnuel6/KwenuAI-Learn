'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { notFound, useRouter } from 'next/navigation'
import LessonCard from '@/components/LessonCard'
import ProgressBar from '@/components/ProgressBar'
import { courses, type LessonTier } from '@/data/courses'
import { getProgress } from '@/lib/progress'

const TIER_LABELS: Record<LessonTier, string> = {
  foundation: 'Foundation',
  expanding: 'Expanding Claude',
  power: 'Power User',
}

const TIER_ORDER: LessonTier[] = ['foundation', 'expanding', 'power']

export default function CoursePage({
  params,
}: {
  params: { courseSlug: string }
}) {
  const course = courses.find((c) => c.slug === params.courseSlug)
  const router = useRouter()
  const [completed, setCompleted] = useState<number[]>([])

  useEffect(() => {
    if (course) setCompleted(getProgress(course.slug))
  }, [course])

  if (!course) notFound()

  const firstIncomplete = course.lessons.find((l) => !completed.includes(l.id))
  const currentLessonId = firstIncomplete ? firstIncomplete.id : course.lessons[course.lessons.length - 1]?.id

  return (
    <div className="min-h-screen bg-light-bg">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link href="/" className="mb-8 inline-block font-body text-sm text-light-text-secondary hover:text-light-text">
          ← Home
        </Link>

        <span className="mb-3 block font-body text-xs font-medium text-brand-purple">
          {course.tag}
        </span>
        <h1 className="mb-2 font-heading text-3xl font-bold text-light-text">
          {course.title}
        </h1>
        <p className="mb-6 font-body text-light-text-secondary">{course.tagline}</p>

        <div className="mb-6 flex items-center gap-3 font-body text-sm text-light-text-secondary">
          <span>{course.lessonCount} lessons</span>
          <span>·</span>
          <span>{course.totalDuration}</span>
        </div>

        <div className="mb-6">
          <ProgressBar completed={completed.length} total={course.lessons.length} />
        </div>

        {currentLessonId !== undefined && (
          <button
            onClick={() => router.push(`/course/${course.slug}/lesson/${currentLessonId}`)}
            className="mb-10 rounded-lg bg-brand-purple px-6 py-3 font-body text-sm font-semibold text-white"
          >
            Continue
          </button>
        )}

        <div className="flex flex-col gap-8">
          {TIER_ORDER.map((tier) => {
            const lessons = course.lessons.filter((l) => l.tier === tier)
            if (lessons.length === 0) return null
            return (
              <section key={tier}>
                <h2 className="mb-3 font-heading text-lg font-semibold text-light-text">
                  {TIER_LABELS[tier]}
                </h2>
                <div className="flex flex-col gap-3">
                  {lessons.map((lesson) => (
                    <LessonCard
                      key={lesson.id}
                      lesson={lesson}
                      courseSlug={course.slug}
                      completed={completed.includes(lesson.id)}
                      isCurrent={lesson.id === currentLessonId}
                      locked={lesson.id > currentLessonId!}
                    />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
