'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import { AnimatedNumber, MotionBox, fadeInUp, staggerContainer, scanlineAnimation } from './Animations';

const cardSx = {
  bgcolor: 'rgba(8,12,24,0.9)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(0,180,255,0.25)',
  borderRadius: '16px',
  boxShadow:
    '0 0 0 1px rgba(0,200,255,0.2), 0 0 18px 4px rgba(0,180,255,0.18), 0 0 40px 8px rgba(0,150,255,0.1), 0 8px 32px rgba(0,0,0,0.7)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  overflow: 'hidden',
  position: 'relative',
};

const ScanLine = () => (
  <MotionBox
    variants={scanlineAnimation}
    animate="animate"
    sx={{
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '30px',
      background: 'linear-gradient(180deg, transparent, rgba(0, 200, 255, 0.2), transparent)',
      zIndex: 5,
      pointerEvents: 'none',
    }}
  />
);

const numberSx = {
  fontWeight: 800,
  lineHeight: 1,
  background: 'linear-gradient(135deg, #00C8FF 0%, #ffffff 55%, #c9b8ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const labelSx = {
  fontWeight: 600,
  color: 'rgba(255,255,255,0.7)',
  letterSpacing: '0.04em',
};

export default function StatsAndProductSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#000000',
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(0,160,255,0.13) 0%, transparent 65%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, px: { xs: 3, sm: 5, md: 6 } }}
      >
        {/* Wrapper */}
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: 420, sm: 500, md: 560, lg: 580 },
          }}
        >
          {/* Top card */}
          <MotionBox
            variants={fadeInUp}
            sx={{
              ...cardSx,
              position: 'absolute',
              top: { xs: '8%', md: '0%' },
              left: '50%',
              transform: 'translateX(-50%) !important',
              zIndex: 2,
              px: { xs: 3.5, md: 6 },
              py: { xs: 2, md: 2.5 },
              minWidth: { xs: 100, md: 260 },
            }}
          >
            <ScanLine />
            <Typography sx={{ ...numberSx, fontSize: { xs: '2rem', md: '3rem', lg: '3.4rem' } }}>
              <AnimatedNumber value={23299} suffix="+" />
            </Typography>
            <Typography sx={{ ...labelSx, fontSize: { xs: '0.78rem', md: '0.86rem' }, mt: 1.5 }}>
              Registrations Managed
            </Typography>
          </MotionBox>

          {/* Left card */}
          <MotionBox
            variants={fadeInUp}
            sx={{
              ...cardSx,
              position: 'absolute',
              top: { xs: '36%', sm: '34%', md: '22%' },
              left: { xs: '-4%', sm: '6%', md: '0%', lg: '-3%' },
              zIndex: 2,
              px: { xs: 3, md: 5 },
              py: { xs: 2, md: 3.5 },
              minWidth: { xs: 100, md: 210 },
            }}
          >
            <ScanLine />
            <Typography sx={{ ...numberSx, fontSize: { xs: '2rem', md: '2.8rem', lg: '3rem' } }}>
              <AnimatedNumber value={224} suffix="+" />
            </Typography>
            <Typography sx={{ ...labelSx, fontSize: { xs: '0.75rem', md: '0.82rem' }, mt: 1.5 }}>
              Successful Deployments
            </Typography>
          </MotionBox>

          {/* Right card */}
          <MotionBox
            variants={fadeInUp}
            sx={{
              ...cardSx,
              position: 'absolute',
              top: { xs: '36%', sm: '34%', md: '12%' },
              right: { xs: '-4%', sm: '6%', md: '0%', lg: '0%' },
              zIndex: 2,
              px: { xs: 3, md: 5 },
              py: { xs: 2, md: 3.5 },
              minWidth: { xs: 100, md: 190 },
            }}
          >            <ScanLine />            <Typography sx={{ ...numberSx, fontSize: { xs: '2rem', md: '2.6rem', lg: '3rem' } }}>
              <AnimatedNumber value={15} suffix="+" />
            </Typography>
            <Typography sx={{ ...labelSx, fontSize: { xs: '0.75rem', md: '0.85rem' }, mt: 1.5 }}>
              Event App Modules
            </Typography>
          </MotionBox>

          {/* Image */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            sx={{
              position: 'absolute',
              top: { xs: '22%', sm: '20%', md: '16%' },
              left: { xs: '4%', sm: '6%', md: '10%', lg: '12%' },
              right: { xs: '4%', sm: '6%', md: '10%', lg: '12%' },
              bottom: { xs: '2%', sm: '0%', md: 0 },
              zIndex: 10,
              filter:
                'drop-shadow(0 0 30px rgba(0,180,255,0.35)) drop-shadow(0 0 60px rgba(0,140,255,0.2))',
            }}
          >
            <Image
              src="/eventpass.webp"
              alt="EventPass Platform Mockup"
              fill
              sizes="(max-width: 900px) 100vw, 80vw"
              style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
            />
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}