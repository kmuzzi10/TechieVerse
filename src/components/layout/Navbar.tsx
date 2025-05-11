import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary-600 font-bold text-xl"
          onClick={closeMenu}
        >
          <GraduationCap size={28} className="text-primary-500" />
          <span>TechieVerse</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium hover:text-primary-500 transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary-500 font-semibold' 
                  : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary px-4 py-2"
          >
            Enroll Now
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 invisible'
        } overflow-hidden`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium py-2 hover:text-primary-500 transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary-500 font-semibold' 
                  : 'text-gray-700'
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary px-4 py-2 text-center"
            onClick={closeMenu}
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;