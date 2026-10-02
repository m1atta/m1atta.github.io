import { useState } from 'react'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const openProject = projects.find((p) => p.id === openId) ?? null

  return (
    <section id="projects" className="section">
      <SectionHeading
        index="02"
        title="Projects"
        description="A mix of digital design, analog electronics, PCB layout, and software — the ones that best show how I actually work."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setOpenId} />
        ))}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
    </section>
  )
}
