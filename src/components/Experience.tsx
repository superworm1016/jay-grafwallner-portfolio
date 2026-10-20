import { experience } from '../data/profile'
import { Chip, Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="Experience" title="Over a decade of shipping, from MVC to RAG.">
      <ol className="relative ml-1.5 border-l border-zinc-200 dark:border-zinc-800">
        {experience.map((role) => (
          <li key={role.company} className="relative pb-14 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[7.5px] size-3.5 rounded-full border-2 border-teal-600 bg-stone-50 dark:border-teal-400 dark:bg-zinc-950"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-xl font-semibold tracking-tight">{role.title}</h3>
              <p className="shrink-0 font-mono text-sm text-zinc-500">
                {role.start} – {role.end}
              </p>
            </div>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">{role.company}</span> · {role.location}
            </p>

            <ul className="mt-5 max-w-3xl space-y-2.5">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-teal-600 dark:bg-teal-400" />
                  {highlight}
                </li>
              ))}
            </ul>

            <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-1.5">
              {role.stack.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
