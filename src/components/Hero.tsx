'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play, Code, Brain, Megaphone, CheckCircle, MessageCircle } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
}

const Hero = ({ onStartProject }: HeroProps) => {
  const [currentText, setCurrentText] = useState(0);
  
  const texts = [
    'Software Development',
    'AI/ML Solutions',
    'Digital Marketing'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const features = [
    'Custom Software Solutions',
    'Machine Learning Integration',
    'Digital Marketing Strategies',
    '24/7 Support & Maintenance'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Modern Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-primary-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/30 via-transparent to-secondary-100/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-100/20 via-transparent to-primary-100/30"></div>
      </div>
      
      {/* Modern Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary-300 to-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-accent-300 to-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-reverse"></div>
        
        {/* Modern floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-secondary-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-accent-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-primary-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-secondary-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in max-w-5xl">
            <div className="space-y-6">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-50 to-accent-100 rounded-2xl text-base font-semibold text-neutral-800 mb-8 border-2 border-accent-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="relative mr-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-accent-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent">
                  Available for new projects
                </span>
                <div className="ml-3 w-2 h-2 bg-accent-500 rounded-full animate-bounce"></div>
              </div>
              
              <h1 className="text-5xl lg:text-8xl font-bold text-neutral-900 leading-tight font-display">
                <span className="block">Transform Your</span>
                <span className="block text-gradient-hero animate-pulse">
                  {texts[currentText]}
                </span>
                <span className="block">Business</span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
                Expert software development company delivering cutting-edge technology solutions that drive business growth, 
                innovation, and success. From custom web applications and mobile apps to AI-powered machine learning solutions 
                and data-driven digital marketing strategies. Trusted by 15+ businesses worldwide.
              </p>
            </div>

            {/* Modern Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="flex flex-col items-center space-y-4 p-8 card-gradient hover-lift animate-slide-up shadow-modern-lg hover:shadow-modern-2xl transition-all duration-500" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-neutral-800 font-bold text-lg text-center group-hover:text-primary-600 transition-colors duration-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-8 pt-12 justify-center items-center">
              <button 
                onClick={onStartProject}
                className="group relative btn-primary text-white px-12 py-6 rounded-3xl transition-all duration-300 font-bold text-xl hover-lift flex items-center justify-center space-x-4 shadow-modern-2xl glow-primary"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>
              
            </div>
          </div>

          {/* Modern Floating Service Icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-10 w-14 h-14 bg-gradient-to-r from-secondary-400 to-accent-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/3 right-10 w-18 h-18 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '5s' }}></div>
          </div>

          {/* Modern Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full max-w-4xl">
            <div className="text-center p-6 card-glass hover-lift">
              <div className="text-4xl font-bold text-neutral-900 mb-2">25+</div>
              <div className="text-neutral-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-6 card-glass hover-lift">
              <div className="text-4xl font-bold text-neutral-900 mb-2">15+</div>
              <div className="text-neutral-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center p-6 card-glass hover-lift">
              <div className="text-4xl font-bold text-neutral-900 mb-2">8+</div>
              <div className="text-neutral-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 card-glass hover-lift">
              <div className="text-4xl font-bold text-neutral-900 mb-2">95%</div>
              <div className="text-neutral-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
