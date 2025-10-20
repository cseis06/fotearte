import GSAPReveal from '@/components/GSAPReveal'
import ParallaxImage from '@/components/ParallaxImage'

const images = [
  '/g1.jpg','/g2.jpg','/g3.jpg','/g4.jpg','/g5.jpg','/g6.jpg','/g7.jpg','/g8.jpg','/g9.jpg'
]

export const metadata = { title: 'Galería' }

export default function GaleriaPage() {
  return (
    <section className="section pt-28">
      <div className="container">
        <GSAPReveal><h1 className="section-title">Galería</h1></GSAPReveal>
        <div className="mt-8 columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid mb-4">
              <ParallaxImage src={src} alt={`Foto ${i+1}`} height={300 + (i % 3) * 60} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
