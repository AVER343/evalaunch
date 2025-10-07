'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, CheckCircle, Play, Pause, ChevronLeft, ChevronRight, Star, Users, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { getAllServices, getCompanyStats, getCompanyFeatures, type Service } from '@/lib/data';

interface HeroProps {
  onStartProject: () => void;
}

// Animated Counter Component (AdsRole style)
const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '', 
  icon: Icon,
  label,
  color = 'text-primary-600'
}: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
  icon?: any;
  label: string;
  color?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-primary-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
    >
      <div className="flex items-center justify-center mb-3">
        {Icon && <Icon className={`h-8 w-8 ${color} mr-3 group-hover:scale-110 transition-transform duration-300`} />}
        <motion.div 
          className={`text-4xl font-bold ${color} group-hover:scale-105 transition-transform duration-300`}
          initial={{ scale: 0.5 }}
          animate={isInView ? { scale: 1 } : { scale: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {prefix}{count.toLocaleString()}{suffix}
        </motion.div>
      </div>
      <motion.div 
        className="text-gray-600 font-medium text-sm group-hover:text-gray-800 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

// Typewriter Effect Component
const TypewriterText = ({ 
  text, 
  speed = 100, 
  delay = 1000,
  className = ""
}: { 
  text: string; 
  speed?: number; 
  delay?: number;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Reset when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  // Restart after delay when complete
  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setIsComplete(false);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, delay]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-8 bg-primary-600 ml-1"
      />
    </span>
  );
};

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-primary-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-accent-400 rounded-full opacity-40"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-3 h-3 bg-green-400 rounded-full opacity-50"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

const Hero = ({ onStartProject }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [features, setFeatures] = useState<string[]>([]);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const loadData = async () => {
      const [servicesData, statsData, featuresData] = await Promise.all([
        getAllServices(),
        getCompanyStats(),
        getCompanyFeatures()
      ]);
      setServices(servicesData);
      setStats(statsData);
      setFeatures(featuresData);
    };
    loadData();
  }, []);

  // Enhanced carousel data with AdsRole-style content
  const carouselData = [
    {
      id: 'software-development',
      title: 'Software Development',
      subtitle: 'Build Modern Applications',
      description: 'Full-stack development with React, Next.js, Node.js, and cloud-native architectures. From MVP to enterprise-scale solutions.',
      image: '/images/hero/mac.png',
      video: '/videos/software-dev-demo.mp4',
      features: ['Web Applications', 'Mobile Apps', 'APIs & Microservices', 'Cloud Deployment'],
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      icon: '💻',
      gradient: 'from-blue-500/20 via-blue-600/10 to-blue-700/20',
      stats: { projects: 150, clients: 50, satisfaction: 98 }
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      subtitle: 'Intelligent Solutions',
      description: 'Leverage AI and automation to streamline processes, enhance decision-making, and scale your operations efficiently.',
      image: '/images/hero/smartphone.png',
      video: '/videos/ai-automation-demo.mp4',
      features: ['AI Workflows', 'Machine Learning', 'Process Automation', 'LLM Integration'],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      icon: '🤖',
      gradient: 'from-purple-500/20 via-purple-600/10 to-purple-700/20',
      stats: { projects: 75, clients: 30, satisfaction: 95 }
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      subtitle: 'Growth & Engagement',
      description: 'Data-driven marketing strategies that drive growth, increase engagement, and deliver measurable ROI for your business.',
      image: '/images/hero/drawing-tablet.png',
      video: '/videos/digital-marketing-demo.mp4',
      features: ['SEO & Content', 'Social Media', 'PPC Campaigns', 'Analytics & Insights'],
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      icon: '📈',
      gradient: 'from-green-500/20 via-green-600/10 to-green-700/20',
      stats: { projects: 200, clients: 80, satisfaction: 97 }
    }
  ];

  // Auto-play functionality with smooth transitions
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
      }, 6000); // Increased to 6 seconds for better UX
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, carouselData.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  }, [carouselData.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  }, [carouselData.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Video loading handler
  const handleVideoLoad = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  // Show loading skeleton while data loads
  if (!stats || services.length === 0 || features.length === 0) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50" style={{ paddingTop: '120px' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="space-y-8 animate-fade-in max-w-5xl">
              <div className="space-y-6">
                <div className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-24 bg-gray-200 rounded-lg animate-pulse max-w-4xl mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded-2xl animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentSlideData = carouselData[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ height: '90vh', paddingTop: '120px' }}>
      {/* Dynamic Background with Video Support */}
      <div className="absolute inset-0">
        {/* Background Video (if available) */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
            onLoadedData={handleVideoLoad}
            style={{ display: isVideoLoaded ? 'block' : 'none' }}
          >
            <source src={currentSlideData.video} type="video/mp4" />
          </video>
          
          {/* Fallback Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} transition-all duration-1000`} />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/90" />
        
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }}
        />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Top Badge with Animation */}
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="inline-block"
            >
              <span className={`inline-flex items-center px-6 py-3 rounded-full font-medium text-sm tracking-wide bg-gradient-to-r ${currentSlideData.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <span className="text-lg mr-2">{currentSlideData.icon}</span>
                {currentSlideData.subtitle}
              </span>
            </motion.div>

            {/* Animated Title with Typewriter Effect */}
            <motion.div
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className={`block bg-gradient-to-r ${currentSlideData.color} bg-clip-text text-transparent`}>
                  <TypewriterText 
                    text={currentSlideData.title} 
                    speed={80} 
                    delay={2000}
                    className="block "
                  />
                </span>
              </h1>
            </motion.div>

            {/* Animated Description */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              {currentSlideData.description}
            </motion.p>

            {/* Animated Features Grid */}
            <motion.div
              key={`features-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {currentSlideData.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <CheckCircle className={`h-6 w-6 ${currentSlideData.color.includes('blue') ? 'text-blue-500' : currentSlideData.color.includes('purple') ? 'text-purple-500' : 'text-green-500'} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-base text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons with Hover Effects */}
            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.button 
                onClick={onStartProject}
                className={`group relative bg-gradient-to-r ${currentSlideData.color} hover:shadow-2xl text-white px-10 py-5 rounded-2xl transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3 shadow-lg overflow-hidden`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.a 
                href="/services"
                className="group bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400 px-10 py-5 rounded-2xl transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Services</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Enhanced Visual Side */}
          <div className="relative hidden lg:block">
            <motion.div
              key={`visual-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative w-full h-[600px]"
            >
              {/* Main Visual Container */}
              <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden group">
                {/* Image Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${currentSlideData.gradient} opacity-60`} />
                
                {/* Floating Service Icon */}
                <motion.div 
                  className="absolute top-8 right-8 z-20"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${currentSlideData.color} flex items-center justify-center shadow-2xl`}>
                    <span className="text-3xl">{currentSlideData.icon}</span>
                  </div>
                </motion.div>

                {/* Service Info Card */}
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.div 
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h3 className="font-bold text-gray-900 text-xl mb-2">{currentSlideData.title}</h3>
                    <p className="text-gray-600 mb-4">{currentSlideData.subtitle}</p>
                    
                    {/* Mini Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">{currentSlideData.stats.projects}+</div>
                        <div className="text-xs text-gray-500">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">{currentSlideData.stats.clients}+</div>
                        <div className="text-xs text-gray-500">Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">{currentSlideData.stats.satisfaction}%</div>
                        <div className="text-xs text-gray-500">Satisfaction</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <motion.div 
                className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${currentSlideData.color} rounded-full opacity-20 blur-2xl`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className={`absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br ${currentSlideData.color} rounded-full opacity-15 blur-2xl`}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Enhanced Carousel Controls */}
        <motion.div 
          className="flex items-center justify-center space-x-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            className="p-4 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-primary-600 transition-colors duration-300" />
          </motion.button>

          {/* Play/Pause Button */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ${
              isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
            } text-white group`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" /> : <Play className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />}
          </motion.button>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            className="p-4 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-primary-600 transition-colors duration-300" />
          </motion.button>
        </motion.div>

        {/* Enhanced Slide Indicators */}
        <motion.div 
          className="flex justify-center space-x-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {carouselData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? `bg-gradient-to-r ${currentSlideData.color} shadow-lg scale-125` 
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* AdsRole-Style Animated Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Let&apos;s Get Started to Boost Your Business Online Presence!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto"
            >
              We have assisted over <span className="font-bold text-primary-600">100k+ Businesses/Brands & Counting</span> in the last 7 Years...
            </motion.p>
          </div>

          {/* Animated Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter
              end={parseInt(stats?.projectsCompleted || '0')}
              suffix="+"
              icon={TrendingUp}
              label="Projects Completed"
              color="text-primary-600"
            />
            <AnimatedCounter
              end={parseInt(stats?.happyClients || '0')}
              suffix="+"
              icon={Users}
              label="Happy Clients"
              color="text-accent-600"
            />
            <AnimatedCounter
              end={parseInt(stats?.yearsExperience || '0')}
              suffix="+"
              icon={Award}
              label="Years Experience"
              color="text-green-600"
            />
            <AnimatedCounter
              end={parseInt(stats?.clientSatisfaction || '0')}
              suffix="%"
              icon={Star}
              label="Client Satisfaction"
              color="text-purple-600"
            />
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="w-8 h-12 border-2 border-primary-400 rounded-full flex justify-center bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
          <motion.div 
            className="w-1 h-4 bg-primary-500 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
