import React from 'react';
import { cn } from '@/lib/utils';
import { Linkedin, Mail } from 'lucide-react'; // Assuming you use Mail for email

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  socialLinks?: {
    linkedin?: string;
    email?: string;
  };
  imageSrc: string;
  // New props for conditional styling based on context
  isLeaderCard?: boolean;
  isAdvisoryCard?: boolean;
  // This prop was from original code, kept for compatibility if needed.
  // It determines if the card's content is 'visible' (e.g., for animations).
  // I've removed direct usage of 'visible' in TeamPage, but kept it here
  // in case you have other animation logic.
  visible?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  description,
  socialLinks,
  imageSrc,
  isLeaderCard = false,
  isAdvisoryCard = false,
  visible = true, // Default to true if not specified
}) => {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden shadow-lg border border-border/60 transition-all duration-300",
        "bg-card backdrop-blur-sm", // Apply card background and blur
        // Hover effect for all cards
        "group hover:shadow-xl hover:border-primary/50",
        // Conditional styling for Leader Cards
        isLeaderCard && "lg:col-span-1 p-6 sm:p-8 transform scale-100 hover:scale-[1.03] shadow-xl hover:shadow-2xl", // Make leader cards slightly larger/more prominent
        // Conditional styling for Advisory Cards (optional, could be subtle)
        isAdvisoryCard && "hover:shadow-lg", // Advisory might have a more subtle hover
        // Base padding, overridden by leader card if applicable
        !isLeaderCard && "p-4 sm:p-6",
        // General visibility control (if you plan to animate visibility)
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4' // Example for animate-fade-in
      )}
    >
      {/* Background Gradient / Overlay for leader/advisory cards */}
      {isLeaderCard && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      )}
      {isAdvisoryCard && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      )}

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Image */}
        <div className={cn(
          "relative w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-primary/20",
          isLeaderCard && "w-36 h-36 border-primary", // Larger border for leaders
          "transition-all duration-300 group-hover:scale-105"
        )}>
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Name and Role */}
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground leading-tight mb-1">
          {name}
        </h3>
        <p className={cn(
          "text-sm text-muted-foreground mb-3",
          isLeaderCard && "text-primary/80 font-medium" // Emphasize leader roles
        )}>
          {role}
        </p>

        {/* Description (slightly smaller for regular cards) */}
        <p className={cn(
          "text-sm text-muted-foreground leading-relaxed",
          isLeaderCard && "text-base", // Larger description for leaders
          "mb-4"
        )}>
          {description}
        </p>

        {/* Social Links */}
        {socialLinks && (
          <div className="flex gap-3 justify-center mt-auto pt-2"> {/* mt-auto pushes links to bottom if cards vary in height */}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin size={20} />
              </a>
            )}
            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={`Email ${name}`}
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;