import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { FileText, Award, Calendar, Users, Shield, Lightbulb } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const PatentsPage: React.FC = () => {
  const patentStats = [
    { label: 'Patents Filed', value: '23', icon: FileText },
    { label: 'Patents Published', value: '21', icon: Award },
    { label: 'Applications Pending', value: '2', icon: Calendar },
    { label: 'International Patents', value: '8', icon: Shield },
  ];

  const patentCategories = [
    {
      title: 'Aerospace Technology',
      count: 8,
      description: 'Patents related to drone technology, navigation systems, and aerospace innovations',
      icon: '🚁',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI & Machine Learning',
      count: 6,
      description: 'Artificial intelligence algorithms, machine learning models, and data processing',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Software Solutions',
      count: 4,
      description: 'Software architectures, user interfaces, and system optimization technologies',
      icon: '💻',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Mobility & Transportation',
      count: 3,
      description: 'Electric vehicle technologies, battery management, and smart transportation',
      icon: '🚲',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const allRecentPatents = [
    {
      title: 'Efficient Management of Social Networking Principles for Dynamic Application Network Clustering for Effective Governance',
      patentNumber: 'TEMP/E-1/28817/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'Aerospace'
    },
    {
      title: 'Replication Factors in CubeSats as a Replacement for Larger Satellites',
      patentNumber: 'TEMP/E-1/31817/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'Aerospace'
    },
    {
      title:'Structural Testing Methodology for Long Operational CubeSat Programs',
      patentNumber: 'TEMP/E-1/32321/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'Aerospace'
    },
    {
      title: 'Removal of External Memory and Expansion of Complete Memory as a Hash Map of Registers Within the CPU',
      patentNumber: 'TEMP/E-1/33498/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'Software'
    },
    {
      title: 'Predictive Garbage Collector in programming languages',
      patentNumber: 'TEMP/E-1/33526/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'Software'
    },
    {
      title: 'Nozzle Design Changes for Enhanced Thrust Vectoring in Jet Engines',
      patentNumber: 'TEMP/E-1/40035/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'Aerospace'
    },
    {
      title:'Development of Electronics and Subsystems for Deep Space Exploration Pro',
      patentNumber: 'TEMP/E-1/40060/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'Aerospace'
    },
    {
      title: 'Derivation of Vector Mathematics for Intelligence Based on Permutations ',
      patentNumber: 'TEMP/E-1/52173/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'Mathamatics'
    },
    {
      title: 'Development of nano nozzles for rocket engines for deep space exploration',
      patentNumber: 'TEMP/E-1/52192/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'Aerospace'
    },
    {
      title: 'Alternate to Attention-Based Layers Using Language Principles in Sanskrit for Enhanced Natural Language Processing Models',
      patentNumber: 'TEMP/E-1/52467/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'AI & ML'
    },
    {
      title:'Conversion of Sanskrit Tokens into Vectors Based on the Grammarian Principles by Panini and Sound Knowledge from Maheshwari Sutrani',
      patentNumber: 'TEMP/E-1/52471/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'AI & ML'
    },
    {
      title: 'Design of Mathematical Framework for a Quantum Computer Proving Simultaneous Position and Velocity of Quantam Physics',
      patentNumber: 'TEMP/E-1/52477/2025-CHE',
      status: 'Published',
      date: '2025',
      category: 'Quantum'
    }
  ];

  const [showAllPatents, setShowAllPatents] = useState(false);
  const initialPatentCount = 6;

  const patentsToDisplay = showAllPatents
    ? allRecentPatents
    : allRecentPatents.slice(0, initialPatentCount);

  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Lightbulb className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Innovation <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Protecting groundbreaking innovations through strategic intellectual property management.
                Our patent portfolio represents years of research and development across multiple technology domains.
              </p>
            </div>
          </div>
        </section>

        {/* Patent Statistics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Patent Portfolio Overview"
              subtitle="A comprehensive view of our intellectual property assets"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {patentStats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <IconComponent size={32} />
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Patent Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Technology Areas"
              subtitle="Our patents span across diverse technological domains"
            />

            <div className="grid md:grid-cols-2 gap-8">
              {patentCategories.map((category) => (
                <div
                  key={category.title}
                  className="group relative bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{category.icon}</div>
                      <div className="text-3xl font-bold text-primary">{category.count}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Patents */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Recent Patent Activity"
              subtitle="Latest additions to our intellectual property portfolio"
            />

            <div className="space-y-6">
              {patentsToDisplay.map((patent) => (
                <div
                  key={patent.patentNumber}
                  className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{patent.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          patent.status === 'Granted'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {patent.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <FileText size={16} />
                          {patent.patentNumber}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {patent.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={16} />
                          {patent.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* "See More/Show Less" Button */}
            {allRecentPatents.length > initialPatentCount && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAllPatents(!showAllPatents)}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg"
                >
                  {showAllPatents ? 'Show Less' : 'See More Patents'}
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default PatentsPage;