'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import env from '@/config/env';
import { AnimatedNumber, MotionBox, fadeInUp, staggerContainer } from './Animations';

const DESIGN_W = 700;
const DESIGN_H = 580;

export default function HeroSection() {
  const rightOuterRef = useRef(null);
  const [scale, setScale] = useState(0.5);

  const measure = useCallback(() => {
    if (rightOuterRef.current) {
      const w = rightOuterRef.current.offsetWidth;
      const isMobile = window.innerWidth < 900;
      const baseScale = w / DESIGN_W;
      const calculatedScale = Math.min(1.35, isMobile ? baseScale * 0.95 : baseScale * 1.1);
      setScale(calculatedScale);
    }
  }, []);

  useEffect(() => {
    measure();
    const timer1 = setTimeout(measure, 100);
    const timer2 = setTimeout(measure, 500);

    const ro = new ResizeObserver(measure);
    if (rightOuterRef.current) ro.observe(rightOuterRef.current);
    
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
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
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', }}>
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
            pointerEvents: 'none',
            background:
              'linear-gradient(180deg, #000000 0%, transparent 22%, transparent 68%, #000000 100%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 55% 55% at 15% 55%, rgba(0,120,255,0.16) 0%, transparent 70%)',
          }}
        />
      </Box>

      <Container
        maxWidth="xl"
        sx={{ 
          position: 'relative', 
          zIndex: 5, 
          px: { xs: 3, sm: 5, md: 8, lg: 10 },
        }}
      >
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: { xs: 'flex-start', lg: 'center' },
            gap: { xs: 0, lg: 4 },
          }}
        >
          {/* ── Left / Top: text ── */}
          <MotionBox
            variants={fadeInUp}
            sx={{
              flex: '0 0 auto',
              width: { xs: '100%', lg: '52%' },
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, md: 2.5 },
              zIndex: 60,
              pb: { xs: '12px', lg: 0 },
              mt: { xs: '8vh', md: '6vh', lg: 0 },
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

            <Box sx={{ mt: { xs: 0.5, md: 1 }, pointerEvents: 'auto' }}>
              <Button
                component="a"
                href={env.eventpassUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                  display: 'inline-flex',
                  textDecoration: 'none',
                  position: 'relative',
                  zIndex: 99999,
                  pointerEvents: 'auto',
                  '&:hover': {
                    background: '#00b8ee',
                    boxShadow: '0 8px 28px rgba(0,200,255,0.5)',
                  },
                }}
              >
                Explore 11 Modules
              </Button>
            </Box>
          </MotionBox>

          {/* ── Right / Bottom: person + trusted-by ── */}
          <MotionBox
            ref={rightOuterRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            sx={{
              flex: { xs: '0 0 auto', lg: 1 },
              position: 'relative',
              width: '100%',
              height: `${DESIGN_H * scale}px`,
              mt: { xs: '0px', lg: '-20px' },
              mb: { xs: '0px', lg: '0px' },
              ml: { lg: '2%' },
              mr: { lg: '-8%' },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: `${DESIGN_W}px`,
                height: `${DESIGN_H}px`,
                transformOrigin: 'bottom center',
                transform: `translateX(-50%) scale(${scale})`,
              }}
            >
              {/* Trusted By card */}
              <MotionBox
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                sx={{
                  position: 'absolute',
                  top: '6%',
                  left: '12%',
                  zIndex: 2,
                  bgcolor: 'rgba(10,16,34,0.95)', 
                  borderRadius: '16px',
                  p: '24px 32px',
                  minWidth: 260,
                  boxShadow:
                    '0 0 0 1px rgba(255,255,255,0.18), 0 0 18px 4px rgba(255,255,255,0.12), 0 0 40px 8px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.6)',
                  backdropFilter: 'none',
                  WebkitBackdropFilter: 'none',
                }}
              >
                <Typography
                  sx={{
                  fontSize: '0.9rem',
                    fontWeight: 700,
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
                  <AnimatedNumber value={192} suffix="+" />
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.6,
                    mt: 1,
                    maxWidth: 220,
                  }}
                >
                  Proudly trusted by Oman's most exclusive brands and leading companies,
                  delivering excellence, reliability, and innovative solutions that drive
                  success across every industry.
                </Typography>
              </MotionBox>

              {/* Person image container */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: "30px",
                  bottom: '-2px',
                  zIndex: 5,
                  backdropFilter: 'none',
                  WebkitBackdropFilter: 'none',
                }}
              >
                <Image
                  src="/person.webp"
                  alt="Expert with tablet"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'bottom right',
                    maskImage: 'linear-gradient(to top, transparent 0%, black 25%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 25%)',
                  }}
                  priority
                />
              </Box>
            </Box>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}