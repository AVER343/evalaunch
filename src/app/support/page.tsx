'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, MessageCircle, Phone, Mail, Clock, CheckCircle, AlertCircle, HelpCircle, FileText, Video, BookOpen, Users, Zap } from 'lucide-react';

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isTicketOpen, setIsTicketOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'technical', name: 'Technical Support' },
    { id: 'billing', name: 'Billing & Account' },
    { id: 'general', name: 'General Questions' },
    { id: 'bug-report', name: 'Bug Reports' },
    { id: 'feature-request', name: 'Feature Requests' }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'bg-green-500',
      href: '#contact'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'bg-blue-500',
      href: '#contact'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our team',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM',
      responseTime: 'Immediate',
      color: 'bg-purple-500',
      href: '#contact'
    },
    {
      title: 'Documentation',
      description: 'Self-service help center',
      icon: BookOpen,
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'bg-orange-500',
      href: '/documentation'
    }
  ];

  const faqItems = [
    {
      id: 1,
      question: "How do I get started with eVALaunch services?",
      answer: "Getting started is easy! Simply contact us through our contact form or live chat, and we&apos;ll schedule a free consultation to discuss your project requirements and provide a customized solution.",
      category: "general",
      helpful: 45
    },
    {
      id: 2,
      question: "What technologies do you use for software development?",
      answer: "We use modern, cutting-edge technologies including React, Next.js, Node.js, Python, TypeScript, AWS, Google Cloud, Docker, Kubernetes, and various databases. Our tech stack is chosen based on your specific project requirements.",
      category: "technical",
      helpful: 38
    },
    {
      id: 3,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple web applications typically take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed project timelines during the consultation phase.",
      category: "general",
      helpful: 42
    },
    {
      id: 4,
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance services including bug fixes, updates, security patches, performance optimization, and feature enhancements. Our support packages are tailored to your specific needs.",
      category: "technical",
      helpful: 35
    },
    {
      id: 5,
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope, complexity, and timeline of your project. We offer flexible pricing options including fixed-price projects, hourly rates, and retainer agreements. Contact us for a detailed quote.",
      category: "billing",
      helpful: 28
    },
    {
      id: 6,
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in integrating new solutions with existing systems, APIs, databases, and third-party services. Our team ensures seamless integration while maintaining data integrity and system performance.",
      category: "technical",
      helpful: 31
    },
    {
      id: 7,
      question: "How do you ensure data security and privacy?",
      answer: "We implement industry-standard security measures including encryption, secure coding practices, regular security audits, compliance with GDPR and other regulations, secure hosting environments, and employee training on data protection.",
      category: "technical",
      helpful: 29
    },
    {
      id: 8,
      question: "What if I need changes after the project is complete?",
      answer: "We understand that requirements can evolve. We offer post-launch support and can implement changes, updates, or new features. Our maintenance packages include regular updates and feature additions.",
      category: "general",
      helpful: 33
    }
  ];

  const knowledgeBaseItems = [
    {
      title: "API Documentation",
      description: "Complete API reference and integration guides",
      icon: FileText,
      articles: 25,
      category: "technical"
    },
    {
      title: "Setup Guides",
      description: "Step-by-step setup and configuration guides",
      icon: BookOpen,
      articles: 18,
      category: "technical"
    },
    {
      title: "Video Tutorials",
      description: "Video tutorials for common tasks and features",
      icon: Video,
      articles: 12,
      category: "general"
    },
    {
      title: "Best Practices",
      description: "Industry best practices and recommendations",
      icon: CheckCircle,
      articles: 15,
      category: "technical"
    },
    {
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      icon: AlertCircle,
      articles: 22,
      category: "technical"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and developers",
      icon: Users,
      articles: 8,
      category: "general"
    }
  ];

  const filteredFaqs = faqItems.filter(faq => {
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How can we help you?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Link
                key={index}
                href={channel.href}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${channel.color} text-white`}>
                    <channel.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {channel.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{channel.availability}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 text-sm font-medium">Get Help</span>
                  <span className="text-gray-500 text-xs">{channel.responseTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setIsTicketOpen(true)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                  Submit a Ticket
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Create a support ticket for detailed assistance</p>
            </button>

            <Link
              href="/documentation"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                  Browse Documentation
                </h3>
              </div>
              <p className="text-gray-600 text-sm">Find answers in our comprehensive documentation</p>
            </Link>

            <Link
              href="/case-studies"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                  View Case Studies
                </h3>
              </div>
              <p className="text-gray-600 text-sm">See how we&apos;ve helped other businesses succeed</p>
            </Link>
          </div>
        </div>

        {/* Knowledge Base */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Knowledge Base</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeBaseItems.map((item, index) => (
              <Link
                key={index}
                href="/documentation"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <item.icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 text-sm font-medium">Browse Articles</span>
                  <span className="text-gray-500 text-xs">{item.articles} articles</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors duration-200">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">{faq.helpful}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Still need help?</h3>
          <p className="text-xl mb-8 opacity-90">
            Our support team is here to help you succeed. Get in touch with us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contact Support</span>
            </Link>
            <Link
              href="/documentation"
              className="inline-flex items-center space-x-2 bg-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-colors duration-300 font-semibold text-lg"
            >
              <BookOpen className="h-5 w-5" />
              <span>Browse Documentation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Support Ticket Modal */}
      {isTicketOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Submit Support Ticket</h3>
              <button
                onClick={() => setIsTicketOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Please provide as much detail as possible about your issue. This will help us assist you more effectively.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors duration-300 font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Go to Contact Form</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
