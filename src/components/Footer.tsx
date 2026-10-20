import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { ArrowUpIcon } from './icons'
import { Logo } from './Section'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <span className="font-mono text-sm text-fg/90">{profile.handle}</span>
        </a>
        <p className="text-sm text-muted-fg">
          © {new Date().getFullYear()} {profile.name} · Built with React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#top"
      aria-label="Back to top"
      tabIndex={visible ? undefined : -1}
      className={`fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full bg-primary text-primary-fg shadow-[0_8px_30px_-6px_rgb(81_229_126/0.6)] transition-all duration-300 hover:brightness-110 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUpIcon className="size-5" />
    </a>
  )
}
