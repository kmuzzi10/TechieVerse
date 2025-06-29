import React from "react";
import SectionTitle from "../ui/SectionTitle";
import TestimonialSlider from "../ui/TestimonialSlider";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialsSection: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="section bg-light dark:bg-gray-900"
  >
    <div className="container-custom">
      <SectionTitle
        title="Student Success Stories"
        subtitle="Hear from our alumni who have transformed their careers through our training programs."
      />
      <TestimonialSlider testimonials={testimonials} />
    </div>
  </motion.section>
);

export default TestimonialsSection; 