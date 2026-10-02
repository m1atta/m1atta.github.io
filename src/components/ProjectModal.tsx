import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'
import { CloseIcon, GithubIcon, ExternalLinkIcon } from './icons'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    closeBtnRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink-950/80 p-4 py-10 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-lg border border-ink-700 bg-ink-900 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="label-mono">{project.date}</span>
            <h3 id="project-modal-title" className="mt-2 text-2xl font-bold text-ink-100">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-md p-1.5 text-ink-400 hover:bg-ink-800 hover:text-ink-100"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {(project.video || project.image) && (
          <div className="mt-6 overflow-hidden rounded-md bg-ink-800">
            {project.video ? (
              <video
                src={project.video}
                poster={project.image}
                controls
                className="aspect-video w-full"
              />
            ) : (
              <img src={project.image} alt={project.title} className="aspect-video w-full object-cover" />
            )}
          </div>
        )}

        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-200">
          {project.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <h4 className="label-mono mb-2">My contribution</h4>
            <p className="text-sm text-ink-300">{project.contribution}</p>
          </div>
          <div>
            <h4 className="label-mono mb-2">Engineering concepts</h4>
            <ul className="flex flex-wrap gap-1.5">
              {project.concepts.map((c) => (
                <li key={c} className="pill">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="label-mono mb-2">Tools</h4>
          <ul className="flex flex-wrap gap-1.5">
            {project.tools.map((t) => (
              <li key={t} className="pill">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-3 border-t border-ink-800 pt-6">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <GithubIcon className="h-4 w-4" />
              View code
            </a>
          ) : (
            <span className="btn-secondary cursor-default opacity-60">
              <GithubIcon className="h-4 w-4" />
              Code coming soon
            </span>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-secondary">
              <ExternalLinkIcon className="h-4 w-4" />
              View demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
