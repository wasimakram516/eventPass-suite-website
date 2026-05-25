'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function EventDuelVisual({ color }) {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1.25,
      overflow: 'hidden'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, bgcolor: `${color}15`, px: 1, py: 0.35, borderRadius: '4px' }}>
        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: color }} />
        <Typography sx={{ color, fontSize: '0.5rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>LIVE MATCH</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ width: 44, height: 44, borderRadius: '50%', border: `2px solid ${color}`, bgcolor: `${color}08`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', lineHeight: 1, mb: 1 }}>👤</Box>
          <Typography sx={{ color: '#fff', fontSize: '0.55rem', fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>PLAYER 1</Typography>
          <Typography sx={{ color: color, fontSize: '1rem', fontWeight: 900 }}>2,450</Typography>
        </Box>
        
        <Box sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', fontWeight: 800 }}>VS</Typography>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ width: 44, height: 44, borderRadius: '50%', border: '2px solid #ff7832', bgcolor: '#ff783210', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', lineHeight: 1, mb: 1 }}>👤</Box>
          <Typography sx={{ color: '#fff', fontSize: '0.55rem', fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>PLAYER 2</Typography>
          <Typography sx={{ color: '#ff7832', fontSize: '1rem', fontWeight: 900 }}>1,890</Typography>
        </Box>
      </Box>

      <Box sx={{ width: 160, maxWidth: '100%', height: 6, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: 3, overflow: 'hidden', display: 'flex' }}>
        <motion.div animate={{ width: '60%' }} style={{ height: '100%', background: color, borderRadius: '3px 0 0 3px' }} />
        <motion.div animate={{ width: '40%' }} style={{ height: '100%', background: '#ff7832', borderRadius: '0 3px 3px 0' }} />
      </Box>
    </Box>
  );
}
