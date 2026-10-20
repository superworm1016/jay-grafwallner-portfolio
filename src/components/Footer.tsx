import { profile } from '../data/profile'
import { ArrowUpIcon } from './icons'

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 font-medium hover:text-zinc-900 dark:hover:text-zinc-100">
          Back to top
          <ArrowUpIcon className="size-4" />
        </a>
      </div>
    </footer>
  )
}
