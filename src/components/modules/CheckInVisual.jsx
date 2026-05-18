'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function CheckInVisual({ color, hideText = false, size = 120 }) {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      position: 'relative',
    }}>
      <Box sx={{
        width: size,
        height: size,
        position: 'relative',
        p: size * 0.0125 // dynamic padding
      }}>
        {/* Corner Brackets */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: size * 0.2, height: size * 0.2, borderLeft: `${Math.max(2, size * 0.025)}px solid ${color}`, borderTop: `${Math.max(2, size * 0.025)}px solid ${color}`, borderRadius: '6px 0 0 0' }} />
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: size * 0.2, height: size * 0.2, borderRight: `${Math.max(2, size * 0.025)}px solid ${color}`, borderTop: `${Math.max(2, size * 0.025)}px solid ${color}`, borderRadius: '0 6px 0 0' }} />
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: size * 0.2, height: size * 0.2, borderLeft: `${Math.max(2, size * 0.025)}px solid ${color}`, borderBottom: `${Math.max(2, size * 0.025)}px solid ${color}`, borderRadius: '0 0 0 6px' }} />
        <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: size * 0.2, height: size * 0.2, borderRight: `${Math.max(2, size * 0.025)}px solid ${color}`, borderBottom: `${Math.max(2, size * 0.025)}px solid ${color}`, borderRadius: '0 0 6px 0' }} />

        {/* QR Pattern Placeholder */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: `${size * 0.033}px`,
          height: '100%',
          opacity: 0.3
        }}>
          {Array.from({ length: 25 }).map((_, i) => (
            <Box key={i} sx={{ bgcolor: i % 3 === 0 ? color : 'rgba(255,255,255,0.2)', borderRadius: `${Math.max(1, size * 0.016)}px` }} />
          ))}
        </Box>

        {/* Scan Line */}
        <motion.div
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            left: '5%',
            right: '5%',
            height: `${Math.max(2, size * 0.016)}px`,
            background: color,
            boxShadow: `0 0 ${size * 0.125}px ${color}`,
            zIndex: 2,
          }}
        />
      </Box>

      {!hideText && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 8, height: 8, borderRadius: '50%', background: color }}
          />
          <Typography sx={{ color: color, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Scanning Pass...
          </Typography>
        </Box>
      )}
    </Box>
  );
}
