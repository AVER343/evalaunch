'use client';

import { Code, Brain, Megaphone, Search, BarChart3, Users, Shield, Zap, Globe, Cloud, Palette, TestTube, Rocket, LifeBuoy } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom web and mobile applications built with cutting-edge technologies',
      features: [
        'Web Applications',
        'Mobile Apps (iOS/Android)',
        'Enterprise Solutions',
        'API Development',
        'Cloud Integration',
        'DevOps & Deployment'
      ],
               color: 'primary',
               gradient: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Intelligent automation and machine learning solutions for business growth',
      features: [
        'Machine Learning Models',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Chatbots & Virtual Assistants',
        'Data Science Consulting'
      ],
               color: 'secondary',
               gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that drive growth and engagement',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'PPC Advertising',
        'Email Marketing',
        'Analytics & Reporting'
      ],
               color: 'accent',
               gradient: 'from-yellow-500 to-blue-500'
    }
  ];


  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions that transform businesses 
            and drive sustainable growth through innovation and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-gray-100 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      service.color === 'primary' ? 'bg-primary-500' :
                      service.color === 'secondary' ? 'bg-secondary-500' :
                      'bg-accent-500'
                    }`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`mt-6 w-full text-white py-3 px-6 rounded-lg transition-colors duration-300 font-semibold ${
                service.color === 'primary' ? 'bg-primary-600 hover:bg-primary-700' :
                service.color === 'secondary' ? 'bg-secondary-600 hover:bg-secondary-700' :
                'bg-accent-600 hover:bg-accent-700'
              }`}>
                Learn More
              </button>
            </div>
          ))}
        </div>


        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h3>
            <p className="text-lg text-gray-600">
              A proven methodology that ensures project success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating a detailed project roadmap' },
              { step: '03', title: 'Development', description: 'Building your solution with precision' },
              { step: '04', title: 'Launch', description: 'Deploying and optimizing your project' }
            ].map((process, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
