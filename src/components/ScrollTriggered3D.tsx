
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollTriggered3DProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  enableParallax?: boolean;
  rotateOnScroll?: boolean;
}

const ScrollTriggered3D = ({ 
  children, 
  className = "",
  direction = 'up',
  delay = 0,
  duration = 0.8,
  enableParallax = false,
  rotateOnScroll = false
}: ScrollTriggered3DProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], enableParallax ? [100, -100] : [0, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], rotateOnScroll ? [0, 360] : [0, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], rotateOnScroll ? [0, 180] : [0, 0]);

  const directionVariants = {
    up: { y: 80, opacity: 0, rotateX: -15 },
    down: { y: -80, opacity: 0, rotateX: 15 },
    left: { x: -80, opacity: 0, rotateY: -15 },
    right: { x: 80, opacity: 0, rotateY: 15 }
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { 
        x: 0, 
        y: 0, 
        opacity: 1, 
        rotateX: 0, 
        rotateY: 0 
      } : directionVariants[direction]}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      style={{
        y: enableParallax ? y : 0,
        rotateX: rotateOnScroll ? rotateX : 0,
        rotateY: rotateOnScroll ? rotateY : 0,
        transformStyle: 'preserve-3d'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollTriggered3D;
