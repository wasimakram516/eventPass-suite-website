'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Divider,
  Dialog,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MonitorIcon from '@mui/icons-material/Monitor';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import AndroidIcon from '@mui/icons-material/Android';
import BatteryChargingFullOutlinedIcon from '@mui/icons-material/BatteryChargingFullOutlined';
import WallpaperOutlinedIcon from '@mui/icons-material/WallpaperOutlined';
import BrightnessHighOutlinedIcon from '@mui/icons-material/BrightnessHighOutlined';
import FlipOutlinedIcon from '@mui/icons-material/FlipOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ScreenRotationOutlinedIcon from '@mui/icons-material/ScreenRotationOutlined';
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox, fadeInUp, staggerContainer } from '@/components/Animations';

// ─── Data ────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: 'Starter',
    price: '99',
    unit: 'OMR / Event',
    color: '#00C8FF',
    features: [
      'Event Registration Page with Check-in (RSVP)',
      'WhatsApp & email invitation functionality',
      'QR code check-in scanner',
      'Basic attendee dashboard',
    ],
  },
  {
    name: 'Pro',
    price: '299',
    unit: 'OMR / Event',
    color: '#7b61ff',
    popular: true,
    features: [
      'Everything in Starter',
      'VoteCast live polls',
      'StageQ for panel talks',
      'Live audience engagement tools',
      'Real-time analytics dashboard',
    ],
  },
  {
    name: 'Tailored',
    price: 'Custom',
    unit: 'Quote',
    color: '#00dca0',
    features: [
      'Everything in Pro',
      'Unlimited scanners & custom workflows',
      'Unlimited engagement points (polls, games, tracking)',
      'Custom branding & white-label options',
      'Detailed post-event analytics report',
    ],
  },
];

