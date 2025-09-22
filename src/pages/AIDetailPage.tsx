
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Brain, Heart, Cpu, MessageSquare, ArrowLeft, Eye, Shield, Scale, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AIDetailPage = () => {
  const focusAreas = [
    {
      title: "Sudharshana AI Framework",
      icon: <Brain className="w-8 h-8 text-primary" />,
      description: "A robust, modular AI framework built to enable fast prototyping, explainability, and deployment of machine learning models. It includes built-in tools for data preprocessing, model training, bias detection, and performance visualization."
    },
    {
      title: "Healthcare AI",
      icon: <Heart className="w-8 h-8 text-primary" />,
      description: "We are developing advanced diagnostics and patient-assist tools using deep learning models trained on medical imaging and records. Our goal is to support clinical decisions, reduce diagnosis time, and improve accessibility in rural areas."
    },
    {
      title: "AI for Industry Automation",
      icon: <Cpu className="w-8 h-8 text-primary" />,
      description: "Our solutions optimize processes in manufacturing, logistics, and customer service. Applications include predictive maintenance, demand forecasting, and robotic process automation (RPA)."
    },
    {
      title: "Conversational AI & NLP",
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      description: "We design intelligent chatbots, voice assistants, and NLP pipelines that enable smooth communication between users and digital systems. These are used in customer support, education, and content generation."
    }
  ];

  const coreValues = [
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Transparency",
      description: "Explainable models and outcomes"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Privacy",
      description: "Ethical handling of sensitive data"
    },
    {
      icon: <Scale className="w-6 h-6 text-primary" />,
      title: "Scalability",
      description: "Cloud-based and on-edge AI deployments"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Impact",
      description: "AI designed to solve real-world challenges"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-20">
          <div className="mb-8">
            <Button to="/ai" variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to AI Division
            </Button>
          </div>
          
          <SectionHeading
            title="Artificial Intelligence Division"
            subtitle="Building Responsible AI for Meaningful Change"
            centered={true}
          />

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-center text-gray-700 leading-relaxed">
              The AI division at Gonagoor focuses on creating intelligent, ethical, and human-centric solutions 
              that improve efficiency, decision-making, and user interaction. We build AI tools that not only 
              solve problems but do so transparently, ethically, and at scale.
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
              <CardTitle className="text-2xl text-center mb-4">Core Values in Our AI Journey:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}:</h4>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700 font-medium">
                  At Gonagoor, our AI efforts are rooted in responsible innovation — ensuring that every model we 
                  build uplifts, assists, and empowers.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              Explore AI Solutions With Us
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AIDetailPage;
