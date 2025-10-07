'use client';

import { Code, Brain, Megaphone, ArrowUp, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const footerLinks = {
    services: [
      { name: 'Software Development', href: '/services?service=software-development' },
      { name: 'AI/ML Solutions', href: '/services?service=ai-ml-solutions' },
      { name: 'Digital Marketing', href: '/services?service=digital-marketing' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    resources: [
      { name: 'Support', href: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy-policy' },
      { name: 'Terms of Service', href: '/legal/terms-of-service' },
      { name: 'Cookie Policy', href: '/legal/cookie-policy' },
      { name: 'GDPR', href: '/legal/gdpr' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-500 rounded-lg shadow-md">
                <div className="flex items-center space-x-1">
                  <Code className="h-6 w-6 text-white" />
                  <Brain className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold text-white">
                  eValaunche
                </span>
                <span className="text-xs font-medium text-gray-400 -mt-1">Tech Solutions</span>
              </div>
            </div>
            <div className="text-gray-400">
              <p className="text-base mb-2">
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:support@evalaunche.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  support@evalaunche.com
                </a>
              </p>
              <p className="text-base">
                <span className="font-medium">Available for new projects</span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-base font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-base text-center lg:text-left">
              © 2024 eVaLaunche. All rights reserved.
            </div>
            
            {/* Social Links and Back to Top */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Social Links */}
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                <span className="text-base">Back to top</span>
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
