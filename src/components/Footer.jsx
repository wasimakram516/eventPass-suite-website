'use client';
import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Link as MuiLink,
  Container,
  Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import Image from 'next/image';

const contact = {
  email: 'solutions@whitewall.om',
  phone: '+968 77121757',
};

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61552622174388',
    icon: <FacebookIcon fontSize="small" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/whitewall.om/',
    icon: <InstagramIcon fontSize="small" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/white-wall-digital-solutions/posts/?feedView=all',
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: 'Website',
    href: 'https://whitewall.om/',
    icon: <LanguageIcon fontSize="small" />,
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
        <Stack spacing={2.5} alignItems="center">

          {/* Company logo */}
          <Box
            sx={{
              position: 'relative',
              width: { xs: 160, md: 200 },
              height: { xs: 48, md: 60 },
              opacity: 0.75,
              mt: 1,
            }}
          >
            <Image
              src="/companylogo.webp"
              alt="WhiteWall Digital Solutions"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>

          {/* Contact row */}
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={3}
            sx={{ rowGap: 1 }}
          >
            <Stack direction="row" spacing={0.75} alignItems="center">
              <EmailIcon sx={{ fontSize: 16, color: 'rgba(255,255,255,0.45)' }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                {contact.email}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.75} alignItems="center">
              <PhoneIcon sx={{ fontSize: 16, color: 'rgba(255,255,255,0.45)' }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                {contact.phone}
              </Typography>
            </Stack>
          </Stack>

          {/* Social icons */}
          <Stack direction="row" spacing={2.5} justifyContent="center" flexWrap="wrap">
            {socialLinks.map((s) => (
              <MuiLink
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                aria-label={s.label}
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#00C8FF' },
                }}
              >
                {s.icon}
              </MuiLink>
            ))}
          </Stack>

          {/* Divider + copyright */}
          <Divider sx={{ width: '100%', borderColor: 'rgba(255,255,255,0.05)', mt: 1 }} />
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.75rem',
              textAlign: 'center',
            }}
          >
            © {new Date().getFullYear()} WhiteWall Digital Solutions. All rights reserved.
          </Typography>

        </Stack>
      </Container>
    </Box>
  );
}
