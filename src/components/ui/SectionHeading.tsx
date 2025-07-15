import React from 'react'; // Ensure React is imported for React.ReactNode
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
      "max-w-4xl mx-auto", // Combined max-w-4xl and mx-auto for cleaner centering
      className
    )}>
      <div className="relative inline-block group"> {/* Added 'group' class for hover effect on underline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight mb-4"> {/* Adjusted text sizes, leading, and bottom margin */}
              {title}
            </h1>
        {/* Underline for the title, now part of a group hover effect */}
        <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full transform scale-x-75 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span> {/* Initial scale-x-75, then expands on hover */}
      </div>
      {subtitle && (
        <p className={cn(
          "text-lg mt-6 leading-relaxed text-muted-foreground", // Using text-muted-foreground for better theme integration
          "max-w-3xl mx-auto", // Ensure subtitle is centered and has a max-width
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;