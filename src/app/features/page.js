'use client';
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { MotionBox, fadeInUp, staggerContainer } from '@/components/Animations';

// Icons
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LanguageIcon from '@mui/icons-material/Language';
import SecurityIcon from '@mui/icons-material/Security';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

const FeatureCard = ({ icon, title, description, color, children }) => (
  <MotionBox
    variants={fadeInUp}
    sx={{
      height: '100%',
      p: { xs: 3, md: 4 },
      borderRadius: '40px',
      bgcolor: 'rgba(255,255,255,0.02)',
      border: '1.5px solid rgba(255,255,255,0.12)',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      '&:hover': {
        bgcolor: 'rgba(255,255,255,0.04)',
        borderColor: `${color}`,
        transform: 'translateY(-12px)',
        boxShadow: `0 30px 60px rgba(0,0,0,0.6), 0 0 20px ${color}20`,
        '& .feature-visual': {
          scale: 1.05,
          opacity: 1,
        }
      }
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mb: 1, position: 'relative', zIndex: 1 }}>
      <Box sx={{ 
        width: 48, 
        height: 48, 
        borderRadius: '16px', 
        bgcolor: `${color}10`, 
        color: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${color}20`,
        boxShadow: `0 8px 20px ${color}15`,
        flexShrink: 0
      }}>
        {icon}
      </Box>
      <Typography variant="h5" sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: '#fff', fontSize: '1.3rem', lineHeight: 1.2 }}>
        {title}
      </Typography>
    </Box>

    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Box>

    <Box className="feature-visual" sx={{ 
      mt: 'auto', 
      height: 180, 
      width: '100%', 
      borderRadius: '24px', 
      overflow: 'hidden', 
      bgcolor: 'rgba(0,0,0,0.3)',
      border: '1px solid rgba(255,255,255,0.03)',
      position: 'relative',
      transition: 'all 0.5s ease',
      opacity: 0.8,
      zIndex: 1
    }}>
      {children}
    </Box>
  </MotionBox>
);

// --- Visual Components ---

const QRVisual = ({ color }) => (
  <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
    <Box sx={{ width: 100, height: 100, position: 'relative' }}>
      <Box sx={{ position: 'absolute', inset: 0, border: `2px solid ${color}`, borderRadius: '16px', opacity: 0.2 }} />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px', p: 1.5, height: '100%' }}>
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
            style={{ background: i % 2 === 0 ? color : 'rgba(255,255,255,0.1)', borderRadius: '2px' }}
          />
        ))}
      </Box>
      <motion.div
        animate={{ top: ['5%', '95%', '5%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', left: -15, right: -15, height: '2px', background: color, boxShadow: `0 0 15px ${color}`, zIndex: 2 }}
      />
      <Box sx={{ position: 'absolute', top: -5, left: -5, width: 20, height: 20, borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`, borderRadius: '4px 0 0 0' }} />
      <Box sx={{ position: 'absolute', bottom: -5, right: -5, width: 20, height: 20, borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}`, borderRadius: '0 0 4px 0' }} />
    </Box>
  </Box>
);

const BadgeVisual = ({ color }) => (
  <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
    <motion.div
      animate={{ y: [40, 0, 0, 40] }}
      transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
      style={{
        width: 70,
        height: 90,
        background: '#fff',
        borderRadius: '8px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
        position: 'relative'
      }}
    >
      <Box sx={{ width: '100%', height: 6, bgcolor: color, borderRadius: '4px 4px 0 0', position: 'absolute', top: 0, left: 0 }} />
      <Box sx={{ width: 25, height: 25, bgcolor: 'rgba(0,0,0,0.05)', borderRadius: '50%', mt: 1 }} />
      <Box sx={{ width: '80%', height: 4, bgcolor: 'rgba(0,0,0,0.05)', borderRadius: 2 }} />
      <Box sx={{ width: '50%', height: 3, bgcolor: 'rgba(0,0,0,0.03)', borderRadius: 2 }} />
      <Box sx={{ width: 30, height: 30, border: '1px solid rgba(0,0,0,0.05)', mt: 'auto', p: 0.5 }}>
        <Box sx={{ bgcolor: '#000', width: '100%', height: '100%', opacity: 0.1 }} />
      </Box>
    </motion.div>
    {/* Slot */}
    <Box sx={{ position: 'absolute', top: '40%', width: 100, height: 6, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }} />
  </Box>
);

const AnalyticsVisual = ({ color }) => (
  <Box sx={{ width: '100%', height: '100%', p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: color }} />
        <Box sx={{ width: 40, height: 4, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
      </Box>
      <Box sx={{ width: 30, height: 12, bgcolor: `${color}20`, borderRadius: 4, border: `1px solid ${color}40` }} />
    </Box>
    <Box sx={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 1.5, position: 'relative' }}>
      {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4].map((h, i) => (
        <Box key={i} sx={{ flex: 1, height: '100%', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${h * 100}%` }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', delay: i * 0.15 }}
            style={{ width: '100%', background: `linear-gradient(to top, ${color}20 0%, ${color} 100%)`, borderRadius: '6px 6px 0 0', opacity: 0.8 }}
          />
        </Box>
      ))}
    </Box>
  </Box>
);

