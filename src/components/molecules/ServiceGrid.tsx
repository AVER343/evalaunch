'use client';

import { motion } from 'framer-motion';
import ServiceCard from '../atoms/ServiceCard';

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  features: Array<{ name: string }>;
  color: string;
  icon: any;
}

interface ServiceGridProps {
  services: Service[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  baseHref?: string;
}

const ServiceGrid = ({ 
  services, 
  columns = 3, 
  className = '', 
  baseHref = '/services' 
}: ServiceGridProps) => {
  const getGridClasses = () => {
    const gridClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };
    return gridClasses[columns];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`grid ${getGridClasses()} gap-6 ${className}`}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          href={`${baseHref}/${service.id}`}
        />
      ))}
    </motion.div>
  );
};

export default ServiceGrid;
