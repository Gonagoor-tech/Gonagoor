
import React, { useEffect } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import PortfolioCard from '@/components/ui/PortfolioCard';

const portfolioItems = [
  {
    title: "Trikala Ayurveda",
    description: "Website, SEO and Payment Solutions."
  },
  {
    title: "Bengaluru Gayana Samaja",
    description: "Payment and event management software development."
  },
  {
    title: "Cognitive Clouds",
    description: "Delivering application functionalities and total application redevelopment."
  },
  {
    title: "Dayananda Sagar College of Engineering",
    description: "Data Sciences and Microservices training programs."
  },
  {
    title: "Migration Light",
    description: "A product to enable seamless migration of data in multiple formats for organizations."
  },
  {
    title: "7 Edge Development",
    description: "Process Management, In-depth Training, capital management, interviewing and skill gap management."
  },
  {
    title: "Alkimi Exchange",
    description: "Process Management, In-depth Training, marketing, interviewing and skill gap management."
  }
];

const Portfolio: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-trigger');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Portfolio" 
          subtitle="Thank you for the trust. Here are some of the projects we have worked on."
          className="scroll-trigger"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
              <PortfolioCard 
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
