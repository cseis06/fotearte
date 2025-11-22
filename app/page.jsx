import GSAPReveal from '@/components/GSAPReveal'
import ParallaxImage from '@/components/ParallaxImage'
import HistoryTimeline from '@/components/HistoryTimeline'
import Testimonials from '@/components/Testimonials'

const fundador = {
  nombre: 'Juan Pérez',
  foto: '/founder.jpg',
  bio: 'Manuel Pellón es un fotógrafo profesional galardonado, especializado en lifestyle, retratos, fotografía inmobiliaria y de calle. Empezó su carrera en 2008 y estudió en el Instituto de la Imagen de Asunción y en Buenos Aires, donde ganó una beca por su talento. En 2010 fundó Fotearte, un instituto que revolucionó la enseñanza de la fotografía en Paraguay y que hoy también tiene presencia en EE. UU., con más de 800 estudiantes y más de 100 becas otorgadas a jóvenes sin recursos. Su trabajo ha aparecido en revistas, campañas de moda y eventos como Asunción y New York Fashion Week. Con base en Nueva York, Manuel sigue contando historias visuales que reflejan la belleza de las personas y la energía cambiante de la ciudad.'
}

const profesores = [
  { nombre: 'Gaspar Casco', especialidad: 'Retrato', foto: '/gaspar-casco.png' },
  { nombre: 'Luis Martínez', especialidad: 'Paisaje', foto: '/raul-quintana.png' },
  { nombre: 'María López', especialidad: 'Street', foto: '/raul-quintana.png' },
]

const tiposCursos = [
  { nivel: 'Inicial', desc: 'Fundamentos de cámara, composición y luz natural.', img: '/inicial.png' },
  { nivel: 'Intermedio', desc: 'Iluminación, edición y proyectos guiados.', img: '/intermedio.png' },
  { nivel: 'Avanzado', desc: 'Proyectos autorales, dirección y portafolio.', img: '/avanzado.png' },
]

const testimonios = [
  { nombre: 'Rocío', texto: 'Aprendí más en 3 meses que en años por mi cuenta. La comunidad es increíble.' },
  { nombre: 'Carlos', texto: 'Profes super dedicados y contenido actualizado. Recomendadísimo.' },
  { nombre: 'Valeria', texto: 'La escuela me ayudó a conseguir mis primeros clientes. Gracias!' },
]

export const metadata = {
  title: 'Inicio'
}

export default function HomePage() {
  return (
    <>
      <section className="pt-20">
        <div className="relative md:h-[100vh] w-full overflow-hidden">
          {/* Fondo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero.png" alt="FOTEARTE" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
          {/* Oscurecedor */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/70" />
          {/* Contenido centrado */}
          <div className="relative z-10 h-full w-full flex items-center justify-center">
            <div className="px-6 text-center max-w-3xl">
              <GSAPReveal>
                <h1 className="text-4xl md:text-8xl font-black text-white tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                  ESTO ES FOTEARTE
                </h1>
              </GSAPReveal>
              <GSAPReveal delay={0.1}>
                <p className="mt-4 text-lg md:text-xl text-brand">
                  Descubre la fotografía del mañana, hoy
                </p>
              </GSAPReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center h-full rounded-xl">
          <GSAPReveal>
            <ParallaxImage
              src={fundador.foto}
              alt={`Foto de ${fundador.nombre}`}
              height={560}
              fit="contain"
              className="w-[90%] md:w-[75%] mx-auto rounded-xl"
            />
          </GSAPReveal>
          <div>
            <GSAPReveal>
              <h2 className="section-title">El fundador</h2>
            </GSAPReveal>
            <GSAPReveal delay={0.1}>
              <p className="mt-4 text-neutral-300">{fundador.bio}</p>
            </GSAPReveal>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <GSAPReveal><h2 className="section-title">Historia</h2></GSAPReveal>
          <div className="mt-8">
            {(() => {
              const start = 2010
              const end = new Date().getFullYear()
              const years = []
              for (let y = start; y <= end; y += 2) years.push(y)
              const items = years.map((y) => ({
                year: y,
                text: `En ${y}, FOTEARTE consolidó hitos clave en su comunidad fotográfica: talleres, exposiciones y nuevas generaciones de alumnos.`
              }))
              return <HistoryTimeline items={items} />
            })()}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GSAPReveal><h2 className="section-title">Profesores</h2></GSAPReveal>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {profesores.map((p, i) => (
              <GSAPReveal key={i} delay={i * 0.05}>
                <article className="card overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.foto} alt={`Foto de ${p.nombre}`} className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-white font-medium">{p.nombre}</h3>
                    <p className="text-sm text-neutral-400">{p.especialidad}</p>
                  </div>
                </article>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GSAPReveal><h2 className="section-title">Tipos de cursos</h2></GSAPReveal>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {tiposCursos.map((c, i) => (
              <GSAPReveal key={i} delay={i * 0.05}>
                <article className="card overflow-hidden flex flex-col">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={`Curso ${c.nivel}`} className="h-40 w-full object-cover" />
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-white font-medium">{c.nivel}</h3>
                    <p className="mt-2 text-neutral-300 text-sm">{c.desc}</p>
                    <div className="mt-4">
                      <a href="/cursos" className="btn">Ver más</a>
                    </div>
                  </div>
                </article>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GSAPReveal><h2 className="section-title">Testimonios</h2></GSAPReveal>
          <Testimonials items={testimonios} />
        </div>
      </section>
    </>
  )
}
