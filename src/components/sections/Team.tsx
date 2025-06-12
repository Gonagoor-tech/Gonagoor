
import React, { useEffect } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TeamCard from '@/components/ui/TeamCard';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const coreTeam = [
  {
    name: "Prashanth Raghu",
    role: "Founder, CEO",
    description: "With over 13 years of experience in software development for startups at various stages, developing enterprise grade solutions at affordable prices.",
    socialLinks: {
      linkedin: "#",
      email: "prashanth@example.com"
    },
    imageSrc: "/lovable-uploads/7562f6e4-3a58-48d0-8116-2354e81d9c9b.png"
  },
  {
    name: "Dhanush DB",
    role: "Head of Products, Space Technologies",
    description: "With over 4 years of developmental experience working with space technologies and mobile applications.",
    socialLinks: {
      linkedin: "#"
    },
    imageSrc: "/lovable-uploads/7562f6e4-3a58-48d0-8116-2354e81d9c9b.png"
  },
  {
    name: "Shwetha Malnad",
    role: "Head, HR Management",
    description: "With over 3 years of experience working with different organizations on several key projects, bringing empathic people relationship management.",
    socialLinks: {
      linkedin: "#"
    },
    imageSrc: "/lovable-uploads/7562f6e4-3a58-48d0-8116-2354e81d9c9b.png"
  },
  {
    name: "Suraj C Jawoor",
    role: "Nirvaahak - Akendra Kriya",
    description: "Contributing to core technology initiatives across various platforms.",
    socialLinks: {
      linkedin: "#"
    }
  },
];

const Team: React.FC = () => {
  const navigate = useNavigate();
  
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

    // Add 3D effect to team cards
    const addTeamCard3DEffect = () => {
      const cards = document.querySelectorAll('.team-card-3d-wrapper');
      
      cards.forEach(card => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
          (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
      });
    };
    
    // Run the 3D effect setup
    addTeamCard3DEffect();

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      
      // Clean up event listeners
      const cards = document.querySelectorAll('.team-card-3d-wrapper');
      cards.forEach(card => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Team" 
          subtitle="Meet the experts behind Gonagoor Tech Solutions"
          className="scroll-trigger mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coreTeam.map((member, index) => (
            <div key={index} className="scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
              <TeamCard 
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                socialLinks={member.socialLinks}
                visible={false} // Hide all cards on homepage
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button 
            onClick={() => navigate('/team')}
            className="group flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300"
          >
            View All Team Members
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
