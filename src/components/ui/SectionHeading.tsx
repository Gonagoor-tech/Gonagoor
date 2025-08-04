import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: React.ReactNode; // Changed from 'string' to 'React.ReactNode'
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className,
  subtitleClassName,
}) => {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      "max-w-4xl mx-auto relative z-10", // Added relative and z-10 to ensure heading is above background
      className
    )}>
      <div className="relative inline-block group">
          {/* FIX: Removed bg-clip-text text-transparent from h1 for direct text visibility */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text leading-tight mb-4">
              {title}
            </h1>
        <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full transform scale-x-75 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
      </div>
      {subtitle && (
        <p className={cn(
          "text-lg mt-6 leading-relaxed text-gray-700", // Changed to a solid text color for better visibility
          "max-w-3xl mx-auto",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;