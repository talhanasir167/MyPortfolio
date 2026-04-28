import { Variants } from "framer-motion";

export const getPrefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const pageTransitionVariants: Variants = {
  initial: () => ({
    opacity: 0,
    y: getPrefersReducedMotion() ? 0 : 12,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: () => ({
    opacity: 0,
    y: getPrefersReducedMotion() ? 0 : -8,
    transition: { duration: 0.25, ease: "easeIn" },
  }),
};

export const sectionFadeVariants: Variants = {
  hidden: () => ({
    opacity: 0,
    y: getPrefersReducedMotion() ? 0 : 24,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const itemFadeVariants: Variants = {
  hidden: () => ({
    opacity: 0,
    y: getPrefersReducedMotion() ? 0 : 12,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const gridFadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.12, ease: "easeIn" },
  },
};

export const scrollSectionVariants: Variants = {
  hidden: () => ({
    opacity: 0,
    y: getPrefersReducedMotion() ? 0 : 24,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export const scrollStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scrollStaggerItem: Variants = {
  hidden: () => ({
    opacity: 0,
    y: getPrefersReducedMotion() ? 0 : 24,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export const navVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const bgVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};
