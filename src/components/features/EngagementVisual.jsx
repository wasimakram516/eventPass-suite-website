'use client';
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function EngagementVisual({ color }) {
  return (
    <Box sx={{ 
      width: '100%', 
      height: '100%', 
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 4
    }}>
      {/* Floating Game Icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          fontSize: '2rem',
          filter: 'drop-shadow(0 0 10px rgba(0,200,255,0.3))'
        }}
      >
        🎮
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '25%',
          fontSize: '1.8rem',
          filter: 'drop-shadow(0 0 10px rgba(123,97,255,0.3))'
        }}
      >
        🎡
      </motion.div>

      {/* Main Card */}
      <Box sx={{ 
        width: '70%', 
        height: '60%', 
        bgcolor: 'rgba(255,255,255,0.03)', 
        borderRadius: '16px',
        border: `1px solid ${color}30`,
        backdropFilter: 'blur(10px)',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        zIndex: 1
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ height: 4, width: '40%', bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: color }} />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {[1, 2, 3].map((i) => (
            <Box key={i} sx={{ height: 12, width: '100%', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1, position: 'relative', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.random() * 60 + 30}%` }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: i * 0.2 }}
                style={{ height: '100%', background: color, opacity: 0.3 }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Ambient Glow */}
      <Box sx={{ 
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`,
        zIndex: 0
      }} />
    </Box>
  );
}
