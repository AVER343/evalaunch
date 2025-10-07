'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  href,
  disabled = false,
  type = 'button'
}: ButtonProps) => {
  const getVariantClasses = () => {
    const variants = {
      primary: 'bg-primary-600 hover:bg-primary-800 text-white shadow-md hover:shadow-lg focus:ring-primary-500',
      secondary: 'bg-accent-600 hover:bg-accent-800 text-white shadow-md hover:shadow-lg focus:ring-accent-500',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
      ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
    };
    return variants[variant];
  };

  const getSizeClasses = () => {
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };
    return sizes[size];
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const buttonContent = (
    <motion.button
      whileHover={!disabled ? { y: -1 } : {}}
      whileTap={!disabled ? { y: 0 } : {}}
      className={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ y: -1 }}
        whileTap={{ y: 0 }}
        href={href}
        className={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${disabledClasses} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return buttonContent;
};

export default Button;
