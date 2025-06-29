import React from 'react';
import { Clock, Calendar, DollarSign } from 'lucide-react';
import Button from './Button';

interface CourseCardProps {
  title: string;
  technologies: string;
  duration: string;
  frequency: string;
  price: string;
  image: string;
  color?: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  technologies,
  duration,
  frequency,
  price,
  color = 'bg-primary-500',
  className = '',
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className={`${color} h-2`}></div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{technologies}</p>
        
        <div className="space-y-4 mb-6 flex-grow">
          <div className="flex items-center space-x-3">
            <Clock size={18} className="text-primary-500" />
            <span className="text-gray-700 dark:text-gray-300">{duration}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar size={18} className="text-primary-500" />
            <span className="text-gray-700 dark:text-gray-300">{frequency}</span>
          </div>
          <div className="flex items-center space-x-3">
            <DollarSign size={18} className="text-primary-500" />
            <span className="text-gray-700 dark:text-gray-300">{price}</span>
          </div>
        </div>
        
        <Button to="/contact" variant="outline" fullWidth>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export const CourseCardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full animate-pulse ${className}`}>
    <div className="bg-gray-200 dark:bg-gray-700 h-2 w-full" />
    <div className="p-6 flex flex-col flex-grow">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-3" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6" />
      <div className="space-y-4 mb-6 flex-grow">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
        </div>
      </div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full mt-auto" />
    </div>
  </div>
);

export default React.memo(CourseCard);