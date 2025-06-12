
import React from "react";
import { cn } from "@/lib/utils";

interface ResearchCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  description,
  icon,
  className,
  style,
}) => {
  return (
    <div 
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border-t-4 border-primary",
        className
      )}
      style={style}
    >
      {icon && (
        <div className="mb-4 text-primary">{icon}</div>
      )}
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ResearchCard;
