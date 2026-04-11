
export const fadeUpVariants = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(3px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        delay,
        damping: 30,
        mass: 0.5,
        staggerChildren: 0.03,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
    },
  });

// Parent just orchestrates stagger, doesn't animate itself
export const scaleUpVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// Children do all the visual animation
export const scaleUpChildVariant = {
  initial: { scale: 0.85, opacity: 0, y: 16 },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    },
  },
};

  
export const fadeUpWithBlurVariants = (stiffness?: number, damping?: number, mass?: number) => ({
  initial: {
    y: 50,
    opacity: 0,
    filter: "blur(3px)",
  },

  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      stiffness: stiffness || 190,
      damping: damping || 40,
      mass: mass || 0.3,
      staggerChildren: 0.09,
      when: "beforeChildren",
    },
  },
});