import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
}) => {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl shadow-md 
        overflow-hidden 
        transition-all duration-500 
        ${hoverable ? 'hover:shadow-2xl hover:-translate-y-1' : ''} 
        ${className}
        relative
        before:absolute
        before:inset-0
        before:bg-gradient-to-r
        before:from-primary-500/0
        before:via-primary-500/0
        before:to-primary-500/0
        before:opacity-0
        hover:before:opacity-10
        before:transition-opacity
        before:duration-500
        group
        after:absolute
        after:inset-0
        after:bg-gradient-to-br
        after:from-primary-500/0
        after:to-secondary-500/0
        after:opacity-0
        hover:after:opacity-10
        after:transition-opacity
        after:duration-500
        after:delay-150
      `}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className} transition-all duration-500 group-hover:scale-[1.02]`}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className} transition-all duration-500 group-hover:scale-[1.02]`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 ${className} transition-all duration-500 group-hover:scale-[1.02]`}>
      {children}
    </div>
  );
};

export default Card;