'use client'

import { useState } from 'react'

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzJKxbJuR_4RelSH66q8TlCTTRczJOdAyGexMGd73pD3t90n6C8Tu_PCvqDfMhqjr08/exec'
const GEM_URL = 'https://gemini.google.com/gem/1Gvrzd7khKZi_tZiIVGZdfrjDw-vyRVDP?usp=sharing'

const SEGMENTS = [
  'Student',
  'Employed / Working professional',
  'Business owner / Founder',
  'Freelancer / Consultant',
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'submitting' | 'success' | 'error'

type Errors = { name?: string; email?: string; segment?: string }

export default function BusinessAuditModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [segment, setSegment] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  if (!open) return null

  function reset() {
    setName('')
    setEmail('')
    setSegment('')
    setErrors({})
    setStatus('idle')
  }

  function handleClose() {
    reset()
    onClose()
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const nextErrors: Errors = {}
    if (!name.trim()) nextErrors.name = 'Please enter your name.'
    if (!email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!segment) nextErrors.segment = 'Please select an option.'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setErrors({})
    setStatus('submitting')

    let ok = true
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), segment }),
      })
    } catch {
      ok = false
    }

    setStatus(ok ? 'success' : 'error')

    setTimeout(() => {
      window.open(GEM_URL, '_blank', 'noopener,noreferrer')
      handleClose()
    }, 1000)
  }

  const submitting = status === 'submitting' || status === 'success' || status === 'error'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-xl bg-light-card p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 font-body text-lg text-light-text-secondary hover:text-light-text"
        >
          ✕
        </button>

        <h2 className="mb-2 pr-6 font-heading text-xl font-bold text-light-text">
          Free AI Business Audit
        </h2>
        <p className="mb-6 font-body text-sm text-light-text-secondary">
          Answer a few quick questions and get a personalized report on exactly where AI can help
          your business, ranked by impact, with a 30-day action plan. Takes about 5 minutes.
        </p>

        {status === 'success' || status === 'error' ? (
          <p className="py-6 text-center font-body text-sm font-medium text-light-text">
            {status === 'success'
              ? 'Redirecting you now...'
              : "Having trouble saving your info, but let's get you started anyway..."}
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label className="mb-1 block font-body text-xs font-semibold text-light-text">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={submitting}
                className="w-full rounded-lg border border-light-border px-3 py-2 font-body text-sm text-light-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              {errors.name && (
                <p className="mt-1 font-body text-xs text-red-600">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="mb-1 block font-body text-xs font-semibold text-light-text">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                className="w-full rounded-lg border border-light-border px-3 py-2 font-body text-sm text-light-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              {errors.email && (
                <p className="mt-1 font-body text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="mb-1 block font-body text-xs font-semibold text-light-text">
                What best describes you?
              </label>
              <select
                value={segment}
                onChange={(e) => setSegment(e.target.value)}
                disabled={submitting}
                className="w-full rounded-lg border border-light-border bg-white px-3 py-2 font-body text-sm text-light-text focus:outline-none focus:ring-2 focus:ring-brand-purple"
              >
                <option value="">Select one</option>
                {SEGMENTS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.segment && (
                <p className="mt-1 font-body text-xs text-red-600">{errors.segment}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-brand-purple px-4 py-2.5 font-body text-sm font-semibold text-white disabled:opacity-60"
            >
              {status === 'submitting' ? 'Submitting...' : 'Start My Audit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
