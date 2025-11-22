"use client"
import { useMemo, useState } from 'react'
import GSAPReveal from '@/components/GSAPReveal'

const ciudades = ['Asunción', 'Ciudad del Este', 'Villarrica', 'Encarnación', 'Coronel Oviedo', 'Nueva York']

// Número de WhatsApp para consultas (reemplazar por el real)
const phone = '59500000000'

const cursos = [
  { titulo: 'Fotografía Inicial', nivel: 'Inicial', ciudad: 'Asunción', fecha: 'Noviembre', img: '/curso-inicial.jpg' },
  { titulo: 'Iluminación Intermedia', nivel: 'Intermedio', ciudad: 'Ciudad del Este', fecha: 'Octubre', img: '/curso-intermedio.jpg' },
  { titulo: 'Proyecto Avanzado', nivel: 'Avanzado', ciudad: 'Villarrica', fecha: 'Diciembre', img: '/curso-avanzado.jpg' },
  { titulo: 'Street Photo Walk', nivel: 'Intermedio', ciudad: 'Encarnación', fecha: 'Noviembre', img: '/g4.jpg' },
  { titulo: 'Edición Lightroom', nivel: 'Inicial', ciudad: 'Coronel Oviedo', fecha: 'Octubre', img: '/g5.jpg' },
  { titulo: 'Retrato en Estudio', nivel: 'Avanzado', ciudad: 'Nueva York', fecha: 'Enero', img: '/g6.jpg' },
]

export default function CursosPage() {
  const [filtro, setFiltro] = useState('Todos')
  const lista = useMemo(() =>
    filtro === 'Todos' ? cursos : cursos.filter(c => c.ciudad === filtro)
  , [filtro])

  return (
    <section className="section pt-28">
      <div className="container">
        <GSAPReveal><h1 className="section-title">Cursos</h1></GSAPReveal>
        <div className="mt-6 flex flex-wrap gap-2">
          <button onClick={() => setFiltro('Todos')} className={filtro==='Todos' ? 'btn' : 'btn-secondary'}>Todos</button>
          {ciudades.map((c) => (
            <button key={c} onClick={() => setFiltro(c)} className={filtro===c ? 'btn' : 'btn-secondary'}>{c}</button>
          ))}
        </div>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lista.map((c, i) => (
            <GSAPReveal key={i} delay={i * 0.05}>
              <article className="card overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.titulo} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-white font-medium">{c.titulo}</h3>
                  <p className="text-sm text-neutral-400 mt-1">{c.nivel} • {c.ciudad}</p>
                  <p className="text-sm text-neutral-300 mt-2">Inicio: {c.fecha}</p>
                  <div className="mt-4">
                    <a
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                      href={`https://wa.me/${phone}?text=${encodeURIComponent('Hola, quiero consultar sobre el curso: ' + c.titulo + ' en ' + c.ciudad)}`}
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
