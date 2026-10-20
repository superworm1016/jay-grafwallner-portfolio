import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from './icons'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
] as const

const SECTION_IDS = LINKS.map((link) => link.id)

export function Nav() {
  const active = useActiveSection(SECTION_IDS)
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? 'border-zinc-200/80 bg-stone-50/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85'
          : 'border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2.5 rounded-lg font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-zinc-900 font-mono text-xs font-semibold text-teal-300 dark:bg-zinc-100 dark:text-teal-700">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'location' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'text-teal-700 dark:text-teal-400'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid size-9 place-items-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            {theme === 'dark' ? <SunIcon className="size-[18px]" /> : <MoonIcon className="size-[18px]" />}
          </button>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="hidden items-center gap-2 rounded-lg bg-zinc-900 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 md:inline-flex dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            <DownloadIcon className="size-4" />
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-9 place-items-center rounded-lg text-zinc-700 hover:bg-zinc-200/60 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-zinc-200/80 md:hidden dark:border-zinc-800/80">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-3">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium text-zinc-700 hover:bg-zinc-200/60 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-3 py-2.5 font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
              >
                <DownloadIcon className="size-4" />
                Download résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
