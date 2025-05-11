import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 animate-on-scroll">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;