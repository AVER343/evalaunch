'use client';

import { Target, Users, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutProps {
  onStartProject: () => void;
}

const About = ({ onStartProject }: AboutProps) => {
  const stats = [
    { number: '100+', label: 'Projects Completed', icon: Target },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '99%', label: 'Client Satisfaction', icon: TrendingUp }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
      icon: '🚀'
    },
    {
      title: 'Quality Focused',
      description: 'Every project undergoes rigorous testing and quality assurance to ensure exceptional performance and reliability.',
      icon: '⭐'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you to understand your needs and deliver beyond expectations.',
      icon: '🤝'
    },
    {
      title: 'Transparent Process',
      description: 'We maintain open communication throughout the project lifecycle, keeping you informed at every step.',
      icon: '💬'
    }
  ];


  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary-600">eVALaunche</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate technologists, designers, and strategists 
            dedicated to transforming businesses through innovative technology solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and success. We believe in the transformative power of technology 
              and its ability to solve complex business challenges.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Deliver exceptional value through technology</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Foster long-term partnerships with our clients</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Continuously innovate and stay ahead of trends</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To be the leading technology partner for businesses worldwide, recognized for 
              our innovation, quality, and commitment to client success. We envision a future 
              where technology seamlessly integrates with business strategy.
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Us?</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Proven track record of success</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Cutting-edge technology expertise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Dedicated support and maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Competitive pricing and flexible terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how we can help you achieve your goals with our technology solutions.
            </p>
            <button 
              onClick={onStartProject}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg flex items-center space-x-2 mx-auto group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
