'use client';
import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { MotionBox, fadeInUp } from '@/components/Animations';

// ─── TIMELINE CONSTANTS ───────────────────────────────────────────────────────
// Single source of truth for all timeline positioning values
const TL = {
  mobileLineX: 20,
  mobileDotSize: 40,
  desktopDotSize: 52,
};

// ─── CONFIGURE VISUAL ─────────────────────────────────────────────────────────
const ConfigureVisual = ({ color }) => {
  const navItems = [
    { icon: <BoltOutlinedIcon fontSize="inherit" />, label: 'Event Setup' },
    { icon: <PaletteOutlinedIcon fontSize="inherit" />, label: 'Branding' },
    { icon: <AssignmentOutlinedIcon fontSize="inherit" />, label: 'Form Fields' },
    { icon: <BadgeOutlinedIcon fontSize="inherit" />, label: 'Badge' },
    { icon: <ExtensionOutlinedIcon fontSize="inherit" />, label: 'Modules' },
    { icon: <MailOutlinedIcon fontSize="inherit" />, label: 'Comms' },
  ];

  return (
    <Box sx={{ width: '100%', height: '100%', p: { xs: 2, sm: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', gap: 1.5, boxSizing: 'border-box' }}>
      {/* Browser chrome */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, borderBottom: '1px solid rgba(255,255,255,0.08)', pb: 1.5, flexShrink: 0 }}>
        <Box sx={{ display: 'flex', gap: 0.5, flexShrink: 0 }}>
          {['#ff5f57','#ffbd2e','#28c840'].map(c => (
            <Box key={c} sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: c }} />
          ))}
        </Box>
        <Box sx={{ flex: 1, height: 16, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: '4px', display: 'flex', alignItems: 'center', px: 1, minWidth: 0 }}>
          <Typography noWrap sx={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.04em' }}>
            eventpass.io/cms/configure
          </Typography>
        </Box>
      </Box>

      {/* Body */}
      <Box sx={{ display: 'flex', gap: 1.5, flex: 1, minHeight: 0 }}>
        {/* Sidebar — icon-only on xs/sm, labelled on md+ */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, flexShrink: 0, width: { xs: 28, sm: 32, md: 130 } }}>
          {navItems.map((item, i) => (
            <Box
              key={i}
              sx={{
                height: { xs: 22, md: 26 },
                borderRadius: '6px',
                bgcolor: i === 0 ? `${color}20` : 'transparent',
                border: i === 0 ? `1px solid ${color}35` : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                px: { xs: 0.5, md: 1 },
                gap: { xs: 0, md: 0.75 },
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Box sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }, display: 'flex', color: i === 0 ? color : 'rgba(255,255,255,0.4)', flexShrink: 0 }}>
                {item.icon}
              </Box>
              <Typography sx={{ fontSize: '0.52rem', fontWeight: i === 0 ? 700 : 400, color: i === 0 ? color : 'rgba(255,255,255,0.4)', display: { xs: 'none', md: 'block' }, whiteSpace: 'nowrap' }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Form area */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.2 }, minWidth: 0 }}>
          {/* Event name */}
          <Box>
            <Typography sx={{ fontSize: '0.48rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em', mb: 0.4 }}>Event Name</Typography>
            <Box sx={{ height: { xs: 24, md: 30 }, border: '1px solid rgba(255,255,255,0.07)', borderRadius: '7px', bgcolor: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', px: 1.2 }}>
              <Typography noWrap sx={{ fontSize: { xs: '0.52rem', md: '0.58rem' }, color: 'rgba(255,255,255,0.45)' }}>
                Riyada Development Forum 2026
              </Typography>
            </Box>
          </Box>

          {/* Brand colours */}
          <Box>
            <Typography sx={{ fontSize: '0.48rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em', mb: 0.4 }}>Brand Colours</Typography>
            <Box sx={{ display: 'flex', gap: 0.7 }}>
              {[color, '#7b61ff', '#ff6161', '#00dca0'].map((c, i) => (
                <Box key={i} sx={{ width: { xs: 16, md: 20 }, height: { xs: 16, md: 20 }, borderRadius: '5px', bgcolor: c, border: i === 0 ? '2px solid #fff' : '2px solid transparent', flexShrink: 0 }} />
              ))}
            </Box>
          </Box>

          {/* Registration type */}
          <Box>
            <Typography sx={{ fontSize: '0.48rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em', mb: 0.4 }}>Registration Type</Typography>
            <Box sx={{ height: { xs: 24, md: 30 }, border: '1px solid rgba(255,255,255,0.07)', borderRadius: '7px', bgcolor: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', px: 1.2 }}>
              <Typography noWrap sx={{ fontSize: { xs: '0.52rem', md: '0.58rem' }, color: 'rgba(255,255,255,0.45)' }}>
                Public — Open Registration
              </Typography>
            </Box>
          </Box>

          {/* Toggles */}
          {[{ label: 'Enable Arabic support' }, { label: 'On-site badge printing' }].map((t, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: { xs: 24, md: 30 }, height: { xs: 14, md: 17 }, borderRadius: '10px', bgcolor: color, position: 'relative', flexShrink: 0 }}>
                <Box sx={{ position: 'absolute', right: 2, top: '50%', transform: 'translateY(-50%)', width: { xs: 10, md: 13 }, height: { xs: 10, md: 13 }, borderRadius: '50%', bgcolor: '#fff' }} />
              </Box>
              <Typography sx={{ fontSize: { xs: '0.5rem', md: '0.58rem' }, color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap' }}>{t.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

// ─── OPERATIONS VISUAL ────────────────────────────────────────────────────────
const OperationsVisual = ({ color }) => {
  const tiles = [
    { icon: <SmartphoneOutlinedIcon fontSize="inherit" />, title: 'QR Check-In', sub: 'Instant verify' },
    { icon: <PrintOutlinedIcon fontSize="inherit" />, title: 'Badge Print', sub: 'On-site gen' },
    { icon: <PersonAddOutlinedIcon fontSize="inherit" />, title: 'Walk-Ins', sub: 'Register spot' },
    { icon: <ChatBubbleOutlineOutlinedIcon fontSize="inherit" />, title: 'WhatsApp', sub: 'Auto confirm' },
  ];

  return (
    <Box sx={{ width: '100%', height: '100%', p: { xs: 2, sm: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 }, boxSizing: 'border-box' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <Typography sx={{ fontSize: { xs: '0.65rem', md: '0.78rem' }, fontWeight: 800, color, fontFamily: "'Syne', sans-serif", letterSpacing: '0.06em' }}>
          LIVE OPERATIONS
        </Typography>
        <Box sx={{ px: 1, py: 0.3, borderRadius: '20px', bgcolor: 'rgba(0,220,160,0.1)', display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#00dca0' }} />
          <Typography sx={{ fontSize: '0.45rem', fontWeight: 700, color: '#00dca0', letterSpacing: '0.08em' }}>LIVE</Typography>
        </Box>
      </Box>

      {/* 2×2 tile grid */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: { xs: 1, md: 1.5 }, flex: 1, minHeight: 0 }}>
        {tiles.map((item, i) => (
          <Box
            key={i}
            sx={{
              p: { xs: 1.2, md: 1.8 },
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.08)',
              bgcolor: 'rgba(255,255,255,0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 0,
              transition: 'all 0.3s ease',
              '&:hover': { borderColor: `${color}30`, bgcolor: `${color}08` },
            }}
          >
            <Box sx={{ fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' }, color, display: 'flex', mb: 0.5 }}>{item.icon}</Box>
            <Box>
              <Typography sx={{ fontSize: { xs: '0.65rem', sm: '0.72rem', md: '0.88rem' }, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.5rem', md: '0.58rem' }, color: 'rgba(255,255,255,0.45)', mt: 0.25 }}>
                {item.sub}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Bottom scan bar */}
      <Box
        sx={{
          flexShrink: 0,
          p: { xs: 1, md: 1.2 },
          borderRadius: '8px',
          border: `1px solid ${color}25`,
          bgcolor: `${color}08`,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            width: { xs: 28, md: 36 },
            height: { xs: 28, md: 36 },
            borderRadius: '7px',
            bgcolor: `${color}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: { xs: '1rem', md: '1.3rem' },
            color,
            flexShrink: 0,
          }}
        >
          <PhotoCameraOutlinedIcon fontSize="inherit" />
        </Box>
        <Box>
          <Typography sx={{ fontSize: { xs: '0.58rem', md: '0.65rem' }, fontWeight: 800, color: '#fff' }}>Ready to scan</Typography>
          <Typography sx={{ fontSize: { xs: '0.45rem', md: '0.5rem' }, color: 'rgba(255,255,255,0.4)' }}>Point camera at QR</Typography>
        </Box>
      </Box>
    </Box>
  );
};

// ─── ENGAGE VISUAL ────────────────────────────────────────────────────────────
const ENGAGE_MODULES = [
  { icon: <PsychologyOutlinedIcon fontSize="inherit" />, label: 'QuizNest' },
  { icon: <EmojiEventsOutlinedIcon fontSize="inherit" />, label: 'EventDuel' },
  { icon: <CollectionsOutlinedIcon fontSize="inherit" />, label: 'Mosaic' },
  { icon: <PollOutlinedIcon fontSize="inherit" />, label: 'VoteCast' },
  { icon: <QuestionAnswerOutlinedIcon fontSize="inherit" />, label: 'StageQ' },
  { icon: <DonutLargeOutlinedIcon fontSize="inherit" />, label: 'Wheel' },
  { icon: <StyleOutlinedIcon fontSize="inherit" />, label: 'Match' },
];

const EngageVisual = ({ color }) => {
  const cx = 100;
  const cy = 100;
  const orbitR = 72;
  const nodeR = 14;
  const centerR = 20;

  const nodeCount = ENGAGE_MODULES.length;
  const positions = ENGAGE_MODULES.map((_, i) => {
    const angle = (2 * Math.PI * i) / nodeCount - Math.PI / 2;
    return {
      x: cx + orbitR * Math.cos(angle),
      y: cy + orbitR * Math.sin(angle),
    };
  });

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
      >
        {/* Dashed orbit ring */}
        <circle cx={cx} cy={cy} r={orbitR} fill="none" stroke={color} strokeWidth="0.4" strokeDasharray="3 3" opacity="0.15" />

        {/* Spoke lines */}
        {positions.map((pos, i) => (
          <line key={i} x1={cx} y1={cy} x2={pos.x} y2={pos.y} stroke={color} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.2" />
        ))}

        {/* Orbit nodes */}
        {ENGAGE_MODULES.map((mod, i) => (
          <g key={i}>
            {/* Node background rect */}
            <rect
              x={positions[i].x - nodeR}
              y={positions[i].y - nodeR}
              width={nodeR * 2}
              height={nodeR * 2}
              rx="4"
              fill="#0a0a0f"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.5"
            />
            <foreignObject
              x={positions[i].x - nodeR}
              y={positions[i].y - nodeR}
              width={nodeR * 2}
              height={nodeR * 2}
              style={{ overflow: 'visible' }}
            >
              <motion.div
                xmlns="http://www.w3.org/1999/xhtml"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color,
                  fontSize: '12px',
                }}
              >
                {mod.icon}
              </motion.div>
            </foreignObject>
          </g>
        ))}

        {/* Centre circle */}
        <circle cx={cx} cy={cy} r={centerR} fill={`${color}15`} stroke={`${color}50`} strokeWidth="1" />
        <foreignObject x={cx - centerR} y={cy - centerR} width={centerR * 2} height={centerR * 2}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color,
              fontSize: '16px',
            }}
          >
            <PersonOutlineOutlinedIcon fontSize="inherit" />
          </div>
        </foreignObject>
      </svg>
    </Box>
  );
};

// ─── MEASURE VISUAL ───────────────────────────────────────────────────────────
const MeasureVisual = ({ color }) => {
  const barColors = ['#00b4ff', '#7b61ff', '#00dca0', '#ff7832', '#ff6161', '#ffb800'];
  const bars = [
    { h: 0.45, l: 'Quiz', color: barColors[0] },
    { h: 0.72, l: 'Duet', color: barColors[1] },
    { h: 0.60, l: 'Polls', color: barColors[2] },
    { h: 0.85, l: 'Wall', color: barColors[3] },
    { h: 0.52, l: 'Q&A', color: barColors[4] },
    { h: 0.68, l: 'Wheel', color: barColors[5] },
  ];
  const stats = [
    { label: 'Reg', val: '3.8k', color: '#ff7832' },
    { label: 'Check', val: '2.9k', color: '#00dca0' },
    { label: 'Int', val: '8.2k', color: '#00b4ff' },
  ];

  return (
    <Box sx={{ width: '100%', height: '100%', p: { xs: 2, sm: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 }, boxSizing: 'border-box' }}>
      {/* Stat pills */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, flexShrink: 0 }}>
        {stats.map((m, i) => (
          <Box key={i} sx={{ p: { xs: 0.8, md: 1.1 }, borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', bgcolor: 'rgba(255,255,255,0.02)' }}>
            <Typography sx={{ fontSize: { xs: '0.42rem', md: '0.48rem' }, color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', mb: 0.2 }}>{m.label}</Typography>
            <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.9rem' }, fontWeight: 800, color: m.color, lineHeight: 1 }}>{m.val}</Typography>
          </Box>
        ))}
      </Box>

      {/* Bar chart */}
      <Box sx={{ flex: 1, p: { xs: 1, md: 1.5 }, borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', bgcolor: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <Typography sx={{ fontSize: '0.42rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em', mb: 0.5, flexShrink: 0 }}>Engagement</Typography>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: { xs: 0.8, md: 1.2 }, minHeight: 0 }}>
          {bars.map((bar, i) => (
            <Box key={i} sx={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 0.3 }}>
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 0.65 + i * 0.04 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{
                  width: '100%',
                  height: `${bar.h * 100}%`,
                  background: `linear-gradient(to top, ${bar.color}20 0%, ${bar.color} 100%)`,
                  borderRadius: '2px 2px 0 0',
                  transformOrigin: 'bottom',
                }}
              />
              <Typography sx={{ fontSize: { xs: '0.38rem', sm: '0.42rem', md: '0.45rem' }, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                {bar.l}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Survey footer */}
      <Box
        sx={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 1.2,
          p: { xs: 1, md: 1.3 },
          borderRadius: '10px',
          bgcolor: 'rgba(255,120,50,0.06)',
          border: '1px solid rgba(255,120,50,0.14)',
        }}
      >
        <Box sx={{ fontSize: { xs: '1rem', md: '1.3rem' }, color: '#ff7832', flexShrink: 0 }}>
          <MailOutlinedIcon fontSize="inherit" />
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography noWrap sx={{ fontSize: { xs: '0.58rem', md: '0.64rem' }, fontWeight: 800, color: '#ff7832', fontFamily: "'Syne', sans-serif" }}>
            Post-Event: SurveyGuru Active
          </Typography>
          <Typography noWrap sx={{ fontSize: { xs: '0.48rem', md: '0.54rem' }, color: 'rgba(255,255,255,0.55)', mt: 0.15 }}>
            2,912 sent · 1,847 responses · 63% completion
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// ─── STEP DATA ────────────────────────────────────────────────────────────────
const steps = [
  {
    phase: 'Phase 01',
    name: 'Configure',
    description: 'Master your event architecture. From bespoke branding to complex registration logic, deploy exactly what your vision requires in minutes.',
    details: ['Custom Branding', 'Form Builder', 'Badge Design', 'Module Selection', 'Multilingual'],
    color: '#00b4ff',
    visual: (color) => <ConfigureVisual color={color} />,
  },
  {
    phase: 'Phase 02',
    name: 'Operations',
    description: 'Precision in execution. Our seamless check-in and on-site operational suite eliminates bottlenecks, ensuring a flawless first impression.',
    details: ['QR Scanning', 'Badge Printing', 'Walk-in Support', 'Staff Verification', 'WhatsApp Comms'],
    color: '#7b61ff',
    visual: (color) => <OperationsVisual color={color} />,
  },
  {
    phase: 'Phase 03',
    name: 'Engage',
    description: 'Ignite audience participation. Transform passive viewers into active participants with a multi-touchpoint engagement ecosystem.',
    details: ['Live Quizzes', 'Photo Walls', 'Audience Polls', 'Panel Q&A', 'Prize Giveaways'],
    color: '#00dca0',
    visual: (color) => <EngageVisual color={color} />,
  },
  {
    phase: 'Phase 04',
    name: 'Measure',
    description: 'Data-driven clarity. Capture every interaction across the event lifecycle and extend the conversation with automated post-event intelligence.',
    details: ['Live Dashboards', 'Export Reports', 'Survey Follow-Up', 'Post-Event Engagement'],
    color: '#ff7832',
    visual: (color) => <MeasureVisual color={color} />,
  },
];

// ─── STEP ROW ─────────────────────────────────────────────────────────────────
const StepRow = ({ step, index, isMobile }) => {
  const isEven = index % 2 === 0;
  const dotSize = isMobile ? TL.mobileDotSize : TL.desktopDotSize;
  const dotCentreOffset = isMobile ? TL.mobileLineX : '50%';

  return (
    <Box sx={{ position: 'relative' }}>
      {/* ── TIMELINE DOT ── */}
      <Box
        sx={{
          position: 'absolute',
          left: isMobile ? `${TL.mobileLineX}px` : '50%',
          top: isMobile ? 0 : '50%',
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          bgcolor: '#000',
          border: `2px solid ${step.color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isMobile ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
          zIndex: 2,
        }}
      >
        <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: step.color, fontSize: isMobile ? '0.75rem' : '1rem', lineHeight: 1 }}>
          0{index + 1}
        </Typography>
      </Box>

      {/* ── MOBILE LAYOUT: stacked, info below dot, visual below info ── */}
      {isMobile && (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <MotionBox
            variants={fadeInUp}
            sx={{
              pl: `${TL.mobileLineX + dotSize / 2 + 16}px`,
              pt: `${dotSize / 2 - 6}px`,
              pb: 4,
            }}
          >
            <Typography sx={{ color: step.color, fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.22em', mb: 1, textTransform: 'uppercase' }}>
              {step.phase}
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, mb: 1.5, fontSize: { xs: '1.75rem', sm: '2.2rem' }, color: '#fff', lineHeight: 1.1 }}
            >
              {step.name}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', mb: 2.5, fontSize: '0.88rem', lineHeight: 1.65 }}>
              {step.description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
              {step.details.map((d) => (
                <Box key={d} sx={{ px: 1.4, py: 0.5, borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.62rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', bgcolor: 'rgba(255,255,255,0.02)' }}>
                  {d}
                </Box>
              ))}
            </Box>
          </MotionBox>

          {/* Visual card — full width, left margin clears the timeline rail */}
          <MotionBox
            variants={fadeInUp}
            sx={{
              ml: `${TL.mobileLineX + dotSize / 2 + 12}px`,
              mr: '4px',
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: { xs: 240, sm: 300 },
                borderRadius: '18px',
                background: '#111118',
                border: '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
                transition: 'all 0.4s ease',
                '&:hover': {
                  borderColor: `${step.color}40`,
                  boxShadow: `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${step.color}18`,
                  transform: 'translateY(-3px)',
                },
              }}
            >
              {step.visual(step.color)}
            </Box>
          </MotionBox>
        </Box>
      )}

      {/* ── DESKTOP LAYOUT: two-column, alternating sides ── */}
      {!isMobile && (
        <Grid container sx={{ alignItems: 'center', position: 'relative' }}>
          {/* Info column */}
          <Grid size={{ md: 6 }} sx={{ order: isEven ? 1 : 2 }}>
            <MotionBox
              variants={fadeInUp}
              sx={{
                textAlign: isEven ? 'right' : 'left',
                pr: isEven ? '72px' : 0,
                pl: isEven ? 0 : '72px',
              }}
            >
              <Typography sx={{ color: step.color, fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.22em', mb: 1.5, textTransform: 'uppercase' }}>
                {step.phase}
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, mb: 2, fontSize: { md: '2.8rem', lg: '3.5rem' }, color: '#fff', lineHeight: 1.1 }}
              >
                {step.name}
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  mb: 3,
                  fontSize: { md: '1rem', lg: '1.1rem' },
                  lineHeight: 1.65,
                  maxWidth: 420,
                  ml: isEven ? 'auto' : 0,
                  mr: isEven ? 0 : 'auto',
                }}
              >
                {step.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: isEven ? 'flex-end' : 'flex-start' }}>
                {step.details.map((d) => (
                  <Box key={d} sx={{ px: 1.5, py: 0.6, borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', bgcolor: 'rgba(255,255,255,0.02)' }}>
                    {d}
                  </Box>
                ))}
              </Box>
            </MotionBox>
          </Grid>

          {/* Visual column */}
          <Grid size={{ md: 6 }} sx={{ order: isEven ? 2 : 1 }}>
            <MotionBox
              variants={fadeInUp}
              sx={{
                pl: isEven ? '72px' : 0,
                pr: isEven ? 0 : '72px',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: '32px',
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.08)',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
                  transition: 'all 0.5s ease',
                  '&:hover': {
                    borderColor: `${step.color}40`,
                    boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${step.color}20`,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {step.visual(step.color)}
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HowItWorksPage() {
  const containerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <Navbar />

      <PageHero
        label="The Workflow"
        title={
          <span>
            Your event,{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #00b4ff, #7b61ff, #00dca0, #ff7832)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              four phases.
            </Box>
          </span>
        }
        subtitle="From first configuration to post-event insights — every phase flows through a single, unified platform."
      />

      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 8, lg: 10 }, py: { xs: 8, md: 20 }, position: 'relative', zIndex: 1 }}>
        <Box ref={containerRef} sx={{ position: 'relative' }}>

          {/* ── Static background track ── */}
          <Box
            sx={{
              position: 'absolute',
              left: isMobile ? `${TL.mobileLineX}px` : '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              bgcolor: 'rgba(255,255,255,0.05)',
              transform: isMobile ? 'translateX(-50%)' : 'translateX(-50%)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />

          {/* ── Animated progress track ── */}
          <motion.div
            style={{
              position: 'absolute',
              left: isMobile ? `${TL.mobileLineX}px` : '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #00b4ff, #7b61ff, #00dca0, #ff7832)',
              transform: isMobile ? 'translateX(-50%)' : 'translateX(-50%)',
              originY: 0,
              scaleY,
              zIndex: 1,
              boxShadow: '0 0 16px rgba(0,200,255,0.25)',
              pointerEvents: 'none',
            }}
          />

          {/* ── Steps ── */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0, md: 28 } }}>
            {steps.map((step, index) => (
              <StepRow key={step.name} step={step} index={index} isMobile={isMobile} />
            ))}
          </Box>

        </Box>
      </Container>

      <Footer />
    </Box>
  );
}