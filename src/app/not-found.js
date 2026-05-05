'use client';
import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { MotionBox } from '@/components/Animations';

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glows */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(0, 200, 255, 0.08) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 404 text */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '6rem', md: '12rem' },
              fontWeight: 900,
              lineHeight: 1,
              background: 'linear-gradient(180deg, #00C8FF 0%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.05em',
              mb: 2,
              filter: 'drop-shadow(0 0 20px rgba(0, 200, 255, 0.3))',
            }}
          >
            404
          </Typography>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#fff',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2rem' },
                letterSpacing: '0.05em',
              }}
            >
              PAGE NOT FOUND
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.5)',
                mb: 6,
                maxWidth: '480px',
                mx: 'auto',
                lineHeight: 1.7,
                fontSize: '0.95rem',
              }}
            >
              The requested resource could not be located. The link may be broken, or the page has been moved to a new destination.
            </Typography>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                component={Link}
                href="/"
                variant="contained"
                sx={{
                  bgcolor: '#00C8FF',
                  color: '#000',
                  px: 6,
                  py: 1.8,
                  borderRadius: '50px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  boxShadow: '0 8px 25px rgba(0, 200, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#fff',
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                RETURN TO HOME
              </Button>
            </motion.div>
          </MotionBox>
        </MotionBox>

        {/* "scanning" line for the whole page */}
        <Box
          component={motion.div}
          animate={{
            top: ['-10%', '110%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.2), transparent)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      </Container>
    </Box>
  );
}
