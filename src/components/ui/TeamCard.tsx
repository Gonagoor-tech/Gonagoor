
import React from "react";
import { cn } from "@/lib/utils";
import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "./card";
import { AspectRatio } from "./aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface TeamCardProps {
  name: string;
  role: string;
  bio?: string;
  description?: string;
  imageSrc?: string;
  className?: string;
  style?: React.CSSProperties;
  socialLinks?: {
    linkedin?: string;
    email?: string;
  };
  visible?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  description,
  imageSrc = "/placeholder.svg",
  className,
  style,
  socialLinks,
  visible = true,
}) => {
  if (!visible) return null;
  
  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();
  
  return (
    <Card 
      className={cn(
        "overflow-hidden h-full",
        "bg-white border border-gray-100 shadow-sm",
        "hover:shadow-md hover:border-primary/20 transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50">
        <AspectRatio ratio={1} className="w-full">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`${name} - ${role}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          ) : (
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage src={imageSrc} alt={name} />
              <AvatarFallback className="text-4xl bg-primary/5 text-primary/70 rounded-none">
                {initials}
              </AvatarFallback>
            </Avatar>
          )}
        </AspectRatio>
      </div>
      
      <CardContent className="p-4 text-center">
        <h3 className="font-semibold text-base mb-1 text-gray-900">{name}</h3>
        <p className="text-primary/90 text-xs font-medium mb-2">{role}</p>
        
        {description && (
          <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}
        
        {socialLinks && (
          <div className="flex justify-center space-x-3 mt-3 pt-2 border-t border-gray-100">
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                aria-label="LinkedIn" 
                className="text-gray-400 hover:text-primary transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>
            )}
            {socialLinks.email && (
              <a 
                href={`mailto:${socialLinks.email}`} 
                aria-label="Email" 
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={16} />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamCard;
