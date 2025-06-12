
import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  image,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-white/20 backdrop-blur-sm",
        className
      )}
    >
      {/* Image header with gradient overlay */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay"></div>
          
          {/* Icon overlay */}
          {icon && (
            <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-lg text-primary shadow-md transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          )}
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-accent/60"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 bg-white/80 backdrop-blur-sm">
        {!image && icon && (
          <div className="mb-4 text-primary w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
