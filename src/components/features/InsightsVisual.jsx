'use client';
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function InsightsVisual({ color }) {
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
      {/* Dashboard Mockup */}
      <Box sx={{ 
        width: '85%', 
        height: '75%', 
        bgcolor: 'rgba(0,0,0,0.4)', 
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.08)',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        zIndex: 1
      }}>
        {/* Stats Row */}
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          {[1, 2, 3].map((i) => (
            <Box key={i} sx={{ flex: 1, height: 40, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', p: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Box sx={{ height: 3, width: '40%', bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
              <Box sx={{ height: 5, width: '70%', bgcolor: color, opacity: 0.5, borderRadius: 2 }} />
            </Box>
          ))}
        </Box>

        {/* Chart Area */}
        <Box sx={{ flex: 1, width: '100%', position: 'relative', display: 'flex', alignItems: 'flex-end', gap: 1.5, px: 1 }}>
          {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h * 100}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
              style={{
                flex: 1,
                background: `linear-gradient(to top, ${color}20, ${color})`,
                borderRadius: '4px 4px 0 0',
                opacity: 0.8
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Floating Insights */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 12px',
          borderRadius: '10px',
          zIndex: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: color }} />
          <Box sx={{ width: 50, height: 4, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 2 }} />
        </Box>
      </motion.div>
    </Box>
  );
}
