import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    // Basic naive email sending using SMTP via nodemailer if configured.
    // Falls back to a mailto relay if server creds are not set.
    const to = 'contact@amalcoin.io'
    const subject = `[AMAL Contact] ${name}`
    const text = `From: ${name} <${email}>

${message}`

    const hasSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
    if (hasSmtp) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST as string,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user: process.env.SMTP_USER as string, pass: process.env.SMTP_PASS as string },
      })
      await transporter.sendMail({ from: process.env.SMTP_FROM || 'no-reply@amalcoin.io', to, subject, text })
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    // Fallback: try to use Resend if configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({ from: 'no-reply@amalcoin.io', to, subject, text })
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    // If no email provider configured, fail gracefully
    return new Response(JSON.stringify({ error: 'Email service not configured' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }
}


