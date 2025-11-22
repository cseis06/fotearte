"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? 'nav-blur' : ''}`}>
      <div className="container flex items-center justify-between py-7">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo FOTEARTE" aria-hidden className="h-8" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <Link href="/" className="hover:text-white">Inicio</Link>
          <Link href="/cursos" className="hover:text-white">Cursos</Link>
          <Link href="/galeria" className="hover:text-white">Galería</Link>
          <Link href="/alquiler" className="hover:text-white">Alquiler</Link>
        </nav>
        <button aria-label="Abrir menú" className="md:hidden text-neutral-300" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="container py-3 flex flex-col gap-3 text-neutral-300">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-white">Inicio</Link>
            <Link href="/cursos" onClick={() => setOpen(false)} className="hover:text-white">Cursos</Link>
            <Link href="/galeria" onClick={() => setOpen(false)} className="hover:text-white">Galería</Link>
            <Link href="/alquiler" onClick={() => setOpen(false)} className="hover:text-white">Alquiler</Link>
          </div>
        </div>
      )}
    </header>
  )
}
