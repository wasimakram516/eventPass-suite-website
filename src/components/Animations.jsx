'use client';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

export const MotionBox = motion.create(Box);
export const MotionTypography = motion.create(Typography);

// slide + fade animation for sections
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// Animated Number Component
export function AnimatedNumber({ value, suffix = '', duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 80,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat().format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <span 
      ref={ref} 
      style={{ 
        display: 'inline-block',
        fontVariantNumeric: 'tabular-nums'
      }}
    >
      0{suffix}
    </span>
  );
}

// Reveal animation wrapper
export function Reveal({ children, width = "100%", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.25 + delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Hover effect for cards
export const cardHover = {
  initial: { scale: 1, y: 0, boxShadow: '0 0 0 rgba(0, 200, 255, 0)' },
  hover: { 
    scale: 1.02, 
    y: -5,
    boxShadow: '0 10px 30px -10px rgba(0, 200, 255, 0.3)',
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Subtle float animation for background elements
export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Scanning line effect animation
export const scanlineAnimation = {
  animate: {
    top: ["-10%", "110%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

