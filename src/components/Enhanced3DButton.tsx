
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ReactNode, useState } from 'react';

interface Enhanced3DButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
}

const Enhanced3DButton = ({ 
  children, 
  onClick, 
  variant = "default",
  size = "default",
  className = "",
  disabled = false
}: Enhanced3DButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 400);
    if (onClick) onClick();
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotateX: 8,
        rotateY: 8,
        z: 30,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        rotateX: -5,
        rotateY: -5,
        transition: { duration: 0.1 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Button
        variant={variant}
        size={size}
        onClick={handleClick}
        disabled={disabled}
        className={`
          relative overflow-hidden transition-all duration-300 backdrop-blur-sm
          ${variant === "default" ? "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700" : ""}
          ${isHovered ? 'shadow-lg shadow-blue-500/30' : ''}
          ${className}
        `}
      >
        {/* Metallic shine overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: '-100%', skewX: -20 }}
          animate={{ 
            x: isClicked ? ['0%', '200%'] : (isHovered ? '200%' : '-100%')
          }}
          transition={{ duration: isClicked ? 0.6 : 0.8 }}
        />
        
        {/* Bounce effect for text */}
        <motion.div
          animate={{ 
            scale: isClicked ? [1, 1.1, 1] : 1,
            rotateZ: isClicked ? [0, 5, -5, 0] : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-md opacity-0"
          animate={{
            opacity: isHovered ? 0.3 : 0,
            boxShadow: isHovered 
              ? '0 0 20px rgba(59, 130, 246, 0.8)' 
              : '0 0 0px rgba(59, 130, 246, 0)'
          }}
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  );
};

export default Enhanced3DButton;
