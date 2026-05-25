const BASE_URL = 'https://eventpass.whitewall.solutions';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
