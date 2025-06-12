
import React from 'react';
import { Brain, Watch, Zap, Code, Globe, Activity, Monitor, Lightbulb } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import ResearchCard from '@/components/ui/ResearchCard';

const researchProjects = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Sudarshana - Machine Learning",
    description: "Model development on numerous applications, using language principles from Bharat (Indian) languages."
  },
  {
    icon: <Watch className="w-6 h-6" />,
    title: "HastaMudrika - Smartwatch",
    description: "Indigenous smartwatch and motherboard designs, for research and development as well as productisation."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Vimana - The JetEngine",
    description: "Research and Design of a custom JetEngine and detailed testing to work on multiple opportunities to help jets."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Vishwakarma - Processor Design",
    description: "Design of a custom processor based on the Risc-V architecture with floating point and vector operation support."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Aakasha Mitra - Drones",
    description: "Development of indigenous drones and custom cube sat component with an app store for users to create applications."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Vidyu Vaahan - The EV",
    description: "A hybrid EV capable of operating in multiple environments and multiple battery types."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Precision Sensor Design",
    description: "Design of precision sensors for usage in medical and multiple fields."
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Drusti Shrusti - Display Design",
    description: "Design of a low eye-impact display for usage over sustained periods without impact using research on color schemes."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "JoyStick based Mobile operator",
    description: "Research to help seniors adapt easily to the digital world and help them understand complex interactions with simple movements using joysticks."
  }
];

const ResearchPage = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Ongoing Research Work" 
            subtitle="Being an R&D organization at the core, we work on the fundamentals of technologies enabling the creation of technology which are a blend of tradition and modern technology (Sanathana + Sanoothana) enabling wonderful experiences to all in the system."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
            {researchProjects.map((project, index) => (
              <ResearchCard 
                key={index}
                title={project.title}
                description={project.description}
                icon={project.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 font-poppins text-center">Our Research Approach</h3>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="mb-6">
                At GonagoorTech, our research initiatives are guided by a deep commitment to blending traditional knowledge with modern innovation. We draw inspiration from ancient wisdom while leveraging cutting-edge technology to create solutions that are both timeless and forward-thinking.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Research Principles</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Integrating traditional wisdom with modern technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Focusing on sustainability and ethical innovation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Creating technologies that enhance human well-being</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Pursuing excellence through rigorous methodologies</span>
                    </li>
                  </ul>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Research Domains</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Artificial Intelligence & Machine Learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Aerospace & Aviation Technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Electronics & Embedded Systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Sustainable Energy Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchPage;
