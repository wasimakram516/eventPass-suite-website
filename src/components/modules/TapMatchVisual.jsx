'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function TapMatchVisual({ color }) {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      p: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 0.75,
      transform: 'scale(0.92)',
      transformOrigin: 'center',
      overflow: 'hidden'
    }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '5px',
        width: '100%',
        maxWidth: 190,
        margin: '0 auto'
      }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            animate={i === 2 || i === 7 ? { rotateY: 180 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              aspectRatio: '1',
              borderRadius: '8px',
              border: (i === 2 || i === 7) ? `1px solid ${color}` : '1px solid rgba(255,255,255,0.1)',
              background: (i === 2 || i === 7) ? `${color}20` : 'rgba(255,255,255,0.03)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              color: i === 2 || i === 7 ? color : 'rgba(255,255,255,0.7)'
            }}
          >
            {(i === 2 || i === 7)
              ? <Box style={{ transform: 'rotateY(180deg)' }}>💎</Box>
              : <Typography sx={{ fontFamily: "'Syne', sans-serif", fontSize: '0.68rem', fontWeight: 800, color: 'rgba(0,220,160,.2)' }}>?</Typography>}
          </motion.div>
        ))}
      </Box>
      <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.48rem', fontWeight: 600, mt: 0.5, letterSpacing: '0.06em', textTransform: 'uppercase' }}>TIME LEFT: 00:45</Typography>
    </Box>
  );
}
