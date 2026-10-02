import { skills } from '../data/skills'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading index="04" title="Skills" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="card p-5">
            <h3 className="label-mono mb-3">{group.category}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item} className="pill">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
