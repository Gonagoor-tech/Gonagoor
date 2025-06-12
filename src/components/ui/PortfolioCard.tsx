
import React from "react";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  link,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        "group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full transform hover:-translate-y-2",
        className
      )}
      style={style}
    >
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/2eff5a32-1f8a-4322-9f1a-38ae1d2354b8.png" 
                alt="GonagoorTech Logo" 
                className="w-10 h-10 z-10"
              />
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-0 group-hover:rotate-90">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        {link && (
          <a
            href={link}
            className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
