import Link from 'next/link'
import type { Resource, ResourceCategory } from '@/data/resources'
import { getYoutubeId } from '@/lib/youtube'

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
  const youtubeId = resource.type === 'video' && resource.externalUrl ? getYoutubeId(resource.externalUrl) : null

  const cardContent = (
    <div className="flex h-full flex-col rounded-[10px] border border-light-border bg-light-card transition-shadow hover:shadow-lg">
      {youtubeId && (
        <div className="relative aspect-video w-full overflow-hidden rounded-t-[10px] bg-flagship-bg">
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-flagship-bg">
                <path d="M8 5v14l11-7Z" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <span className={`mb-2 font-body text-xs font-bold uppercase tracking-wide ${badge.text}`}>
          {badge.label}
        </span>
        <h3 className="mb-2 line-clamp-2 font-heading text-sm font-bold text-light-text">
          {resource.title}
        </h3>
        <p className="mb-3 font-body text-xs text-light-text-secondary">{resource.summary}</p>
        <p className="mt-auto font-body text-xs font-medium text-light-text-muted">
          {resource.channel ? `${resource.channel} · ${categoryLabel}` : categoryLabel}
        </p>
      </div>
    </div>
  )

  if (resource.type === 'tool') {
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

  return (
    <Link href={`/resource/${resource.id}`} className="block h-full">
      {cardContent}
    </Link>
  )
}
