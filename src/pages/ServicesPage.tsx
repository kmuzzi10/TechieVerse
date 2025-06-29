import React, { useEffect } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { CheckCircle, Users, Award, Briefcase, Monitor, Code, Package, DollarSign, Calendar, Clock } from 'lucide-react';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';

const CustomCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform ease hover:scale-105 ${className}`}>
    {children}
  </div>
);

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services - TechieVerse Training Academy';
  }, []);

  const courses = [
    {
      id: 1,
      title: '📱 AppVerse: Mastering Mobile Development',
      technologies: 'Flutter, Firebase, API Integration',
      description: 'Learn to build beautiful, responsive mobile applications using Flutter and integrate them with backend services through APIs and Firebase.',
      duration: '6 months',
      classes: '2 classes/week',
      price: 'PKR 5000/month',
      color: 'bg-primary-500',
      features: [
        'Complete Flutter framework from basics to advanced',
        'Real-time database with Firebase',
        'Authentication and cloud functions',
        'REST API integration',
        'State management with Provider and GetX',
        'Publishing apps to App Store and Play Store'
      ]
    },
    {
      id: 2,
      title: '🌐 CodeCraft: Full Stack Engineering Bootcamp',
      technologies: 'MERN Stack, SQL, API Development',
      description: 'Become a complete developer capable of building end-to-end web applications using MongoDB, Express, React, and Node.js.',
      duration: '6 months',
      classes: '2 classes/week',
      price: 'PKR 5000/month',
      color: 'bg-secondary-500',
      features: [
        'Frontend development with React.js',
        'Server-side programming with Node.js',
        'Database design with MongoDB and SQL',
        'REST API development with Express',
        'Authentication and authorization',
        'Deployment and DevOps basics'
      ]
    },
    {
      id: 3,
      title: '🚀 FlutterFlow Pro: From UI to Backend Brilliance',
      technologies: 'Flutter + MERN Stack',
      description: 'A comprehensive program that combines mobile development with Flutter and backend development with the MERN stack.',
      duration: '6 months',
      classes: '2 classes/week',
      price: 'PKR 5000/month',
      color: 'bg-accent-500',
      features: [
        'Mobile UI development with Flutter',
        'Backend development with Node.js',
        'Database integration (MongoDB)',
        'Creating and consuming REST APIs',
        'State management in mobile apps',
        'Authentication and security best practices'
      ]
    }
  ];

  const extraServices = [
    {
      icon: <Users size={32} className="text-primary-500" />,
      title: '1-1 Consultations',
      description: 'Get personalized help with your coding projects, career advice, or interview preparation. Available for current students and alumni.',
      price: 'PKR 1500pkr/hour (500pkr for enrolled students)',
    },
    {
      icon: <Award size={32} className="text-secondary-500" />,
      title: 'Hackathons',
      description: 'Participate in our quarterly hackathons to build your portfolio, network with industry professionals, and showcase your skills.',
      price: 'Free for TechieVerse students',
    },
    {
      icon: <Briefcase size={32} className="text-accent-500" />,
      title: 'Internship Placements',
      description: 'Top-performing students are recommended for paid internships with our partner companies, giving you valuable industry experience.',
      price: 'Based on performance',
    }
  ];

  const differences = [
    {
      icon: <Monitor size={24} className="text-primary-500" />,
      title: 'Live Online Classes',
      description: 'We don\'t rely on pre-recorded videos; all our classes are live and interactive.',
    },
    {
      icon: <Code size={24} className="text-primary-500" />,
      title: 'Project-Based Learning',
      description: 'Build real-world projects that you can add to your portfolio, not just tutorial examples.',
    },
    {
      icon: <Package size={24} className="text-primary-500" />,
      title: 'Industry-Relevant Curriculum',
      description: 'Our curriculum is regularly updated to match current industry requirements and technologies.',
    },
    {
      icon: <Users size={24} className="text-primary-500" />,
      title: 'Personalized Mentorship',
      description: 'Get guidance from experienced professionals who care about your individual progress.',
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pt-32 pb-20 bg-gradient-to-r from-primary-700 to-secondary-700 text-white"
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Courses & Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-100 mb-8"
            >
              Comprehensive programs designed to transform beginners into industry-ready professionals.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Courses Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section bg-white dark:bg-gray-900"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="Training Programs" 
              subtitle="Our hands-on courses focus on practical skills that are in high demand in the tech industry."
            />
          </motion.div>
          
          <div className="space-y-12">
            {courses.map((course, index) => (
              <motion.div 
                key={course.id} 
                id={`${course.id === 1 ? 'appverse-course' : course.id === 2 ? 'codecraft-course' : 'flutterflow-course'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CustomCard>
                  <div className={`${course.color} h-2 w-full`}></div>
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-3 dark:text-white">{course.title}</h3>
                        <p className="text-lg text-primary-600 mb-4 dark:text-white">{course.technologies}</p>
                        <p className="text-gray-600 mb-6 dark:text-white">{course.description}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          {course.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 dark:text-white">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4 dark:text-white">Course Details</h4>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center space-x-3">
                            <Clock size={18} className="text-primary-500" />
                            <span className="dark:text-white"><strong>Duration:</strong> {course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Calendar size={18} className="text-primary-500" />
                            <span className="dark:text-white"><strong>Frequency:</strong> {course.classes}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <DollarSign size={18} className="text-primary-500" />
                            <span className="dark:text-white"><strong>Fee:</strong> {course.price}</span>
                          </div>
                        </div>
                        <button onClick={() => window.location.href = '/contact'} className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors duration-300">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Extra Services Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section bg-gray-50 dark:bg-gray-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="Additional Services" 
              subtitle="Beyond our core training programs, we offer additional resources to support your tech journey."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extraServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 transition-transform duration-300">
                  <div className="p-6">
                    <div className="mb-4 p-3 bg-gray-100 rounded-full inline-block">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 mb-4 dark:text-white">{service.description}</p>
                    <p className="text-primary-600 font-medium dark:text-white">{service.price}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section bg-white dark:bg-gray-900"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="How Our Training Works" 
              subtitle="Our structured approach ensures you get the most out of your learning experience."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-8">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Twice-Weekly Live Classes</h3>
                    <p className="text-gray-600 dark:text-white">Attend interactive classes via Google Meet where you can ask questions in real-time and get immediate feedback.</p>
                  </div>

                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Weekly Assignments</h3>
                    <p className="text-gray-600 dark:text-white">Practice what you've learned with practical assignments and mini-projects that build your portfolio.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">1-1 Consultation</h3>
                    <p className="text-gray-600 dark:text-white">Schedule individual sessions to get help with concepts you find challenging or to discuss your progress.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Final Project & Hackathon</h3>
                    <p className="text-gray-600 dark:text-white">Complete a capstone project and participate in our hackathon to apply your skills and connect with industry professionals.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <img 
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Online tech education" 
                className="rounded-lg shadow-lg" 
                loading="lazy"
                width="600"
                height="400"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why We're Different Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section bg-gray-50 dark:bg-gray-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="Why Our Courses Are Different" 
              subtitle="We focus on practical skills and real-world applications to prepare you for the industry."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CustomCard className="h-full">
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="mb-4 p-3 bg-primary-50 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-white">{item.description}</p>
                  </div>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
      >
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Level Up Your Tech Skills?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            Enroll in one of our courses today and take the first step towards a successful tech career.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button to="/contact" variant="accent" size="lg">
              Contact Us to Enroll
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPage;
