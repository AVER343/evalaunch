'use client';

import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

interface PortfolioProps {
  onStartProject: () => void;
}

const Portfolio = ({ onStartProject }: PortfolioProps) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with AI-powered recommendations and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Software Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      results: {
        revenue: '+150%',
        users: '50K+',
        rating: '4.9'
      },
      color: 'primary'
    },
    {
      title: 'Healthcare AI System',
      description: 'Machine learning platform for medical diagnosis and patient management.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2331&q=80',
      category: 'AI/ML Solutions',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      results: {
        accuracy: '95%',
        patients: '10K+',
        rating: '4.8'
      },
      color: 'secondary'
    },
    {
      title: 'Digital Marketing Suite',
      description: 'Comprehensive marketing automation platform with advanced analytics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      category: 'Digital Marketing',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Analytics'],
      results: {
        leads: '+200%',
        conversion: '+85%',
        rating: '4.9'
      },
      color: 'accent'
    },
    {
      title: 'FinTech Mobile App',
      description: 'Secure mobile banking application with biometric authentication.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Software Development',
      technologies: ['React Native', 'Node.js', 'Blockchain', 'AWS'],
      results: {
        transactions: '1M+',
        users: '100K+',
        rating: '4.7'
      },
      color: 'primary'
    },
    {
      title: 'Smart Manufacturing IoT',
      description: 'IoT solution for predictive maintenance and quality control.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'AI/ML Solutions',
      technologies: ['Python', 'IoT', 'Machine Learning', 'Cloud'],
      results: {
        efficiency: '+40%',
        downtime: '-60%',
        rating: '4.8'
      },
      color: 'secondary'
    },
    {
      title: 'Social Media Analytics',
      description: 'Real-time social media monitoring and sentiment analysis platform.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80',
      category: 'Digital Marketing',
      technologies: ['React', 'Python', 'NLP', 'Redis'],
      results: {
        reach: '+300%',
        engagement: '+120%',
        rating: '4.9'
      },
      color: 'accent'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      content: 'eVALaunche transformed our business with their innovative AI solutions. The results exceeded our expectations.',
      rating: 5,
      project: 'Healthcare AI System'
    },
    {
      name: 'Sarah Johnson',
      content: 'Outstanding work on our e-commerce platform. The team was professional, responsive, and delivered on time.',
      rating: 5,
      project: 'E-Commerce Platform'
    },
    {
      name: 'Michael Chen',
      content: 'The mobile app they built for us has revolutionized how our customers interact with our services.',
      rating: 5,
      project: 'FinTech Mobile App'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'from-primary-500 to-primary-700',
      secondary: 'from-secondary-500 to-secondary-700',
      accent: 'from-accent-500 to-accent-700'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we&apos;ve helped businesses 
            achieve their goals through innovative technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover-lift border border-gray-100 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = `h-48 bg-gradient-to-br ${getColorClasses(project.color)} flex items-center justify-center`;
                      parent.innerHTML = `<div class="text-6xl">${project.category === 'Software Development' ? '💻' : project.category === 'AI/ML Solutions' ? '🤖' : '📊'}</div>`;
                    }
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${getColorClasses(project.color)} opacity-20`}></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.color === 'primary' ? 'bg-primary-100 text-primary-700' :
                    project.color === 'secondary' ? 'bg-secondary-100 text-secondary-700' :
                    'bg-accent-100 text-accent-700'
                  }`}>
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{project.results.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(project.results).map(([key, value], resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className={`text-lg font-bold ${
                        project.color === 'primary' ? 'text-primary-600' :
                        project.color === 'secondary' ? 'text-secondary-600' :
                        'text-accent-600'
                      }`}>{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-lg text-gray-600">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-primary-600 mt-1">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, number: '100+', label: 'Happy Clients' },
            { icon: TrendingUp, number: '150+', label: 'Projects Completed' },
            { icon: Star, number: '4.9', label: 'Average Rating' },
            { icon: ArrowRight, number: '99%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join our portfolio of successful projects and transform your business today.
            </p>
            <button 
              onClick={onStartProject}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg flex items-center space-x-2 mx-auto group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
