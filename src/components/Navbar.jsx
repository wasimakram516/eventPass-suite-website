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
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/', isPage: true },
  { label: 'Features', href: '/features', isPage: true },
  { label: 'Modules', href: '/modules', isPage: true },
  { label: 'How It Works', href: '/how-it-works', isPage: true },
  { label: 'Events', href: '/events', isPage: true },
  { label: 'Contact Us', href: '/contact', isPage: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

              sx={{ position: 'relative', width: { xs: 150, md: 210 }, height: { xs: 42, md: 54 }, flexShrink: 0, cursor: 'pointer' }}
            >
              <Image
                src="/logo.png"
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
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Button
                    key={item.label}
                    component={item.isPage ? Link : 'button'}
                    href={item.isPage ? item.href : undefined}
                    onClick={() => handleLinkClick(item)}
                    disableRipple
                    sx={{
                      color: isActive ? '#00C8FF' : 'rgba(255,255,255,0.85)',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? 700 : 500,
                      textTransform: 'none',
                      px: 1.5,
                      py: 0.75,
                      minWidth: 0,
                      letterSpacing: 0.2,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                        transformOrigin: 'center',
                        width: '60%',
                        height: '2px',
                        borderRadius: '999px',
                        bgcolor: '#00C8FF',
                        transition: 'transform 0.2s ease',
                      },
                      '&:hover': {
                        color: '#00C8FF',
                        bgcolor: 'transparent',
                        '&::after': { transform: 'translateX(-50%) scaleX(1)' },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
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
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <ListItem
                  key={item.label}
                  component={item.isPage ? Link : 'button'}
                  href={item.isPage ? item.href : undefined}
                  onClick={() => handleLinkClick(item)}
                  sx={{
                    py: 2,
                    color: isActive ? '#00C8FF' : '#fff',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    borderLeft: isActive ? '2px solid #00C8FF' : '2px solid transparent',
                    pl: isActive ? 2 : 2,
                    textAlign: 'left',
                    width: '100%',
                    bgcolor: isActive ? 'rgba(0,200,255,0.05)' : 'transparent',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#00C8FF',
                      bgcolor: 'rgba(0,200,255,0.05)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: { fontSize: '1.1rem', fontWeight: isActive ? 700 : 600 },
                    }}
                  />
                </ListItem>
              );
            })}
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
