import { education, experience } from '../data/profile'
import { CheckIcon, GraduationCapIcon } from './icons'
import { Chip, Reveal, Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="A decade of shipping production software"
      intro="Enterprise teams in telecom, automotive SaaS, and travel since 2014."
    >
      <ol className="space-y-5">
        {experience.map((role) => (
          <li key={role.company}>
            <Reveal>
              <article className="grid gap-6 rounded-2xl border border-line bg-card p-6 sm:p-8 md:grid-cols-[13rem_1fr] md:gap-10">
                <div>
                  <p className="font-mono text-xs tracking-[0.12em] text-muted-fg uppercase">
                    {role.start} — {role.end}
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold text-primary">{role.company}</p>
                  <p className="mt-1 text-sm text-muted-fg">{role.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{role.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed text-fg/85">
                        <CheckIcon className="mt-1 size-4 shrink-0 text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-1.5">
                    {role.stack.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal>
        <div className="mt-5 flex items-center gap-4 rounded-2xl border border-line bg-card p-6 sm:p-8">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
            <GraduationCapIcon className="size-6" />
          </span>
          <div>
            <p className="font-display text-lg font-semibold">{education.degree}</p>
            <p className="mt-0.5 text-sm text-muted-fg">
              {education.school} · {education.location} · {education.years}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
