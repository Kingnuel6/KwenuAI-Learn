import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
        <Logo size={28} />
        <a
          href="https://kwenuai.com.ng"
          className="font-body text-sm text-white/50 transition-colors hover:text-white"
        >
          Powered by KwenuAI
        </a>
      </div>
    </footer>
  )
}
