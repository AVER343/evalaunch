'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, Code, Brain, Megaphone, CheckCircle, Star, Users, Clock, DollarSign, Shield, Zap, Globe, Cloud, Palette, TestTube, Rocket, LifeBuoy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function ServicesContent() {
  const [activeService, setActiveService] = useState(0);
  const searchParams = useSearchParams();

  const services = [
    {
      id: 'software-development',
      title: 'Software Development',
      icon: Code,
      description: 'Custom web and mobile applications built with cutting-edge technologies and modern development practices.',
      color: 'primary',
      gradient: 'from-yellow-500 to-yellow-700',
      features: [
        'Web Applications',
        'Mobile Apps (iOS/Android)',
        'Enterprise Solutions',
        'API Development',
        'Cloud Integration',
        'DevOps & Deployment'
      ],
      detailedFeatures: [
        {
          category: 'Web Development',
          items: [
            'React.js & Next.js Applications',
            'Vue.js & Angular Solutions',
            'Node.js Backend Development',
            'Full-Stack Web Applications',
            'Progressive Web Apps (PWA)',
            'E-commerce Platforms',
            'Content Management Systems',
            'Custom Web Portals'
          ]
        },
        {
          category: 'Mobile Development',
          items: [
            'Native iOS Applications',
            'Native Android Applications',
            'Cross-Platform Apps (React Native)',
            'Flutter Applications',
            'Hybrid Mobile Solutions',
            'Mobile App UI/UX Design',
            'App Store Optimization',
            'Mobile App Testing & QA'
          ]
        },
        {
          category: 'Backend & API',
          items: [
            'RESTful API Development',
            'GraphQL API Implementation',
            'Microservices Architecture',
            'Database Design & Optimization',
            'Cloud Infrastructure Setup',
            'Serverless Applications',
            'Real-time Applications',
            'Third-party Integrations'
          ]
        }
      ],
      timeline: '4-12 weeks',
      process: [
        'Requirements Analysis',
        'Technical Architecture',
        'Development & Testing',
        'Deployment & Launch'
      ]
    },
    {
      id: 'ai-ml-solutions',
      title: 'AI/ML Solutions',
      icon: Brain,
      description: 'Intelligent automation and machine learning solutions that drive business growth and operational efficiency.',
      color: 'secondary',
      gradient: 'from-blue-500 to-blue-700',
      features: [
        'Machine Learning Models',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Chatbots & Virtual Assistants',
        'Data Science Consulting'
      ],
      detailedFeatures: [
        {
          category: 'Machine Learning',
          items: [
            'Custom ML Model Development',
            'Predictive Analytics Solutions',
            'Recommendation Systems',
            'Anomaly Detection',
            'Time Series Forecasting',
            'Classification & Regression Models',
            'Deep Learning Implementation',
            'Model Training & Optimization'
          ]
        },
        {
          category: 'Natural Language Processing',
          items: [
            'Text Analysis & Sentiment Analysis',
            'Language Translation Systems',
            'Document Processing & OCR',
            'Voice Recognition & Synthesis',
            'Chatbot Development',
            'Question Answering Systems',
            'Text Summarization',
            'Named Entity Recognition'
          ]
        },
        {
          category: 'Computer Vision',
          items: [
            'Image Classification & Recognition',
            'Object Detection & Tracking',
            'Facial Recognition Systems',
            'Medical Image Analysis',
            'Quality Control Automation',
            'Augmented Reality Solutions',
            'Video Analytics',
            'Real-time Image Processing'
          ]
        }
      ],
      timeline: '6-16 weeks',
      process: [
        'Data Analysis & Preparation',
        'Model Development & Training',
        'Testing & Validation',
        'Deployment & Monitoring'
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Megaphone,
      description: 'Data-driven marketing strategies that drive growth, engagement, and measurable results for your business.',
      color: 'accent',
      gradient: 'from-yellow-500 to-blue-500',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'PPC Advertising',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      detailedFeatures: [
        {
          category: 'Search Engine Optimization',
          items: [
            'Technical SEO Audit',
            'Keyword Research & Strategy',
            'On-Page Optimization',
            'Link Building Campaigns',
            'Local SEO Optimization',
            'E-commerce SEO',
            'SEO Performance Tracking',
            'Competitor Analysis'
          ]
        },
        {
          category: 'Social Media Marketing',
          items: [
            'Social Media Strategy Development',
            'Content Creation & Curation',
            'Community Management',
            'Influencer Partnerships',
            'Social Media Advertising',
            'Brand Awareness Campaigns',
            'Social Media Analytics',
            'Crisis Management'
          ]
        },
        {
          category: 'Paid Advertising',
          items: [
            'Google Ads Management',
            'Facebook & Instagram Ads',
            'LinkedIn Advertising',
            'YouTube Advertising',
            'Display Advertising',
            'Retargeting Campaigns',
            'Ad Creative Development',
            'Campaign Optimization'
          ]
        }
      ],
      timeline: '2-8 weeks',
      process: [
        'Strategy Development',
        'Campaign Setup & Launch',
        'Monitoring & Optimization',
        'Reporting & Analysis'
      ]
    }
  ];

  // Handle URL query parameters to set active service
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const serviceIndex = services.findIndex(service => service.id === serviceParam);
      if (serviceIndex !== -1) {
        setActiveService(serviceIndex);
      }
    }
  }, [searchParams]);

  const additionalServices = [
    {
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Beautiful, intuitive user interfaces that enhance user experience and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing']
    },
    {
      title: 'Quality Assurance',
      icon: TestTube,
      description: 'Comprehensive testing services to ensure your applications are bug-free and perform optimally.',
      features: ['Manual Testing', 'Automated Testing', 'Performance Testing', 'Security Testing', 'User Acceptance Testing']
    },
    {
      title: 'Cloud Solutions',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and migration services for modern applications.',
      features: ['AWS Solutions', 'Azure Services', 'Google Cloud', 'Cloud Migration', 'DevOps Implementation']
    },
    {
      title: 'Consulting',
      icon: LifeBuoy,
      description: 'Strategic technology consulting to help you make informed decisions and optimize your tech stack.',
      features: ['Technology Strategy', 'Architecture Review', 'Code Audits', 'Performance Optimization', 'Security Assessment']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Our Services</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end technology services that transform businesses and drive sustainable growth through innovation and expertise.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeService === index
                    ? service.color === 'primary' ? 'bg-yellow-500 text-white' :
                      service.color === 'secondary' ? 'bg-blue-500 text-white' :
                      'bg-gradient-to-r from-yellow-500 to-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Service Info */}
              <div>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${services[activeService].gradient} mb-6`}>
                  {(() => {
                    const IconComponent = services[activeService].icon;
                    return <IconComponent className="h-8 w-8 text-white" />;
                  })()}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {services[activeService].title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {services[activeService].description}
                </p>

                {/* Quick Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Timeline</h5>
                  <p className="text-sm text-gray-600">{services[activeService].timeline}</p>
                </div>
              </div>

              {/* Detailed Features */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Detailed Capabilities</h4>
                <div className="space-y-6">
                  {services[activeService].detailedFeatures.map((category, index) => (
                    <div key={index}>
                      <h5 className="font-semibold text-gray-900 mb-3">{category.category}</h5>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              services[activeService].color === 'primary' ? 'bg-yellow-500' :
                              services[activeService].color === 'secondary' ? 'bg-blue-500' :
                              'bg-gradient-to-r from-yellow-500 to-blue-500'
                            }`}></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Our Process</h4>
              <div className="grid md:grid-cols-4 gap-6">
                {services[activeService].process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 ${
                      services[activeService].color === 'primary' ? 'bg-yellow-500' :
                      services[activeService].color === 'secondary' ? 'bg-blue-500' :
                      'bg-gradient-to-r from-yellow-500 to-blue-500'
                    }`}>
                      {index + 1}
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">{step}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {(() => {
                    const IconComponent = service.icon;
                    return <IconComponent className="h-6 w-6 text-primary-600" />;
                  })()}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-500 flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose eVALaunche?</h3>
          <p className="text-xl mb-8 opacity-90">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="text-lg font-semibold mb-2">Expert Team</h4>
              <p className="text-sm opacity-90">Experienced developers, designers, and strategists</p>
            </div>
            <div>
              <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="text-lg font-semibold mb-2">Quality Assurance</h4>
              <p className="text-sm opacity-90">Rigorous testing and quality control processes</p>
            </div>
            <div>
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
              <p className="text-sm opacity-90">Agile development with regular milestones</p>
            </div>
          </div>
          <Link 
            href="/#contact"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Loading component for Suspense fallback
function ServicesLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Our Services</h1>
            <div></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    </div>
  );
}

// Main export with Suspense wrapper
export default function ServicesPage() {
  return (
    <Suspense fallback={<ServicesLoading />}>
      <ServicesContent />
    </Suspense>
  );
}
