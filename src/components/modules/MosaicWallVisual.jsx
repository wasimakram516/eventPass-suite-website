'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function MosaicWallVisual({ color }) {
  const cells = [
    { icon: '📸', background: 'linear-gradient(135deg,#1a1528,#201835)' },
    { icon: '🤳', background: 'linear-gradient(135deg,#18202a,#152530)' },
    { icon: '🎉', background: 'linear-gradient(135deg,#201a28,#281a30)', span: true },
    { icon: '👥', background: 'linear-gradient(135deg,#1a2520,#183028)' },
    { icon: '✨', background: 'linear-gradient(135deg,#25201a,#302818)' },
    { icon: '🎯', background: 'linear-gradient(135deg,#1a1a28,#201840)' },
    { icon: '🎤', background: 'linear-gradient(135deg,#281a20,#351828)' },
    { icon: '🏆', background: 'linear-gradient(135deg,#1a2820,#183520)' },
    { icon: '📱', background: 'linear-gradient(135deg,#20201a,#282818)' }
  ];

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      p: 1.25,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 1
    }}>
      <Box sx={{
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: '0.48rem',
        fontWeight: 700,
        color: '#7b61ff',
        background: 'rgba(123,97,255,.15)',
        px: 1,
        py: 0.35,
        borderRadius: '10px',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: 0.5
      }}>
        <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#7b61ff' }} />
        Big Screen
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '4px',
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {cells.map((cell, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, zIndex: 2 }}
            style={{
              gridColumn: cell.span ? 'span 2' : 'span 1',
              gridRow: cell.span ? 'span 2' : 'span 1',
              background: cell.background,
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,100,255,.15), rgba(200,100,255,.05))', opacity: 0 }} />
            <Box sx={{ opacity: 0.3, fontSize: index === 2 ? '1.2rem' : '0.8rem', position: 'relative', zIndex: 1 }}>
              {cell.icon}
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
