import React, { useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Briefcase,
  UserCheck,
  Laptop2,
} from "lucide-react";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import Card, { CardBody } from "../components/ui/Card";
import CourseCard from "../components/ui/CourseCard";
import homePic from "../assets/homePic-removebg-preview.png";
import TestimonialSlider from "../components/ui/TestimonialSlider";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title =
      "Empowering Future Tech Leaders - TechieVerse Training Academy";
  }, []);

  const features = [
    {
      icon: <BookOpen size={32} className="text-primary-500" />,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of experience in tech and software development.",
    },
    {
      icon: <Users size={32} className="text-primary-500" />,
      title: "1-1 Consultation",
      description:
        "Get personalized guidance and support through dedicated one-on-one consultation sessions.",
    },
    {
      icon: <Award size={32} className="text-primary-500" />,
      title: "Hackathon Opportunities",
      description:
        "Put your skills to the test in our regular hackathons with real-world problem-solving.",
    },
    {
      icon: <Briefcase size={32} className="text-primary-500" />,
      title: "Paid Internships",
      description:
        "Top-performing students get connected to paid internship opportunities with our partner companies.",
    },
    {
      icon: <UserCheck size={32} className="text-primary-500" />,
      title: "Land a Job",
      description:
        "Top-performing students often receive full-time job offers from our partner companies after completing their internships.",
    },
    {
      icon: <Laptop2 size={32} className="text-primary-500" />,
      title: "Consultancy Session",
      description:
        "Get a consultancy session with a Silicon Valley software engineer to accelerate your career growth.",
    },
  ];

  const testimonials = [
    {
      name: "Ahsan Raza",
      role: "Mobile App Developer at AppCraft",
      content:
        "TechieVerse boosted my confidence and skills immensely. The real-world projects and mentorship helped me land my dream job faster than I expected.",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Mariam Siddiqui",
      role: "Frontend Developer at CodeNest",
      content:
        "The learning experience at TechieVerse was seamless. The instructors were always available and the projects gave me a deep understanding of frontend technologies.",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Hassan Mehmood",
      role: "React Native Developer at DigiApps",
      content:
        "From struggling with syntax to deploying apps on the Play Store—TechieVerse made it all possible. Their support system is top-notch.",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Areeba Noor",
      role: "Software Engineer at DevLogix",
      content:
        "TechieVerse provided me with a clear path to becoming a software engineer. The mock interviews and career support were a game changer.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Fahad Javed",
      role: "Full Stack Developer at ByteForce",
      content:
        "I was amazed by the hands-on teaching methodology. TechieVerse turned my passion into a profession and gave me the tools to excel.",
      image:
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Nimra Shah",
      role: "Flutter Developer at SoftTree",
      content:
        "The personalized feedback and hands-on Flutter projects helped me build a strong portfolio and land a top Flutter developer position. Truly grateful for TechieVerse!",
      image:
        "https://images.pexels.com/photos/4587660/pexels-photo-4587660.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-secondary-500/5 via-transparent to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              Transform Your Future with Tech Education
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-on-scroll">
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
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose TechieVerse?"
            subtitle="Our unique approach to tech education ensures you get not just theory, but practical skills you can apply immediately."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="h-full animate-on-scroll hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <CardBody className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-full transform hover:rotate-12 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Our Courses"
            subtitle="Comprehensive training programs designed to transform beginners into industry-ready professionals."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard
              title="📱 AppVerse: Mastering Mobile Development"
              technologies="Flutter, Firebase, API Integration"
              duration="6 months"
              frequency="2 classes/week"
              price="PKR 5000/month"
              image="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              color="bg-primary-500"
              className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            />

            <CourseCard
              title="🌐 CodeCraft: Full Stack Engineering Bootcamp"
              technologies="MERN Stack, SQL, API Development"
              duration="6 months"
              frequency="2 classes/week"
              price="PKR 5000/month"
              image="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              color="bg-secondary-500"
              className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            />

            <CourseCard
              title="🚀 FlutterFlow Pro: From UI to Backend Brilliance"
              technologies="Flutter + MERN Stack"
              duration="8 months"
              frequency="2 classes/week"
              price="PKR 8000/month"
              image="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              color="bg-accent-500"
              className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            />
          </div>

          <div className="text-center mt-12">
            <Button 
              to="/services" 
              variant="primary" 
              className="mx-auto hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              View All Courses <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-light dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Student Success Stories"
            subtitle="Hear from our alumni who have transformed their careers through our training programs."
          />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll dark:text-white">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-on-scroll dark:text-gray-200">
            Enroll today and take the first step towards becoming a tech
            professional. Our next batch starts soon!
          </p>
          <Button
            to="/contact"
            variant="accent"
            size="lg"
            className="animate-on-scroll hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            Enroll Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
