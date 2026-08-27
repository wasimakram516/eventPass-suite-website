const BASE_URL = 'https://eventpass.whitewall.solutions';

// lastModified dates are static (last real content change) — bump a date when that page's content actually changes.
// Using new Date() on every build was flagging every page as "changed" on each deploy, which GSC treats as a low-trust signal.
export default function sitemap() {
  return [
    { url: BASE_URL,               lastModified: '2026-05-25', changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/features`,     lastModified: '2026-05-25', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/modules`,      lastModified: '2026-05-25', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/how-it-works`, lastModified: '2026-05-25', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/events`,         lastModified: '2026-05-18', changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/pricing`,        lastModified: '2026-06-06', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/refund-policy`,  lastModified: '2026-08-27', changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: '2026-08-27', changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE_URL}/contact`,        lastModified: '2026-06-03', changeFrequency: 'yearly',  priority: 0.6 },
  ];
}
