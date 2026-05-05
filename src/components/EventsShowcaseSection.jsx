'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import { MotionBox, fadeInUp, staggerContainer } from './Animations';

const events = [
  { id: 1, src: '/event-1.webp', alt: 'Riyada Development Forum' },
  { id: 2, src: '/event-2.webp', alt: 'OMNEX Feb 2026' },
  { id: 3, src: '/event-3.webp', alt: 'OQRPI Open Day' },
  { id: 4, src: '/event-4.webp', alt: 'FIA: MENA Council' },
];

export default function EventsShowcaseSection() {
  return (
    <Box component="section" sx={{ bgcolor: '#000', color: '#fff', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 200, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, position: 'relative', zIndex: 1 }}>
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
        >
          <MotionBox variants={fadeInUp}>
            <Typography
              sx={{
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 8,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                textAlign: 'left',
              }}
            >
              Trusted at Oman&apos;s{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #A033FF 50%, #00C8FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                biggest events.
              </Box>
            </Typography>
          </MotionBox>

          <Grid container spacing={4}>
            {events.map((event) => (
              <Grid item xs={12} md={6} key={event.id}>
                <MotionBox variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/9',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      bgcolor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        borderColor: 'rgba(0, 200, 255, 0.3)',
                      },
                    }}
                  >
                    <Image
                      src={event.src}
                      alt={event.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 900px) 100vw, 50vw"
                      priority={event.id <= 2}
                    />
                  </Paper>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
