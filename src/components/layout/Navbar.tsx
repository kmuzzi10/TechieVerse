import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../context/darkModeProvidor'; // adjust the path if needed

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-primary-600 dark:text-white font-bold text-xl hover:scale-105 transition-transform duration-300"
          onClick={closeMenu}
        >
          <GraduationCap size={28} className="text-primary-500 animate-bounce-slow" />
          <span>TechieVerse</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 group ${
                location.pathname === link.path ? 'text-primary-500 dark:text-primary-400 font-medium' : ''
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 dark:bg-primary-400 transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}

          <button
            onClick={toggleDarkMode}
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle dark mode"
          >
            <div className="relative w-5 h-5">
              <div className={`absolute inset-0 transition-all duration-500 transform ${isDarkMode ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}>
                <Sun size={20} className="text-yellow-500" />
              </div>
              <div className={`absolute inset-0 transition-all duration-500 transform ${isDarkMode ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Moon size={20} className="text-gray-700 dark:text-gray-300" />
              </div>
            </div>
          </button>

          <Link 
            to="/contact" 
            className="btn btn-primary px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Enroll Now
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none hover:scale-110 transition-transform duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 invisible'
        } overflow-hidden`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-primary-500 font-semibold bg-primary-50 dark:bg-primary-900/20'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleDarkMode}
            className="flex items-center text-gray-700 dark:text-gray-300 space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <div className="relative w-5 h-5">
              <div className={`absolute inset-0 transition-all duration-500 transform ${isDarkMode ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}>
                <Sun size={20} className="text-yellow-500" />
              </div>
              <div className={`absolute inset-0 transition-all duration-500 transform ${isDarkMode ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Moon size={20} className="text-gray-700 dark:text-gray-300" />
              </div>
            </div>
            <span className="transition-opacity duration-300">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          <Link
            to="/contact"
            className="btn btn-primary px-6 py-2 rounded-full text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
