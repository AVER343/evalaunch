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
            .filter(s => ['software-development','ai-automation','digital-marketing'].includes(s.id))
            .map((service, index) => {
            const serviceIcon = getServiceIcon(service.id);
            const color = getServiceColor(index);
            
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 animate-slide-up scroll-mt-20 group transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 ${
                    color === 'primary' ? 'bg-gradient-to-br from-primary-500 to-primary-600' :
                    color === 'secondary' ? 'bg-gradient-to-br from-cyan-500 to-cyan-600' :
                    'bg-gradient-to-br from-blue-500 to-blue-600'
                  }`}>
                    <Image 
                      src={serviceIcon} 
                      alt={`${service.title} icon`}
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.id === 'software-development' ? 'Software Development' : 
                     service.id === 'ai-automation' ? 'AI & Automation' : 
                     service.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">What We Offer:</h4>
                  <ul className="space-y-2">
                    {(service.features || []).slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          color === 'primary' ? 'bg-primary-500' :
                          color === 'secondary' ? 'bg-cyan-500' :
                          'bg-blue-500'
                        }`}></div>
                        <span className="text-sm text-gray-700">{feature.name}</span>
                      </li>
                    ))}
                    {(service.features || []).length > 4 && (
                      <li className="text-sm text-primary-600 font-medium ml-5">
                        +{(service.features || []).length - 4} more services
                      </li>
                    )}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-600">{service.stats?.projects || '0+'}</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-600">{service.stats?.clients || '0+'}</div>
                    <div className="text-xs text-gray-500">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-600">{service.stats?.satisfaction || '0%'}</div>
                    <div className="text-xs text-gray-500">Satisfaction</div>
                  </div>
                </div>

                <Link 
                  href={`/services?service=${service.id}`}
                  aria-label={`Learn more about ${service.title}`}
                  className={`group w-full text-white py-3 px-6 rounded-xl transition-all duration-300 font-semibold text-base block text-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    color === 'primary' ? 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500' :
                    color === 'secondary' ? 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500' :
                    'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
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
