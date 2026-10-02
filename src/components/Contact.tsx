import { site } from '../data/site'
import SectionHeading from './SectionHeading'
import { GithubIcon, LinkedInIcon, MailIcon, FileIcon } from './icons'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeading index="06" title="Contact" description="Best way to reach me is email — I'll get back to you quickly." />

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a href={`mailto:${site.email}`} className="card flex items-center gap-3 px-5 py-4">
          <MailIcon className="h-5 w-5 text-accent-400" />
          <div>
            <p className="text-xs text-ink-400">Email</p>
            <p className="text-sm font-medium text-ink-100">{site.email}</p>
          </div>
        </a>

        <a href={site.linkedin} target="_blank" rel="noreferrer" className="card flex items-center gap-3 px-5 py-4">
          <LinkedInIcon className="h-5 w-5 text-accent-400" />
          <div>
            <p className="text-xs text-ink-400">LinkedIn</p>
            <p className="text-sm font-medium text-ink-100">/in/rayanatta</p>
          </div>
        </a>

        <a href={site.github} target="_blank" rel="noreferrer" className="card flex items-center gap-3 px-5 py-4">
          <GithubIcon className="h-5 w-5 text-accent-400" />
          <div>
            <p className="text-xs text-ink-400">GitHub</p>
            <p className="text-sm font-medium text-ink-100">@{site.githubHandle}</p>
          </div>
        </a>

        <a href={site.resumePath} target="_blank" rel="noreferrer" className="card flex items-center gap-3 px-5 py-4">
          <FileIcon className="h-5 w-5 text-accent-400" />
          <div>
            <p className="text-xs text-ink-400">Resume</p>
            <p className="text-sm font-medium text-ink-100">View / download PDF</p>
          </div>
        </a>
      </div>
    </section>
  )
}
