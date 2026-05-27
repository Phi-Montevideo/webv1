import { supabase } from '@/lib/supabase'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  if (!supabase) {
    return Response.json({ ok: false, error: 'Database not configured' }, { status: 503 })
  }

  try {
    const { nombre, telefono, materia, utm_source, utm_campaign } =
      await request.json()

    const { error } = await supabase.from('leads').insert({
      nombre,
      telefono,
      materia,
      utm_source,
      utm_campaign,
    })

    if (error) {
      console.error('Supabase error:', error.message)
      return Response.json({ ok: false }, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Lead API error:', err)
    return Response.json({ ok: false }, { status: 500 })
  }
}
