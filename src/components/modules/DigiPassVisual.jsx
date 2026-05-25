'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function DigiPassVisual({ color }) {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      p: 2,
      overflow: 'hidden'
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 160,
        bgcolor: 'rgba(0,180,255,.04)',
        border: '1px solid rgba(0,180,255,.12)',
        borderRadius: '10px',
        p: 1.5
      }}>
        <Typography sx={{ color, fontSize: '0.55rem', fontWeight: 700, mb: 1, textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          🪪 Digital Passport
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
          {Array.from({ length: 8 }).map((_, index) => {
            const completed = index < 5;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0.3 }}
                animate={completed ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                style={{
                  aspectRatio: '1',
                  borderRadius: '8px',
                  border: completed ? '1px solid rgba(0,180,255,.25)' : '1px dashed rgba(0,180,255,.15)',
                  background: completed ? 'rgba(0,180,255,.1)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  color: completed ? color : 'rgba(255,255,255,.35)'
                }}
              >
                {completed ? '✓' : '·'}
              </motion.div>
            );
          })}
        </Box>
      </Box>

      <Box sx={{ width: '100%', maxWidth: 160, display: 'flex', alignItems: 'center', gap: 0.75 }}>
        <Box sx={{ flex: 1, height: 4, bgcolor: 'rgba(255,255,255,.06)', borderRadius: 2, overflow: 'hidden' }}>
          <Box sx={{ width: '62%', height: '100%', bgcolor: color, borderRadius: 2 }} />
        </Box>
        <Typography sx={{ color: 'rgba(255,255,255,.35)', fontSize: '0.5rem', fontWeight: 600 }}>5 / 8</Typography>
      </Box>
    </Box>
  );
}
