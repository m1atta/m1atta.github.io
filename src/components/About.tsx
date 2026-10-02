import { site } from '../data/site'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading index="01" title="About" />
      <div className="grid gap-10 md:grid-cols-[1fr_auto]">
        <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-ink-200">
          {site.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <dl className="h-max min-w-[220px] rounded-lg border border-ink-700 bg-ink-900/60 p-5 font-mono text-xs">
          <div className="flex justify-between gap-6 border-b border-ink-800 py-2.5">
            <dt className="text-ink-400">School</dt>
            <dd className="text-right text-ink-200">{site.school}</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-ink-800 py-2.5">
            <dt className="text-ink-400">Program</dt>
            <dd className="text-right text-ink-200">Electrical Engineering (Co-op)</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-ink-800 py-2.5">
            <dt className="text-ink-400">Location</dt>
            <dd className="text-right text-ink-200">{site.location}</dd>
          </div>
          <div className="flex justify-between gap-6 py-2.5">
            <dt className="text-ink-400">Status</dt>
            <dd className="text-right text-signal-500">Open to co-op opportunities</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
