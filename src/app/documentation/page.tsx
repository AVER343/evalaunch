'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, BookOpen, Code, Settings, Users, FileText, Download, ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';

export default function DocumentationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'api', name: 'API Reference' },
    { id: 'guides', name: 'Guides' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'examples', name: 'Examples' }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      items: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with eVALaunch services in minutes',
          type: 'guide',
          difficulty: 'beginner',
          time: '5 min read'
        },
        {
          title: 'Installation & Setup',
          description: 'Step-by-step installation and configuration instructions',
          type: 'guide',
          difficulty: 'beginner',
          time: '10 min read'
        },
        {
          title: 'Your First Project',
          description: 'Create your first project using our platform',
          type: 'tutorial',
          difficulty: 'beginner',
          time: '15 min read'
        },
        {
          title: 'Account Management',
          description: 'Manage your account, billing, and team settings',
          type: 'guide',
          difficulty: 'beginner',
          time: '8 min read'
        }
      ]
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: Code,
      items: [
        {
          title: 'Authentication',
          description: 'Learn how to authenticate with our API',
          type: 'reference',
          difficulty: 'intermediate',
          time: '12 min read'
        },
        {
          title: 'REST API Endpoints',
          description: 'Complete reference for all REST API endpoints',
          type: 'reference',
          difficulty: 'intermediate',
          time: '20 min read'
        },
        {
          title: 'Webhooks',
          description: 'Set up and manage webhooks for real-time updates',
          type: 'guide',
          difficulty: 'intermediate',
          time: '15 min read'
        },
        {
          title: 'Rate Limiting',
          description: 'Understand API rate limits and best practices',
          type: 'guide',
          difficulty: 'beginner',
          time: '6 min read'
        },
        {
          title: 'Error Handling',
          description: 'Common error codes and how to handle them',
          type: 'guide',
          difficulty: 'intermediate',
          time: '10 min read'
        }
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      icon: FileText,
      items: [
        {
          title: 'Software Development Best Practices',
          description: 'Industry best practices for software development projects',
          type: 'guide',
          difficulty: 'intermediate',
          time: '25 min read'
        },
        {
          title: 'AI/ML Integration Guide',
          description: 'How to integrate AI and machine learning into your applications',
          type: 'guide',
          difficulty: 'advanced',
          time: '30 min read'
        },
        {
          title: 'Digital Marketing Strategies',
          description: 'Comprehensive guide to digital marketing implementation',
          type: 'guide',
          difficulty: 'intermediate',
          time: '20 min read'
        },
        {
          title: 'Security Best Practices',
          description: 'Essential security measures for your applications',
          type: 'guide',
          difficulty: 'intermediate',
          time: '18 min read'
        },
        {
          title: 'Performance Optimization',
          description: 'Techniques to optimize application performance',
          type: 'guide',
          difficulty: 'advanced',
          time: '22 min read'
        }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      icon: Settings,
      items: [
        {
          title: 'Building a React Application',
          description: 'Step-by-step tutorial for building a modern React app',
          type: 'tutorial',
          difficulty: 'beginner',
          time: '45 min read'
        },
        {
          title: 'Creating a Mobile App with React Native',
          description: 'Complete guide to building cross-platform mobile apps',
          type: 'tutorial',
          difficulty: 'intermediate',
          time: '60 min read'
        },
        {
          title: 'Implementing Machine Learning Models',
          description: 'Tutorial on integrating ML models into your applications',
          type: 'tutorial',
          difficulty: 'advanced',
          time: '90 min read'
        },
        {
          title: 'Setting up CI/CD Pipeline',
          description: 'Automate your deployment process with continuous integration',
          type: 'tutorial',
          difficulty: 'intermediate',
          time: '40 min read'
        }
      ]
    },
    {
      id: 'examples',
      title: 'Examples',
      icon: Users,
      items: [
        {
          title: 'E-commerce Website Template',
          description: 'Complete e-commerce website with payment integration',
          type: 'example',
          difficulty: 'intermediate',
          time: '2 hours'
        },
        {
          title: 'Real-time Chat Application',
          description: 'WebSocket-based chat application with user authentication',
          type: 'example',
          difficulty: 'intermediate',
          time: '3 hours'
        },
        {
          title: 'Data Analytics Dashboard',
          description: 'Interactive dashboard for data visualization and analytics',
          type: 'example',
          difficulty: 'advanced',
          time: '4 hours'
        },
        {
          title: 'AI-Powered Recommendation System',
          description: 'Machine learning recommendation engine implementation',
          type: 'example',
          difficulty: 'advanced',
          time: '5 hours'
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return <FileText className="h-4 w-4" />;
      case 'tutorial': return <Settings className="h-4 w-4" />;
      case 'reference': return <Code className="h-4 w-4" />;
      case 'example': return <Users className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const allItems = documentationSections.flatMap(section => 
    section.items.map(item => ({ ...item, sectionId: section.id, sectionTitle: section.title }))
  );

  const filteredItems = allItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.sectionId === selectedCategory;
    
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
            <h1 className="text-3xl font-bold text-gray-900">Documentation</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="#getting-started"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Quick Start</h3>
              </div>
              <p className="text-gray-600 text-sm">Get started in 5 minutes</p>
            </Link>

            <Link
              href="#api"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">API Reference</h3>
              </div>
              <p className="text-gray-600 text-sm">Complete API documentation</p>
            </Link>

            <Link
              href="#guides"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Guides</h3>
              </div>
              <p className="text-gray-600 text-sm">In-depth guides and tutorials</p>
            </Link>

            <Link
              href="#examples"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Examples</h3>
              </div>
              <p className="text-gray-600 text-sm">Real-world code examples</p>
            </Link>
          </div>
        </div>

        {/* Documentation Sections */}
        {searchTerm === '' && selectedCategory === 'all' ? (
          <div className="space-y-6">
            {documentationSections.map((section) => (
              <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <section.icon className="h-6 w-6 text-primary-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                    <span className="text-gray-500 text-sm">({section.items.length} items)</span>
                  </div>
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {expandedSections.includes(section.id) && (
                  <div className="border-t border-gray-200">
                    <div className="p-6 space-y-4">
                      {section.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="flex-shrink-0 mt-1">
                            {getTypeIcon(item.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                            <div className="flex items-center space-x-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                                {item.difficulty}
                              </span>
                              <span className="text-gray-500 text-xs">{item.time}</span>
                              <span className="text-gray-500 text-xs capitalize">{item.type}</span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <ExternalLink className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <span className="text-gray-500 text-sm">({item.sectionTitle})</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </span>
                      <span className="text-gray-500 text-xs">{item.time}</span>
                      <span className="text-gray-500 text-xs capitalize">{item.type}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No documentation found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Download Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Download Complete Documentation</h3>
          <p className="text-xl mb-8 opacity-90">
            Get the complete documentation package including guides, API references, and examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg">
              <Download className="h-5 w-5" />
              <span>Download PDF</span>
            </button>
            <button className="inline-flex items-center space-x-2 bg-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-colors duration-300 font-semibold text-lg">
              <ExternalLink className="h-5 w-5" />
              <span>View Online</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
