
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Rocket, Satellite, Send, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AerospaceDetailPage = () => {
  const projects = [
    {
      title: "Nanoget X1",
      subtitle: "Revolutionizing Micro-Propulsion for the NewSpace Era",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      description: "Nanoget X1 is a next-generation miniaturized propulsion system developed specifically for nanosatellites (CubeSats and PocketQubes). Built with cutting-edge green propellants, the system delivers high-precision thrust within a compact, modular design, making it ideal for space-constrained satellite platforms.",
      features: [
        "Green Propulsion: Utilizes non-toxic, storable propellants for safe integration and handling.",
        "Precision Control: Enables fine attitude adjustments and orbital maneuvers critical for mission success.",
        "Modular Form Factor: Designed for easy integration into existing CubeSat architectures.",
        "Academic & Commercial Applications: Suitable for LEO missions involving Earth observation, technology demonstrations, and satellite formation flying."
      ],
      impact: "Nanoget X1 addresses the growing demand for cost-effective, efficient propulsion in small satellite missions, empowering educational institutions and startups to access space with ease and reliability."
    },
    {
      title: "Skycube",
      subtitle: "A CubeSat for Earth and Beyond – Empowering Students through Space Access",
      icon: <Satellite className="w-8 h-8 text-primary" />,
      description: "Skycube is a 1U–3U CubeSat platform developed through strategic academic partnerships. It serves as a hands-on educational tool and a fully operational satellite platform, enabling real-world missions in Earth observation, scientific experimentation, and amateur communication.",
      features: [
        "STEM-Driven Design: Built in collaboration with universities to train students in satellite engineering.",
        "Earth Observation Payloads: Includes sensors and cameras for imaging, weather tracking, and remote sensing applications.",
        "Open Payload Architecture: Allows plug-and-play integration of third-party experiments or research instruments.",
        "Global Communication Capability: Supports amateur radio bands and telemetry downlink for ground stations."
      ],
      impact: "Skycube is more than a satellite; it's a gateway for academic institutions to actively participate in space missions, develop curriculum-aligned space research, and inspire the next generation of aerospace engineers."
    },
    {
      title: "VayuDroid",
      subtitle: "Aerial Intelligence for Data-Driven Missions",
      icon: <Send className="w-8 h-8 text-primary" />,
      description: "VayuDroid is an autonomous aerial robotics platform engineered for high-altitude data collection and experimental payload delivery. Designed to operate in semi-remote and sensitive environments, VayuDroid bridges the gap between UAV capabilities and scientific research needs.",
      features: [
        "High-Altitude Flight: Optimized for operations in diverse terrains and elevated atmospheric conditions.",
        "Payload Customization: Supports modular payload bays for cameras, sensors, environmental monitors, and experimental tech.",
        "AI-Based Navigation: Integrated with AI-driven guidance and stabilization algorithms for real-time decision-making.",
        "Use Cases: Agricultural surveys, environmental monitoring, defense reconnaissance, disaster response, and scientific research."
      ],
      impact: "VayuDroid empowers researchers and innovators to gather critical data from the sky, reducing costs and increasing accessibility in traditionally challenging domains."
    }
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
            title="Aerospace Division Projects"
            subtitle="Innovation takes flight at Gonagoor."
            centered={true}
          />

          <div className="space-y-12 mt-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {project.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-4 text-gray-900">Key Features:</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900">Impact:</h4>
                    <p className="text-gray-700 leading-relaxed">{project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              Get in Touch About Our Aerospace Projects
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AerospaceDetailPage;
