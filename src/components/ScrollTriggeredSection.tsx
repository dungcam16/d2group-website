
import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollTriggeredSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

const ScrollTriggeredSection = ({ 
  children, 
  className = "",
  direction = 'up',
  delay = 0,
  duration = 0.6
}: ScrollTriggeredSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollTriggeredSection;
