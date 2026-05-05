'use client';
import React from 'react';
import {
  Dialog,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const CustomAlert = ({ open, handleClose, title, message, type = 'success' }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: motion.div,
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 20 },
        sx: {
          bgcolor: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '32px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          maxWidth: '400px',
          width: '90%',
          margin: 'auto',
          overflow: 'hidden',
          backgroundImage: 'none',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        },
      }}
    >
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
          {type === 'success' ? (
            <CheckCircleOutlineIcon sx={{ fontSize: 64, color: '#00C8FF' }} />
          ) : (
            <ErrorOutlineIcon sx={{ fontSize: 64, color: '#FF4B4B' }} />
          )}
        </Box>

        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 800, 
            mb: 1.5, 
            color: '#fff',
            fontFamily: 'Sora'
          }}
        >
          {title}
        </Typography>

        <Typography 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.6)', 
            mb: 4, 
            lineHeight: 1.6,
            fontSize: '0.95rem'
          }}
        >
          {message}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          onClick={handleClose}
          sx={{
            bgcolor: type === 'success' ? '#00C8FF' : '#FF4B4B',
            color: '#000',
            fontWeight: 800,
            py: 1.8,
            borderRadius: '100px',
            textTransform: 'none',
            fontSize: '1rem',
            fontFamily: 'Plus Jakarta Sans',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: '#fff',
              transform: 'translateY(-2px)',
              boxShadow: type === 'success' 
                ? '0 10px 20px -5px rgba(0, 200, 255, 0.3)' 
                : '0 10px 20px -5px rgba(255, 75, 75, 0.3)',
            },
          }}
        >
          Close
        </Button>
      </Box>
    </Dialog>
  );
};

export default CustomAlert;