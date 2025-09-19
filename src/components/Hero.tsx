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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-blue-100 rounded-full text-sm font-medium text-gray-700 mb-4 border border-yellow-200/50">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for new projects
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight font-['Poppins']">
                <span className="block">Transform Your</span>
                <span className="block bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  {texts[currentText]}
                </span>
                <span className="block">Business</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
                We deliver cutting-edge technology solutions that drive growth, 
                innovation, and success for businesses of all sizes. From custom 
                software development to AI-powered insights and digital marketing excellence.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button 
                onClick={onStartProject}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-10 py-5 rounded-2xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-bold text-lg hover-lift flex items-center justify-center space-x-3 group shadow-2xl shadow-yellow-500/25 glow-animation"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="bg-white/80 backdrop-blur-sm border-2 border-blue-500 text-blue-600 px-10 py-5 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold text-lg flex items-center justify-center space-x-3 group shadow-xl hover-lift">
                <Play className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Software Development Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover-lift border border-white/20 card-gradient">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-lg">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-['Poppins']">Software Development</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom web applications, mobile apps, and enterprise solutions 
                built with modern technologies and best practices.
              </p>
              <div className="flex items-center text-yellow-600 font-bold group cursor-pointer">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>

            {/* AI/ML Solutions Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover-lift border border-white/20 card-gradient">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-['Poppins']">AI/ML Solutions</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Intelligent automation, predictive analytics, and machine learning 
                models that transform data into actionable insights.
              </p>
              <div className="flex items-center text-blue-600 font-bold group cursor-pointer">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>

            {/* Digital Marketing Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover-lift border border-white/20 card-gradient">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-br from-pink-500 to-red-500 p-4 rounded-2xl shadow-lg">
                  <Megaphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-['Poppins']">Digital Marketing</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Data-driven marketing strategies, SEO optimization, and social media 
                campaigns that drive growth and engagement.
              </p>
              <div className="flex items-center text-pink-600 font-bold group cursor-pointer">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
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
