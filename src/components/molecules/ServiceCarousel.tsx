'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Button from '../atoms/Button';
import Tag from '../atoms/Tag';

interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  technologies: string[];
  imageUrl?: string;
  slug: string;
}

interface ServiceCarouselProps {
  projects: Project[];
  title?: string;
  className?: string;
}

const ServiceCarousel = ({ 
  projects, 
  title = "Recent Projects", 
  className = '' 
}: ServiceCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className={`relative ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-base text-gray-600">See how we&apos;ve solved real challenges</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentIndex}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full"
            >
              <div className="bg-white">
                <div className="grid lg:grid-cols-2 min-h-[400px]">
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-gray-100">
                    {projects[currentIndex].imageUrl ? (
                      <img
                        src={projects[currentIndex].imageUrl}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="text-center text-gray-500">
                          <div className="text-6xl mb-4">🚀</div>
                          <p className="text-lg font-medium">Project Screenshot</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay with technologies */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {projects[currentIndex].technologies.slice(0, 3).map((tech, index) => (
                        <Tag key={index} variant="primary" size="sm">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {projects[currentIndex].title}
                    </h4>
                    
                    <p className="text-base text-gray-600 mb-4 leading-relaxed">
                      {projects[currentIndex].description}
                    </p>

                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Challenge Solved:</h5>
                      <p className="text-sm text-gray-600 italic">
                        &ldquo;{projects[currentIndex].challenge}&rdquo;
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentIndex].technologies.map((tech, index) => (
                        <Tag key={index} variant="gray" size="sm">
                          {tech}
                        </Tag>
                      ))}
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      href={`/resources/${projects[currentIndex].slug}`}
                      className="w-full sm:w-auto"
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-primary-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-primary-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
