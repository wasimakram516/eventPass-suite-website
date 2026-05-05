'use client';
import { useState } from 'react';
import { Box, Typography, Button, Container, Grid, TextField, IconButton, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionBox, fadeInUp, staggerContainer } from '@/components/Animations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CustomAlert from '@/components/CustomAlert';
import Loader from '@/components/Loader';
import env from '@/config/env';
import Link from 'next/link';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [alert, setAlert] = useState({ open: false, title: '', message: '', type: 'success' });
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formState.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');
    setStatus('loading');
    
    try {
      const FORM_ID = env.formspreeFormId || 'xldgjgkr';
      
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          company: formState.company,
          email: formState.email,
          message: formState.message,
          _subject: `New Inquiry: ${formState.company}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', company: '', email: '', message: '' });
        setAlert({
          open: true,
          title: 'Message Sent!',
          message: "We've received your inquiry. Our team will get back to you within 24 hours.",
          type: 'success'
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setAlert({
        open: true,
        title: 'Network Message',
        message: 'Your message was not sent. Please check your internet connection or try sending it again in a few moments.',
        type: 'error'
      });
      setStatus('idle');
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh', color: '#fff', overflow: 'hidden' }}>
      <Loader isLoading={status === 'loading'} text="Sending Message..." />
      <Navbar />
      
      <Box sx={{ pt: { xs: 15, md: 20 }, pb: 10, position: 'relative' }}>
        <Box sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(0, 200, 255, 0.07) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '30vw',
          height: '30vw',
          background: 'radial-gradient(circle, rgba(144, 97, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }} />
        
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, position: 'relative', zIndex: 1 }}>
          <MotionBox
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Header Section */}
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <MotionBox variants={fadeInUp}>
                <Typography
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4.5rem' },
                    fontWeight: 900,
                    lineHeight: 1,
                    mb: 2,
                    color: '#fff'
                  }}
                >
                  What are you waiting for?
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4.5rem' },
                    fontWeight: 900,
                    lineHeight: 1,
                    background: 'linear-gradient(90deg, #00C8FF 0%, #9061FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 4
                  }}
                >
                  Enter the Next Generation.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    color: 'rgba(255,255,255,0.6)',
                    maxWidth: '700px',
                    mx: 'auto',
                    lineHeight: 1.6
                  }}
                >
                  Talk to the team behind Oman's biggest events. We'll scope, demo and deploy — usually inside a week.
                </Typography>
              </MotionBox>
            </Box>

            <Grid container spacing={8} justifyContent="center">
              {/* Form Section */}
              <Grid item xs={12} md={7}>
                <MotionBox 
                  variants={fadeInUp}
                  sx={{
                    p: { xs: 3, md: 6 },
                    borderRadius: '24px',
                    bgcolor: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, letterSpacing: '-0.02em' }}>
                    Send us a message
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <CustomTextField 
                          label="Full Name" 
                          placeholder="John Doe" 
                          fullWidth 
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomTextField 
                          label="Company" 
                          placeholder="Your Company" 
                          fullWidth 
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTextField 
                          label="Email Address" 
                          placeholder="john@example.com" 
                          fullWidth 
                          name="email"
                          value={formState.email}
                          onChange={(e) => {
                            handleChange(e);
                            if (emailError) setEmailError('');
                          }}
                          required
                          type="email"
                          error={!!emailError}
                          helperText={emailError}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTextField 
                          label="Message" 
                          placeholder="Tell us about your event..." 
                          multiline 
                          rows={4} 
                          fullWidth 
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={status === 'loading'}
                          fullWidth
                          sx={{
                            px: { xs: 3.5, md: 5 },
                            py: { xs: 1.4, md: 1.8 },
                            fontSize: { xs: '0.72rem', md: '0.82rem' },
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            borderRadius: '100px',
                            background: '#00C8FF',
                            boxShadow: '0 6px 24px rgba(0,200,255,0.35)',
                            color: '#000',
                            transition: 'all 0.3s ease',
                            '&:hover': { 
                              background: '#00b8ee',
                              boxShadow: '0 8px 28px rgba(0,200,255,0.5)',
                              transform: 'translateY(-2px)'
                            },
                            '&:disabled': {
                              background: 'rgba(255,255,255,0.1)',
                              color: 'rgba(255,255,255,0.3)'
                            }
                          }}
                        >
                          {status === 'loading' ? (
                            <CircularProgress size={24} sx={{ color: '#000' }} />
                          ) : status === 'success' ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircleOutlineIcon sx={{ fontSize: '1.2rem' }} /> SENT SUCCESSFULLY
                            </Box>
                          ) : (
                            'SUBMIT INQUIRY'
                          )}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </MotionBox>
              </Grid>

              {/* Contact Methods Section */}
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <MotionBox variants={fadeInUp}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                      Direct Channels
                    </Typography>
                    
                    <ContactCard 
                      icon={<WhatsAppIcon />} 
                      title="WhatsApp us" 
                      subtitle="Quick responses"
                      href="https://wa.me/96877121757"
                    />
                    
                    <ContactCard 
                      icon={<MailOutlineIcon />} 
                      title="Email solutions@" 
                      subtitle="Detailed inquiries"
                      href="mailto:solutions@eventpass.om"
                    />

                    <Box sx={{ 
                      mt: 4, 
                      p: 4, 
                      borderRadius: '24px', 
                      background: 'linear-gradient(135deg, rgba(144, 97, 255, 0.1) 0%, rgba(0, 200, 255, 0.1) 100%)',
                      border: '1px solid rgba(0, 200, 255, 0.2)'
                    }}>
                      <Typography sx={{ fontWeight: 700, mb: 1 }}>Oman Office</Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                        TechnoPark, Ghala,<br />
                        Muscat Oman.<br />
                        CR: 1385457
                      </Typography>
                    </Box>
                  </MotionBox>
                </Box>
              </Grid>
            </Grid>
          </MotionBox>
        </Container>
      </Box>

      <Footer />
      <CustomAlert 
        open={alert.open} 
        handleClose={() => setAlert({ ...alert, open: false })}
        title={alert.title}
        message={alert.message}
        type={alert.type}
      />
    </Box>
  );
}

function CustomTextField({ label, ...props }) {
  return (
    <Box sx={{ mb: 1 }}>
      <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, mb: 1, color: 'rgba(255,255,255,0.7)' }}>
        {label}
      </Typography>
      <TextField
        {...props}
        variant="standard"
        InputProps={{
          disableUnderline: true,
          sx: {
            bgcolor: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            px: 2,
            py: 1.5,
            color: '#fff',
            fontSize: '0.95rem',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            '&:focus-within': {
              borderColor: '#00C8FF',
              bgcolor: 'rgba(0, 200, 255, 0.05)',
            }
          }
        }}
        sx={{
          '& .MuiInputBase-input::placeholder': {
            color: 'rgba(255,255,255,0.3)',
            opacity: 1,
          }
        }}
      />
    </Box>
  );
}

function ContactCard({ icon, title, subtitle, href }) {
  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      sx={{
        width: '100%',
        justifyContent: 'flex-start',
        textAlign: 'left',
        p: 2.5,
        mb: 2,
        borderRadius: '16px',
        bgcolor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: '#fff',
        textTransform: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: 'rgba(0, 200, 255, 0.08)',
          borderColor: '#00C8FF',
          transform: 'translateX(8px)'
        }
      }}
    >
      <Box sx={{ 
        width: 48, 
        height: 48, 
        borderRadius: '12px', 
        bgcolor: 'rgba(0, 200, 255, 0.1)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mr: 2,
        color: '#00C8FF'
      }}>
        {icon}
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>{title}</Typography>
        <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{subtitle}</Typography>
      </Box>
    </Button>
  );
}
