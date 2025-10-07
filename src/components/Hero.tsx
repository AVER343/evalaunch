'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
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
    <section id="home" className="relative py-12 lg:py-16 overflow-hidden bg-gray-50">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gray-50">
        {/* Subtle pattern overlay (uses theme primary) */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Main Content - Left Side */}
          <div className="space-y-6 animate-fade-in">
            {/* Top label */}
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full font-medium text-xs tracking-wide animate-fade-in">
                Consulting Partner
              </span>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              <span className="block">IT/Tech Consultancy for</span>
              <span className="block text-primary-600">
                Growth & Automation
              </span>
            </h1>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              We help leaders design operating models, build modern products, and leverage AI and cloud. From strategy to execution, we align teams, reduce risk, and accelerate time-to-value.
            </p>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onStartProject}
                className="group bg-primary-600 hover:bg-primary-800 text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-base flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a 
                href="/services"
                className="group bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-500 px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-base flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
              >
                <span>View Services</span>
              </a>
            </div>


            {/* Feature list removed to avoid redundancy with Services page */}
          </div>

          {/* Hero Visual - Right Side */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="relative w-full h-[500px]">
              {/* Main Mac Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Image
                  src="/images/hero/mac.png"
                  alt="MacBook workspace"
                  width={350}
                  height={260}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 z-20 animate-float">
                <Image
                  src="/images/hero/smartphone.png"
                  alt="Smartphone"
                  width={60}
                  height={90}
                  className="drop-shadow-xl"
                />
              </div>

              <div className="absolute top-24 left-0 z-5 animate-float" style={{ animationDelay: '1s' }}>
                <Image
                  src="/images/hero/drawing-tablet.png"
                  alt="Drawing tablet"
                  width={90}
                  height={75}
                  className="drop-shadow-lg"
                />
              </div>

              <div className="absolute bottom-16 right-16 z-15 animate-float" style={{ animationDelay: '2s' }}>
                <Image
                  src="/images/hero/papers.png"
                  alt="Documents"
                  width={75}
                  height={75}
                  className="drop-shadow-lg"
                />
              </div>

              <div className="absolute bottom-24 left-8 z-5 animate-float" style={{ animationDelay: '1.5s' }}>
                <Image
                  src="/images/hero/marker.png"
                  alt="Marker"
                  width={45}
                  height={60}
                  className="drop-shadow-md"
                />
              </div>

              <div className="absolute top-1/2 right-0 z-5 animate-float" style={{ animationDelay: '0.5s' }}>
                <Image
                  src="/images/hero/flowerpot.png"
                  alt="Plant"
                  width={55}
                  height={70}
                  className="drop-shadow-lg"
                />
              </div>

              {/* Decorative Shapes */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary-100 rounded-full opacity-50 blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-100 rounded-full opacity-50 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Features moved to Services page filter grid to reduce homepage redundancy */}

        {/* Modern Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 bg-white rounded-lg border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <div className="text-2xl font-bold text-primary-600 mb-1">{stats.projectsCompleted}</div>
            <div className="text-gray-600 font-medium text-xs">Projects Completed</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <div className="text-2xl font-bold text-primary-600 mb-1">{stats.happyClients}</div>
            <div className="text-gray-600 font-medium text-xs">Happy Clients</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <div className="text-2xl font-bold text-primary-600 mb-1">{stats.yearsExperience}</div>
            <div className="text-gray-600 font-medium text-xs">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <div className="text-2xl font-bold text-primary-600 mb-1">{stats.clientSatisfaction}</div>
            <div className="text-gray-600 font-medium text-xs">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center bg-white">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
