import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-text',
})

export const metadata: Metadata = {
  title: 'Instituto Phi — Clases Particulares en Montevideo',
  description:
    'Clases particulares en Montevideo para liceo y facultad. Matemática, física, química, cálculo, economía y más. Más de 20 años de experiencia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${dmSerif.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-sans bg-paper text-ink antialiased">{children}</body>
    </html>
  )
}
