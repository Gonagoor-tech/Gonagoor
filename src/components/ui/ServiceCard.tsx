import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  color: string; // New prop for background gradient
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
  color,
}) => {
  return (
    <div
      className={cn(
        "relative p-8 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-t-2 border-l-2 border-white/20",
        `bg-gradient-to-br ${color}`, // Use the color prop for the gradient
        className
      )}
    >
      <div className="relative z-10">
        {icon && (
          <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-white/30 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
          </div>
        )}
        <h3 className="text-2xl font-bold mb-3 text-white leading-tight">{title}</h3>
        <p className="text-white/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;