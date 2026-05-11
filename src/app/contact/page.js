'use client';
import { useState } from 'react';
import { Box, Typography, Button, Container, Grid, TextField, CircularProgress } from '@mui/material';
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
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE, validatePhoneNumber } from '@/utils/countryCodes';
import CountryCodeSelector from '@/components/CountryCodeSelector';

const formatPhoneNumber = (countryCode, phone) => {
  const digits = String(phone || '').replace(/\D/g, '');
  if (!digits) return '';
  return `${countryCode} ${digits}`.trim();
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phoneCountryCode: DEFAULT_COUNTRY_CODE,
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [alert, setAlert] = useState({ open: false, title: '', message: '', type: 'success' });
  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const getPhoneValidationMessage = (country) => {
    if (!country) {
      return 'Please enter a valid phone number.';
    }

    const expectedDigits = typeof country.digits === 'number'
      ? `${country.digits}`
      : `${country.digits?.min || ''}${country.digits?.max ? `-${country.digits.max}` : ''}`;

    return `Please enter a valid ${country.country} phone number (${country.code}${expectedDigits ? `, ${expectedDigits} digits` : ''}).`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {};
    const selectedCountry = COUNTRY_CODES.find((country) => country.code === formState.phoneCountryCode) || COUNTRY_CODES[0];

    if (!formState.name.trim()) {
      nextErrors.name = 'Full name is required.';
    }

    if (!formState.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!validateEmail(formState.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formState.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    if (formState.phone.trim() && !validatePhoneNumber(formState.phone, selectedCountry?.isoCode)) {
      nextErrors.phone = getPhoneValidationMessage(selectedCountry);
    }

    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      return;
    }

    setFormErrors({});
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          company: formState.company,
          email: formState.email,
          phone: {
            countryCode: formState.phoneCountryCode,
            number: formState.phone,
            formatted: formatPhoneNumber(formState.phoneCountryCode, formState.phone)
          },
          message: formState.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormState({
          name: '',
          company: '',
          email: '',
          phoneCountryCode: DEFAULT_COUNTRY_CODE,
          phone: '',
          message: ''
        });
        setAlert({
          open: true,
          title: 'Message Sent!',
          message: "We've received your inquiry. Our team will get back to you within 24 hours.",
          type: 'success'
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || 'Server responded with an error');
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

    if (formErrors[e.target.name]) {
      setFormErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[e.target.name];
        return nextErrors;
      });
    }
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
            <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 9 } }}>
              <MotionBox variants={fadeInUp}>
                <Typography
                  sx={{
                    fontSize: { xs: '2.25rem', md: '4rem' },
                    fontWeight: 900,
                    lineHeight: 1,
                    mb: 1.5,
                    color: '#fff'
                  }}
                >
                  What are you waiting for?
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '2.25rem', md: '4rem' },
                    fontWeight: 900,
                    lineHeight: 1,
                    background: 'linear-gradient(90deg, #00C8FF 0%, #9061FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2.5
                  }}
                >
                  Enter the Next Generation.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
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

            <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
              {/* Form Section */}
              <Grid item xs={12} md={7.5}>
                <MotionBox 
                  variants={fadeInUp}
                  sx={{
                    p: { xs: 2.5, md: 4.5 },
                    borderRadius: '20px',
                    bgcolor: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, letterSpacing: '-0.02em', fontSize: { xs: '1.35rem', md: '1.55rem' } }}>
                    Send us a message
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2.25}>
                      <Grid item xs={12} sm={6}>
                        <CustomTextField 
                          label="Full Name" 
                          requiredLabel
                          placeholder="Your Name" 
                          fullWidth 
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          error={!!formErrors.name}
                          helperText={formErrors.name}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomTextField 
                          label="Company" 
                          requiredLabel={false}
                          placeholder="Your Company" 
                          fullWidth 
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <PhoneField
                          label="Phone Number"
                          value={formState.phone}
                          phoneCountryCode={formState.phoneCountryCode}
                          errorMessage={formErrors.phone}
                          onChange={(nextValue, nextCountryCode) => {
                            setFormState((prev) => ({
                              ...prev,
                              phone: nextValue,
                              phoneCountryCode: nextCountryCode,
                            }));
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <CustomTextField 
                          label="Email Address" 
                          requiredLabel
                          placeholder="user@example.com" 
                          fullWidth 
                          name="email"
                          value={formState.email}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          type="email"
                          error={!!formErrors.email}
                          helperText={formErrors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTextField 
                          label="Message" 
                          requiredLabel
                          placeholder="Tell us about your event..." 
                          multiline 
                          rows={4} 
                          fullWidth 
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          error={!!formErrors.message}
                          helperText={formErrors.message}
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
                      title={`Email ${env.contactEmail.split('@')[0] || 'solutions'}`} 
                      subtitle="Detailed inquiries"
                      href={`mailto:${env.contactEmail}`}
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

function PhoneField({ label, value, phoneCountryCode, errorMessage, onChange }) {
  const selectedCountry = COUNTRY_CODES.find((country) => country.code === phoneCountryCode) || COUNTRY_CODES.find((country) => country.code === DEFAULT_COUNTRY_CODE) || COUNTRY_CODES[0];
  const displayValue = value || '';

  return (
    <Box sx={{ mb: 1, width: '100%' }}>
      <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, mb: 1, color: 'rgba(255,255,255,0.7)' }}>
        {label}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          width: '100%',
          minWidth: 0,
          minHeight: '20px',
          borderRadius: '12px',
          bgcolor: 'rgba(255,255,255,0.05)',
          border: `1px solid ${errorMessage ? '#ff6b6b' : 'rgba(255,255,255,0.1)'}`,
          transition: 'all 0.3s ease',
          '&:focus-within': {
            borderColor: errorMessage ? '#ff6b6b' : '#00C8FF',
          }
        }}
      >
        <Box sx={{ flex: '0 0 auto', minWidth: { xs: 112, sm: 140 }, borderRight: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', px: 0.4, py: 0.15 }}>
          <CountryCodeSelector
            value={selectedCountry.isoCode}
            onChange={(nextIsoCode) => {
              const nextCountry = COUNTRY_CODES.find((country) => country.isoCode === nextIsoCode) || selectedCountry;
              onChange(displayValue, nextCountry.code);
            }}
          />
        </Box>

        <TextField
          value={displayValue}
          onChange={(e) => onChange(e.target.value.replace(/[^\d]/g, ''), selectedCountry.code)}
          variant="standard"
          type="tel"
          autoComplete="tel-national"
          placeholder="Phone number"
          InputProps={{ disableUnderline: true }}
          sx={{
            flex: 1,
            minWidth: 0,
            '& .MuiInputBase-input': {
              color: '#fff',
              fontSize: '0.9rem',
              py: 2.1,
              px: 1.7,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              lineHeight: 1.2,
              '&::placeholder': {
                color: 'rgba(255,255,255,0.3)',
                opacity: 1,
                textAlign: 'left',
              }
            },
            '& .MuiInputBase-input:-webkit-autofill, & .MuiInputBase-input:-webkit-autofill:hover, & .MuiInputBase-input:-webkit-autofill:focus, & .MuiInputBase-input:-webkit-autofill:active': {
              backgroundColor: 'rgba(255,255,255,0.05) !important',
              WebkitBoxShadow: '0 0 0 1000px rgba(255,255,255,0.05) inset !important',
              boxShadow: '0 0 0 1000px rgba(255,255,255,0.05) inset !important',
              WebkitTextFillColor: '#fff !important',
              caretColor: '#fff',
              transition: 'background-color 9999s ease-out 0s',
              borderRadius: '12px',
            }
          }}
        />
      </Box>

      {errorMessage ? (
        <Typography sx={{ color: '#ff6b6b', fontSize: '0.76rem', mt: 0.75, ml: 0.25 }}>
          {errorMessage}
        </Typography>
      ) : null}
    </Box>
  );
}

function CustomTextField({ label, requiredLabel = false, ...props }) {
  return (
    <Box sx={{ mb: 1 }}>
      {label ? (
        <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, mb: 1, color: 'rgba(255,255,255,0.7)' }}>
          {label}
          {requiredLabel ? <Box component="span" sx={{ color: '#00C8FF', ml: 0.5 }}>*</Box> : null}
        </Typography>
      ) : null}
      <TextField
        {...props}
        variant="standard"
        inputProps={{
          ...props.inputProps,
          autoComplete: props.name === 'email' ? 'email' : props.inputProps?.autoComplete,
        }}
        FormHelperTextProps={{
          sx: {
            color: '#ff6b6b',
            ml: 0,
            mt: 0.75,
            fontSize: '0.76rem',
          }
        }}
        InputProps={{
          disableUnderline: true,
          sx: {
            bgcolor: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            px: 2,
            py: 1.45,
            color: '#fff',
            fontSize: '0.9rem',
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
          },
          '& .MuiInputBase-input:-webkit-autofill, & .MuiInputBase-input:-webkit-autofill:hover, & .MuiInputBase-input:-webkit-autofill:focus, & .MuiInputBase-input:-webkit-autofill:active': {
            backgroundColor: 'rgba(255,255,255,0.05) !important',
            WebkitBoxShadow: '0 0 0 1000px rgba(255,255,255,0.05) inset !important',
            boxShadow: '0 0 0 1000px rgba(255,255,255,0.05) inset !important',
            WebkitTextFillColor: '#fff !important',
            caretColor: '#fff',
            transition: 'background-color 9999s ease-out 0s',
            borderRadius: '12px',
          },
          '& .MuiFormHelperText-root': {
            color: '#ff6b6b',
          },
        }}
      />
    </Box>
  );
}

function CustomSelectField({ children, ...props }) {
  return (
    <TextField
      {...props}
      select
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
      SelectProps={{
        MenuProps: {
          PaperProps: {
            sx: {
              bgcolor: '#071016',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 2,
            }
          }
        }
      }}
      sx={{
        '& .MuiInputBase-input': {
          py: 0,
        },
        '& .MuiSelect-icon': {
          color: 'rgba(255,255,255,0.75)',
        },
      }}
    >
      {children}
    </TextField>
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
