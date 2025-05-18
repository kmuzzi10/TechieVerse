import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark dark:bg-gray-950 text-white dark:text-gray-200">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
              <GraduationCap size={28} className="text-primary-400" />
              <span>TechieVerse</span>
            </Link>
            <p className="text-gray-300 mt-4 max-w-xs">
              Empowering future tech leaders through quality education, hands-on experience, and industry connections.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                📱AppVerse
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                🌐CodeCraft
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                🚀FlutterFlow Pro
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  1-1 Consultations
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary-400 mt-1" />
                <span className="text-gray-300">+92 343 722 5876</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary-400 mt-1" />
                <span className="text-gray-300">info.techieverse@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-1" />
                <span className="text-gray-300">Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechieVerse Training Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;