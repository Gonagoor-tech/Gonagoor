
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Code, Brain, Lightbulb, Award, Globe, Shield, Rocket, Zap } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import { Link } from 'react-router-dom';
import { usePopper } from 'react-popper';

const services = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation & R&D",
    description: "Research based products across multiple domains including Enterprise Software, Space Technology, Machine Learning, Aviation, and Electronics."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Software Product Development",
    description: "Develop your idea to reality with high quality architecture and enterprise grade quality solutions."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Startup Consulting",
    description: "We work with startups at all stages of their lifecycle, assisting with development, growth and marketing."
  },
];

const innovations = [
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "NanoJet X1",
    description: "A compact jet propulsion unit optimized for lightweight aerial systems, designed for micro-drones and research vehicles."
  },
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Sudarshan.AI",
    description: "Groundbreaking LLM-based multimodal system that can convert sound into video - a true step forward in generative AI."
  },
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: "OmniApps Platform",
    description: "Multi-industry app framework for quick deployment of mobile and web solutions for healthcare, education, and e-commerce."
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "NeuronX Processor",
    description: "Specialized AI chip for real-time inference on edge devices - focused on smart mobility, drones, and consumer AI devices."
  },
];

const Index = () => {
  const [showDivisionsDropdown, setShowDivisionsDropdown] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      { name: 'offset', options: { offset: [0, 10] } },
    ],
  });

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

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (popperElement && !popperElement.contains(event.target) && 
          referenceElement && !referenceElement.contains(event.target)) {
        setShowDivisionsDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popperElement, referenceElement]);

  // Divisions data
  const divisions = [
    {
      title: "AI Division",
      description: "Cutting-edge AI solutions and research",
      icon: <Brain className="w-5 h-5" />,
      path: "/ai"
    },
    {
      title: "Software Division",
      description: "Enterprise software development and consulting",
      icon: <Code className="w-5 h-5" />,
      path: "/software"
    },
    {
      title: "Aerospace Division",
      description: "Advanced aerospace systems and technology",
      icon: <Rocket className="w-5 h-5" />,
      path: "/aerospace"
    }
  ];

  return (
    <PageLayout>
      <Hero />

      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What We Offer" 
            subtitle="We provide innovative technology solutions that make a difference"
            className="scroll-trigger"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center scroll-trigger">
            <Button to="/services" variant="outline" size="lg">
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Recent Innovations" 
            subtitle="Breakthrough technologies from our divisions"
            className="scroll-trigger"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {innovations.map((item, index) => (
              <div 
                key={index} 
                className="scroll-trigger bg-white p-6 rounded-lg shadow-sm border border-primary/10 text-center hover:shadow-md transition-shadow hover:translate-y-[-4px] duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center scroll-trigger relative">
            <button
              ref={setReferenceElement}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-background text-foreground border border-input hover:bg-accent hover:text-accent-foreground hover:border-accent/50 transition-all shadow hover:shadow-md text-sm font-medium"
              onClick={() => setShowDivisionsDropdown(!showDivisionsDropdown)}
            >
              Explore Our Divisions
              <ChevronDown 
                className={`w-4 h-4 ml-1 transition-transform ${showDivisionsDropdown ? 'transform rotate-180' : ''}`} 
              />
            </button>
            
            {showDivisionsDropdown && (
              <div
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                className="bg-white rounded-md shadow-lg border border-border z-50 min-w-[280px] animate-in fade-in-0 zoom-in-95 duration-100"
              >
                <div className="py-2">
                  {divisions.map((division, index) => (
                    <Link
                      key={index}
                      to={division.path}
                      className="flex items-start px-4 py-3 hover:bg-muted transition-colors"
                      onClick={() => setShowDivisionsDropdown(false)}
                    >
                      <div className="mr-3 p-2 bg-primary/10 rounded-full">
                        {division.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-medium text-foreground">{division.title}</h4>
                        <p className="text-sm text-muted-foreground">{division.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Technology Focus" 
            subtitle="Cutting-edge technologies we work with"
            className="scroll-trigger"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="scroll-trigger flex flex-col space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI & Machine Learning</h3>
                  <p className="text-muted-foreground">Developing intelligent systems that can learn, adapt and provide valuable insights for business decisions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-lg">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cloud-Native Applications</h3>
                  <p className="text-muted-foreground">Building scalable, resilient applications designed to leverage the full potential of cloud platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-lg">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise Software</h3>
                  <p className="text-muted-foreground">Custom enterprise solutions that streamline operations and boost productivity.</p>
                </div>
              </div>
            </div>
            
            <div className="scroll-trigger flex flex-col space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-lg">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Aerospace Technology</h3>
                  <p className="text-muted-foreground">Advanced systems and software for aviation, space exploration, and satellite technologies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
                  <p className="text-muted-foreground">Protecting digital assets with robust security solutions and best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/10 rounded-lg">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Research & Development</h3>
                  <p className="text-muted-foreground">Continuous innovation through dedicated R&D to stay ahead of technological trends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center scroll-trigger">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-poppins">
              Ready to Transform Your Ideas Into Reality?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with GonagoorTech to create innovative solutions that drive real impact.
              Let's build something amazing together.
            </p>
            <Button to="/contact" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
