
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-48 pb-44 md:pt-56 md:pb-52 relative overflow-hidden">
      {/* Sketch-type background image */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('/sketch-background.svg')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/15 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-l from-accent/15 to-transparent blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        
        {/* Futuristic floating elements - made slightly larger */}
        <div className="absolute top-20 left-[15%] w-20 h-20 border border-primary/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 right-[10%] w-24 h-24 border border-accent/20 rounded-lg rotate-45 animate-bounce-slow" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/2 right-[20%] w-16 h-16 border border-primary/20 rounded-full animate-bounce-slow" style={{ animationDelay: "2.5s" }}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02] -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge - made slightly larger */}
          <div 
            className="inline-block mb-10 px-5 py-2 bg-primary/10 text-primary rounded-full text-base font-medium animate-fade-in backdrop-blur-sm border border-primary/20"
          >
            Technologies for Global Good
          </div>
          
          {/* Main heading with gradient effect - made larger */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-10 tracking-tighter animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <span className="text-foreground">Gonagoor</span>
            <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">Tech</span>
            <span className="text-foreground"> Solutions</span>
          </h1>
          
          {/* Enhanced subheading - made larger and improved spacing */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 max-w-3xl mx-auto mb-14 leading-relaxed animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Research based products across multiple domains including Enterprise Software, 
            Space Technology, Machine Learning, Aviation, and Electronics.
          </p>
          
          {/* Buttons with glassmorphism effect */}
          <div 
            className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <Button 
              to="/services" 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm py-6 px-8 text-lg"
            >
              <span className="relative z-10 flex items-center">
                Our Services
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
            </Button>
            
            <Button 
              to="/vision" 
              size="lg" 
              variant="outline"
              className="group relative overflow-hidden border-primary/20 hover:border-primary/30 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 py-6 px-8 text-lg"
            >
              <span className="relative z-10">About Our Vision</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes - made larger */}
      <div className="absolute top-1/4 right-[10%] w-20 h-20 rounded-full border border-primary/20 animate-bounce-slow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/3 left-[15%] w-12 h-12 rounded-sm border border-accent/20 rotate-45 animate-bounce-slow" style={{ animationDelay: "2.5s" }}></div>
    </section>
  );
};

export default Hero;
