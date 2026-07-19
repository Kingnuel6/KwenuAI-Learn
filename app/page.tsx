'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import CourseCard from '@/components/CourseCard'
import ResourceCard from '@/components/ResourceCard'
import { courses } from '@/data/courses'
import { resources, type ResourceCategory } from '@/data/resources'

type TabKey = 'courses' | 'video' | 'article' | 'tool'

const TABS: { key: TabKey; label: string }[] = [
  { key: 'courses', label: 'Courses' },
  { key: 'video', label: 'Videos' },
  { key: 'article', label: 'Reads & guides' },
  { key: 'tool', label: 'Tools' },
]

const CATEGORY_FILTERS: { key: 'all' | ResourceCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'small-business', label: 'Small business' },
  { key: 'content-creator', label: 'Content creator' },
  { key: 'student', label: 'Student' },
  { key: 'productivity', label: 'Productivity' },
]

const EMPTY_MESSAGES: Record<Exclude<TabKey, 'courses'>, string> = {
  video: 'No videos yet. Check back soon.',
  article: 'No reads or guides yet. Check back soon.',
  tool: 'No tools yet. Check back soon.',
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('courses')
  const [activeCategory, setActiveCategory] = useState<'all' | ResourceCategory>('all')

  const liveCourses = courses.filter((c) => c.status === 'live')
  const comingSoonCourses = courses.filter((c) => c.status === 'coming-soon')

  const tabCounts: Record<TabKey, number> = {
    courses: courses.length,
    video: resources.filter((r) => r.type === 'video').length,
    article: resources.filter((r) => r.type === 'article').length,
    tool: resources.filter((r) => r.type === 'tool').length,
  }

  function handleTabChange(tab: TabKey) {
    setActiveTab(tab)
    setActiveCategory('all')
  }

  const filteredResources =
    activeTab === 'courses'
      ? []
      : resources.filter(
          (r) =>
            r.type === activeTab &&
            (activeCategory === 'all' || r.category.includes(activeCategory))
        )

  return (
    <div className="min-h-screen bg-light-bg">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="mb-2 font-heading text-3xl font-bold text-light-text sm:text-4xl">
          The AI Trybe Library
        </h1>
        <p className="mb-8 font-body text-light-text-secondary">
          Full courses we built ourselves, plus the best videos, guides, and tools we found worth
          your time.
        </p>

        <div className="mb-4 -mx-6 overflow-x-auto px-6">
          <div className="flex w-max gap-6 border-b border-light-border font-body text-sm font-medium">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`flex items-center gap-2 whitespace-nowrap border-b-2 pb-3 pt-1 ${
                  activeTab === tab.key
                    ? 'border-brand-purple text-brand-purple'
                    : 'border-transparent text-light-text-secondary'
                }`}
              >
                {tab.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    activeTab === tab.key
                      ? 'bg-brand-purple-tint text-brand-purple'
                      : 'bg-light-border text-light-text-secondary'
                  }`}
                >
                  {tabCounts[tab.key]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {activeTab !== 'courses' && (
          <div className="mb-8 -mx-6 overflow-x-auto px-6">
            <div className="flex w-max gap-2">
              {CATEGORY_FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveCategory(filter.key)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 font-body text-xs font-medium ${
                    activeCategory === filter.key
                      ? 'bg-brand-purple text-white'
                      : 'border border-light-border bg-white text-light-text-secondary'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'courses' ? (
          <>
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-xl font-semibold text-light-text">
                Live courses
              </h2>
              <div className="flex flex-col gap-5">
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
                <div className="flex flex-col gap-5">
                  {comingSoonCourses.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center font-body text-sm text-light-text-secondary">
            {EMPTY_MESSAGES[activeTab]}
          </p>
        )}
      </main>
    </div>
  )
}
