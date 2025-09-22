import React, { useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import PortfolioCard from '@/components/ui/PortfolioCard';

const portfolioItems = [
  {
    title: "Trikala Ayurveda",
    description: "Website, SEO and Payment Solutions.",
    image: "/portfolio/Ayurveda.jpg"
  },
  {
    title: "Bengaluru Gayana Samaja",
    description: "Payment and event management software development.",
    image: "/portfolio/BGS.png"
  },
  {
    title: "Cognitive Clouds",
    description: "Delivering application functionalities and total application redevelopment.",
    image: "/portfolio/Cloud.png"
  },
  {
    title: "Dayananda Sagar College of Engineering",
    description: "Data Sciences and Microservices training programs.",
    image: "/portfolio/DSU.png"
  },
  {
    title: "Migration Light",
    description: "A product to enable seamless migration of data in multiple formats for organizations. Technology and Growth enablement.",
    image: "/portfolio/migration.jpeg"
  },
  {
    title: "7 Edge Development",
    description: "Process Management, In-depth Training, capital management, interviewing and skill gap management.",
    image: "/portfolio/7EDGE.png"
  },
  {
    title: "Alkimi Exchange",
    description: "Process Management, In-depth Training, marketing, interviewing and skill gap management.",
    image: "/portfolio/Alkimi.jpeg"
  }
];

const PortfolioPage = () => {
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
    <PageLayout>
      <div className="section-highlight overflow-hidden">
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title="Our Portfolio" 
              subtitle="Thank you for the trust. Here are some of the projects we have worked on."
              className="scroll-trigger"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
              {portfolioItems.map((item, index) => (
                <div key={index} className="scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
                  <PortfolioCard 
                    title={item.title}
                    description={item.description}
                    image={item.image} // <--- Added
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 relative z-10 bg-gradient-to-b from-secondary/50 to-white/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-8 font-poppins text-center bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Testimonials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass hover:shadow-xl transition-all duration-300 p-6 rounded-xl">
                  <blockquote className="text-foreground italic mb-4">
                    "Working with Gonagoor Tech has enabled us to achieve high efficiency which has enabled us to deliver several key projects on time amidst several constraints."
                  </blockquote>
                  <div className="font-medium text-primary">Jayaprakash Rao</div>
                  <div className="text-sm text-muted-foreground">Vice President, Cognitive Clouds</div>
                </div>
                <div className="glass hover:shadow-xl transition-all duration-300 p-6 rounded-xl">
                  <blockquote className="text-foreground italic mb-4">
                    "The process efficiency achieved in conducting software guided programs has been outstanding."
                  </blockquote>
                  <div className="font-medium text-primary">Prasad MNR</div>
                  <div className="text-sm text-muted-foreground">President, Bengaluru Gayana Samaj</div>
                </div>
                <div className="glass hover:shadow-xl transition-all duration-300 p-6 rounded-xl">
                  <blockquote className="text-foreground italic mb-4">
                    "The upskilling and Faculty development programs have helped our department gain a first hand insight into the functioning of the industry on data science and web applications at scale."
                  </blockquote>
                  <div className="font-medium text-primary">Dr. Vibha MB</div>
                  <div className="text-sm text-muted-foreground">Associate Professor, Dayananda Sagar</div>
                </div>
                <div className="glass hover:shadow-xl transition-all duration-300 p-6 rounded-xl">
                  <blockquote className="text-foreground italic mb-4">
                    "The Startup Incubation program has helped us level up aspects of our business and helped position ourselves in the market in a timely and affordable manner."
                  </blockquote>
                  <div className="font-medium text-primary">Chaitra Acharya</div>
                  <div className="text-sm text-muted-foreground">Founder & CEO, Migration Light</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default PortfolioPage;
