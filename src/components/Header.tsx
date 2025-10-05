'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Code, Brain, Megaphone, ChevronDown, Home, Zap, HelpCircle, Users, Building2, Briefcase, FileText } from 'lucide-react';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const openEmailClient = () => {
    window.location.href = 'mailto:support@evalaunche.com?subject=Project Inquiry&body=Hello, I would like to discuss a project with eVALaunche. Please provide more information about your services.';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      if (isServicesOpen && !target.closest('[data-services-dropdown]')) {
        setIsServicesOpen(false);
      }
      if (isCompanyOpen && !target.closest('[data-company-dropdown]')) {
        setIsCompanyOpen(false);
      }
      if (isResourcesOpen && !target.closest('[data-resources-dropdown]')) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpen, isCompanyOpen, isResourcesOpen]);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
  ];

  const companyItems = [
    {
      name: 'About Us',
      href: '/about',
      icon: Building2,
      description: 'Learn about our mission and team'
    },
    {
      name: 'Portfolio',
      href: '/portfolio',
      icon: Briefcase,
      description: 'View our latest projects'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: FileText,
      description: 'Detailed project success stories'
    }
  ];

  const resourcesItems = [
    {
      name: 'Support',
      href: '/support',
      icon: HelpCircle,
      description: 'Get help and contact us'
    }
  ];

  const services = [
    {
      name: 'Software Development',
      href: '/services?service=software-development',
      icon: Code,
      description: 'Custom web and mobile applications'
    },
    {
      name: 'AI/ML Solutions',
      href: '/services?service=ai-ml-solutions',
      icon: Brain,
      description: 'Intelligent automation and machine learning'
    },
    {
      name: 'Digital Marketing',
      href: '/services?service=digital-marketing',
      icon: Megaphone,
      description: 'Data-driven marketing strategies'
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20'
          : 'bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200/50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="relative flex items-center justify-center w-14 h-14 bg-primary-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              {/* Main icon container */}
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm">
                <div className="relative">
                  <Zap className="h-6 w-6 text-white drop-shadow-lg" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full flex items-center justify-center">
                    <Brain className="h-2 w-2 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 font-['Poppins'] group-hover:text-primary-600 transition-colors duration-300">
                eVALaunche
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1 group-hover:text-primary-500 transition-colors duration-300">Tech Solutions</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-semibold relative group flex items-center space-x-2"
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  <span>{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              );
            })}
            
            {/* Company Dropdown */}
            <div className="relative" data-company-dropdown>
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-semibold relative group flex items-center space-x-1"
              >
                <span>Company</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isCompanyOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {/* Company Dropdown Menu */}
              {isCompanyOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-4 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Our Company</h3>
                    <div className="space-y-2">
                      {companyItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-300 group"
                            onClick={() => setIsCompanyOpen(false)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                {item.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Services Dropdown */}
            <div className="relative" data-services-dropdown>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-semibold relative group flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-4 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Our Services</h3>
                    <div className="space-y-2">
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-300 group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                {service.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {service.description}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <a
                        href="/services"
                        className="block text-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-300"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View All Services →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Resources Dropdown */}
            <div className="relative" data-resources-dropdown>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-semibold relative group flex items-center space-x-1"
              >
                <span>Resources</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {/* Resources Dropdown Menu */}
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-4 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Resources</h3>
                    <div className="space-y-2">
                      {resourcesItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-300 group"
                            onClick={() => setIsResourcesOpen(false)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                {item.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={openEmailClient}
              className="bg-primary-500 hover:bg-primary-700 text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 shadow-2xl border border-white/20">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-primary-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                    <span>{item.name}</span>
                  </a>
                );
              })}
              
              {/* Mobile Services Dropdown */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-700 hover:text-yellow-600 flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-yellow-50"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <a
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all duration-300 group"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                              {service.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {service.description}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                    <a
                      href="/services"
                      className="block text-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-300 mt-3 pt-2 border-t border-gray-200"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      View All Services →
                    </a>
                  </div>
                )}
              </div>
              
              {/* Mobile Resources Dropdown */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="text-gray-700 hover:text-primary-600 flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-primary-50"
                >
                  <span>Resources</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {resourcesItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all duration-300 group"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsResourcesOpen(false);
                          }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                              {item.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
              
              <button 
                onClick={openEmailClient}
                className="w-full bg-primary-500 hover:bg-primary-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-bold mt-4 shadow-md"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