const products = [
  {
    name: 'AdVantage+',
    price: '60 OMR / day',
    image: '/images/products/advantage-plus.png',
    description: 'Our flagship product — a portable advertising machine that looks good in every setting and is easy to set up and move around.',
    specs: [
      { title: '43" Inch Display', detail: 'High Definition Viewing Experience' },
      { title: 'Touch Screen Technology', detail: 'Ultra Responsive IR/PCAP Touch Technology' },
      { title: 'Cloud Based Management', detail: 'Change your content from anywhere, at any time' },
      { title: 'Android Based OS', detail: 'Use any application you need' },
    ],
  },
  {
    name: 'AdVantage Nomad',
    price: '60 OMR / day',
    image: '/images/products/advantage-nomad.png',
    description: 'Internal power supply and wheels so it can display without being plugged in for up to 12 hours continuously.',
    specs: [
      { title: 'Battery Pack', detail: '8 to 12 hours of charge' },
      { title: 'Touch Screen Technology', detail: 'Ultra Responsive IR/PCAP Touch Technology' },
      { title: 'Cloud Based Management', detail: 'Change your content from anywhere, at any time' },
      { title: 'Android Based OS', detail: 'Use any application you need' },
    ],
  },
  {
    name: 'AdVantage Kiosk',
    price: '80 OMR / day',
    image: '/images/products/advantage-kiosk.png',
    description: 'Touch screen, tab-style kiosk — great for getting viewers to interact and engage at an exhibition or on actual premises.',
    specs: [
      { title: '43" Inch Display', detail: 'High Definition Viewing Experience' },
      { title: 'Touch Screen Technology', detail: 'Ultra Responsive IR/PCAP Touch Technology' },
      { title: 'Cloud Based Management', detail: 'Change your content from anywhere, at any time' },
      { title: 'Android Based OS', detail: 'Use any application you need' },
    ],
  },
  {
    name: 'AdMount',
    price: '60 OMR / day',
    image: '/images/products/advantage-mount.png',
    description: 'Our range of wall-mounted advertising displays in multiple sizes and orientations as per your requirement.',
    specs: [
      { title: 'Wall Brackets', detail: 'For seamless mounting' },
      { title: 'Touch Screen Technology', detail: 'Ultra Responsive IR/PCAP Touch Technology' },
      { title: 'Cloud Based Management', detail: 'Change your content from anywhere, at any time' },
      { title: 'Android Based OS', detail: 'Use any application you need' },
    ],
  },
  {
    name: 'AdFrame',
    price: 'Contact Us',
    image: '/images/products/advantage-frame.png',
    description: 'Wall-mounted advertising displays with a wooden frame for a cleaner aesthetic in multi-use cases.',
    specs: [
      { title: 'Wall Brackets', detail: 'For seamless mounting' },
      { title: 'Touch Screen Technology', detail: 'Ultra Responsive IR/PCAP Touch Technology' },
      { title: 'Cloud Based Management', detail: 'Change your content from anywhere, at any time' },
      { title: 'Android Based OS', detail: 'Use any application you need' },
    ],
  },
  {
    name: 'AdHang',
    price: 'Contact Us',
    image: '/images/products/adhang.png',
    description: 'Dual-sided hanging displays — great for retail and fashion environments, with content changeable on both sides.',
    specs: [
      { title: 'High Brightness', detail: '700 nits' },
      { title: 'Double-sided Displays', detail: 'Your content on both sides' },
      { title: 'Cloud Based Management', detail: 'Change your content from anywhere, at any time' },
    ],
  },
  {
    name: 'Self Service Kiosk',
    price: 'Contact Us',
    image: '/images/products/self-service-kiosk.png',
    description: 'Our self-service kiosks can be fully customised to meet any and all of your operational needs.',
    specs: [
      { title: 'Custom Peripherals', detail: 'Card Reader, QR Code & scanner POS Custom Solutions Development on request' },
      { title: 'Custom OS', detail: 'Android or Windows' },
    ],
  },
  {
    name: 'Rotary Kiosk',
    price: '100 OMR / day',
    image: '/images/products/rotary-kiosk.png',
    description: 'With rotating screens and a smart controller to automatically change brand media based on the time of day.',
    specs: [
      { title: 'Rotating Screen', detail: 'Easily change your orientation based on your needs' },
      { title: 'Touch Screen Technology', detail: 'Ultra Responsive IR/PCAP Touch Technology' },
      { title: 'Cloud Based Management', detail: 'Change your content from anywhere, at any time' },
      { title: 'Android Based OS', detail: 'Use any application you need' },
    ],
  },
  {
    name: 'Digital Whiteboard',
    price: '100 OMR / day',
    image: '/images/products/digital-whiteboard.png',
    description: 'Large interactive board great for demonstrations in classrooms or boardrooms alike, compatible with all kinds of apps.',
    specs: [
      { title: 'Windows OS', detail: 'Unlimited flexibility of Windows' },
      { title: 'Custom Screen & Stand', detail: 'Unlimited screen and stand combos (100"+)' },
      { title: 'Custom Chipset', detail: 'Unlimited chipset, OS and peripheral options' },
    ],
  },
  {
    name: 'AdStand',
    price: '80 OMR / day',
    image: '/images/products/adstand.png',
    description: 'Interactive standing display, portable and integration-ready — display content anywhere at your convenience.',
    specs: [
      { title: 'Touch Screen Technology', detail: 'Ultra Responsive IR/PCAP Touch Technology' },
      { title: 'Cloud Based Management', detail: 'Change your content from anywhere, at any time' },
      { title: 'Android Based OS', detail: 'Use any application you need' },
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const PlanCard = ({ plan }) => (
  <MotionBox
    variants={fadeInUp}
    sx={{
      position: 'relative',
      flex: '1 1 300px',
      maxWidth: { xs: '100%', sm: 370 },
      borderRadius: '28px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      border: `1px solid ${plan.popular ? plan.color + '60' : 'rgba(255,255,255,0.08)'}`,
      bgcolor: plan.popular ? `${plan.color}08` : 'rgba(255,255,255,0.02)',
      boxShadow: plan.popular
        ? `0 0 0 1px ${plan.color}20, 0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${plan.color}14`
        : '0 4px 24px rgba(0,0,0,0.3)',
      transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      '&:hover': {
        transform: 'translateY(-8px)',
        borderColor: plan.color + '90',
        boxShadow: `0 0 0 1px ${plan.color}30, 0 32px 80px rgba(0,0,0,0.5), 0 0 50px ${plan.color}20`,
      },
    }}
  >
    {/* Accent gradient top bar */}
    <Box sx={{
      height: 4,
      background: `linear-gradient(90deg, ${plan.color}00, ${plan.color}, ${plan.color}00)`,
    }} />

    {/* Card content */}
    <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>

      {/* Header: plan name + popular badge */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '0.78rem',
            color: plan.color,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          {plan.name}
        </Typography>
        {plan.popular && (
          <Chip
            label="Most Popular"
            size="small"
            sx={{
              bgcolor: `${plan.color}20`,
              color: plan.color,
              border: `1px solid ${plan.color}50`,
              fontWeight: 700,
              fontSize: '0.65rem',
              letterSpacing: '0.06em',
              height: 22,
            }}
          />
        )}
      </Box>

      {/* Price */}
      <Box>
        {plan.price === 'Custom' ? (
          <Typography
            sx={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: '2.8rem',
              color: '#fff',
              lineHeight: 1,
              mb: 0.5,
            }}
          >
            Custom
          </Typography>
        ) : (
          <Stack direction="row" spacing={0} sx={{ alignItems: 'flex-start', mb: 0.5 }}>
            <Typography
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                fontSize: '1.1rem',
                color: 'text.disabled',
                mt: 0.8,
                mr: 0.5,
              }}
            >
              OMR
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '3.8rem',
                color: '#fff',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              {plan.price}
            </Typography>
          </Stack>
        )}
        <Typography variant="caption" sx={{ letterSpacing: '0.05em' }}>
          {plan.price === 'Custom' ? 'Tailored to your needs' : 'per event · no subscription'}
        </Typography>
      </Box>

      <Divider />

      {/* Features */}
      <Stack spacing={1.6} sx={{ flex: 1 }}>
        {plan.features.map((f) => (
          <Stack key={f} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                bgcolor: `${plan.color}18`,
                border: `1px solid ${plan.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                mt: '1px',
              }}
            >
              <CheckCircleOutlinedIcon sx={{ color: plan.color, fontSize: '0.72rem' }} />
            </Box>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem', lineHeight: 1.55 }}>
              {f}
            </Typography>
          </Stack>
        ))}
      </Stack>

      {/* CTA */}
      <Button
        component={Link}
        href="/contact"
        fullWidth
        sx={{
          py: 1.5,
          borderRadius: '14px',
          fontWeight: 700,
          fontSize: '0.875rem',
          textTransform: 'none',
          letterSpacing: '0.02em',
          mt: 'auto',
          ...(plan.popular
            ? {
                background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`,
                color: '#000',
                boxShadow: `0 4px 20px ${plan.color}40`,
                '&:hover': { boxShadow: `0 8px 30px ${plan.color}55`, opacity: 0.92 },
              }
            : {
                bgcolor: 'rgba(255,255,255,0.04)',
                color: plan.color,
                border: `1px solid ${plan.color}40`,
                '&:hover': { bgcolor: `${plan.color}10`, borderColor: plan.color },
              }),
        }}
      >
        {plan.price === 'Custom' ? 'Get a Custom Quote' : 'Get Started'}
      </Button>
    </Box>
  </MotionBox>
);

