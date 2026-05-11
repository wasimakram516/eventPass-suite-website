'use client';
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ModuleCard from '@/components/ModuleCard';
import { MotionBox, fadeInUp, staggerContainer } from '@/components/Animations';

// Visual Imports
import EventRegVisual from '@/components/modules/EventRegVisual';
import CheckInVisual from '@/components/modules/CheckInVisual';
import DigiPassVisual from '@/components/modules/DigiPassVisual';
import VoteCastVisual from '@/components/modules/VoteCastVisual';
import StageQVisual from '@/components/modules/StageQVisual';
import MosaicWallVisual from '@/components/modules/MosaicWallVisual';
import QuizNestVisual from '@/components/modules/QuizNestVisual';
import EventDuelVisual from '@/components/modules/EventDuelVisual';
import TapMatchVisual from '@/components/modules/TapMatchVisual';
import EventWheelVisual from '@/components/modules/EventWheelVisual';
import SurveyGuruVisual from '@/components/modules/SurveyGuruVisual';

const moduleCategories = [
  {
    name: 'Registration \u0026 Attendance',
    description: 'End-to-end attendee management — from online sign-up to on-site verification and digital passports.',
    color: '#00b4ff',
    modules: [
      {
        name: 'EventReg',
        icon: '📋',
        description: 'Configurable multilingual registration forms with approval workflows, QR-coded passes, and automated email \u0026 WhatsApp communications.',
        features: ['Custom Fields', 'Approval Flow', 'QR Passes', 'Bulk Import', 'EN / AR'],
        visual: <EventRegVisual color="#00b4ff" />
      },
      {
        name: 'Check-In',
        icon: '✓',
        description: 'Event attendance confirmation with QR verification, staff scanning, walk-in support, and real-time presence tracking.',
        features: ['QR Scan', 'Walk-Ins', 'Badge Print', 'Presence Tracking'],
        visual: <CheckInVisual color="#00b4ff" />
      },
      {
        name: 'DigiPass',
        icon: '🪪',
        description: 'Digital passport for tracking activity completion across event stations. Attendees register, sign in, and scan at each touchpoint.',
        features: ['Multi-Station', 'Progress Track', 'Staff Verification'],
        visual: <DigiPassVisual color="#00b4ff" />
      }
    ]
  },
  {
    name: 'Live Engagement',
    description: 'Real-time audience interaction tools that turn passive attendees into active participants.',
    color: '#7b61ff',
    modules: [
      {
        name: 'VoteCast',
        icon: '📊',
        description: 'Create option-based and slider-based audience polls with live result screens designed for on-stage projection.',
        features: ['Live Results', 'Slider Polls', 'Display Screen'],
        visual: <VoteCastVisual color="#7b61ff" />
      },
      {
        name: 'StageQ',
        icon: '💬',
        description: 'Audience question capture for panel talks with voting-based prioritisation, moderated display, and validated submissions only.',
        features: ['Upvoting', 'Moderated', 'Stage Display'],
        visual: <StageQVisual color="#7b61ff" />
      },
      {
        name: 'MosaicWall',
        icon: '🖼️',
        description: 'Real-time visual wall where attendees upload photos and text that appear live on big-screen displays throughout the venue.',
        features: ['Photo Upload', 'Live Display', 'QR Capture'],
        visual: <MosaicWallVisual color="#7b61ff" />
      }
    ]
  },
  {
    name: 'Games \u0026 Gamification',
    description: 'Turn your event into an experience — quizzes, duels, memory games, and prize giveaways.',
    color: '#00dca0',
    modules: [
      {
        name: 'QuizNest',
        icon: '🧠',
        description: 'Single-player branded quiz games with timed questions, leaderboards, and bulk question bank uploads.',
        features: ['Timed', 'Leaderboard', 'Excel Import', 'Branded'],
        visual: <QuizNestVisual color="#00dca0" />
      },
      {
        name: 'EventDuel',
        icon: '⚔️',
        description: 'Fast-paced PvP (Player vs Player) challenge where attendees compete in real-time on the main display.',
        features: ['1v1 Battle', 'Live Match', 'PvP Score'],
        visual: <EventDuelVisual color="#00dca0" />
      },
      {
        name: 'TapMatch',
        icon: '🃏',
        description: 'Classic memory matching game customized with your brand assets to engage attendees during event breaks.',
        features: ['Memory Game', 'Brand Assets', 'Timer'],
        visual: <TapMatchVisual color="#00dca0" />
      },
      {
        name: 'EventWheel',
        icon: '🎡',
        description: 'Digital spin-to-win wheel for prize giveaways and giveaways, fully brandable and display-ready.',
        features: ['Prize Draw', 'Custom Slices', 'Win Logic'],
        visual: <EventWheelVisual color="#00dca0" />
      }
    ]
  },
  {
    name: 'Post-Event Engagement',
    description: 'Continue engaging your attendees post-event with automated surveys and feedback collection.',
    color: '#ff7832',
    modules: [
      {
        name: 'SurveyGuru',
        icon: '📧',
        description: 'Automated post-event surveys via WhatsApp and Email to capture attendee sentiment and event feedback.',
        features: ['Auto-Send', 'Emoji Rating', 'Report Export'],
        visual: <SurveyGuruVisual color="#ff7832" />
      }
    ]
  }
];

export default function ModulesPage() {
  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <Navbar />

      {/* Ambient Background Glows */}
      <Box sx={{ position: 'absolute', top: '5%', left: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'rgba(0,180,255,0.04)', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', top: '30%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(123,97,255,0.04)', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: '10%', left: '5%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(0,220,160,0.04)', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />
      
      <PageHero 
        label="11 Modules"
        title={
          <Box component="span" sx={{ display: 'block' }}>
            A unified system. <br/>
            A <Box component="span" sx={{ fontStyle: 'normal', background: 'linear-gradient(135deg, #00b4ff, #7b61ff, #00dca0, #ff7832)', WebkitBackgroundClip: 'text', WebkitBackgroundFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', display: 'inline-block' }}>one‑stop‑shop</Box> for engagement.
          </Box>
        }
        subtitle="Every module connects to the same platform, same data, same branding — giving you a complete picture from first registration to final survey."
      />

      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, py: { xs: 6, md: 12 }, position: 'relative', zIndex: 1 }}>
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 6 } }}
        >
          {moduleCategories.map((category) => (
            <Box key={category.name} sx={{ py: { md: 2 } }}>
              <Box sx={{ mb: { xs: 3, md: 4 } }}>
                <Typography variant="h3" sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, mb: 1, fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' }, color: category.color }}>
                  {category.name}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 600, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  {category.description}
                </Typography>
              </Box>
              
              <Grid container spacing={{ xs: 3, md: 4 }}>
                {category.modules.map((module) => (
                  <Grid item xs={12} sm={6} md={category.modules.length === 4 ? 3 : 4} key={module.name}>
                    <ModuleCard 
                      {...module} 
                      color={category.color} 
                      category={category.name} 
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </MotionBox>
      </Container>

      <Footer />
    </Box>
  );
}
