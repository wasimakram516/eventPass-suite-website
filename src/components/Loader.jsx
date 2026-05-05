'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';

export default function Loader({ isLoading, text = "Initializing EventPass" }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          <Box sx={{ position: 'relative', width: 80, height: 80 }}>
            {/* Outer Ring */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                border: '2px solid rgba(0, 200, 255, 0.2)',
                borderRadius: '50%',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Animated Glow Ring */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                border: '2px solid transparent',
                borderTopColor: '#00C8FF',
                borderRadius: '50%',
                boxShadow: '0 -4px 12px rgba(0, 200, 255, 0.4)',
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Center Pulse */}
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 12,
                height: 12,
                backgroundColor: '#00C8FF',
                borderRadius: '50%',
                marginLeft: -6,
                marginTop: -6,
                boxShadow: '0 0 20px #00C8FF',
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Box>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{
                color: '#fff',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                background: 'linear-gradient(90deg, #fff, #00C8FF, #fff)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shine 2s linear infinite',
                '@keyframes shine': {
                  '0%': { backgroundPosition: '0% center' },
                  '100%': { backgroundPosition: '200% center' },
                },
              }}
            >
              {text}
            </Typography>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  );
}