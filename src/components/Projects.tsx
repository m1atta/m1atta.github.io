import { useState } from 'react'
import { otherProjects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const openProject = otherProjects.find((p) => p.id === openId) ?? null

  return (
    <section id="more-projects" className="section">
      <SectionHeading
        index="03"
        title="More Projects"
        description="More of what I've built — digital design, analog electronics, and software, without the dedicated spotlight above."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setOpenId} />
        ))}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
    </section>
  )
}
