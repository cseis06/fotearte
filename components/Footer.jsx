export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container py-12 grid md:grid-cols-12 gap-10">
        {/* Brand + Descripción */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-brand" aria-hidden />
            <div className="leading-tight">
              <p className="text-xl font-semibold text-white tracking-tight">FOTEARTE</p>
              <p className="text-xs text-neutral-400 tracking-wide">PARAGUAY</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-neutral-400">
            Más que una escuela de fotografía: un espacio donde tu creatividad florece. Cursos dinámicos y una comunidad apasionada.
          </p>
        </div>

        {/* Ubicaciones */}
        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold text-white">Ubicaciones</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            <li>Asunción</li>
            <li>Ciudad del Este</li>
            <li>Villarrica</li>
            <li>Encarnación</li>
            <li>Coronel Oviedo</li>
          </ul>
        </div>

        {/* Menú */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold text-white">Menú</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="text-neutral-300 hover:text-white" href="/">Inicio</a></li>
            <li><a className="text-neutral-300 hover:text-white" href="/galeria">Galería</a></li>
            <li><a className="text-neutral-300 hover:text-white" href="/cursos">Cursos</a></li>
            <li><a className="text-neutral-300 hover:text-white" href="/alquiler">Alquiler</a></li>
          </ul>
        </div>

        {/* Redes */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold text-white">Nuestras Redes</h3>
          <div className="mt-4 flex items-center gap-4 text-neutral-300">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><path d="M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l8 10L9 20l11-16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 9h3V6h-3a3 3 0 0 0-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1Z" fill="currentColor"/></svg>
            </a>
            <a href="https://wa.me/59500000000" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 11.5A8.5 8.5 0 0 1 7.3 19.7L4 20l.3-3.3A8.5 8.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.6"/><path d="M8.5 9.5c0 3 3 6 6 6c.4 0 1.2-.2 1.5-.5l1.2 1.2c-.7.7-2 1.1-2.7 1.1c-3.9 0-7.5-3.6-7.5-7.5c0-.7.4-2 1.1-2.7l1.2 1.2c-.3.3-.5 1.1-.5 1.5Z" fill="currentColor"/></svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-12 mt-8 flex items-center justify-between border-t border-white/10 pt-6 ">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} FOTEARTE. Todos los derechos reservados.</p>
          <p className="text-xs text-neutral-500">Hecho con ❤️ por <a href="https://github.com/cseis06" target="_blank" rel="noreferrer" className="hover:text-brand">CSEIS</a></p>
        </div>
      </div>
    </footer>
  )
}
