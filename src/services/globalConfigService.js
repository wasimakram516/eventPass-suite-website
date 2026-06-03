import env from '@/config/env';

export const DEFAULT_GLOBAL_CONFIG = {
  appName: 'EventPass Suite',
  brandingMediaUrl: '',
  partnerLogos: [],
  contact: {
    email: '',
    phone: '',
  },
  support: {
    email: '',
    phone: '',
  },
  socialLinks: {
    facebook: '',
    instagram: '',
    linkedin: '',
    website: '',
  },
};

const normalizeString = (value) => (typeof value === 'string' ? value.trim() : '');

export function normalizeGlobalConfig(payload) {
  const data = payload?.data ?? payload ?? null;

  if (!data) {
    return null;
  }

  const partnerLogos = Array.isArray(data.clientLogos)
    ? data.clientLogos
        .map((item, index) => ({
          _id: item?._id ? String(item._id) : `partner-${index}`,
          name: normalizeString(item?.name),
          website: normalizeString(item?.website),
          logoUrl: normalizeString(item?.logoUrl),
        }))
        .filter((item) => item.logoUrl)
    : [];

  return {
    appName: normalizeString(data.appName) || DEFAULT_GLOBAL_CONFIG.appName,
    brandingMediaUrl: normalizeString(data.brandingMediaUrl),
    partnerLogos,
    contact: {
      email: normalizeString(data.contact?.email),
      phone: normalizeString(data.contact?.phone),
    },
    support: {
      email: normalizeString(data.support?.email),
      phone: normalizeString(data.support?.phone),
    },
    socialLinks: {
      facebook: normalizeString(data.socialLinks?.facebook),
      instagram: normalizeString(data.socialLinks?.instagram),
      linkedin: normalizeString(data.socialLinks?.linkedin),
      website: normalizeString(data.socialLinks?.website),
    },
  };
}

export async function fetchGlobalConfig({ signal } = {}) {
  if (!env.backendUrl) {
    return null;
  }

  const response = await fetch(new URL('/api/global-config', env.backendUrl), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to load global config (${response.status})`);
  }

  const payload = await response.json();
  return normalizeGlobalConfig(payload);
}