'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import StatsAndProductSection from '@/components/StatsAndProductSection';
import FeaturesSection from '@/components/FeaturesSection';
import OneStopShopSection from '@/components/OneStopShopSection';
import OperationalMuscleSection from '@/components/OperationalMuscleSection';
import EventsShowcaseSection from '@/components/EventsShowcaseSection';
import RSVPNStepSection from '@/components/RSVPNStepSection';
import AIFeaturesSection from '@/components/AIFeaturesSection';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: '#000000',
        minHeight: '100vh',
        color: 'text.primary',
        overflow: 'hidden',
      }}
    >
      {/* ── Global scattered blue glow spots ── */}

          {/* Top-left glow — near hero */}
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

          {/* Center-right glow — stats section area */}
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

          {/* Bottom-left glow — features section area */}
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

          {/* Bottom-right glow — AI section area */}
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

          {/* ── Page content ── */}
          <Box sx={{ position: 'relative'}}>
            <Navbar />
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
  );
}
