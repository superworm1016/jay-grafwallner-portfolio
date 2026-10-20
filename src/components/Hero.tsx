import { Fragment } from 'react'
import { profile, stats } from '../data/profile'
import { techIcons, type TechKey } from '../data/tech'
import { ArrowUpRightIcon, SparklesIcon } from './icons'

const RINGS: { size: string; seconds: number; reverse: boolean; nodes: TechKey[] }[] = [
  { size: 'size-[17rem]', seconds: 36, reverse: false, nodes: ['csharp', 'react', 'azure'] },
  { size: 'size-[27rem]', seconds: 60, reverse: true, nodes: ['typescript', 'sqlserver', 'docker', 'kubernetes'] },
]

function Orbit() {
  return (
    <div aria-hidden="true" className="relative grid size-[28rem] shrink-0 scale-90 place-items-center xl:scale-100">
      <div className="absolute size-80 rounded-full bg-primary/15 blur-3xl" />
      {RINGS.map((ring) => {
        const spin = (reverse: boolean) => `orbit ${ring.seconds}s linear infinite${reverse ? ' reverse' : ''}`
        return (
          <div
            key={ring.seconds}
            className={`absolute ${ring.size} rounded-full border border-dashed border-white/10`}
            style={{ animation: spin(ring.reverse) }}
          >
            {ring.nodes.map((tech, i) => {
              const angle = (360 / ring.nodes.length) * i + (ring.reverse ? 45 : 0)
              return (
                <div key={tech} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      <div
                        className="grid size-14 place-items-center rounded-2xl border border-line bg-card shadow-lg shadow-black/40"
                        style={{ animation: spin(!ring.reverse) }}
                      >
                        <img src={techIcons[tech]} alt="" className="size-7" draggable={false} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
      <div className="relative grid size-36 place-items-center rounded-full border border-primary/30 bg-card shadow-[0_0_90px_-10px_rgb(81_229_126/0.5)]">
        <span className="font-display text-5xl font-bold tracking-tight">{profile.initials}</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[52rem] w-[80rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(81_229_126/0.14),transparent)]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-line bg-card/70 px-3.5 py-1.5 font-mono text-xs text-fg/80">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </p>

            <h1 className="mt-7 animate-rise font-display text-5xl leading-[1.05] font-bold tracking-tight [animation-delay:80ms] sm:text-6xl lg:text-[3.5rem]">
              <span className="block">Hi, I&rsquo;m {profile.firstName}.</span>
              <span className="block text-fg/50">I build enterprise apps</span>
              <span className="block text-fg/50">
                and <span className="text-primary">AI that ships.</span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-muted-fg [animation-delay:160ms]">
              {profile.intro}
            </p>

            <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-fg shadow-[0_0_40px_-8px_rgb(81_229_126/0.6)] transition hover:brightness-110"
              >
                Get in touch
                <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center rounded-full border border-line bg-card/60 px-6 py-3 font-medium text-fg transition-colors hover:border-white/20 hover:bg-card"
              >
                View selected work
              </a>
            </div>

            <p className="mt-9 flex animate-rise flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-muted-fg [animation-delay:320ms]">
              <SparklesIcon className="size-4 text-primary" />
              {profile.tagline.map((item, i) => (
                <Fragment key={item}>
                  {i > 0 && <span aria-hidden="true">·</span>}
                  <span>{item}</span>
                </Fragment>
              ))}
            </p>
          </div>

          <div className="hidden animate-rise justify-center [animation-delay:200ms] lg:flex">
            <Orbit />
          </div>
        </div>

        <dl className="mt-20 grid animate-rise grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line [animation-delay:400ms] lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-2 bg-card/95 px-6 py-6 sm:px-7">
              <dt className="font-mono text-[11px] tracking-[0.18em] text-muted-fg uppercase">{stat.label}</dt>
              <dd className="font-display text-4xl font-bold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
