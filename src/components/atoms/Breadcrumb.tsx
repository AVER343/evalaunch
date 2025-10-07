'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-1 text-sm ${className}`} aria-label="Breadcrumb">
      {/* Home link */}
      <Link 
        href="/" 
        className="flex items-center text-gray-500 hover:text-primary-600 transition-colors duration-200"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {/* Breadcrumb items */}
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {item.href && !item.isActive ? (
            <Link 
              href={item.href}
              className="text-gray-500 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span 
              className={`font-medium ${
                item.isActive 
                  ? 'text-gray-900' 
                  : 'text-gray-500'
              }`}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
