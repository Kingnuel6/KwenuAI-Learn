'use client'

import { useEffect, useState } from 'react'
import LeadCaptureModal from '@/components/LeadCaptureModal'
import { hasUnlockedContent, markContentUnlocked } from '@/lib/leads'

export default function ContentGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setUnlocked(hasUnlockedContent())
  }, [])

  if (unlocked) return <>{children}</>

  return (
    <>
      <div className="rounded-xl border border-light-border bg-light-card p-8 text-center">
        <h2 className="mb-2 font-heading text-lg font-bold text-light-text">
          Get free access to KwenuAI Learn
        </h2>
        <p className="mb-5 font-body text-sm text-light-text-secondary">
          Enter your details once to unlock every course, video, guide, and tool on this site.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="rounded-lg bg-brand-purple px-5 py-2.5 font-body text-sm font-semibold text-white"
        >
          Unlock KwenuAI Learn
        </button>
      </div>

      <LeadCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        headline="Get free access to KwenuAI Learn"
        body="Enter your details once to unlock every course, video, guide, and tool on this site. No spam, just AI resources worth your time."
        submitLabel="Unlock KwenuAI Learn"
        source="site-gate"
        successMessage="Unlocking KwenuAI Learn..."
        errorMessage="Having trouble saving your info, but here's your content anyway..."
        onComplete={() => {
          markContentUnlocked()
          setUnlocked(true)
        }}
      />
    </>
  )
}
