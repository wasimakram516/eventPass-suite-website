import ThemeRegistry from '@/styles/themeRegistry.js';
import { Suspense } from 'react';
import ClientLayout from '@/components/ClientLayout';
import JsonLd from '@/components/JsonLd';
import { Sora, Plus_Jakarta_Sans, Syne } from 'next/font/google';

const BASE_URL = 'https://eventpass.whitewall.solutions';

// Self-hosted via next/font so fonts never block rendering (replaces the render-blocking Google Fonts <link>).
const sora = Sora({ subsets: ['latin'], display: 'swap', variable: '--font-sora' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-jakarta' });
const syne = Syne({ subsets: ['latin'], display: 'swap', variable: '--font-syne' });

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
    <html lang="en" className={`${sora.variable} ${jakarta.variable} ${syne.variable}`}>
      <head>
        <meta name="emotion-insertion-point" content="" />
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
