'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';


// ─── EVENT DATA (with real Wix asset URLs) ───────────────────────────────────
const EVENTS = [
  {
    id: 'fia',
    slug: '/case-studies/fia',
    category: 'Turnkey Event Production',
    title: 'FIA MENA Council Regional Workshop',
    location: 'JW Marriott Muscat',
    year: '2024',
    description:
      "Served as the official event technology and operations partner for the FIA MENA Council Regional Workshop in Muscat, attended by global mobility executives and VIPs including H.E. Mohammed Ben Sulayem, President of the FIA. Deployed rapid badge printing, full AV support, stage lighting, teleprompters, LED display systems, and flawless agenda execution.",
    metrics: [
      { value: '228', label: 'Esteemed Guests' },
      { value: 'JW Marriott', label: 'Venue' },
      { value: 'Seconds', label: 'Badge Printing' },
    ],
    tags: ['VIP Registration', 'FIA President Visit', 'JW Marriott Muscat', 'AV Production', 'Stage Management'],
    accent: '#00C8FF',
    heroImage:
       'https://static.wixstatic.com/media/12af71_13d0ca40be3047c1bde87581088be64d~mv2.webp/v1/fill/w_802,h_1700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OQEP%201.webp',
    galleryImages: [
      'https://static.wixstatic.com/media/12af71_80bc37b2baab475484f92bb14f8b3671~mv2.webp/v1/fill/w_802,h_1700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Takaful%206.webp',
      'https://static.wixstatic.com/media/12af71_43baabe31440433b95fce36e31125308~mv2.webp/v1/fill/w_340,h_720,al_c,q_80,enc_avif,quality_auto/MTCIT%202.webp',
      'https://static.wixstatic.com/media/12af71_280fae1d98e34993929e3a477279911d~mv2.webp/v1/fill/w_802,h_1700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MEMCO%203.webp',
      'https://static.wixstatic.com/media/12af71_98dab4e9e80f470dbdc7d4d7a761b611~mv2.webp/v1/fill/w_802,h_1700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OER%202.webp',
      'https://static.wixstatic.com/media/12af71_c0e077811c194325976e9ed4f8dea47d~mv2.webp/v1/fill/w_802,h_1700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OABC%201.webp',
    ],
  },
  {
    id: 'takaful',
    slug: '/case-studies/takaful-insurance',
    category: 'Interactive Event Tech',
    title: 'Takaful Oman 10th Anniversary',
    location: 'InterContinental Muscat',
    year: '2024',
    description:
      "To mark Takaful's landmark 10th anniversary, we delivered a memorable digital experience centered around a custom-built 8x2m interactive timeline wall. Guests explored the company's decade of milestones using a kiosk controller, highlighted by the engagement of H.E. Mohammed Al Zubair, alongside AdVantage displays highlighting Takaful Express.",
    metrics: [
      { value: '8x2m', label: 'Timeline Wall' },
      { value: '10th', label: 'Anniversary' },
      { value: 'AdVantage', label: 'Screens Deployed' },
    ],
    tags: ['Timeline Wall', 'Kiosk Controller', '10th Anniversary', 'AdVantage Display', 'Takaful Express'],
    accent: '#7B61FF',
    heroImage:
      'https://static.wixstatic.com/media/12af71_3e11f8a4d0444e449a456f56fd9bd220~mv2.webp/v1/fill/w_601,h_908,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Takaful%205.webp',
    galleryImages: [
      'https://static.wixstatic.com/media/12af71_8d0d50bcbd264606bfc0e45c94b33e1b~mv2.webp/v1/fill/w_501,h_686,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Takaful%202.webp',
      'https://static.wixstatic.com/media/12af71_80bc37b2baab475484f92bb14f8b3671~mv2.webp/v1/fill/w_501,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Takaful%206.webp',
    ],
  },
  {
    id: 'memco',
    slug: '/case-studies/memco',
    category: 'Turnkey Exhibition Booth',
    title: 'MEMCO Booth at Oman Water Week',
    location: 'Oman Convention Center',
    year: '2025',
    description:
      "Delivered a comprehensive end-to-end turnkey exhibition booth for MEMCO at Oman Water Week 2025. Setup included a custom booth structure tailored to MEMCO's water and energy focus, integrated digital signage displays for key product offerings, and a strategically placed smart board for interactive demos.",
    metrics: [
      { value: '6x3m', label: 'Interactive Booth' },
      { value: 'Turnkey', label: 'Exhibition Setup' },
      { value: 'OCEC', label: 'Event Venue' },
    ],
    tags: ['Oman Water Week 2025', '6x3m Booth Structure', 'Digital Signage', 'Interactive Smart Board', 'Exhibition Design'],
    accent: '#00DCA0',
    heroImage:
      'https://static.wixstatic.com/media/12af71_280fae1d98e34993929e3a477279911d~mv2.webp/v1/fill/w_601,h_706,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MEMCO%203.webp',
    galleryImages: [
      'https://static.wixstatic.com/media/12af71_f22d1d22249a4726a1a5d9ec5f152a10~mv2.webp/v1/fill/w_501,h_871,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MEMCO%201.webp',
      'https://static.wixstatic.com/media/12af71_374ebdaf31d04931aaab237e4223b496~mv2.webp/v1/fill/w_501,h_758,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MEMCO%202.webp',
    ],
  },
  {
    id: 'mtcit',
    slug: '/case-studies/mtcit',
    category: 'Digital Exhibition Tech',
    title: 'MTCIT at Oman Sustainability Week',
    location: 'Oman Convention Center',
    year: '2025',
    description:
      "Collaborated on a group project for the Ministry of Transport, Communications and Information Technology (MTCIT) at Oman Sustainability Week 2025. Deployed a fully interactive achievements roadmap with kiosk controller, multiple AdVantage interactive quiz screens, and a live EV charging station location map of Oman.",
    metrics: [
      { value: '5x3m', label: 'Roadmap Wall' },
      { value: 'EV Map', label: 'Charging Pins' },
      { value: 'Carbon', label: 'Roadmap Tech' },
    ],
    tags: ['MTCIT Ministry', 'Sustainability Week', 'Carbon neutrality', 'Interactive EV Map', 'Quiz Game'],
    accent: '#FFB800',
    heroImage:
      'https://static.wixstatic.com/media/12af71_6e64cd6972dc4a93b33f79c0534603fa~mv2.png/v1/fill/w_601,h_776,fp_0.50_0.43,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%2013_PNG.png',
    galleryImages: [
      'https://static.wixstatic.com/media/12af71_43baabe31440433b95fce36e31125308~mv2.webp/v1/fill/w_385,h_720,al_c,q_80,enc_avif,quality_auto/MTCIT%202.webp',
      'https://static.wixstatic.com/media/12af71_a4dd552457d342788bbfe880fc1b12ec~mv2.png/v1/fill/w_501,h_740,fp_0.50_0.47,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%2011_PNG.png',
    ],
  },
  {
    id: 'oabc',
    slug: '/case-studies/oabc',
    category: 'Gamified Event Tech',
    title: 'OABC Charity Event Suhoor',
    location: 'Intercity Hotel Muscat',
    year: '2025',
    description:
      "Delivered a dynamic digital signage experience paired with a bespoke player-vs-player (P2P) quiz game for the Oman American Business Council's Suhoor charity event. Deployed AdVantage interactive screens around the venue hosting friendly knowledge duels where competitors represented their companies to support fundraising.",
    metrics: [
      { value: '150', label: 'Plays Logged' },
      { value: 'P2P', label: 'Quiz Game' },
      { value: 'Charity', label: 'Suhoor Dinner' },
    ],
    tags: ['Gamification', 'Suhoor Charity', 'P2P Quiz Game', 'AdVantage Display', 'Live Engagement'],
    accent: '#FF7832',
    heroImage:
      'https://static.wixstatic.com/media/12af71_c0e077811c194325976e9ed4f8dea47d~mv2.webp/v1/fill/w_501,h_686,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/OABC%201.webp',
    galleryImages: [
      'https://static.wixstatic.com/media/12af71_1223cfee6e5d461daf96c5836697b95e~mv2.webp/v1/fill/w_601,h_783,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OABC%203.webp',
    ],
  },
  {
    id: 'oqep',
    slug: '/case-studies/oqep',
    category: 'Digital Guest Management',
    title: 'OQEP Long Services Award',
    location: 'W Muscat',
    year: '2025',
    description:
      "Executed a seamless guest management and operations solution for OQ Exploration & Production's award ceremony. Deployed frictionless employee ID check-ins on custom kiosks, live seat mapping for VIPs, and a real-time attendance dashboard, concluded with comprehensive post-event analytics reporting.",
    metrics: [
      { value: '300+', label: 'Attendees Guided' },
      { value: 'kiosk-based', label: 'ID Check-in' },
      { value: 'Real-time', label: 'Seating Maps' },
    ],
    tags: ['OQEP Ceremony', 'Kiosk Check-in', 'VIP Seating Map', 'Live Dashboard', 'Post-Event Reporting'],
    accent: '#E91E63',
    heroImage:
      'https://static.wixstatic.com/media/12af71_879668a44c614ef3984bed73e4800093~mv2.png/v1/fill/w_501,h_764,fp_0.50_0.61,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%207_PNG.png',
    galleryImages: [
      'https://static.wixstatic.com/media/12af71_13d0ca40be3047c1bde87581088be64d~mv2.webp/v1/fill/w_601,h_1225,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OQEP%201.webp',
      'https://static.wixstatic.com/media/12af71_3680bbc0e5e54a68a1a190a215e61e17~mv2.png/v1/fill/w_501,h_830,fp_0.50_0.54,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%206_PNG.png',
    ],
  },
  {
    id: 'oer',
    slug: '/case-studies/oer-summit',
    category: 'Live Crowd Sentiment',
    title: 'OER Summit RAB Consulting',
    location: 'Muscat, Oman',
    year: '2025',
    description:
      "Collaborated with RAB Consulting at the OER Business & HR Summit to drive mental wellness awareness. Deployed our VoteCast system and interactive quiz platforms streaming real-time crowd insights to the main screen, allowing a global mental health advisor to provide live professional analysis.",
    metrics: [
      { value: '100+', label: 'HR Professionals' },
      { value: 'VoteCast', label: 'Live Sentiment Tech' },
      { value: 'Real-time', label: 'Stage Visuals' },
    ],
    tags: ['OER Summit', 'VoteCast Tech', 'RAB HR Tech', 'Mental Health Awareness', 'Stage Analytics'],
    accent: '#9C27B0',
    heroImage:
      'https://static.wixstatic.com/media/12af71_b538103e48264f40aedd38e30425912d~mv2.webp/v1/fill/w_501,h_541,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/OER%203.webp',
    galleryImages: [
      'https://static.wixstatic.com/media/12af71_f507451829194b2d813bb52cd29a16b3~mv2.webp/v1/fill/w_501,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/OER%201.webp',
    ],
  },
];

