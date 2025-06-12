
import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data
const faqs = [
  {
    question: "What technologies does GonagoorTech specialize in?",
    answer: "We specialize in a wide range of technologies including full-stack web development, mobile app development, cloud infrastructure, AI/ML, IoT solutions, and aerospace technologies. Our team keeps up with the latest advancements to provide cutting-edge solutions."
  },
  {
    question: "How does your R&D approach differ from others?",
    answer: "Our research and development approach is rooted in our company's core values. We focus on creating sustainable, ethical, and impactful technologies that serve the greater good. We combine academic rigor with practical application to build solutions that address real-world challenges."
  },
  {
    question: "Can you work with startups at early stages?",
    answer: "Absolutely. We have extensive experience working with startups at all stages, from idea conceptualization to growth and scaling. We provide tailored consulting services to help startups build solid technical foundations, develop MVPs, and iterate based on market feedback."
  },
  {
    question: "What industries do you primarily serve?",
    answer: "We work across various industries including healthcare, education, finance, aerospace, agriculture, and manufacturing. Our diverse experience allows us to bring cross-industry insights to solve complex problems with innovative approaches."
  },
  {
    question: "How does GonagoorTech incorporate sustainability in its solutions?",
    answer: "Sustainability is at the core of our development philosophy. We design our solutions with minimal environmental impact, optimize for energy efficiency, and consider the entire lifecycle of our products. We also actively pursue projects that contribute to environmental sustainability and social good."
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Get in touch with our team to discuss your requirements"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-medium mb-6">Our Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    No 78, South Sparta Apartments, Flat no 206, 
                    <br />JP Nagar 5th phase
                    <br />Bengaluru, IN
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:prashanth@gonagoortech.com" 
                    className="text-primary hover:underline hover:text-primary/80 transition-colors"
                  >
                    prashanth@gonagoortech.com
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Registration details</h4>
                <p className="text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">Udyam Number:</span> UDYAM-KR-03-0464348
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">GST No:</span> 29AWPPP8448J1ZH
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-medium mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <Button type="submit" className="w-full hover:bg-primary/90 transform hover:-translate-y-0.5 transition-all">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-20 bg-secondary/10 mt-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Answers to common questions about our services"
          />
          
          <div className="max-w-3xl mx-auto mt-12 glass p-6 md:p-8 shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/60 last:border-0">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="animate-accordion-down">
                    <p className="text-muted-foreground py-2 px-1">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
