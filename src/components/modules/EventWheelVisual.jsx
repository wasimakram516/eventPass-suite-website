'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function EventWheelVisual({ color }) {
  return (
    <Box sx={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1.5,
      position: 'relative'
    }}>
      <Box sx={{ position: 'relative', width: 120, height: 120 }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: `2px solid ${color}30`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <Box
              key={deg}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '50%',
                height: '2px',
                bgcolor: `${color}40`,
                transformOrigin: '0 50%',
                transform: `rotate(${deg}deg)`,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  top: -10,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  bgcolor: i % 2 === 0 ? color : 'transparent',
                  border: `1px solid ${color}`,
                  opacity: 0.3
                }
              }}
            />
          ))}
        </motion.div>
        {/* Pointer */}
        <Box sx={{ 
          position: 'absolute', 
          top: -10, 
          left: '50%', 
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: `12px solid ${color}`,
          zIndex: 2
        }} />
        {/* Center */}
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          width: 24,
          height: 24,
          borderRadius: '50%',
          bgcolor: '#000',
          border: `2px solid ${color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3
        }}>
          <Typography sx={{ color: color, fontSize: '0.6rem', fontWeight: 900 }}>★</Typography>
        </Box>
      </Box>
      <Typography sx={{ color: color, fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em' }}>SPIN TO WIN</Typography>
    </Box>
  );
}
