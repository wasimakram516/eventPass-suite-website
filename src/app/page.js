'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import StatsAndProductSection from '@/components/StatsAndProductSection';
import FeaturesSection from '@/components/FeaturesSection';
import OneStopShopSection from '@/components/OneStopShopSection';
import OperationalMuscleSection from '@/components/OperationalMuscleSection';
import EventsShowcaseSection from '@/components/EventsShowcaseSection';
import RSVPNStepSection from '@/components/RSVPNStepSection';
import Footer from '@/components/Footer';
import env from '@/config/env';

function HomeContent() {
  const [showFullSite, setShowFullSite] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const view = searchParams.get('view');

  useEffect(() => {
    if (view === 'site') {
      setShowFullSite(true);
    } else {
      setShowFullSite(false);
    }
  }, [view]);

  useEffect(() => {
  }, []);

  return (
    <>
      {showFullSite ? (
        <Box
          sx={{ bgcolor: '#000000', minHeight: '100vh', color: '#fff', overflow: 'hidden', position: 'relative' }}
        >
          {/* Global glows for full site */}
          <Box sx={{
            position: 'fixed',
            top: '5%',
            left: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,150,255,0.22) 0%, transparent 75%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
            zIndex: -1,
          }} />
          <Box sx={{
            position: 'fixed',
            top: '35%',
            right: '-8%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,180,255,0.18) 0%, transparent 75%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
            zIndex: -1,
          }} />
          <Box sx={{
            position: 'fixed',
            top: '35%',
            right: '-8%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,180,255,0.18) 0%, transparent 75%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
            zIndex: -1,
          }} />
          <Box sx={{
            position: 'fixed',
            bottom: '20%',
            left: '-5%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,120,255,0.20) 0%, transparent 75%)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
            zIndex: -1,
          }} />
          <Box sx={{
            position: 'fixed',
            bottom: '5%',
            right: '5%',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,160,255,0.18) 0%, transparent 75%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
            zIndex: -1,
          }} />

          <Box sx={{ position: 'relative' }}>
            <Navbar 
              onLogoClick={() => {
                router.push('/');
              }} 
            />
            <Box component="main">
              <HeroSection />
              <StatsAndProductSection />
              <PartnersSection />
              <FeaturesSection />
              <OneStopShopSection />
              <OperationalMuscleSection />
              <EventsShowcaseSection />
              <RSVPNStepSection />
            </Box>
            <Footer />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            position: 'relative',
            minHeight: '100vh',
            overflow: 'hidden',
            bgcolor: '#000',
            color: '#fff',
          }}
        >
          <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image
              src="/landing-bg-Image.webp"
              alt="EventPass background"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </Box>

          <Container
            maxWidth="xl"
            sx={{
              position: 'relative',
              zIndex: 1,
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              px: { xs: 3, sm: 5, md: 8, lg: 10 },
              py: { xs: 4, md: 6 },
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2, md: 3 } }}
              >
                <Box sx={{ width: { xs: 180, sm: 330, md: 440 }, height: { xs: 58, sm: 102, md: 138 }, position: 'relative' }}>
                  <Image
                    src="/logo.webp"
                    alt="eventPass"
                    fill
                    sizes="440px"
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </Box>
              </Box>

              <Typography
                component={motion.h1}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
                sx={{
                  fontSize: { xs: '1.3rem', sm: '2.25rem', md: '3rem' },
                  lineHeight: 1.02,
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  mb: 1.2,
                }}
              >
                The All-In-One Event Engagement Platform
              </Typography>

              <Typography
                component={motion.p}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
                sx={{
                  maxWidth: 580,
                  mx: 'auto',
                  color: 'rgba(255,255,255,0.62)',
                  fontSize: { xs: '0.7rem', sm: '0.82rem', md: '0.88rem' },
                  lineHeight: 1.45,
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                The premier solution for digital event passes and attendee engagement by WhiteWall.
              </Typography>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26, ease: 'easeOut' }}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: { xs: 1.25, md: 2 },
                }}
              >
                <Button
                  component="a"
                  href={env.eventpassUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                  minWidth: { xs: 150, sm: 230, md: 280 },
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.9, md: 1.15 },
                  borderRadius: '100px',
                  background: 'linear-gradient(180deg, rgba(27,77,126,0.98) 0%, rgba(18,49,89,0.98) 100%)',
                  color: '#fff',
                  border: '1px solid rgba(63,169,255,0.95)',
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.35), 0 10px 26px rgba(0, 120, 255, 0.22)',
                  fontSize: { xs: '0.68rem', md: '0.76rem' },
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  justifyContent: 'center',
                  '& .MuiButton-startIcon': { marginRight: '10px', marginLeft: 0 },
                  '&:hover': {
                    background: 'linear-gradient(180deg, rgba(35,91,145,1) 0%, rgba(24,63,111,1) 100%)',
                    borderColor: 'rgba(84,195,255,1)',
                  },
                }}
                  startIcon={<AccessTimeRoundedIcon sx={{ fontSize: 18 }} />}
                >
                  Go To The Dashboard
                </Button>

                <Button
                  component="a"
                  href={`${env.eventpassUrl.replace(/\/$/, '')}/my-badge`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                  minWidth: { xs: 150, sm: 230, md: 280 },
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.9, md: 1.15 },
                  borderRadius: '100px',
                  background: 'linear-gradient(180deg, rgba(36,133,90,0.98) 0%, rgba(28,104,72,0.98) 100%)',
                  color: '#fff',
                  border: '1px solid rgba(86,224,160,0.85)',
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.35), 0 10px 26px rgba(23, 190, 114, 0.22)',
                  fontSize: { xs: '0.68rem', md: '0.76rem' },
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  justifyContent: 'center',
                  '& .MuiButton-startIcon': { marginRight: '10px', marginLeft: 0 },
                  '&:hover': {
                    background: 'linear-gradient(180deg, rgba(42,155,105,1) 0%, rgba(33,124,85,1) 100%)',
                    borderColor: 'rgba(112,255,182,1)',
                  },
                }}
                  startIcon={<PersonRoundedIcon sx={{ fontSize: 18 }} />}
                >
                  View Your Badge
                </Button>

                <Button
                  onClick={() => {
                    router.push('/?view=site');
                  }}
                  variant="contained"
                  sx={{
                  minWidth: { xs: 150, sm: 230, md: 280 },
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.9, md: 1.15 },
                  borderRadius: '100px',
                  background: 'linear-gradient(180deg, rgba(33,33,38,0.98) 0%, rgba(27,27,31,0.98) 100%)',
                  color: '#fff',
                  border: '1px solid rgba(232,232,232,0.88)',
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.35), 0 10px 26px rgba(0, 0, 0, 0.38)',
                  fontSize: { xs: '0.68rem', md: '0.76rem' },
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  justifyContent: 'center',
                  '& .MuiButton-startIcon': { marginRight: '10px', marginLeft: 0 },
                  '&:hover': {
                    background: 'linear-gradient(180deg, rgba(42,42,48,1) 0%, rgba(34,34,39,1) 100%)',
                    borderColor: 'rgba(255,255,255,1)',
                  },
                }}
                  startIcon={<InfoOutlinedIcon sx={{ fontSize: 18 }} />}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
