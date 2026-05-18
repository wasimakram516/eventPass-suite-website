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
    name: 'Registration & Attendance',
    description: 'Master the attendee journey from the very first click to on-site badge collection and activity tracking.',
    color: '#00b4ff',
    modules: [
      {
        name: 'EventReg',
        icon: '📋',
        description: 'Precision-engineered registration workflows. From multilingual logic to complex approval funnels, capture attendee data with enterprise-grade reliability.',
        features: ['Custom Fields', 'Approval Flow', 'QR Passes', 'Bulk Import', 'EN / AR Support'],
        visual: <EventRegVisual color="#00b4ff" />
      },
      {
        name: 'Check-In',
        icon: '✓',
        description: 'Zero-friction entry management. Accelerate your event throughput with rapid QR scanning, on-site walk-in registration, and live presence synchronization.',
        features: ['QR Scanning', 'Walk-In Support', 'Badge Printing', 'Real-Time Sync'],
        visual: <CheckInVisual color="#00b4ff" />
      },
      {
        name: 'DigiPass',
        icon: '🪪',
        description: 'Gamify the attendee journey. Encourage movement across your event floor with a digital passport system that rewards exploration and station check-ins.',
        features: ['Multi-Station Tracking', 'Progress Indicators', 'Staff Verification', 'Reward Logic'],
        visual: <DigiPassVisual color="#00b4ff" />
      }
    ]
  },
  {
    name: 'Live Engagement',
    description: 'Transform passive viewers into active participants with real-time interaction tools designed for major stage displays.',
    color: '#7b61ff',
    modules: [
      {
        name: 'VoteCast',
        icon: '📊',
        description: 'Instant crowd consensus. Bridge the gap between the stage and the audience with dynamic live-polling and real-time visualization of sentiment.',
        features: ['Live Results', 'Slider & Option Polls', 'Stage Display App', 'Instant Analytics'],
        visual: <VoteCastVisual color="#7b61ff" />
      },
      {
        name: 'StageQ',
        icon: '💬',
        description: 'Elevated audience discourse. Capture and moderate panel questions with upvoting logic, ensuring the most impactful conversations always reach the stage.',
        features: ['Question Upvoting', 'Moderation Queue', 'Large-Screen Display', 'Validated Entries'],
        visual: <StageQVisual color="#7b61ff" />
      },
      {
        name: 'MosaicWall',
        icon: '🖼️',
        description: 'Collaborative visual storytelling. Transform attendee photos into a live-updating mosaic, creating a shared digital tapestry of your event highlights.',
        features: ['Photo Uploads', 'Live Grid Display', 'QR Capture Flow', 'Content Moderation'],
        visual: <MosaicWallVisual color="#7b61ff" />
      }
    ]
  },
  {
    name: 'Games & Gamification',
    description: 'Turn your event into an immersive experience with competitive games that keep your audience energized and engaged.',
    color: '#00dca0',
    modules: [
      {
        name: 'QuizNest',
        icon: '🧠',
        description: 'Branded competitive intelligence. Deploy high-speed, timed quizzes to test knowledge and reward top performers via real-time leaderboards.',
        features: ['Timed Questions', 'Live Leaderboard', 'Excel Question Import', 'Fully Branded UI'],
        visual: <QuizNestVisual color="#00dca0" />
      },
      {
        name: 'EventDuel',
        icon: '⚔️',
        description: 'Dynamic PvP engagement. Pit attendees against each other in high-stakes, real-time digital duels that ignite the main display and drive hype.',
        features: ['1v1 Real-Time Battle', 'Live Match Logic', 'PvP Scoring', 'Audience Hype View'],
        visual: <EventDuelVisual color="#00dca0" />
      },
      {
        name: 'TapMatch',
        icon: '🃏',
        description: 'Interactive brand recall. A classic memory-matching experience tailored with your brand assets to maintain engagement during event intervals.',
        features: ['Memory Matching', 'Custom Brand Assets', 'Speed Timer', 'Engagement Metrics'],
        visual: <TapMatchVisual color="#00dca0" />
      },
      {
        name: 'EventWheel',
        icon: '🎡',
        description: 'Branded fortune and flair. Drive excitement during prize draws with a fully customizable spin-to-win wheel that delivers a premium sense of occasion.',
        features: ['Prize Draw Logic', 'Custom Slices', 'Win/Loss Controls', 'Stage-Ready UI'],
        visual: <EventWheelVisual color="#00dca0" />
      }
    ]
  },
  {
    name: 'Post-Event Engagement',
    description: 'Extend the conversation and capture deep insights after the event ends with automated intelligence funnels.',
    color: '#ff7832',
    modules: [
      {
        name: 'SurveyGuru',
        icon: '📧',
        description: 'Closing the feedback loop. Extend the lifecycle of your event with automated intelligence gathering via native WhatsApp and Email funnels.',
        features: ['Automated Sending', 'Emoji-Based Rating', 'Deep Intelligence Export', 'Sentiment Analysis'],
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
      <Box sx={{ position: 'absolute', top: '5%', left: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'rgba(0,180,255,0.06)', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', top: '30%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(123,97,255,0.06)', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: '10%', left: '5%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(0,220,160,0.06)', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />
      
      <PageHero 
        label="11 Modules"
        title={
          <Box component="span" sx={{ display: 'block' }}>
            A unified system. <br/>
            A <Box component="span" sx={{ fontStyle: 'normal', background: 'linear-gradient(135deg, #00b4ff, #7b61ff, #00dca0, #ff7832)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'inline-block' }}>one‑stop‑shop</Box> for engagement.
          </Box>
        }
        subtitle="Every module connects to the same platform, same data, and same branding — providing a comprehensive 360° view of your attendee lifecycle."
      />

      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, py: { xs: 8, md: 15 }, position: 'relative', zIndex: 1 }}>
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 12 } }}
        >
          {moduleCategories.map((category) => (
            <Box key={category.name}>
              <Box sx={{ mb: { xs: 4, md: 6 } }}>
                <Typography variant="h3" sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, mb: 1.5, fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }, color: category.color }}>
                  {category.name}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 650, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.6 }}>
                  {category.description}
                </Typography>
              </Box>
              
              <Grid container spacing={4}>
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