// ─── TICKET STRIP ─────────────────────────────────────────────────────────────
const TicketStrip = ({ event }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: { xs: 1.5, md: 2 },
      px: { xs: 2, md: 3 },
      py: 1.5,
      borderRadius: '100px',
      bgcolor: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(12px)',
      width: 'fit-content',
    }}
  >
    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: event.accent, boxShadow: `0 0 12px ${event.accent}` }} />
    <Typography sx={{ fontSize: { xs: '0.65rem', md: '0.72rem' }, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
      {event.location} &nbsp;·&nbsp; {event.year}
    </Typography>
  </Box>
);

// ─── METRIC CARD ─────────────────────────────────────────────────────────────
const MetricCard = ({ metric, accent }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 0.5,
      flex: '1 1 auto',
      minWidth: { xs: '80px', sm: '100px' },
    }}
  >
    <Typography
      sx={{
        fontFamily: "'Syne', sans-serif",
        fontSize: { xs: '1.2rem', sm: '1.35rem', md: '1.5rem' },
        fontWeight: 800,
        color: accent,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      }}
    >
      {metric.value}
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: '0.52rem', md: '0.58rem' },
        fontWeight: 700,
        color: 'rgba(255,255,255,0.35)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}
    >
      {metric.label}
    </Typography>
  </Box>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function EventsPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const touchStartX = useRef(null);
  const sliderRef = useRef(null);

  const event = EVENTS[activeIdx];
  const total = EVENTS.length;

  // reset gallery when event changes
  useEffect(() => { setGalleryIdx(0); }, [activeIdx]);

  const goNext = useCallback(() => setActiveIdx(p => (p + 1) % total), [total]);
  const goPrev = useCallback(() => setActiveIdx(p => (p - 1 + total) % total), [total]);

  // keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  // touch swipe on info panel
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  const hasGallery = event.galleryImages.length > 0;
  const allImages = [event.heroImage, ...event.galleryImages];
  const visibleImage = allImages[galleryIdx];

  return (
    <>

      <Box
        component="main"
        sx={{ bgcolor: '#000', minHeight: '100vh', color: '#fff', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}
      >
        <Navbar />
        <PageHero
          label="Success Stories"
          title={
            <span>
              Events we&apos;ve{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #00b4ff, #7b61ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                elevated
              </Box>
              .
            </span>
          }
          subtitle="From exclusive summits to massive public expos — explore how we create unforgettable experiences."
        />

        <Box
          sx={{
            position: 'fixed',
            top: '30%',
            left: '0%',
            width: '70vw',
            height: '70vw',
            background: `radial-gradient(circle, ${event.accent}12 0%, transparent 65%)`,
            filter: 'blur(120px)',
            pointerEvents: 'none',
            zIndex: 0,
            transition: 'background 1.2s ease',
          }}
        />

        {/* ── SLIDER SECTION ── */}
        <Box
          ref={sliderRef}
          sx={{ flex: 1, position: 'relative', zIndex: 1, pb: { xs: 4, md: 6 } }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6, lg: 6, xl: 8 } }}>

            {/* ── MAIN GRID: LEFT INFO + RIGHT VISUAL ── */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1fr 1.05fr' },
                gap: { xs: 4, sm: 6, md: 8, lg: 5, xl: 8 },
                alignItems: 'start',
              }}
            >
              {/* ── LEFT: EVENT INFO ── */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={event.id + '-info'}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
                >
                  {/* Category + Location pill */}
                  <Box sx={{ mb: 1.5 }}>
                    <Typography
                      sx={{
                        color: event.accent,
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        fontSize: { xs: '0.58rem', md: '0.66rem', lg: '0.62rem', xl: '0.7rem' },
                        mb: 1.2,
                      }}
                    >
                      {event.category}
                    </Typography>
                    <TicketStrip event={event} />
                  </Box>

                  {/* Title */}
                  <Typography
                    component="h2"
                    sx={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '1.65rem', sm: '2rem', md: '2.3rem', lg: '1.95rem', xl: '2.5rem' },
                      lineHeight: 1.1,
                      letterSpacing: '-0.025em',
                      mb: 2,
                      color: '#fff',
                    }}
                  >
                    {event.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: { xs: '0.84rem', md: '0.92rem', lg: '0.85rem', xl: '0.94rem' },
                      lineHeight: 1.55,
                      mb: 2.5,
                      maxWidth: 520,
                    }}
                  >
                    {event.description}
                  </Typography>

                  {/* Metrics row */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: { xs: 2.5, sm: 3, md: 4 },
                      pb: 2.5,
                      mb: 2.5,
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {event.metrics.map((m, i) => (
                      <MetricCard key={i} metric={m} accent={event.accent} />
                    ))}
                  </Box>

                  {/* Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 0 }}>
                    {event.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.04)',
                          color: 'rgba(255,255,255,0.6)',
                          border: '1px solid rgba(255,255,255,0.09)',
                          borderRadius: '6px',
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.68rem',
                          letterSpacing: '0.04em',
                        }}
                      />
                    ))}
                  </Box>


                </motion.div>
              </AnimatePresence>

              {/* ── RIGHT: IMAGE VISUAL ── */}
              <Box sx={{ position: 'relative' }}>
                {/* Main hero image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={event.id + '-' + galleryIdx}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ width: '100%', position: 'relative' }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        aspectRatio: { xs: '4/3', md: '16/10' },
                        borderRadius: { xs: '20px', md: '28px' },
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 60px ${event.accent}22`,
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <Box
                        component="img"
                        src={visibleImage}
                        alt={`${event.title} — ${event.location}`}
                        loading="lazy"
                        sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', '&:hover': { transform: 'scale(1.03)' } }}
                      />
                      {/* bottom gradient overlay */}
                      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)' }} />

                      {/* Floating category badge */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: { xs: 14, md: 20 },
                          left: { xs: 14, md: 20 },
                          px: 2,
                          py: 0.8,
                          bgcolor: 'rgba(0,0,0,0.55)',
                          backdropFilter: 'blur(12px)',
                          borderRadius: '8px',
                          border: `1px solid ${event.accent}50`,
                        }}
                      >
                        <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, color: event.accent, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                          {event.category}
                        </Typography>
                      </Box>

                      {/* Image count badge */}
                      {allImages.length > 1 && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: { xs: 14, md: 20 },
                            right: { xs: 14, md: 20 },
                            px: 1.5,
                            py: 0.6,
                            bgcolor: 'rgba(0,0,0,0.55)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '6px',
                            border: '1px solid rgba(255,255,255,0.1)',
                          }}
                        >
                          <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>
                            {galleryIdx + 1} / {allImages.length}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </motion.div>
                </AnimatePresence>

                {/* ── THUMBNAIL STRIP ── */}
                {allImages.length > 1 && (
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1.5,
                      mt: 2,
                      overflowX: 'auto',
                      pb: 0.5,
                      '&::-webkit-scrollbar': { height: '2px' },
                      '&::-webkit-scrollbar-track': { bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 },
                      '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1 },
                    }}
                  >
                    {allImages.map((img, i) => (
                      <Box
                        key={i}
                        component="button"
                        onClick={() => setGalleryIdx(i)}
                        aria-label={`View image ${i + 1}`}
                        sx={{
                          background: 'none',
                          border: i === galleryIdx ? `2px solid ${event.accent}` : '2px solid transparent',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          width: { xs: 64, md: 80 },
                          height: { xs: 44, md: 52 },
                          flexShrink: 0,
                          cursor: 'pointer',
                          transition: 'border-color 0.25s, opacity 0.25s',
                          opacity: i === galleryIdx ? 1 : 0.45,
                          '&:hover': { opacity: 1 },
                          padding: 0,
                        }}
                      >
                        <Box
                          component="img"
                          src={img}
                          alt={`${event.title} thumbnail ${i + 1}`}
                          loading="lazy"
                          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </Box>
                    ))}
                  </Box>
                )}

              </Box>
            </Box>

            {/* ── ALL EVENTS GRID (bottom overview) ── */}
            <Box sx={{ mt: { xs: 8, md: 10 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Typography
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    color: 'rgba(255,255,255,0.9)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  All Events
                </Typography>
                <Box sx={{ height: '1px', flex: 1, mx: 3, bgcolor: 'rgba(255,255,255,0.07)' }} />
                <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', fontWeight: 700, letterSpacing: '0.1em' }}>
                  {total} Projects
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(7, 1fr)' },
                  gap: { xs: 2, md: 2.5 },
                }}
              >
                {EVENTS.map((e, i) => (
                  <Box
                    key={e.id}
                    component="button"
                    onClick={() => {
                      setActiveIdx(i);
                      if (sliderRef.current) {
                        const yOffset = -100;
                        const y = sliderRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    aria-label={`Jump to ${e.title}`}
                    sx={{
                      background: 'none',
                      border: i === activeIdx ? `1px solid ${e.accent}` : '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      aspectRatio: '4/3',
                      '&:hover': {
                        borderColor: `${e.accent}80`,
                        transform: 'translateY(-4px)',
                      },
                      '&:hover img': {
                        transform: 'scale(1.06)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={e.heroImage}
                      alt={e.title}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease',
                        filter: i === activeIdx ? 'none' : 'brightness(0.5)',
                      }}
                    />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
                    <Box sx={{ position: 'absolute', bottom: { xs: 8, md: 12 }, left: { xs: 8, md: 12 }, right: { xs: 8, md: 12 }, textAlign: 'left' }}>
                      <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: { xs: '0.65rem', md: '0.75rem' }, color: '#fff', lineHeight: 1.3 }}>
                        {e.title.split(' ').slice(0, 3).join(' ')}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: e.accent }} />
                        <Typography sx={{ fontSize: '0.55rem', color: e.accent, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          {e.year}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
}