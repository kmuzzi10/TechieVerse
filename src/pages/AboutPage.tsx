import React, { useEffect } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import Card, { CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Video, Award, Briefcase, Laptop2Icon } from "lucide-react";
import imgage1 from "../assets/group-young-business-people-working-office.jpg";

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Us - TechieVerse Training Centre";
  }, []);

  const approaches = [
    {
      icon: <Video size={32} className="text-primary-500" />,
      title: "Live Online Classes",
      description:
        "All our courses include live online sessions where you can interact directly with the instructor and ask questions in real-time.",
    },
    {
      icon: <Award size={32} className="text-accent-500" />,
      title: "Hackathons",
      description:
        "At the end of each course, participate in our hackathon to solve real-world problems and showcase your skills to potential employers.",
    },
    {
      icon: <Briefcase size={32} className="text-primary-500" />,
      title: "Paid Internships",
      description:
        "Top performers get opportunities for paid internships with our industry partners, giving you valuable work experience.",
    },
    {
      icon: <Laptop2Icon size={32} className="text-secondary-500" />,
      title: "Job Placements",
      description:
      "We facilitate job placements for our top-performing students in leading industries, providing opportunities to interview with potential employers and launch their careers.",
    },
  ];

  const instructors = [
    {
      name: "Muzammil Ahmed Khan",
      role: "Software Engineer",
      bio: "With over 4+ years of experience in both backend and frontend development, Muzammil has worked with top startups and enterprises. He brings a unique combination of technical expertise and a passion for helping students succeed in real-world software development. His freelance experience ensures he can provide insights into working in dynamic, fast-paced environments, preparing you for the tech industry’s diverse challenges.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
    },
    {
      name: "Esha Khalid",
      role: "Frontend Developer",
      bio: "Esha is a creative frontend developer with 2+ years of experience, bringing a keen eye for design and user experience to every project. She specializes in building dynamic, responsive websites using the latest frameworks. With a passion for creating intuitive and visually appealing user interfaces, Esha loves guiding students through the front-end development process and equipping them with the skills to craft standout web experiences. She also loves sharing tips on improving efficiency and design best practices.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
    },
    {
      name: "Khizar Hussain Siddiqui",
      role: "Flutter Developer",
      bio: "Khizar is a seasoned Flutter developer with 5+ years of experience, specializing in building high-performance, cross-platform mobile apps. He has worked on a variety of projects, from e-commerce to social media apps, always focusing on delivering excellent user experiences. Khizar is passionate about mobile development and loves helping students master Flutter, offering practical insights from his years of experience. He emphasizes the importance of clean code, app performance, and building apps that stand out in today’s competitive app market.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image
    },
  ];
  

  const timelineSteps = [
    {
      title: "Enrollment",
      description:
        "Choose your course and complete the registration process. Get your unique enrollment ID and access to learning materials.",
      color: "border-primary-500",
    },
    {
      title: "Learning Phase",
      description:
        "Attend live online classes twice a week and complete weekly assignments and coding challenges.",
      color: "border-secondary-500",
    },
    {
      title: "Consultation",
      description:
        "Schedule one-on-one sessions with instructors to get personalized guidance and help with difficult concepts.",
      color: "border-accent-500",
    },
    {
      title: "Hackathon",
      description:
        "Participate in our end-of-course hackathon to apply your skills to real-world problems and build your portfolio.",
      color: "border-primary-500",
    },
    {
      title: "Internship",
      description:
        "Top-performing students are offered paid internship opportunities with our industry partners.",
      color: "border-secondary-500",
    },
    {
      title: "Land a Job",
      description:
        "Leverage your portfolio, internship experience, and career support to secure a job in your desired field.",
      color: "border-primary-600",
    },
  ];
  

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
              About TechieVerse Training Centre
            </h1>
            <p className="text-xl text-gray-100 mb-8 animate-on-scroll">
              Building the next generation of tech professionals through quality
              education and real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At TechieVerse Training Centre, our mission is to bridge the gap
                between theoretical knowledge and practical industry
                requirements. We empower students with the skills and experience
                needed to excel in the competitive tech industry.
              </p>
              <p className="text-gray-700 mb-6">
                We believe in learning by doing, which is why our courses focus
                heavily on practical projects, real-world applications, and
                industry best practices.
              </p>
              <Button to="/services" variant="primary">
                Explore Our Courses
              </Button>
            </div>
            <div className="animate-on-scroll">
              <img
                src={imgage1}
                alt="Tech education mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Unique Learning Approach"
            subtitle="We combine technology, personal guidance, and real-world opportunities to create a comprehensive learning experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <Card key={index} className="h-full animate-on-scroll">
                <CardBody className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 p-3 bg-gray-100 rounded-full">
                    {approach.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600">{approach.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Meet Our Instructors"
            subtitle="Learn from experienced professionals who are passionate about teaching and mentoring."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="h-full animate-on-scroll">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-56 object-cover"
                  />
                </div>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-primary-500 font-medium mb-4">
                    {instructor.role}
                  </p>
                  <p className="text-gray-600">{instructor.bio}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Journey Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Student Journey"
            subtitle="From enrollment to industry-ready professional, here's how we transform your tech career."
          />

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

            {/* Timeline Steps */}
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative animate-on-scroll">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="hidden md:flex items-center justify-center">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full ${step.color.replace(
                          "border",
                          "bg"
                        )} shadow-md z-10`}
                      ></div>
                    </div>
                    <Card className="md:ml-6 w-full">
                      <CardBody className="p-6">
                        <h3
                          className={`text-xl font-semibold mb-3 ${step.color.replace(
                            "border",
                            "text"
                          )}`}
                        >
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-gray-700">{step.description}</p>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-600 to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Join Our Tech Community
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-on-scroll">
            Start your journey to becoming a tech professional with TechieVerse
            Training Centre.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <Button to="/services" variant="accent" size="lg">
              Explore Courses
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
