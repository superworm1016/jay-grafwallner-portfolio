import { process } from '../data/profile'
import { Reveal, Section, pad } from './Section'

export function Process() {
  return (
    <Section
      id="process"
      label="How I work"
      title="From requirements to production in four steps"
      intro="A delivery approach built on clear plans, tested code, and automation, so releases are predictable."
    >
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {process.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-primary/30">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs font-semibold text-primary">
                    {pad(i + 1)}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-linear-to-r from-primary/40 to-transparent" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 mb-5 text-sm leading-relaxed text-fg/85">{step.body}</p>
                <p className="mt-auto border-t border-line pt-4 text-sm leading-relaxed text-muted-fg">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
