const testimonios = [
  {
    nombre: 'Valentina M.',
    contexto: 'Ingeniería · UdelaR',
    texto:
      'Tenía Cálculo I atrasado desde 2021. En dos meses lo aprobé con 9.',
  },
  {
    nombre: 'Carlos R.',
    contexto: 'Padre de alumno · Liceo',
    texto:
      'Mi hijo estaba perdido en matemática de 6to. Terminó el año con muy buenas notas.',
  },
  {
    nombre: 'Matías F.',
    contexto: 'Economía · UdelaR',
    texto:
      'Microeconomía me tenía desesperado. Empecé con Phi una semana antes del parcial y lo aprobé.',
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-paper2 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-green text-sm font-semibold uppercase tracking-widest mb-3">
            Lo que dicen los alumnos
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink">
            Resultados reales, estudiantes reales
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 shadow-sm"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-green text-lg">★</span>
                ))}
              </div>
              <p className="text-ink2 leading-relaxed flex-1">&ldquo;{t.texto}&rdquo;</p>
              <div>
                <div className="font-semibold text-ink text-sm">{t.nombre}</div>
                <div className="text-ink4 text-xs mt-0.5">{t.contexto}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
