
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Brain, Cpu, Computer, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const AIPage = () => {
  const aiSolutions = [
    {
      icon: <Brain size={32} />,
      title: "AI Processor Design",
      description: "Next-generation AI chip focused on accelerating machine learning workloads while maintaining power efficiency.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Computer size={32} />,
      title: "Sudarshan.AI",
      description: "A groundbreaking LLM-based multimodal system that converts sound into video, exploring the synergy between auditory input and visual imagination.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <Cpu size={32} />,
      title: "Custom AI Development",
      description: "Specialized AI solutions tailored to industry-specific challenges, from NLP chatbots to machine vision for quality inspection.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <LineChart size={32} />,
      title: "Semantic Vision Engine",
      description: "A context-aware computer vision system that understands environments and objects dynamically—useful in robotics, security, and AR.",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-indigo-500/20 to-blue-500/20"
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-20 relative">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/30 -z-10"></div>
          
          <SectionHeading
            title="Artificial Intelligence Division"
            subtitle="Bringing intelligence to machines — and meaning to data."
            centered={true}
          />

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-center text-gray-700">
              The AI Division at Gonagoor Technologies is where science fiction meets real-world functionality. 
              We are building cutting-edge AI systems that can perceive, understand, and create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {aiSolutions.map((solution, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} mix-blend-overlay`}></div>
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
              title="Current AI Projects"
              subtitle="We don't just train models — we engineer intelligence."
              centered={true}
            />

            <div className="mt-12 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Sudarshan.AI</h3>
                <p className="text-gray-600 mb-4">
                  Multimodal AI capable of generating video content from audio input — a true step forward in generative and creative AI.
                  This project explores the deep synergy between auditory input and visual imagination, with applications in accessibility, 
                  entertainment, and creative media.
                </p>
                <Button to="/ai/details" variant="outline" size="sm">Learn more</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">NeuronX Processor</h3>
                <p className="text-gray-600 mb-4">
                  A specialized AI chip under development for real-time inference on edge devices — focused on smart mobility, 
                  drones, and consumer AI devices. It's designed to accelerate machine learning workloads while maintaining power efficiency.
                </p>
                <Button to="/ai/details" variant="outline" size="sm">Learn more</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Semantic Vision Engine</h3>
                <p className="text-gray-600 mb-4">
                  A context-aware computer vision system that understands environments and objects dynamically — useful in robotics, 
                  security, and AR. Our models are designed with transparency, accuracy, and robustness in mind.
                </p>
                <Button to="/ai/details" variant="outline" size="sm">Learn more</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-semibold mb-6">Partner with us on your next AI project</h2>
              <p className="text-gray-600 mb-6">
                GonagoorTech offers comprehensive AI development services from initial concept to deployment and beyond. 
                Our team of AI engineers, data scientists, and researchers are ready to support your most ambitious projects.
              </p>
              <Button size="lg">Schedule a consultation</Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI Neural Network Visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <Brain size={120} className="text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AIPage;
