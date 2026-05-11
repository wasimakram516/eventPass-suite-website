import nodemailer from 'nodemailer';
import env from '@/config/env';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, company, email, message } = data || {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const host = env.emailHost;
    const port = env.emailPort || 587;
    const secure = !!env.emailSecure;
    const user = env.emailUser;
    const pass = env.emailPass;

    if (!host || !user || !pass) {
      console.error('SMTP credentials missing');
      return new Response(JSON.stringify({ error: 'SMTP not configured' }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass }
    });

    const to = env.contactToEmail || user;
    const from = env.contactFromEmail || user;
    const subject = `New EventPass inquiry from ${name}${company ? ` - ${company}` : ''}`;

    const formattedPhone = formatPhonePayload(data?.phone);
    const html = `
      <div style="background:#000;color:#fff;padding:24px;font-family:Helvetica,Arial,sans-serif">
        <div style="max-width:720px;margin:0 auto;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.06);box-shadow:0 20px 50px rgba(0,0,0,0.35)">
          <div style="padding:28px 32px;background:linear-gradient(90deg,#00C8FF 0%,#9061FF 100%);color:#000;font-weight:800;font-size:22px;letter-spacing:-0.02em">New EventPass inquiry</div>
          <div style="padding:28px 32px;background:#071016;color:rgba(255,255,255,0.96)">
            <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:rgba(255,255,255,0.8)">A visitor submitted the contact form. The details below are ready for follow-up.</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:18px">
              ${renderInfoCard('Full name', escapeHtml(name))}
              ${renderInfoCard('Email', `<a href="mailto:${escapeHtml(email)}" style="color:#00C8FF;text-decoration:none">${escapeHtml(email)}</a>`)}
              ${renderInfoCard('Company', escapeHtml(company || 'Not provided'))}
              ${renderInfoCard('Phone', formattedPhone ? escapeHtml(formattedPhone) : 'Not provided')}
            </div>
            <div style="border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:18px 20px;background:rgba(255,255,255,0.03)">
              <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.55);margin-bottom:8px">Message</div>
              <div style="white-space:pre-wrap;line-height:1.7;font-size:15px;color:rgba(255,255,255,0.95)">${escapeHtml(message)}</div>
            </div>
            <div style="margin-top:20px;color:rgba(255,255,255,0.6);font-size:13px">Reply directly to the user using their email address. The reply-to header is set automatically.</div>
          </div>
          <div style="padding:12px 16px;background:#05070a;color:rgba(255,255,255,0.5);font-size:12px;text-align:center">eventpass.whitewall.solutions</div>
        </div>
      </div>
    `;

    const text = [
      'New EventPass inquiry',
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || 'Not provided'}`,
      `Phone: ${formattedPhone || 'Not provided'}`,
      '',
      'Message:',
      message,
    ].join('\n');

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo: email
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Mail send error', err);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500 });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderInfoCard(label, value) {
  return `
    <div style="border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:16px 18px;background:rgba(255,255,255,0.03)">
      <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.55);margin-bottom:7px">${label}</div>
      <div style="font-size:15px;line-height:1.5;color:rgba(255,255,255,0.96)">${value}</div>
    </div>
  `;
}

function formatPhonePayload(phone) {
  if (!phone) return '';

  const countryCode = phone.countryCode || '';
  const number = phone.number || '';
  const dialDigits = countryCode.replace(/\D/g, '');
  const phoneDigits = number.replace(/\D/g, '');

  if (!phoneDigits) return '';

  return `+${dialDigits} ${phoneDigits}`.trim();
}
