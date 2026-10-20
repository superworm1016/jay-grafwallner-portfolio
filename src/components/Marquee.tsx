import { marquee } from '../data/profile'

function Row({ items, reverse = false, className }: { items: string[]; reverse?: boolean; className: string }) {
  return (
    <div className={`flex w-max hover:[animation-play-state:paused] ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[0, 1].map((copy) => (
        <ul key={copy} aria-hidden={copy === 1 || undefined} className={`flex shrink-0 items-center gap-12 pr-12 ${className}`}>
          {items.map((item) => (
            <li key={item} className="whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <section aria-label="Technologies" className="border-t border-line py-14">
      <p className="px-4 text-center font-mono text-xs tracking-[0.25em] text-muted-fg uppercase">{marquee.label}</p>
      <div className="mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <Row items={marquee.primary} className="font-display text-2xl font-medium text-fg/70" />
        <Row items={marquee.secondary} reverse className="mt-5 font-mono text-xs tracking-[0.25em] text-muted-fg/60 uppercase" />
      </div>
    </section>
  )
}
