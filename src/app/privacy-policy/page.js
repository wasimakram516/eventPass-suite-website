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
import { MotionBox, fadeInUp, staggerContainer } from '@/components/Animations';

const sections = [
  {
    title: 'Who We Are',
    content: `EventPass is a digital event management and ticketing platform operated by WhiteWall Digital Solutions & Trading LLC ("WhiteWall", "we", "us"), based in Muscat, Oman. EventPass acts solely as an intermediary technology platform enabling event organisers to sell tickets and manage attendance digitally. We are not the organiser of any event listed on the platform unless explicitly stated.`,
  },
  {
    title: 'What Data We Collect',
    content: `When you register for or purchase a ticket to an event through EventPass, we collect the personal information you provide, which may include your name, email address, phone number, and any additional fields requested by the event organiser as part of their registration form.`,
  },
  {
    title: 'How We Use Your Data',
    content: `WhiteWall uses your personal data strictly for the following operational and utilitarian purposes:\n\n• Issuing your ticket and managing your event registration.\n\n• Sending event reminders, entry confirmations, and attendance-related communications.\n\n• Internal research, analytics, and operational improvement of the EventPass platform.\n\n• Complying with applicable legal and regulatory obligations.\n\nWe do not sell, rent, or distribute your personal data to any third party for marketing or commercial purposes.`,
  },
  {
    title: 'Organiser Data Practices',
    content: `EventPass provides your registration data to the event organiser for the purpose of managing the event you have registered for. Any use of your data by the organiser — including for marketing communications or other purposes — is governed exclusively by the organiser's own privacy policy. WhiteWall is not responsible for, and has no control over, how individual event organisers handle your personal information beyond the scope of the event itself.\n\nWhiteWall takes reasonable internal measures to obtain confirmation that event organisers listing events on the EventPass platform have the legal right to do so. This may include reviewing organiser credentials, business documentation, or event authorisation as part of our onboarding process. However, WhiteWall does not guarantee or warrant the legal standing of any organiser and attendees are encouraged to exercise their own due diligence when registering for events.\n\nWe encourage you to review the privacy policy of the relevant event organiser before completing your registration.`,
  },
  {
    title: 'Your Rights Under Omani Law',
    content: `In accordance with the Personal Data Protection Law of the Sultanate of Oman (Royal Decree No. 6/2022), you have the right to request access to the personal data we hold about you. To submit a data access request, please contact us in writing at:`,
    contactItems: [
      { label: 'Address', value: 'TechnoPark, Ghala, Muscat, Oman', href: null, icon: <LocationOnOutlinedIcon sx={{ fontSize: '1rem' }} /> },
      { label: 'Data Protection Officer', value: 'solutions@whitewall.om', href: 'mailto:solutions@whitewall.om', icon: <EmailOutlinedIcon sx={{ fontSize: '1rem' }} /> },
    ],
    footer: 'We will acknowledge your request and respond within 45 days of receipt.',
  },
  {
    title: 'Data Deletion Requests',
    content: `You, or an event organiser, may request deletion of personal data held on the EventPass platform. However, please note the following important limitation:\n\nYour personal data cannot be deleted while it remains operationally required for an event — that is, while the event is active and you are booked to attend. This is necessary for operational integrity (entry management, verification) and to comply with our legal obligations as a registration / ticketing intermediary.\n\nOutside of this limitation, your personal data or an organiser's data on the platform will be deleted upon request, within 30 days of receipt of the request, provided there is no legal obligation requiring us to retain it. Examples of such obligations include:\n\n• Statutory record-keeping requirements under Omani tax, accounting, or commercial law.\n\n• Data subject to an ongoing legal dispute, audit, or regulatory investigation.\n\n• Data requested or required to be retained by a court order, law enforcement, or regulatory authority.\n\nWhere a legal retention obligation applies, we will inform you of the basis and the expected retention period.`,
  },
  {
    title: 'Data Security',
    content: `WhiteWall takes reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. Data is stored on secure, access-controlled infrastructure.`,
  },
  {
    title: 'Policy Updates',
    content: `We may update this Privacy Policy from time to time. The effective date at the top of this document will reflect any changes. Continued use of the EventPass platform following an update constitutes acceptance of the revised policy.`,
    footer: 'This policy applies to the EventPass platform operated by WhiteWall Digital Solutions & Trading LLC and does not govern the practices of individual event organisers. For event-specific data queries, please contact the organiser directly.',
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

export default function PrivacyPolicyPage() {
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
                  Privacy Policy
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
                    Our team is here to help.
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

        <Footer />
      </Box>
    </Box>
  );
}
