import { useEffect, useState } from 'react'
import { ragPipeline } from '../data/profile'
import { prefersReducedMotion } from '../hooks/useInView'
import { Reveal, Section, pad } from './Section'

const STEP_MS = 2600

export function RagPipeline() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || prefersReducedMotion()) return
    const timer = window.setInterval(() => setActive((i) => (i + 1) % ragPipeline.length), STEP_MS)
    return () => window.clearInterval(timer)
  }, [paused])

  const select = (i: number) => {
    setActive(i)
    setPaused(true)
  }

  const step = ragPipeline[active]
  const progress = (active / (ragPipeline.length - 1)) * 100

  return (
    <Section
      id="pipeline"
      label="Interactive"
      title="Follow a question through a RAG pipeline"
      intro="The pattern behind the enterprise search I built at Verizon. Select a stage to see what happens there."
    >
      <Reveal>
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="rounded-3xl border border-line bg-card p-5 sm:p-8"
        >
          <div aria-hidden="true" className="relative mx-[7%] hidden h-px bg-line lg:block">
            <div className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-500" style={{ width: `${progress}%` }} />
            <div
              className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_rgb(81_229_126/0.9)] transition-[left] duration-500"
              style={{ left: `${progress}%` }}
            />
          </div>

          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-8 lg:grid-cols-7">
            {ragPipeline.map((s, i) => {
              const isActive = i === active
              return (
                <li key={s.name}>
                  <button
                    type="button"
                    onClick={() => select(i)}
                    onFocus={() => select(i)}
                    aria-pressed={isActive}
                    className={`flex w-full flex-col items-start rounded-xl border px-3.5 py-3 text-left transition-colors ${
                      isActive
                        ? 'border-primary/60 bg-primary/10 shadow-[0_0_30px_-12px_rgb(81_229_126/0.7)]'
                        : i < active
                          ? 'border-primary/20 bg-bg hover:border-primary/40'
                          : 'border-line bg-bg hover:border-white/20'
                    }`}
                  >
                    <span className={`font-mono text-[11px] ${isActive || i < active ? 'text-primary' : 'text-muted-fg'}`}>
                      {pad(i + 1)}
                    </span>
                    <span className="mt-0.5 font-display font-semibold">{s.name}</span>
                  </button>
                </li>
              )
            })}
          </ol>

          <div className="mt-5 grid gap-4 rounded-2xl border border-dashed border-white/15 p-5 sm:grid-cols-[10rem_1fr] sm:items-center sm:p-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.15em] text-muted-fg uppercase">
                Stage {pad(active + 1)} / {pad(ragPipeline.length)}
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-primary">{step.name}</p>
            </div>
            <p className="leading-relaxed text-fg/85">{step.detail}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
