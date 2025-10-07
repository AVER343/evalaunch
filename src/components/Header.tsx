'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Brain, ChevronDown, ChevronRight, Home, Zap, Users, Building2, Briefcase, FileText, Target, Cloud, BarChart3, HelpCircle, Megaphone, Mail, BookOpen, FolderOpen, Settings, Library, GraduationCap } from 'lucide-react';
import { MainService, SubService, ServicesData } from '../types/services';
import { getMainServices } from '../lib/data';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Unified dropdown state management
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const timeoutRefs = React.useRef<Record<string, NodeJS.Timeout | null>>({});

  const goToContact = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };

  // Unified helper functions for dropdown management
  const handleDropdownMouseEnter = (dropdownId: string) => {
    // Only handle hover on desktop (lg and up) - check if window is available
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    
    // Clear any pending timeouts for this dropdown
    if (timeoutRefs.current[dropdownId]) {
      clearTimeout(timeoutRefs.current[dropdownId]);
      timeoutRefs.current[dropdownId] = null;
    }
    
    // Close all other dropdowns and open the current one
    setOpenDropdowns(prev => {
      const newState = { ...prev };
      // Close all other dropdowns
      Object.keys(newState).forEach(id => {
        if (id !== dropdownId) {
          newState[id] = false;
        }
      });
      // Open the current dropdown
      newState[dropdownId] = true;
      return newState;
    });
  };

  const handleDropdownMouseLeave = (dropdownId: string) => {
    // Only handle hover on desktop (lg and up) - check if window is available
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    
    timeoutRefs.current[dropdownId] = setTimeout(() => {
      setOpenDropdowns(prev => ({ ...prev, [dropdownId]: false }));
    }, 150);
  };

  const isDropdownOpen = (dropdownId: string) => openDropdowns[dropdownId] || false;

  // Component to render navigation items
  const renderNavigationItem = (item: any) => {
    if (item.type === 'link') {
      return (
        <li className="relative">
          <a
            href={item.href}
            className="nav-item text-gray-700 hover:text-primary-600 font-medium relative group flex items-center gap-2 py-3 px-4 text-base rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-50 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2"
            title={item.name}
          >
            <item.icon className="h-4 w-4 opacity-80 group-hover:opacity-100 transition-all duration-200" aria-hidden="true" />
            <span className="hidden lg:inline">{item.name}</span>
          </a>
        </li>
      );
    }

    if (item.type === 'dropdown') {
      return (
        <li className="relative" {...{ [`data-${item.id}-dropdown`]: true }}>
          <button
            onClick={() => {
              setOpenDropdowns(prev => {
                const newState = { ...prev };
                const isCurrentlyOpen = newState[item.id];
                
                if (isCurrentlyOpen) {
                  // If currently open, just close this one
                  newState[item.id] = false;
                } else {
                  // If currently closed, close all others and open this one
                  Object.keys(newState).forEach(id => {
                    newState[id] = false;
                  });
                  newState[item.id] = true;
                }
                return newState;
              });
            }}
            onMouseEnter={() => handleDropdownMouseEnter(item.id)}
            onMouseLeave={() => handleDropdownMouseLeave(item.id)}
            className={`nav-item has-submenu text-gray-700 hover:text-primary-600 font-medium relative group flex items-center gap-2 py-3 px-4 text-base rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-50 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2 ${isDropdownOpen(item.id) ? 'text-primary-600 bg-primary-50/30' : ''}`}
            title={item.name}
          >
            <item.icon className="h-4 w-4 opacity-80 group-hover:opacity-100 transition-all duration-200" aria-hidden="true" />
            <span className="hidden lg:inline">{item.name}</span>
            <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 group-hover:text-primary-500 ${isDropdownOpen(item.id) ? 'rotate-180 text-primary-500' : ''}`} aria-hidden="true" />
            
            {/* Active underline indicator */}
            {isDropdownOpen(item.id) && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            )}
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isDropdownOpen(item.id) && (
              item.isServicesMenu ? (
                // Special wide layout for Services
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-[-50px] mt-2 w-[800px] max-w-[90vw] bg-white rounded-xl shadow-lg border border-gray-200 py-6 z-50"
                  onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                  onMouseLeave={() => handleDropdownMouseLeave(item.id)}
                >
                <div className="px-6 py-2">
                  <div className="grid grid-cols-3 gap-8">
                    {item.submenu.map((service: MainService) => {
                      const IconComponent = service.icon === 'Brain' ? Brain :
                                          service.icon === 'Code' ? Code :
                                          service.icon === 'Megaphone' ? Megaphone : Code;
                      return (
                        <div key={service.id} className="space-y-3">
                          {/* Main Category Header */}
                          <div className="flex items-center space-x-3 pb-2 border-b border-gray-200">
                            <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center shadow-sm`}>
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900">{service.title}</h3>
                          </div>
                          
                          {/* Subcategories */}
                          <div className="space-y-1">
                            {service.subServices.map((subService) => (
                              <a
                                key={subService.id}
                                href={`/services/${service.id}?service=${subService.id}`}
                                className="block px-3 py-2 text-xs text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md group transition-all duration-200"
                                onClick={() => setOpenDropdowns(prev => ({ ...prev, [item.id]: false }))}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium group-hover:text-primary-700">{subService.title}</span>
                                  <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Bottom Section */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <a
                      href="/services"
                      className="block text-center text-sm font-semibold text-primary-600 hover:text-primary-700"
                      onClick={() => setOpenDropdowns(prev => ({ ...prev, [item.id]: false }))}
                    >
                      View All Services →
                    </a>
                  </div>
                </div>
                </motion.div>
              ) : (
              // Regular dropdown layout
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-[-50px] mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-4 z-50"
                onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                onMouseLeave={() => handleDropdownMouseLeave(item.id)}
              >
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {item.name === 'Resources' ? 'Resources' :
                     item.name === 'About' ? 'About Us' :
                     item.name === 'Careers' ? 'Join Our Team' : item.name}
                  </h3>
                  <div className="space-y-2">
                    {item.submenu.map((subItem: any) => {
                      const IconComponent = subItem.icon;
                      return (
                        <a
                          key={subItem.id || subItem.name}
                          href={subItem.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 group transition-all duration-200"
                          onClick={() => setOpenDropdowns(prev => ({ ...prev, [item.id]: false }))}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:rotate-3 transition-all duration-300">
                            <IconComponent className="h-5 w-5 text-white transition-transform duration-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600">
                              {subItem.title || subItem.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-600">
                              {subItem.description}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )
          )}
          </AnimatePresence>
        </li>
      );
    }

    return null;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      // Check each dropdown
      Object.keys(openDropdowns).forEach(dropdownId => {
        if (openDropdowns[dropdownId] && !target.closest(`[data-${dropdownId}-dropdown]`)) {
          setOpenDropdowns(prev => ({ ...prev, [dropdownId]: false }));
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Cleanup all timeouts on unmount
      Object.values(timeoutRefs.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, [openDropdowns]);

  const aboutItems = [
    {
      name: 'Our Story',
      href: '/about/our-story',
      icon: BookOpen,
      description: 'How we started and our journey'
    },
    {
      name: 'Team',
      href: '/about/team',
      icon: Users,
      description: 'Meet our expert team'
    },
    {
      name: 'Values & Mission',
      href: '/about/values',
      icon: Target,
      description: 'What drives us forward'
    },
    {
      name: 'Testimonials',
      href: '/about/testimonials',
      icon: FileText,
      description: 'What clients say about us'
    }
  ];

  const careersItems = [
    {
      name: 'Open Positions',
      href: '/careers/positions',
      icon: Briefcase,
      description: 'Current job opportunities'
    },
    {
      name: 'Life at eVaLaunche',
      href: '/careers/life',
      icon: Users,
      description: 'Our culture and work environment'
    },
    {
      name: 'Internships',
      href: '/careers/internships',
      icon: GraduationCap,
      description: 'Internship programs and opportunities'
    }
  ];

  const resourcesItems = [
    {
      name: 'Blog & Insights',
      href: '/blog',
      icon: FileText,
      description: 'Latest articles and industry insights'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: FolderOpen,
      description: 'Detailed project success stories'
    },
    {
      name: 'Support Center',
      href: '/support',
      icon: HelpCircle,
      description: 'Get help and support'
    },
    {
      name: 'Documentation',
      href: '/documentation',
      icon: BookOpen,
      description: 'Technical guides and resources'
    }
  ];

  // Import services data
  const [mainServices, setMainServices] = useState<MainService[]>([]);

  useEffect(() => {
    const loadServicesData = async () => {
      try {
        const services = await getMainServices();
        // Ensure all services have required properties
        const servicesWithDefaults = services.map(service => ({
          ...service,
          color: service.color || 'bg-blue-500',
          subServices: service.subServices || []
        }));
        setMainServices(servicesWithDefaults);
      } catch (error) {
        console.error('Error loading services data:', error);
      }
    };
    loadServicesData();
  }, []);

  // Unified navigation structure
  const navigationItems = [
    {
      id: 'home',
      name: 'Home',
      href: '/',
      icon: Home,
      type: 'link' as const
    },
    {
      id: 'services',
      name: 'Services',
      icon: Settings,
      type: 'dropdown' as const,
      isServicesMenu: true,
      submenu: mainServices
    },
    {
      id: 'resources',
      name: 'Resources',
      icon: Library,
      type: 'dropdown' as const,
      submenu: resourcesItems
    },
    {
      id: 'about',
      name: 'About',
      icon: Building2,
      type: 'dropdown' as const,
      submenu: aboutItems
    },
    {
      id: 'careers',
      name: 'Careers',
      icon: Briefcase,
      type: 'dropdown' as const,
      submenu: careersItems
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
        <div className="flex items-center h-14">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-primary-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              {/* Main icon container */}
              <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm">
                <div className="relative">
                  <Zap className="h-4 w-4 text-white drop-shadow-lg" />
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white/30 rounded-full flex items-center justify-center">
                    <Brain className="h-1.5 w-1.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-primary-600">
                <span style={{ fontFamily: "'Plus Jakarta Sans', 'Comic Sans MS', 'Comic Sans', 'Chalkboard SE', 'Comic Neue', cursive, sans-serif" }}>
                  <span style={{ color: '#2563eb' }}>e</span>
                  <span style={{ color: '#2563eb' }}>V</span>
                  <span style={{ color: '#2563eb'}}>a</span>
                  <span style={{ color: '#1f2937' }}>L</span>
                  <span style={{ color: '#1f2937'}}>a</span>
                  <span style={{ color: '#1f2937' }}>unche</span>
                </span>
              </span>
              <span className="text-xs font-medium text-gray-500 -mt-1 group-hover:text-primary-500">Tech Solutions</span>
            </div>
          </a>

          {/* Desktop Navigation - Horizontal Menu Bar */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <ul className="flex items-center space-x-2 lg:space-x-4">
              {navigationItems.map((item) => (
                <React.Fragment key={item.id}>
                  {renderNavigationItem(item)}
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* Get Started Button - Right Side */}
          <div className="hidden lg:block ml-auto" style={{marginLeft: '16px'}}>
            <button 
              onClick={goToContact}
              className="bg-primary-600 hover:bg-primary-800 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg text-base whitespace-nowrap group"
            >
              <span>Let&apos;s Talk</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-100"
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
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 shadow-2xl border border-white/20">
              {navigationItems.map((item) => {
                if (item.type === 'link') {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className="text-gray-700 hover:text-primary-600 flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold hover:bg-gray-50 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5 opacity-80" aria-hidden="true" />
                      <span>{item.name}</span>
                    </a>
                  );
                }

                if (item.type === 'dropdown') {
                  const isOpen = isDropdownOpen(item.id);
                  return (
                    <div key={item.id} className="px-4 py-2">
                      <button
                        onClick={() => {
                          setOpenDropdowns(prev => {
                            const newState = { ...prev };
                            if (isOpen) {
                              // If currently open, just close this one
                              newState[item.id] = false;
                            } else {
                              // If currently closed, close all others and open this one
                              Object.keys(newState).forEach(id => {
                                newState[id] = false;
                              });
                              newState[item.id] = true;
                            }
                            return newState;
                          });
                        }}
                        className="text-gray-700 hover:text-primary-600 flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-semibold hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5 opacity-80" aria-hidden="true" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`h-4 w-4 text-gray-400 group-hover:text-primary-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary-500' : ''}`} aria-hidden="true" />
                      </button>
                      
                      {isOpen && (
                        item.isServicesMenu ? (
                          // Services mobile menu
                          <div className="mt-2 ml-4 space-y-3">
                            {item.submenu.map((service: MainService) => {
                              const IconComponent = service.icon === 'Brain' ? Brain : 
                                                  service.icon === 'Code' ? Code : 
                                                  service.icon === 'Megaphone' ? Megaphone : Code;
                              return (
                                <div key={service.id} className="space-y-2">
                                  <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 group transition-all duration-200">
                                    <div className={`flex-shrink-0 w-8 h-8 ${service.color} rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300`}>
                                      <IconComponent className="h-4 w-4 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600">
                                        {service.title}
                                      </h4>
                                      <p className="text-xs text-gray-500">
                                        {service.shortDescription}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-6 space-y-1">
                                    {service.subServices.map((subService: SubService) => (
                                      <a
                                        key={subService.id}
                                        href={subService.href}
                                        className="block px-3 py-2 text-xs text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg group transition-all duration-200"
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setOpenDropdowns(prev => ({ ...prev, [item.id]: false }));
                                        }}
                                      >
                                        <div className="flex items-center gap-2">
                                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full group-hover:bg-primary-600"></div>
                                          <span className="text-sm font-medium">{subService.title}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 ml-5 mt-0.5 group-hover:text-gray-600">
                                          {subService.description}
                                        </p>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                            <a
                              href="/services"
                              className="block text-center text-sm font-semibold text-primary-600 hover:text-primary-700 mt-3 pt-2 border-t border-gray-200"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenDropdowns(prev => ({ ...prev, [item.id]: false }));
                              }}
                            >
                              View All Services →
                            </a>
                          </div>
                        ) : (
                          // Regular dropdown mobile menu
                          <div className="mt-2 ml-4 space-y-2">
                            {item.submenu.map((subItem: any) => {
                              const IconComponent = subItem.icon;
                              return (
                                <a
                                  key={subItem.id || subItem.name}
                                  href={subItem.href}
                                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setOpenDropdowns(prev => ({ ...prev, [item.id]: false }));
                                  }}
                                >
                                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                                    <IconComponent className="h-4 w-4 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600">
                                      {subItem.title || subItem.name}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        )
                      )}
                    </div>
                  );
                }

                return null;
              })}
              
              <button 
                onClick={goToContact}
                className="w-full bg-primary-600 hover:bg-primary-800 text-white px-6 py-3 rounded-xl font-bold mt-4 shadow-md whitespace-nowrap"
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
