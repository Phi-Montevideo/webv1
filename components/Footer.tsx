import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-green-dark py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/logo-white.png"
            alt="Instituto Phi"
            width={120}
            height={38}
            className="h-8 w-auto"
          />
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-green-light">
            <a href="#materias" className="hover:text-white transition-colors">Materias</a>
            <a href="#metodologia" className="hover:text-white transition-colors">Metodología</a>
            <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
            <a href="#form" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <p className="text-xs" style={{ color: 'rgba(116,198,157,0.55)' }}>
            © 2026 Instituto Phi · Montevideo, Uruguay
          </p>
        </div>
      </div>
    </footer>
  )
}
