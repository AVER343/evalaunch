'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface ServicesLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const ServicesLayout = ({ 
  children, 
  title, 
  description, 
  className = '' 
}: ServicesLayoutProps) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`min-h-screen bg-white ${className}`}
    >
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            {description && (
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {children}
      </main>

      <Footer />
    </motion.div>
  );
};

export default ServicesLayout;
