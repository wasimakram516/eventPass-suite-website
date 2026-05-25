const BASE_URL = 'https://eventpass.whitewall.solutions';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WhiteWall Digital Solutions',
  url: 'https://whitewall.om',
  logo: `${BASE_URL}/logo.png`,
  sameAs: [
    'https://www.instagram.com/whitewall.om/',
    'https://whitewall.om',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'solutions@whitewall.om',
    contactType: 'customer support',
    availableLanguage: ['English', 'Arabic'],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EventPass',
  url: BASE_URL,
  description:
    'The all-in-one event engagement platform — smart QR check-in, badge printing, real-time analytics, and AI-powered engagement tools.',
  publisher: {
    '@type': 'Organization',
    name: 'WhiteWall Digital Solutions',
    url: 'https://whitewall.om',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'EventPass',
  url: BASE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'EventPass is the premier event management platform for digital passes, QR check-in, badge printing, attendee engagement, and real-time analytics.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/contact`,
  },
  creator: {
    '@type': 'Organization',
    name: 'WhiteWall Digital Solutions',
    url: 'https://whitewall.om',
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
