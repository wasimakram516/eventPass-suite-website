const BASE_URL = 'https://eventpass.whitewall.solutions';

export default function sitemap() {
  return [
    { url: BASE_URL,               lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/features`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/modules`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  ];
}
