import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { HeartPulse, Stethoscope, Shield, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const HealthcarePage = () => {
  const offerings = [
    {
      icon: <HeartPulse size={28} />,
      title: 'Digital Health Platforms',
      description: 'Patient portals, remote monitoring, and telemedicine solutions built for security and scale.'
    },
    {
      icon: <Stethoscope size={28} />,
      title: 'Medtech Software',
      description: 'Device software, DICOM/PACS integrations, and imaging workflows for diagnostics.'
    },
    {
      icon: <Cpu size={28} />,
      title: 'Clinical AI',
      description: 'Decision support, triage, risk stratification, and NLP for clinical notes.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Compliance & Security',
      description: 'Best practices for privacy, data governance, and regulatory readiness.'
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-20">
          <SectionHeading
            title="Healthcare Division"
            subtitle="Engineering trusted digital health and medtech solutions."
            centered={true}
          />

          <div className="max-w-3xl mx-auto text-center text-gray-700">
            <p>
              We build secure, reliable healthcare software across providers, payers, and medtech. From clinical
              workflows to patient-facing apps, we focus on outcomes, usability, and interoperability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {offerings.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50 -mx-4 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Bring your healthcare product to life</h3>
            <p className="text-gray-600 mb-6">
              Partner with us to design and launch secure, compliant healthcare apps and AI tools.
            </p>
            <Button to="/contact" size="lg">Talk to us</Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default HealthcarePage;


