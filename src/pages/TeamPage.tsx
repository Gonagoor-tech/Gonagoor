import React, { useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import TeamCard from '@/components/ui/TeamCard';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// --- Team Data ---

const coreTeam = [
  {
    name: "Prashanth Raghu",
    role: "Sansthaapak, Founder & CEO",
    description: "Visionary leader with 13+ years of experience, specializing in delivering enterprise-grade software solutions.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/prashanthraghu?originalSubdomain=in",
      email: "writetous@gonagoortech.com"
    },
    imageSrc: "/Team/Prashanth.jpeg",
    isLeader: true
  },
  {
    name: "Dhanush DB",
    role: "Mukhya Nirvaahak - Chief Operating Officer",
    description: "Over 4 years of experience developing cutting-edge space technologies and mobile applications.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dhanush-d-b-434485152"
    },
    imageSrc: "/Team/Dhanush.jpeg",
    isLeader: true
  },
  {
    name: "Chirag S Rao",
    role: "Mukhya Nirvaahak - Chief Technical Officer",
    description: "5+ years of leadership experience, blending technical expertise with strong people skills to drive growth.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/chiragsrao"
    },
    imageSrc: "/Team/Chirag.jpeg",
    isLeader: true
  },
  {
    name: "Mikkin KM",
    role: "Nirvaahak - Akendra Kriya",
    description: "Specializes in DevOps, ensuring applications scale efficiently to desired limits.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mikkin-k-m-72aa86230/"
    },
    imageSrc: "/Team/Mikkin.jpeg"
  },
  {
    name: "Raghavendra G",
    role: "Mukhya Nirvaahak - Lead Design Engineer",
    description: "A mechanical engineer bringing enthusiasm and versatility to drive next-gen technologies.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/raghavendra-g-link"
    },
    imageSrc: "/Team/Raghu.jpeg"
  },
  {
    name: "Nirupama M S",
    role: "Mukhya Nirvaahak - Jana Sneha Pariyavaran",
    description: "2+ years of experience in project management & administration, driving projects forward with strong organizational skills.",
    socialLinks: {
      linkedin: " "
    },
    imageSrc: "/Team/Nirupama.jpg"
  },
  {
    name: "Anuradha Raghu",
    role: "Nirvhaak - Jana Sneha Pariyavaran (Team Support)",
    description: "With 40+ years of nurturing experience, Anuradha supports the team with motherly care and guidance.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/anuradha-raghu-081920338"
    },
    imageSrc: "/Team/Anuradha.jpeg"
  },
  {
    name: "Suraj Jawoor",
    role: "Nirvaahak - Akendra Kriya",
    description: "Designs intuitive and engaging user interfaces and experiences that enhance usability and satisfaction.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/suraj-jawoor/"
    },
    imageSrc: "/Team/Suraj.jpeg"
  },
  {
    name: "Nagarjun N",
    role: "Mukhya Nirvaahak - Head of Products",
    description: "Oversees software product development and delivery, bridging technical capabilities with market demands to achieve strategic goals.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nagarjun17/"
    },
    imageSrc: "/Team/Arjun.jpg"
  },
  {
    name: "Rahul Almelkar",
    role: "Nirvaahak - Akendra Kriya",
    description: "Ensures product quality through systematic testing, identifying bugs, and validating functionality.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rahul-almelkar-4b373a1a9/"
    },
    imageSrc: "/Team/Rahul.jpeg"
  },
  {
    name: "Sowrav",
    role: "Nirvaahak - Akendra Kriya",
    description: "Designs and verifies integrated circuits at the RTL level for high-performance electronic systems.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sowravraon/"
    },
    imageSrc: "/Team/Sowrav.jpeg"
  },
  {
    name: "Rahulgouda Mariyappagoudar",
    role: "Nirvaahak - ML Engineer",
    description: "Develops and deploys machine learning models to solve real-world problems using data-driven approaches.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rahulm14052003"
    },
    imageSrc: "/Team/RahulM.jpeg"
  },
];

// --- Interns Data ---
const internsTeam = [
  {
    name: "Jyothi P Jatti",
    role: "Web Development Intern",
    description: "Focused on building responsive and interactive web applications using modern frameworks.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/jyothi-p-jatti"
    },
    imageSrc: "/Team/Jyothi.jpg"
  },
  {
    name: "Lavanya G",
    role: "Web Development Intern",
    description: "Passionate about frontend development and creating seamless user experiences.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/lavanya-g-tech"
    },
    imageSrc: "/Team/Lavanya.jpg"
  },
  {
    name: "Omer",
    role: "Nirvaahak, RTL Engineer",
    description: "Develops and validates RTL code for digital circuits, translating specifications into synthesizable logic, performing simulation and debug.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mhdomer/"
    },
    imageSrc: "/Team/omer.jpg"
  },
  {

    name: "Vijay Vittal",
    role: "Electronics Design Intern",
    description: "Assists in designing and testing electronic circuits and embedded systems for innovative projects.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vijayavitthal"
    },
    imageSrc: "/Team/vijay.jpg"
  }
];

