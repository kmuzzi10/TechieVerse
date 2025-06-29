import React from "react";
import { motion } from "framer-motion";
import { Users, Award, GraduationCap, TrendingUp, Clock, Star } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  {
    icon: <Users size={48} className="text-primary-500" />,
    value: 500,
    suffix: "+",
    label: "Students Enrolled",
    description: "Active learners in our programs",
    color: "from-primary-500 to-primary-600"
  },
  {
    icon: <Award size={48} className="text-secondary-500" />,
    value: 95,
    suffix: "%",
    label: "Success Rate",
    description: "Students who landed jobs",
    color: "from-secondary-500 to-secondary-600"
  },
  {
    icon: <GraduationCap size={48} className="text-accent-500" />,
    value: 150,
    suffix: "+",
    label: "Courses Completed",
    description: "Successfully finished programs",
    color: "from-accent-500 to-accent-600"
  },
  {
    icon: <TrendingUp size={48} className="text-primary-600" />,
    value: 80,
    suffix: "%",
    label: "Employment Rate",
    description: "Graduates employed within 6 months",
    color: "from-primary-600 to-primary-700"
  },
  {
    icon: <Clock size={48} className="text-secondary-600" />,
    value: 2,
    suffix: " years",
    label: "Average Experience",
    description: "Industry experience gained",
    color: "from-secondary-600 to-secondary-700"
  },
  {
    icon: <Star size={48} className="text-accent-600" />,
    value: 4.9,
    suffix: "/5",
    label: "Student Rating",
    description: "Average satisfaction score",
    color: "from-accent-600 to-accent-700"
  }
];

const StatsSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="section bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent animate-pulse-slow"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Success Metrics
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Numbers that speak for themselves - see how we're transforming careers in tech
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {stat.icon}
                  </div>
                </div>
                
                <div className="mb-4">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-bold block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    showProgress={true}
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {stat.label}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection; 