import Navbar from '@/components/Navbar'
import CourseCard from '@/components/CourseCard'
import { courses } from '@/data/courses'

export default function Home() {
  const liveCourses = courses.filter((c) => c.status === 'live')
  const comingSoonCourses = courses.filter((c) => c.status === 'coming-soon')

  return (
    <div className="min-h-screen bg-light-bg">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="mb-2 font-heading text-3xl font-bold text-light-text sm:text-4xl">
          Mini-courses for The AI Trybe
        </h1>
        <p className="mb-10 font-body text-light-text-secondary">
          Free, short, video-based courses. No login, no paywall. Just pick a
          course and start learning.
        </p>

        <section className="mb-12">
          <h2 className="mb-4 font-heading text-xl font-semibold text-light-text">
            Live courses
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {liveCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </section>

        {comingSoonCourses.length > 0 && (
          <section>
            <h2 className="mb-4 font-heading text-xl font-semibold text-light-text">
              Coming soon
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {comingSoonCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
