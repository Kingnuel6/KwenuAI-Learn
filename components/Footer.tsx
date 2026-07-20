export default function Footer() {
  return (
    <footer className="border-t border-light-border bg-light-bg py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center">
        <p className="font-body text-sm text-light-text-secondary">
          KwenuAI Learn is built and maintained by{' '}
          <a
            href="https://kwenuai.com.ng"
            className="font-medium text-light-text hover:text-brand-purple"
          >
            KwenuAI
          </a>
          , an AI systems and consulting company based in Lagos, Nigeria.
        </p>
      </div>
    </footer>
  )
}
