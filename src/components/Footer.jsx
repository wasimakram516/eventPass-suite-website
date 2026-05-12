'use client';
import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Link as MuiLink,
  Container,
  Divider,
  Grid
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './Animations';

const contact = {
  email: 'solutions@whitewall.om',
  phone: '+968 77121757',
  location: 'TechnoPark, Ghala, Muscat Oman',
  website: 'https://whitewall.om',
  displayWebsite: 'whitewall.om',
  cr: '1385457'
};

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61552622174388',
    icon: <FacebookIcon sx={{ fontSize: { xs: 20, md: 24 } }} />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/whitewall.om/',
    icon: <InstagramIcon sx={{ fontSize: { xs: 20, md: 24 } }} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/white-wall-digital-solutions/posts/?feedView=all',
    icon: <LinkedInIcon sx={{ fontSize: { xs: 20, md: 24 } }} />,
  },
];

const quickLinks = [
  { name: 'Home', href: '/', isPage: true },
  { name: 'Features', href: '/#features' },
  { name: 'Modules', href: '/#modules' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Events', href: '/#events' },
  { name: 'Contact', href: '/contact', isPage: true },
];

export default function Footer() {
  return (
    <Box
      component={motion.footer}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="footer"
      sx={{
        bgcolor: '#000000',
        position: 'relative',
        pt: { xs: 3, md: 12 },
        pb: { xs: 3, md: 6 },
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.3), transparent)',
        }
      }}
    >
      {/* Background Glows */}
      <Box sx={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: '300px',
        background: 'radial-gradient(ellipse at center, rgba(0, 150, 255, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 5, md: 10 }, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 3, md: 10 }}>
          
          {/* Section 1: Logo & Branding */}
          <Grid item xs={12} md={4}>
            <Box component={motion.div} variants={fadeInUp}>
              <Stack spacing={{ xs: 0, md: 0 }} alignItems={{ xs: 'center', md: 'flex-start' }}>
                <Box sx={{ position: 'relative', width: { xs: 200, md: 250 }, height: { xs: 150, md: 200 } }}>
                  <Image
                    src="/logo.webp"
                    alt="WhiteWall Digital Solutions"
                    fill
                    sizes="(max-width: 600px) 160px, 220px"
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.5)', 
                  fontSize: { xs: '0.8rem', md: '0.95rem' }, 
                  lineHeight: 1.6,
                  maxWidth: { xs: '280px', md: '320px' },
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  Pioneering the future of event technology with seamless, AI-driven solutions that turn moments into measurable impact.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Section 2: Quick Links & Follow Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Box component={motion.div} variants={fadeInUp} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography sx={{ 
                fontWeight: 800, 
                fontSize: { xs: '0.65rem', md: '0.75rem' }, 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase', 
                color: '#00C8FF', 
                mb: { xs: 2, md: 4 }
              }}>
                Quick Links
              </Typography>
              <Stack 
                direction={{ xs: 'row', md: 'column' }} 
                spacing={{ xs: 2, md: 2 }} 
                sx={{ mb: { xs: 3, md: 6 }, flexWrap: 'wrap', justifyContent: 'center' }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
              >
                {quickLinks.map((link) => (
                  <MuiLink
                    key={link.name}
                    component={link.isPage ? Link : 'a'}
                    href={link.href}
                    sx={{
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      fontSize: { xs: '0.75rem', md: '0.9rem' },
                      fontWeight: 500,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#00C8FF',
                        pl: { xs: 0, md: 1 }
                      }
                    }}
                  >
                    {link.name}
                  </MuiLink>
                ))}
              </Stack>

              <Typography sx={{ 
                fontWeight: 800, 
                fontSize: { xs: '0.65rem', md: '0.75rem' }, 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase', 
                color: '#00C8FF', 
                mb: { xs: 2, md: 4 }
              }}>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                {socialLinks.map((social) => (
                  <MuiLink
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.6)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#00C8FF',
                        bgcolor: 'rgba(0, 200, 255, 0.08)',
                        borderColor: 'rgba(0, 200, 255, 0.4)',
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    {social.icon}
                  </MuiLink>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Section 3: Contact */}
          <Grid item xs={12} sm={6} md={5}>
            <Box component={motion.div} variants={fadeInUp} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography sx={{ 
                fontWeight: 800, 
                fontSize: { xs: '0.65rem', md: '0.75rem' }, 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase', 
                color: '#00C8FF', 
                mb: { xs: 2, md: 4 }
              }}>
                Get In Touch
              </Typography>
              <Grid container spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <Grid item xs={12} sm={6} md={12}>
                  <Stack direction="row" spacing={1.5} alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    <EmailIcon sx={{ color: '#00C8FF', fontSize: '1.1rem' }} />
                    <MuiLink href={`mailto:${contact.email}`} sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: { xs: '0.75rem', md: '0.9rem' }, '&:hover': { color: '#fff' } }}>
                      {contact.email}
                    </MuiLink>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                  <Stack direction="row" spacing={1.5} alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    <PhoneIcon sx={{ color: '#00C8FF', fontSize: '1.1rem' }} />
                    <MuiLink href={`tel:${contact.phone.replace(/\s+/g, '')}`} sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: { xs: '0.75rem', md: '0.9rem' }, '&:hover': { color: '#fff' } }}>
                      {contact.phone}
                    </MuiLink>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    <LocationOnIcon sx={{ color: '#00C8FF', fontSize: '1.2rem', mt: 0.3 }} />
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.75rem', md: '0.9rem' }, lineHeight: 1.5 }}>
                        TechnoPark, Ghala,<br />
                        Muscat Oman.
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', mt: 1, letterSpacing: '0.05em' }}>
                        CR: 1385457
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: { xs: 4, md: 10 }, mb: 3, borderColor: 'rgba(0, 200, 255, 0.1)' }} />
        
        <Stack 
          component={motion.div}
          variants={fadeInUp}
          direction={{ xs: 'column', md: 'row' }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={2}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', fontWeight: 500, textAlign: 'center' }}>
            © {new Date().getFullYear()} WhiteWall Digital Solutions.
          </Typography>
          <Stack direction="row" spacing={3}>
            <MuiLink href="#" sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textDecoration: 'none' }}>Privacy Policy</MuiLink>
            <MuiLink href="#" sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textDecoration: 'none' }}>Terms</MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
