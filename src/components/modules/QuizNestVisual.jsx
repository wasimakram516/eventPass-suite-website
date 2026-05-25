'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizNestVisual({ color }) {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      p: { xs: 2, md: 3 },
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      position: 'relative',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.5rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Question 4 of 10</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, bgcolor: `${color}15`, px: 1, py: 0.35, borderRadius: '12px' }}>
          <Typography sx={{ color, fontSize: '0.6rem', fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>⏱ 00:12</Typography>
        </Box>
      </Box>

      <Typography sx={{ color: '#fff', fontSize: '0.7rem', fontWeight: 700, textAlign: 'center', my: 0.5, fontFamily: "'Syne', sans-serif" }}>
        What is the capital of the Sultanate of Oman?
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
        {['Dubai', 'Muscat', 'Riyadh', 'Doha'].map((opt) => (
          <motion.div
            key={opt}
            whileHover={{ scale: 1.02 }}
            style={{
              padding: '8px 10px',
              borderRadius: '8px',
              border: opt === 'Muscat' ? `1px solid ${color}` : '1px solid rgba(255,255,255,0.1)',
              background: opt === 'Muscat' ? `${color}15` : 'rgba(255,255,255,0.02)',
              color: opt === 'Muscat' ? color : 'rgba(255,255,255,0.6)',
              fontSize: '0.55rem',
              fontWeight: 700,
              textAlign: 'center',
              lineHeight: 1.2
            }}
          >
            {opt} {opt === 'Muscat' ? '✓' : ''}
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
