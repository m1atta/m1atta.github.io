import { useState } from 'react'
import { featuredProjects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectModal from './ProjectModal'
import ProjectBadges from './ProjectBadges'
import { GithubIcon, ExternalLinkIcon } from './icons'

// ---------------------------------------------------------------------------
// FEATURED PROJECTS — the spotlight row, right under the hero. Bigger cards
// with a real thumbnail/video, a numbered badge, and more breathing room
// than the plain Projects grid below, so these visually read as "the best
// work" rather than just more items in a list.
//
// Which projects show up here is controlled entirely by `featured: true` in
// src/data/projects.ts — set that flag (and give the project an `image`)
// to feature a different project later. Laid out 2-per-row (1 2 / 3 4 / ...)
// so it scales cleanly whether there are 3, 4, or more featured projects.
// ---------------------------------------------------------------------------

export default function FeaturedProjects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const openProject = featuredProjects.find((p) => p.id === openId) ?? null

  return (
    <section id="projects" className="section">
      <SectionHeading
        index="01"
        title="Featured Work"
        description={`${featuredProjects.length} projects that best show the range — hardware and software, design and debugging.`}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <article key={project.id} className="card group flex flex-col">
            <button
              onClick={() => setOpenId(project.id)}
              className="relative aspect-video w-full overflow-hidden bg-ink-800 text-left"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <span className="glow-text absolute left-3 top-3 font-mono text-xs text-accent-300">
                {String(i + 1).padStart(2, '0')}
              </span>
            </button>

            <div className="flex flex-1 flex-col p-5">
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
                  onClick={() => setOpenId(project.id)}
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
            </div>
          </article>
        ))}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
    </section>
  )
}
