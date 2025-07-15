import React, { useEffect } from 'react';
import { Brain, Watch, Zap, Code, Globe, Activity, Monitor, Lightbulb, ArrowRight, Microscope, Sparkles, Atom } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading'; // This component is not used in the provided code, but kept for context.
import ResearchCard from '@/components/ui/ResearchCard';
import { Button } from '@/components/ui/Button';


const researchProjects = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Sudarshana - Machine Learning",
    description: "Model development on numerous applications, using language principles from Bharat (Indian) languages.",
    
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: <Watch className="w-6 h-6" />,
    title: "HastaMudrika - Smartwatch",
    description: "Indigenous smartwatch and motherboard designs, for research and development as well as productisation.",
   
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Vimana - The JetEngine",
    description: "Research and Design of a custom JetEngine and detailed testing to work on multiple opportunities to help jets.",
    
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Vishwakarma - Processor Design",
    description: "Design of a custom processor based on the Risc-V architecture with floating point and vector operation support.",
    
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Aakasha Mitra - Drones",
    description: "Development of indigenous drones and custom cube sat component with an app store for users to create applications.",
   
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Vidyu Vaahan - The EV",
    description: "A hybrid EV capable of operating in multiple environments and multiple battery types.",
    
    color: "from-emerald-500/20 to-green-500/20"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Precision Sensor Design",
    description: "Design of precision sensors for usage in medical and multiple fields.",
    
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Drusti Shrusti - Display Design",
    description: "Design of a low eye-impact display for usage over sustained periods without impact using research on color schemes.",
    
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "JoyStick based Mobile operator",
    description: "Research to help seniors adapt easily to the digital world and help them understand complex interactions with simple movements using joysticks.",
    
    color: "from-rose-500/20 to-pink-500/20"
  }
];

const ResearchPage = () => {
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
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-background to-accent/10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-10 left-20 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Microscope className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Research & Innovation</span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
            Ongoing Research Work
          </h1>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Being an R&D organization at the core, we work on the fundamentals of technologies enabling the creation of technology which are a blend of tradition and modern technology (Sanathana + Sanoothana) enabling wonderful experiences to all in the system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/patents">
            <Button variant="outline" size="lg">
              Publications
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Research Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-4">
              <Atom className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Current Projects</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Revolutionary Research Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each project represents our commitment to innovation and the seamless integration of traditional wisdom with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchProjects.map((project, index) => (
              <div key={index} className="scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
                <ResearchCard
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                  color={project.color} // Pass the color prop
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Approach Section */}
      <section className="py-20 relative bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Methodology</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Research Approach</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              At GonagoorTech, our research initiatives are guided by a deep commitment to blending traditional knowledge with modern innovation. We draw inspiration from ancient wisdom while leveraging cutting-edge technology to create solutions that are both timeless and forward-thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Research Principles</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Integrating traditional wisdom with modern technology",
                  "Focusing on sustainability and ethical innovation",
                  "Creating technologies that enhance human well-being",
                  "Pursuing excellence through rigorous methodologies"
                ].map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Research Domains</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Artificial Intelligence & Machine Learning",
                  "Aerospace & Aviation Technologies",
                  "Electronics & Embedded Systems",
                  "Sustainable Energy Solutions"
                ].map((domain, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span className="text-muted-foreground">{domain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchPage;