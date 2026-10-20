import type { ReactNode } from 'react'
import { prefersReducedMotion, useInView } from '../hooks/useInView'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, shown] = useInView<HTMLDivElement>(undefined, prefersReducedMotion())
  return (
    <div
      ref={ref}
      style={shown ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs font-medium tracking-[0.2em] text-primary uppercase">
      <span aria-hidden="true" className="h-px w-6 bg-primary/70" />
      {children}
    </p>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-[2.75rem]">
      {children}
    </h2>
  )
}

type SectionProps = {
  id: string
  label: string
  title: ReactNode
  intro?: string
  children: ReactNode
}

export function Section({ id, label, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
          <SectionTitle>{title}</SectionTitle>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-fg">{intro}</p>}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-muted-fg">{children}</li>
  )
}

export function Logo() {
  return (
    <span className="grid size-8 place-items-center rounded-full border border-primary/30 bg-black font-display text-xs font-bold text-primary">
      JG
    </span>
  )
}

export const pad = (n: number) => String(n).padStart(2, '0')
