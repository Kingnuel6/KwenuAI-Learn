'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import CourseCard from '@/components/CourseCard'
import ResourceCard from '@/components/ResourceCard'
import BusinessAuditModal from '@/components/BusinessAuditModal'
import { courses } from '@/data/courses'
import { resources, type ResourceCategory } from '@/data/resources'

type TabKey = 'courses' | 'video' | 'article' | 'tool'

const TABS: { key: TabKey; label: string }[] = [
  { key: 'courses', label: 'Courses' },
  { key: 'video', label: 'Videos' },
  { key: 'article', label: 'Reads & Guides' },
  { key: 'tool', label: 'Tools' },
]

const TAB_DESCRIPTIONS: Record<TabKey, string> = {
  courses: 'Full, structured courses built entirely by KwenuAI, start to finish, lesson by lesson.',
  video: 'The best AI tutorials on YouTube, hand-picked by KwenuAI. We watch before we link.',
  article:
    'Articles and guides worth your ten minutes, rewritten in plain language where the original was too technical.',
  tool: 'Free or low-cost AI tools that quietly do more than people realize.',
}

const CATEGORY_FILTERS: { key: 'all' | ResourceCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'small-business', label: 'Small Business' },
  { key: 'content-creator', label: 'Content Creator' },
  { key: 'student', label: 'Student' },
  { key: 'productivity', label: 'Productivity' },
]

const EMPTY_MESSAGES: Record<Exclude<TabKey, 'courses'>, string> = {
  video: 'No videos yet. Check back soon.',
  article: 'No reads or guides yet. Check back soon.',
  tool: 'No tools yet. Check back soon.',
}

const FAQ_ITEMS = [
  {
    question: 'Is KwenuAI Learn free?',
    answer:
      'Yes. Every course, video, guide, and tool listed is free to access, no account or signup required.',
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'No. KwenuAI Learn is built specifically for non-technical people, small business owners, students, freelancers, and content creators.',
  },
  {
    question: 'How often is new content added?',
    answer: 'Regularly, as new videos, guides, and tools are found and reviewed.',
  },
]

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('courses')
  const [activeCategory, setActiveCategory] = useState<'all' | ResourceCategory>('all')
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false)

  const liveCourses = courses.filter((c) => c.status === 'live')
  const comingSoonCourses = courses.filter((c) => c.status === 'coming-soon')

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
        <h1 className="mb-3 font-heading text-3xl font-extrabold text-light-text sm:text-4xl">
          Learn AI the practical way
        </h1>
        <p className="mb-8 max-w-3xl font-body text-light-text-secondary">
          KwenuAI Learn is a free resource hub for people who want to actually use AI, not just
          read about it. One full course built entirely by KwenuAI, plus a growing shortlist of
          the best outside videos, guides, and tools we&apos;ve personally checked are worth your
          time. No login. No signup. No cost.
        </p>

        <div className="mb-3 -mx-6 overflow-x-auto px-6">
          <div className="flex w-max gap-2 font-body text-sm font-semibold">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 ${
                  activeTab === tab.key
                    ? 'bg-flagship-bg text-white'
                    : 'border border-light-border bg-white text-light-text-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="whitespace-nowrap rounded-lg border border-light-border bg-white px-4 py-2 text-light-text-secondary"
            >
              Business AI Audit
            </button>
          </div>
        </div>

        <p className="mb-6 font-body text-sm text-light-text-secondary">
          {TAB_DESCRIPTIONS[activeTab]}
        </p>

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
              {liveCourses.map((course) => (
                <CourseCard key={course.slug} course={course} flagship />
              ))}
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
        ) : (
          <section className="mb-12">
            <div className="mb-4 flex items-baseline justify-between">
              <h2 className="font-heading text-xl font-semibold text-light-text">
                Explore the library
              </h2>
              <span className="font-body text-xs font-semibold uppercase tracking-wide text-light-text-muted">
                {filteredResources.length} curated {filteredResources.length === 1 ? 'resource' : 'resources'}
              </span>
            </div>
            {filteredResources.length > 0 ? (
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
          </section>
        )}

        <section className="mt-16 border-t border-light-border pt-10">
          <h2 className="mb-6 font-heading text-xl font-bold text-light-text">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.question}
                className="rounded-[10px] border border-light-border bg-light-card p-5"
              >
                <h3 className="mb-2 font-heading text-sm font-bold text-light-text">
                  {item.question}
                </h3>
                <p className="font-body text-sm text-light-text-secondary">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
        />
      </main>

      <BusinessAuditModal open={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </div>
  )
}
