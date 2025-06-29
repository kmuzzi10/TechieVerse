import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { createPortal } from 'react-dom';

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside both navbar container and mobile menu
      const isOutsideNavbar = !target.closest('.navbar-container');
      const isOutsideMobileMenu = !target.closest('[data-mobile-menu]');
      
      if (isMenuOpen && isOutsideNavbar && isOutsideMobileMenu) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const mobileMenuContent = (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ zIndex: 99995 }}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 99998 }}
        data-mobile-menu
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <Link
              to="/"
              className="flex items-center space-x-2 text-primary-600 dark:text-white font-bold text-xl"
              onClick={closeMenu}
            >
              <GraduationCap size={28} className="text-primary-500" />
              <span>TechieVerse</span>
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="space-y-2 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary-500 font-semibold bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Actions */}
            <div className="px-6 mt-8 space-y-4">
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-between w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
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
                className="btn btn-primary w-full py-3 rounded-lg text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={closeMenu}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 navbar-container ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
        style={{ zIndex: 99990 }}
      >
        <div className="container-custom flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-primary-600 dark:text-white font-bold text-xl hover:scale-105 transition-transform duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={closeMenu}
          >
            <GraduationCap size={28} className="text-primary-500 animate-bounce-slow" />
            <span className="hidden sm:inline">TechieVerse</span>
            <span className="sm:hidden">TV</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 group min-h-[44px] flex items-center ${
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
              className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
              className="btn btn-primary px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[44px] flex items-center"
            >
              Enroll Now
            </Link>
          </nav>

          <button
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none hover:scale-110 transition-transform duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Render mobile menu in portal to avoid stacking context issues */}
      {isMenuOpen && createPortal(mobileMenuContent, document.body)}
    </>
  );
};

export default Navbar;
