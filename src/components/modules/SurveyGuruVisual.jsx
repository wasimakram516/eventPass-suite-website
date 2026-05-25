'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function SurveyGuruVisual({ color }) {
  const emojis = ['😞', '😐', '😊', '🤩'];

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      p: { xs: 1.75, md: 2.25 },
      display: 'flex',
      flexDirection: 'column',
      gap: 0.75,
      overflow: 'hidden'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ color, fontSize: '0.55rem', fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>📧 Post-Event Survey</Typography>
        <Box sx={{ bgcolor: `${color}15`, px: 0.9, py: 0.3, borderRadius: '10px' }}>
          <Typography sx={{ color, fontSize: '0.45rem', fontWeight: 600 }}>2,912 sent</Typography>
        </Box>
      </Box>

      <Typography sx={{ color: '#fff', fontSize: '0.68rem', fontWeight: 700, textAlign: 'center', fontFamily: "'Syne', sans-serif" }}>
        How would you rate your experience?
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.75, my: 0.25 }}>
        {emojis.map((emoji, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.3, rotate: 10 }}
            animate={i === 3 ? { scale: [1, 1.1, 1], rotate: [0, 5, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: '1.25rem',
              cursor: 'pointer',
              filter: i === 3 ? 'none' : 'grayscale(0.8) opacity(0.5)'
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mt: 'auto' }}>
        <Box sx={{ height: 22, borderRadius: '6px', border: `1px solid ${color}15`, bgcolor: `${color}03` }}>
          <Typography sx={{ px: 1.1, py: 0.55, color: 'rgba(255,255,255,0.35)', fontSize: '0.48rem' }}>What did you enjoy most?</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 1 }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.32)', fontSize: '0.45rem' }}>Available in EN & AR</Typography>
          <Box sx={{ px: 1.5, py: 0.5, borderRadius: '6px', bgcolor: color, color: '#000', fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.04em', flexShrink: 0 }}>
            Submit →
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
