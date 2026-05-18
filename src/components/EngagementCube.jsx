'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Glassmorphic Float Tag Component
const FloatTag = ({ label, style, animYRange = [-4, 4], animDuration = 7, delay = 0 }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        y: animYRange,
      }}
      transition={{
        duration: animDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
      sx={{
        position: 'absolute',
        bgcolor: 'rgba(5, 8, 22, 0.8)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '100px',
        px: { xs: 1.5, md: 2.2 },
        py: { xs: 0.8, md: 1.2 },
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 1, md: 1.5 },
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255,255,255,0.1)',
        zIndex: 10,
        pointerEvents: 'none',
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      <Box
        sx={{
          width: { xs: 6, md: 8 },
          height: { xs: 6, md: 8 },
          borderRadius: '50%',
          bgcolor: '#00C8FF',
          boxShadow: '0 0 10px #00C8FF, 0 0 20px #00C8FF',
        }}
      />
      <Typography
        sx={{
          color: '#fff',
          fontFamily: "'Courier New', Courier, monospace",
          fontWeight: 700,
          fontSize: { xs: '0.58rem', md: '0.7rem' },
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default function EngagementCube() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: '1/1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle, rgba(0, 200, 255, 0.03) 0%, transparent 70%)',
        overflow: 'visible',
      }}
    >
      {/* ── FLOATING LABELS Around the Cube (Slow, Cinematic) ── */}
      <FloatTag
        label="Registration"
        style={{ left: '8%', top: '15%' }}
        animYRange={[-3, 3]}
        animDuration={7.2}
        delay={0.2}
      />
      <FloatTag
        label="Check-In"
        style={{ right: '12%', top: '8%' }}
        animYRange={[-4, 4]}
        animDuration={7.8}
        delay={0.8}
      />
      <FloatTag
        label="Polls / Q&A"
        style={{ left: '2%', top: '48%' }}
        animYRange={[-3, 3]}
        animDuration={6.8}
        delay={0}
      />
      <FloatTag
        label="Leaderboard"
        style={{ right: '5%', top: '52%' }}
        animYRange={[-4, 4]}
        animDuration={8.2}
        delay={1.2}
      />
      <FloatTag
        label="Photo Wall"
        style={{ left: '10%', top: '82%' }}
        animYRange={[-3.5, 3.5]}
        animDuration={7.0}
        delay={0.5}
      />
      <FloatTag
        label="Analytics"
        style={{ right: '20%', top: '86%' }}
        animYRange={[-3, 3]}
        animDuration={7.5}
        delay={1.5}
      />

      {/* ── MAIN SVG CUBE ENGINE ── */}
      <Box
        component="svg"
        viewBox="0 0 500 500"
        sx={{
          width: '88%',
          height: '88%',
          maxWidth: '520px',
          maxHeight: '520px',
          overflow: 'visible',
        }}
      >
        <defs>
          {/* Lightweight Neon Glow Filter to avoid CPU lag */}
          <filter id="neon-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Super Glow for Inner Card */}
          <filter id="card-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          <linearGradient id="card-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C8FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="face-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C8FF" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.01" />
          </linearGradient>

          <linearGradient id="wire-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C8FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7B61FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00C8FF" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* ── CONNECTION PATHS (Floating tags to target anchors) ── */}
        <path d="M 120,120 Q 150,150 180,140" stroke="rgba(0, 200, 255, 0.12)" strokeDasharray="3 3" fill="none" />
        <path d="M 380,80 Q 360,120 340,130" stroke="rgba(0, 200, 255, 0.12)" strokeDasharray="3 3" fill="none" />
        <path d="M 80,260 Q 130,260 170,270" stroke="rgba(0, 200, 255, 0.12)" strokeDasharray="3 3" fill="none" />
        <path d="M 400,280 Q 380,270 340,260" stroke="rgba(0, 200, 255, 0.12)" strokeDasharray="3 3" fill="none" />
        <path d="M 140,400 Q 180,380 210,390" stroke="rgba(0, 200, 255, 0.12)" strokeDasharray="3 3" fill="none" />
        <path d="M 320,440 Q 290,440 260,420" stroke="rgba(0, 200, 255, 0.12)" strokeDasharray="3 3" fill="none" />

        {/* ── CUBE VISUAL ── */}
        <circle cx="250" cy="260" r="160" fill="url(#face-gradient)" opacity="0.4" filter="blur(20px)" />

        {/* 1. Translucent Face Polygons (glassmorphism layer) */}
        <polygon points="90,175 250,260 250,430 90,345" fill="url(#face-gradient)" />
        <polygon points="410,175 250,260 250,430 410,345" fill="url(#face-gradient)" />
        <polygon points="250,90 410,175 250,260 90,175" fill="url(#face-gradient)" />

        {/* 2. Dotted Internal Back-Facing Edges */}
        <line x1="250" y1="90" x2="250" y2="240" stroke="#00C8FF" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="90" y1="345" x2="250" y2="240" stroke="#00C8FF" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="410" y1="345" x2="250" y2="240" stroke="#00C8FF" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="4 4" />

        {/* 3. Etched Monospace Words on Faces */}
        <text
          x="250"
          y="150"
          fill="rgba(255, 255, 255, 0.25)"
          fontSize="9"
          fontWeight="bold"
          fontFamily="'Courier New', Courier, monospace"
          letterSpacing="0.4em"
          textAnchor="middle"
          transform="rotate(-26, 250, 150)"
        >
          MEASURE
        </text>

        <text
          x="170"
          y="310"
          fill="rgba(255, 255, 255, 0.25)"
          fontSize="9"
          fontWeight="bold"
          fontFamily="'Courier New', Courier, monospace"
          letterSpacing="0.4em"
          textAnchor="middle"
          transform="rotate(28, 170, 310)"
        >
          CAPTURE
        </text>

        <text
          x="330"
          y="310"
          fill="rgba(255, 255, 255, 0.25)"
          fontSize="9"
          fontWeight="bold"
          fontFamily="'Courier New', Courier, monospace"
          letterSpacing="0.4em"
          textAnchor="middle"
          transform="rotate(-28, 330, 310)"
        >
          ENGAGE
        </text>

        {/* 4. The Glowing Tilted Inner Rounded Card (Leaderboard) */}
        <motion.path
          d="M 295,250 L 355,215 A 8,8 0 0 1 365,223 L 365,273 A 8,8 0 0 1 355,281 L 295,315 A 8,8 0 0 1 285,307 L 285,258 A 8,8 0 0 1 295,250 Z"
          fill="url(#card-gradient)"
          stroke="#00C8FF"
          strokeWidth="1.2"
          filter="url(#card-glow)"
          animate={{
            y: [0, -3, 0],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform, opacity' }}
        />

        {/* 5. Front-Facing Main Solid Outer Wireframe Edges (High Glow) */}
        <line x1="250" y1="90" x2="90" y2="175" stroke="url(#wire-gradient)" strokeWidth="1.5" filter="url(#neon-glow)" />
        <line x1="250" y1="90" x2="410" y2="175" stroke="url(#wire-gradient)" strokeWidth="1.5" filter="url(#neon-glow)" />
        <line x1="90" y1="175" x2="250" y2="260" stroke="url(#wire-gradient)" strokeWidth="1.5" filter="url(#neon-glow)" />
        <line x1="410" y1="175" x2="250" y2="260" stroke="url(#wire-gradient)" strokeWidth="1.5" filter="url(#neon-glow)" />
        <line x1="90" y1="175" x2="90" y2="345" stroke="url(#wire-gradient)" strokeWidth="1.5" filter="url(#neon-glow)" />
        <line x1="410" y1="175" x2="410" y2="345" stroke="url(#wire-gradient)" strokeWidth="1.5" filter="url(#neon-glow)" />
        <line x1="250" y1="260" x2="250" y2="430" stroke="url(#wire-gradient)" strokeWidth="1.5" filter="url(#neon-glow)" />
        <line x1="90" y1="345" x2="250" y2="430" stroke="url(#wire-gradient)" strokeWidth="1.5" filter="url(#neon-glow)" />
        <line x1="410" y1="345" x2="250" y2="430" stroke="url(#wire-gradient)" strokeWidth="1.5" filter="url(#neon-glow)" />

        {/* 6. Glowing Vertices */}
        <circle cx="250" cy="90" r="3.5" fill="#00C8FF" filter="url(#neon-glow)" />
        <circle cx="90" cy="175" r="3.5" fill="#00C8FF" filter="url(#neon-glow)" />
        <circle cx="410" cy="175" r="3.5" fill="#00C8FF" filter="url(#neon-glow)" />
        <circle cx="250" cy="260" r="4" fill="#fff" filter="url(#neon-glow)" />
        <circle cx="90" cy="345" r="3.5" fill="#00C8FF" filter="url(#neon-glow)" />
        <circle cx="410" cy="345" r="3.5" fill="#00C8FF" filter="url(#neon-glow)" />
        <circle cx="250" cy="430" r="3.5" fill="#00C8FF" filter="url(#neon-glow)" />
      </Box>
    </Box>
  );
}
