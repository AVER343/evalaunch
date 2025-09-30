'use client';

import { useState } from 'react';
import { Code, Brain, Megaphone, CheckCircle, ArrowRight, ArrowLeft, Star, Users, Clock, Award, TrendingUp, Shield, Zap, Target, BarChart3, Globe, Smartphone, Laptop, Database, Cloud, Palette } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'software-development',
      title: 'Software Development',
      icon: Code,
      description: 'Custom web and mobile applications built with modern technologies and best practices.',
      features: [
        'Web Applications - React.js, Next.js, Vue.js, Angular',
        'Mobile Apps - Flutter, React Native, Native iOS/Android',
        'Backend Development - Node.js, Python, PHP, .NET',
        'Database Solutions - PostgreSQL, MongoDB, MySQL',
        'Cloud Platforms - AWS, Azure, Google Cloud',
        'DevOps & Deployment - Docker, Kubernetes, CI/CD'
      ],
      timeline: '4-12 weeks',
      projects: '150+',
      clients: '50+',
      satisfaction: '98%',
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'],
      process: [
        { step: 'Discovery & Planning', description: 'Requirements analysis and technical architecture' },
        { step: 'Design & Prototyping', description: 'UI/UX design and system prototyping' },
        { step: 'Development & Testing', description: 'Agile development with continuous testing' },
        { step: 'Deployment & Launch', description: 'Production deployment and go-live support' }
      ]
    },
    {
      id: 'ai-ml-solutions',
      title: 'AI/ML Solutions',
      icon: Brain,
      description: 'Intelligent automation and machine learning solutions that drive business growth and efficiency.',
      features: [
        'Machine Learning - TensorFlow, PyTorch, Scikit-learn',
        'Natural Language Processing - OpenAI GPT, BERT, Transformers',
        'Computer Vision - OpenCV, YOLO, Image Recognition',
        'Data Analytics - Python, R, Tableau, Power BI',
        'Chatbots & Virtual Assistants - Dialogflow, Rasa, Custom AI',
        'Predictive Analytics - Time Series, Forecasting Models'
      ],
      timeline: '6-16 weeks',
      projects: '75+',
      clients: '30+',
      satisfaction: '96%',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Python', 'AWS ML', 'Azure AI'],
      process: [
        { step: 'Data Analysis', description: 'Data collection, cleaning, and exploratory analysis' },
        { step: 'Model Development', description: 'Algorithm selection and model training' },
        { step: 'Testing & Validation', description: 'Model testing and performance validation' },
        { step: 'Deployment & Monitoring', description: 'Production deployment and ongoing monitoring' }
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Megaphone,
      description: 'Data-driven marketing strategies that drive growth, engagement, and measurable results.',
      features: [
        'SEO Optimization - Technical SEO, Content Strategy, Link Building',
        'Social Media Marketing - Facebook, Instagram, LinkedIn, Twitter',
        'PPC Advertising - Google Ads, Facebook Ads, LinkedIn Ads',
        'Content Marketing - Blog Writing, Video Production, Infographics',
        'Email Marketing - Mailchimp, SendGrid, Automated Campaigns',
        'Analytics & Reporting - Google Analytics, Facebook Insights, Custom Dashboards'
      ],
      timeline: '2-8 weeks',
      projects: '200+',
      clients: '80+',
      satisfaction: '94%',
      technologies: ['Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp', 'Google Analytics', 'SEMrush'],
      process: [
        { step: 'Strategy Development', description: 'Market research and campaign strategy' },
        { step: 'Campaign Setup', description: 'Ad creation and platform configuration' },
        { step: 'Launch & Monitor', description: 'Campaign launch and real-time monitoring' },
        { step: 'Optimize & Scale', description: 'Performance optimization and scaling' }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'eVALaunche transformed our business with their AI solutions. Our efficiency increased by 40% and customer satisfaction reached 95%.',
      rating: 5,
      service: 'AI/ML Solutions'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      role: 'CTO',
      content: 'The mobile app they developed exceeded our expectations. Clean code, excellent performance, and outstanding support.',
      rating: 5,
      service: 'Software Development'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Growth Marketing Co.',
      role: 'Marketing Director',
      content: 'Their digital marketing strategies increased our ROI by 300%. Professional, data-driven, and results-focused approach.',
      rating: 5,
      service: 'Digital Marketing'
    }
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '150+', color: 'text-blue-600' },
    { icon: Code, label: 'Projects Delivered', value: '500+', color: 'text-green-600' },
    { icon: Award, label: 'Success Rate', value: '98%', color: 'text-yellow-600' },
    { icon: Clock, label: 'Years Experience', value: '8+', color: 'text-purple-600' }
  ];

  const openEmailClient = () => {
    window.location.href = 'mailto:support@evalaunche.com?subject=Project Inquiry&body=Hello, I would like to discuss a project with eVALaunche. Please provide more information about your services.';
  };

  return (
    <main className="min-h-screen">
      <Header onStartProject={openEmailClient} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions that transform businesses and drive sustainable growth.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Service Info */}
              <div>
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 mb-6">
                  {(() => {
                    const IconComponent = services[activeService].icon;
                    return <IconComponent className="h-8 w-8 text-white" />;
                  })()}
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {services[activeService].title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-600">{services[activeService].projects}</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-600">{services[activeService].clients}</div>
                    <div className="text-sm text-gray-600">Clients</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-600">{services[activeService].satisfaction}</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies & Services</h3>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature, index) => {
                      const [service, technologies] = feature.split(' - ');
                      return (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-gray-900 font-medium">{service}</span>
                            <span className="text-gray-600"> - {technologies}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Project Timeline</h4>
                  <p className="text-gray-600">{services[activeService].timeline}</p>
                </div>
              </div>

              {/* Process & CTA Section */}
              <div className="flex flex-col justify-center space-y-8">
                {/* Process Steps */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Process</h3>
                  <div className="space-y-4">
                    {services[activeService].process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{step.step}</h4>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Let&apos;s discuss your project and create something amazing together.
                  </p>
                  <button 
                    onClick={openEmailClient}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 mx-auto"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-yellow-600">Impact</span> in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering exceptional results across all our services with proven track record.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-yellow-600">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  <div className="text-xs text-yellow-600 font-medium mt-1">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We <span className="text-yellow-400">Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable, and efficient solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: Code },
              { name: 'Node.js', icon: Code },
              { name: 'Python', icon: Code },
              { name: 'AWS', icon: Cloud },
              { name: 'Docker', icon: Code },
              { name: 'TensorFlow', icon: Brain },
              { name: 'MongoDB', icon: Database },
              { name: 'PostgreSQL', icon: Database },
              { name: 'Kubernetes', icon: Code },
              { name: 'Flutter', icon: Smartphone },
              { name: 'Angular', icon: Code },
              { name: 'Vue.js', icon: Code }
            ].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300 group">
                  <IconComponent className="h-8 w-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm font-medium text-gray-300">{tech.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss your project and see how we can help you achieve your goals with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openEmailClient}
              className="bg-white text-yellow-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 mx-auto sm:mx-0"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-yellow-600 transition-all duration-300 font-bold">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}