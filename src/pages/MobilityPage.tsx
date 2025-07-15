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
    // Add features here if needed in the future
  ];

  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Modified grid: text takes 1 column, image takes 2 columns on large screens */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="space-y-8 lg:col-span-1"> {/* Text content occupies 1 column */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
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
                </div>
              </div>

              {/* Image content now spans 2 columns on large screens */}
              <div className="flex justify-center lg:col-span-2">
                <div className="relative">
                  <img
                    src="/Images/01.png"
                    alt="GO VV Electric Bicycle"
                    className="w-full h-auto object-contain" // w-full will make it fill the new wider column
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
        {/* Additional Specifications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
              <a href="/contact">
                <Button size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default MobilityPage;