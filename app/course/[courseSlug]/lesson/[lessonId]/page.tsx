'use client'

import Link from 'next/link'
import { notFound, useRouter } from 'next/navigation'
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
    <div className="min-h-screen bg-dark-bg">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <nav className="mb-6 flex flex-wrap items-center gap-2 font-body text-sm text-white/50">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>→</span>
          <Link href={`/course/${course.slug}`} className="hover:text-white">
            {course.title}
          </Link>
          <span>→</span>
          <span className="text-white">{lesson.title}</span>
        </nav>

        <div className="mb-6">
          <VideoPlayer youtubeId={lesson.youtubeId} />
        </div>

        <h1 className="mb-2 font-heading text-2xl font-bold text-white">
          {lesson.title}
        </h1>
        <p className="mb-8 font-body text-white/50">{lesson.description}</p>

        <button
          onClick={handleMarkComplete}
          className="mb-10 rounded-lg bg-brand-purple px-6 py-3 font-body text-sm font-semibold text-white"
        >
          Mark as complete
        </button>

        <div className="flex items-center justify-between border-t border-dark-border pt-6 font-body text-sm">
          {prevLesson ? (
            <Link
              href={`/course/${course.slug}/lesson/${prevLesson.id}`}
              className="text-white/50 hover:text-white"
            >
              ← {prevLesson.title}
            </Link>
          ) : (
            <span />
          )}
          {nextLesson ? (
            <Link
              href={`/course/${course.slug}/lesson/${nextLesson.id}`}
              className="text-white/50 hover:text-white"
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
