import React, { useEffect } from "react";
import HeroSection from "../components/HomePage/HeroSection";
import FeaturesSection from "../components/HomePage/FeaturesSection";
import StatsSection from "../components/HomePage/StatsSection";
import CoursesSection from "../components/HomePage/CoursesSection";
import TestimonialsSection from "../components/HomePage/TestimonialsSection";
import CTASection from "../components/HomePage/CTASection";
import { features, testimonials, courses } from "../data/homeData";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title =
      "Empowering Future Tech Leaders - TechieVerse Training Academy";
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturesSection features={features} />
      <StatsSection />
      <CoursesSection courses={courses} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  );
};

export default HomePage;
