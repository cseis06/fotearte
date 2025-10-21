import GSAPReveal from '@/components/GSAPReveal'

export default function Testimonials({ items = [] }) {
  return (
    <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <GSAPReveal key={i} delay={i * 0.05}>
          <article className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/30 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(180px_140px_at_80%_20%,rgba(255,107,61,0.12),transparent_65%),radial-gradient(240px_200px_at_10%_90%,rgba(255,138,100,0.10),transparent_60%)]" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-b from-brand to-brand-soft text-white flex items-center justify-center font-semibold">
                {t.avatar || t.nombre?.[0] || 'F'}
              </div>
              <div>
                <h3 className="text-white font-semibold leading-tight">{t.nombre}</h3>
                {t.cargo && <p className="text-xs text-neutral-400">{t.cargo}</p>}
              </div>
            </div>
            <p className="relative z-10 mt-4 text-sm text-neutral-200 leading-relaxed">“{t.texto}”</p>
            <div className="relative z-10 mt-5">
              <span className="inline-block h-1.5 w-10 rounded-full bg-brand/60" />
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 transition duration-200 group-hover:ring-brand/40" />
          </article>
        </GSAPReveal>
      ))}
    </div>
  )
}
