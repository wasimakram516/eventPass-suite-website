'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { fetchGlobalConfig } from '@/services/globalConfigService';

const GlobalConfigContext = createContext({
  config: null,
  isLoading: true,
  error: null,
  refresh: () => {},
});

export function GlobalConfigProvider({ children }) {
  const [config, setConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadConfig = useCallback(async (signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const nextConfig = await fetchGlobalConfig({ signal });
      setConfig(nextConfig);
    } catch (nextError) {
      if (nextError?.name === 'AbortError') {
        return;
      }

      setConfig(null);
      setError(nextError?.message || 'Failed to load global configuration');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    void loadConfig(controller.signal);

    return () => controller.abort();
  }, [loadConfig]);

  const refresh = useCallback(() => {
    void loadConfig();
  }, [loadConfig]);

  const value = useMemo(
    () => ({ config, isLoading, error, refresh }),
    [config, isLoading, error, refresh]
  );

  return <GlobalConfigContext.Provider value={value}>{children}</GlobalConfigContext.Provider>;
}

export function useGlobalConfig() {
  return useContext(GlobalConfigContext);
}