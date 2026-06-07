import ThemeRegistry from '@/styles/themeRegistry.js';
import { Suspense } from 'react';
import ClientLayout from '@/components/ClientLayout';
import JsonLd from '@/components/JsonLd';

const BASE_URL = 'https://eventpass.whitewall.solutions';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'EventPass — The All-In-One Event Engagement Platform',
    template: '%s | EventPass',
  },
  description:
    'EventPass by WhiteWall is the premier platform for digital event passes, smart QR check-in, real-time analytics, AI-powered engagement, and seamless badge printing.',
  keywords: [
    'event management platform',
    'digital event pass',
    'QR check-in',
    'badge printing',
    'event engagement',
    'real-time analytics',
    'WhiteWall',
    'EventPass',
    'Oman events',
    'event tech',
  ],
  authors: [{ name: 'WhiteWall Digital Solutions', url: 'https://whitewall.om' }],
  creator: 'WhiteWall Digital Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'EventPass',
    title: 'EventPass — The All-In-One Event Engagement Platform',
    description:
      'Smart QR check-in, on-demand badge printing, real-time analytics, AI engagement tools, and more — all in one platform.',
    images: [
      {
        url: '/images/background-image.webp',
        width: 1440,
        height: 656,
        alt: 'EventPass — Event Engagement Platform by WhiteWall',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EventPass — The All-In-One Event Engagement Platform',
    description:
      'Smart QR check-in, on-demand badge printing, real-time analytics, and AI engagement tools.',
    images: ['/images/background-image.webp'],
    creator: '@whitewall_ds',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: [
      'OzhKlj6gYCGoQO4tPBmqJTgpvvWTjTci7_OoH3Ycuwg',
      'ST6ATHovg739QjGj7C5ILSMvPOYK1sNicA9tFcIqRe4',
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <JsonLd />
        <ThemeRegistry>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
