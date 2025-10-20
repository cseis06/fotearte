"use client"
import { useState } from 'react'
import GSAPReveal from '@/components/GSAPReveal'

export default function HistoryTimeline({ items = [] }) {
  const [active, setActive] = useState(0)
  return (
    <div className="relative">
      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
        {items.map((it, idx) => {
          const isActive = active === idx
          return (
          <GSAPReveal key={it.year} delay={idx * 0.03}>
            <article
              className={`group relative ${isActive ? 'w-[32rem]' : 'w-16 md:w-20'} transition-[width] duration-300 ease-out card bg-gradient-to-b from-white/[0.04] to-white/[0.02] border-white/10`}
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
              tabIndex={0}
            >
              <div className={`absolute inset-0 rounded-2xl pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 bg-[radial-gradient(300px_280px_at_30%_20%,rgba(255,107,61,0.22),transparent_65%),radial-gradient(200px_140px_at_80%_60%,rgba(255,138,100,0.18),transparent_60%)]`} />
              <div className="h-80 md:h-96 flex">
                {/* Colapsado: año vertical */}
                <div className="flex w-18 md:w-20 shrink-0 items-center justify-center">
                  <span className={`text-neutral-300 ${isActive ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 origin-center -rotate-90 tracking-wider font-medium`}>
                    {it.year}
                  </span>
                </div>
                {/* Expandido: contenido */}
                <div className={`${isActive ? 'flex' : 'hidden'} flex-col p-5 pr-6 items-center justify-center text-center w-full`}>
                  <h3 className="text-white font-semibold">{it.year}</h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed max-w-[34ch] text-justify">{it.text}</p>
                </div>
              </div>
              {/* Icono/base inferior */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                <div className="h-1.5 w-8 rounded-full bg-brand/50 group-hover:bg-brand transition" />
              </div>
            </article>
          </GSAPReveal>
        )})}
      </div>
    </div>
  )
}
