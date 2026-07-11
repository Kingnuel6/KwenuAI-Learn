'use client'

import { useState } from 'react'
import type { ActionStep } from '@/data/courses'

export default function ActionStepCard({ actionStep }: { actionStep: ActionStep }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(actionStep.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isCopyable = actionStep.type === 'prompt' || actionStep.type === 'template'

  return (
    <div className="mb-8 rounded-xl border border-light-border bg-light-card p-5">
      <h2 className="mb-3 font-heading text-sm font-semibold text-light-text">
        Your action step
      </h2>
      <p className="mb-3 font-body text-sm text-light-text-secondary">{actionStep.label}</p>

      {actionStep.type === 'link' ? (
        <a
          href={actionStep.content}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-brand-purple px-6 py-3 font-body text-sm font-semibold text-white"
        >
          {actionStep.label}
        </a>
      ) : (
        <div>
          <pre className="max-h-96 overflow-auto whitespace-pre-wrap rounded-lg border border-light-border bg-light-bg p-4 font-body text-xs text-light-text">
            {actionStep.content}
          </pre>
          {isCopyable && (
            <button
              onClick={handleCopy}
              className="mt-3 rounded-lg border border-light-border px-4 py-2 font-body text-xs font-semibold text-light-text hover:border-brand-purple"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
