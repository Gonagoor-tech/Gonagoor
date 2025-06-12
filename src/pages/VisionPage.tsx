
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';

const VisionPage = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Vision" 
            subtitle="Guided by ancient wisdom and driven by innovation"
          />
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="glass rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6 font-poppins">Company Motto</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Innovation and R&D Motto</h4>
                <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-lg italic mb-2">
                    "Na hi Jnanena Sadrusham Pavitram Iha Vidyate"
                  </p>
                  <p className="text-lg italic mb-4">
                    "tatsvayaṁ yogasansiddhaḥ kālenātmani vindati"
                  </p>
                  <p className="text-muted-foreground">
                    There is no better purifier than knowledge and a yogi who has attained perfection understands it within his heart.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 text-right">
                    — Bhagavat Gita, Chapter 4, Verse 38
                  </p>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mb-3">Development Objectives</h4>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20 mb-6">
                <h5 className="text-base font-medium mb-2">Loka Kshema Prarthana - Welfare of the entire universe</h5>
                <p className="text-lg italic mb-2">
                  "Svasthi Prajaabyaha Paripaalayantham
                  <br />
                  Nyaayena Maargena Maheen Maheeshaha 
                  <br />
                  Yo Brahmanebyaha Shubhamastu Nithyam
                  <br />
                  Loka Samastha Sukhino Bhavanthu"
                </p>
                <p className="text-muted-foreground">
                  We stand to work with fairness and create systems with aid in the welfare of everyone in the universe, humans, all species, plants and every living and non-living being in the universe. May the entire universe be prosperous in all aspects of life.
                </p>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20 mb-6">
                <p className="text-lg italic mb-2">
                  "Yasya Dviradavakthradyaaha Parishyatyaa Parashyatham
                  <br />
                  Vignam Nignanti Sathatham Vishwaksenam Thavaamshraye"
                </p>
                <p className="text-muted-foreground">
                  Enabling long term sustainable development without frictions in the system using the grace of Lord Vishwaksena.
                </p>
                <p className="text-sm text-right text-muted-foreground mt-2">
                  — Vishnu Sahasranamam
                </p>
              </div>
              
              <h4 className="text-lg font-medium mb-3">Process Objective</h4>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-lg italic mb-2">
                  "Vyavasaayo Vyavasthaano Samsthaano Jagasthitaha"
                </p>
                <p className="text-muted-foreground">
                  The world is operated by a set of well-defined processes. Processes define efficiency.
                </p>
                <p className="text-sm text-right text-muted-foreground mt-2">
                  — Vishnu Sahasranamam
                </p>
                <p className="mt-4 font-medium">
                  We aim to build products that use technology to improve the world around us.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 font-poppins">Our Mission</h3>
              <p className="text-lg max-w-3xl mx-auto">
                We aim to build products that use technology to improve the world around us.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 font-poppins text-center">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-medium text-center mb-3 text-primary">Innovation</h4>
                <p className="text-muted-foreground text-center">
                  Constantly seeking new and better ways to solve problems and create value.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-medium text-center mb-3 text-primary">Integrity</h4>
                <p className="text-muted-foreground text-center">
                  Upholding the highest ethical standards in all our actions and decisions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-medium text-center mb-3 text-primary">Excellence</h4>
                <p className="text-muted-foreground text-center">
                  Striving for the highest quality in everything we do.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-medium text-center mb-3 text-primary">Collaboration</h4>
                <p className="text-muted-foreground text-center">
                  Working together to achieve common goals and mutual success.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-medium text-center mb-3 text-primary">Respect</h4>
                <p className="text-muted-foreground text-center">
                  Valuing diversity of thought, background, and perspective.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-medium text-center mb-3 text-primary">Sustainability</h4>
                <p className="text-muted-foreground text-center">
                  Creating solutions that benefit both people and the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VisionPage;
