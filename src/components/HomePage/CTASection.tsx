import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const CTASection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent animate-pulse-slow"></div>
      <div className="container-custom text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Start Your Tech Journey?
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Enroll today and take the first step towards becoming a tech professional. Our next batch starts soon!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            to="/contact"
            variant="accent"
            size="lg"
            className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            Enroll Now
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection; 