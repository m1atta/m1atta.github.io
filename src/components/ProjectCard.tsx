import type { Project } from '../data/projects'
import { GithubIcon, ExternalLinkIcon } from './icons'

interface Props {
  project: Project
  onOpen: (id: string) => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="card group flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="label-mono">{project.date}</span>
        <span className="pill capitalize">{project.category.replace('-', ' ')}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-ink-100">{project.title}</h3>
      <p className="mt-2 text-sm text-ink-300">{project.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tools.map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-ink-800 pt-4 text-sm">
        <button
          onClick={() => onOpen(project.id)}
          className="font-medium text-copper-400 transition-colors hover:text-copper-300"
        >
          View details
        </button>

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-ink-400 transition-colors hover:text-ink-100"
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
        ) : (
          <span className="ml-auto inline-flex items-center gap-1.5 text-ink-600">
            <GithubIcon className="h-4 w-4" />
            Code coming soon
          </span>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-400 transition-colors hover:text-ink-100"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            Demo
          </a>
        )}
      </div>
    </article>
  )
}
