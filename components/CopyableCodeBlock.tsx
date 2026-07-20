'use client'

import { useState } from 'react'

export default function CopyableCodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mb-4">
      <pre className="max-h-96 overflow-auto whitespace-pre-wrap rounded-lg border border-light-border bg-light-bg p-4 font-mono text-xs text-light-text">
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="mt-2 rounded-lg border border-light-border px-4 py-2 font-body text-xs font-semibold text-light-text hover:border-brand-purple"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}
