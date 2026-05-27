const liceo = [
  { icon: '∑', name: 'Matemática', desc: 'Álgebra, geometría y trigonometría para todos los años del liceo.' },
  { icon: '⚡', name: 'Física', desc: 'Mecánica, electricidad y ondas con enfoque práctico.' },
  { icon: '⚗', name: 'Química', desc: 'Química general e inorgánica para bachillerato.' },
]

const facultad = [
  { icon: '∫', name: 'Cálculo', desc: 'Cálculo I y II para ingeniería, ciencias y economía.' },
  { icon: 'σ', name: 'Estadística', desc: 'Probabilidad y estadística para todas las carreras.' },
  { icon: 'π', name: 'Matemática', desc: 'Matemática universitaria: álgebra lineal y análisis.' },
  { icon: '$', name: 'Economía', desc: 'Introducción a la economía y principios básicos.' },
  { icon: '↗', name: 'Macroeconomía', desc: 'Modelos macroeconómicos y política económica.' },
  { icon: 'μ', name: 'Microeconomía', desc: 'Teoría del consumidor, productor y equilibrio de mercados.' },
]

function MateriaCard({ icon, name, desc }: { icon: string; name: string; desc: string }) {
  return (
    <a
      href="#form"
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-soft transition-colors group cursor-pointer"
    >
      <div className="w-10 h-10 rounded-lg bg-green-pale flex items-center justify-center flex-shrink-0 text-lg text-green group-hover:bg-green-pale/80 transition-colors">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-ink text-sm">{name}</div>
        <div className="text-ink4 text-xs mt-1 leading-relaxed">{desc}</div>
      </div>
    </a>
  )
}

export default function Materias() {
  return (
    <section id="materias" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-green text-sm font-semibold uppercase tracking-widest mb-3">
            Materias disponibles
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-4">
            Todo lo que necesitás para aprobar
          </h2>
          <p className="text-ink3 max-w-xl mx-auto">
            Desde las materias más exigentes del liceo hasta los parciales más temidos de la facultad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Liceo */}
          <div className="bg-paper rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-green-light" />
              <h3 className="font-semibold text-ink">Liceo</h3>
            </div>
            <div className="space-y-1">
              {liceo.map((m) => (
                <MateriaCard key={m.name} {...m} />
              ))}
            </div>
          </div>

          {/* Facultad */}
          <div className="bg-paper rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-green" />
              <h3 className="font-semibold text-ink">Facultad</h3>
            </div>
            <div className="space-y-1">
              {facultad.map((m) => (
                <MateriaCard key={m.name + m.icon} {...m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
