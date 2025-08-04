
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Code, Monitor, Smartphone, Layout } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const SoftwarePage = () => {
  const softwareSolutions = [
    {
      icon: <Smartphone size={32} />,
      title: "App Development",
      description: "Native and cross-platform mobile applications built for performance, usability, and scale.",
      image: "/Images/AppDev.jpg",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Monitor size={32} />,
      title: "Web Development",
      description: "Clean, modern websites and portals that perform across devices and browsers.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <Layout size={32} />,
      title: "UI/UX Design",
      description: "Intuitive user interfaces and engaging user experiences, balancing aesthetics and functionality.",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <Code size={32} />,
      title: "Custom Software Solutions",
      description: "Software tailored precisely to business processes—whether it's an internal tool, automation suite, or cloud-based platform.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-indigo-500/20 to-blue-500/20"
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-20 relative">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 -z-10"></div>
          
          <SectionHeading
            title="Software Division"
            subtitle="Technology that adapts to your vision."
            centered={true}
          />

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-center text-gray-700">
              Our Software Division focuses on developing scalable, responsive, and reliable digital platforms. 
              Whether it's a mobile app or a full-scale enterprise system, we bring together design thinking 
              and development expertise to deliver user-centric solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {softwareSolutions.map((solution, index) => (
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
              title="Current Software Projects"
              subtitle="With a deep understanding of frontend and backend architectures, and a commitment to continuous innovation, our software team crafts digital experiences that work seamlessly and look stunning."
              centered={true}
            />

            <div className="mt-12 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">OmniApps</h3>
                <p className="text-gray-600 mb-4">
                  A multi-industry app framework designed for quick deployment of mobile and web solutions — 
                  currently used in healthcare, education, and e-commerce.
                </p>
                <Button to="/software/details" variant="outline" size="sm">Learn more</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">UXHive</h3>
                <p className="text-gray-600 mb-4">
                  A toolkit of UX patterns and design templates that helps developers build highly consistent 
                  and user-friendly interfaces across platforms and devices.
                </p>
                <Button to="/software/details" variant="outline" size="sm">Learn more</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Custom CRM Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Built from the ground up for each client, integrating automation, reporting, 
                  and third-party tools to match specific sales and service needs.
                </p>
                <Button to="/software/details" variant="outline" size="sm">Learn more</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-semibold mb-6">Partner with us on your next software project</h2>
              <p className="text-gray-600 mb-6">
                GonagoorTech delivers end-to-end software development services from initial concept to deployment and support. 
                Our team of expert developers, designers, and project managers are ready to transform your ideas into reality.
              </p>
              <a href='/contact'>
              <Button size="lg">Schedule a consultation</Button></a>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Software Development Code"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                  <Code size={120} className="text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SoftwarePage;