const ProductCard = ({ product, onViewDetails }) => {
  const isContact = product.price === 'Contact Us';
  return (
    <MotionBox
      variants={fadeInUp}
      sx={{
        width: { xs: '100%', sm: 280 },
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.07)',
        bgcolor: '#0a0f1e',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
        '&:hover': {
          transform: 'translateY(-6px)',
          border: '1px solid rgba(0,200,255,0.3)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,200,255,0.1)',
          '& .card-image-bg': { bgcolor: '#ffffff' },
          '& .view-details-row': { color: '#00C8FF', bgcolor: 'rgba(0,200,255,0.06)' },
        },
      }}
    >
      {/* Image area */}
      <Box
        className="card-image-bg"
        sx={{
          position: 'relative',
          height: 210,
          bgcolor: '#f5f6f7',
          transition: 'background-color 0.35s',
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="280px"
          style={{ objectFit: 'contain', padding: '20px' }}
        />
        {/* Gradient fade into card body */}
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 48,
          background: 'linear-gradient(to bottom, transparent, #0a0f1e)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />
        {/* Price badge — top right */}
        <Box sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 2,
          px: 1.2,
          py: 0.4,
          borderRadius: '8px',
          bgcolor: isContact ? 'rgba(30,30,40,0.78)' : 'rgba(0,10,20,0.78)',
          border: `1px solid ${isContact ? 'rgba(255,255,255,0.14)' : 'rgba(0,200,255,0.35)'}`,
          backdropFilter: 'blur(8px)',
        }}>
          <Typography sx={{
            fontSize: '0.7rem',
            fontWeight: 700,
            color: isContact ? 'rgba(255,255,255,0.55)' : '#00C8FF',
            letterSpacing: '0.04em',
            lineHeight: 1,
          }}>
            {product.price}
          </Typography>
        </Box>
      </Box>

      {/* Info area */}
      <Box sx={{ p: 2.5, pt: 1.5, display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: '1.02rem',
            color: 'text.primary',
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </Typography>
        {product.description && (
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: 'text.secondary',
              lineHeight: 1.65,
              flex: 1,
              opacity: 0.8,
            }}
          >
            {product.description}
          </Typography>
        )}
      </Box>

      {/* View Details — bottom action row */}
      <Box
        className="view-details-row"
        onClick={onViewDetails}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2.5,
          py: 1.4,
          cursor: 'pointer',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          color: 'rgba(255,255,255,0.38)',
          fontSize: '0.76rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          transition: 'all 0.2s',
        }}
      >
        <span>View Details</span>
        <Box component="span" sx={{ fontSize: '1rem', lineHeight: 1, transition: 'transform 0.2s', '.view-details-row:hover &': { transform: 'translateX(3px)' } }}>→</Box>
      </Box>
    </MotionBox>
  );
};

