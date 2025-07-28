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
              <a
                href="https://facebook.com/profile.php?id=61576574695012"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="text-gray-300 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/techieverse3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                {/* You may want to use an Instagram icon from your icon library */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/techieverse/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/923437225876"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="text-gray-300 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
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
                              <a
                href="tel:+923437225876"
                className="flex items-center space-x-3"
                aria-label="Call us"
              >
                <Phone size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+92 343 722 5876</span>
              </a>
              </li>
              <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-900/10 transition-colors">
                <a
                  href="mailto:info.techieverse@gmail.com"
                  className="flex items-center space-x-3"
                  aria-label="Send email"
                >
                  <Mail size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base break-all">info.techieverse@gmail.com</span>
                </a>
              </li>
              <li className="p-2 rounded-lg hover:bg-primary-900/10 transition-colors">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-gray-300 text-sm sm:text-base block mb-2">North Karachi, Pakistan</span>
                    <div className="w-full h-32 rounded-lg overflow-hidden border border-gray-700">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7144!2d67.0822!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sNorth%20Karachi%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="TechieVerse Location - North Karachi, Pakistan"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
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