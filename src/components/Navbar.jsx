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

const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Events', href: '#events' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: '#000000',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backgroundImage: 'none',
          transition: 'all 0.3s ease',
          py: { xs: 0.5, md: 0.5 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 72 } }}>
            <Box sx={{ position: 'relative', width: { xs: 150, md: 210 }, height: { xs: 42, md: 54 }, flexShrink: 0 }}>
              <Image
                src="/logo.webp"
                alt="eventPass"
                fill
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
                  href={item.href}
                  disableRipple
                  sx={{
                    color: item.active ? '#00C8FF' : 'rgba(255,255,255,0.85)',
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
                  px: 3,
                  py: 1,
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: 0.8,
                  borderRadius: '40px',
                  background: '#00C8FF',
                  color: '#000',
                  boxShadow: '0 4px 18px rgba(0,200,255,0.3)',
                  textTransform: 'uppercase',
                  '&:hover': {
                    background: '#00b8ee',
                    boxShadow: '0 4px 22px rgba(0,200,255,0.45)',
                  },
                }}
              >
                Book a Demo
              </Button>
            </Box>

            {/* Mobile hamburger */}
            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: '75%', bgcolor: '#060B18', color: 'white' } }}
      >
        <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setMobileOpen(false)} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 0, px: 2 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              component="a"
              href={item.href}
              onClick={() => setMobileOpen(false)}
              sx={{ mb: 1, borderRadius: 2, color: item.active ? '#00C8FF' : 'white' }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: item.active ? 700 : 500, fontSize: '1.1rem' }}
              />
            </ListItem>
          ))}
          <Box sx={{ mt: 4, px: 1 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                py: 1.5,
                borderRadius: '40px',
                fontWeight: 700,
                background: '#00C8FF',
                color: '#000',
                '&:hover': { background: '#00b8ee' },
              }}
            >
              Book a Demo
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
}
