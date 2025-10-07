'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ServicesLayout from '@/components/containers/ServicesLayout';
import ServiceSection from '@/components/containers/ServiceSection';
import ServiceCarousel from '@/components/molecules/ServiceCarousel';
import DetailedServiceCard from '@/components/atoms/DetailedServiceCard';
import Tag from '@/components/atoms/Tag';
import Button from '@/components/atoms/Button';
import Breadcrumb from '@/components/atoms/Breadcrumb';
import { motion } from 'framer-motion';
import { Brain, Code, Megaphone, Zap, Database, Target, Search, Share, Server, Smartphone, ArrowRight, Filter, X, Clock, DollarSign, Users, Star, CheckCircle } from 'lucide-react';
import { getMainServices } from '@/lib/data';

interface Service {
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

// Icon mapping function
const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    'Brain': Brain,
    'Code': Code,
    'Megaphone': Megaphone,
    'Zap': Zap,
    'Database': Database,
    'Target': Target,
    'Search': Search,
    'Share': Share,
    'Server': Server,
    'Smartphone': Smartphone
  };
  return iconMap[iconName] || Code;
};

// Color helper functions
const getColorClasses = (color: string) => {
  const colors = {
    primary: 'bg-gradient-to-br from-primary-500 to-primary-600',
    secondary: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    accent: 'bg-gradient-to-br from-blue-500 to-blue-600'
  };
  return colors[color as keyof typeof colors] || colors.primary;
};

const getDotColorClasses = (color: string) => {
  const colors = {
    primary: 'bg-primary-500',
    secondary: 'bg-cyan-500',
    accent: 'bg-blue-500'
  };
  return colors[color as keyof typeof colors] || colors.primary;
};

// Mock projects data for different service categories
const mockProjects = {
  'ai-automation': [
    {
      id: 'real-estate-assistant',
      title: 'AI Lead Assistant for Real Estate',
      description: 'An intelligent assistant that qualifies leads, schedules appointments, and provides property information 24/7.',
      challenge: 'Cut manual data entry by 80% and increase lead conversion by 45%.',
      technologies: ['React', 'n8n', 'OpenAI API', 'PostgreSQL'],
      slug: 'real-estate-ai-assistant'
    },
    {
      id: 'invoice-automation',
      title: 'Invoice Processing Automation',
      description: 'Automated invoice processing system that extracts data, validates information, and routes for approval.',
      challenge: 'Reduce invoice processing time from 2 days to 2 hours.',
      technologies: ['Python', 'OpenCV', 'FastAPI', 'MongoDB'],
      slug: 'invoice-processing-automation'
    },
    {
      id: 'customer-support-bot',
      title: 'Multi-language Support Bot',
      description: 'AI-powered customer support bot that handles queries in 12 languages with 95% accuracy.',
      challenge: 'Handle 10x more support requests with 60% cost reduction.',
      technologies: ['Node.js', 'LangChain', 'Redis', 'Docker'],
      slug: 'multilingual-support-bot'
    }
  ],
  'software-development': [
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce platform with advanced features like real-time inventory and AI recommendations.',
      challenge: 'Build a scalable platform to handle 100k+ concurrent users.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
      slug: 'ecommerce-platform'
    },
    {
      id: 'fitness-app',
      title: 'Fitness Tracking App',
      description: 'Cross-platform fitness app with workout tracking, social features, and AI-powered recommendations.',
      challenge: 'Create engaging user experience with offline functionality.',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'Expo'],
      slug: 'fitness-tracking-app'
    }
  ],
  'digital-marketing': [
    {
      id: 'saas-growth',
      title: 'SaaS Growth Campaign',
      description: 'Multi-channel marketing campaign that increased trial signups by 300% and reduced CAC by 40%.',
      challenge: 'Scale user acquisition while maintaining high-quality leads.',
      technologies: ['Google Ads', 'HubSpot', 'Intercom', 'Mixpanel'],
      slug: 'saas-growth-campaign'
    }
  ]
};

