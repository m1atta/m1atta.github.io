import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-ink-800">
      <div className="section flex flex-col items-center justify-between gap-3 py-8 text-xs text-ink-500 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono">Built with React, TypeScript &amp; Vite</p>
      </div>
    </footer>
  )
}
