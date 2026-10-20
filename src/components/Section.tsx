import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}

export function Section({ id, index, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-zinc-200/80 py-20 sm:py-28 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-sm text-teal-700 dark:text-teal-400">
          <span className="text-zinc-400 dark:text-zinc-500">{index} /</span> {eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300">
      {children}
    </li>
  )
}
