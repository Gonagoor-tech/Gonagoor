import React from "react";
import { cn } from "@/lib/utils";

interface ResearchCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  color: string; // Add color prop for background gradient
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  description,
  icon,
  className,
  color,
}) => {
  return (
    <div
      className={cn(
        "relative rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] overflow-hidden",
        `bg-gradient-to-br ${color}`, // Use color prop for background gradient
        className
      )}
    >
      {/* Optional: Add a subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/5 rounded-xl"></div>

      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-primary-foreground"> {/* Icon color adjusted for better contrast */}
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ResearchCard;