
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Enhanced background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 -z-20"></div>
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10 -z-10"></div>
      
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-bl-full -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-accent/5 rounded-tr-full -z-10"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
