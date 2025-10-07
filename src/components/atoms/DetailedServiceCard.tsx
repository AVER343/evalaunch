'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, Users, CheckCircle, ArrowRight, Star, Zap } from 'lucide-react';
import Button from './Button';

interface DetailedServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    features: Array<{ name: string; description?: string }>;
    technologies: string[];
    pricing: {
      startingAt: string;
      currency: string;
      model: string;
    };
    timeline: string;
    stats: {
      projects: string;
      clients: string;
      satisfaction: string;
    };
    color?: string;
    icon: any;
  };
  index: number;
  onLearnMore: (serviceId: string) => void;
}

const DetailedServiceCard = ({ service, index, onLearnMore }: DetailedServiceCardProps) => {
  const IconComponent = service.icon;

  const getColorClasses = (color?: string) => {
    const colors = {
      'bg-purple-500': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'bg-blue-500': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'bg-green-500': 'bg-gradient-to-br from-green-500 to-green-600',
      'bg-orange-500': 'bg-gradient-to-br from-orange-500 to-orange-600',
      'bg-cyan-500': 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      'bg-indigo-500': 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    };
    return colors[color as keyof typeof colors] || colors['bg-blue-500'];
  };

  const getDotColorClasses = (color?: string) => {
    const colors = {
      'bg-purple-500': 'bg-purple-500',
      'bg-blue-500': 'bg-blue-500',
      'bg-green-500': 'bg-green-500',
      'bg-orange-500': 'bg-orange-500',
      'bg-cyan-500': 'bg-cyan-500',
      'bg-indigo-500': 'bg-indigo-500',
    };
    return colors[color as keyof typeof colors] || colors['bg-blue-500'];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 group"
    >
      {/* Service Header */}
      <div className="flex items-start space-x-4 mb-6">
        <div className={`inline-flex p-4 rounded-xl ${getColorClasses(service.color)} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          <IconComponent className="h-8 w-8 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            {service.description}
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Zap className="h-4 w-4 text-primary-600 mr-1" />
            <span className="text-lg font-bold text-gray-900">{service.stats.projects}</span>
          </div>
          <p className="text-xs text-gray-600">Projects</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Users className="h-4 w-4 text-primary-600 mr-1" />
            <span className="text-lg font-bold text-gray-900">{service.stats.clients}</span>
          </div>
          <p className="text-xs text-gray-600">Clients</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-lg font-bold text-gray-900">{service.stats.satisfaction}</span>
          </div>
          <p className="text-xs text-gray-600">Satisfaction</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Deliver:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start space-x-3">
              <div className={`w-2 h-2 rounded-full ${getDotColorClasses(service.color)} mt-2 flex-shrink-0`}></div>
              <div className="flex-1">
                <span className="text-sm font-medium text-gray-900">{feature.name}</span>
                {feature.description && (
                  <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies & Tools:</h4>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary-100 rounded-lg">
            <DollarSign className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Starting Price</p>
            <p className="text-lg font-bold text-primary-600">{service.pricing.startingAt}</p>
            <p className="text-xs text-gray-600">{service.pricing.model}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary-100 rounded-lg">
            <Clock className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Timeline</p>
            <p className="text-lg font-bold text-primary-600">{service.timeline}</p>
            <p className="text-xs text-gray-600">average delivery</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <Button
        variant="primary"
        size="lg"
        onClick={() => onLearnMore(service.id)}
        className="w-full group-hover:shadow-lg transition-all duration-300"
      >
        <span>Get Started with {service.title}</span>
        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
      </Button>
    </motion.div>
  );
};

export default DetailedServiceCard;
