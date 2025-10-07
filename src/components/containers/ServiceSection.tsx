'use client';

import { motion } from 'framer-motion';
import ServiceGrid from '../molecules/ServiceGrid';
import ServiceCarousel from '../molecules/ServiceCarousel';

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  features: Array<{ name: string }>;
  color: string;
  icon: any;
}

interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  technologies: string[];
  imageUrl?: string;
  slug: string;
}

interface ServiceSectionProps {
  services: Service[];
  projects?: Project[];
  title: string;
  description?: string;
  showExamples?: boolean;
  className?: string;
}

const ServiceSection = ({
  services,
  projects = [],
  title,
  description,
  showExamples = false,
  className = ''
}: ServiceSectionProps) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className={`py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <ServiceGrid services={services} columns={3} />
        </motion.div>

        {/* Examples Section */}
        {showExamples && projects.length > 0 && (
          <motion.div variants={itemVariants}>
            <ServiceCarousel 
              projects={projects} 
              title="Recent Projects"
              className="bg-gray-50 rounded-2xl p-8"
            />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default ServiceSection;
