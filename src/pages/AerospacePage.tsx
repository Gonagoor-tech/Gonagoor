import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Rocket, Satellite, Send, Plane } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const AerospacePage = () => {
  const aerospaceSolutions = [
    {
      icon: <Rocket size={32} />,
      title: "Jet Engines for Micro Activities",
      description: "Compact jet engines designed for micro UAVs, research drones, and experimental propulsion systems.",
      image: "/Images/JetEngine.jpg"
    },
    {
      icon: <Satellite size={32} />,
      title: "CubeSat Development",
      description: "Modular, cost-effective CubeSats aimed at low-earth orbit missions for research, communication, and environmental monitoring.",
      image: "/Images/QubeSat.png"
    },
    {
      icon: <Plane size={32} />,
      title: "Custom-Built Drones",
      description: "Modular UAVs tailored to customer-specific use-cases with autonomous navigation and environmental adaptability.",
      image: "/Images/DroneCS.jpg"
    },
    {
      icon: <Send size={32} />,
      title: "Propulsion Systems",
      description: "High-efficiency propulsion technologies for aerospace applications, focusing on performance and sustainability.",
      image: "/Images/PropSys.png"
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-20 relative">
          {/* Background elements */}
          {/* FIX: Moved z-10 from the background div to ensure it's behind content */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 -z-10"></div>
          
          <SectionHeading
            title="Aerospace Division"
            subtitle="Innovation takes flight at Gonagoor."
            centered={true}
          />

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-center text-gray-700">
              Our Aerospace Division is dedicated to designing compact, high-performance aerospace 
              systems tailored for modern-day challenges and future possibilities. Our team thrives on 
              precision, performance, and pushing the limits of what's possible in the skies and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {aerospaceSolutions.map((solution, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-lg text-blue-500 shadow-md">
                    {solution.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Current Aerospace Projects"
              subtitle="We're committed to advancing the frontiers of aerospace technology through innovative research and development programs."
              centered={true}
            />

            <div className="mt-12 space-y-8">
              <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">Nanoget X1</h3>
                    <p className="text-gray-600 mb-4">
                      A compact jet propulsion unit optimized for lightweight aerial systems. It's designed for micro-drones 
                      and research vehicles that require speed and stability in tight form factors.
                    </p>
                    <Button to="/nanoget-x1" variant="outline" size="sm">Learn more</Button>
                  </div>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Satellite className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-green-600 transition-colors">Skycube Initiative</h3>
                    <p className="text-gray-600 mb-4">
                      Our CubeSat program aims to develop a fleet of small, agile satellites for LEO missions. 
                      These satellites support research, IoT integration, and earth monitoring.
                    </p>
                    <Button to="/skycube" variant="outline" size="sm">Learn more</Button>
                  </div>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Send className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-600 transition-colors">VayuDroid</h3>
                    <p className="text-gray-600 mb-4">
                      A smart drone platform that incorporates machine learning-based navigation and mission control. 
                      Ideal for autonomous surveillance, terrain mapping, and delivery systems.
                    </p>
                    <Button to="/vayudroid" variant="outline" size="sm">Learn more</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-semibold mb-6">Partner with us on your next aerospace mission</h2>
              <p className="text-gray-600 mb-6">
                GonagoorTech offers comprehensive aerospace engineering services from initial 
                concept to launch and beyond. Our team of aerospace engineers, physicists, and 
                computer scientists are ready to support your most ambitious projects.
              </p>
              <a href='/contact'>
              <Button size="lg">Schedule a consultation</Button></a>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Aerospace Innovation"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AerospacePage;