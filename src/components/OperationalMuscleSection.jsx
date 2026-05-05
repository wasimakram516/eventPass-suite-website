'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import Image from 'next/image';
import RefreshIcon from '@mui/icons-material/Refresh';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DevicesIcon from '@mui/icons-material/Smartphone';
import PrintIcon from '@mui/icons-material/Print';
import QrCodeScannerIcon from '@mui/icons-material/QrCode';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { MotionBox, fadeInUp, staggerContainer, AnimatedNumber } from './Animations';

const hardwareItems = [
  { icon: <DevicesIcon sx={{ fontSize: 44, color: '#00D68F' }} />, label: 'Self-Check Kiosk', sub: 'IMMERSIVE • BRANDED CUSTOM' },
  { icon: <PrintIcon sx={{ fontSize: 44, color: '#00D68F' }} />, label: 'Badge Printer', sub: 'BADGE PRINTING UNDER 5 SECONDS' },
  { icon: <QrCodeScannerIcon sx={{ fontSize: 44, color: '#00D68F' }} />, label: 'QR Scanner', sub: 'DIGITIZED EVENT' },
  { icon: <PhotoCameraIcon sx={{ fontSize: 44, color: '#00D68F' }} />, label: 'AR Booth', sub: 'HANDHELD • BLUETOOTH 21" TOUCH' },
];

