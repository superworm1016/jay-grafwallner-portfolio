import { work } from '../data/profile'
import { CheckCircleIcon } from './icons'
import { Chip, Section, pad } from './Section'

export function Work() {
  return (
    <Section
      id="work"
      label="Selected work"
      title="Work that made it to production"
      intro="Highlights from Verizon, DealerSocket, and Expedia Group. The code is proprietary, so each card covers the problem, the approach, and the stack."
    >
      {/* Sticky cards stack on top of each other as you scroll. */}
      <ol className="mx-auto max-w-4xl space-y-8">
        {work.map((item, i) => (
          <li key={item.title} className="sticky" style={{ top: `calc(6.5rem + ${i * 1.25}rem)` }}>
            <article className="rounded-2xl border border-line bg-card p-6 shadow-[0_-24px_60px_-20px_rgba(0,0,0,0.9)] sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-[0.15em] text-primary uppercase">
                  {item.tag}
                </span>
                <span className="font-mono text-xs text-muted-fg">
                  {pad(i + 1)} / {pad(work.length)}
                </span>
              </div>

              <p className="mt-6 font-mono text-xs tracking-[0.15em] text-muted-fg uppercase">{item.context}</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">{item.title}</h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-fg">{item.summary}</p>

              <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-fg/85">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul aria-label="Technologies" className="mt-7 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </ul>

              <p className="mt-7 flex items-center gap-2 border-t border-line pt-5 text-sm font-medium text-primary">
                <CheckCircleIcon className="size-4 shrink-0" />
                {item.outcome}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
