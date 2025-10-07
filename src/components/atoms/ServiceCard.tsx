'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    shortDescription: string;
    features: Array<{ name: string }>;
    color: string;
    icon: any;
  };
  index: number;
  href?: string;
  className?: string;
}

const ServiceCard = ({ service, index, href, className = '' }: ServiceCardProps) => {
  const { id, title, shortDescription, features, color, icon: IconComponent } = service;

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'bg-gradient-to-br from-primary-500 to-primary-600',
      secondary: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      accent: 'bg-gradient-to-br from-blue-500 to-blue-600'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const getButtonColorClasses = (color: string) => {
    const colors = {
      primary: 'bg-primary-600 hover:bg-primary-800 focus:ring-primary-500',
      secondary: 'bg-primary-600 hover:bg-primary-800 focus:ring-primary-500',
      accent: 'bg-accent-600 hover:bg-accent-800 focus:ring-accent-500'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const getDotColorClasses = (color: string) => {
    const colors = {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      accent: 'bg-accent-500'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-100 group ${className}`}
    >
      {/* Icon and Title */}
      <div className="flex items-center space-x-3 mb-3">
        <div className={`inline-flex p-2 rounded-lg transition-all duration-300 group-hover:rotate-3 ${getColorClasses(color)}`}>
          <IconComponent className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      </div>
      
      {/* Description */}
      <p className="text-base text-gray-600 mb-3 leading-relaxed">
        {shortDescription}
      </p>

      {/* Features */}
      <ul className="space-y-1 mb-3">
        {features.slice(0, 3).map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center space-x-2">
            <div className={`w-1 h-1 rounded-full ${getDotColorClasses(color)}`}></div>
            <span className="text-sm text-gray-700">{feature.name}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      {href && (
        <Link 
          href={href}
          aria-label={`Learn more about ${title}`}
          className={`group w-full text-white py-2 px-4 rounded-lg transition-all duration-300 font-semibold text-base block text-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${getButtonColorClasses(color)}`}
        >
          <span className="inline-flex items-center justify-center">
            Learn More
            <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      )}
    </motion.div>
  );
};

export default ServiceCard;
