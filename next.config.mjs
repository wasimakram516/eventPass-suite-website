// This domain used to host the EventPass app before this marketing site launched here.
// Google still has old app routes indexed; 301 them so it can consolidate/drop them instead of hitting 404s.
const LEGACY_APP_PATHS = [
  'auth', 'checkin', 'cms', 'crosszero', 'digipass', 'downloads',
  'eventduel', 'eventreg', 'eventwheel', 'memorywall', 'my-badge',
  'nool', 'oci', 'quiznest', 'staff', 'stageq', 'surveyguru', 'tapmatch', 'votecast',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...LEGACY_APP_PATHS.map((path) => ({
        source: `/${path}/:rest*`,
        destination: '/',
        permanent: true,
      })),
      { source: '/sme-agenda', destination: '/events', permanent: true },
      { source: '/ar/event/:rest*', destination: '/events', permanent: true },
      { source: '/ar/:rest*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
