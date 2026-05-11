'use client';
import { Box, Typography, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

export default function ModuleCard({ name, icon, description, features, color, category, visual }) {
  return (
    <Box
      component={motion.div}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      sx={{
        height: '100%',
        borderRadius: '24px',
        bgcolor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        '&:hover': {
          bgcolor: 'rgba(255,255,255,0.05)',
          borderColor: `${color}60`,
          boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 30px ${color}20`,
        }
      }}
    >
      {/* Visual Area */}
      <Box sx={{
        height: { xs: 180, md: 170 },
        width: '100%',
        bgcolor: 'rgba(0,0,0,0.3)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {visual}
      </Box>

      <Box sx={{ p: { xs: 3, md: 4 }, pt: { xs: 2.5, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Category Tag */}
        <Box sx={{ mb: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 700,
              color: color,
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            {category}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Typography variant="h5" sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: '#fff', fontSize: '1.25rem' }}>
            {name}
          </Typography>
        </Box>

        <Typography sx={{ color: 'rgba(255,255,255,0.5)', mb: 3, fontSize: '0.85rem', lineHeight: 1.5, flex: 1 }}>
          {description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
          {features.map((feature) => (
            <Chip
              key={feature}
              label={feature}
              size="small"
              sx={{
                bgcolor: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.65rem',
                fontWeight: 600,
                height: 24,
                border: '1px solid rgba(255,255,255,0.05)',
                '&:hover': {
                  borderColor: color,
                  color: '#fff'
                }
              }}
            />
          ))}
        </Stack>

        {/* Decorative Glow */}
        <Box sx={{
          position: 'absolute',
          top: '-20%',
          right: '-20%',
          width: '150px',
          height: '150px',
          background: `radial-gradient(circle, ${color}10 0%, transparent 70%)`,
          zIndex: 0,
          pointerEvents: 'none'
        }} />
      </Box>
    </Box>
  );
}
