
export default function Hero() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '59899000000'

  return (
    <section className="bg-paper py-14 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2.5 bg-green-pale text-green text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse flex-shrink-0" />
              Más de 20 años en Montevideo
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl xl:text-[3.5rem] leading-tight text-ink">
              Aprobá la materia que siempre{' '}
              <em className="text-green italic">te costó.</em>
            </h1>

            <p className="text-ink3 text-lg leading-relaxed">
              Clases particulares en Montevideo para liceo y facultad. Matemática,
              física, química, cálculo, economía y más. Metodología probada en miles
              de horas de clase.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green text-white font-semibold px-7 py-3.5 rounded-full hover:bg-green-dark transition-colors"
              >
                Quiero empezar →
              </a>
              <a
                href="#materias"
                className="border border-green text-green font-semibold px-7 py-3.5 rounded-full hover:bg-green-soft transition-colors"
              >
                Ver materias
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-paper2">
              <div>
                <div className="font-serif text-3xl font-bold text-ink">20+</div>
                <div className="text-sm text-ink4 mt-1">Años de experiencia</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-ink">500+</div>
                <div className="text-sm text-ink4 mt-1">Alumnos que aprobaron</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-ink">9</div>
                <div className="text-sm text-ink4 mt-1">Materias disponibles</div>
              </div>
            </div>
          </div>

          {/* Right column — pricing card */}
          <div className="bg-green-dark rounded-2xl p-8 space-y-6">
            <div>
              <h2 className="text-white text-xl font-semibold mb-1">
                Precios y horarios
              </h2>
              <p className="text-green-light text-sm">
                Clases presenciales · Cordón, Montevideo
              </p>
            </div>

            {/* Pricing cards */}
            <div className="space-y-3">
              <div
                className="rounded-xl p-5 flex items-center justify-between"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <div>
                  <div className="text-white font-semibold">Hora suelta</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(116,198,157,0.7)' }}>
                    Por clase
                  </div>
                </div>
                <div className="font-serif text-3xl font-bold text-white">$400</div>
              </div>

              <div
                className="rounded-xl p-5 flex items-center justify-between border"
                style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(116,198,157,0.3)' }}
              >
                <div>
                  <div className="text-white font-semibold">Cuponera × 10 hs</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(116,198,157,0.7)' }}>
                    Ahorrás $300
                  </div>
                </div>
                <div className="font-serif text-3xl font-bold text-white">$3.700</div>
              </div>
            </div>

            {/* Schedule & location */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <span className="text-green-light text-base leading-none mt-0.5">⏰</span>
                <span className="text-white/85 text-sm">
                  Lun–Vie: 8:00–12:00 y 14:00–17:00
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-light text-base leading-none mt-0.5">⏰</span>
                <span className="text-white/85 text-sm">Sábados: 9:00–12:00</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-light text-base leading-none mt-0.5">📍</span>
                <span className="text-white/85 text-sm">Zona Cordón, Montevideo</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-green-mid hover:bg-green text-white font-semibold py-3.5 rounded-xl transition-colors"
            >
              Reservar por WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
