import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { contactPoints, faq, profile } from '../data/profile'
import { ArrowUpRightIcon, CheckIcon, CopyIcon, DownloadIcon, MailIcon, PhoneIcon, PlusIcon } from './icons'
import { Reveal, Section } from './Section'

const fieldClass =
  'mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted-fg/60 transition-colors focus:border-primary/60 focus:outline-none'

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-medium text-fg/90">
      {label}
      {children}
    </label>
  )
}

function MessageForm() {
  // No backend: the form composes an email in the visitor's mail app.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = `Portfolio inquiry from ${name}`
    const body = `${message}\n\n— ${name} (${email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={onSubmit} className="mt-7 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={fieldClass} />
        </Field>
      </div>
      <Field label="Message">
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about the role or project…"
          className={`${fieldClass} resize-y`}
        />
      </Field>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-fg shadow-[0_0_40px_-8px_rgb(81_229_126/0.6)] transition hover:brightness-110"
        >
          Send message
          <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <p className="text-xs text-muted-fg">Opens your email app with the message filled in.</p>
      </div>
    </form>
  )
}

function CopyEmail() {
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
      aria-label={copied ? 'Email copied' : 'Copy email address'}
      className="grid size-8 shrink-0 place-items-center rounded-lg border border-line text-muted-fg transition-colors hover:border-white/20 hover:text-fg"
    >
      {copied ? <CheckIcon className="size-4 text-primary" /> : <CopyIcon className="size-4" />}
    </button>
  )
}

function FaqList() {
  const [open, setOpen] = useState(0)
  return (
    <ul className="mt-5 divide-y divide-line">
      {faq.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={item.q}>
            <h4>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium"
              >
                {item.q}
                <PlusIcon
                  className={`size-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary' : 'text-muted-fg'}`}
                />
              </button>
            </h4>
            <div
              id={`faq-${i}`}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-muted-fg">
                <span className="block pb-4">{item.a}</span>
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's build something reliable"
      intro="I'm open to senior full-stack and AI engineering roles. Send a message or email me directly."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-card p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold">Send a message</h3>
            <p className="mt-2 text-muted-fg">Tell me about the role, the team, or the problem you're solving.</p>
            <MessageForm />

            <div className="mt-8 grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <MailIcon className="size-5 shrink-0 text-primary" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-fg">Prefer email?</p>
                  <a href={`mailto:${profile.email}`} className="block truncate text-sm font-medium hover:text-primary">
                    {profile.email}
                  </a>
                </div>
                <CopyEmail />
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs text-muted-fg">Phone</p>
                  <a href={profile.phoneHref} className="text-sm font-medium hover:text-primary">
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={100}>
            <div className="rounded-2xl border border-line bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold">What I'm looking for</h3>
              <ul className="mt-5 space-y-3">
                {contactPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] text-fg/90">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <CheckIcon className="size-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
              >
                <DownloadIcon className="size-4" />
                Download résumé (PDF)
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-2xl border border-line bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold">Frequently asked</h3>
              <FaqList />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
