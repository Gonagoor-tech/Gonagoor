import React, { useEffect } from 'react';
import { Code, Brain, Lightbulb, Settings, GraduationCap, Building, ArrowRight, Sparkles, Star } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { Button } from '@/components/ui/Button';

const services = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation & R&D",
    description: "Research based products in multiple domains such as Enterprise Software, Space, Machine Learning, Aviation, Electronics and other core areas.",
    color: "from-blue-500/80 to-purple-500/80"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Software Product Development",
    description: "Develop your idea to reality with high quality architecture and enterprise grade quality, backed by learnings from industry acclaimed published works.",
    color: "from-green-500/80 to-teal-500/80"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Startup Consulting",
    description: "We work with startups at all stages of their lifecycle, assisting with development, growth as well as marketing strategies.",
    color: "from-orange-500/80 to-red-500/80"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Process Management",
    description: "Fix company workflows to enable high efficiency. We help organizations smoothly manage workflows and align organizational and individual aspirations.",
    color: "from-cyan-500/80 to-blue-500/80"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "SKILL Training",
    description: "Enhance workplace skill with industry recognized tailormade upskilling programs with industry experts with authorized works on open source technologies.",
    color: "from-purple-500/80 to-pink-500/80"
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Academic Relations",
    description: "We work with colleges and schools alike on both innovation as well as training management to achieve excellence.",
    color: "from-emerald-500/80 to-green-500/80"
  }
];

const ServicesPage = () => {
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technology Solutions</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Our Services
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            We provide a wide range of technology solutions tailored to your needs, blending innovation with traditional wisdom to create transformative experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services">
              <Button size="lg" className="group">
                Explore Services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">What We Offer</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive Technology Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From cutting-edge research to practical implementations, we deliver excellence across all domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  color={service.color} // Pass the color prop
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 relative bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-4">
              <Settings className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our approach combines innovative thinking with structured processes to deliver solutions that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discover & Define",
                description: "We collaborate closely with you to understand your challenges and goals."
              },
              {
                step: "2",
                title: "Design & Plan",
                description: "Our experts architect solutions that align with your specific requirements."
              },
              {
                step: "3",
                title: "Develop & Test",
                description: "We build and rigorously test to ensure quality and reliability."
              },
              {
                step: "4",
                title: "Deploy & Support",
                description: "We implement solutions and provide ongoing support to ensure continued success."
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-lg mb-3 text-center group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;