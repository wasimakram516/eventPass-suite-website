'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InsightsIcon from '@mui/icons-material/Insights';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { MotionBox, fadeInUp, staggerContainer, cardHover, floatAnimation } from './Animations';

const features = [
  {
    title: 'Boost Engagement',
    description:
      'Activate your audience with quizzes, duels, photo walls, live polls, and spin-to-win games — all from their own phones.',
    icon: <RocketLaunchIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: 'Capture Data',
    description:
      'Every interaction feeds your analytics. Know who registered, who attended, what they played and how they rated your event.',
    icon: <InsightsIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: 'Drive ROI',
    description:
      "Real-time dashboards and post-event surveys turn crowd behaviour into actionable insights that prove your event's impact.",
    icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
  },
];

export default function FeaturesSection() {
  return (
    <Box
      component="section"
      id="features"
      sx={{
        bgcolor: '#000000',
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
        >
          {/* Header */}
          <MotionBox variants={fadeInUp} sx={{ mb: { xs: 8, md: 10 } }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                mb: 2.5,
              }}
            >
              Why EventPass
            </Typography>

            <Box component="h2" sx={{ mb: 3, lineHeight: 1.12 }}>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem', lg: '3.6rem' },
                  fontWeight: 900,
                  background: 'linear-gradient(180deg, #00C8FF 0%, #e8f4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.12,
                }}
              >
                Stop juggling tools.
              </Typography>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem', lg: '3.6rem' },
                  fontWeight: 900,
                  background: 'linear-gradient(180deg, #ffffff 0%, #c9b8ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.12,
                }}
              >
                Start running events.
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: '0.88rem', md: '0.95rem' },
                color: 'rgba(255,255,255,0.55)',
                maxWidth: 580,
                lineHeight: 1.75,
              }}
            >
              Most event teams stitch together five or six disconnected platforms. EventPass
              replaces them all with a single, real-time system.
            </Typography>
          </MotionBox>

          {/* Feature columns */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: { xs: 4, md: 6 },
            }}
          >
          {features.map((feature) => (
            <MotionBox 
              key={feature.title} 
              variants={fadeInUp}
              whileHover="hover"
              initial="initial"
              animate="initial"
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2.5,
                p: { xs: 2.5, md: 4 }, 
                borderRadius: '24px',
                transition: 'background 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                border: '1px solid transparent',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(0, 200, 255, 0.1)',
                }
              }}
            >
              {/* Icon box */}
              <MotionBox
                variants={floatAnimation}
                animate="animate"
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '14px',
                  bgcolor: 'rgba(0,200,255,0.08)',
                  border: '1px solid rgba(0,200,255,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00C8FF',
                  flexShrink: 0,
                  mb: 1
                }}
              >
                {feature.icon}
              </MotionBox>

              <Typography
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  fontWeight: 700,
                  color: '#FFFFFF',
                }}
              >
                {feature.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </Typography>
            </MotionBox>
          ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
