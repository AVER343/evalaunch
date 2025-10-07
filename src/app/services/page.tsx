'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Target, Zap, Cloud, BarChart3, Megaphone, CheckCircle, ArrowRight, ArrowLeft, Star, Users, Clock, Award, TrendingUp, Shield, Globe, Smartphone, Laptop, Database, Palette, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesLayout from '../../components/containers/ServicesLayout';
import ServiceSection from '../../components/containers/ServiceSection';
import Tag from '../../components/atoms/Tag';
import Button from '../../components/atoms/Button';
import Breadcrumb from '../../components/atoms/Breadcrumb';
import { getCompanyStats, getAllServicesUnified, type Service } from '../../lib/data';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Engineering' | 'AI' | 'Marketing'>('All');
  const [companyStats, setCompanyStats] = useState<any>(null);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const load = async () => {
      const [stats, servicesData] = await Promise.all([
        getCompanyStats(),
        getAllServicesUnified()
      ]);
      setCompanyStats(stats);
      setServices(servicesData);
    };
    load();
  }, []);

  // Reset activeService when services change
  useEffect(() => {
    if (services.length > 0 && activeService >= services.length) {
      setActiveService(0);
    }
  }, [services.length, activeService]);

  // Map icons to services
  const getServiceIcon = (serviceId: string) => {
    const iconMap: { [key: string]: any } = {
      'strategy-advisory': Target,
      'digital-transformation': Zap,
      'product-engineering': Code,
      'software-development': Code,
      'cloud-devops': Cloud,
      'data-analytics': BarChart3,
      'ai-automation': Brain,
      'digital-marketing': Megaphone
    };
    return iconMap[serviceId] || Code;
  };

  // Map services to categories
  const getServiceCategory = (serviceId: string): 'Engineering' | 'AI' | 'Marketing' => {
    const categoryMap: { [key: string]: 'Engineering' | 'AI' | 'Marketing' } = {
      'strategy-advisory': 'Engineering',
      'digital-transformation': 'Engineering',
      'product-engineering': 'Engineering',
      'software-development': 'Engineering',
      'cloud-devops': 'Engineering',
      'data-analytics': 'Engineering',
      'ai-automation': 'AI',
      'digital-marketing': 'Marketing'
    };
    return categoryMap[serviceId] || 'Engineering';
  };

  // Map sub-services to categories for filtering
  const getSubServiceCategory = (subServiceId: string): 'Engineering' | 'AI' | 'Marketing' => {
    const subServiceCategoryMap: { [key: string]: 'Engineering' | 'AI' | 'Marketing' } = {
      // AI & Automation sub-services
      'ai-automation-workflows': 'AI',
      'ai-chatbots': 'AI',
      'llm-integration': 'AI',
      'process-automation': 'AI',
      'machine-learning': 'AI',
      'agent-workflows': 'AI',
      'natural-language-processing': 'AI',
      'ai-strategy': 'AI',
      
      // Software Development sub-services
      'web-development': 'Engineering',
      'app-development': 'Engineering',
      'api-development': 'Engineering',
      'cloud-devops': 'Engineering',
      'data-analytics': 'Engineering',
      'web-applications': 'Engineering',
      'mobile-development': 'Engineering',
      'quality-engineering': 'Engineering',
      'ui-ux-design': 'Engineering',
      'product-management': 'Engineering',
      'platform-engineering': 'Engineering',
      'cicd-pipelines': 'Engineering',
      'cloud-architecture': 'Engineering',
      'observability': 'Engineering',
      'cost-optimization': 'Engineering',
      'security-compliance': 'Engineering',
      'data-warehousing': 'Engineering',
      'analytics-platforms': 'Engineering',
      'data-pipeline': 'Engineering',
      'decision-support': 'Engineering',
      'data-governance': 'Engineering',
      'predictive-analytics': 'Engineering',
      
      // Digital Marketing sub-services
      'ppc-advertising': 'Marketing',
      'seo-optimization': 'Marketing',
      'social-media-marketing': 'Marketing',
      'content-marketing': 'Marketing',
      'email-marketing': 'Marketing',
      'analytics-reporting': 'Marketing'
    };
    return subServiceCategoryMap[subServiceId] || 'Engineering';
  };

  // Transform API services to component format with sub-services
  const transformedServices = services.map(service => ({
    id: service.id,
    title: service.title,
    icon: getServiceIcon(service.id),
    description: service.description,
    category: getServiceCategory(service.id),
    features: service.subServices?.map(sub => `${sub.title} - ${sub.description}`) || service.features.map(f => `${f.name} - ${f.description}`),
    subServices: service.subServices || [],
    timeline: service.timeline,
    projects: service.stats.projects,
    clients: service.stats.clients,
    satisfaction: service.stats.satisfaction,
    technologies: service.technologies,
    pricing: service.pricing,
    process: [
      { step: 'Discovery & Planning', description: 'Requirements analysis and project planning' },
      { step: 'Development & Implementation', description: 'Core development and feature implementation' },
      { step: 'Testing & Quality Assurance', description: 'Comprehensive testing and validation' },
      { step: 'Deployment & Support', description: 'Production launch and ongoing maintenance' }
    ]
  }));

  // Create a flat list of all services and sub-services for filtering
  const allFilterableItems = [
    ...transformedServices.map(service => ({
      id: service.id,
      title: service.title,
      type: 'service' as const,
      category: service.category,
      description: service.description,
      icon: service.icon
    })),
    ...transformedServices.flatMap(service => 
      service.subServices.map(sub => ({
        id: sub.id,
        title: sub.title,
        type: 'sub-service' as const,
        category: getSubServiceCategory(sub.id),
        description: sub.description,
        icon: service.icon,
        parentService: service.id
      }))
    )
  ];

  // Static categories for filter UI
  const categories: Array<typeof activeCategory> = ['All', 'Engineering', 'AI', 'Marketing'];

  // Compute filtered list based on activeCategory
  const filteredServices = transformedServices.length > 0 ? transformedServices.filter((s) => activeCategory === 'All' ? true : s.category === activeCategory) : [];
  
  // Compute filtered items (services + sub-services) based on activeCategory
  const filteredItems = allFilterableItems.filter((item) => 
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  const testimonials = [
    {
      name: 'Client A',
      company: 'Technology Company',
      role: 'CEO',
      content: 'eVaLaunche transformed our business with their AI solutions. Our efficiency increased significantly and customer satisfaction improved.',
      rating: 5,
      service: 'AI/ML Solutions'
    },
    {
      name: 'Client B',
      company: 'E-commerce Company',
      role: 'CTO',
      content: 'The mobile app they developed exceeded our expectations. Clean code, excellent performance, and outstanding support.',
      rating: 5,
      service: 'Software Development'
    },
    {
      name: 'Client C',
      company: 'Marketing Agency',
      role: 'Marketing Director',
      content: 'Their digital marketing strategies increased our ROI significantly. Professional, data-driven, and results-focused approach.',
      rating: 4,
      service: 'Digital Marketing'
    }
  ];

  const stats = companyStats ? [
    { icon: '/icons/conversation.png', label: 'Happy Clients', value: companyStats.happyClients, color: 'text-primary-600' },
    { icon: '/icons/mobile-app.png', label: 'Projects Completed', value: companyStats.projectsCompleted, color: 'text-primary-600' },
    { icon: '/images/success.png', label: 'Success Rate', value: companyStats.successRate, color: 'text-primary-600' },
    { icon: '/images/medal.png', label: 'Years Experience', value: companyStats.yearsExperience, color: 'text-primary-600' }
  ] : [];

  const goToContact = () => {
    window.location.href = '/contact';
  };

  // Show loading state while data is being fetched
  if (services.length === 0 || transformedServices.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-600 text-lg">Loading services...</div>
      </div>
    );
  }

  // Ensure activeService is within bounds and provide defaults
  const currentService = transformedServices[activeService] || transformedServices[0] || {
    id: '',
    title: 'Loading...',
    icon: Code,
    description: 'Loading service details...',
    category: 'Engineering' as const,
    features: [],
    timeline: 'Loading...',
    projects: '0',
    clients: '0',
    satisfaction: '0%',
    technologies: [],
    process: []
  };

  return (
      <>
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: 'Services', isActive: true }
            ]}
          />
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-2">Filter by Category</h3>
            <p className="text-base text-gray-600">Browse our services and sub-services by category</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Tag
                key={category}
                variant={activeCategory === category ? 'primary' : 'gray'}
                onClick={() => setActiveCategory(category)}
                className="cursor-pointer"
              >
                {category}
              </Tag>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Service Categories</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions organized by category. Each category offers a complete suite of services to meet your business needs.
            </p>
          </div>

          {/* Service Category Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Sub-services List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">What We Offer:</h4>
                    <ul className="space-y-2">
                      {service.subServices.slice(0, 4).map((subService, subIndex) => (
                        <li key={subIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                          <span className="text-sm text-gray-700">{subService.title}</span>
                        </li>
                      ))}
                      {service.subServices.length > 4 && (
                        <li className="text-sm text-primary-600 font-medium">
                          +{service.subServices.length - 4} more services
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">{service.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">{service.clients}</div>
                      <div className="text-xs text-gray-500">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">{service.satisfaction}</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="primary"
                    size="md"
                    href={`/services/${service.id}`}
                    className="w-full"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Offerings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What We <span className="text-primary-600">Offer</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of our comprehensive service offerings across all categories
            </p>
          </div>

          {/* Service Details */}
          <div className="space-y-12">
            {filteredServices.map((service, serviceIndex) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: serviceIndex * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  {/* Service Header */}
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl">
                        <IconComponent className="h-8 w-8 text-primary-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary-600" />
                          <span className="text-gray-600">Timeline: {service.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-primary-600" />
                          <span className="text-gray-600">Starting at: {service.pricing?.startingAt || 'Contact us'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.subServices.map((subService, subIndex) => (
                      <div
                        key={subIndex}
                        className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-300 transition-colors duration-200"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{subService.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{subService.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  {service.technologies && service.technologies.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies We Use</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">{service.projects} projects</span> • 
                        <span className="font-medium ml-1">{service.clients} clients</span> • 
                        <span className="font-medium ml-1">{service.satisfaction} satisfaction</span>
                      </div>
                      <Button
                        variant="primary"
                        size="md"
                        href={`/services/${service.id}`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services & Sub-Services Grid */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-2">All Services & Sub-Services</h3>
            <p className="text-base text-gray-600">Click on any service or sub-service to learn more</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item, index) => {
              const IconComponent = item.icon;
              const isSubService = item.type === 'sub-service';
              
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    isSubService 
                      ? 'border-blue-200 bg-blue-50 hover:border-blue-300' 
                      : 'border-gray-200 bg-white hover:border-primary-300'
                  }`}
                  onClick={() => {
                    if (isSubService && 'parentService' in item) {
                      // Find the parent service index
                      const parentIndex = transformedServices.findIndex(s => s.id === item.parentService);
                      if (parentIndex !== -1) {
                        setActiveService(parentIndex);
                      }
                    } else {
                      // Find the service index
                      const serviceIndex = transformedServices.findIndex(s => s.id === item.id);
                      if (serviceIndex !== -1) {
                        setActiveService(serviceIndex);
                      }
                    }
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      isSubService ? 'bg-blue-100' : 'bg-primary-100'
                    }`}>
                      <IconComponent className={`h-5 w-5 ${
                        isSubService ? 'text-blue-600' : 'text-primary-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-base font-semibold ${
                        isSubService ? 'text-blue-900' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                      {isSubService && (
                        <span className="inline-block mt-2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          Sub-service
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Impact</span> in Numbers
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Delivering exceptional results across all our services with proven track record.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
                    <Image 
                      src={stat.icon} 
                      alt={`${stat.label} icon`}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base text-white/90 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss your project and see how we can help you achieve your goals with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={goToContact}
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/case-studies"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}