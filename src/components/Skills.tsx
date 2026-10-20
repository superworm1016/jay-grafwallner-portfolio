import { coreStack, skillGroups } from '../data/profile'
import { Chip, Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="The tools I reach for."
      intro="Grouped the way I use them: from the C# and React code itself to the data, cloud, and delivery work around it."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li className="rounded-xl bg-zinc-900 p-6 text-white sm:col-span-2 lg:col-span-1 dark:bg-teal-400/10 dark:ring-1 dark:ring-teal-400/25">
          <h3 className="font-mono text-xs tracking-wider text-teal-300 uppercase">Core stack</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {coreStack.map((item) => (
              <li
                key={item}
                className="rounded-md bg-white/10 px-2.5 py-1 text-sm font-medium text-white dark:bg-teal-400/15 dark:text-teal-100"
              >
                {item}
              </li>
            ))}
          </ul>
        </li>

        {skillGroups.map((group) => (
          <li key={group.name} className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">{group.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
