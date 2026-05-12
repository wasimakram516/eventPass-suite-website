'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/?view=site', isPage: true },
  { label: 'Features', href: '/features', isPage: true },
  { label: 'Modules', href: '/modules', isPage: true },
  { label: 'How It Works', href: '/how-it-works', isPage: true },
  { label: 'Events', href: '/events', isPage: true },
  { label: 'Contact Us', href: '/contact', isPage: true },
];

export default function Navbar({ onLogoClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (item) => {
    setMobileOpen(false);
    
    if (item.isPage) return;

    if (item.href === '/') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.href.startsWith('/#')) {
       const id = item.href.replace('/', '');
       const el = document.querySelector(id);
       if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  return (
    <>
      <AppBar
        component={motion.header}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(0,0,0,0.85)' : '#000000',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backgroundImage: scrolled ? 'none' : 'none',
          transition: 'all 0.3s ease',
          py: { xs: 0.5, md: 1 },
          zIndex: 1300,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 72 } }}>
            <Box 
              component={Link} 
              href="/"
              onClick={handleLogoClick}
              sx={{ position: 'relative', width: { xs: 150, md: 210 }, height: { xs: 42, md: 54 }, flexShrink: 0, cursor: 'pointer' }}
            >
              <Image
                src="/logo.webp"
                alt="eventPass"
                fill
                sizes="(max-width: 900px) 150px, 210px"
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
                priority
              />
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                ml: 'auto',
                mr: 2,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={item.isPage ? Link : 'button'}
                  href={item.isPage ? item.href : undefined}
                  onClick={() => handleLinkClick(item)}
                  disableRipple
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    px: 1.5,
                    py: 0.75,
                    minWidth: 0,
                    letterSpacing: 0.2,
                    '&:hover': {
                      color: '#00C8FF',
                      bgcolor: 'transparent',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'block' }, flexShrink: 0 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#00C8FF',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  borderRadius: '100px',
                  boxShadow: '0 4px 14px rgba(0, 200, 255, 0.3)',
                  textDecoration: 'none',
                  '&:hover': {
                    bgcolor: '#00b8ee',
                    boxShadow: '0 6px 20px rgba(0, 200, 255, 0.4)',
                  },
                }}
              >
                Book a Demo
              </Button>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' }, ml: 2, zIndex: 1400 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 300,
            bgcolor: '#000',
            backgroundImage: 'none',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            zIndex: 1500,
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.label}
                component={item.isPage ? Link : 'button'}
                href={item.isPage ? item.href : undefined}
                onClick={() => handleLinkClick(item)}
                sx={{
                  py: 2,
                  color: '#fff',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  textAlign: 'left',
                  width: '100%',
                  bgcolor: 'transparent',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#00C8FF',
                  }
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: { fontSize: '1.1rem', fontWeight: 600 },
                  }}
                />
              </ListItem>
            ))}
            <ListItem sx={{ mt: 4, px: 0 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: '#00C8FF',
                  color: '#000',
                  fontWeight: 700,
                  py: 1.5,
                  borderRadius: '12px',
                }}
                onClick={() => handleLinkClick({ href: '/contact', isPage: true })}
              >
                Book a Demo
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
