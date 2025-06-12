
import React, { useEffect } from 'react';
import { Code, Brain, Lightbulb, Settings, GraduationCap, Building } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation & R&D",
    description: "Research based products in multiple domains such as Enterprise Software, Space, Machine Learning, Aviation, Electronics and other core areas.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Software Product Development",
    description: "Develop your idea to reality with high quality architecture and enterprise grade quality, backed by learnings from industry acclaimed published works.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Startup Consulting",
    description: "We work with startups at all stages of their lifecycle, assisting with development, growth as well as marketing strategies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Process Management",
    description: "Fix company workflows to enable high efficiency. We help organizations smoothly manage workflows and align organizational and individual aspirations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "SKILL Training",
    description: "Enhance workplace skill with industry recognized tailormade upskilling programs with industry experts with authorized works on open source technologies.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Academic Relations",
    description: "We work with colleges and schools alike on both innovation as well as training management to achieve excellence.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Services: React.FC = () => {
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
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Enhanced background with tech-themed visual */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/60"></div>
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>
      
      {/* Animated tech elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-lg rotate-45 animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Our Services" 
          subtitle="We provide a wide range of technology solutions tailored to your needs"
          className="scroll-trigger"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
