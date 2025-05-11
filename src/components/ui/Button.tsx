import React from 'react';
import { Link } from 'react-router-dom';

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
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 hover-3d';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-md hover:shadow-lg',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : '';
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;