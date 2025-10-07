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
      <section id="services" className="relative py-20 bg-primary-600 overflow-hidden" style={{ paddingTop: '100px' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse text-gray-300 text-lg">Loading services...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="relative py-20 bg-primary-600 overflow-hidden" style={{ paddingTop: '100px' }}>
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
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Expert consulting across marketing, product, and AI—delivered end to end.
          </p>
        </div>

        {/* Modern Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.length > 0 ? services
            .filter(s => ['software-development','ai-automation','digital-marketing'].includes(s.id))
            .map((service, index) => {
            const serviceIcon = getServiceIcon(service.id);
            const color = getServiceColor(index);
            
            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 animate-slide-up scroll-mt-20 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  color === 'primary' ? 'bg-gradient-to-br from-blue-500 to-purple-600' :
                  color === 'secondary' ? 'bg-gradient-to-br from-cyan-500 to-blue-600' :
                  'bg-gradient-to-br from-green-500 to-teal-600'
                }`}></div>
                
                {/* Icon and Title */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                    color === 'primary' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    color === 'secondary' ? 'bg-gradient-to-br from-cyan-500 to-cyan-600' :
                    'bg-gradient-to-br from-green-500 to-green-600'
                  }`}>
                    <Image 
                      src={serviceIcon} 
                      alt={`${service.title} icon`}
                      width={40}
                      height={40}
                      className="text-white"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                    {service.id === 'software-development' ? 'Software Development' : 
                     service.id === 'ai-automation' ? 'AI & Automation' : 
                     service.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Features List */}
                <div className="relative z-10 mb-8">
                  <ul className="space-y-3">
                    {(service.features || []).slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          color === 'primary' ? 'bg-blue-500' :
                          color === 'secondary' ? 'bg-cyan-500' :
                          'bg-green-500'
                        }`}></div>
                        <span className="text-sm text-gray-700 leading-relaxed">{feature.name}</span>
                      </li>
                    ))}
                    {(service.features || []).length > 4 && (
                      <li className="text-sm text-gray-500 font-medium">
                        +{(service.features || []).length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="relative z-10">
                  <Link 
                    href={`/services?service=${service.id}`}
                    aria-label={`Learn more about ${service.title}`}
                    className={`group/btn w-full text-white py-4 px-6 rounded-xl transition-all duration-300 font-semibold text-base block text-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      color === 'primary' ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500' :
                      color === 'secondary' ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 focus:ring-cyan-500' :
                      'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:ring-green-500'
                    }`}
                  >
                    <span className="inline-flex items-center justify-center">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <div className={`w-full h-full rounded-full ${
                    color === 'primary' ? 'bg-blue-500' :
                    color === 'secondary' ? 'bg-cyan-500' :
                    'bg-green-500'
                  }`}></div>
                </div>
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
          <p className="text-gray-100 text-lg mb-8">
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
