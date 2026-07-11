'use client'

import Link from 'next/link'
import { notFound, useRouter } from 'next/navigation'
import ActionStepCard from '@/components/ActionStepCard'
import VideoPlayer from '@/components/VideoPlayer'
import { courses } from '@/data/courses'
import { markComplete } from '@/lib/progress'

export default function LessonPage({
  params,
}: {
  params: { courseSlug: string; lessonId: string }
}) {
  const router = useRouter()
  const course = courses.find((c) => c.slug === params.courseSlug)
  if (!course) notFound()

  const lessonId = Number(params.lessonId)
  const lessonIndex = course.lessons.findIndex((l) => l.id === lessonId)
  const lesson = course.lessons[lessonIndex]
  if (!lesson) notFound()

  const prevLesson = course.lessons[lessonIndex - 1]
  const nextLesson = course.lessons[lessonIndex + 1]

  function handleMarkComplete() {
    markComplete(course!.slug, lesson.id)
    if (nextLesson) {
      router.push(`/course/${course!.slug}/lesson/${nextLesson.id}`)
    } else {
      router.push(`/course/${course!.slug}`)
    }
  }

  return (
    <div className="min-h-screen bg-light-bg">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <nav className="mb-6 flex flex-wrap items-center gap-2 font-body text-sm text-light-text-secondary">
          <Link href="/" className="hover:text-light-text">
            Home
          </Link>
          <span>→</span>
          <Link href={`/course/${course.slug}`} className="hover:text-light-text">
            {course.title}
          </Link>
          <span>→</span>
          <span className="text-light-text">{lesson.title}</span>
        </nav>

        <div className="mb-6">
          <VideoPlayer youtubeId={lesson.youtubeId} />
        </div>

        <p className="mb-1 font-body text-xs italic text-light-text-secondary">
          Video: {lesson.notebooklmTitle}
        </p>
        <h1 className="mb-2 font-heading text-2xl font-bold text-light-text">
          {lesson.title}
        </h1>
        <p className="mb-8 font-body text-light-text-secondary">{lesson.description}</p>

        <div className="mb-8 rounded-xl border border-light-border bg-light-card p-5">
          <h2 className="mb-2 font-heading text-sm font-semibold text-light-text">
            Key takeaway
          </h2>
          <p className="font-body text-sm text-light-text-secondary">
            {lesson.resources.takeaway}
          </p>
        </div>

        <ActionStepCard actionStep={lesson.resources.actionStep} />

        <button
          onClick={handleMarkComplete}
          className="mb-6 rounded-lg bg-brand-purple px-6 py-3 font-body text-sm font-semibold text-white"
        >
          Mark as complete
        </button>

        {nextLesson && (
          <p className="mb-10 font-body text-sm italic text-light-text-secondary">
            {lesson.resources.nextTeaser}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-light-border pt-6 font-body text-sm">
          {prevLesson ? (
            <Link
              href={`/course/${course.slug}/lesson/${prevLesson.id}`}
              className="text-light-text-secondary hover:text-light-text"
            >
              ← {prevLesson.title}
            </Link>
          ) : (
            <span />
          )}
          {nextLesson ? (
            <Link
              href={`/course/${course.slug}/lesson/${nextLesson.id}`}
              className="text-light-text-secondary hover:text-light-text"
            >
              {nextLesson.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  )
}
