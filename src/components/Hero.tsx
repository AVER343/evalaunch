'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { getAllServices, getCompanyStats, getCompanyFeatures, type Service } from '@/lib/data';

interface HeroProps {
  onStartProject: () => void;
}

const Hero = ({ onStartProject }: HeroProps) => {
  const [currentText, setCurrentText] = useState(0);
  const [services, setServices] = useState<Service[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [servicesData, statsData, featuresData] = await Promise.all([
        getAllServices(),
        getCompanyStats(),
        getCompanyFeatures()
      ]);
      setServices(servicesData);
      setStats(statsData);
      setFeatures(featuresData);
    };
    loadData();
  }, []);

  // Service titles for rotation - matches spec: "Digital Marketing", "UI/UX Design", etc.
  const texts = services.length > 0 ? services.map(s => s.title) : [
    'Software Development',
    'AI & Machine Learning', 
    'Digital Marketing'
  ];

  useEffect(() => {
    if (texts.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  // Show loading skeleton while data loads
  if (!stats || services.length === 0 || features.length === 0) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="space-y-8 animate-fade-in max-w-5xl">
              <div className="space-y-6">
                <div className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-24 bg-gray-200 rounded-lg animate-pulse max-w-4xl mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded-2xl animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gray-50">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #00a86b 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in max-w-5xl">
            <div className="space-y-6">
              {/* Top label - rotating service type */}
              <div className="mb-6">
                <span className="inline-block px-6 py-2 bg-primary-100 text-primary-600 rounded-full font-semibold text-sm tracking-wide animate-fade-in">
                  {texts[currentText] || 'Business Solutions'}
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-['Poppins']">
                <span className="block">IT/Tech Consultancy for</span>
                <span className="block text-primary-600">
                  Growth & Automation
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                eVALaunche specializes in digital marketing, product development, and AI-powered solutions to help teams 
                ship faster and automate. We turn ideas into measurable business impact through expert consulting across 
                technology, design, and strategy.
              </p>

              {/* Scroll cue */}
              <div className="flex flex-col items-center gap-2 text-gray-500 text-sm animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
                  <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span>Scroll for more</span>
              </div>
            </div>

            {/* Modern Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 animate-slide-up shadow-md hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-gray-800 font-bold text-lg text-center group-hover:text-primary-600 transition-colors duration-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-8 pt-12 justify-center items-center">
              <button 
                onClick={onStartProject}
                className="group bg-primary-500 hover:bg-primary-700 text-white px-12 py-6 rounded-2xl transition-all duration-300 font-bold text-xl flex items-center justify-center space-x-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Subtle decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-primary-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-200 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Modern Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full max-w-4xl">
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.projectsCompleted}</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.happyClients}</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.yearsExperience}</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.clientSatisfaction}</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="w-8 h-12 border-2 border-primary-400 rounded-full flex justify-center bg-white">
          <div className="w-1.5 h-4 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
