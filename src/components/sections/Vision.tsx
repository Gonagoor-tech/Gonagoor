
import React, { useEffect } from 'react';
import { Compass } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const Vision: React.FC = () => {
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
    <section id="vision" className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Vision" 
          subtitle="The principles that guide our innovation and development"
          className="scroll-trigger"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-xl p-8 md:p-10 mb-12 scroll-trigger">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div 
                className={cn(
                  "flex items-center justify-center rounded-full w-16 h-16 bg-primary/10 text-primary mr-4 mb-4 md:mb-0",
                )}
              >
                <Compass className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2">Company Motto</h3>
                <p className="text-muted-foreground">Innovation and R&D Motto</p>
              </div>
            </div>
            
            <div className="pl-0 md:pl-20">
              <blockquote className="text-lg italic mb-4 text-foreground/80">
                "Na hi Jnanena Sadrusham Pavitram Iha Vidyate
                <br />
                tatsvayaṁ yogasansiddhaḥ kālenātmani vindati"
              </blockquote>
              <p className="text-muted-foreground">
                Bhagavat Gita, Chapter 4, Verse 38
              </p>
              <p className="mt-4">
                There is no better purifier than knowledge and a yogi who has attained perfection understands it within his heart.
              </p>
            </div>
          </div>

          <div className="glass rounded-xl p-8 md:p-10 mb-12 scroll-trigger">
            <h3 className="text-2xl font-medium mb-6">Development Objectives</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-medium mb-3">Loka Kshema Prarthana - Welfare of the entire universe</h4>
              <blockquote className="text-lg italic mb-4 text-foreground/80">
                "Svasthi Prajaabyaha Paripaalayantham
                <br />
                Nyaayena Maargena Maheen Maheeshaha
                <br />
                Yo Brahmanebyaha Shubhamastu Nithyam
                <br />
                Loka Samastha Sukhino Bhavanthu"
              </blockquote>
              <p className="text-muted-foreground">
                We stand to work with fairness and create systems with aid in the welfare of everyone in the universe, humans, all species, plants and every living and non-living being in the universe. May the entire universe be prosperous in all aspects of life.
              </p>
            </div>
            
            <div className="mb-8">
              <blockquote className="text-lg italic mb-4 text-foreground/80">
                "Yasya Dviradavakthradyaaha Parishyatyaa Parashyatham
                <br />
                Vignam Nignanti Sathatham Vishwaksenam Thavaamshraye"
              </blockquote>
              <p className="text-muted-foreground mb-1">Vishnu Sahasranamam</p>
              <p>
                Enabling long term sustainable development without frictions in the system using the grace of Lord Vishwaksena.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-3">Process Objective</h4>
              <blockquote className="text-lg italic mb-4 text-foreground/80">
                "Vyavasaayo Vyavasthaano Samsthaano Jagasthitaha"
              </blockquote>
              <p className="text-muted-foreground mb-1">Vishnu Sahasranamam</p>
              <p>
                The world is operated by a set of well-defined processes. Processes define efficiency.
              </p>
              <p className="mt-4">
                We aim to build products that use technology to improve the world around us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
