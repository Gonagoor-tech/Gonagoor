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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide innovative technology solutions that make a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              to="/services" 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 border-slate-300 hover:bg-slate-100"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Innovations</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Breakthrough technologies from our divisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {innovations.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                
                {/* Decorative circle */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary/20 rounded-full"></div>
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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Focus</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Cutting-edge technologies we work with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-slate-600">Developing intelligent systems that can learn, adapt and provide valuable insights for business decisions.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Cloud-Native Applications</h3>
              <p className="text-slate-600">Building scalable, resilient applications designed to leverage the full potential of cloud platforms.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Enterprise Software</h3>
              <p className="text-slate-600">Custom enterprise solutions that streamline operations and boost productivity.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Aerospace Technology</h3>
              <p className="text-slate-600">Advanced systems and software for aviation, space exploration, and satellite technologies.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Cybersecurity</h3>
              <p className="text-slate-600">Protecting digital assets with robust security solutions and best practices.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Research & Development</h3>
              <p className="text-slate-600">Continuous innovation through dedicated R&D to stay ahead of technological trends.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Ideas Into Reality?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with GonagoorTech to create innovative solutions that drive real impact.
              Let's build something amazing together.
            </p>
            <Button 
              to="/contact" 
              size="lg"
              className="bg-white text-black hover:bg-slate-100 px-8 py-3 rounded-none font-medium"
            >
              GET STARTED TODAY
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;