export default function ServiceCategoryPage({ params }: { params: { category: string } }) {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [categoryData, setCategoryData] = useState<any>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [searchParams]);

  useEffect(() => {
    const loadServicesData = async () => {
      try {
        const allServices = await getMainServices();
        const category = params.category;
        
        console.log('Loading services for category:', category);
        console.log('Available services:', allServices.map(s => s.slug));
        
        // Find the matching service category
        const matchingService = allServices.find(service => service.slug === category);
        
        console.log('Matching service:', matchingService);
        
        if (matchingService) {
          // Convert the service data to the format expected by our component
          const categoryInfo = {
            title: matchingService.title,
            description: matchingService.description,
            services: [matchingService], // Convert single service to array format
            projects: mockProjects[category as keyof typeof mockProjects] || []
          };
          setCategoryData(categoryInfo);
          setServices([matchingService]);
        } else {
          console.log('No matching service found for category:', category);
        }
      } catch (error) {
        console.error('Error loading services data:', error);
      }
    };

    loadServicesData();
  }, [params.category]);


  if (!categoryData || services.length === 0) {
    return (
      <ServicesLayout title="Service Not Found">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Category Not Found</h2>
          <p className="text-base text-gray-600 mb-8">The requested service category does not exist.</p>
          <Button href="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </ServicesLayout>
    );
  }

  const filteredServices = selectedService 
    ? services.filter((service: Service) => service.id === selectedService)
    : services;

  const handleLearnMore = (serviceId: string) => {
    // Navigate to contact page with service pre-selected
    window.location.href = `/contact?service=${serviceId}`;
  };

  // Generate breadcrumb items
  const getBreadcrumbItems = () => {
    const items = [
      { label: 'Services', href: '/services' },
      { label: categoryData.title, isActive: !selectedService }
    ];

    if (selectedService) {
      const service = categoryData.services.find((s: Service) => s.id === selectedService);
      if (service) {
        items.push({ label: service.title, isActive: true });
      }
    }

    return items;
  };

  return (
    <ServicesLayout 
      title={categoryData.title}
      description={categoryData.description}
    >
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={getBreadcrumbItems()} />
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <Filter className="h-4 w-4" />
            <span>Filter Services</span>
            {isFilterOpen ? <X className="h-4 w-4 ml-2" /> : null}
          </button>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Services</h3>
              
              {/* All Services Option */}
              <div className="mb-4">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    !selectedService 
                      ? 'bg-primary-100 text-primary-700 border-2 border-primary-200' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      !selectedService ? 'bg-primary-500' : 'bg-gray-400'
                    }`}></div>
                    <span className="font-medium">All Services</span>
                    <span className="ml-auto text-sm text-gray-500">
                      {services.length}
                    </span>
                  </div>
                </button>
              </div>

              {/* Individual Service Filters */}
              <div className="space-y-2">
                {services.map((service: Service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service.id);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedService === service.id 
                        ? 'bg-primary-100 text-primary-700 border-2 border-primary-200' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        selectedService === service.id ? 'bg-primary-500' : 'bg-gray-400'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{service.title}</div>
                        <div className="text-sm text-gray-500 truncate">
                          {service.shortDescription}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Clear Filters */}
              {selectedService && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      setIsFilterOpen(false);
                    }}
                    className="w-full text-center px-4 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Services Grid */}
            <div className="mb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedService ? `${filteredServices[0]?.title} Services` : `${categoryData.title} Services`}
                </h2>
                <p className="text-base text-gray-600">
                  {selectedService ? filteredServices[0]?.shortDescription : categoryData.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                {filteredServices.map((service: Service, index: number) => (
                  <DetailedServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    onLearnMore={handleLearnMore}
                  />
                ))}
              </div>
            </div>

            {/* Examples Section */}
            {categoryData.projects && categoryData.projects.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-8">
                <ServiceCarousel 
                  projects={categoryData.projects} 
                  title="Recent Projects"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                href="mailto:hello@evalaunche.com?subject=Project Inquiry"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/case-studies"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </ServicesLayout>
  );
}
