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
      primary: '#FFFFFF',
      secondary: '#A0AEBF',
    },
  },
  typography: {
    fontFamily: '"Sora", "Plus Jakarta Sans", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
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
        containedPrimary: {
          background: 'linear-gradient(135deg, #00C8FF 0%, #0086FF 100%)',
          boxShadow: '0 4px 14px 0 rgba(0, 200, 255, 0.39)',
          '&:hover': {
            background: 'linear-gradient(135deg, #00AEE0 0%, #0076E0 100%)',
            boxShadow: '0 6px 20px rgba(0, 200, 255, 0.23)',
          },
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
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
  },
});

export default theme;
