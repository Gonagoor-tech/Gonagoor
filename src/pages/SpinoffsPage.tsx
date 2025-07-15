import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { ExternalLink, Rocket, Brain, Shield, ArrowRight, Lightbulb, Zap, Globe, TrendingUp, HeartPulse, Bike } from 'lucide-react'; // Added more Lucide icons for flexibility
import { Button } from '../components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading'; // Assuming SectionHeading is imported and styled correctly

const SpinoffsPage: React.FC = () => {
  const companies = [
    {
      name: 'Sudarshana',
      tagline: 'Revolutionary Sound-Based AI Platform',
      description: 'Leading the major revolutions of the current era with advanced AI technologies. Sudarshana pioneers the most sophisticated sound-based machine learning systems, combining ancient Sanskrit sound science with cutting-edge AI for unparalleled processing speeds and real-time insights.',
      website: 'https://sudarshana.ai/',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&auto=format&q=80', // High-res, professional image
      highlights: [
        '100K+ Times Faster Processing',
        '<1ns Latency Real-time Processing',
        'Quantum-level Audio Understanding',
        'Industry-first Algorithms'
      ],
      icon: Brain,
      color: 'from-purple-600 to-blue-600', // Stronger, vibrant gradient
      bgColorClass: 'bg-gradient-to-br from-purple-500/10 to-blue-500/10' // Background for the section
    },
    {
      name: 'Vayuvya Defence',
      tagline: 'Empowering India\'s Defence with Advanced Technology',
      description: 'Made in India, Built for the Future. Vayuvya Defence specializes in designing and manufacturing cutting-edge, 100% indigenous solutions across aerospace, software, and artificial intelligence, dedicated to strengthening India\'s defence sector with unmatched reliability.',
      website: 'https://vayuvya.com/',
      image: '/Images/vayuvya.jpeg', // High-res, relevant image
      highlights: [
        '100% Indigenous Technology',
        'TRJ-M1 Micro Jet Engine (~4KN Thrust)',
        'Multi-Domain Solutions',
        'Defence-Grade Reliability'
      ],
      icon: Shield,
      color: 'from-green-600 to-teal-600',
      bgColorClass: 'bg-gradient-to-br from-green-500/10 to-teal-500/10'
    },
    {
      name: 'GO VV',
      tagline: 'Pioneering the Next-Gen Tech Ecosystem', // More descriptive tagline
      description: 'An exciting new venture currently in stealth development. GO VV is poised to introduce groundbreaking innovations that will fundamentally reshape the technology landscape, focusing on sustainable and integrated solutions for global challenges. Stay tuned for a revolution.',
      website: null, // Keep null for "Coming Soon"
      image: '/Images/GOVV.png', // Abstract, futuristic image
      highlights: [
        'Revolutionary Core Concept',
        'Next-Gen Integrated Solutions',
        'Sustainable Technology Focus',
        'Anticipated Global Impact'
      ],
      icon: Bike, // Rocket icon is perfect here
      color: 'from-orange-600 to-red-600',
      bgColorClass: 'bg-gradient-to-br from-orange-500/10 to-red-500/10'
    },
    {
      name: 'Thoyam',
      tagline: 'Innovating Healthcare Through Accessible Technology',
      description: 'Thoyam is dedicated to transforming healthcare by developing patient-centric technological solutions. We focus on creating accessible, affordable, and advanced tools that improve diagnostics, treatment, and overall well-being for communities worldwide.',
      website: null, // Set to a real website if available, otherwise keep null for "Coming Soon"
      image: '/Images/Thoyam.png', // Example healthcare image
      highlights: [
        'AI-Powered Diagnostics',
        'Telemedicine Integration',
        'Affordable Health Solutions',
        'Community Health Focus'
      ],
      icon: HeartPulse, // A great icon for healthcare
      color: 'from-emerald-500 to-sky-500', // A fresh, clean healthcare-themed gradient
      bgColorClass: 'bg-gradient-to-br from-emerald-400/10 to-sky-400/10'
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          {/* Animated blobs for visual interest */}
          <div className="absolute top-10 left-20 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-500"></div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <SectionHeading
              title={<>Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Spinoffs</span></>} // Enhanced title
              subtitle="Where Innovation Takes Flight" // More engaging subtitle
              centered={true}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
              Explore the ecosystem of groundbreaking companies born from our core research and development. 
              Each entity pushes the boundaries of technology to create impactful solutions for a better future.
            </p>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background"> {/* Base background */}
          <div className="max-w-7xl mx-auto space-y-24"> {/* Increased space between companies */}
            {companies.map((company, index) => {
              const IconComponent = company.icon;
              const isEven = index % 2 === 0; // Determine if index is even for layout reversal

              return (
                <div
                  key={company.name}
                  className={`relative p-8 rounded-3xl shadow-xl border border-border/50
                  ${company.bgColorClass || 'bg-background'}
                  group transition-all duration-500 ease-in-out transform hover:scale-[1.005] hover:shadow-2xl`}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div
                    className={`relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center
                      ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                  >
                    {/* Content */}
                    <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${company.color} text-white shadow-lg`}>
                          <IconComponent size={32} />
                        </div>
                        <div>
                          <h2 className="text-4xl font-extrabold text-foreground leading-tight">{company.name}</h2>
                          <p className="text-xl text-muted-foreground mt-1">{company.tagline}</p>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                        {company.description}
                      </p>

                      <div className="mt-8 space-y-4">
                        <h3 className="text-xl font-bold text-foreground">Key Highlights</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {company.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-muted-foreground">
                              <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${company.color} flex-shrink-0`} />
                              <span className="font-medium text-sm lg:text-base">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-10">
                        {company.website ? (
                          <Button
                            size="lg"
                            onClick={() => window.open(company.website, '_blank')}
                            className={`group bg-gradient-to-r ${company.color} hover:shadow-xl text-white`}
                          >
                            Visit Website
                            <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        ) : (
                          <Button
                            size="lg"
                            disabled
                            className="opacity-60 bg-gradient-to-r from-gray-400 to-gray-500 text-white" // Disabled button style
                          >
                            Coming Soon
                            <ArrowRight size={16} className="ml-2" />
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`${isEven ? '' : 'lg:col-start-1'} relative`}>
                      <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.01]">
                        <img
                          src={company.image} // This will now show your original image without tint
                          alt={`${company.name} technology`}
                          className="w-full h-80 md:h-96 object-cover object-center"
                        />
                        {/* REMOVED: The line below was causing the tint.
                        <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                        */}
                        
                        {/* Icon on image, slightly moved for better visibility */}
                        <div className="absolute top-6 right-6 p-4 rounded-xl bg-white/30 backdrop-blur-sm text-foreground shadow-lg">
                           <IconComponent size={36} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ready to Collaborate on Future Innovations?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We are always seeking visionary partners to join us in shaping the next generation of technology. 
              Reach out to explore how we can build the future together.
            </p>
            <Button size="lg" className="group px-8 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300">
              Get in Touch
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SpinoffsPage;