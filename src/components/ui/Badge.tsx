import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'orange';
  variant?: 'solid' | 'soft';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  color = 'gray', 
  variant = 'solid', 
  size = 'md',
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full space-x-1';
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm'
  };

  const colorClasses = {
    solid: {
      gray: 'bg-gray-600 text-white',
      red: 'bg-red-600 text-white',
      yellow: 'bg-yellow-600 text-white',
      green: 'bg-green-600 text-white',
      blue: 'bg-blue-600 text-white',
      indigo: 'bg-indigo-600 text-white',
      purple: 'bg-purple-600 text-white',
      pink: 'bg-pink-600 text-white',
      orange: 'bg-orange-600 text-white'
    },
    soft: {
      gray: 'bg-gray-100 text-gray-800',
      red: 'bg-red-100 text-red-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      green: 'bg-green-100 text-green-800',
      blue: 'bg-blue-100 text-blue-800',
      indigo: 'bg-indigo-100 text-indigo-800',
      purple: 'bg-purple-100 text-purple-800',
      pink: 'bg-pink-100 text-pink-800',
      orange: 'bg-orange-100 text-orange-800'
    }
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[variant][color]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;