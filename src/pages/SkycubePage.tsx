
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Satellite, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkycubePage = () => {
  const features = [
    "STEM-Driven Design: Built in collaboration with universities to train students in satellite engineering.",
    "Earth Observation Payloads: Includes sensors and cameras for imaging, weather tracking, and remote sensing applications.",
    "Open Payload Architecture: Allows plug-and-play integration of third-party experiments or research instruments.",
    "Global Communication Capability: Supports amateur radio bands and telemetry downlink for ground stations."
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
            title="Skycube"
            subtitle="A CubeSat for Earth and Beyond – Empowering Students through Space Access"
            centered={true}
          />

          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <Satellite className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Educational CubeSat Platform</CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Skycube is a 1U–3U CubeSat platform developed through strategic academic partnerships. It serves as 
                a hands-on educational tool and a fully operational satellite platform, enabling real-world missions in 
                Earth observation, scientific experimentation, and amateur communication.
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
                  Skycube is more than a satellite; it's a gateway for academic institutions to actively participate in 
                  space missions, develop curriculum-aligned space research, and inspire the next generation of 
                  aerospace engineers.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              Get in Touch About Skycube
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SkycubePage;
