'use client'

import { useEffect, useState } from 'react'
import LeadCaptureModal from '@/components/LeadCaptureModal'
import { hasUnlockedGuides, markGuidesUnlocked } from '@/lib/leads'

export default function GuideGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setUnlocked(hasUnlockedGuides())
  }, [])

  if (unlocked) return <>{children}</>

  return (
    <>
      <div className="rounded-xl border border-light-border bg-light-card p-8 text-center">
        <h2 className="mb-2 font-heading text-lg font-bold text-light-text">
          Get free access to this guide
        </h2>
        <p className="mb-5 font-body text-sm text-light-text-secondary">
          Enter your details once to unlock this and every guide on KwenuAI Learn.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="rounded-lg bg-brand-purple px-5 py-2.5 font-body text-sm font-semibold text-white"
        >
          Unlock Guides
        </button>
      </div>

      <LeadCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        headline="Get free access to this guide"
        body="Enter your details once to unlock every guide on KwenuAI Learn. No spam, just AI resources worth your time."
        submitLabel="Unlock Guides"
        source="guides-gate"
        successMessage="Unlocking your guide..."
        errorMessage="Having trouble saving your info, but here's your guide anyway..."
        onComplete={() => {
          markGuidesUnlocked()
          setUnlocked(true)
        }}
      />
    </>
  )
}
