'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';

const DESIGN_W = 700;
const DESIGN_H = 580;

export default function HeroSection() {
  const rightOuterRef = useRef(null);
  const [scale, setScale] = useState(1);

  const measure = useCallback(() => {
    if (rightOuterRef.current) {
      const w = rightOuterRef.current.offsetWidth;
      const isMobile = window.innerWidth < 900;
      const baseScale = w / DESIGN_W;
      setScale(Math.min(1, isMobile ? baseScale * 0.75 : baseScale));
    }
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (rightOuterRef.current) ro.observe(rightOuterRef.current);
    return () => ro.disconnect();
  }, [measure]);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#000000',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'flex-start', lg: 'center' },
        pt: { xs: '80px', md: '100px' },
        pb: { xs: 0, md: '80px' },
      }}
    >
      {/* ── Background ── */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/background-image.webp"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.4 }}
          priority
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, #000000 0%, transparent 22%, transparent 68%, #000000 100%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 55% 55% at 15% 55%, rgba(0,120,255,0.16) 0%, transparent 70%)',
          }}
        />
      </Box>

      <Container
        maxWidth="xl"
        sx={{ position: 'relative', zIndex: 5, px: { xs: 3, sm: 5, md: 8, lg: 10 } }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: { xs: 'flex-start', lg: 'center' },
            gap: { xs: 0, lg: 4 },
          }}
        >
          {/* ── Left / Top: text ── */}
          <Box
            sx={{
              flex: '0 0 auto',
              width: { xs: '100%', lg: '52%' },
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, md: 2.5 },
              zIndex: 6,
              pb: { xs: '28px', lg: 0 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '0.6rem', md: '0.72rem' },
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              By WhiteWall Digital Solutions
            </Typography>

            <Box>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '1.9rem', sm: '2.6rem', md: '3.2rem', lg: '3.7rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  background: 'linear-gradient(180deg, #00C8FF 0%, #e8f4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mb: 0,
                }}
              >
                The ALL-IN-ONE Event
              </Typography>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '1.9rem', sm: '2.6rem', md: '3.2rem', lg: '3.7rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  background: 'linear-gradient(180deg, #ffffff 0%, #c9b8ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Engagement Suite
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: '0.82rem', md: '0.93rem' },
                color: 'rgba(255,255,255,0.58)',
                lineHeight: 1.75,
                maxWidth: { xs: '100%', md: 500 },
              }}
            >
              From registration and check-in to live games, polls, photo walls, and post-event
              surveys —{' '}
              <Box component="span" sx={{ color: '#00C8FF', fontWeight: 600 }}>
                EventPass
              </Box>{' '}
              powers every moment of your event in one unified, brandable platform.
            </Typography>

            <Box sx={{ mt: { xs: 0.5, md: 1 } }}>
              <Button
                variant="contained"
                sx={{
                  px: { xs: 3.5, md: 5 },
                  py: { xs: 1.2, md: 1.6 },
                  fontSize: { xs: '0.72rem', md: '0.82rem' },
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderRadius: '100px',
                  background: '#00C8FF',
                  boxShadow: '0 6px 24px rgba(0,200,255,0.35)',
                  color: '#000',
                  '&:hover': {
                    background: '#00b8ee',
                    boxShadow: '0 8px 28px rgba(0,200,255,0.5)',
                  },
                }}
              >
                Explore 11 Modules
              </Button>
            </Box>
          </Box>

          {/* ── Right / Bottom: person + trusted-by ── */}
          <Box
            ref={rightOuterRef}
            sx={{
              flex: 1,
              position: 'relative',
              width: '100%',
              height: `${DESIGN_H * scale}px`,
              mt: { xs: '-30px', md: '-50px', lg: 0 },
              mb: { xs: '20px', lg: 0 },
              ml: { lg: '4%' },
              mr: { lg: '-6%' },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                width: `${DESIGN_W}px`,
                height: `${DESIGN_H}px`,
                transformOrigin: 'top center',
                transform: `translateX(-50%) scale(${scale})`,
              }}
            >
              {/* Trusted By card */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '6%',
                  left: '25%',
                  zIndex: 3,
                  bgcolor: 'rgba(10,16,34,0.9)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  p: '20px 28px',
                  boxShadow:
                    '0 0 0 1px rgba(255,255,255,0.18), 0 0 18px 4px rgba(255,255,255,0.12), 0 0 40px 8px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.6)',
                  minWidth: 180,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.65)',
                    mb: 0.4,
                  }}
                >
                  Trusted By
                </Typography>
                <Typography
                  sx={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    background:
                      'linear-gradient(135deg, #00C8FF 0%, #ffffff 55%, #c9b8ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  192+
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.5,
                    mt: 0.5,
                    maxWidth: 150,
                  }}
                >
                  Proudly trusted by Oman's most exclusive brands and leading companies,
                  delivering excellence, reliability, and innovative solutions that drive
                  success across every industry.
                </Typography>
              </Box>

              {/* Person image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: '-5%',
                  zIndex: 5,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '35%',
                    background: 'linear-gradient(to top, #000000 0%, transparent 100%)',
                    zIndex: 6,
                    pointerEvents: 'none',
                  },
                }}
              >
                <Image
                  src="/person.webp"
                  alt="Expert with tablet"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
                  priority
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}