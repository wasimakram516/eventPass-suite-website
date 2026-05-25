const env = {
  eventpassUrl: process.env.NEXT_PUBLIC_EVENTPASS_URL || 'https://eventpass.whitewall.solutions/',
  node_env: process.env.NEXT_PUBLIC_NODE_ENV || 'development',
  logoUrl: process.env.NEXT_PUBLIC_LOGO_URL || '',
  emailHost: process.env.EMAIL_HOST || process.env.SMTP_HOST || '',
  emailPort: Number(process.env.EMAIL_PORT || process.env.SMTP_PORT || 587),
  emailUser: process.env.EMAIL_USER || process.env.SMTP_USER || '',
  emailPass: process.env.EMAIL_PASS || process.env.SMTP_PASS || '',
  emailSecure: (process.env.EMAIL_SECURE || process.env.SMTP_SECURE || 'false') === 'true',
  contactToEmail: process.env.CONTACT_TO_EMAIL || '',
  contactFromEmail: process.env.CONTACT_FROM_EMAIL || '',
  heroVideoUrl: process.env.NEXT_PUBLIC_HERO_SECTION_VIDEO_URL || '',
};

export default env;
