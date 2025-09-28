'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play, Code, Brain, Megaphone, CheckCircle } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-100/20 via-transparent to-blue-100/20"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in max-w-5xl">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-blue-100 rounded-full text-sm font-medium text-gray-700 mb-6 border border-yellow-200/50 shadow-lg">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Available for new projects
              </div>
              
              <h1 className="text-5xl lg:text-8xl font-bold text-gray-900 leading-tight font-['Poppins']">
                <span className="block">Transform Your</span>
                <span className="block bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  {texts[currentText]}
                </span>
                <span className="block">Business</span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
                Expert software development company delivering cutting-edge technology solutions that drive business growth, 
                innovation, and success. From custom web applications and mobile apps to AI-powered machine learning solutions 
                and data-driven digital marketing strategies. Trusted by 50+ businesses worldwide.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="flex flex-col items-center space-y-4 p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-white/30 hover-lift animate-slide-up shadow-xl hover:shadow-2xl transition-all duration-500" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-gray-800 font-bold text-lg text-center group-hover:text-green-600 transition-colors duration-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-8 pt-12 justify-center items-center">
              <button 
                onClick={onStartProject}
                className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-12 py-6 rounded-3xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-bold text-xl hover-lift flex items-center justify-center space-x-4 shadow-2xl shadow-yellow-500/25 glow-animation"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>
              
              <button className="group relative bg-white/90 backdrop-blur-sm border-2 border-blue-500 text-blue-600 px-12 py-6 rounded-3xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold text-xl flex items-center justify-center space-x-4 shadow-xl hover-lift">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Play className="h-7 w-7 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Floating Service Icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-10 w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/3 right-10 w-18 h-18 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '5s' }}></div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full max-w-4xl">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover-lift">
              <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover-lift">
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover-lift">
              <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover-lift">
              <div className="text-4xl font-bold text-gray-900 mb-2">99%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
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
