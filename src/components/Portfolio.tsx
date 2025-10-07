'use client';

import { ArrowRight, Star, Users, TrendingUp, ChevronLeft, ChevronRight, Code, Database, Globe, Cpu, Shield, Zap, Smartphone, Brain, Cloud, BarChart3, Lock, Wifi, MessageSquare, FlaskConical, Layers, Server, Terminal, FileText, Activity, GitBranch, HardDrive, Network } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import caseStudiesData from '../../data/case-studies.json';

interface PortfolioProps {
  onStartProject: () => void;
}

// Technology mapping with icons and colors
const getTechInfo = (tech: string) => {
  const techMap: { [key: string]: { icon: any; bgColor: string; textColor: string } } = {
    'React': { icon: Layers, bgColor: 'bg-primary-600', textColor: 'text-white' },
    'Node.js': { icon: Server, bgColor: 'bg-green-600', textColor: 'text-white' },
    'MongoDB': { icon: Database, bgColor: 'bg-green-700', textColor: 'text-white' },
    'AI/ML': { icon: Brain, bgColor: 'bg-primary-600', textColor: 'text-white' },
    'Python': { icon: Terminal, bgColor: 'bg-primary-600', textColor: 'text-white' },
    'TensorFlow': { icon: Cpu, bgColor: 'bg-orange-600', textColor: 'text-white' },
    'PostgreSQL': { icon: Database, bgColor: 'bg-blue-700', textColor: 'text-white' },
    'Vue.js': { icon: Layers, bgColor: 'bg-green-500', textColor: 'text-white' },
    'Laravel': { icon: FileText, bgColor: 'bg-red-600', textColor: 'text-white' },
    'MySQL': { icon: Database, bgColor: 'bg-blue-600', textColor: 'text-white' },
    'Analytics': { icon: BarChart3, bgColor: 'bg-indigo-600', textColor: 'text-white' },
    'React Native': { icon: Smartphone, bgColor: 'bg-cyan-600', textColor: 'text-white' },
    'Blockchain': { icon: Shield, bgColor: 'bg-gray-700', textColor: 'text-white' },
    'AWS': { icon: Cloud, bgColor: 'bg-orange-500', textColor: 'text-white' },
    'IoT': { icon: Network, bgColor: 'bg-teal-600', textColor: 'text-white' },
    'Machine Learning': { icon: Brain, bgColor: 'bg-purple-600', textColor: 'text-white' },
    'Cloud': { icon: Cloud, bgColor: 'bg-sky-600', textColor: 'text-white' },
    'NLP': { icon: MessageSquare, bgColor: 'bg-pink-600', textColor: 'text-white' },
    'Redis': { icon: HardDrive, bgColor: 'bg-red-500', textColor: 'text-white' }
  };
  
  return techMap[tech] || { icon: Code, bgColor: 'bg-gray-600', textColor: 'text-white' };
};

