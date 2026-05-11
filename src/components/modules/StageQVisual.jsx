'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function StageQVisual({ color }) {
  const bubbles = [
    { text: 'Future of AI?', votes: 24, big: true },
    { text: 'Sustainability?', votes: 18 },
    { text: 'Skills for 2030?', votes: 12 },
    { text: 'Hybrid work?', votes: 21, big: true },
    { text: 'Data Privacy?', votes: 15 }
  ];

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      p: 2,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {bubbles.map((b, i) => (
        <motion.div
          key={b.text}
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          style={{
            padding: b.big ? '10px 18px' : '8px 14px',
            borderRadius: '100px',
            background: `${color}15`,
            border: `1px solid ${color}30`,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            cursor: 'default'
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: b.big ? '0.65rem' : '0.55rem', fontWeight: 600 }}>
            {b.text}
          </Typography>
          <Typography sx={{ color: color, fontSize: b.big ? '0.6rem' : '0.5rem', fontWeight: 800 }}>
            ↑ {b.votes}
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
}
