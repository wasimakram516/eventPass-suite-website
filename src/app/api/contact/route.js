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
    const LOGO_URL = env.logoUrl;
    const html = `
      <div style="font-family:'Segoe UI',Arial,sans-serif;background:#f6f8fa;padding:20px;">
        <div style="max-width:640px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          
          <!-- HEADER -->
          <div style="background:#004aad;padding:32px;text-align:center;">
            ${LOGO_URL ? `<img src="${LOGO_URL}" alt="EventPass" style="max-width:140px;max-height:80px;margin-bottom:12px;display:inline-block;" />` : ''}
            <h2 style="color:#fff;font-size:22px;margin:0;">EventPass Inquiry</h2>
          </div>

          <!-- CONTENT BODY -->
          <div style="padding:24px 28px 28px;">
            
            <p style="font-size:15px;color:#333;margin-top:20px;">
              A new inquiry has been submitted through the contact form.
            </p>

            <h3 style="margin-top:24px;font-size:17px;color:#004aad;">Inquiry Details:</h3>
            <table style="width:100%;font-size:14px;color:#333;">
              <tr>
                <td style="padding:8px 0;width:30%;"><strong>Full Name:</strong></td>
                <td style="padding:8px 0;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;"><strong>Email:</strong></td>
                <td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#004aad;text-decoration:none">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding:8px 0;"><strong>Company:</strong></td>
                <td style="padding:8px 0;">${escapeHtml(company || 'Not provided')}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;"><strong>Phone:</strong></td>
                <td style="padding:8px 0;">${formattedPhone ? escapeHtml(formattedPhone) : 'Not provided'}</td>
              </tr>
            </table>

            <h3 style="margin-top:24px;font-size:17px;color:#004aad;">Message:</h3>
            <div style="background:#f9f9f9;border-radius:8px;padding:20px;border:1px solid #eee;font-size:14px;color:#333;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</div>

            <!-- FOOTER -->
            <hr style="border:none;border-top:1px solid #eee;margin:32px 0 24px;" />
            <p style="font-size:13px;color:#777;margin:0;">
              This inquiry was sent from the EventPass Website.
            </p>
            <p style="font-size:13px;color:#777;margin:4px 0 0;">
              &copy; ${new Date().getFullYear()} WhiteWall Digital Solutions
            </p>
          </div>
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

function formatPhonePayload(phone) {
  if (!phone) return '';

  const countryCode = phone.countryCode || '';
  const number = phone.number || '';
  const dialDigits = countryCode.replace(/\D/g, '');
  const phoneDigits = number.replace(/\D/g, '');

  if (!phoneDigits) return '';

  return `+${dialDigits} ${phoneDigits}`.trim();
}