const Portfolio = ({ onStartProject }: PortfolioProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Use data from case-studies.json for consistent data across the site
  const projects = caseStudiesData.caseStudies.map((study, index) => {
    const colorMap = ['primary', 'secondary', 'accent'];
    return {
      id: study.id,
      title: study.title,
      description: study.summary,
      category: study.service,
      technologies: study.technologies.slice(0, 4), // Show first 4 technologies
      results: {
        metric1: study.results[0]?.value || 'N/A',
        metric2: study.results[1]?.value || 'N/A',
        metric3: study.results[2]?.value || 'N/A'
      },
      color: colorMap[index % 3]
    };
  });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const [testimonials, setTestimonials] = useState<any[]>([]);

  // Load testimonials from centralized data
  useEffect(() => {
    const loadTestimonials = async () => {
      const { getFeaturedTestimonials } = await import('@/lib/data');
      const data = await getFeaturedTestimonials(3);
      setTestimonials(data);
    };
    loadTestimonials();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'bg-primary-500',
      secondary: 'bg-primary-600',
      accent: 'bg-primary-700'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Portfolio</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we&apos;ve helped businesses 
            achieve their goals through innovative technology solutions.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Carousel Wrapper */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white">
                    <div className="grid lg:grid-cols-2 min-h-[250px]">
                      {/* Project Icon Display - Clean Flat Design */}
                      <div className={`relative overflow-hidden h-[250px] ${getColorClasses(project.color)} flex items-center justify-center`}>
                        {project.category === 'Software Development' && <Code className="h-24 w-24 text-white/90" />}
                        {project.category === 'AI/ML Solutions' && <Brain className="h-24 w-24 text-white/90" />}
                        {project.category === 'Digital Marketing' && <TrendingUp className="h-24 w-24 text-white/90" />}
                        <div className={`absolute inset-0 ${getColorClasses(project.color)} opacity-10`}></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.color === 'primary' ? 'bg-primary-100 text-primary-700' :
                            project.color === 'secondary' ? 'bg-secondary-100 text-secondary-700' :
                            'bg-accent-100 text-accent-700'
                          }`}>
                            {project.category}
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs font-medium text-gray-700">{project.results.metric3}</span>
                          </div>
                        </div>
                      </div>

                      {/* Project Content - Compact but Informative */}
                      <div className="p-4 flex flex-col justify-center">
                        {/* Header Section */}
                        <div className="mb-3">
                          <h3 className="text-base font-semibold text-gray-900 mb-1">{project.title}</h3>
                          <p className="text-xs text-gray-600 leading-relaxed mb-2">{project.description}</p>
                          
                          {/* Project Status */}
                          <div className="flex flex-wrap gap-2 mb-2">
                            <div className="flex items-center space-x-1">
                              <div className={`w-2 h-2 rounded-full ${
                                project.color === 'primary' ? 'bg-primary-500' :
                                project.color === 'secondary' ? 'bg-secondary-500' :
                                'bg-accent-500'
                              }`}></div>
                              <span className="text-xs text-gray-600">Completed</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-gray-600">6 months</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-xs text-gray-600">Team of 5</span>
                            </div>
                          </div>
                        </div>

                        {/* Technologies Section */}
                        <div className="mb-2">
                          <h4 className="text-xs font-semibold text-gray-900 mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => {
                              const techInfo = getTechInfo(tech);
                              const IconComponent = techInfo.icon;
                              return (
                                <span
                                  key={techIndex}
                                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-1.5 ${techInfo.bgColor} ${techInfo.textColor} hover:shadow-lg hover:shadow-opacity-30`}
                                >
                                  <IconComponent className="h-3 w-3 text-white" />
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* Results & Metrics */}
                        <div className="mb-2">
                          <h4 className="text-xs font-semibold text-gray-900 mb-1">Key Results</h4>
                          <div className="grid grid-cols-3 gap-1">
                            {Object.entries(project.results).map(([key, value], resultIndex) => (
                              <div key={resultIndex} className="text-center p-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className={`text-sm font-bold mb-0.5 ${
                                  project.color === 'primary' ? 'text-primary-600' :
                                  project.color === 'secondary' ? 'text-secondary-600' :
                                  'text-accent-600'
                                }`}>{value}</div>
                                <div className="text-xs text-gray-500 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Features - Compact */}
                        <div className="mb-2">
                          <h4 className="text-xs font-semibold text-gray-900 mb-1">Key Features</h4>
                          <div className="grid grid-cols-2 gap-1">
                            <div className="flex items-center space-x-1">
                              <div className={`w-1 h-1 rounded-full ${
                                project.color === 'primary' ? 'bg-primary-500' :
                                project.color === 'secondary' ? 'bg-secondary-500' :
                                'bg-accent-500'
                              }`}></div>
                              <span className="text-xs text-gray-600">Responsive Design</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className={`w-1 h-1 rounded-full ${
                                project.color === 'primary' ? 'bg-primary-500' :
                                project.color === 'secondary' ? 'bg-secondary-500' :
                                'bg-accent-500'
                              }`}></div>
                              <span className="text-xs text-gray-600">Real-time Processing</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className={`w-1 h-1 rounded-full ${
                                project.color === 'primary' ? 'bg-primary-500' :
                                project.color === 'secondary' ? 'bg-secondary-500' :
                                'bg-accent-500'
                              }`}></div>
                              <span className="text-xs text-gray-600">Advanced Security</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className={`w-1 h-1 rounded-full ${
                                project.color === 'primary' ? 'bg-primary-500' :
                                project.color === 'secondary' ? 'bg-secondary-500' :
                                'bg-accent-500'
                              }`}></div>
                              <span className="text-xs text-gray-600">Cloud Architecture</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-primary-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-primary-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-base text-gray-600">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="p-6 bg-gray-50 rounded-2xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.client.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.client.role}, {testimonial.client.company}</div>
                  <div className="text-xs text-primary-600 mt-1">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: '/icons/conversation.png', number: '15+', label: 'Happy Clients' },
            { icon: '/icons/mobile-app.png', number: '25+', label: 'Projects Completed' },
            { icon: '/images/smile.png', number: '4.7', label: 'Average Rating' },
            { icon: '/images/success.png', number: '95%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image 
                  src={stat.icon} 
                  alt={`${stat.label} icon`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-xs font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-primary-600 rounded-3xl p-12 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-base mb-8 opacity-90">
              Join our portfolio of successful projects and transform your business today.
            </p>
            <button 
              onClick={onStartProject}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-base flex items-center space-x-2 mx-auto group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
