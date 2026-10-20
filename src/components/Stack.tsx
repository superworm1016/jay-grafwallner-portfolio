import { useRef, type PointerEvent } from 'react'
import { stackChips, stackTiles } from '../data/profile'
import { techIcons, techNames } from '../data/tech'
import { Reveal, Section } from './Section'

const PARALLAX_PX = 28

export function Stack() {
  const panelRef = useRef<HTMLDivElement>(null)

  const setPointer = (x: number, y: number) => {
    panelRef.current?.style.setProperty('--mx', x.toFixed(3))
    panelRef.current?.style.setProperty('--my', y.toFixed(3))
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPointer(((e.clientX - rect.left) / rect.width) * 2 - 1, ((e.clientY - rect.top) / rect.height) * 2 - 1)
  }

  return (
    <Section
      id="stack"
      label="Stack"
      title="The tools behind the work"
      intro="What I use in production, from the database layer up to the React frontend."
    >
      <Reveal>
        <div
          ref={panelRef}
          onPointerMove={onPointerMove}
          onPointerLeave={() => setPointer(0, 0)}
          role="img"
          aria-label={`Technology logos: ${stackTiles.map((tile) => techNames[tile.tech]).join(', ')}`}
          className="relative h-[22rem] overflow-hidden rounded-3xl border border-line bg-[radial-gradient(ellipse_at_center,rgb(81_229_126/0.09),transparent_65%)] [--tile-scale:0.55] sm:h-[30rem] md:[--tile-scale:1]"
        >
          {stackTiles.map((tile, i) => (
            <div
              key={tile.tech}
              className="absolute transition-transform duration-500 ease-out"
              style={{
                left: `${tile.x}%`,
                top: `${tile.y}%`,
                width: `calc(${tile.size}px * var(--tile-scale))`,
                transform: `translate(-50%, -50%) translate(calc(var(--mx, 0) * ${tile.depth * PARALLAX_PX}px), calc(var(--my, 0) * ${tile.depth * PARALLAX_PX}px))`,
                opacity: 0.3 + tile.depth * 0.7,
                filter: tile.depth < 0.4 ? 'blur(1.5px)' : undefined,
              }}
            >
              <img
                src={techIcons[tile.tech]}
                alt=""
                draggable={false}
                className="w-full animate-float drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]"
                style={{ animationDuration: `${7 + (i % 5)}s`, animationDelay: `-${i * 1.3}s` }}
              />
            </div>
          ))}
        </div>
      </Reveal>

      <ul className="mt-8 flex flex-wrap justify-center gap-2">
        {stackChips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-line bg-card px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-muted-fg uppercase"
          >
            {chip}
          </li>
        ))}
      </ul>
    </Section>
  )
}
