import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'
import { CloseIcon, GithubIcon, ExternalLinkIcon } from './icons'
import ProjectBadges from './ProjectBadges'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (!project) return
    closeBtnRef.current?.focus()
    setActiveImage(0)

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

  // Gallery projects (CanSat, say) list every shot in `images`; everything
  // else falls back to the single `image`/`video`. Video always wins the
  // main viewer slot when present.
  const gallery = project.images && project.images.length > 0 ? project.images : project.image ? [project.image] : []

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
            {project.badges && (
              <div className="mt-2">
                <ProjectBadges badges={project.badges} />
              </div>
            )}
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

        {(project.video || gallery.length > 0) && (
          <div className="mt-6">
            <div className="overflow-hidden rounded-md bg-ink-800">
              {project.video ? (
                <video src={project.video} poster={project.image} controls className="aspect-video w-full" />
              ) : (
                <img
                  src={gallery[activeImage]}
                  alt={project.title}
                  className="aspect-video w-full object-cover"
                />
              )}
            </div>

            {/* Thumbnail strip — only shown for projects with more than one
                photo (e.g. CanSat's PCB layout / 3D view / schematic). Click
                to swap the main viewer above. Hidden when a video is playing
                since the video already occupies the main viewer slot. */}
            {!project.video && gallery.length > 1 && (
              <div className="mt-2 flex gap-2">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show photo ${i + 1}`}
                    className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded border transition-colors ${
                      i === activeImage ? 'border-accent-400' : 'border-ink-700 hover:border-ink-500'
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
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
