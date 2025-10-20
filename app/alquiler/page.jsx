import GSAPReveal from '@/components/GSAPReveal'

const cameras = [
  { name: 'Canon EOS R6', img: '/cam-r6.jpg', specs: '20MP, 4K60, Dual Pixel AF', price: 60 },
  { name: 'Sony A7 IV', img: '/cam-a7iv.jpg', specs: '33MP, 4K60, AF en ojo', price: 70 },
  { name: 'Fujifilm X-T5', img: '/cam-xt5.jpg', specs: '40MP, 6.2K, Color Fuji', price: 55 },
]

export const metadata = { title: 'Alquiler' }

export default function AlquilerPage() {
  const phone = '59500000000' // Reemplazar por el número real
  return (
    <section className="section pt-28">
      <div className="container">
        <GSAPReveal><h1 className="section-title">Alquiler de cámaras</h1></GSAPReveal>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cameras.map((c, i) => (
            <GSAPReveal key={i} delay={i * 0.05}>
              <article className="card overflow-hidden flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.name} className="h-44 w-full object-cover" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-white font-medium">{c.name}</h3>
                  <p className="text-sm text-neutral-400 mt-1">{c.specs}</p>
                  <p className="mt-3 text-neutral-200 font-medium">Gs. {c.price}.000 por día</p>
                  <div className="mt-4">
                    <a
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                      href={`https://wa.me/${phone}?text=${encodeURIComponent('Hola, quisiera consultar disponibilidad de ' + c.name)}`}
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            </GSAPReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
