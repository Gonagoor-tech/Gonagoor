import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Battery, Zap, Gauge, Clock, Shield, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';

const MobilityPage: React.FC = () => {
  const specifications = [
    { label: 'Battery', value: '36V, 9ah, Li-ion, In-built battery', icon: Battery },
    { label: 'Range', value: '35 - 40kms (with pedal assist)', icon: MapPin },
    { label: 'Motor', value: '36V, 250W, BLDC Hub Motor', icon: Zap },
    { label: 'Speed', value: '25km/hr', icon: Gauge },
    { label: 'Charging Time', value: '5 hours', icon: Clock },
    { label: 'Brakes', value: '3F ebrake levers, Dual disc brakes', icon: Shield },
  ];

  const features = [
    {
      title: 'Campus Travel',
      description: 'Perfect for students and faculty navigating large university campuses efficiently and sustainably.',
      icon: '🎓'
    },
    {
      title: 'Tech Parks',
      description: 'Ideal for professionals commuting within technology parks and corporate complexes.',
      icon: '💼'
    },
    {
      title: 'Retail Access',
      description: 'Convenient transportation for retail workers and customers in commercial areas.',
      icon: '🛍️'
    },
    {
      title: 'Eco-Friendly',
      description: 'Zero emissions transportation solution contributing to a cleaner environment.',
      icon: '🌱'
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    GO VV
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Electric Bicycle
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Ride Smart, Live Better
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Introducing the GO VV Campus Rider - an innovative electric bicycle designed to revolutionize 
                  urban mobility. Our mission is to provide affordable, sustainable transportation solutions 
                  for campuses, tech parks, and retail environments.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="group">
                    Learn More
                    <Zap size={16} className="ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="/lovable-uploads/c48d8911-e18d-4191-8a9b-d2a8c0c9aced.png"
                    alt="GO VV Electric Bicycle"
                    className="w-full max-w-lg h-auto object-contain"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Rider Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Campus Rider</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Engineered for comfort, efficiency, and reliability in urban environments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specifications.map((spec, index) => {
                const IconComponent = spec.icon;
                return (
                  <div 
                    key={spec.label}
                    className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{spec.label}</h3>
                        <p className="text-muted-foreground">{spec.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Perfect for Every Journey</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Designed to meet the diverse transportation needs of modern urban environments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Specifications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Technical Specifications</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-4">Power & Control</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Charger:</span>
                    <span className="text-foreground">2 amp, 42V max</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Throttle:</span>
                    <span className="text-foreground">Twist type with Key</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Controller:</span>
                    <span className="text-foreground">BLDC 36V/250W</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-4">Frame & Wheels</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Frame:</span>
                    <span className="text-foreground">Steel Step Through</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Wheels:</span>
                    <span className="text-foreground">27.5" Nylon Tyres</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Suspension:</span>
                    <span className="text-foreground">Front Suspension</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-4">Safety & Features</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">PAS:</span>
                    <span className="text-foreground">Dust proof sensor</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Light/Horn:</span>
                    <span className="text-foreground">LED with horn</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Switch:</span>
                    <span className="text-foreground">Push button</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Commute?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the electric revolution with GO VV Campus Rider - affordable, sustainable, and smart.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group">
                Get Quote
                <Zap size={16} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default MobilityPage;