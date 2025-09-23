'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Search, Filter, Clock, Eye, ThumbsUp } from 'lucide-react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'technology', name: 'Technology', count: 5 },
    { id: 'ai-ml', name: 'AI/ML', count: 3 },
    { id: 'development', name: 'Development', count: 4 },
    { id: 'marketing', name: 'Marketing', count: 3 },
    { id: 'business', name: 'Business', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Development: Trends and Predictions for 2024",
      excerpt: "Explore how artificial intelligence is revolutionizing software development, from automated code generation to intelligent testing and deployment strategies.",
      content: "Artificial intelligence is transforming the software development landscape at an unprecedented pace. In 2024, we're seeing AI-powered tools that can generate code, detect bugs, optimize performance, and even predict potential issues before they occur. This comprehensive guide explores the latest trends, tools, and best practices for integrating AI into your development workflow.",
      author: "eVALaunch Team",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai-ml",
      tags: ["AI", "Machine Learning", "Software Development", "Automation"],
      image: "/blog/ai-software-development.jpg",
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Next.js 14: A Complete Guide",
      excerpt: "Learn how to build high-performance, scalable web applications using Next.js 14's latest features including App Router, Server Components, and advanced optimization techniques.",
      content: "Next.js 14 introduces groundbreaking features that make building scalable web applications easier than ever. This comprehensive guide covers everything from setting up your project to implementing advanced patterns like Server Components, streaming, and edge computing. We'll also explore real-world examples and best practices for production deployments.",
      author: "eVALaunch Team",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "development",
      tags: ["Next.js", "React", "Web Development", "Performance"],
      image: "/blog/nextjs-scalable-apps.jpg",
      views: 2100,
      likes: 156
    },
    {
      id: 3,
      title: "Digital Marketing Strategies That Actually Work in 2024",
      excerpt: "Discover proven digital marketing strategies that deliver real results, from SEO optimization to social media campaigns and conversion rate optimization.",
      content: "The digital marketing landscape is constantly evolving, and what worked yesterday might not work today. This in-depth analysis covers the most effective digital marketing strategies for 2024, including data-driven approaches, personalization techniques, and emerging platforms. Learn how to create campaigns that not only reach your audience but convert them into loyal customers.",
      author: "eVALaunch Team",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "marketing",
      tags: ["Digital Marketing", "SEO", "Social Media", "Conversion"],
      image: "/blog/digital-marketing-strategies.jpg",
      views: 1800,
      likes: 134
    },
    {
      id: 4,
      title: "Machine Learning in Business: Real-World Applications and ROI",
      excerpt: "Explore practical machine learning applications that can transform your business operations and drive measurable ROI across different industries.",
      content: "Machine learning isn't just a buzzword anymore—it's a powerful tool that can revolutionize how businesses operate. This comprehensive guide explores real-world ML applications across various industries, from predictive analytics in retail to fraud detection in finance. Learn how to identify opportunities, implement solutions, and measure the actual return on investment.",
      author: "eVALaunch Team",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "ai-ml",
      tags: ["Machine Learning", "Business Intelligence", "ROI", "Analytics"],
      image: "/blog/ml-business-applications.jpg",
      views: 1650,
      likes: 98
    },
    {
      id: 5,
      title: "Cloud Computing Best Practices: Security, Performance, and Cost Optimization",
      excerpt: "Master cloud computing with these essential best practices for security, performance optimization, and cost management across AWS, Azure, and Google Cloud.",
      content: "Cloud computing offers incredible flexibility and scalability, but without proper planning, it can also lead to security vulnerabilities, performance issues, and unexpected costs. This guide covers essential best practices for cloud architecture, security implementation, performance optimization, and cost management strategies that will help you get the most out of your cloud investment.",
      author: "eVALaunch Team",
      date: "2023-12-20",
      readTime: "11 min read",
      category: "technology",
      tags: ["Cloud Computing", "AWS", "Security", "Performance"],
      image: "/blog/cloud-computing-best-practices.jpg",
      views: 1420,
      likes: 112
    },
    {
      id: 6,
      title: "The Complete Guide to Mobile App Development in 2024",
      excerpt: "Everything you need to know about mobile app development, from choosing the right platform to deployment and monetization strategies.",
      content: "Mobile app development continues to evolve rapidly, with new frameworks, tools, and platforms emerging regularly. This comprehensive guide covers everything from choosing between native and cross-platform development to implementing advanced features like AI integration, offline functionality, and real-time synchronization. Perfect for both beginners and experienced developers looking to stay current.",
      author: "eVALaunch Team",
      date: "2023-12-15",
      readTime: "14 min read",
      category: "development",
      tags: ["Mobile Development", "React Native", "iOS", "Android"],
      image: "/blog/mobile-app-development-2024.jpg",
      views: 1980,
      likes: 145
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
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
            <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
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
                placeholder="Search blog posts..."
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
                <span className="text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Post</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">📝</div>
                      <p className="text-lg opacity-90">Featured Article</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === filteredPosts[0].category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm">{filteredPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${filteredPosts[0].id}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📄</div>
                  <p className="text-sm">Blog Post</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
