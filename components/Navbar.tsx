import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-paper2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-dark.png"
            alt="Instituto Phi"
            width={140}
            height={44}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#materias"
            className="text-ink3 hover:text-green text-sm font-medium transition-colors"
          >
            Materias
          </a>
          <a
            href="#metodologia"
            className="text-ink3 hover:text-green text-sm font-medium transition-colors"
          >
            Metodología
          </a>
          <a
            href="#testimonios"
            className="text-ink3 hover:text-green text-sm font-medium transition-colors"
          >
            Testimonios
          </a>
        </div>

        <a
          href="#form"
          className="bg-green text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-dark transition-colors"
        >
          Reservar clase
        </a>
      </div>
    </nav>
  )
}
