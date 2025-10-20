import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://fotearte.example.com'),
  title: {
    default: 'FOTEARTE — Escuela de Fotografía',
    template: '%s — FOTEARTE'
  },
  description: 'Escuela de fotografía moderna en Paraguay. Cursos, galería, alquiler de equipos y más.',
  keywords: ['fotografía', 'cursos', 'Paraguay', 'Asunción', 'escuela de fotografía'],
  icons: {
    icon: '/favico.ico',
    shortcut: '/favico.ico',
    apple: '/favico.ico'
  },
  openGraph: {
    title: 'FOTEARTE — Escuela de Fotografía',
    description: 'Cursos de fotografía en Paraguay. Galería, alquiler de cámaras y más.',
    url: 'https://fotearte.example.com',
    siteName: 'FOTEARTE',
    images: [
      { url: '/og.jpg', width: 1200, height: 630 }
    ],
    locale: 'es_PY',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOTEARTE — Escuela de Fotografía',
    description: 'Cursos, galería y alquiler de equipos fotográficos.',
    images: ['/og.jpg']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
