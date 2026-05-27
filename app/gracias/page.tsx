import Image from 'next/image'
import Link from 'next/link'

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-paper flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="flex justify-center">
          <Image
            src="/logo-dark.png"
            alt="Instituto Phi"
            width={140}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </div>

        <div className="w-16 h-16 rounded-full bg-green-pale flex items-center justify-center mx-auto">
          <svg
            className="w-8 h-8 text-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-serif text-3xl text-ink">
          ¡Gracias! Te contactamos pronto.
        </h1>
        <p className="text-ink3">
          Revisá tu WhatsApp, te escribimos en menos de una hora.
        </p>

        <Link
          href="/"
          className="inline-block bg-green text-white font-semibold px-8 py-3.5 rounded-full hover:bg-green-dark transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
