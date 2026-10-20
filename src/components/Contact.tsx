import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { CheckIcon, CopyIcon, DownloadIcon, MailIcon, MapPinIcon, PhoneIcon } from './icons'

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
    >
      {copied ? <CheckIcon className="size-4 text-teal-300" /> : <CopyIcon className="size-4" />}
      <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
    </button>
  )
}

export function Contact() {
  const details = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref, Icon: PhoneIcon },
    { label: 'Location', value: profile.location, href: undefined, Icon: MapPinIcon },
  ]

  return (
    <section id="contact" className="border-t border-zinc-200/80 py-20 sm:py-28 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-zinc-900 px-6 py-12 text-white sm:px-12 sm:py-16 dark:ring-1 dark:ring-zinc-800">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 -z-10 size-96 rounded-full bg-teal-500/25 blur-3xl"
          />
          <p className="font-mono text-sm text-teal-300">
            <span className="text-zinc-500">05 /</span> Contact
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Let's build something reliable.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-zinc-300">
            I'm open to senior full-stack and AI engineering roles. Email is the fastest way to reach me.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-3 font-medium text-zinc-950 transition-colors hover:bg-teal-300"
            >
              <MailIcon className="size-4" />
              Email me
            </a>
            <CopyEmailButton />
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <DownloadIcon className="size-4" />
              Résumé (PDF)
            </a>
          </div>

          <dl className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {details.map(({ label, value, href, Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 size-5 shrink-0 text-teal-300" />
                <div className="min-w-0">
                  <dt className="text-sm text-zinc-400">{label}</dt>
                  <dd className="mt-0.5 font-medium break-words">
                    {href ? (
                      <a href={href} className="hover:text-teal-300">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
