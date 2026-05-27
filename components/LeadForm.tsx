'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LeadForm() {
  const router = useRouter()
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [materia, setMateria] = useState('')
  const [utmSource, setUtmSource] = useState('')
  const [utmCampaign, setUtmCampaign] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setUtmSource(params.get('utm_source') ?? '')
    setUtmCampaign(params.get('utm_campaign') ?? '')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          telefono,
          materia,
          utm_source: utmSource,
          utm_campaign: utmCampaign,
        }),
      })
      if (res.ok) {
        router.push('/gracias')
      } else {
        setLoading(false)
      }
    } catch {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-white/10 border border-white/20 text-white placeholder:text-green-light/60 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-light transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        className={inputClass}
      />
      <input
        type="tel"
        placeholder="WhatsApp (ej: 099 123 456)"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
        className={inputClass}
      />
      <select
        value={materia}
        onChange={(e) => setMateria(e.target.value)}
        required
        className={`${inputClass} cursor-pointer`}
      >
        <option value="" disabled style={{ color: '#141a15', background: '#fff' }}>
          Elegí tu materia
        </option>
        <optgroup label="Liceo" style={{ color: '#141a15', background: '#fff' }}>
          <option value="Matemática (Liceo)" style={{ color: '#141a15', background: '#fff' }}>
            Matemática
          </option>
          <option value="Física (Liceo)" style={{ color: '#141a15', background: '#fff' }}>
            Física
          </option>
          <option value="Química (Liceo)" style={{ color: '#141a15', background: '#fff' }}>
            Química
          </option>
        </optgroup>
        <optgroup label="Facultad" style={{ color: '#141a15', background: '#fff' }}>
          <option value="Cálculo" style={{ color: '#141a15', background: '#fff' }}>
            Cálculo
          </option>
          <option value="Estadística" style={{ color: '#141a15', background: '#fff' }}>
            Estadística
          </option>
          <option value="Matemática (Facultad)" style={{ color: '#141a15', background: '#fff' }}>
            Matemática
          </option>
          <option value="Economía" style={{ color: '#141a15', background: '#fff' }}>
            Economía
          </option>
          <option value="Macroeconomía" style={{ color: '#141a15', background: '#fff' }}>
            Macroeconomía
          </option>
          <option value="Microeconomía" style={{ color: '#141a15', background: '#fff' }}>
            Microeconomía
          </option>
        </optgroup>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-mid hover:bg-green text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? 'Enviando...' : 'Quiero más información →'}
      </button>
      <p className="text-center text-xs" style={{ color: 'rgba(116,198,157,0.7)' }}>
        Sin compromiso · Te contactamos por WhatsApp
      </p>
    </form>
  )
}
