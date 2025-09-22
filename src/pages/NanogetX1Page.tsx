
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Rocket, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NanogetX1Page = () => {
  const features = [
    "Green Propulsion: Utilizes non-toxic, storable propellants for safe integration and handling.",
    "Precision Control: Enables fine attitude adjustments and orbital maneuvers critical for mission success.",
    "Modular Form Factor: Designed for easy integration into existing CubeSat architectures.",
    "Academic & Commercial Applications: Suitable for LEO missions involving Earth observation, technology demonstrations, and satellite formation flying."
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-20">
          <div className="mb-8">
            <Button to="/aerospace" variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Aerospace Division
            </Button>
          </div>
          
          <SectionHeading
            title="Nanoget X1"
            subtitle="Revolutionizing Micro-Propulsion for the NewSpace Era"
            centered={true}
          />

          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Next-Generation Propulsion System</CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Nanoget X1 is a next-generation miniaturized propulsion system developed specifically for 
                nanosatellites (CubeSats and PocketQubes). Built with cutting-edge green propellants, the system 
                delivers high-precision thrust within a compact, modular design, making it ideal for space-constrained 
                satellite platforms.
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Key Features:</h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Impact:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Nanoget X1 addresses the growing demand for cost-effective, efficient propulsion in small satellite 
                  missions, empowering educational institutions and startups to access space with ease and reliability.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              Get in Touch About Nanoget X1
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default NanogetX1Page;
