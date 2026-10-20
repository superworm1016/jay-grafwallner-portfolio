import { caseStudies, featuredCaseStudy } from '../data/profile'
import { RagPipeline } from './RagPipeline'
import { Chip, Section } from './Section'

export function Projects() {
  const featured = featuredCaseStudy

  return (
    <Section
      id="work"
      index="04"
      eyebrow="Selected work"
      title="What I've built."
      intro="Highlights from my roles at Verizon, DealerSocket, and Expedia Group. The code is proprietary, so these focus on the problem, the approach, and the stack."
    >
      <article className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="flex items-center gap-3 font-mono text-xs tracking-wider text-zinc-500 uppercase">
              <span className="rounded bg-teal-700 px-1.5 py-0.5 text-[10px] font-semibold text-white dark:bg-teal-400 dark:text-zinc-950">
                Featured
              </span>
              {featured.context}
            </p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{featured.title}</h3>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{featured.summary}</p>
            <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-1.5">
              {featured.stack.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </div>
          <ul className="space-y-3 self-center">
            {featured.points.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
                <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-teal-600 dark:bg-teal-400" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <RagPipeline />
        </div>
      </article>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {caseStudies.map((study) => (
          <article
            key={study.title}
            className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
          >
            <p className="font-mono text-xs tracking-wider text-zinc-500 uppercase">{study.context}</p>
            <h3 className="mt-3 text-xl font-bold tracking-tight">{study.title}</h3>
            <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">{study.summary}</p>
            <ul className="mt-5 space-y-2">
              {study.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-teal-600 dark:bg-teal-400" />
                  {point}
                </li>
              ))}
            </ul>
            <ul aria-label="Technologies" className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {study.stack.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
