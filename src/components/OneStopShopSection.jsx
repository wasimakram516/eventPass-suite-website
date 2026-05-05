'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PollIcon from '@mui/icons-material/Poll';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import HubIcon from '@mui/icons-material/Hub';
import QuizIcon from '@mui/icons-material/Quiz';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { MotionBox, fadeInUp, staggerContainer } from './Animations';

const categories = [
  {
    title: 'REGISTRATION & ATTENDANCE',
    items: [
      {
        title: 'Registration',
        desc: 'Custom forms, ticketing, payments',
        icon: <HowToRegIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
      {
        title: 'Smart Check-in',
        desc: 'QR, kiosk, badge print, walk-ins',
        icon: <QrCodeScannerIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
      {
        title: 'Badge Printing',
        desc: 'On-demand, branded, multi-format',
        icon: <LocalPrintshopIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
      {
        title: 'VIP & Roles',
        desc: 'Tiered access, custom journeys',
        icon: <PersonSearchIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
    ],
  },
  {
    title: 'LIVE ENGAGEMENT',
    items: [
      {
        title: 'Polls & Q&A',
        desc: 'Live audience response, moderated',
        icon: <PollIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
      {
        title: 'Photo Wall',
        desc: 'Live moderated social feed',
        icon: <LinkedCameraIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
      {
        title: 'Networking',
        desc: 'Match-making, meeting scheduler',
        icon: <HubIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
    ],
  },
  {
    title: 'GAMES & GAMIFICATION',
    items: [
      {
        title: 'Quizzes & Games',
        desc: 'Trivia, spin-the-wheel, AR booths',
        icon: <QuizIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
      {
        title: 'Leaderboard',
        desc: 'Live rankings, points, rewards',
        icon: <LeaderboardIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
    ],
  },
  {
    title: 'POST EVENT INSIGHTS',
    items: [
      {
        title: 'Analytics & ROI',
        desc: 'AI-powered behaviour insights',
        icon: <AssessmentIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
      {
        title: 'Surveys & Feedback',
        desc: 'NPS, multi-stage, automated',
        icon: <FeedbackIcon sx={{ color: '#00C8FF', fontSize: 20 }} />,
      },
    ],
  },
];

const ModuleCard = ({ title, desc, icon }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2,
      bgcolor: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 2,
      transition: 'all 0.3s ease',
      height: '100%',
      backdropFilter: 'blur(10px)',
      '&:hover': {
        bgcolor: 'rgba(255, 255, 255, 0.06)',
        borderColor: 'rgba(0, 200, 255, 0.3)',
        transform: 'translateY(-2px)',
      },
    }}
  >
    <Box
      sx={{
        p: 1,
        borderRadius: '8px',
        bgcolor: 'rgba(0, 200, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography sx={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, mb: 0.2 }}>
        {title}
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', lineHeight: 1.4 }}>
        {desc}
      </Typography>
    </Box>
  </Paper>
);

export default function OneStopShopSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#000',
        color: '#fff',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(0, 200, 255, 0.08) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, position: 'relative', zIndex: 1 }}>
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
        >
          <MotionBox variants={fadeInUp} sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                maxWidth: 600,
              }}
            >
              A one-stop-shop for{' '}
              <Box component="span" sx={{ color: '#00C8FF' }}>
                engagement.
              </Box>
            </Typography>
          </MotionBox>

          <Grid container spacing={{ xs: 6, lg: 10 }} alignItems="center">
            {/* Left Side: Cube Image */}
            <Grid item xs={12} lg={6.5}>
              <MotionBox
                variants={fadeInUp}
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1/1',
                  maxHeight: 600,
                }}
              >
                <Image
                  src="/cube.webp"
                  alt="EventPass Engagement Cube"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </MotionBox>
            </Grid>

            {/* Right Side: Modules */}
            <Grid item xs={12} lg={5.5}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {categories.map((cat, idx) => (
                  <MotionBox variants={fadeInUp} key={idx}>
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        color: '#00C8FF',
                        mb: 2.5,
                        textTransform: 'uppercase',
                      }}
                    >
                      {cat.title}
                    </Typography>
                    <Grid container spacing={2}>
                      {cat.items.map((item, iIdx) => (
                        <Grid item xs={12} sm={6} key={iIdx}>
                          <MotionBox
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            sx={{ height: '100%' }}
                          >
                            <ModuleCard {...item} />
                          </MotionBox>
                        </Grid>
                      ))}
                    </Grid>
                  </MotionBox>
                ))}
              </Box>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
