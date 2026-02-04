import { Variants } from "framer-motion";

// Folio-style easing curves
export const easings = {
  smooth: [0.6, 0.01, 0.05, 0.95],
  smoothOut: [0.215, 0.61, 0.355, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
};

// Container with staggered children - Folio style
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Basic item fade up
export const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
};

// Fade in simple
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easings.smooth }
  },
};

// Slide up with scale - for cards
export const slideUpScale: Variants = {
  hidden: {
    y: 60,
    opacity: 0,
    scale: 0.95
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easings.smooth,
    },
  },
};

// Slide from left
export const slideFromLeft: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
};

// Slide from right
export const slideFromRight: Variants = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
};

// Scale in with rotation - for images/cards
export const scaleRotate: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    rotate: -5
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: easings.smooth,
    },
  },
};

// Text reveal character by character
export const textRevealContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

export const textRevealChar: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: easings.smoothOut,
    },
  },
};

// Word by word reveal
export const wordRevealContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const wordReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
};

// Card hover effect
export const cardHover = {
  scale: 1.02,
  y: -8,
  transition: {
    duration: 0.3,
    ease: easings.smoothOut,
  },
};

// Image parallax reveal
export const imageReveal: Variants = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easings.smooth,
    },
  },
};

// Divider animation
export const dividerExpand: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
      delay: 0.3,
    },
  },
};

// Badge float animation
export const badgeFloat: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
    scale: 0.8
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easings.bounce,
    },
  },
};

// Staggered grid items - for skills/projects
export const gridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const gridItem: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
};

// Page section reveal
export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
      staggerChildren: 0.15,
    },
  },
};

// Floating animation for decorative elements
export const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
};

// Pulse glow animation
export const pulseGlow = {
  scale: [1, 1.02, 1],
  opacity: [0.7, 1, 0.7],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Button hover
export const buttonHover = {
  scale: 1.05,
  y: -3,
  transition: {
    duration: 0.2,
    ease: easings.smoothOut,
  },
};

export const buttonTap = {
  scale: 0.95,
};

// Contact item stagger
export const contactItemVariants: Variants = {
  hidden: {
    x: -30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
};
