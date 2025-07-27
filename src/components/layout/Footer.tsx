import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollToCourse = (courseId: string) => {
    navigate('/services');
    setTimeout(() => {
      const element = document.getElementById(courseId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-primary-950 text-white dark:text-gray-200 overflow-hidden">
      {/* Decorative blurred gradient */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-64 bg-gradient-to-r from-primary-500/20 via-secondary-500/10 to-accent-500/20 blur-3xl opacity-60 -z-10" />
      <div className="container-custom pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
        
        {/* Headings Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-white tracking-tight">Company Info</h3>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-white tracking-tight">Quick Links</h3>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-white tracking-tight">Our Courses</h3>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-white tracking-tight">Contact Us</h3>
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 justify-center items-start text-left">
          {/* Company Info Content */}
          <div className="space-y-4 sm:space-y-6 flex flex-col items-start text-left">
            <Link to="/" className="flex items-center space-x-2 text-white font-bold text-2xl tracking-tight">
              <GraduationCap size={30} className="text-primary-400" />
              <span>TechieVerse</span>
            </Link>
            <p className="text-gray-300 mt-4 max-w-xs text-sm sm:text-base leading-relaxed">
              Empowering future tech leaders through quality education, hands-on experience, and industry connections.
            </p>
            <div className="flex space-x-3 pt-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Content */}
          <div className="flex flex-col items-start text-left">
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors block py-2 px-3 rounded-lg hover:bg-primary-900/10 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors block py-2 px-3 rounded-lg hover:bg-primary-900/10 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors block py-2 px-3 rounded-lg hover:bg-primary-900/10 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] flex items-center">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors block py-2 px-3 rounded-lg hover:bg-primary-900/10 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] flex items-center">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Courses Content */}
          <div className="flex flex-col items-start text-left">
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button 
                  onClick={() => scrollToCourse('appverse-course')}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-primary-900/10 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] flex items-center"
                >
                  📱 AppVerse: Mobile Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToCourse('codecraft-course')}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-primary-900/10 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] flex items-center"
                >
                  🌐 CodeCraft: Full Stack Engineering
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToCourse('flutterflow-course')}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-primary-900/10 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] flex items-center"
                >
                  🚀 FlutterFlow Pro: UI to Backend
                </button>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-primary-900/10 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] block"
                >
                  <span className="inline-flex items-center">
                    <span role="img" aria-label="consultation" className="mr-2">👨🏻‍💼</span>
                    1-1 Consultations
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info Content */}
          <div className="flex flex-col items-start text-left">
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-900/10 transition-colors">
                <Phone size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+92 343 722 5876</span>
              </li>
              <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-900/10 transition-colors">
                <Mail size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">info.techieverse@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-900/10 transition-colors">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800/70 mt-10 sm:mt-14 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm md:text-base tracking-wide">&copy; {new Date().getFullYear()} TechieVerse Training Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;