import Link from 'next/link'
import type { Resource, ResourceCategory } from '@/data/resources'

const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  'small-business': 'Small business',
  'content-creator': 'Content creator',
  student: 'Student',
  productivity: 'Productivity',
}

const TYPE_BADGE: Record<
  Resource['type'],
  { label: string; bg: string; text: string; icon: React.ReactNode }
> = {
  article: {
    label: 'Guide',
    bg: 'bg-badge-article-bg',
    text: 'text-badge-article-text',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
  },
  video: {
    label: 'Video',
    bg: 'bg-badge-video-bg',
    text: 'text-badge-video-text',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  tool: {
    label: 'Tool',
    bg: 'bg-badge-tool-bg',
    text: 'text-badge-tool-text',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2Z" />
      </svg>
    ),
  },
}

export default function ResourceCard({ resource }: { resource: Resource }) {
  const badge = TYPE_BADGE[resource.type]
  const categoryLabel = resource.category.map((c) => CATEGORY_LABELS[c]).join(', ')

  const cardContent = (
    <div className="flex h-full flex-col rounded-xl border border-light-border bg-light-card p-4 transition-shadow hover:shadow-lg">
      <span
        className={`mb-3 inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 font-body text-xs font-medium ${badge.bg} ${badge.text}`}
      >
        {badge.icon}
        {badge.label}
      </span>
      <h3 className="mb-2 line-clamp-2 font-heading text-base font-semibold text-light-text">
        {resource.title}
      </h3>
      <p className="mt-auto font-body text-xs text-light-text-muted">{categoryLabel}</p>
    </div>
  )

  if (resource.type === 'article') {
    return (
      <Link href={`/resource/${resource.id}`} className="block h-full">
        {cardContent}
      </Link>
    )
  }

  return (
    <a
      href={resource.externalUrl ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {cardContent}
    </a>
  )
}
