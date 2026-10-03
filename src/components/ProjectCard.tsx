import type { Project } from '../data/projects'
import { GithubIcon, ExternalLinkIcon } from './icons'
import ProjectBadges from './ProjectBadges'

interface Props {
  project: Project
  onOpen: (id: string) => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="card group flex h-full flex-col p-5">
      {project.image && (
        <div className="-mx-5 -mt-5 mb-5 aspect-video overflow-hidden bg-ink-800">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <span className="label-mono">{project.date}</span>
        <span className="pill capitalize">{project.category.replace('-', ' ')}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-ink-100">{project.title}</h3>
      <p className="mt-2 text-sm text-ink-300">{project.tagline}</p>

      {project.badges && (
        <div className="mt-3">
          <ProjectBadges badges={project.badges} />
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tools.map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink-800 pt-4 text-sm">
        <button
          onClick={() => onOpen(project.id)}
          className="glow-text whitespace-nowrap font-medium text-accent-400 transition-colors hover:text-accent-300"
        >
          View details
        </button>

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-ink-400 transition-colors hover:text-ink-100 sm:ml-auto"
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-ink-600 sm:ml-auto">
            <GithubIcon className="h-4 w-4" />
            No repo yet
          </span>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-ink-400 transition-colors hover:text-ink-100"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            Demo
          </a>
        )}
      </div>
    </article>
  )
}
