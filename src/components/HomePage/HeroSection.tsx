import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const techShapes = [
  // Graduation cap SVG (top center)
  { style: { top: '7%', left: '48%' }, delay: 0.2, svg: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <g filter="url(#capShadow)">
        <path d="M22 8L40 16L22 24L4 16L22 8Z" fill="#3b82f6" fillOpacity="0.18" stroke="#3b82f6" strokeWidth="2"/>
        <rect x="16" y="24" width="12" height="6" rx="2" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M22 24V32" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="34" r="2" fill="#3b82f6" fillOpacity="0.18"/>
      </g>
      <defs>
        <filter id="capShadow" x="0" y="4" width="44" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#3b82f6" floodOpacity="0.08"/>
        </filter>
      </defs>
    </svg>
  ) },
  // Example: floating cubes and lines
  { style: { top: '10%', left: '5%' }, delay: 0, svg: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="5" y="5" width="30" height="30" rx="6" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="2"/></svg>
  ) },
  { style: { top: '60%', left: '10%' }, delay: 0.3, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="4" fill="#a78bfa" fillOpacity="0.10" stroke="#a78bfa" strokeWidth="2"/></svg>
  ) },
  { style: { top: '30%', left: '80%' }, delay: 0.6, svg: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="8" width="32" height="32" rx="8" fill="#f59e0b" fillOpacity="0.10" stroke="#f59e0b" strokeWidth="2"/></svg>
  ) },
  { style: { top: '75%', left: '70%' }, delay: 0.9, svg: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="6" width="24" height="24" rx="6" fill="#10b981" fillOpacity="0.10" stroke="#10b981" strokeWidth="2"/></svg>
  ) },
  { style: { top: '50%', left: '50%' }, delay: 1.2, svg: (
    <svg width="60" height="20" viewBox="0 0 60 20" fill="none"><rect x="2" y="8" width="56" height="4" rx="2" fill="#fff" fillOpacity="0.08"/><rect x="10" y="2" width="4" height="16" rx="2" fill="#3b82f6" fillOpacity="0.12"/></svg>
  ) },
  // New tech-inspired icons
  { style: { top: '20%', left: '25%' }, delay: 0.5, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16h16M16 8v16" stroke="#f472b6" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="15" stroke="#f472b6" strokeWidth="2" fill="none"/></svg>
  ) }, // plus/cross
  { style: { top: '40%', left: '15%' }, delay: 1.1, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16h16" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="15" stroke="#f59e0b" strokeWidth="2" fill="none"/></svg>
  ) }, // minus
  { style: { top: '15%', left: '60%' }, delay: 0.7, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 24l8-16 8 16" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
  ) }, // code bracket
  { style: { top: '80%', left: '30%' }, delay: 1.3, svg: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M10 30l10-20 10 20" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
  ) }, // code bracket
  { style: { top: '65%', left: '85%' }, delay: 1.5, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#f59e0b" strokeWidth="2" fill="#fde68a" fillOpacity="0.12"/><path d="M16 8v8l6 3" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/></svg>
  ) }, // clock
  { style: { top: '10%', left: '85%' }, delay: 1.7, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 24l8-16 8 16" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
  ) }, // code bracket
  { style: { top: '85%', left: '10%' }, delay: 1.9, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4v24M4 16h24" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/></svg>
  ) }, // plus
  { style: { top: '35%', left: '70%' }, delay: 2.1, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16h16" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/></svg>
  ) }, // minus
  { style: { top: '70%', left: '60%' }, delay: 2.3, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 8l16 16M24 8L8 24" stroke="#f472b6" strokeWidth="2" strokeLinecap="round"/></svg>
  ) }, // x
  { style: { top: '25%', left: '75%' }, delay: 2.5, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4v24M4 16h24" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/></svg>
  ) }, // plus
  { style: { top: '55%', left: '40%' }, delay: 2.7, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#a78bfa" strokeWidth="2" fill="#ede9fe" fillOpacity="0.10"/></svg>
  ) }, // circle
  { style: { top: '80%', left: '80%' }, delay: 2.9, svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 24l8-16 8 16" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
  ) }, // code bracket
];

const HeroSection: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 animate-pulse-slow"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent animate-pulse-slow"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-secondary-500/5 via-transparent to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
    <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center">
      {/* 3D Tech Animated Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {techShapes.map((shape, i) => (
          <motion.div
            key={i}
            style={{ position: 'absolute', ...shape.style }}
            initial={{ y: 0, scale: 1, opacity: 0.7 }}
            animate={{ y: [0, -20, 0], scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 6, repeat: Infinity, delay: shape.delay, ease: "easeInOut" }}
          >
            {shape.svg}
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* Soft blur/glow behind text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-40 md:h-64 rounded-full bg-gradient-to-r from-primary-400/30 via-secondary-400/20 to-accent-400/30 blur-2xl opacity-70 -z-10"></div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-on-scroll bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-400 drop-shadow-[0_4px_32px_rgba(59,130,246,0.25)] dark:text-white" >Transform Your Future with Tech Education</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-on-scroll max-w-2xl mx-auto">
          Join our comprehensive training programs and master the skills needed for a successful career in technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
          <Button 
            variant="primary" 
            size="lg" 
            className="animate-float hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            to="/contact"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="hover:scale-105 transition-transform duration-300 border-2"
            to="/services"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
  </motion.section>
);

export default HeroSection; 