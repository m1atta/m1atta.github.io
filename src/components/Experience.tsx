import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading index="04" title="Experience" />

      <ol className="relative space-y-8 border-l border-ink-700 pl-8">
        {experience.map((item) => (
          <li key={item.id} className="relative">
            <span
              className="absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink-950 bg-accent-500"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-ink-100">{item.title}</h3>
              <span className="label-mono">{item.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-ink-400">{item.org}</p>
            <p className="mt-3 text-sm text-ink-300">{item.summary}</p>
            <ul className="mt-3 space-y-1.5">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink-300">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-500" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
