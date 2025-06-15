
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ReactNode, useState } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
}

const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = "default",
  size = "default",
  className = "",
  disabled = false
}: AnimatedButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    if (onClick) onClick();
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        z: 20
      }}
      whileTap={{ 
        scale: 0.95,
        rotateX: -5,
        rotateY: -5
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Button
        variant={variant}
        size={size}
        onClick={handleClick}
        disabled={disabled}
        className={`
          relative overflow-hidden transition-all duration-300
          ${variant === "default" ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" : ""}
          ${className}
        `}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%', skewX: -15 }}
          animate={{ 
            x: isClicked ? ['0%', '200%'] : '-100%'
          }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          animate={{ 
            scale: isClicked ? [1, 1.2, 1] : 1,
            rotate: isClicked ? [0, 180, 360] : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default AnimatedButton;
