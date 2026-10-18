'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RelatedLinks from '@/components/RelatedLinks';
import { MotionBox, fadeInUp, staggerContainer } from '@/components/Animations';

const sections = [
  {
    title: 'EventPass as an Intermediary',
    content: `EventPass is a technology platform that enables event organisers to sell tickets and manage registrations digitally. EventPass, operated by WhiteWall Digital Solutions & Trading LLC, acts solely as an intermediary facilitating the transaction between the ticket purchaser and the event organiser.\n\nWhiteWall does not organise, host, or control any event listed on the platform. Accordingly, WhiteWall does not determine refund eligibility, approve or process refunds, or bear any financial liability arising from event cancellations, postponements, or attendee dissatisfaction.`,
  },
  {
    title: 'Organiser Refund Policy Governs',
    content: `All refund and cancellation rights for event tickets purchased through EventPass are determined exclusively by the event organiser's own refund policy. Before completing a ticket purchase, we strongly encourage you to review the refund policy of the organiser, which is typically available on the event registration page.\n\nRefund entitlements, timelines, processing methods, and any applicable deductions are entirely at the discretion of the event organiser, within the bounds of applicable Omani law.`,
  },
  {
    title: 'How to Request a Refund',
    content: `To request a refund for a ticket purchased through EventPass:\n\n• Contact the event organiser directly using the contact details provided on the event page or your registration confirmation.\n\n• Quote your booking reference number and the reason for your refund request.\n\n• Allow the organiser's stated processing timeline for a response.\n\nWhiteWall is not able to intervene in, expedite, or adjudicate refund disputes between attendees and event organisers. Any such disputes must be resolved directly with the organiser.`,
  },
  {
    title: 'WhiteWall Platform Fees',
    content: `Any platform or service fees charged by WhiteWall in connection with a ticket transaction are non-refundable unless otherwise stated at the point of purchase or required by applicable law.`,
  },
  {
    title: 'Event Cancellation or Postponement',
    content: `In the event that an organiser cancels or postpones an event, refund rights are governed by the organiser's policy and any commitments made at the time of ticket purchase.\n\nWhiteWall will, where operationally possible, facilitate communications from the organiser to registered attendees but is not liable for any financial loss resulting from event cancellation or postponement.`,
  },
  {
    title: 'Contact',
    content: `For general enquiries about the EventPass platform, you may contact us at:`,
    contactItems: [
      { label: 'Email',   value: 'solutions@whitewall.om',           href: 'mailto:solutions@whitewall.om', icon: <EmailOutlinedIcon sx={{ fontSize: '1rem' }} /> },
      { label: 'Address', value: 'TechnoPark, Ghala, Muscat, Oman',  href: null,                              icon: <LocationOnOutlinedIcon sx={{ fontSize: '1rem' }} /> },
    ],
    footer: 'For all ticket refund and cancellation matters, please contact your event organiser directly.',
  },
];

const WW_LINK = 'https://whitewall.om';
const WW_TEXT = 'WhiteWall Digital Solutions';

function linkifyWhiteWall(text) {
  const parts = text.split(WW_TEXT);
  if (parts.length === 1) return text;
  return parts.reduce((acc, part, i) => {
    if (i === 0) return [part];
    return [
      ...acc,
      <Box
        key={i}
        component="a"
        href={WW_LINK}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: '#00C8FF', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
      >
        {WW_TEXT}
      </Box>,
      part,
    ];
  }, []);
}

