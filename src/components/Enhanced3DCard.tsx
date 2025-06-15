
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode, useState } from 'react';

interface Enhanced3DCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Enhanced3DCard = ({ 
  children, 
  className = "", 
  delay = 0 
}: Enhanced3DCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 80,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.05,
        rotateX: 5,
        rotateY: 10,
        z: 50,
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.98,
        rotateX: -2,
        rotateY: -5,
        transition: { duration: 0.1 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`cursor-pointer perspective-1000 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <Card className={`
        border-none shadow-xl transition-all duration-500 relative overflow-hidden
        ${isHovered ? 'shadow-2xl shadow-blue-500/30' : ''}
        backdrop-blur-sm bg-white/90
      `}>
        {/* Metallic shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Light reflection effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '200%' : '-100%' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        
        {/* Glow border */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ 
            boxShadow: '0 0 0 0px rgba(59, 130, 246, 0)' 
          }}
          animate={{ 
            boxShadow: isHovered 
              ? '0 0 20px 2px rgba(59, 130, 246, 0.3)' 
              : '0 0 0 0px rgba(59, 130, 246, 0)' 
          }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          animate={{
            rotateX: isHovered ? -2 : 0,
            rotateY: isHovered ? 2 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default Enhanced3DCard;
