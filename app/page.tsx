import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Materias from '@/components/Materias'
import Metodologia from '@/components/Metodologia'
import Testimonios from '@/components/Testimonios'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Materias />
        <Metodologia />
        <Testimonios />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
