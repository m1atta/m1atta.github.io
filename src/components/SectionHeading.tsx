interface Props {
  index: string // e.g. "01" — small technical index label, like a schematic sheet number
  title: string
  description?: string
}

export default function SectionHeading({ index, title, description }: Props) {
  return (
    <div className="mb-10 flex items-start gap-4">
      <span className="label-mono mt-1.5">{index}</span>
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-ink-100 sm:text-3xl">{title}</h2>
        {description && <p className="mt-2 max-w-2xl text-ink-300">{description}</p>}
      </div>
    </div>
  )
}
