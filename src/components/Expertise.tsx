import { useState } from 'react'
import { expertise, type ExpertiseIcon } from '../data/profile'
import { CloudIcon, CodeIcon, DatabaseIcon, PlusIcon, ShieldIcon, SparklesIcon, UsersIcon } from './icons'
import { Chip, Reveal, Section, pad } from './Section'

const ICONS: Record<ExpertiseIcon, typeof CodeIcon> = {
  code: CodeIcon,
  sparkles: SparklesIcon,
  cloud: CloudIcon,
  database: DatabaseIcon,
  shield: ShieldIcon,
  users: UsersIcon,
}

export function Expertise() {
  const [open, setOpen] = useState(0)

  return (
    <Section
      id="expertise"
      label="Expertise"
      title="Full-stack engineering, end to end"
      intro="From a single API to a production AI platform: tested, documented systems built to be operated, not just shipped."
    >
      <Reveal>
        <ul className="overflow-hidden rounded-2xl border border-line bg-card">
          {expertise.map((item, i) => {
            const isOpen = open === i
            const Icon = ICONS[item.icon]
            return (
              <li key={item.title} className="relative border-line [&:not(:first-child)]:border-t">
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-0.5 bg-primary transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                />
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`expertise-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.02] sm:gap-5 sm:px-7"
                  >
                    <span className="w-6 font-mono text-xs text-primary">{pad(i + 1)}</span>
                    <span
                      className={`grid size-11 shrink-0 place-items-center rounded-xl border text-primary transition-colors ${
                        isOpen ? 'border-primary/40 bg-primary/10' : 'border-line bg-bg'
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="flex-1 font-display text-lg font-semibold sm:text-xl">{item.title}</span>
                    <span className="hidden font-mono text-[11px] tracking-[0.15em] text-muted-fg uppercase sm:block">
                      {item.tag}
                    </span>
                    <PlusIcon
                      className={`size-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary' : 'text-muted-fg'}`}
                    />
                  </button>
                </h3>
                <div
                  id={`expertise-${i}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-7 sm:pr-7 sm:pl-[8.5rem]">
                      <p className="max-w-2xl leading-relaxed text-muted-fg">{item.body}</p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {item.stack.map((tech) => (
                          <Chip key={tech}>{tech}</Chip>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </Section>
  )
}
