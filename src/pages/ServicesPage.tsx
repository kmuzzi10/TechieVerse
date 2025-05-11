import React, { useEffect } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { CheckCircle, Users, Award, Briefcase, Monitor, Code, Package, DollarSign, Calendar, Clock } from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services - TechieVerse Training Centre';
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
        'State management with Provider and Bloc',
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
      duration: '8 months',
      classes: '2 classes/week',
      price: 'PKR 8000/month',
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
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
              Our Courses & Services
            </h1>
            <p className="text-xl text-gray-100 mb-8 animate-on-scroll">
              Comprehensive programs designed to transform beginners into industry-ready professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Training Programs" 
            subtitle="Our hands-on courses focus on practical skills that are in high demand in the tech industry."
          />
          
          <div className="space-y-12">
            {courses.map((course) => (
              <div key={course.id} className="animate-on-scroll">
                <Card className="overflow-hidden">
                  <div className={`${course.color} h-2 w-full`}></div>
                  <CardBody className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                        <p className="text-lg text-primary-600 mb-4">{course.technologies}</p>
                        <p className="text-gray-600 mb-6">{course.description}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          {course.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4">Course Details</h4>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center space-x-3">
                            <Clock size={18} className="text-primary-500" />
                            <span><strong>Duration:</strong> {course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Calendar size={18} className="text-primary-500" />
                            <span><strong>Frequency:</strong> {course.classes}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <DollarSign size={18} className="text-primary-500" />
                            <span><strong>Fee:</strong> {course.price}</span>
                          </div>
                        </div>
                        
                        <Button to="/contact" variant="primary" fullWidth>
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Additional Services" 
            subtitle="Beyond our core training programs, we offer additional resources to support your tech journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extraServices.map((service, index) => (
              <Card key={index} className="h-full animate-on-scroll">
                <CardBody className="p-6">
                  <div className="mb-4 p-3 bg-gray-100 rounded-full inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-primary-600 font-medium">{service.price}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="How Our Training Works" 
            subtitle="Our structured approach ensures you get the most out of your learning experience."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-on-scroll">
              <div className="space-y-8">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Twice-Weekly Live Classes</h3>
                    <p className="text-gray-600">Attend interactive classes via Google Meet where you can ask questions in real-time and get immediate feedback.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Weekly Assignments</h3>
                    <p className="text-gray-600">Practice what you've learned with practical assignments and mini-projects that build your portfolio.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1-1 Consultation</h3>
                    <p className="text-gray-600">Schedule individual sessions to get help with concepts you find challenging or to discuss your progress.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Final Project & Hackathon</h3>
                    <p className="text-gray-600">Complete a capstone project and participate in our hackathon to apply your skills and connect with industry professionals.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 animate-on-scroll">
              <img 
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Online tech education" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Why Our Courses Are Different" 
            subtitle="We focus on practical skills and real-world applications to prepare you for the industry."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differences.map((item, index) => (
              <Card key={index} className="h-full animate-on-scroll">
                <CardBody className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Ready to Level Up Your Tech Skills?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-on-scroll">
            Enroll in one of our courses today and take the first step towards a successful tech career.
          </p>
          <Button to="/contact" variant="accent" size="lg" className="animate-on-scroll">
            Contact Us to Enroll
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;