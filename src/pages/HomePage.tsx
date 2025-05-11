import React, { useEffect } from "react";
import { ArrowRight, BookOpen, Users, Award, Briefcase } from "lucide-react";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import Card, { CardBody } from "../components/ui/Card";
import CourseCard from "../components/ui/CourseCard";
import homePic from "../assets/homePic-removebg-preview.png";
import TestimonialSlider from "../components/ui/TestimonialSlider";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title =
      "TechieVerse Training Centre - Empowering Future Tech Leaders";
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
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Mobile Developer at TechSolutions",
      content:
        "TechieVerse completely transformed my career. I went from knowing basic programming to becoming a full-time mobile developer within 6 months. The instructors are incredible!",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "hammad Khan",
      role: "Mobile Developer at TechSolutions",
      content:
        "TechieVerse completely transformed my career. I went from knowing basic programming to becoming a full-time mobile developer within 6 months. The instructors are incredible!",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ahmed Khan",
      role: "Mobile Developer at TechSolutions",
      content:
        "TechieVerse completely transformed my career. I went from knowing basic programming to becoming a full-time mobile developer within 6 months. The instructors are incredible!",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ahmed Khan",
      role: "Mobile Developer at TechSolutions",
      content:
        "TechieVerse completely transformed my career. I went from knowing basic programming to becoming a full-time mobile developer within 6 months. The instructors are incredible!",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sara Ahmed",
      role: "Full Stack Engineer",
      content:
        "The 1-1 consultation model at TechieVerse makes a huge difference. I got personalized guidance that helped me overcome challenging concepts that I had struggled with for months.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Zain Ali",
      role: "Flutter Developer at StartupX",
      content:
        "After completing the Flutter with Firebase course, I secured a job at a startup with a competitive salary. The practical approach to teaching at TechieVerse made all the difference.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-primary-800 to-secondary-800 text-white overflow-hidden">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-dark opacity-40 z-0"></div>

        {/* Giant rotated background image */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
          <img
            src={homePic}
            alt="Tech students background"
            className="w-[1000px] max-w-none opacity-10 brightness-10 transform-gpu rotate-[-15deg] scale-125"
          />
        </div>

        {/* Main content */}
        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Empowering Future Tech Leaders
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Learn Mobile & Fullstack Development from industry experts
                through our online training programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="accent" size="lg">
                  Enroll Now
                </Button>
                <Button
                  to="/services"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore Courses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose TechieVerse?"
            subtitle="Our unique approach to tech education ensures you get not just theory, but practical skills you can apply immediately."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full animate-on-scroll">
                <CardBody className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className="section bg-gray-50">
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
            />

            <CourseCard
              title="🌐 CodeCraft: Full Stack Engineering Bootcamp"
              technologies="MERN Stack, SQL, API Development"
              duration="6 months"
              frequency="2 classes/week"
              price="PKR 5000/month"
              image="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              color="bg-secondary-500"
            />

            <CourseCard
              title="🚀 FlutterFlow Pro: From UI to Backend Brillianced"
              technologies="Flutter + MERN Stack"
              duration="8 months"
              frequency="2 classes/week"
              price="PKR 8000/month"
              image="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              color="bg-accent-500"
            />
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="primary" className="mx-auto">
              View All Courses <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-light">
        <div className="container-custom">
          <SectionTitle
            title="Student Success Stories"
            subtitle="Hear from our alumni who have transformed their careers through our training programs."
          />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-on-scroll">
            Enroll today and take the first step towards becoming a tech
            professional. Our next batch starts soon!
          </p>
          <Button
            to="/contact"
            variant="accent"
            size="lg"
            className="animate-on-scroll"
          >
            Enroll Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
