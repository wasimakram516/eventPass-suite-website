'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { 
  CheckBoxOutlineBlank,
  CropFree as RegisterIcon, 
  Check as CheckInIcon, 
  Campaign as EngageIcon, 
  Insights as AnalyseIcon 
} from '@mui/icons-material';
import { MotionBox, fadeInUp, staggerContainer } from './Animations';

const steps = [
  {
    step: 'STEP 01',
    title: 'Register',
    description: 'Branded, multilingual forms with payments, ticketing and tiered access — embedded or hosted.',
    icon: <RegisterIcon sx={{ fontSize: '1.8rem', color: '#00C8FF' }} />,
    tags: ['REGISTRATION', 'FORMS', 'PAYMENTS']
  },
  {
    step: 'STEP 02',
    title: 'Check In',
    description: 'QR, kiosk and walk-in flows. Print badges on demand. Move thousands an hour without queues.',
    icon: <CheckInIcon sx={{ fontSize: '1.8rem', color: '#00C8FF' }} />,
    tags: ['QR', 'KIOSK', 'BADGES']
  },
  {
    step: 'STEP 03',
    title: 'Engage',
    description: 'Polls, Q&A, photo walls, quizzes, leaderboards and AR booths — every interaction is a data point.',
    icon: <EngageIcon sx={{ fontSize: '1.8rem', color: '#00C8FF' }} />,
    tags: ['POLLS', 'GAMES', 'PHOTO WALL']
  },
  {
    step: 'STEP 04',
    title: 'Analyse',
    description: 'AI-powered behaviour insights, ROI reports and post-event surveys — auto-generated for every stakeholder.',
    icon: <AnalyseIcon sx={{ fontSize: '1.8rem', color: '#00C8FF' }} />,
    tags: ['ANALYTICS', 'SURVEYS', 'ROI']
  }
];

export default function RSVPNStepSection() {
  return (
    <Box component="section" sx={{ bgcolor: '#000', color: '#fff', py: { xs: 8, md: 15 }, position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Glow */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 100, 255, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
      }} />

      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, position: 'relative', zIndex: 1 }}>
        
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
        >
          {/* Header */}
          <MotionBox variants={fadeInUp}>
            <Typography sx={{ 
              fontSize: { xs: '2.5rem', md: '4.5rem' }, 
              fontWeight: 800, 
              mb: 10, 
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '800px'
            }}>
              From RSVP to ROI<br />
              in <Box component="span" sx={{ 
                background: 'linear-gradient(90deg, #FFFFFF 0%, #A033FF 50%, #00C8FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>four steps.</Box>
            </Typography>
          </MotionBox>

          {/* Steps Grid */}
          <Grid container spacing={4} sx={{ position: 'relative' }}>
            
            {/* Connecting Line (Desktop) */}
            <MotionBox
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                top: '127px',
                left: '40px',
                right: '40px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(0, 200, 255, 0.1) 0%, rgba(0, 200, 255, 0.5) 50%, rgba(0, 200, 255, 0.1) 100%)',
                zIndex: 0
              }}
            />

            {steps.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionBox variants={fadeInUp} sx={{ position: 'relative', zIndex: 1 }}>
                  
                  {/* Step Label */}
                  <Typography sx={{ 
                    color: '#00FFA3', 
                    fontSize: '1.1rem', 
                    fontWeight: 800, 
                    letterSpacing: '0.15em', 
                    mb: 4 
                  }}>
                    {item.step}
                  </Typography>

                  <Box sx={{ position: 'relative', mb: 3, display: 'inline-flex', alignItems: 'center' }}>
                    
                    {index > 0 && (
                      <MotionBox
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + (index * 0.2) }}
                        sx={{
                          position: 'absolute',
                          left: { xs: '-20px', md: '-38px' },
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          bgcolor: '#00C8FF',
                          boxShadow: '0 0 15px #00C8FF',
                          zIndex: 2,
                          display: { xs: 'none', md: 'block' }
                        }}
                      />
                    )}

                    <Box sx={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      border: '1px solid rgba(0, 200, 255, 0.3)',
                      bgcolor: 'rgba(0, 200, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)'
                    }}>
                      {item.icon}
                    </Box>
                  </Box>

                  {/* Content */}
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    {item.title}
                  </Typography>
                  
                  <Typography sx={{ 
                    color: 'rgba(255, 255, 255, 0.6)', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.6,
                    mb: 3,
                    minHeight: { md: '80px' }
                  }}>
                    {item.description}
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.tags.map((tag) => (
                      <Chip 
                        key={tag} 
                        label={tag} 
                        sx={{ 
                          bgcolor: 'rgba(255, 255, 255, 0.05)', 
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          height: '26px',
                          borderRadius: '13px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          cursor: 'default',
                          '& .MuiChip-label': { px: 1.5 },
                          '&:hover': {
                            bgcolor: 'rgba(0, 200, 255, 0.1)',
                            color: '#00C8FF',
                            borderColor: 'rgba(0, 200, 255, 0.4)',
                            boxShadow: '0 0 10px rgba(0, 200, 255, 0.2)',
                          }
                        }} 
                      />
                    ))}
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}