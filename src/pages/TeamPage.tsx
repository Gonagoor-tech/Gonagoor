import React, { useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import TeamCard from '@/components/ui/TeamCard';
import { useToast } from '@/hooks/use-toast';

const coreTeam = [
  {
    name: "Prashanth Raghu",
    role: "Sansthaapak, Founder & CEO",
    description: "With 13+ years of experience, delivers enterprise-grade software solutions for startups at affordable prices.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/prashanthraghu?originalSubdomain=in",
      email: "writetous@gonagoortech.com"
    },
    imageSrc: "/Team/Prashanth.jpeg"
  },
  {
    name: "Dhanush DB",
    role: "Mukhya Nirvaahak - Cheif operating officer",
    description: "With over 4 years of developmental experience of working and developing space technologies as well as mobile applications.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dhanush-d-b-434485152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    imageSrc: "/Team/Dhanush.jpeg"
  },
  {
    name: "Chirag S Rao",
    role: "Mukhya Nirvaahak - Chief Technical officer",
    description: "With 5+ years of leadership experience, Chirag brings a strong blend of expertise and people skills to drive organization's growth.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/chiragsrao?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    imageSrc: "/Team/Chirag.jpeg"
  },
  {
    name: "Nagarjun N",
    role: " Mukhya Nirvaahak - Head of Platforms",
    description: "Nagarjun provides development inputs in Microservices as well as Data science streams.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nagarjun17/"
    },
    imageSrc: "/Team/Arjun.jpg"
  },
  {
    name: "Mikkin",
    role: "Nirvaahak - Akendra Kriya",
    description: "Provides development inputs in DevOps helping in scaling applications to the desired scalability limits.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mikkin-km-72aa86230/"
    },
    imageSrc: "/Team/Mikkin.jpeg"
  },
  {
    name: "Raghavendra G",
    role: "Mukhya Nirvaahak - Lead design engineer",
    description: "A mechanical engineer by education, Raghu brings enthusiasm and versatility to drive next-gen technologies.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/raghavendra-g-link"
    },
    imageSrc: "/Team/Raghu.jpeg"
  },
  {
    name: "Shwetha Malnad",
    role: "Mukhya Nirvaahak - Jana Sneha Pariyavaran",
    description: "With over 3 years of experience working with different organizations on several key projects.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/s-h-w-e-t-a-621031274"
    },
    imageSrc: "/Team/Shwetha.jpeg"
  },
  {
    name: "Anuradha Raghu",
    role: "Nirvhaak - Jana Sneha Pariyavaran",
    description: "With 40+ years of nurturing experience, Anuradha supports the team with motherly care and guidance.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/anuradha-raghu-081920338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    imageSrc: "/Team/Anuradha.jpeg"
  },
  {
    name: "Suraj C Jawoor",
    role: "Nirvaahak - Akendra Kriya",
    description: "Designs intuitive and engaging user interfaces and experiences that enhance usability and user satisfaction.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/suraj-jawoor/"
    },
    imageSrc: "/Team/Suraj.jpeg"
  },
  {
    name: "Rahul Almelkar",
    role: "Nirvaahak - Akendra Kriya",
    description: "Rahul ensures product quality through systematic testing, identifying bugs, and validating functionality.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rahul-almelkar-4b373a1a9/"
    },
    imageSrc: "/Team/Rahul.jpeg"
  },
  {
    name: "Sowrav",
    role: "Nirvaahak - Akendra Kriya",
    description: "Designs and verifies integrated circuits at the transistor level for high-performance electronic systems.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sowravraon/"
    },
    imageSrc: "/Team/Sowrav.jpeg"
  },
  {
    name: "Rahulgouda Mariyappagoudar",
    role: "Nirvaahak - Akendra Kriya",
    description: "Develops and deploys machine learning models to solve real-world problems using data-driven approaches.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rahulm14052003?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    imageSrc: "/Team/RahulM.jpeg"
  },
  {
    name: "Ananth M Athreya",
    role: "Nirvaahak - Akendra Kriya",
    description: "Detail-oriented mathematics intern eager to contribute to quantitative analysis and research.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ananth-m-athreya-963262287/"
    },
    imageSrc: "/Team/Ananth.jpeg"
  }
  
];

const advisoryTeam = [
  {
    name: "Sanjeev Reddy",
    role: "Advisory",
    description: "As a unique blend of administrative as well as experience with software development, Sanjeev helps drive processes which help deliver the desired objectives for the benefit of all.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sanjeevaraddi-karaddi-602927174/"
    },
    imageSrc: "/Team/Sanjeev.png"
  },
  {
    name: "Dr. Vibha MB",
    role: "Mukhya Nirvaahak - Shaikshainika Kriya",
    description: "With 20+ years in academia, Dr. Vibha brings Gurukula-inspired guidance to help the team and students complete their learning journey.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dr-vibha-sheshadri-a2a42812?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    imageSrc: "/Team/Vibha.png"
  },
  {
    name: "Pruthvi Raj",
    role: "Head of Architecture (Advisory)",
    description: "With over 15 years of experience Pruthvi brings in high scalable application expertise in Gonagoor tech.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dr-pruthviraj-u/"
    },
    imageSrc: "/Team/Pruthvi.jpeg"
  }
];

const TeamPage = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Team Page",
      description: "Meet our talented team members",
    });
  }, [toast]);

  return (
    <PageLayout>
      <div className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading 
            title="Our Team" 
            subtitle="Meet the talented professionals behind GonagoorTech"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
            {coreTeam.map((member, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <TeamCard {...member} visible={true} />
              </div>
            ))}
          </div>
          
          <SectionHeading 
            title="Advisory Team" 
            subtitle="Our expert advisors who guide our strategic direction"
            className="mt-32 mb-16"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
            {advisoryTeam.map((member, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <TeamCard {...member} visible={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TeamPage;
