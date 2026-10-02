import { site } from '../data/site'
import { GithubIcon, LinkedInIcon, FileIcon, MailIcon } from './icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink-800">
      {/* Subtle schematic-grid backdrop — faint, not a literal circuit image */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="section relative flex min-h-[72vh] flex-col justify-center">
        <p className="label-mono mb-4">EE Co-op Student · TMU</p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-100 sm:text-5xl md:text-6xl">
          {site.name}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink-300">{site.tagline}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href={site.resumePath} target="_blank" rel="noreferrer" className="btn-secondary">
            <FileIcon className="h-4 w-4" />
            Resume
          </a>
          <a href="#contact" className="btn-secondary">
            <MailIcon className="h-4 w-4" />
            Contact
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-ink-400 transition-colors hover:text-copper-400"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-400 transition-colors hover:text-copper-400"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <span className="h-4 w-px bg-ink-700" aria-hidden="true" />
          <span className="font-mono text-xs text-ink-400">
            digital systems · analog electronics · embedded software · AI tooling
          </span>
        </div>
      </div>
    </section>
  )
}
