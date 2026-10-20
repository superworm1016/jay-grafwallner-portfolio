import { Fragment } from 'react'
import { profile, stats } from '../data/profile'
import { ArrowRightIcon, DownloadIcon, MailIcon, MapPinIcon } from './icons'

const CODE_FIELDS: [string, string | string[]][] = [
  ['name', profile.name],
  ['role', 'Senior Full Stack Engineer'],
  ['location', profile.location],
  ['experience', '10+ years'],
  ['stack', ['C#', '.NET', 'React', 'TypeScript']],
  ['data', ['SQL Server', 'PostgreSQL', 'Redis']],
  ['cloud', ['Azure', 'AWS', 'Kubernetes']],
  ['ai', ['RAG', 'LangChain', 'LangGraph']],
]

const tok = {
  keyword: 'text-fuchsia-700 dark:text-fuchsia-400',
  prop: 'text-sky-700 dark:text-sky-300',
  str: 'text-emerald-700 dark:text-emerald-400',
  fn: 'text-amber-700 dark:text-amber-300',
  comment: 'text-zinc-400 dark:text-zinc-500',
}

function CodeCard() {
  return (
    <div
      aria-hidden="true"
      className="relative rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/[0.07] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/40"
    >
      <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
        <span className="size-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
        <span className="size-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
        <span className="size-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
        <span className="ml-2 font-mono text-xs text-zinc-500">engineer.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-zinc-700 dark:text-zinc-300">
        <code>
          <div>
            <span className={tok.keyword}>const</span> engineer = {'{'}
          </div>
          {CODE_FIELDS.map(([key, value]) => (
            <div key={key}>
              {'  '}
              <span className={tok.prop}>{key}</span>:{' '}
              {Array.isArray(value) ? (
                <>
                  [
                  {value.map((v, i) => (
                    <Fragment key={v}>
                      {i > 0 && ', '}
                      <span className={tok.str}>"{v}"</span>
                    </Fragment>
                  ))}
                  ]
                </>
              ) : (
                <span className={tok.str}>"{value}"</span>
              )}
              ,
            </div>
          ))}
          <div>{'};'}</div>
          <div>&nbsp;</div>
          <div>
            engineer.<span className={tok.fn}>ship</span>();{' '}
            <span className={tok.comment}>// architecture → production</span>
          </div>
        </code>
      </pre>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--color-zinc-300)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] dark:bg-[radial-gradient(var(--color-zinc-800)_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 -z-10 size-[36rem] rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/10"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex animate-rise items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </p>

            <h1 className="mt-6 animate-rise text-5xl font-extrabold tracking-tight [animation-delay:80ms] sm:text-6xl xl:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 animate-rise font-mono text-base text-teal-700 [animation-delay:140ms] sm:text-lg dark:text-teal-400">
              {profile.title}
            </p>
            <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-zinc-600 [animation-delay:200ms] dark:text-zinc-400">
              {profile.intro}
            </p>

            <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:260ms]">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-800 dark:bg-teal-400 dark:text-zinc-950 dark:hover:bg-teal-300"
              >
                See my work
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3 font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
              >
                <DownloadIcon className="size-4" />
                Download résumé
              </a>
            </div>

            <ul className="mt-8 flex animate-rise flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 [animation-delay:320ms] dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <MapPinIcon className="size-4" />
                {profile.location}
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-teal-700 dark:hover:text-teal-400">
                  <MailIcon className="size-4" />
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden animate-rise [animation-delay:240ms] sm:block">
            <CodeCard />
          </div>
        </div>

        <dl className="mt-16 grid gap-8 border-t border-zinc-200 pt-10 sm:grid-cols-3 dark:border-zinc-800">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</dt>
              <dd className="text-4xl font-bold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
