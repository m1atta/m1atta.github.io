import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { MenuIcon, CloseIcon, FileIcon } from './icons'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? 'border-ink-700 bg-ink-950/90 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-wide text-ink-100">
          RA<span className="text-copper-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-ink-300 transition-colors hover:text-ink-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href={site.resumePath} target="_blank" rel="noreferrer" className="btn-secondary">
            <FileIcon className="h-4 w-4" />
            Resume
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-ink-200 md:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-700 bg-ink-950 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-ink-200 hover:text-ink-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumePath}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-secondary mt-1 w-full justify-center"
              >
                <FileIcon className="h-4 w-4" />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
