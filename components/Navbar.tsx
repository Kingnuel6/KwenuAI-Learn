import Link from 'next/link'
import Logo from './Logo'

export default function Navbar() {
  return (
    <header className="border-b border-light-border bg-light-bg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo height={28} />
          <span className="font-heading text-lg font-semibold text-light-text">
            Learn
          </span>
        </Link>
      </div>
    </header>
  )
}
