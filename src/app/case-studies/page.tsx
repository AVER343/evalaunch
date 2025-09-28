'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Clock, Users, TrendingUp, Award, Filter, Search } from 'lucide-react';

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
      client: "MedTech Solutions",
      industry: "healthcare",
      service: "ai-ml",
      duration: "6 months",
      team: "8 members",
      year: "2024",
      challenge: "MedTech Solutions needed an AI-powered platform to analyze medical images and assist doctors in making faster, more accurate diagnoses. The existing manual process was time-consuming and prone to human error.",
      solution: "We developed a comprehensive AI platform using machine learning algorithms and computer vision technology. The system can analyze X-rays, MRIs, and CT scans in real-time, providing instant preliminary diagnoses with confidence scores.",
      results: [
        "60% reduction in diagnosis time",
        "95% accuracy rate in preliminary diagnoses",
        "40% increase in patient throughput",
        "30% reduction in misdiagnosis cases"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "AWS", "Docker", "React"],
      image: "/case-studies/healthcare-ai.jpg",
      testimonial: {
        text: "The AI platform has revolutionized our diagnostic process. We can now serve more patients with higher accuracy and confidence.",
        author: "Dr. Sarah Johnson",
        role: "Chief Medical Officer",
        company: "MedTech Solutions"
      }
    },
    {
      id: 2,
      title: "E-commerce Platform: Scaling to 1M+ Users",
      client: "ShopFast Retail",
      industry: "ecommerce",
      service: "software",
      duration: "8 months",
      team: "12 members",
      year: "2024",
      challenge: "ShopFast needed to scale their e-commerce platform to handle over 1 million concurrent users during peak shopping seasons while maintaining fast load times and seamless user experience.",
      solution: "We redesigned the entire platform architecture using microservices, implemented advanced caching strategies, and optimized database performance. The new system uses cloud-native technologies for auto-scaling and load balancing.",
      results: [
        "99.9% uptime during peak traffic",
        "2x faster page load times",
        "300% increase in concurrent user capacity",
        "50% reduction in server costs"
      ],
      technologies: ["Node.js", "React", "MongoDB", "Redis", "AWS", "Kubernetes"],
      image: "/case-studies/ecommerce-scaling.jpg",
      testimonial: {
        text: "The platform handled Black Friday traffic flawlessly. Our sales increased by 200% without any technical issues.",
        author: "Mike Chen",
        role: "CTO",
        company: "ShopFast Retail"
      }
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard: Real-time Risk Assessment",
      client: "SecureBank",
      industry: "finance",
      service: "software",
      duration: "4 months",
      team: "6 members",
      year: "2023",
      challenge: "SecureBank needed a real-time analytics dashboard to monitor financial transactions, detect fraud, and assess risk across their global operations.",
      solution: "We built a comprehensive analytics platform with real-time data processing, advanced visualization tools, and machine learning algorithms for fraud detection and risk assessment.",
      results: [
        "Real-time transaction monitoring",
        "85% reduction in false fraud alerts",
        "40% faster risk assessment",
        "99.5% fraud detection accuracy"
      ],
      technologies: ["Python", "React", "PostgreSQL", "Apache Kafka", "D3.js", "AWS"],
      image: "/case-studies/financial-analytics.jpg",
      testimonial: {
        text: "The dashboard gives us complete visibility into our operations. We can now make data-driven decisions in real-time.",
        author: "Jennifer Martinez",
        role: "Head of Risk Management",
        company: "SecureBank"
      }
    },
    {
      id: 4,
      title: "Mobile Learning App: 500K+ Downloads",
      client: "EduTech Academy",
      industry: "education",
      service: "mobile",
      duration: "5 months",
      team: "10 members",
      year: "2023",
      challenge: "EduTech Academy wanted to create an engaging mobile learning platform that could deliver personalized educational content to students worldwide, with offline capabilities and progress tracking.",
      solution: "We developed a cross-platform mobile app with AI-powered personalization, offline content synchronization, and comprehensive analytics. The app adapts to each student's learning style and pace.",
      results: [
        "500,000+ app downloads",
        "4.8/5 average user rating",
        "70% increase in student engagement",
        "45% improvement in learning outcomes"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow", "AWS", "Firebase"],
      image: "/case-studies/mobile-learning.jpg",
      testimonial: {
        text: "The app has transformed how students learn. The personalized approach has significantly improved learning outcomes.",
        author: "Prof. David Wilson",
        role: "Director of Education",
        company: "EduTech Academy"
      }
    },
    {
      id: 5,
      title: "Digital Marketing Campaign: 300% ROI Increase",
      client: "TechStart Inc.",
      industry: "technology",
      service: "marketing",
      duration: "3 months",
      team: "5 members",
      year: "2024",
      challenge: "TechStart needed a comprehensive digital marketing strategy to increase brand awareness, generate leads, and drive sales for their new SaaS product in a competitive market.",
      solution: "We implemented a multi-channel digital marketing campaign including SEO optimization, social media marketing, content marketing, PPC advertising, and email marketing with advanced automation and personalization.",
      results: [
        "300% increase in ROI",
        "150% increase in website traffic",
        "200% increase in qualified leads",
        "80% increase in conversion rate"
      ],
      technologies: ["Google Analytics", "HubSpot", "Facebook Ads", "Google Ads", "Mailchimp", "Hootsuite"],
      image: "/case-studies/digital-marketing.jpg",
      testimonial: {
        text: "The marketing campaign exceeded all our expectations. We've seen incredible growth in both brand awareness and sales.",
        author: "Lisa Thompson",
        role: "Marketing Director",
        company: "TechStart Inc."
      }
    },
    {
      id: 6,
      title: "Manufacturing IoT Solution: 25% Efficiency Gain",
      client: "SmartManufacturing Co.",
      industry: "manufacturing",
      service: "ai-ml",
      duration: "7 months",
      team: "9 members",
      year: "2023",
      challenge: "SmartManufacturing needed an IoT solution to monitor equipment performance, predict maintenance needs, and optimize production processes across multiple facilities.",
      solution: "We developed a comprehensive IoT platform with sensors, data collection systems, and AI-powered analytics for predictive maintenance and production optimization.",
      results: [
        "25% increase in production efficiency",
        "40% reduction in equipment downtime",
        "60% decrease in maintenance costs",
        "15% improvement in product quality"
      ],
      technologies: ["Python", "IoT Sensors", "Machine Learning", "AWS IoT", "React", "InfluxDB"],
      image: "/case-studies/manufacturing-iot.jpg",
      testimonial: {
        text: "The IoT solution has revolutionized our manufacturing process. We're now more efficient and profitable than ever.",
        author: "Robert Kim",
        role: "Operations Director",
        company: "SmartManufacturing Co."
      }
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = searchTerm === '' || 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    
    return matchesSearch && matchesIndustry && matchesService;
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
            <h1 className="text-3xl font-bold text-gray-900">Case Studies</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Industry:</span>
            </div>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  selectedIndustry === industry.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Service:</span>
            </div>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  selectedService === service.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-lg opacity-90">Case Study</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                    {industries.find(ind => ind.id === study.industry)?.name}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {services.find(svc => svc.id === study.service)?.name}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {study.title}
                </h3>
                
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{study.client}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{study.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{study.duration}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <blockquote className="text-gray-600 italic mb-4">
                    &quot;{study.testimonial.text}&quot;
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                    <div className="text-gray-600">{study.testimonial.role}, {study.testimonial.company}</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    <span>Read Full Case Study</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can help you achieve similar results for your business.
          </p>
          <a
            href="mailto:support@evalaunche.com?subject=Project Inquiry&body=Hello, I would like to discuss a project with eVALaunche. Please provide more information about your services."
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
          >
            <span>Get Started Today</span>
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
}
