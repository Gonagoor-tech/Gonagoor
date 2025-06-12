import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Briefcase, ChevronRight, MapPin, Clock, Sparkles } from 'lucide-react';

const CareerPage = () => {
  const careers = [
    
    {
      id: 2,
      title: 'Design and analysis Engineer in Aerospace',
      department: 'Design',
      location: 'Bengaluru, Karnataka',
      type: 'Intern',
      description: 'We are seeking a skilled and detail-oriented Design and Analysis Engineer to join our engineering team. In this role, you will be responsible for designing components, systems, or products and performing structural, thermal, or dynamic analyses to ensure performance, reliability, and safety. You’ll collaborate with cross-functional teams to bring innovative solutions from concept to production.',
      requirements: [
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio demonstrating UI design skills',
        'Experience with user research and usability testing',
      ],
      benefits: [
        'Competitive salary',
        'Flexible working hours and remote work',
        'Creative equipment budget',
      ]
    },
    
  ];

  const linkedinUrl = 'https://in.linkedin.com/company/gonagoor-technology-solutions';

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <SectionHeading 
          title="Join Our Team" 
          subtitle="At GonagoorTech, we're looking for passionate individuals who want to shape the future of technology. Explore our current openings and find your perfect role."
        />
        
        <div className="my-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            We offer a collaborative environment where your ideas matter. Our diverse team thrives on innovation, creativity, and making a real impact in the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
              <p className="text-gray-600">Work on cutting-edge technologies that push boundaries and create new possibilities.</p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible hours, remote options, and policies that respect your time outside work.</p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Path</h3>
              <p className="text-gray-600">Clear advancement opportunities and support for your professional development.</p>
            </div>
          </div>
        </div>
        
        <div className="my-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Open Positions</h2>
          
          <div className="space-y-6">
            {careers.map((job) => (
              <div key={job.id} className="glass-card hover-scale p-8 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                      <Briefcase size={16} />
                      <span className="font-medium">{job.department}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Benefits:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    {/* Apply Now Button with LinkedIn Redirect */}
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="group">
                        Apply Now 
                        <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-blue-100 p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Don't see the right role?</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          {/* Send Open Application Button with LinkedIn Redirect */}
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700">
              Send Open Application
            </Button>
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default CareerPage;