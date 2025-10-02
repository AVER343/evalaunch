'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Clock, Users, TrendingUp, Award, Filter, Search, Tag, ChevronRight, Bookmark, Share2, Heart, Eye } from 'lucide-react';

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'education', name: 'Education' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'technology', name: 'Technology' }
  ];

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'software', name: 'Software Development' },
    { id: 'ai-ml', name: 'AI/ML Solutions' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'web', name: 'Web Development' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Healthcare AI Platform: Reducing Diagnosis Time by 60%",
      industry: "healthcare",
      service: "ai-ml",
      duration: "6 months",
      team: "8 members",
      year: "2024",
      excerpt: "We developed an AI-powered platform to analyze medical images and assist doctors in making faster, more accurate diagnoses. The existing manual process was time-consuming and prone to human error.",
      challenge: "We developed an AI-powered platform to analyze medical images and assist doctors in making faster, more accurate diagnoses. The existing manual process was time-consuming and prone to human error.",
      solution: "We developed a comprehensive AI platform using machine learning algorithms and computer vision technology. The system can analyze X-rays, MRIs, and CT scans in real-time, providing instant preliminary diagnoses with confidence scores.",
      results: [
        "60% reduction in diagnosis time",
        "95% accuracy rate in preliminary diagnoses",
        "40% increase in patient throughput",
        "30% reduction in misdiagnosis cases"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "AWS", "Docker", "React"],
      testimonial: {
        text: "The AI platform has revolutionized our diagnostic process. We can now serve more patients with higher accuracy and confidence.",
        author: "Chief Medical Officer"
      },
      readTime: "8 min read",
      likes: 42,
      views: 1280
    },
    {
      id: 2,
      title: "E-commerce Platform: Scaling to 1M+ Users",
      industry: "ecommerce",
      service: "software",
      duration: "8 months",
      team: "12 members",
      year: "2024",
      excerpt: "We scaled an e-commerce platform to handle over 1 million concurrent users during peak shopping seasons while maintaining fast load times and seamless user experience.",
      challenge: "We scaled an e-commerce platform to handle over 1 million concurrent users during peak shopping seasons while maintaining fast load times and seamless user experience.",
      solution: "We redesigned the entire platform architecture using microservices, implemented advanced caching strategies, and optimized database performance. The new system uses cloud-native technologies for auto-scaling and load balancing.",
      results: [
        "99.9% uptime during peak traffic",
        "2x faster page load times",
        "300% increase in concurrent user capacity",
        "50% reduction in server costs"
      ],
      technologies: ["Node.js", "React", "MongoDB", "Redis", "AWS", "Kubernetes"],
      testimonial: {
        text: "The platform handled Black Friday traffic flawlessly. Our sales increased by 200% without any technical issues.",
        author: "Chief Technology Officer"
      },
      readTime: "12 min read",
      likes: 38,
      views: 1560
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard: Real-time Risk Assessment",
      industry: "finance",
      service: "software",
      duration: "4 months",
      team: "6 members",
      year: "2023",
      excerpt: "We built a real-time analytics dashboard to monitor financial transactions, detect fraud, and assess risk across global operations.",
      challenge: "We built a real-time analytics dashboard to monitor financial transactions, detect fraud, and assess risk across global operations.",
      solution: "We built a comprehensive analytics platform with real-time data processing, advanced visualization tools, and machine learning algorithms for fraud detection and risk assessment.",
      results: [
        "Real-time transaction monitoring",
        "85% reduction in false fraud alerts",
        "40% faster risk assessment",
        "99.5% fraud detection accuracy"
      ],
      technologies: ["Python", "React", "PostgreSQL", "Apache Kafka", "D3.js", "AWS"],
      testimonial: {
        text: "The dashboard gives us complete visibility into our operations. We can now make data-driven decisions in real-time.",
        author: "Head of Risk Management"
      },
      readTime: "10 min read",
      likes: 29,
      views: 920
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = searchTerm === '' || 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    
    return matchesSearch && matchesIndustry && matchesService;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Discover how we&apos;ve helped businesses transform their operations with innovative technology solutions. 
            Each case study showcases real challenges, solutions, and measurable results.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Industry:</span>
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                    selectedIndustry === industry.id
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Service:</span>
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                    selectedService === service.id
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {filteredCaseStudies.map((study) => (
            <article key={study.id} className="border-b border-gray-200 pb-12 last:border-b-0">
              {/* Article Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                    {industries.find(ind => ind.id === study.industry)?.name}
                  </span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                    {services.find(svc => svc.id === study.service)?.name}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors">
                  <Link href={`/case-studies/${study.id}`}>
                    {study.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {study.excerpt}
                </p>
              </div>

              {/* Article Meta */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{study.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{study.team}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{study.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{study.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{study.views}</span>
                  </div>
                </div>
              </div>

              {/* Key Results Preview */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                  Key Results
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {study.results.slice(0, 4).map((result, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More Link */}
              <div className="flex items-center justify-between">
                <Link
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <span>Read full case study</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
                
                <div className="flex items-center space-x-3">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Bookmark className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Success Story?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar results for your business. 
            Our team is ready to transform your ideas into reality.
          </p>
          <a
            href="mailto:hello@evalaunche.com?subject=Project Inquiry&body=Hello, I would like to discuss a project with eVALaunche. Please provide more information about your services."
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            <span>Get Started Today</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}