const SPEC_ICONS = {
  'display':    <MonitorIcon sx={{ fontSize: '1rem' }} />,
  'touch':      <TouchAppOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'cloud':      <CloudOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'android':    <AndroidIcon sx={{ fontSize: '1rem' }} />,
  'battery':    <BatteryChargingFullOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'wall':       <WallpaperOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'brightness': <BrightnessHighOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'double':     <FlipOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'peripheral': <DevicesOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'os':         <SettingsOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'rotat':      <ScreenRotationOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'windows':    <LaptopWindowsOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'screen':     <AspectRatioOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'chipset':    <MemoryOutlinedIcon sx={{ fontSize: '1rem' }} />,
  'custom':     <SettingsOutlinedIcon sx={{ fontSize: '1rem' }} />,
};

function specIcon(title) {
  const key = title.toLowerCase();
  for (const [word, icon] of Object.entries(SPEC_ICONS)) {
    if (key.includes(word)) return icon;
  }
  return <CalendarMonthOutlinedIcon sx={{ fontSize: '1rem' }} />;
}

// Decorative arc lines — approximates the wave pattern from the catalogue
const WaveDecoration = () => (
  <Box
    component="svg"
    viewBox="0 0 400 600"
    xmlns="http://www.w3.org/2000/svg"
    sx={{
      position: 'absolute',
      right: -40,
      bottom: -60,
      width: { xs: 260, md: 360 },
      height: 'auto',
      opacity: 0.18,
      pointerEvents: 'none',
    }}
  >
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <path
        key={i}
        d={`M ${320 - i * 38} 600 Q ${240 - i * 30} ${340 - i * 10} ${360 - i * 20} 0`}
        fill="none"
        stroke="white"
        strokeWidth="1.2"
      />
    ))}
  </Box>
);

