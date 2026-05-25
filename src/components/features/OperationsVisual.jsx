'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function OperationsVisual({ color }) {
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
      {/* Badge Mockup */}
      <Box sx={{ 
        width: '60%', 
        height: '80%', 
        bgcolor: '#fff', 
        borderRadius: '12px',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1.5,
        boxShadow: `0 10px 30px ${color}30`,
        zIndex: 1,
        position: 'relative'
      }}>
        <Box sx={{ width: '100%', height: 6, bgcolor: color, borderRadius: '4px 4px 0 0', position: 'absolute', top: 0 }} />
        
        <Box sx={{ width: 40, height: 40, bgcolor: 'rgba(0,0,0,0.05)', borderRadius: '50%', mt: 2 }} />
        <Box sx={{ width: '80%', height: 6, bgcolor: 'rgba(0,0,0,0.05)', borderRadius: 3 }} />
        <Box sx={{ width: '50%', height: 4, bgcolor: 'rgba(0,0,0,0.03)', borderRadius: 3 }} />
        
        <Box sx={{ width: 50, height: 50, border: '1px solid rgba(0,0,0,0.1)', p: 0.5, mt: 'auto', mb: 1, borderRadius: '4px' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', height: '100%' }}>
            {Array.from({ length: 16 }).map((_, i) => (
              <Box key={i} sx={{ bgcolor: i % 3 === 0 ? '#000' : 'transparent', opacity: 0.8 }} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Floating Elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '15%',
          background: color,
          color: '#000',
          padding: '6px 12px',
          borderRadius: '100px',
          fontSize: '0.65rem',
          fontWeight: 800,
          zIndex: 2
        }}
      >
        EN / AR
      </motion.div>

      <motion.div
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 16px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          zIndex: 2
        }}
      >
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#00dca0' }} />
        <Box sx={{ width: 40, height: 3, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 2 }} />
      </motion.div>
    </Box>
  );
}
