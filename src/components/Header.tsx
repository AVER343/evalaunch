'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Code, Brain, Megaphone, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onStartProject: () => void;
}

const Header = ({ onStartProject }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
      if (isServicesOpen) {
        const target = event.target as Element;
        if (!target.closest('[data-services-dropdown]')) {
          setIsServicesOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpen]);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      name: 'Software Development',
      href: '#software-development',
      icon: Code,
      description: 'Custom web and mobile applications'
    },
    {
      name: 'AI/ML Solutions',
      href: '#ai-ml-solutions',
      icon: Brain,
      description: 'Intelligent automation and machine learning'
    },
    {
      name: 'Digital Marketing',
      href: '#digital-marketing',
      icon: Megaphone,
      description: 'Data-driven marketing strategies'
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-1">
                <Code className="h-6 w-6 text-white" />
                <Brain className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 font-['Poppins']">
                eVALaunche
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">Tech Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-yellow-600 transition-all duration-300 font-semibold relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative" data-services-dropdown>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-yellow-600 transition-all duration-300 font-semibold relative group flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
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
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-yellow-50 transition-all duration-300 group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
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
                        href="#services"
                        className="block text-center text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors duration-300"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View All Services →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={onStartProject}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
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
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-yellow-600 block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-yellow-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
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
                          className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-yellow-50 transition-all duration-300 group"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
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
                      href="#services"
                      className="block text-center text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors duration-300 mt-3 pt-2 border-t border-gray-200"
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
              
              <button 
                onClick={onStartProject}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-bold mt-4 shadow-lg"
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
