// Data fetching utilities for eVALaunche website
// Simulates API responses with local JSON data for flexibility

import servicesData from '../data/services.json';
import caseStudiesData from '../data/case-studies.json';
import blogPostsData from '../data/blog-posts.json';
import testimonialsData from '../data/testimonials.json';
import teamData from '../data/team.json';
import companyConfig from '../data/company-config.json';

// Type definitions
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: Array<{
    name: string;
    description: string;
  }>;
  technologies: string[];
  pricing: {
    startingAt: string;
    currency: string;
    model: string;
  };
  timeline: string;
  stats: {
    projects: string;
    clients: string;
    satisfaction: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  service: string;
  thumbnail: string;
  hero: string;
  summary: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  technologies: string[];
  timeline: string;
  teamSize: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  featured: boolean;
  thumbnail: string;
  seo: {
    title: string;
    description: string;
  };
}

export interface Testimonial {
  id: string;
  client: {
    name: string;
    company: string;
    role: string;
    avatar: string;
  };
  content: string;
  rating: number;
  service: string;
  project: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  expertise: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface CompanyConfig {
  company: {
    name: string;
    tagline: string;
    description: string;
    foundingYear: string;
    email: {
      general: string;
      support: string;
      careers: string;
    };
    social: {
      linkedin: string;
      github: string;
      twitter: string;
      facebook: string;
    };
  };
  stats: {
    projectsCompleted: string;
    happyClients: string;
    yearsExperience: string;
    clientSatisfaction: string;
    successRate: string;
    teamSize: string;
    averageRating: string;
  };
  mission: {
    title: string;
    content: string;
    points: string[];
  };
  vision: {
    title: string;
    content: string;
    benefits: string[];
  };
  values: Array<{
    id: string;
    title: string;
    icon: string;
    description: string;
  }>;
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  features: string[];
}

// Services API
export async function getAllServices(): Promise<Service[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return servicesData.services;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getAllServices();
  return services.find(service => service.slug === slug) || null;
}

export async function getServiceById(id: string): Promise<Service | null> {
  const services = await getAllServices();
  return services.find(service => service.id === id) || null;
}

// Case Studies API
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return caseStudiesData.caseStudies;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.find(study => study.slug === slug) || null;
}

export async function getCaseStudyById(id: string): Promise<CaseStudy | null> {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.find(study => study.id === id) || null;
}

export async function getCaseStudiesByService(service: string): Promise<CaseStudy[]> {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.filter(study => 
    study.service.toLowerCase() === service.toLowerCase()
  );
}

// Blog Posts API
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return blogPostsData.posts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter(post => post.featured);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

// Testimonials API
export async function getAllTestimonials(): Promise<Testimonial[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return testimonialsData.testimonials.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getTestimonialsByService(service: string): Promise<Testimonial[]> {
  const testimonials = await getAllTestimonials();
  return testimonials.filter(testimonial => 
    testimonial.service.toLowerCase() === service.toLowerCase()
  );
}

export async function getFeaturedTestimonials(limit: number = 3): Promise<Testimonial[]> {
  const testimonials = await getAllTestimonials();
  return testimonials.filter(t => t.rating === 5).slice(0, limit);
}

// Team API
export async function getAllTeamMembers(): Promise<TeamMember[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return teamData.team;
}

export async function getTeamMemberById(id: string): Promise<TeamMember | null> {
  const team = await getAllTeamMembers();
  return team.find(member => member.id === id) || null;
}

// Company Config API
export async function getCompanyConfig(): Promise<CompanyConfig> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return companyConfig as CompanyConfig;
}

export async function getCompanyStats() {
  const config = await getCompanyConfig();
  return config.stats;
}

export async function getCompanyInfo() {
  const config = await getCompanyConfig();
  return config.company;
}

export async function getCompanyMission() {
  const config = await getCompanyConfig();
  return config.mission;
}

export async function getCompanyVision() {
  const config = await getCompanyConfig();
  return config.vision;
}

export async function getCompanyValues() {
  const config = await getCompanyConfig();
  return config.values;
}

export async function getCompanyProcess() {
  const config = await getCompanyConfig();
  return config.process;
}

export async function getCompanyFeatures() {
  const config = await getCompanyConfig();
  return config.features;
}

// Search and Filter utilities
export async function searchContent(query: string): Promise<{
  services: Service[];
  caseStudies: CaseStudy[];
  blogPosts: BlogPost[];
}> {
  const [services, caseStudies, blogPosts] = await Promise.all([
    getAllServices(),
    getAllCaseStudies(),
    getAllBlogPosts()
  ]);

  const searchTerm = query.toLowerCase();

  return {
    services: services.filter(s => 
      s.title.toLowerCase().includes(searchTerm) ||
      s.description.toLowerCase().includes(searchTerm) ||
      s.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
    ),
    caseStudies: caseStudies.filter(cs => 
      cs.title.toLowerCase().includes(searchTerm) ||
      cs.summary.toLowerCase().includes(searchTerm) ||
      cs.industry.toLowerCase().includes(searchTerm)
    ),
    blogPosts: blogPosts.filter(bp => 
      bp.title.toLowerCase().includes(searchTerm) ||
      bp.excerpt.toLowerCase().includes(searchTerm) ||
      bp.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  };
}

// Statistics aggregation - now uses centralized company config
export async function getStatistics() {
  const [config, caseStudies, testimonials] = await Promise.all([
    getCompanyConfig(),
    getAllCaseStudies(),
    getAllTestimonials()
  ]);

  return {
    projectsCompleted: config.stats.projectsCompleted,
    happyClients: config.stats.happyClients,
    yearsExperience: config.stats.yearsExperience,
    clientSatisfaction: config.stats.clientSatisfaction,
    successRate: config.stats.successRate,
    averageRating: config.stats.averageRating,
    caseStudiesCount: caseStudies.length,
    testimonialsCount: testimonials.length
  };
}

// Export all at once for convenience
export const dataAPI = {
  services: {
    getAll: getAllServices,
    getBySlug: getServiceBySlug,
    getById: getServiceById
  },
  caseStudies: {
    getAll: getAllCaseStudies,
    getBySlug: getCaseStudyBySlug,
    getById: getCaseStudyById,
    getByService: getCaseStudiesByService
  },
  blog: {
    getAll: getAllBlogPosts,
    getFeatured: getFeaturedBlogPosts,
    getBySlug: getBlogPostBySlug,
    getByCategory: getBlogPostsByCategory,
    getByTag: getBlogPostsByTag
  },
  testimonials: {
    getAll: getAllTestimonials,
    getByService: getTestimonialsByService,
    getFeatured: getFeaturedTestimonials
  },
  team: {
    getAll: getAllTeamMembers,
    getById: getTeamMemberById
  },
  company: {
    getConfig: getCompanyConfig,
    getStats: getCompanyStats,
    getInfo: getCompanyInfo,
    getMission: getCompanyMission,
    getVision: getCompanyVision,
    getValues: getCompanyValues,
    getProcess: getCompanyProcess,
    getFeatures: getCompanyFeatures
  },
  search: searchContent,
  stats: getStatistics
};

