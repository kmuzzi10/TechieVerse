import React from 'react';

interface MobileContainerProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const MobileContainer: React.FC<MobileContainerProps> = ({
  children,
  className = '',
  padding = 'md',
  maxWidth = 'xl'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'px-4 py-4',
    md: 'px-4 sm:px-6 lg:px-8 py-6 sm:py-8',
    lg: 'px-4 sm:px-6 lg:px-8 py-8 sm:py-12'
  };

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full'
  };

  const classes = `
    mx-auto
    ${paddingClasses[padding]}
    ${maxWidthClasses[maxWidth]}
    ${className}
  `.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default MobileContainer; 