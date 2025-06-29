import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  to,
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg focus:ring-primary-500 before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 after:absolute after:inset-0 after:bg-gradient-to-r after:from-primary-400/0 after:via-primary-400/20 after:to-primary-400/0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-1000',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-md hover:shadow-lg focus:ring-secondary-500 before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg focus:ring-accent-500 before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-600 transition-colors duration-300 focus:ring-primary-500',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2 min-h-[36px]',
    md: 'px-6 py-3 min-h-[44px]',
    lg: 'text-lg px-8 py-4 min-h-[48px]',
  };
  
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : '';
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} ${className}`;
  
  // Mobile-optimized motion variants
  const motionVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
    // Disable animations on mobile for better performance
    mobileHover: { scale: 1 },
    mobileTap: { scale: 0.99 },
  };

  // Check if device is mobile
  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  };

  const hoverVariant = isMobile() ? 'mobileHover' : 'hover';
  const tapVariant = isMobile() ? 'mobileTap' : 'tap';
  
  if (to) {
    return (
      <motion.div 
        whileHover={hoverVariant} 
        whileTap={tapVariant} 
        style={{ display: 'inline-block' }}
        transition={{ duration: 0.2 }}
      >
        <Link 
          to={to} 
          className={classes} 
          tabIndex={disabled ? -1 : 0} 
          aria-disabled={disabled} 
          onClick={disabled ? (e) => e.preventDefault() : undefined}
          style={{ minHeight: size === 'sm' ? '36px' : size === 'md' ? '44px' : '48px' }}
        >
          {children}
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      whileHover={hoverVariant}
      whileTap={tapVariant}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      transition={{ duration: 0.2 }}
      style={{ minHeight: size === 'sm' ? '36px' : size === 'md' ? '44px' : '48px' }}
    >
      {children}
    </motion.button>
  );
};

export default Button;