// --- Advisory Team ---
const advisoryTeam = [
  {
    name: "Sanjeev Reddy",
    role: "Advisory Board Member",
    description: "A unique blend of administrative and software development experience, driving processes for beneficial outcomes.",
    socialLinks: { linkedin: "https://www.linkedin.com/in/sanjeevaraddi-karaddi-602927174/" },
    imageSrc: "/Team/Sanjeev.png"
  },
  {
    name: "Dr. Vibha MB",
    role: "Head of Academic Relations (Advisory)",
    description: "With 20+ years in academia, Dr. Vibha brings Gurukula-inspired guidance for learning journeys.",
    socialLinks: { linkedin: "https://www.linkedin.com/in/dr-vibha-sheshadri-a2a42812" },
    imageSrc: "/Team/Vibha.png"
  },
  {
    name: "Pruthvi Raj",
    role: "Head of Architecture (Advisory)",
    description: "Over 15 years of experience, bringing high-scalable application expertise to GonagoorTech.",
    socialLinks: { linkedin: "https://www.linkedin.com/in/dr-pruthviraj-u/" },
    imageSrc: "/Team/Pruthvi.jpeg"
  },
  {
    name: "Chaitra Acharya",
    role: "Advisory Board Member",
    description: "A unique blend of administrative and software development experience, driving processes for beneficial outcomes.",
    socialLinks: { linkedin: "https://www.linkedin.com/in/chaitra-acharya-b1b7465b" },
    imageSrc: "/Team/chaitra.jpeg"
  },
  {
    name: "Susheela S",
    role: "Advisory Board Member",
    description: "A unique blend of administrative and software development experience, driving processes for beneficial outcomes.",
    socialLinks: { linkedin: "https://www.linkedin.com/in/susheela-s/" },
    imageSrc: "/Team/Susheela.jpg"
  },
  {
    name: "Gowreesh Prabhu",
    role: "Electronics and PCB development",
    description: "A unique blend of administrative and software development experience, driving processes for beneficial outcomes.",
    socialLinks: { linkedin: "https://www.linkedin.com/in/gowreeshprabhu" },
    imageSrc: "/Team/Gowreesh.jpeg"
  }
];

// --- End Team Data ---

const TeamPage = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to Our Team!",
      description: "Discover the brilliant minds driving innovation at GonagoorTech.",
      duration: 3000,
    });
  }, [toast]);

  return (
    <PageLayout>
      <div className="py-0 relative overflow-hidden bg-background">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

          <div className="container mx-auto max-w-7xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-4 text-sm md:px-6 md:py-2 md:mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-medium text-primary">Meet Our Innovators</span>
            </div>
            <SectionHeading
              title={<>The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span></>}
              subtitle="Driven by passion, expertise, and a shared vision to revolutionize technology."
              centered={true}
              className="mb-0"
            />
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed md:mt-6">
              Our diverse team of engineers, designers, strategists, and leaders collaborate to push boundaries and deliver exceptional solutions.
            </p>
          </div>
        </section>

        {/* Core Team Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              title={<>Our <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Core Leadership</span></>}
              subtitle="The guiding force behind our innovation and growth."
              centered={true}
              className="mb-12 md:mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center mb-16 md:mb-24">
              {coreTeam.filter(member => member.isLeader).map((member, index) => (
                <div
                  key={index}
                  className="animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TeamCard {...member} isLeaderCard={true} />
                </div>
              ))}
            </div>

            <SectionHeading
              title={<>Our <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Dedicated Team</span></>}
              subtitle="Meet the talented individuals driving our daily success."
              centered={true}
              className="mb-12 md:mb-16 mt-16 md:mt-24"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {coreTeam.filter(member => !member.isLeader).map((member, index) => (
                <div
                  key={index}
                  className="animate-fade-in group"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <TeamCard {...member} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interns Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              title={<>Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Talented Interns</span></>}
              subtitle="Curious and creative minds contributing to our innovation."
              centered={true}
              className="mb-12 md:mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {internsTeam.map((member, index) => (
                <div
                  key={index}
                  className="animate-fade-in group"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <TeamCard {...member} isInternCard={true} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Team Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              title={<>Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Distinguished Advisors</span></>}
              subtitle="Strategic insights from industry veterans guiding our future."
              centered={true}
              className="mb-12 md:mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
              {advisoryTeam.map((member, index) => (
                <div
                  key={index}
                  className="animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TeamCard {...member} isAdvisoryCard={true} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Be a Part of Our Growth Story
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              We're always looking for passionate and talented individuals to join our mission.
              Explore career opportunities and grow with us.
            </p>
            <Button
              to="/careers"
              size="lg"
              className="group inline-flex items-center bg-primary text-white hover:bg-primary/90 transition-all duration-300 py-3 px-6 md:py-4 md:px-8 text-base md:text-lg"
            >
              Explore Careers <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default TeamPage;