const ProductDetailModal = ({ product, onClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  if (!product) return null;

  return (
    <Dialog
      open={Boolean(product)}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            width: fullScreen ? '100%' : '88vw',
            maxWidth: 1100,
            height: fullScreen ? '100%' : '82vh',
            maxHeight: fullScreen ? '100%' : 760,
            borderRadius: fullScreen ? 0 : '28px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            bgcolor: 'transparent',
            border: fullScreen ? 'none' : '1.5px solid rgba(0,200,255,0.35)',
            boxShadow: '0 0 0 1px rgba(0,200,255,0.12), 0 0 60px rgba(0,200,255,0.22), 0 40px 100px rgba(0,0,0,0.85)',
          },
        },
        backdrop: {
          sx: { backdropFilter: 'blur(10px)', bgcolor: 'rgba(0,0,0,0.8)' },
        },
      }}
    >
      {/* ── Left panel: specs ── */}
      <Box
        component={motion.div}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        sx={{
          flex: { xs: 'none', md: '0 0 44%' },
          bgcolor: '#09090f',
          position: 'relative',
          overflow: 'hidden',
          p: { xs: 4, md: 5 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 3,
          minHeight: { xs: 360, md: 'unset' },
        }}
      >
        <WaveDecoration />

        {/* Top: name + price badge */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
          >
            {/* Price badge */}
            <Box sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 1.5,
              py: 0.5,
              mb: 2,
              borderRadius: '8px',
              bgcolor: product.price === 'Contact Us' ? 'rgba(255,255,255,0.06)' : 'rgba(0,200,255,0.1)',
              border: `1px solid ${product.price === 'Contact Us' ? 'rgba(255,255,255,0.12)' : 'rgba(0,200,255,0.3)'}`,
            }}>
              <Typography sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: product.price === 'Contact Us' ? 'rgba(255,255,255,0.45)' : '#00C8FF',
                letterSpacing: '0.06em',
              }}>
                {product.price}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '1.8rem', md: '2.4rem' },
                color: '#fff',
                lineHeight: 1.1,
              }}
            >
              {product.name}
            </Typography>
          </motion.div>
        </Box>

        {/* Middle: specs */}
        <Stack spacing={0} sx={{ flex: 1, position: 'relative', zIndex: 1, justifyContent: 'center' }}>
          {product.specs.map((spec, idx) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.32, delay: 0.2 + idx * 0.07, ease: 'easeOut' }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  alignItems: 'flex-start',
                  py: 1.6,
                  borderBottom: idx < product.specs.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                {/* Icon */}
                <Box sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '8px',
                  bgcolor: 'rgba(0,200,255,0.08)',
                  border: '1px solid rgba(0,200,255,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00C8FF',
                  flexShrink: 0,
                  mt: '1px',
                }}>
                  {specIcon(spec.title)}
                </Box>

                {/* Text */}
                <Box>
                  <Typography sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    color: '#fff',
                    mb: 0.2,
                    lineHeight: 1.3,
                  }}>
                    {spec.title}
                  </Typography>
                  <Typography sx={{
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.42)',
                    lineHeight: 1.5,
                  }}>
                    {spec.detail}
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          ))}
        </Stack>

        {/* Bottom: CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.5, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <Button
            component={Link}
            href="/contact"
            onClick={onClose}
            fullWidth
            sx={{
              py: 1.4,
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.85rem',
              textTransform: 'none',
              background: 'linear-gradient(135deg, #00C8FF, #0086FF)',
              color: '#000',
              boxShadow: '0 4px 20px rgba(0,200,255,0.3)',
              '&:hover': { opacity: 0.88, boxShadow: '0 8px 30px rgba(0,200,255,0.4)' },
            }}
          >
            {product.price === 'Contact Us' ? 'Get a Quote' : 'Enquire Now'}
          </Button>
        </motion.div>
      </Box>

      {/* ── Right panel: image ── */}
      <Box
        component={motion.div}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        sx={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: 260, md: 'unset' },
          overflow: 'hidden',
          // Radial spotlight — product photography feel
          background: 'radial-gradient(ellipse 70% 60% at 50% 44%, #ffffff 0%, #eef0f3 45%, #dde0e8 100%)',
        }}
      >

        {/* Product image */}
        <Box sx={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 900px) 100vw, 56vw"
            style={{ objectFit: 'contain', padding: '44px' }}
          />
        </Box>

        {/* Ground shadow under product */}
        <Box sx={{
          position: 'absolute',
          bottom: '10%',
          left: '20%',
          right: '20%',
          height: 24,
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, transparent 70%)',
          filter: 'blur(6px)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />
      </Box>

      {/* ── Close button ── */}
      <IconButton
        onClick={onClose}
        size="small"
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          bgcolor: '#ef4444',
          color: '#fff',
          zIndex: 20,
          '&:hover': { bgcolor: '#dc2626' },
        }}
      >
        <CloseIcon sx={{ fontSize: '1rem' }} />
      </IconButton>
    </Dialog>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh', color: '#fff', overflow: 'hidden', position: 'relative' }}>
      {/* Preload all product images so modals open instantly */}
      <Box sx={{ position: 'fixed', width: 0, height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none', zIndex: -1 }}>
        {products.map((p) => (
          <Image key={p.image} src={p.image} alt="" width={900} height={700} priority />
        ))}
      </Box>

      {/* Ambient blobs */}
      <Box sx={{ position: 'fixed', top: '5%', left: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,150,255,0.18) 0%, transparent 72%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <Box sx={{ position: 'fixed', bottom: '10%', right: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,97,255,0.14) 0%, transparent 72%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <Box sx={{ position: 'fixed', top: '45%', left: '40%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,220,160,0.08) 0%, transparent 72%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        <Box component="main" sx={{ pt: { xs: 12, md: 16 } }}>

          {/* ── Hero ── */}
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, pb: { xs: 8, md: 12 }, textAlign: 'center' }}>
            <MotionBox
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <MotionBox variants={fadeInUp}>
                <Chip
                  label="Pricing"
                  size="small"
                  sx={{ bgcolor: 'rgba(0,200,255,0.1)', color: '#00C8FF', border: '1px solid rgba(0,200,255,0.25)', fontWeight: 700, letterSpacing: '0.08em', mb: 3, fontSize: '0.72rem' }}
                />
              </MotionBox>
              <MotionBox variants={fadeInUp}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  Flexible Pricing for{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #00C8FF 0%, #7b61ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Every Event
                  </Box>
                </Typography>
              </MotionBox>
              <MotionBox variants={fadeInUp}>
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
                  From intimate RSVPs to large-scale multi-session conferences — we have a plan that fits.
                </Typography>
              </MotionBox>
            </MotionBox>
          </Container>

          {/* ── EventPass Plans ── */}
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, pb: { xs: 10, md: 16 } }}>
            <MotionBox
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <MotionBox variants={fadeInUp} sx={{ mb: 8, textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: '1.6rem', md: '2.2rem' },
                    mb: 1,
                  }}
                >
                  EventPass Plans
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem' }}>
                  Per-event pricing. No subscriptions, no lock-in.
                </Typography>
              </MotionBox>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 3,
                  justifyContent: 'center',
                  alignItems: 'stretch',
                }}
              >
                {plans.map((plan) => (
                  <PlanCard key={plan.name} plan={plan} />
                ))}
              </Box>
            </MotionBox>
          </Container>

          {/* ── Hardware Products ── */}
          <Box sx={{ bgcolor: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, py: { xs: 10, md: 16 } }}>
              <MotionBox
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <MotionBox variants={fadeInUp} sx={{ mb: 8, textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '1.6rem', md: '2.2rem' },
                      mb: 1,
                    }}
                  >
                    Hardware Solutions
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', maxWidth: 500, mx: 'auto' }}>
                    Elevate your venue with our range of advertising and display hardware — available for daily rental.
                  </Typography>
                </MotionBox>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    justifyContent: 'center',
                  }}
                >
                  {products.map((product) => (
                    <ProductCard
                      key={product.name}
                      product={product}
                      onViewDetails={() => setSelectedProduct(product)}
                    />
                  ))}
                </Box>
              </MotionBox>
            </Container>
          </Box>

          {/* ── CTA Strip ── */}
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, py: { xs: 10, md: 16 }, textAlign: 'center' }}>
            <MotionBox
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <MotionBox variants={fadeInUp}>
                <Typography
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: '1.6rem', md: '2.4rem' },
                    mb: 2,
                  }}
                >
                  Not sure which plan fits?
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', mb: 5, maxWidth: 480, mx: 'auto' }}>
                  Talk to our team and we&apos;ll help you find the right fit for your event size and goals.
                </Typography>
              </MotionBox>
              <MotionBox variants={fadeInUp}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: '#00C8FF',
                      color: '#000',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textTransform: 'none',
                      px: 4,
                      py: 1.5,
                      borderRadius: '100px',
                      boxShadow: '0 4px 20px rgba(0,200,255,0.3)',
                      '&:hover': { bgcolor: '#00b8ee', boxShadow: '0 8px 28px rgba(0,200,255,0.4)' },
                    }}
                  >
                    Book a Demo
                  </Button>
                  <Button
                    component={Link}
                    href="/refund-policy"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'rgba(255,255,255,0.2)',
                      color: 'rgba(255,255,255,0.6)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      textTransform: 'none',
                      px: 4,
                      py: 1.5,
                      borderRadius: '100px',
                      '&:hover': { borderColor: 'rgba(255,255,255,0.45)', color: '#fff', bgcolor: 'rgba(255,255,255,0.04)' },
                    }}
                  >
                    View Refund Policy
                  </Button>
                </Stack>
              </MotionBox>
            </MotionBox>
          </Container>

        </Box>

        <Footer />
      </Box>

      {/* ── Product Detail Modal ── */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </Box>
  );
}
