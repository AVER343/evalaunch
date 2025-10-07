'use client';

import { motion } from 'framer-motion';

interface TagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Tag = ({ 
  children, 
  variant = 'gray', 
  size = 'md', 
  className = '', 
  onClick 
}: TagProps) => {
  const getVariantClasses = () => {
    const variants = {
      primary: 'bg-primary-100 text-primary-800 border-primary-200',
      secondary: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      accent: 'bg-blue-100 text-blue-800 border-blue-200',
      gray: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return variants[variant];
  };

  const getSizeClasses = () => {
    const sizes = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-2 text-base'
    };
    return sizes[size];
  };

  const baseClasses = 'inline-flex items-center rounded-full border font-medium transition-all duration-200';
  const hoverClasses = onClick ? 'hover:shadow-md cursor-pointer' : '';

  return (
    <motion.span
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      className={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );
};

export default Tag;
