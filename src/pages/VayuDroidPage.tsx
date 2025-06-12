
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Send, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VayuDroidPage = () => {
  const features = [
    "High-Altitude Flight: Optimized for operations in diverse terrains and elevated atmospheric conditions.",
    "Payload Customization: Supports modular payload bays for cameras, sensors, environmental monitors, and experimental tech.",
    "AI-Based Navigation: Integrated with AI-driven guidance and stabilization algorithms for real-time decision-making.",
    "Use Cases: Agricultural surveys, environmental monitoring, defense reconnaissance, disaster response, and scientific research."
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
            title="VayuDroid"
            subtitle="Aerial Intelligence for Data-Driven Missions"
            centered={true}
          />

          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Autonomous Aerial Robotics Platform</CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                VayuDroid is an autonomous aerial robotics platform engineered for high-altitude data collection and 
                experimental payload delivery. Designed to operate in semi-remote and sensitive environments, 
                VayuDroid bridges the gap between UAV capabilities and scientific research needs.
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
                  VayuDroid empowers researchers and innovators to gather critical data from the sky, reducing costs 
                  and increasing accessibility in traditionally challenging domains.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              Get in Touch About VayuDroid
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default VayuDroidPage;
