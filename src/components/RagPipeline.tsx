import { useEffect, useState } from 'react'
import { ragPipeline } from '../data/profile'

const STEP_MS = 2400

export function RagPipeline() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setActive((i) => (i + 1) % ragPipeline.length), STEP_MS)
    return () => window.clearInterval(timer)
  }, [paused])

  const select = (i: number) => {
    setActive(i)
    setPaused(true)
  }

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <p className="font-mono text-xs tracking-wider text-zinc-500 uppercase">Pipeline · select a stage</p>
      <ol className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {ragPipeline.map((step, i) => {
          const isActive = i === active
          return (
            <li key={step.name} className="relative">
              <button
                type="button"
                onClick={() => select(i)}
                onFocus={() => select(i)}
                aria-pressed={isActive}
                className={`flex w-full flex-col items-start rounded-lg border px-3 py-2.5 text-left transition-colors ${
                  isActive
                    ? 'border-teal-600 bg-teal-50 dark:border-teal-400 dark:bg-teal-400/10'
                    : 'border-zinc-200 bg-stone-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700'
                }`}
              >
                <span className={`font-mono text-[11px] ${isActive ? 'text-teal-700 dark:text-teal-400' : 'text-zinc-400'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold">{step.name}</span>
              </button>
              {i < ragPipeline.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`absolute top-1/2 -right-2 hidden h-px w-2 lg:block ${
                    i < active ? 'bg-teal-600 dark:bg-teal-400' : 'bg-zinc-300 dark:bg-zinc-700'
                  }`}
                />
              )}
            </li>
          )
        })}
      </ol>
      <div className="mt-3 flex min-h-[4.5rem] items-start gap-4 rounded-lg border border-dashed border-zinc-300 p-4 dark:border-zinc-700">
        <span className="mt-0.5 w-20 shrink-0 font-mono text-xs font-semibold tracking-wider text-teal-700 uppercase dark:text-teal-400">
          {ragPipeline[active].name}
        </span>
        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{ragPipeline[active].detail}</p>
      </div>
    </div>
  )
}
