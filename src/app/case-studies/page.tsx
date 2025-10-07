'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Clock, Users, TrendingUp, Award, Filter, Search, Tag, ChevronRight, Bookmark, Share2, Heart, Eye } from 'lucide-react';
import { getAllCaseStudies, type CaseStudy } from '@/lib/data';

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      const data = await getAllCaseStudies();
      setCaseStudies(data);
    };
    loadData();
  }, []);

  // Extract unique industries and services from case studies
  const industries = [
    { id: 'all', name: 'All Industries' },
    ...Array.from(new Set(caseStudies.map(cs => cs.industry))).map(industry => ({
      id: industry.toLowerCase(),
      name: industry
    }))
  ];

  const services = [
    { id: 'all', name: 'All Services' },
    ...Array.from(new Set(caseStudies.map(cs => cs.service))).map(service => ({
      id: service.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-'),
      name: service
    }))
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = searchTerm === '' || 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = selectedIndustry === 'all' || study.industry.toLowerCase() === selectedIndustry;
    const matchesService = selectedService === 'all' || 
      study.service.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-') === selectedService;
    
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
                    {study.industry}
                  </span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                    {study.service}
                  </span>
                </div>
                
                <h2 className="text-base font-semibold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors">
                  <Link href={`/case-studies/${study.slug}`}>
                    {study.title}
                  </Link>
                </h2>
                
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {study.summary}
                </p>
              </div>

              {/* Article Meta */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{study.client}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{study.timeline}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>{study.teamSize}</span>
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
                      <span className="text-gray-700 text-sm">
                        <span className="font-bold text-green-600">{result.value}</span> - {result.description}
                      </span>
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

              {/* Testimonial Preview */}
              {study.testimonial && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-gray-700 italic text-sm mb-2">&ldquo;{study.testimonial.quote}&rdquo;</p>
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold">{study.testimonial.author}</span>, {study.testimonial.role}
                  </p>
                </div>
              )}

              {/* Read More Link */}
              <div className="flex items-center justify-between">
                <Link
                  href={`/case-studies/${study.slug}`}
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
            href="/contact"
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

