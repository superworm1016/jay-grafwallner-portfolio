import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { CloseIcon, MenuIcon } from './icons'
import { Logo } from './Section'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'stack', label: 'Stack' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

const SECTION_IDS = LINKS.map((link) => link.id)

export function Nav() {
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-full">
          <Logo />
          <span className="font-mono text-sm text-fg/90">{profile.handle}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative block px-2.5 py-2 text-sm transition-colors ${
                    isActive ? 'font-medium text-fg' : 'text-muted-fg hover:text-fg'
                  }`}
                >
                  {link.label}
                  {isActive && <span aria-hidden="true" className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-primary" />}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-fg transition hover:brightness-110 sm:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-full text-fg hover:bg-white/5 lg:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-fg/90 hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-4 py-3 text-center font-medium text-primary-fg"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
