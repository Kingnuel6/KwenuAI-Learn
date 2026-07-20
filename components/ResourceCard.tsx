import Link from 'next/link'
import type { Resource, ResourceCategory } from '@/data/resources'

const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  'small-business': 'Small business',
  'content-creator': 'Content creator',
  student: 'Student',
  productivity: 'Productivity',
}

const TYPE_BADGE: Record<Resource['type'], { label: string; text: string }> = {
  article: { label: 'Guide', text: 'text-badge-article-text' },
  video: { label: 'Video', text: 'text-badge-video-text' },
  tool: { label: 'Tool', text: 'text-badge-tool-text' },
}

export default function ResourceCard({ resource }: { resource: Resource }) {
  const badge = TYPE_BADGE[resource.type]
  const categoryLabel = resource.category.map((c) => CATEGORY_LABELS[c]).join(', ')

  const cardContent = (
    <div className="flex h-full flex-col rounded-[10px] border border-light-border bg-light-card p-4 transition-shadow hover:shadow-lg">
      <span className={`mb-2 font-body text-xs font-bold uppercase tracking-wide ${badge.text}`}>
        {badge.label}
      </span>
      <h3 className="mb-2 line-clamp-2 font-heading text-sm font-bold text-light-text">
        {resource.title}
      </h3>
      <p className="mb-3 font-body text-xs text-light-text-secondary">{resource.summary}</p>
      <p className="mt-auto font-body text-xs font-medium text-light-text-muted">
        {categoryLabel}
      </p>
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
