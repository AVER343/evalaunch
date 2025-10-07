'use client';

import { useState } from 'react';
import { Briefcase, Users, TrendingUp, Heart, Globe, Zap, Code, Brain, Megaphone, MapPin, Clock, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours and work-life balance.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career progression paths.'
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Work with talented professionals in a supportive and inclusive environment.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for you and your family.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Work with the latest technologies and tools in software development and AI/ML.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses.'
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'Software Development',
      location: 'Remote',
      type: 'Full-time',
      icon: Code,
      description: 'We are looking for an experienced Full-Stack Developer to build scalable web applications using React, Node.js, and cloud technologies.',
      requirements: [
        '5+ years of experience in full-stack development',
        'Strong proficiency in React.js, Node.js, TypeScript',
        'Experience with AWS/Azure cloud platforms',
        'Knowledge of database systems (PostgreSQL, MongoDB)',
        'Excellent problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable code with tests',
        'Mentor junior developers',
        'Participate in code reviews and technical discussions'
      ]
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'AI/ML Solutions',
      location: 'Remote',
      type: 'Full-time',
      icon: Brain,
      description: 'Join our AI team to develop machine learning models and intelligent automation solutions for our clients.',
      requirements: [
        '3+ years of experience in AI/ML development',
        'Strong knowledge of Python, TensorFlow, PyTorch',
        'Experience with NLP, Computer Vision, or Deep Learning',
        'Understanding of ML ops and model deployment',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Develop and deploy machine learning models',
        'Build AI-powered solutions for clients',
        'Conduct research on latest AI/ML technologies',
        'Optimize model performance and accuracy',
        'Collaborate with data scientists and engineers'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'Digital Marketing',
      location: 'Remote',
      type: 'Full-time',
      icon: Megaphone,
      description: 'Drive digital marketing campaigns and strategies for our clients across various platforms.',
      requirements: [
        '3+ years of experience in digital marketing',
        'Expertise in SEO, SEM, social media marketing',
        'Experience with Google Ads, Facebook Ads',
        'Strong analytical skills with Google Analytics',
        'Excellent written and verbal communication'
      ],
      responsibilities: [
        'Plan and execute digital marketing campaigns',
        'Manage social media accounts and content',
        'Optimize SEO and PPC campaigns',
        'Analyze campaign performance and ROI',
        'Stay updated with digital marketing trends'
      ]
    },
    {
      id: 4,
      title: 'Frontend Developer',
      department: 'Software Development',
      location: 'Remote',
      type: 'Full-time',
      icon: Code,
      description: 'Create beautiful and responsive user interfaces using modern frontend technologies.',
      requirements: [
        '3+ years of frontend development experience',
        'Expert in React.js, Next.js, TypeScript',
        'Strong knowledge of HTML5, CSS3, Tailwind CSS',
        'Experience with responsive design and UI/UX',
        'Portfolio of previous work'
      ],
      responsibilities: [
        'Build responsive and accessible web interfaces',
        'Implement pixel-perfect designs',
        'Optimize frontend performance',
        'Collaborate with designers and backend developers',
        'Ensure cross-browser compatibility'
      ]
    }
  ];

  const values = [
    'Innovation: We embrace new technologies and creative solutions',
    'Excellence: We deliver high-quality work that exceeds expectations',
    'Collaboration: We work together as a team to achieve goals',
    'Integrity: We maintain transparency and ethical practices',
    'Growth: We invest in continuous learning and development'
  ];

  const goToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-blue-600">Amazing Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build your career with eVaLaunche. Work on innovative projects, collaborate with talented professionals, 
              and make a real impact on businesses worldwide.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-gray-900 mb-2">3+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work <span className="text-blue-600">With Us</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job. Join a team that values your growth and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our work and define our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Open <span className="text-blue-600">Positions</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Find your next career opportunity with us. We&apos;re always looking for talented individuals.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => {
              const IconComponent = job.icon;
              const isExpanded = selectedJob === job.id;
              
              return (
                <div key={job.id} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div 
                    className="p-8 cursor-pointer"
                    onClick={() => setSelectedJob(isExpanded ? null : job.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-6 flex-1">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <p className="text-gray-600 mb-4">{job.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Briefcase className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-700">{job.department}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-700">{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-700">{job.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="ml-4 text-blue-600 hover:text-blue-700 font-medium">
                        {isExpanded ? 'Less' : 'More'} Details
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-8 pb-8 border-t border-gray-200 pt-8">
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                          <ul className="space-y-3">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h4>
                          <ul className="space-y-3">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <button 
                        onClick={goToContact}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t See a Position That Fits?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We&apos;re always interested in hearing from talented individuals. Send us your resume and let&apos;s talk about opportunities.
          </p>
          <button 
            onClick={goToContact}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <span>Send Your Resume</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

