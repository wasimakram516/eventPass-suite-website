'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import BadgeIcon from '@mui/icons-material/Badge';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import TranslateIcon from '@mui/icons-material/Translate';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { MotionBox, fadeInUp, staggerContainer } from './Animations';

const services = [
  {
    title: 'Smart QR Check-In',
    description:
      'Scan QR codes, print labels manually, or check-in on the spot. Verification takes seconds, not minutes.',
    icon: <QrCodeScannerIcon sx={{ fontSize: 26 }} />,
    highlight: false,
  },
  {
    title: 'On-Site Badge Printing',
    description:
      'Self-service kiosks let visitors register, check-in, and print their badge — all in one seamless on-site flow.',
    icon: <BadgeIcon sx={{ fontSize: 26 }} />,
    highlight: false,
  },
  {
    title: 'Real-Time Analytics',
    description:
      'Live dashboards with counters, charts and heat maps. Watch your event metrics incorporate instantly as your event unfolds.',
    icon: <QueryStatsIcon sx={{ fontSize: 26 }} />,
    highlight: true,
  },
  {
    title: 'Bilingual — EN & AR',
    description:
      'Public pages, surveys, and registration forms serve both English and Arabic audiences natively with full RTL support.',
    icon: <TranslateIcon sx={{ fontSize: 26 }} />,
    highlight: false,
  },
  {
    title: 'Role-Based Access',
    description:
      'Assign roles — super admin, admin, business staff — with module-level permissions and multi-event scoped boundaries.',
    icon: <SupervisorAccountIcon sx={{ fontSize: 26 }} />,
    highlight: false,
  },
  {
    title: 'Bulk Import & Export',
    description:
      'Upload registrations, questions, and participants via Excel. Export data, reports, and insights in one click.',
    icon: <ImportExportIcon sx={{ fontSize: 26 }} />,
    highlight: false,
  },
];

export default function AIFeaturesSection() {
  return (
    <Box
      component="section"
      id="modules"
      sx={{
        bgcolor: '#000000',
        py: { xs: 10, md: 14 },
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
        >
          {/* Header row */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              gap: { xs: 4, md: 6 },
              mb: { xs: 8, md: 10 },
            }}
          >
            <MotionBox variants={fadeInUp}>
              <Typography
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  mb: 2.5,
                }}
              >
                Our Services
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem', lg: '3.4rem' },
                  fontWeight: 900,
                  lineHeight: 1.15,
                  maxWidth: 700,
                  background: 'linear-gradient(90deg, #00C8FF 0%, #ffffff 50%, #c9b8ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Revolutionize Your Industry
                <br />
                with AI and Robotics
              </Typography>
            </MotionBox>

            <MotionBox variants={fadeInUp}>
              <Button
                variant="contained"
                sx={{
                  flexShrink: 0,
                  px: { xs: 4, md: 5 },
                  py: { xs: 1.4, md: 1.6 },
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderRadius: '100px',
                  background: '#00C8FF',
                  color: '#000',
                  boxShadow: '0 4px 18px rgba(0,200,255,0.3)',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    background: '#00b8ee',
                    boxShadow: '0 4px 22px rgba(0,200,255,0.45)',
                  },
                }}
              >
                Discover More
              </Button>
            </MotionBox>
          </Box>

          {/* Services grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: { xs: 3, md: 3.5 },
            }}
          >
            {services.map((service) => (
              <MotionBox
                key={service.title}
                variants={fadeInUp}
                sx={{
                  bgcolor: 'rgba(8,12,24,0.85)',
                  border: service.highlight
                    ? '1px solid rgba(0,200,255,0.3)'
                    : '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '4px',
                  p: { xs: 3, md: 3.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  '&:hover': {
                    borderColor: 'rgba(0,200,255,0.35)',
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '10px',
                    background: service.highlight
                      ? 'linear-gradient(135deg, #00C8FF 0%, #0086FF 100%)'
                      : 'rgba(0,200,255,0.1)',
                    border: service.highlight ? 'none' : '1px solid rgba(0,200,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: service.highlight ? '#fff' : '#00C8FF',
                    flexShrink: 0,
                    boxShadow: service.highlight
                      ? '0 6px 18px rgba(0,200,255,0.3)'
                      : 'none',
                  }}
                >
                  {service.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: '0.8rem', md: '0.83rem' },
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {service.description}
                </Typography>

                <Button
                  variant="text"
                  sx={{
                    color: '#00C8FF',
                    p: 0,
                    minWidth: 0,
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    alignSelf: 'flex-start',
                    '&:hover': {
                      bgcolor: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Learn More
                </Button>
              </MotionBox>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
