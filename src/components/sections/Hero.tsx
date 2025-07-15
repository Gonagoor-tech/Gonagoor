import React from 'react';
import { ArrowRight, BarChart3, Brain, Code, Database, Globe, Layers, TrendingUp, Zap, Plane } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Hero: React.FC = () => {
  // Circular data visualization elements
  // Adjusted positions to be more relative and less rigid.
  // We'll also make them smaller and fewer visible on smaller screens.
  const dataElements = [
    { icon: BarChart3, delay: '0s', class: 'top-10 left-10 md:top-20 md:left-20' }, // Smaller and closer for mobile
    { icon: Plane, delay: '0.5s', class: 'top-20 right-10 md:top-32 md:right-32' },
    { icon: Database, delay: '1s', class: 'bottom-10 left-10 md:bottom-40 md:left-40' },
    { icon: Brain, delay: '1.5s', class: 'bottom-20 right-10 md:bottom-32 md:right-20' },
    // Only show a subset of elements on smaller screens to avoid clutter
    { icon: Globe, delay: '2s', class: 'hidden md:block top-40 left-1/2' },
    { icon: Layers, delay: '2.5s', class: 'hidden md:block bottom-20 left-1/3' },
    { icon: Zap, delay: '3s', class: 'hidden md:block top-1/2 right-20' },
    { icon: Code, delay: '3.5s', class: 'hidden md:block top-60 left-32' },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-white flex items-center py-16 md:py-0">
      {/* Animated circular elements grid */}
      <div className="absolute inset-0 overflow-hidden">
        {dataElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.class} animate-pulse opacity-60`}
            style={{
              animationDelay: element.delay,
              animationDuration: '4s'
            }}
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-primary/20 flex items-center justify-center">
                {/* Inner circle */}
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <element.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
              </div>
              {/* Connecting lines - hidden on small screens */}
              <div className="absolute top-1/2 left-full w-8 h-px bg-primary/10 hidden lg:block"></div>
            </div>
          </div>
        ))}

        {/* Grid pattern background */}
        {/* Adjusted opacity and potentially hide on very small screens if it's still too much */}
        <div className="absolute inset-0 opacity-5 hidden sm:block"> {/* Hide on extra small screens */}
          <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-8 h-full"> {/* Fewer columns on small screens */}
            {Array.from({ length: 72 }).map((_, i) => ( // Reduced number of elements for performance/simplicity
              <div key={i} className="border border-primary/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left"> {/* Center text on mobile */}
            <div className="space-y-4">
              <div
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in"
              >
                Technogies for Global Good
              </div>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-fade-in"
                style={{ animationDelay: "100ms" }}
              >
                Gonagoor Tech
                <br />
                <span className="text-primary">Solutions</span>
              </h1>

              <p
                className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in" // Center text block on mobile
                style={{ animationDelay: "200ms" }}
              >
                Research based products across multiple domains including Enterprise Software, Space Technology, Machine Learning, Aviation, and Electronics.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center lg:justify-start" // Center buttons on mobile
              style={{ animationDelay: "300ms" }}
            >
              <Button
                to="/services"
                size="lg"
                className="bg-black text-white hover:bg-black/90 px-8 py-3 rounded-none font-medium w-full sm:w-auto" // Full width on mobile, auto on sm+
              >
                Explore Services
              </Button>

              <Button
                to="/vision"
                size="lg"
                variant="ghost"
                className="text-black hover:bg-black/5 px-8 py-3 rounded-none font-medium w-full sm:w-auto" // Full width on mobile, auto on sm+
              >
                Our Vision
              </Button>
            </div>
          </div>

          {/* Right side - Data visualization grid */}
          {/* Hidden on medium and smaller screens, visible only on large screens */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-3 gap-6 p-8">
              {/* Top row */}
              <div className="aspect-square rounded-full border-2 border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-black"></div>
              </div>
              <div className="aspect-square rounded-full border-2 border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="aspect-square rounded-full border-2 border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <BarChart3 className="w-6 h-6 text-slate-600" />
              </div>

              {/* Middle row */}
              <div className="aspect-square rounded-full border-2 border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-4 h-4 bg-slate-300 transform rotate-45"></div>
              </div>
              <div className="aspect-square rounded-full border-2 border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <Globe className="w-6 h-6 text-slate-600" />
              </div>
              <div className="aspect-square rounded-full border-2 border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-2 gap-1 w-6 h-6">
                  <div className="bg-slate-300 rounded-sm"></div>
                  <div className="bg-slate-600 rounded-sm"></div>
                  <div className="bg-slate-400 rounded-sm"></div>
                  <div className="bg-slate-500 rounded-sm"></div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="aspect-square rounded-full border-2 border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="aspect-square rounded-full border-2 border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-slate-300"></div>
                  <div className="w-1 h-6 bg-slate-400"></div>
                  <div className="w-1 h-3 bg-slate-500"></div>
                  <div className="w-1 h-5 bg-slate-600"></div>
                </div>
              </div>
              <div className="aspect-square rounded-full border-2 border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <Database className="w-6 h-6 text-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;