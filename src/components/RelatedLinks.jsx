import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

const PAGES = {
  features: { label: 'Explore all features', href: '/features' },
  modules: { label: 'Browse every module', href: '/modules' },
  howItWorks: { label: 'See how EventPass works', href: '/how-it-works' },
  events: { label: 'See events powered by EventPass', href: '/events' },
  contact: { label: 'Talk to the team', href: '/contact' },
  privacy: { label: 'Privacy Policy', href: '/privacy-policy' },
  refund: { label: 'Refund Policy', href: '/refund-policy' },
};

/**
 * Contextual "next step" links shown at the bottom of a page, just above the footer.
 * @param {{ to: Array<keyof typeof PAGES>, heading?: string }} props - keys of the pages to link to
 */
export default function RelatedLinks({ to, heading = 'Keep exploring' }) {
  const links = to.map((key) => PAGES[key]).filter(Boolean);
  if (links.length === 0) return null;

  return (
    <Box component="nav" aria-label={heading} sx={{ borderTop: '1px solid rgba(255,255,255,0.06)', py: { xs: 5, md: 6 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
        <Typography
          sx={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            mb: 2,
          }}
        >
          {heading}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 4 } }}>
          {links.map((link) => (
            <Box
              key={link.href}
              component={Link}
              href={link.href}
              sx={{
                color: '#00C8FF',
                fontWeight: 700,
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                textDecoration: 'none',
                '&:hover': { color: '#fff' },
              }}
            >
              {link.label} →
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
