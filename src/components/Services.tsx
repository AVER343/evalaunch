'use client';

import { Code, Brain, Target, Zap, Cloud, BarChart3, ArrowRight, Megaphone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getAllServicesUnified, getCompanyProcess, type Service } from '@/lib/data';

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [process, setProcess] = useState<Array<{step: string; title: string; description: string}>>([]);

  useEffect(() => {
    const loadData = async () => {
      const [servicesData, processData] = await Promise.all([
        getAllServicesUnified(),
        getCompanyProcess()
      ]);
      setServices(servicesData);
      setProcess(processData);
    };
    loadData();
  }, []);

  // Map icons to services using public icons
  const getServiceIcon = (serviceId: string) => {
    const iconMap: { [key: string]: string } = {
      'strategy-advisory': '/icons/pantone.png',
      'digital-transformation': '/icons/mobile-app.png',
      'product-engineering': '/icons/mobile-app.png',
      'software-development': '/icons/mobile-app.png',
      'cloud-devops': '/icons/mobile-app.png',
      'data-analytics': '/icons/content-strategy.png',
      'ai-automation': '/icons/ai.png',
      'digital-marketing': '/icons/shopping.png'
    };
    return iconMap[serviceId] || '/icons/mobile-app.png';
  };

  // Map colors to services
  const getServiceColor = (index: number) => {
    const colors = ['primary', 'secondary', 'accent'];
    return colors[index % colors.length];
  };

  // Show loading state while data is being fetched
  if (services.length === 0) {
    return (
      <section id="services" className="relative py-20 bg-primary-600 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse text-gray-300 text-lg">Loading services...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="relative py-20 bg-primary-600 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 opacity-10">
        <Image src="/images/shape-1.png" alt="" width={300} height={300} />
      </div>
      <div className="absolute bottom-0 left-0 opacity-10">
        <Image src="/images/shape-2.png" alt="" width={250} height={250} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Services designed to accelerate your growth
          </h2>
          <p className="text-base text-gray-100 max-w-3xl mx-auto">
            Expert consulting across marketing, product, and AI—delivered end to end.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.length > 0 ? services
            .map((service, index) => {
            const serviceIcon = getServiceIcon(service.id);
            const color = getServiceColor(index);
            
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-100 animate-slide-up scroll-mt-20 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon and Title on same line */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg transition-all duration-300 group-hover:scale-110 bg-gray-100">
                    <Image 
                      src={serviceIcon} 
                      alt={`${service.title} icon`}
                      width={32}
                      height={32}
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.id === 'software-development' ? 'Software Development' : 
                     service.id === 'ai-automation' ? 'AI & Automation' : 
                     service.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  {service.shortDescription}
                </p>

                <ul className="space-y-2 mb-4">
                  {(service.features || []).slice(0, 8).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        color === 'primary' ? 'bg-primary-500' :
                        color === 'secondary' ? 'bg-secondary-500' :
                        'bg-accent-500'
                      }`}></div>
                      <span className="text-base text-gray-700">{feature.name}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`/services?service=${service.id}`}
                  aria-label={`Learn more about ${service.title}`}
                  className={`group w-full text-white py-3 px-6 rounded-lg transition-all duration-300 font-semibold text-lg block text-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    color === 'primary' ? 'bg-primary-600 hover:bg-primary-800 focus:ring-primary-500' :
                    color === 'secondary' ? 'bg-primary-600 hover:bg-primary-800 focus:ring-primary-500' :
                    'bg-accent-600 hover:bg-accent-800 focus:ring-accent-500'
                  }`}
                >
                  <span className="inline-flex items-center justify-center">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            );
          }) : (
            // Loading skeleton
            <div className="col-span-full flex justify-center items-center py-12">
              <div className="animate-pulse text-gray-300">Loading services...</div>
            </div>
          )}
        </div>

        {/* Section Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-100 text-base mb-8">
            eVaLaunche helps teams launch faster, scale smarter, and automate confidently.
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center opacity-75">
            <Image src="/images/success.png" alt="Success" width={60} height={60} className="animate-float" />
            <Image src="/images/medal.png" alt="Excellence" width={60} height={60} className="animate-float" style={{ animationDelay: '0.5s' }} />
            <Image src="/images/smile.png" alt="Happy clients" width={60} height={60} className="animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