export default function RefundPolicyPage() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(i); },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh', color: '#fff', overflow: 'clip', position: 'relative' }}>
      {/* Ambient blobs */}
      <Box sx={{ position: 'fixed', top: '5%', left: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,150,255,0.14) 0%, transparent 72%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <Box sx={{ position: 'fixed', bottom: '15%', right: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,97,255,0.10) 0%, transparent 72%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        {/* ── Hero ── */}
        <Box
          sx={{
            pt: { xs: 14, md: 20 },
            pb: { xs: 8, md: 12 },
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
            <Button
              component={Link}
              href="/"
              startIcon={<ArrowBackIcon />}
              sx={{
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
                mb: 6,
                pl: 0,
                '&:hover': { color: '#00C8FF', bgcolor: 'transparent' },
              }}
            >
              Back to Home
            </Button>

            <MotionBox
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <MotionBox variants={fadeInUp}>
                <Chip
                  label="Legal"
                  size="small"
                  sx={{ bgcolor: 'rgba(0,200,255,0.1)', color: '#00C8FF', border: '1px solid rgba(0,200,255,0.25)', fontWeight: 700, letterSpacing: '0.08em', mb: 4, fontSize: '0.72rem' }}
                />
              </MotionBox>

              <MotionBox variants={fadeInUp}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: '2.4rem', sm: '3.5rem', md: '5rem' },
                    lineHeight: 1.05,
                    mb: 4,
                    maxWidth: 800,
                  }}
                >
                  Refund Policy
                </Typography>
              </MotionBox>

              <MotionBox variants={fadeInUp}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    EventPass by{' '}
                    <Box
                      component="a"
                      href="https://whitewall.om"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: '#00C8FF', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                      WhiteWall Digital Solutions
                    </Box>
                  </Typography>
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    Effective date: 19 June 2026
                  </Typography>
                </Stack>
              </MotionBox>
            </MotionBox>
          </Container>
        </Box>

        {/* ── Policy sections ── */}
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, py: { xs: 8, md: 14 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '260px 1fr' },
              gap: { xs: 0, lg: 10 },
              alignItems: 'start',
            }}
          >
            {/* Sticky sidebar nav */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'block' },
                position: 'sticky',
                top: 96,
                maxHeight: 'calc(100vh - 120px)',
                overflowY: 'auto',
              }}
            >
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00C8FF', mb: 3 }}>
                Contents
              </Typography>
              <Stack spacing={0.5}>
                {sections.map((s, i) => {
                  const isActive = activeSection === i;
                  return (
                    <Typography
                      key={s.title}
                      component="a"
                      href={`#section-${i}`}
                      sx={{
                        display: 'block',
                        color: isActive ? '#00C8FF' : 'rgba(255,255,255,0.45)',
                        fontSize: '0.82rem',
                        fontWeight: isActive ? 700 : 400,
                        lineHeight: 1.6,
                        textDecoration: 'none',
                        py: 0.4,
                        borderLeft: `2px solid ${isActive ? '#00C8FF' : 'rgba(255,255,255,0.08)'}`,
                        pl: 1.5,
                        transition: 'all 0.25s',
                        '&:hover': { color: '#00C8FF', borderLeftColor: '#00C8FF' },
                      }}
                    >
                      {i + 1}. {s.title}
                    </Typography>
                  );
                })}
              </Stack>
            </Box>

            {/* Main content */}
            <Box>
              {sections.map((section, i) => (
                <MotionBox
                  key={section.title}
                  id={`section-${i}`}
                  ref={(el) => { sectionRefs.current[i] = el; }}
                  component={motion.div}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  sx={{ mb: { xs: 7, md: 10 } }}
                >
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'baseline', mb: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#00C8FF',
                        letterSpacing: '0.1em',
                        opacity: 0.7,
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800,
                        fontSize: { xs: '1.3rem', md: '1.7rem' },
                        color: '#fff',
                        lineHeight: 1.2,
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Stack>

                  {section.content.split('\n\n').map((para, j) => (
                    <Typography
                      key={j}
                      component="p"
                      sx={{
                        color: 'rgba(255,255,255,0.82)',
                        fontSize: { xs: '0.92rem', md: '1rem' },
                        lineHeight: 1.9,
                        mb: 2,
                        whiteSpace: 'pre-line',
                        maxWidth: 780,
                      }}
                    >
                      {linkifyWhiteWall(para)}
                    </Typography>
                  ))}

                  {section.contactItems && (
                    <Stack spacing={1.8} sx={{ mt: 2, mb: 2, maxWidth: 560 }}>
                      {section.contactItems.map((item) => (
                        <Stack key={item.label} direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                          <Box sx={{ color: '#00C8FF', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                            {item.icon}
                          </Box>
                          {item.href ? (
                            <Box
                              component="a"
                              href={item.href}
                              sx={{
                                color: '#00C8FF',
                                fontSize: '0.92rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline', color: '#33D4FF' },
                              }}
                            >
                              {item.value}
                            </Box>
                          ) : (
                            <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem' }}>
                              {item.value}
                            </Typography>
                          )}
                        </Stack>
                      ))}
                    </Stack>
                  )}

                  {section.footer && (
                    <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', fontStyle: 'italic', mt: 1 }}>
                      {section.footer}
                    </Typography>
                  )}

                  {i < sections.length - 1 && (
                    <Divider sx={{ mt: { xs: 5, md: 8 }, borderColor: 'rgba(255,255,255,0.05)' }} />
                  )}
                </MotionBox>
              ))}

              {/* Contact block */}
              <Box
                sx={{
                  mt: 4,
                  p: { xs: 3, md: 5 },
                  borderRadius: '24px',
                  bgcolor: 'rgba(0,200,255,0.04)',
                  border: '1.5px solid rgba(0,200,255,0.15)',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 3,
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', mb: 0.5 }}>
                    Questions about this policy?
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem' }}>
                    Our support team is here to help.
                  </Typography>
                </Box>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  startIcon={<EmailOutlinedIcon />}
                  sx={{
                    bgcolor: '#00C8FF',
                    color: '#000',
                    fontWeight: 700,
                    textTransform: 'none',
                    px: 3.5,
                    py: 1.4,
                    borderRadius: '100px',
                    flexShrink: 0,
                    boxShadow: '0 4px 20px rgba(0,200,255,0.25)',
                    '&:hover': { bgcolor: '#00b8ee' },
                  }}
                >
                  Contact Support
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>

        <RelatedLinks to={['privacy', 'contact']} />
        <Footer />
      </Box>
    </Box>
  );
}
