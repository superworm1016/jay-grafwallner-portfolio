import { useEffect, useState } from 'react'
import { profile, terminal } from '../data/profile'
import { prefersReducedMotion, useInView } from '../hooks/useInView'
import { Reveal, Section } from './Section'

const CHAR_MS = 26
const LINE_PAUSE_MS = 650

function Cursor() {
  return <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-primary" />
}

// Colors each ✓ green so passing checks stand out.
function Output({ text }: { text: string }) {
  const parts = text.split('✓')
  return (
    <div className="whitespace-pre text-muted-fg">
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span className="text-primary">✓</span>}
          {part}
        </span>
      ))}
    </div>
  )
}

export function Terminal() {
  const [ref, inView] = useInView<HTMLDivElement>('0px 0px -20% 0px')
  const [line, setLine] = useState(0)
  const [chars, setChars] = useState(0)

  useEffect(() => {
    if (!inView || line >= terminal.length) return
    if (prefersReducedMotion()) {
      setLine(terminal.length)
      return
    }
    const cmd = terminal[line].cmd
    const timer =
      chars < cmd.length
        ? window.setTimeout(() => setChars((c) => c + 1), CHAR_MS)
        : window.setTimeout(() => {
            setLine((l) => l + 1)
            setChars(0)
          }, LINE_PAUSE_MS)
    return () => window.clearTimeout(timer)
  }, [inView, line, chars])

  return (
    <Section
      id="under-the-hood"
      label="Under the hood"
      title="From commit to production"
      intro="The workflow behind each release: tested, reviewed, automated, and observable."
    >
      <Reveal>
        <div ref={ref} className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-line bg-[#0d1013] shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 border-b border-line bg-card px-4 py-3">
            <span className="size-3 rounded-full bg-white/15" />
            <span className="size-3 rounded-full bg-white/15" />
            <span className="size-3 rounded-full bg-white/15" />
            <span className="flex-1 pr-12 text-center font-mono text-xs text-muted-fg">{profile.handle} — zsh</span>
          </div>

          <ul className="sr-only">
            {terminal.map((entry) => (
              <li key={entry.cmd}>
                {entry.cmd}: {entry.out.join(' ')}
              </li>
            ))}
          </ul>

          <div aria-hidden="true" className="min-h-[21rem] overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:p-7">
            {terminal.slice(0, line + 1).map((entry, i) => {
              const done = i < line
              const typed = done ? entry.cmd : entry.cmd.slice(0, chars)
              const showOutput = done || chars >= entry.cmd.length
              return (
                <div key={entry.cmd} className="mb-3">
                  <div className="whitespace-pre">
                    <span className="text-primary">$</span> <span className="text-fg">{typed}</span>
                    {inView && !done && !showOutput && <Cursor />}
                  </div>
                  {showOutput && entry.out.map((out) => <Output key={out} text={out} />)}
                </div>
              )
            })}
            {line >= terminal.length && (
              <div>
                <span className="text-primary">$</span> <Cursor />
              </div>
            )}
          </div>
        </div>
      </Reveal>
      <p className="mt-4 text-center font-mono text-xs text-muted-fg/70">Illustrative session, representative of the release workflow.</p>
    </Section>
  )
}
