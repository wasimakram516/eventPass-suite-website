'use client';
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import { GlobalConfigProvider } from '@/components/GlobalConfigProvider';

export default function ClientLayout({ children }) {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <GlobalConfigProvider>
      <Loader isLoading={isPageLoading} />
      {/* Always render children so the server HTML contains the page content and internal links for crawlers;
          the Loader is a fixed full-screen overlay that covers the page while it initialises. */}
      {children}
    </GlobalConfigProvider>
  );
}
