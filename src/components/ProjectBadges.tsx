import { badgeLabel, type ProjectBadge } from '../data/projects'

// Written out as literal, static strings (not `badge-${b}`) so Tailwind's
// content scanner can actually see each class name in the source — a
// template-string-built class name isn't detected, which silently purges
// the whole .badge-personal/.badge-collab/.badge-design rule from the
// compiled CSS even though the markup still references it.
const badgeClass: Record<ProjectBadge, string> = {
  personal: 'badge badge-personal',
  collab: 'badge badge-collab',
  design: 'badge badge-design',
}

export default function ProjectBadges({ badges }: { badges?: ProjectBadge[] }) {
  if (!badges || badges.length === 0) return null

  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.map((b) => (
        <span key={b} className={badgeClass[b]}>
          {badgeLabel[b]}
        </span>
      ))}
    </div>
  )
}
