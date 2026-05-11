import ThemeRegistry from '@/styles/themeRegistry.js';
import { Suspense } from 'react';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: 'EventPass — The ALL-IN-ONE Event Engagement Suite',
  description: 'Revolutionize your events with AI-powered engagement tools, smart QR check-in, real-time analytics, and more.',
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
      <body>
        <ThemeRegistry>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
