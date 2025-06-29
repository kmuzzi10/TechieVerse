import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/ui/SectionTitle";
import Card, { CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  VideoIcon,
  Calendar,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify"; // Add this import
import "react-toastify/dist/ReactToastify.css"; // Add this import for styling
import { motion } from "framer-motion";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const emailID = import.meta.env.VITE_EMAIL;
const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us - TechieVerse Training Academy";

    // TODO: Replace with your actual EmailJS public key from https://dashboard.emailjs.com/admin/account
    emailjs.init("IlHMW98n5-zZrg5Jy");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
  
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
  
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {  // More flexible phone validation
      newErrors.phone = "Please enter a valid phone number";
    }
  
    if (!formData.course) {
      newErrors.course = "Please select a course";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      try {
        // Send notification email to admin
        const messageBody = `
              Hey Muzammil,

              We received a new inquiry from your TechieVerse Website:

                  Name: ${formData.name}
                  Email: ${formData.email}
                  Phone: ${formData.phone}
                  Interested Course: ${formData.course}

                  Message:
                  ${formData.message}

                  Best regards,
                  TechieVerse Team
                `;
        await emailjs.send(
          serviceID,
          templateID,
          {
            to_email: emailID,
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            course: formData.course,
            message: messageBody,
          }
        );

        setSubmitSuccess(true);
        toast.success("Thank you for contacting us! We've received your message.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        console.error("Failed to send email:", error);
        toast.error("Sorry, there was an error sending your message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-primary-500" />,
      title: "Phone",
      content: "+92 343 722 5876",
    },
    {
      icon: <Mail size={24} className="text-primary-500" />,
      title: "Email",
      content: "info.techieverse@gmail.com",
    },
    {
      icon: <MapPin size={24} className="text-primary-500" />,
      title: "Location",
      content: "Karachi, Pakistan",
    },
  ];

  const enrollmentSteps = [
    {
      icon: <BookOpen size={24} className="text-white" />,
      title: "Choose a Course",
      description:
        "Browse our courses and select the one that matches your career goals.",
      color: "bg-primary-500",
    },
    {
      icon: <Mail size={24} className="text-white" />,
      title: "Submit Application",
      description:
        "Fill out the contact form or email us directly with your course selection.",
      color: "bg-secondary-500",
    },
    {
      icon: <Phone size={24} className="text-white" />,
      title: "Confirmation Call",
      description:
        "Our team will call you to confirm details and answer any questions.",
      color: "bg-accent-500",
    },
    {
      icon: <Calendar size={24} className="text-white" />,
      title: "Payment & Scheduling",
      description:
        "Complete payment and receive your class schedule and enrollment ID.",
      color: "bg-primary-600",
    },
    {
      icon: <VideoIcon size={24} className="text-white" />,
      title: "Join First Class",
      description: "Receive Google Meet link and join your first online class.",
      color: "bg-secondary-600",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pt-32 pb-20 bg-gradient-to-r from-primary-700 to-secondary-700 text-white dark:from-primary-800 dark:to-secondary-800"
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-100 mb-8"
            >
              Have questions about our courses or ready to enroll? Get in touch
              with our team.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section bg-white dark:bg-gray-900"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 lg:p-8 relative z-10"
              >
                <div className="p-4 sm:p-6 lg:p-8">
                  {submitSuccess ? (
                    <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 px-4 sm:px-6 py-4 rounded-md mb-6">
                      Thank you for contacting us! We've sent you a confirmation
                      email. Our team will get back to you within 24 hours.
                    </div>
                  ) : null}

                  <form onSubmit={handleSubmit} className="relative z-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="relative sm:col-span-2 sm:col-start-1">
                        <label
                          htmlFor="name"
                          className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm sm:text-base"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 relative z-30 text-base ${
                            errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                          }`}
                          placeholder="Your name"
                          required
                          style={{ minHeight: '48px' }}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm sm:text-base"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 relative z-30 text-base ${
                            errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                          }`}
                          placeholder="your.email@example.com"
                          required
                          style={{ minHeight: '48px' }}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="relative">
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm sm:text-base"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 relative z-30 text-base ${
                            errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                          }`}
                          placeholder="03 XX XXXXXXX"
                          required
                          style={{ minHeight: '48px' }}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="course"
                          className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm sm:text-base"
                        >
                          Interested Course *
                        </label>
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 relative z-30 text-base ${
                            errors.course ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                          }`}
                          required
                          style={{ minHeight: '48px' }}
                        >
                          <option value="">Select a course</option>
                          <option value="mobile">AppVerse</option>
                          <option value="fullstack">CodeCraft</option>
                          <option value="flutter-backend">
                            FlutterFlow Pro
                          </option>
                          <option value="consultation">1-1 Consultation</option>
                        </select>
                        {errors.course && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.course}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6 relative">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm sm:text-base"
                      >
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 relative z-30 text-base resize-none"
                        placeholder="Tell us more about your learning goals..."
                        style={{ minHeight: '120px' }}
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full sm:w-auto relative z-30 min-h-[48px] text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                You can reach us directly through any of the following contact
                methods.
              </p>

              <div className="grid grid-cols-1 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="hover:scale-105 transition-transform duration-300">
                      <CardBody className="p-6 flex items-center space-x-4">
                        <div className="bg-primary-50 dark:bg-primary-900 p-3 rounded-full">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{info.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="mt-8 hover:scale-105 transition-transform duration-300">
                  <CardBody className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Saturday:</span>
                        <span className="font-medium">
                          Only Availaible For Consultations
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enrollment Process Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section bg-gray-50 dark:bg-gray-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Enrollment Process"
              subtitle="Follow these simple steps to enroll in our training programs."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {enrollmentSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 transition-transform duration-300">
                  <CardBody className="p-6 flex flex-col items-center text-center">
                    <div className={`${step.color} p-3 rounded-full mb-4`}>
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>

                    {index < enrollmentSteps.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="text-gray-300" size={20} />
                      </div>
                    )}
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Google Meet Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section bg-white dark:bg-gray-900"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Google Meet Classes</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                All our classes are conducted live through Google Meet. Once
                enrolled, you'll receive a class link before each session.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Classes are interactive with audio and video capabilities
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Screen sharing for demonstrations and code reviews
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Recording available for enrolled students who miss a session
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Chat functionality for questions during class
                  </p>
                </div>

              </div>

              <Button to="/services" variant="primary">
                View Course Details
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Online class via Google Meet"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-16 bg-gradient-to-r from-secondary-600 to-primary-600 dark:from-secondary-700 dark:to-primary-700 text-white"
      >
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Begin Your Tech Journey?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            Contact us today to enroll in our upcoming batch and take the first
            step towards a successful tech career.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              variant="accent"
              size="lg"
              onClick={() => {
                const contactForm = document.querySelector("form");
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Enroll Now
            </Button>
          </motion.div>
        </div>
        <ToastContainer />
      </motion.section>
    </>
  );
};

export default ContactPage;

