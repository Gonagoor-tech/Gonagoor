
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Code, Building, Rocket, GraduationCap, ArrowLeft, Shield, Zap, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SoftwareDetailPage = () => {
  const focusAreas = [
    {
      title: "Enterprise-Grade Solutions",
      icon: <Building className="w-8 h-8 text-primary" />,
      description: "We develop cloud-native platforms using microservice architecture that supports seamless scaling and agile iteration. These systems are engineered for critical business operations such as ERP, CRM, supply chain, and data analytics."
    },
    {
      title: "Startup Tech Enablement",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      description: "We collaborate with emerging startups to convert ideas into working products. From wireframes and MVPs to full-stack solutions, we offer accelerated development cycles and long-term technology partnerships."
    },
    {
      title: "Custom Applications",
      icon: <Code className="w-8 h-8 text-primary" />,
      description: "Our team builds desktop, mobile, and web applications tailored to unique business domains. We incorporate the latest in UX/UI design, real-time data processing, and secure API integration to ensure top-tier functionality."
    },
    {
      title: "Educational & Social Impact Platforms",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      description: "We have experience in building tools for e-learning, skill development, and digital enablement. Our platforms are used in schools, research institutions, and community initiatives."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Agile development processes with rapid delivery"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "In-house product design and QA capabilities"
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Integration with AI, IoT, and cloud technologies"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Strong data privacy and security protocols"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-20">
          <div className="mb-8">
            <Button to="/software" variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Software Division
            </Button>
          </div>
          
          <SectionHeading
            title="Software Division"
            subtitle="Engineering Scalable Solutions for a Connected Future"
            centered={true}
          />

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-center text-gray-700 leading-relaxed">
              At Gonagoor, our software division specializes in developing custom, cutting-edge applications 
              designed to solve complex problems across industries. From startups to enterprises and educational 
              institutions, we craft end-to-end solutions with performance, scalability, and user experience at the core.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Key Focus Areas:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {focusAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        {area.icon}
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">Why Choose Gonagoor Software?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-gray-700 font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700 font-medium">
                  Our software team is committed to transforming ideas into technology-driven success stories.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              Start Your Software Project With Us
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SoftwareDetailPage;
