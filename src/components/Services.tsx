'use client';

import { Code, Brain, Megaphone } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAllServices, getCompanyProcess, type Service } from '@/lib/data';

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [process, setProcess] = useState<Array<{step: string; title: string; description: string}>>([]);

  useEffect(() => {
    const loadData = async () => {
      const [servicesData, processData] = await Promise.all([
        getAllServices(),
        getCompanyProcess()
      ]);
      setServices(servicesData);
      setProcess(processData);
    };
    loadData();
  }, []);

  // Map icons to services
  const getServiceIcon = (serviceId: string) => {
    const iconMap: { [key: string]: any } = {
      'software-development': Code,
      'ai-ml-solutions': Brain,
      'digital-marketing': Megaphone
    };
    return iconMap[serviceId] || Code;
  };

  // Map colors to services
  const getServiceColor = (index: number) => {
    const colors = ['primary', 'secondary', 'accent'];
    return colors[index % colors.length];
  };

  return (
    <section id="services" className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Services designed to accelerate your growth
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Expert consulting across marketing, product, and AI—delivered end to end.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const ServiceIcon = getServiceIcon(service.id);
            const color = getServiceColor(index);
            
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-gray-100 animate-slide-up scroll-mt-20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                  color === 'primary' ? 'bg-primary-500' :
                  color === 'secondary' ? 'bg-secondary-500' :
                  'bg-accent-500'
                }`}>
                  <ServiceIcon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                <ul className="space-y-3">
                  {service.features.slice(0, 6).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        color === 'primary' ? 'bg-primary-500' :
                        color === 'secondary' ? 'bg-secondary-500' :
                        'bg-accent-500'
                      }`}></div>
                      <span className="text-gray-700">{feature.name}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/services"
                  className={`mt-6 w-full text-white py-3 px-6 rounded-lg transition-colors duration-300 font-semibold block text-center ${
                    color === 'primary' ? 'bg-primary-600 hover:bg-primary-700' :
                    color === 'secondary' ? 'bg-secondary-600 hover:bg-secondary-700' :
                    'bg-accent-600 hover:bg-accent-700'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>

        {/* Section Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-100 text-lg">
            eVALaunche helps teams launch faster, scale smarter, and automate confidently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
