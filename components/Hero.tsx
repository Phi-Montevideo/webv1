import LeadForm from './LeadForm'

const whatsappSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

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
                href="#form"
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

          {/* Right column — dark form card */}
          <div id="form" className="bg-green-dark rounded-2xl p-8 space-y-6">
            <div>
              <h2 className="text-white text-xl font-semibold mb-1">
                Reservá tu primera clase
              </h2>
              <p className="text-green-light text-sm">
                Respondemos en menos de una hora en horario activo
              </p>
            </div>

            <LeadForm />

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl p-4 transition-colors"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#25D366' }}
              >
                {whatsappSvg}
              </div>
              <div>
                <div className="text-white text-sm font-medium">
                  Escribinos por WhatsApp
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(116,198,157,0.8)' }}>
                  Respuesta inmediata · Sin formularios
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
