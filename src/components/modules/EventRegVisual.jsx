'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function EventRegVisual({ color }) {
  const fields = ['Full Name', 'Email Address', 'Company / Organisation', 'Mobile Number'];

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2.25, md: 3 }
      }}
    >
      <Box sx={{ position: 'absolute', top: 12, right: 14, display: 'flex', gap: '4px' }}>
        <Box sx={{ fontSize: '0.5rem', fontWeight: 600, px: 1, py: 0.35, borderRadius: '4px', border: `1px solid rgba(0,180,255,.12)`, bgcolor: 'rgba(0,180,255,.12)', color }}>EN</Box>
        <Box sx={{ fontSize: '0.5rem', fontWeight: 600, px: 1, py: 0.35, borderRadius: '4px', border: '1px solid rgba(255,255,255,.12)', color: 'rgba(255,255,255,.35)' }}>AR</Box>
      </Box>

      <Box sx={{ width: '100%', maxWidth: 200, display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {fields.map((field) => (
          <Box
            key={field}
            sx={{
              height: 24,
              borderRadius: '8px',
              border: '1px solid rgba(0,180,255,.1)',
              bgcolor: 'rgba(0,180,255,.03)',
              display: 'flex',
              alignItems: 'center',
              px: 1.1,
              gap: 1,
              fontSize: '0.5rem',
              color: 'rgba(255,255,255,.45)'
            }}
          >
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: color, opacity: 0.4 }} />
            {field}
          </Box>
        ))}
      </Box>

      <Box sx={{ width: '100%', maxWidth: 200, mt: 1, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: 1, height: 6, borderRadius: '3px', bgcolor: 'rgba(255,255,255,.04)', mr: 1, overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '72%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            style={{ height: '100%', background: 'linear-gradient(90deg, #00b4ff, #66d4ff)', borderRadius: 3 }}
          />
        </Box>
        <Box sx={{ px: 1.6, py: 0.5, borderRadius: '8px', bgcolor: color, color: '#000', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.04em', flexShrink: 0 }}>
          Register →
        </Box>
      </Box>
    </Box>
  );
}