const BilingualVisual = ({ color }) => (
  <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
    <Box sx={{ position: 'relative' }}>
      <motion.div
        animate={{ opacity: [0.1, 1, 0.1], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Typography sx={{ color: '#fff', fontSize: '2.5rem', fontWeight: 800, letterSpacing: -1 }}>EN</Typography>
      </motion.div>
    </Box>
    <Box sx={{ width: '1px', height: 60, bgcolor: 'rgba(255,255,255,0.1)', transform: 'rotate(20deg)' }} />
    <Box sx={{ position: 'relative' }}>
      <motion.div
        animate={{ opacity: [1, 0.1, 1], scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Typography sx={{ color: color, fontSize: '2.5rem', fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>عربي</Typography>
      </motion.div>
    </Box>
  </Box>
);

const RolesVisual = ({ color }) => (
  <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Box sx={{ position: 'relative', width: 120, height: 120 }}>
      {[1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            inset: i * 15,
            border: `1px solid ${i === 1 ? color : 'rgba(255,255,255,0.15)'}`,
            borderRadius: '50%',
            opacity: 1 - i * 0.2
          }}
        >
          <Box sx={{ width: 6, height: 6, bgcolor: i === 1 ? color : '#fff', borderRadius: '50%', position: 'absolute', top: -3, left: '50%', transform: 'translateX(-50%)' }} />
        </motion.div>
      ))}
      <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SecurityIcon sx={{ color: color, fontSize: '1.5rem', opacity: 0.5 }} />
      </Box>
    </Box>
  </Box>
);

const DataVisual = ({ color }) => (
  <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
    <Box sx={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: 60, height: 80, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', position: 'relative', bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Box sx={{ height: 10, bgcolor: color, opacity: 0.2, m: 1, borderRadius: 1 }} />
        <Box sx={{ height: 4, bgcolor: 'rgba(255,255,255,0.1)', m: 1, borderRadius: 1 }} />
      </Box>
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [-60, 60], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
          style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', background: color, boxShadow: `0 0 10px ${color}` }}
        />
      ))}
      <CloudSyncIcon sx={{ position: 'absolute', right: '15%', color: 'rgba(255,255,255,0.1)', fontSize: '2rem' }} />
    </Box>
  </Box>
);

const features = [
  {
    title: 'Smart QR Check-In',
    description: 'Scan QR codes, enter tokens manually, or create walk-ins on the spot. Verification takes seconds, not minutes.',
    icon: <QrCodeScannerIcon />,
    color: '#00b4ff',
    visual: (color) => <QRVisual color={color} />
  },
  {
    title: 'On-Site Badge Printing',
    description: 'Self-service kiosks let visitors register, check in, and print their badge — all in one seamless on-site flow.',
    icon: <LocalPrintshopIcon />,
    color: '#7b61ff',
    visual: (color) => <BadgeVisual color={color} />
  },
  {
    title: 'Real-Time Analytics',
    description: 'Live dashboards with counters, charts, and field-level distributions. Metrics recompute instantly as your event unfolds.',
    icon: <AssessmentIcon />,
    color: '#00dca0',
    visual: (color) => <AnalyticsVisual color={color} />
  },
  {
    title: 'Bilingual — EN \u0026 AR',
    description: 'Public pages, surveys, and registration forms serve both English and Arabic audiences natively, with full RTL support.',
    icon: <LanguageIcon />,
    color: '#ff7832',
    visual: (color) => <BilingualVisual color={color} />
  },
  {
    title: 'Role-Based Access',
    description: 'Four roles — superadmin, admin, business, staff — with module-level permissions and business-scoped boundaries.',
    icon: <SecurityIcon />,
    color: '#ff326d',
    visual: (color) => <RolesVisual color={color} />
  },
  {
    title: 'Bulk Import \u0026 Export',
    description: 'Upload registrations, questions, and participants via Excel. Export data, reports, and insights in one click.',
    icon: <CloudSyncIcon />,
    color: '#ffd232',
    visual: (color) => <DataVisual color={color} />
  }
];

export default function FeaturesPage() {
  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <Navbar />

      <Box sx={{ position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(0,180,255,0.06)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: '20%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(123,97,255,0.05)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0 }} />
      
      <PageHero 
        label="Platform Features"
        title={
          <Box component="span" sx={{ display: 'block' }}>
            Built for the ground. <br/>
            <Box component="span" sx={{ fontStyle: 'normal', background: 'linear-gradient(135deg, #00b4ff, #7b61ff, #00dca0, #ff7832)', WebkitBackgroundClip: 'text', WebkitBackgroundFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', display: 'inline-block' }}>Powered by the cloud</Box>
          </Box>
        }
        subtitle="A unified ecosystem designed for on-site reliability and cloud-scale data management."
        tags={['Cloud-Native', 'On-Site', 'Bilingual', 'Enterprise']}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, py: { xs: 8, md: 15 }, position: 'relative', zIndex: 1 }}>
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {features.map((f, i) => (
              <Grid item xs={12} sm={6} md={4} key={f.title}>
                <FeatureCard 
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                  color={f.color}
                >
                  {f.visual(f.color)}
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>

      <Footer />
    </Box>
  );
}
