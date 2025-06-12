
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
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
    <div className={cn("mb-12", centered && "text-center", className)}>
      <div className="relative inline-block">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 relative z-10 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
          {title}
        </h2>
        <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full transform transition-transform duration-300 group-hover:scale-x-110"></span>
        <img 
          src="/lovable-uploads/2eff5a32-1f8a-4322-9f1a-38ae1d2354b8.png" 
          alt="GonagoorTech Logo" 
          className="absolute -right-10 -top-5 w-8 h-8 opacity-70 animate-bounce-slow"
        />
      </div>
      {subtitle && (
        <p className={cn(
          "text-gray-600 max-w-3xl text-lg mt-6 leading-relaxed", 
          centered && "mx-auto", 
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
