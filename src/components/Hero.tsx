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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-blue-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Transform Your</span>
                <span className="block text-primary-600">
                  {texts[currentText]}
                </span>
                <span className="block">Business</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                We deliver cutting-edge technology solutions that drive growth, 
                innovation, and success for businesses of all sizes. From custom 
                software development to AI-powered insights and digital marketing excellence.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStartProject}
                className="bg-yellow-500 text-white px-8 py-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 font-semibold text-lg hover-lift flex items-center justify-center space-x-2 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Software Development Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Code className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Software Development</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Custom web applications, mobile apps, and enterprise solutions 
                built with modern technologies and best practices.
              </p>
              <div className="flex items-center text-yellow-600 font-semibold group">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* AI/ML Solutions Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI/ML Solutions</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Intelligent automation, predictive analytics, and machine learning 
                models that transform data into actionable insights.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Digital Marketing Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Megaphone className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Digital Marketing</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Data-driven marketing strategies, SEO optimization, and social media 
                campaigns that drive growth and engagement.
              </p>
              <div className="flex items-center text-yellow-600 font-semibold group">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
