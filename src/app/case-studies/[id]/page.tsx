'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Clock, Users, TrendingUp, Award, ArrowRight, CheckCircle } from 'lucide-react';

// Case studies data (same as in the main page)
const caseStudies = [
  {
    id: 1,
    title: "Healthcare AI Platform: Reducing Diagnosis Time by 60%",
    industry: "healthcare",
    service: "ai-ml",
    duration: "6 months",
    team: "8 members",
    year: "2024",
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
    }
  },
  {
    id: 2,
    title: "E-commerce Platform: Scaling to 1M+ Users",
    industry: "ecommerce",
    service: "software",
    duration: "8 months",
    team: "12 members",
    year: "2024",
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
    }
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard: Real-time Risk Assessment",
    industry: "finance",
    service: "software",
    duration: "4 months",
    team: "6 members",
    year: "2023",
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
    }
  }
];

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

export default function CaseStudyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const studyId = parseInt(params.id as string);
    const study = caseStudies.find(s => s.id === studyId);
    
    if (study) {
      setCaseStudy(study);
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Link
            href="/case-studies"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Case Studies</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/case-studies" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Case Studies</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Case Study Details</h1>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-100">
          <div className="h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="text-center text-white relative z-10">
              <div className="text-9xl mb-6 opacity-90">🚀</div>
              <p className="text-3xl font-bold opacity-95">Our Success Story</p>
            </div>
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-lg font-medium">
                {caseStudy.year}
              </span>
            </div>
          </div>
          
          <div className="p-12">
            <div className="flex items-center space-x-4 mb-8">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-lg font-medium">
                {industries.find(ind => ind.id === caseStudy.industry)?.name}
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-lg font-medium">
                {services.find(svc => svc.id === caseStudy.service)?.name}
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {caseStudy.title}
            </h1>
            
            <div className="flex items-center space-x-12 mb-10 text-gray-600">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-blue-500" />
                <span className="font-semibold text-lg">{caseStudy.year}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-green-500" />
                <span className="font-semibold text-lg">{caseStudy.duration}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-purple-500" />
                <span className="font-semibold text-lg">{caseStudy.team}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Challenge Section */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-xl p-10 border border-red-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-4"></span>
              The Challenge
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-10 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
              Our Solution
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl shadow-xl p-12 mb-12 border border-green-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center justify-center">
            <TrendingUp className="h-8 w-8 text-green-500 mr-4" />
            Key Results
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/60 p-6 rounded-2xl">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-xl font-medium">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Technologies Used</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {caseStudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-lg font-medium rounded-full border border-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white mb-12 shadow-2xl">
          <div className="text-center">
            <div className="text-8xl mb-8">💬</div>
            <blockquote className="text-2xl italic mb-8 leading-relaxed max-w-4xl mx-auto">
              &quot;{caseStudy.testimonial.text}&quot;
            </blockquote>
            <div className="text-xl">
              <div className="font-bold">— {caseStudy.testimonial.author}</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Success Story?</h3>
          <p className="text-gray-600 mb-10 text-xl max-w-3xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:support@evalaunche.com?subject=Project Inquiry&body=Hello, I would like to discuss a project with eVALaunche. Please provide more information about your services."
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-6 w-6" />
            </a>
            <Link
              href="/case-studies"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-10 py-5 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>View More Case Studies</span>
              <ExternalLink className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
