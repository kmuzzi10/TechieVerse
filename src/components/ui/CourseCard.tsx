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
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  technologies,
  duration,
  frequency,
  price,
  image,
  color = 'bg-primary-500',
}) => {
  return (
    <div className="card overflow-hidden flex flex-col h-full animate-on-scroll hover-3d">
      <div className={`${color} h-8`}></div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{technologies}</p>
        
        <div className="space-y-4 mb-6 flex-grow">
          <div className="flex items-center space-x-3">
            <Clock size={18} className="text-primary-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar size={18} className="text-primary-500" />
            <span>{frequency}</span>
          </div>
          <div className="flex items-center space-x-3">
            <DollarSign size={18} className="text-primary-500" />
            <span>{price}</span>
          </div>
        </div>
        
        <Button to="/contact" variant="outline" fullWidth>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;