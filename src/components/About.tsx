import { profile, whyMe } from '../data/profile'
import { CheckIcon } from './icons'
import { Reveal, SectionLabel, SectionTitle } from './Section'

export function About() {
  return (
    <section id="about" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Reveal>
          <SectionLabel>About</SectionLabel>
          <SectionTitle>Senior engineer, architecture to production</SectionTitle>
          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-fg/85">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:pt-12">
          <div className="rounded-2xl border border-line bg-card p-7 sm:p-8">
            <h3 className="font-display text-xl font-semibold">{whyMe.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-fg">{whyMe.intro}</p>
            <ul className="mt-7 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {whyMe.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] font-medium text-fg/90">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <CheckIcon className="size-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
