'use client';
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';

export default function ClientLayout({ children }) {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isPageLoading} />
      {!isPageLoading && children}
    </>
  );
}