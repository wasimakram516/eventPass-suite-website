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
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MotionBox, fadeInUp, staggerContainer } from '@/components/Animations';

const sections = [
  {
    title: 'General Policy',
    content: `EventPass by WhiteWall Digital Solutions is committed to fair and transparent refund practices. This policy applies to all event registrations and software plan purchases made through the EventPass platform. By completing a purchase, you agree to the terms outlined in this policy.`,
  },
  {
    title: 'Eligible Refunds',
    content: `Refunds may be issued in the following circumstances:\n\n• Event Cancellation — If an event is officially cancelled by the organiser, registered attendees are entitled to a full refund.\n\n• Refund Window — Requests submitted within 48 hours of purchase and before the event date will be considered for a full refund.\n\n• Technical Errors — Where a duplicate charge or confirmed platform error has occurred, a full refund will be processed promptly upon verification.`,
  },
  {
    title: 'Non-Refundable Circumstances',
    content: `Refunds will not be issued in the following cases:\n\n• Personal reasons (change of mind, inability to attend, schedule conflicts).\n\n• Requests submitted after the event date or after the refund window has closed.\n\n• Registrations or tickets that have already been used for check-in.\n\n• Purchases made under promotional pricing or discount codes unless explicitly stated otherwise.`,
  },
  {
    title: 'Platform & Processing Fees',
    content: `Platform service fees and payment processing fees are non-refundable in all circumstances, except where a refund is issued due to a confirmed platform error or duplicate charge originating from our systems.`,
  },
  {
    title: 'Event Cancellation or Postponement',
    content: `In the event of an official cancellation by the organiser, refunds will be processed within 10 business days and attendees will be notified via the contact details provided at registration.\n\nIn the event of a postponement, registrations will automatically transfer to the new event date. Attendees may request a refund within 5 business days of the postponement announcement if the new date does not suit them.`,
  },
  {
    title: 'How to Request a Refund',
    content: `To request a refund, contact our support team at support@eventpass.om with the subject line: "Refund Request – [Event Name] – [Order ID]". Include your full name, registered email address, event name, and reason for the request.\n\nAll refund requests will be acknowledged within 2 business days and resolved within 10 business days of approval.`,
  },
  {
    title: 'Ticket Transfers',
    content: `If you are unable to attend an event, you may transfer your registration to another person provided the transfer request is submitted at least 48 hours before the event start time and the replacement attendee's details are provided in full.\n\nTo initiate a transfer, contact support@eventpass.om with your order details and the replacement attendee's information.`,
  },
  {
    title: 'Chargebacks & Payment Disputes',
    content: `We encourage customers to contact us directly at support@eventpass.om before initiating a chargeback with their bank or payment provider. Unauthorised chargebacks for valid purchases may result in account suspension.\n\nWhere a chargeback is found to be fraudulent or in violation of this policy, WhiteWall Digital Solutions reserves the right to pursue recovery through appropriate channels.`,
  },
  {
    title: 'Limitation of Liability',
    content: `WhiteWall Digital Solutions is not liable for any indirect, incidental, or consequential losses arising from event cancellations, postponements, or refund delays beyond our reasonable control, including but not limited to force majeure events, payment gateway outages, or third-party service disruptions.`,
  },
  {
    title: 'Consumer Rights',
    content: `Nothing in this policy is intended to override or limit your statutory rights under applicable consumer protection legislation in the Sultanate of Oman or any other jurisdiction where such rights apply. Where applicable law provides for broader refund rights, those rights will be honoured.`,
  },
  {
    title: 'Changes to This Policy',
    content: `WhiteWall Digital Solutions reserves the right to update this Refund Policy at any time. Changes will be published on this page with an updated effective date. Continued use of the EventPass platform following any changes constitutes acceptance of the revised policy.`,
  },
  {
    title: 'Contact Information',
    content: `For all refund-related enquiries:`,
    contactItems: [
      { label: 'Email',          value: 'support@eventpass.om',                       href: 'mailto:support@eventpass.om', icon: <EmailOutlinedIcon sx={{ fontSize: '1rem' }} /> },
      { label: 'Phone',          value: '+968 77121757',                              href: 'tel:+96877121757',            icon: <PhoneOutlinedIcon sx={{ fontSize: '1rem' }} /> },
      { label: 'Address',        value: 'TechnoPark, Ghala, Muscat, Oman',            href: null,                         icon: <LocationOnOutlinedIcon sx={{ fontSize: '1rem' }} /> },
      { label: 'Business hours', value: 'Sunday – Thursday, 9:00 AM – 6:00 PM (GST)', href: null,                        icon: <AccessTimeOutlinedIcon sx={{ fontSize: '1rem' }} /> },
    ],
    footer: 'We aim to respond to all enquiries within 2 business days.',
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
              href="/pricing"
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
              Back to Pricing
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
                    Last updated: 1 June 2026
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

        <Footer />
      </Box>
    </Box>
  );
}
