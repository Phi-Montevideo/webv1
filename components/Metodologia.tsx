import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Clases 100% personalizadas',
    desc: 'Cada clase parte de tus dudas concretas, tu parcial específico, tu forma de aprender.',
  },
  {
    number: '02',
    title: 'Conocemos los temarios reales',
    desc: 'Sabemos qué entra en cada parcial de UdelaR, ORT y UCU.',
  },
  {
    number: '03',
    title: 'Seguimiento entre clases',
    desc: 'Podés consultar dudas por WhatsApp antes del parcial.',
  },
  {
    number: '04',
    title: 'Clases presenciales en Cordón',
    desc: 'Nos encontramos en la zona de Cordón, Montevideo. Consultá disponibilidad.',
  },
]

export default function Metodologia() {
  return (
    <section id="metodologia" className="bg-green-dark py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text + logo */}
          <div className="space-y-6">
            <p className="text-green-light text-sm font-semibold uppercase tracking-widest">
              Por qué Instituto Phi funciona
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-white leading-snug">
              No enseñamos a memorizar.{' '}
              <em className="italic text-green-light">Enseñamos a entender.</em>
            </h2>
            <p className="text-green-light/80 leading-relaxed">
              En más de 20 años aprendimos que el problema nunca es el alumno. Es la
              forma en que le explicaron.
            </p>
            <div className="pt-4">
              <Image
                src="/logo-white.png"
                alt="Instituto Phi"
                width={120}
                height={38}
                className="h-9 w-auto opacity-80"
              />
            </div>
          </div>

          {/* Right: steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="text-green-light/40 font-serif text-2xl font-bold leading-none pt-1 w-8 flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                  <p className="text-green-light/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
