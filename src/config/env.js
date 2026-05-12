const env = {
  eventpassUrl: process.env.NEXT_PUBLIC_EVENTPASS_URL || 'https://eventpass.whitewall.solutions/',
  formspreeFormId: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'abcdefg',
  node_env: process.env.NEXT_PUBLIC_NODE_ENV || 'development',
  logoUrl: process.env.NEXT_PUBLIC_LOGO_URL || '',
  emailHost: process.env.EMAIL_HOST || process.env.SMTP_HOST || '',
  emailPort: Number(process.env.EMAIL_PORT || process.env.SMTP_PORT || 587),
  emailUser: process.env.EMAIL_USER || process.env.SMTP_USER || '',
  emailPass: process.env.EMAIL_PASS || process.env.SMTP_PASS || '',
  emailSecure: (process.env.EMAIL_SECURE || process.env.SMTP_SECURE || 'false') === 'true',
  contactToEmail: process.env.CONTACT_TO_EMAIL || '',
  contactFromEmail: process.env.CONTACT_FROM_EMAIL || '',
  contactEmail: process.env.CONTACT_EMAIL || extractEmail(process.env.CONTACT_TO_EMAIL) || 'solutions@whitewall.om',
};

export default env;

function extractEmail(value) {
  if (!value) return '';

  const match = String(value).match(/<([^>]+)>/);
  if (match?.[1]) return match[1].trim();

  const plainEmail = String(value).match(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/);
  return plainEmail?.[0] || '';
}
