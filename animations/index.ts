import type { Variants } from 'framer-motion'

export const easings = [0.48, 0.15, 0.25, 0.96]

export const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

export const itemVariants = {
  initial: {
    scale: 0.96,
    y: 30,
    opacity: 0,
  },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easings,
    },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: easings,
    },
  },
}

export const quoteSingleWord: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

export const fadeVariants = {
  initialState: {
    opacity: 0,
    y: 30,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
  },
  animateState: {
    opacity: 1,
    y: 0,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
  },
  exitState: {
    clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
  },
}
