'use client';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, label }) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '100vh', md: 'auto' },
        pt: { xs: 0, md: 18 },
        pb: { xs: 0, md: 10 },
        overflow: 'hidden',
        bgcolor: '#000',
        display: 'flex',
        alignItems: { xs: 'center', md: 'flex-start' },
      }}
    >
      {/* Background Glows */}
      <Box sx={{
        position: 'absolute',
        top: '-10%',
        left: '-5%',
        width: { xs: '250px', md: '600px' },
        height: { xs: '250px', md: '600px' },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,255,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '-10%',
        right: '-5%',
        width: { xs: '200px', md: '500px' },
        height: { xs: '200px', md: '500px' },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,97,255,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 800 }}>
          {label && (
            <Typography
              component={motion.span}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              sx={{
                display: 'inline-block',
                color: '#00C8FF',
                fontSize: { xs: '0.65rem', md: '0.75rem' },
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              {label}
            </Typography>
          )}
          <Typography
            variant="h1"
            component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            sx={{
              fontFamily: "'Syne', sans-serif",
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '4rem' },
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.2,
              mb: 3,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </Typography>
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              fontSize: { xs: '0.85rem', md: '1.1rem' },
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
