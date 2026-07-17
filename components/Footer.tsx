import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-light-border bg-light-bg py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
        <Logo height={24} />
        <a
          href="https://kwenuai.com.ng"
          className="font-body text-sm text-light-text-secondary transition-colors hover:text-light-text"
        >
          Powered by KwenuAI
        </a>
      </div>
    </footer>
  )
}
