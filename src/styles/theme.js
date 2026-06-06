'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00C8FF',
      light: '#33D4FF',
      dark: '#008CB3',
    },
    secondary: {
      main: '#6C63FF',
    },
    background: {
      default: '#000000',
      paper: '#0a1020',
    },
    text: {
      primary: '#FFFFFF',        // headings, key labels
      secondary: '#C8D4E0',      // body text, descriptions
      disabled: 'rgba(255,255,255,0.45)', // captions, meta, timestamps
    },
  },
  typography: {
    fontFamily: '"Sora", "Plus Jakarta Sans", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em', color: '#FFFFFF' },
    h3: { fontWeight: 700, color: '#FFFFFF' },
    h4: { fontWeight: 600, color: '#FFFFFF' },
    h5: { fontWeight: 600, color: '#FFFFFF' },
    h6: { fontWeight: 600, color: '#FFFFFF' },
    body1: { color: '#C8D4E0' },
    body2: { color: '#C8D4E0' },
    subtitle1: { color: '#C8D4E0' },
    subtitle2: { color: 'rgba(255,255,255,0.6)' },
    caption: { color: 'rgba(255,255,255,0.45)' },
    overline: { color: '#00C8FF', letterSpacing: '0.12em' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: '30px',
          padding: '10px 24px',
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.3)',
          color: '#FFFFFF',
          '&:hover': {
            borderColor: '#00C8FF',
            backgroundColor: 'rgba(0, 200, 255, 0.05)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #00C8FF 0%, #0086FF 100%)',
            boxShadow: '0 4px 14px 0 rgba(0, 200, 255, 0.39)',
            '&:hover': {
              background: 'linear-gradient(135deg, #00AEE0 0%, #0076E0 100%)',
              boxShadow: '0 6px 20px rgba(0, 200, 255, 0.23)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#0D1526',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#C8D4E0',
          textDecorationColor: 'rgba(200,212,224,0.3)',
          '&:hover': { color: '#FFFFFF' },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: { color: '#C8D4E0' },
        body2: { color: '#C8D4E0' },
        subtitle1: { color: '#C8D4E0' },
        subtitle2: { color: 'rgba(255,255,255,0.6)' },
        caption: { color: 'rgba(255,255,255,0.45)' },
        overline: { color: '#00C8FF' },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(255,255,255,0.07)' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { color: '#C8D4E0' },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: { color: 'rgba(255,255,255,0.45)' },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: 'rgba(255,255,255,0.6)' },
      },
    },
  },
});

export default theme;
