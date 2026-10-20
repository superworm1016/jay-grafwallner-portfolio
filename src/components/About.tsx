import { education, principles, profile } from '../data/profile'
import { GraduationCapIcon } from './icons'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Full-stack, end to end, with production in mind.">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <div className="space-y-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-400">
              <GraduationCapIcon className="size-5" />
            </span>
            <div>
              <p className="font-semibold">{education.degree}</p>
              <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                {education.school} · {education.location} · {education.years}
              </p>
            </div>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle, i) => (
            <li
              key={principle.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="font-mono text-xs text-teal-700 dark:text-teal-400">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{principle.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
