import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { ExternalLink, Rocket, Brain, Shield, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

const SpinoffsPage: React.FC = () => {
  const companies = [
    {
      name: 'Sudarshana',
      tagline: 'Revolutionary Sound-Based AI Platform',
      description: 'Leading the major revolutions of the current era with advanced AI technologies. Sudarshana pioneers the most sophisticated sound-based machine learning systems, combining ancient Sanskrit sound science with cutting-edge AI.',
      website: 'https://sudarshana.ai/',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      highlights: [
        '100K+ Times Faster Processing',
        '<1ns Latency Real-time Processing',
        'Quantum-level Audio Understanding',
        'Industry-first Algorithms'
      ],
      icon: Brain,
      color: 'from-purple-600 to-blue-600'
    },
    {
      name: 'Vayuvya Defence',
      tagline: 'Empowering India\'s Defence with Advanced Technology',
      description: 'Made in India, Built for the Future. Vayuvya Defence specializes in designing and manufacturing cutting-edge solutions across aerospace, software, and artificial intelligence for India\'s defence sector.',
      website: 'https://vayuvya.com/',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop',
      highlights: [
        '100% Indigenous Technology',
        'TRJ-M1 Micro Jet Engine (~4KN Thrust)',
        'Multi-Domain Solutions',
        'Defence-Grade Reliability'
      ],
      icon: Shield,
      color: 'from-green-600 to-teal-600'
    },
    {
      name: 'GO VV',
      tagline: 'Coming Soon',
      description: 'An exciting new venture in development. Stay tuned for groundbreaking innovations that will reshape the technology landscape.',
      website: null,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
      highlights: [
        'Revolutionary Concept',
        'Cutting-edge Innovation',
        'Next-gen Technology',
        'Coming Soon'
      ],
      icon: Rocket,
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Our Spinoffs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our family of innovative companies, each pioneering breakthrough technologies 
              in their respective domains to shape the future of technology and defence.
            </p>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12 lg:gap-16">
              {companies.map((company, index) => {
                const IconComponent = company.icon;
                return (
                  <div 
                    key={company.name}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${company.color} text-white`}>
                          <IconComponent size={32} />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">{company.name}</h2>
                          <p className="text-lg text-muted-foreground">{company.tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {company.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground">Key Highlights</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {company.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-muted-foreground">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${company.color}`} />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {company.website ? (
                        <Button
                          size="lg"
                          onClick={() => window.open(company.website, '_blank')}
                          className="group"
                        >
                          Visit Website
                          <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      ) : (
                        <Button size="lg" disabled className="opacity-60">
                          Coming Soon
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      )}
                    </div>

                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={company.image}
                          alt={`${company.name} technology`}
                          className="w-full h-80 lg:h-96 object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-20`} />
                        <div className="absolute bottom-6 left-6">
                          <div className={`p-4 rounded-xl bg-gradient-to-br ${company.color} text-white backdrop-blur-sm`}>
                            <IconComponent size={40} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Interested in Partnerships?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with us to explore collaboration opportunities with our innovative spinoff companies.
            </p>
            <Button size="lg" className="group">
              Get in Touch
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SpinoffsPage;