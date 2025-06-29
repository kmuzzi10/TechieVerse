import React from "react";
import SectionTitle from "../ui/SectionTitle";
import CourseCard from "../ui/CourseCard";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Course {
  title: string;
  technologies: string;
  duration: string;
  frequency: string;
  price: string;
  image: string;
  color: string;
}

const CoursesSection: React.FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="section bg-gray-50 dark:bg-gray-800"
    >
      <div className="container-custom">
        <div>
          <SectionTitle
            title="Our Courses"
            subtitle="Comprehensive training programs designed to transform beginners into industry-ready professionals."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <CourseCard {...course} className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl" />
            </motion.div>
          ))}
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
    </motion.section>
  );
};

export default CoursesSection; 