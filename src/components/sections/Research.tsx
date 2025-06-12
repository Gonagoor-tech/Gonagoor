
import React, { useEffect } from 'react';
import { Brain, Watch, Zap, Code, Globe, Activity, Monitor, Lightbulb } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ResearchCard from '@/components/ui/ResearchCard';

const researchProjects = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Sudarshana - Machine Learning",
    description: "Model development on numerous applications, using language principles from Bharat (Indian) languages.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: <Watch className="w-6 h-6" />,
    title: "HastaMudrika - Smartwatch",
    description: "Indigenous smartwatch and motherboard designs, for research and development as well as productisation.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Vimana - The JetEngine",
    description: "Research and Design of a custom JetEngine and detailed testing to work on multiple opportunities to help jets.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Vishwakarma - Processor Design",
    description: "Design of a custom processor based on the Risc-V architecture with floating point and vector operation support.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Aakasha Mitra - Drones",
    description: "Development of indigenous drones and custom cube sat component with an app store for users to create applications.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Vidyu Vaahan - The EV",
    description: "A hybrid EV capable of operating in multiple environments and multiple battery types.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-500/20 to-green-500/20"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Precision Sensor Design",
    description: "Design of precision sensors for usage in medical and multiple fields.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Drusti Shrusti - Display Design",
    description: "Design of a low eye-impact display for usage over sustained periods without impact using research on color schemes.",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500/20 to-pink-500/20"
  }
];

const Research: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-trigger');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="research" className="py-20 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white to-cyan-50/60"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg rotate-12 blur-xl animate-bounce-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Ongoing Research Work" 
          subtitle="Being an R&D organization at the core, we work on the fundamentals of technologies enabling the creation of technology which are a blend of tradition and modern technology (Sanathana + Sanoothana)"
          className="scroll-trigger"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {researchProjects.map((project, index) => (
            <div key={index} className="scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
              <ResearchCard 
                title={project.title}
                description={project.description}
                icon={project.icon}
                image={project.image}
                color={project.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
