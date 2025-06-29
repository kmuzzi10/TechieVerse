import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  showProgress?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 3000,
  suffix = '',
  prefix = '',
  className = '',
  showProgress = false,
}) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start immediately
    setIsAnimating(true);
    
    // Calculate steps based on target
    let steps: number[];
    if (end <= 5) {
      // For small numbers like 2, 4.9
      steps = Array.from({ length: 10 }, (_, i) => (end * (i + 1)) / 10);
    } else if (end <= 20) {
      // For medium numbers like 80, 95
      steps = Array.from({ length: 15 }, (_, i) => (end * (i + 1)) / 15);
    } else {
      // For large numbers like 150, 500
      steps = Array.from({ length: 18 }, (_, i) => (end * (i + 1)) / 18);
    }
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        let value = steps[currentStep];
        
        // Handle decimal numbers
        if (end % 1 !== 0) {
          const decimalPlaces = end.toString().split('.')[1]?.length || 1;
          value = Math.round(value * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
        } else {
          value = Math.floor(value);
        }
        
        setCount(value);
        currentStep++;
      } else {
        setCount(end);
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, [end]);

  return (
    <div className="relative">
      <span 
        className={`${className} ${isAnimating ? 'animate-pulse-glow scale-105' : 'scale-100'} transition-transform duration-300`}
      >
        {prefix}
        {typeof count === 'number' && count % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toLocaleString()}
        {suffix}
      </span>
      {showProgress && isAnimating && (
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-2000 ease-out"
            style={{ width: `${Math.min((count / end) * 100, 100)}%` }}
          />
        </div>
      )}
      {isAnimating && (
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-500 rounded-full animate-ping" />
      )}
    </div>
  );
};

export default AnimatedCounter; 