export default function OperationalMuscleSection() {
  const glossCardStyle = {
    p: 4,
    background: 'linear-gradient(135deg, rgba(20, 30, 60, 0.4) 0%, rgba(10, 10, 15, 0.7) 100%)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  };

  return (
    <Box component="section" sx={{ bgcolor: '#000', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
        >
          <MotionBox variants={fadeInUp}>
            <Typography
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 6,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              The operational{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #00C8FF 0%, #A033FF 50%, #FF33A8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                muscle.
              </Box>
            </Typography>
          </MotionBox>

          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <MotionBox variants={fadeInUp} sx={{ height: '100%' }}>
                <Paper sx={{ ...glossCardStyle, height: '100%' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                      fontFamily: 'inherit',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Smart Check-in, at any scale.
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.58)',
                      mb: 4,
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                    }}
                  >
                    QR scanning, self-service kiosks, on-demand badge printing and walk-in flows — all in
                    one queueing-free check-in stack.
                  </Typography>
                  <Box
                    sx={{
                      height: 380,
                      position: 'relative',
                      mb: 4,
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        flex: 1,
                        width: '100%',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.08)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: { xs: '-22%', md: 0 },
                          left: { xs: '-11%', md: '-10%' },
                          right: { xs: '5%', md: '-4%' },
                          bottom: { xs: '-20%', md: 0 },

                          '& img': {
                            objectFit: { xs: 'contain', md: 'cover' },
                            objectPosition: 'center',
                            transform: { xs: 'scale(1.2)', md: 'scale(1)' },
                          },
                        }}
                      >
                        <Image
                          src="/qr-mock-1.webp"
                          alt="QR Scanning Interface"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: 'relative',
                        flex: 1,
                        width: '100%',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.08)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Image
                        src="/qr-mock-2.webp"
                        alt="Kiosk Interface"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Box>
                  <Stack direction="row" spacing={1} flexWrap="nowrap" sx={{ overflow: 'hidden' }}>
                    {['QR SCAN', 'KIOSK', 'BADGE PRINT', 'WALK-IN'].map((tag) => (
                      <Box
                        key={tag}
                        sx={{
                          px: 1.5,
                          py: 0.6,
                          borderRadius: '30px',
                          bgcolor: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.8,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <Box 
                          sx={{ 
                            width: 6, 
                            height: 6, 
                            borderRadius: '50%', 
                            bgcolor: '#00C8FF',
                            boxShadow: '0 0 8px #00C8FF, 0 0 12px rgba(0, 200, 255, 0.4)'
                          }} 
                        />
                        <Typography
                          sx={{
                            fontSize: '0.62rem',
                            fontWeight: 500,
                            color: 'rgba(255,255,255,0.7)',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {tag}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </MotionBox>
            </Grid>

            {/* Right Column Grid */}
            <Grid item xs={12} lg={7}>
              <Grid container spacing={3}>
                {/* Real-time Analytics */}
                <Grid item xs={12}>
                  <MotionBox variants={fadeInUp}>
                    <Paper sx={glossCardStyle}>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.01em' }}>
                        Real-time Analytics
                      </Typography>
                      <Typography
                        sx={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.88rem', mb: 3, lineHeight: 1.5 }}
                      >
                        AI-powered crowd behavior insights and live dashboards — know what's working
                        while it's still happening.
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1.5, height: 100, mb: 2 }}>
                        {[40, 60, 45, 80, 50, 90, 70, 85, 60].map((h, i) => (
                          <MotionBox
                            key={i}
                            initial={{ height: 0, opacity: 0 }}
                            whileInView={{ height: `${h}%`, opacity: 0.6 + i * 0.05 }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            sx={{
                              flex: 1,
                              bgcolor: '#00C8FF',
                              borderRadius: '4px',
                            }}
                          />
                        ))}
                        <Box sx={{ ml: 'auto', textAlign: 'right', minWidth: '120px' }}>
                          <Typography sx={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', fontWeight: 800, letterSpacing: '0.05em' }}>
                            LIVE / SESSIONS
                          </Typography>
                          <Typography sx={{ 
                            fontSize: '2.2rem', 
                            fontWeight: 800, 
                            lineHeight: 1, 
                            my: 0.5,
                            display: 'flex',
                            justifyContent: 'flex-end'
                          }}>
                            <AnimatedNumber value={14302} />
                          </Typography>
                          <Typography sx={{ fontSize: '0.78rem', color: '#00D68F', fontWeight: 800 }}>
                            <Box component="span" sx={{ mr: 0.5 }}>▲</Box> 24% vs avg
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </MotionBox>
                </Grid>

                {/* Multilingual & Branded */}
                <Grid item xs={12} sm={6}>
                  <MotionBox variants={fadeInUp} sx={{ height: '100%' }}>
                    <Paper sx={{ ...glossCardStyle, height: '100%', pb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                        Multilingual<br />& Fully Branded
                      </Typography>
                      <Typography
                        sx={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.88rem', mt: 2, mb: 2.5, lineHeight: 1.5 }}
                      >
                        EN/AR out of the box, custom branding per event — your skin, not ours.
                      </Typography>
                      <Grid container spacing={1.5} marginTop={5}>
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              p: 1.5,
                              bgcolor: 'rgba(255,255,255,0.03)',
                              borderRadius: '12px',
                              border: '1px solid rgba(255,255,255,0.05)',
                              height: '80px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              sx={{ fontSize: '0.6rem', color: '#00C8FF', fontWeight: 800, letterSpacing: '0.05em' }}
                            >
                              EN
                            </Typography>
                            <Typography sx={{ fontSize: '1rem', fontWeight: 800 }}>Welcome</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              p: 1.5,
                              bgcolor: 'rgba(255,255,255,0.03)',
                              borderRadius: '12px',
                              border: '1px solid rgba(255,255,255,0.05)',
                              height: '80px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              textAlign: 'right',
                            }}
                          >
                            <Typography
                              sx={{ fontSize: '0.6rem', color: '#00C8FF', fontWeight: 800, letterSpacing: '0.05em' }}
                            >
                              AR
                            </Typography>
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1 }}>مرحباً</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </MotionBox>
                </Grid>

                {/* Email & WhatsApp */}
                <Grid item xs={12} sm={6}>
                  <MotionBox variants={fadeInUp}>
                    <Paper sx={glossCardStyle}>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.01em' }}>
                        Email & WhatsApp
                      </Typography>
                      <Typography
                        sx={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.88rem', mb: 3, lineHeight: 1.5 }}
                      >
                        Bulk outreach with delivery + open tracking on every channel.
                      </Typography>
                      <Stack spacing={1.5}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            bgcolor: 'rgba(255,255,255,0.03)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                          }}
                        >
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: 'rgba(0, 200, 255, 0.1)',
                              color: '#00C8FF',
                            }}
                          >
                            <MailOutlineIcon sx={{ fontSize: 18 }} />
                          </Box>
                          <Typography sx={{ fontSize: '0.88rem', flex: 1, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
                            invite → <AnimatedNumber value={12400} />
                          </Typography>
                          <Typography sx={{ fontSize: '0.82rem', color: '#00D68F', fontWeight: 800 }}>
                            98.2%
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            bgcolor: 'rgba(255,255,255,0.03)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                          }}
                        >
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: 'rgba(0, 214, 143, 0.1)',
                              color: '#00D68F',
                            }}
                          >
                            <RefreshIcon sx={{ fontSize: 18 }} />
                          </Box>
                          <Typography sx={{ fontSize: '0.88rem', flex: 1, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
                            reminder → <AnimatedNumber value={8150} />
                          </Typography>
                          <Typography sx={{ fontSize: '0.82rem', color: '#00D68F', fontWeight: 800 }}>
                            96.8%
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </MotionBox>
                </Grid>
              </Grid>
            </Grid>

            {/* Hardware Bar */}
            <Grid item xs={12}>
              <MotionBox variants={fadeInUp}>
                <Paper sx={glossCardStyle}>
                  <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.01em' }}>
                        Self-service Kiosks & Hardware.
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                        Software bundled with interactive hardware — kiosks, printers, scanners, AR
                        booths — installed and supported on-site.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Grid container spacing={2}>
                        {hardwareItems.map((item, idx) => (
                          <Grid item xs={6} sm={3} key={idx}>
                            <MotionBox
                              whileHover={{ y: -8, scale: 1.02 }}
                              sx={{
                                p: 3,
                                bgcolor: 'rgba(255,255,255,0.02)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                textAlign: 'center',
                                height: '160px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  bgcolor: 'rgba(0, 214, 143, 0.05)',
                                  borderColor: 'rgba(0, 214, 143, 0.2)',
                                },
                              }}
                            >
                              {item.icon}
                              <Typography sx={{ mt: 2, fontSize: '0.82rem', fontWeight: 800 }}>
                                {item.label}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: '0.58rem',
                                  color: 'rgba(255,255,255,0.4)',
                                  mt: 0.8,
                                  fontWeight: 700,
                                  letterSpacing: '0.05em',
                                }}
                              >
                                {item.sub}
                              </Typography>
                            </MotionBox>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </MotionBox>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}
