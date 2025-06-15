
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode, useState } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverRotate?: number;
  delay?: number;
}

const AnimatedCard = ({ 
  children, 
  className = "", 
  hoverScale = 1.05, 
  hoverRotate = 2,
  delay = 0 
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: hoverScale,
        rotateY: hoverRotate,
        z: 50,
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`cursor-pointer ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <Card className={`
        border-none shadow-lg transition-all duration-300 relative overflow-hidden
        ${isHovered ? 'shadow-2xl shadow-blue-500/25' : ''}
      `}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '200%' : '-100%' }}
          transition={{ duration: 0.6 }}
        />
        {children}
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;
