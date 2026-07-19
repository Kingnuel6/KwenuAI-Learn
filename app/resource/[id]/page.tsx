import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { resources, type ResourceCategory } from '@/data/resources'

const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  'small-business': 'Small business',
  'content-creator': 'Content creator',
  student: 'Student',
  productivity: 'Productivity',
}

export default function ResourcePage({ params }: { params: { id: string } }) {
  const resource = resources.find((r) => r.id === params.id && r.type === 'article')
  if (!resource) notFound()

  return (
    <div className="min-h-screen bg-light-bg">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <nav className="mb-6 flex flex-wrap items-center gap-2 font-body text-sm text-light-text-secondary">
          <Link href="/" className="hover:text-light-text">
            Home
          </Link>
          <span>→</span>
          <Link href="/" className="hover:text-light-text">
            Library
          </Link>
          <span>→</span>
          <span className="text-light-text">{resource.title}</span>
        </nav>

        <h1 className="mb-3 font-heading text-2xl font-bold text-light-text sm:text-3xl">
          {resource.title}
        </h1>

        <div className="mb-8 flex flex-wrap gap-2">
          {resource.category.map((category) => (
            <span
              key={category}
              className="rounded-full bg-light-border px-3 py-1 font-body text-xs font-medium text-light-text-secondary"
            >
              {CATEGORY_LABELS[category]}
            </span>
          ))}
        </div>

        <div className="mb-10">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h2 className="mb-3 mt-8 font-heading text-xl font-semibold text-light-text first:mt-0">
                  {children}
                </h2>
              ),
              h2: ({ children }) => (
                <h2 className="mb-3 mt-8 font-heading text-xl font-semibold text-light-text first:mt-0">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mb-2 mt-6 font-heading text-lg font-semibold text-light-text">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 font-body text-sm leading-relaxed text-light-text">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 list-disc space-y-1 pl-5 font-body text-sm text-light-text">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-4 list-decimal space-y-1 pl-5 font-body text-sm text-light-text">
                  {children}
                </ol>
              ),
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-purple underline"
                >
                  {children}
                </a>
              ),
            }}
          >
            {resource.content}
          </ReactMarkdown>
        </div>

        <Link
          href="/"
          className="font-body text-sm font-medium text-light-text-secondary hover:text-light-text"
        >
          ← Back to Library
        </Link>
      </div>
    </div>
  )
}
