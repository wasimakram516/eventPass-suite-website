'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function VoteCastVisual({ color }) {
  const options = [
    { label: 'AI & Automation', value: 68 },
    { label: 'Green Energy', value: 45 },
    { label: 'FinTech', value: 32 }
  ];

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      p: { xs: 2.25, md: 3 },
      justifyContent: 'center'
    }}>
      <Typography sx={{ color: '#fff', fontSize: '0.65rem', fontWeight: 700, mb: 1, fontFamily: "'Syne', sans-serif" }}>
        Which topic interests you most?
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {options.map((opt, i) => (
          <Box key={opt.label} sx={{ width: '100%' }}>
            <Box sx={{ height: 28, width: '100%', bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', position: 'relative' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${opt.value}%` }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
                style={{
                  height: '100%',
                  background: i === 0
                    ? 'linear-gradient(90deg, rgba(123,97,255,.25), rgba(123,97,255,.08))'
                    : i === 1
                      ? 'linear-gradient(90deg, rgba(123,97,255,.18), rgba(123,97,255,.05))'
                      : 'linear-gradient(90deg, rgba(123,97,255,.12), rgba(123,97,255,.03))',
                  borderRadius: '8px'
                }}
              />
              <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 1.25, pointerEvents: 'none', zIndex: 1 }}>
                <Typography sx={{ color: 'rgba(255,255,255,.9)', fontSize: '0.52rem', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,.35)' }}>{opt.label}</Typography>
                <Typography sx={{ color: '#fff', fontSize: '0.52rem', fontWeight: 700, textShadow: '0 1px 2px rgba(0,0,0,.35)' }}>{opt.value}%</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 0.5, display: 'flex', alignItems: 'center', gap: 0.75, justifyContent: 'center' }}>
        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: color }} />
        <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.5rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          248 votes · Live
        </Typography>
      </Box>
    </Box>
  );
}
