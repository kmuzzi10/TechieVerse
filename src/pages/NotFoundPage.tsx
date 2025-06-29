import React from 'react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="text-center py-20">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-600"
      >
        Sorry, the page you're looking for doesn't exist.
      </motion.p>
    </div>
  );
};

export default NotFoundPage;
