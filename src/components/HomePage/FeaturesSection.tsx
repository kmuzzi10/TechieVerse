import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Card, { CardBody } from "../ui/Card";
import { BookOpen, Users, Award, Briefcase, UserCheck, Laptop2 } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = { BookOpen, Users, Award, Briefcase, UserCheck, Laptop2 };

interface Feature {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

const FeaturesSection: React.FC<{ features: Feature[] }> = ({ features }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="section bg-light dark:bg-gray-900"
  >
    <div className="container-custom">
      <SectionTitle
        title="Why Choose TechieVerse?"
        subtitle="Our unique approach to tech education ensures you get not just theory, but practical skills you can apply immediately."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 + index * 0.1, ease: "easeOut" }}
            >
              <Card 
                className="h-full animate-on-scroll hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <CardBody className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-full transform hover:rotate-12 transition-transform duration-300">
                    {Icon && <Icon size={32} className="text-primary-500" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  </motion.section>
);

export default FeaturesSection; 