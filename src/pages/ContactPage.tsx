import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, HelpCircle, Lightbulb, ArrowRight, Sparkles, PhoneCall, Building2 } from 'lucide-react'; // Added more icons
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What technologies does GonagoorTech specialize in?",
    answer: "We specialize in a wide range of cutting-edge technologies including full-stack web development, mobile app development, robust cloud infrastructure, advanced AI/ML solutions, IoT integration, and pioneering aerospace technologies. Our commitment to continuous learning ensures we always provide the most innovative and relevant solutions."
  },
  {
    question: "How does your R&D approach differ from others?",
    answer: "Our research and development approach is deeply rooted in our core values, blending traditional wisdom with modern scientific rigor. We focus on creating sustainable, ethical, and profoundly impactful technologies that serve the greater good. Our methodology combines rigorous academic research with practical, real-world application to build solutions that address complex challenges effectively and responsibly."
  },
  {
    question: "Can you work with startups at early stages?",
    answer: "Absolutely. We pride ourselves on having extensive experience collaborating with startups across all stages of their lifecycle, from initial idea conceptualization to rapid growth and scaling. We provide tailored consulting services designed to help startups build solid technical foundations, develop robust Minimum Viable Products (MVPs), and iterate efficiently based on crucial market feedback."
  },
  {
    question: "What industries do you primarily serve?",
    answer: "Our expertise spans across diverse industries including healthcare, education, finance, aerospace, agriculture, and manufacturing. This broad experience allows us to bring unique, cross-industry insights and innovative approaches to solve complex problems, fostering holistic and effective solutions."
  },
  {
    question: "How does GonagoorTech incorporate sustainability in its solutions?",
    answer: "Sustainability is not just a feature, but a fundamental principle at the core of our development philosophy. We meticulously design our solutions with minimal environmental impact, rigorously optimize for energy efficiency, and consider the entire lifecycle of our products from inception to disposal. Furthermore, we actively pursue projects that directly contribute to environmental sustainability and broader social good initiatives."
  }
];

const ContactPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-background to-accent/10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        {/* Animated blobs for visual interest */}
        <div className="absolute top-10 left-20 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6">
            <PhoneCall className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </div>

          <SectionHeading
            title={<>Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span></>}
            subtitle="We're eager to hear from you and explore how we can bring your vision to life. Reach out today!"
            centered={true}
            className="mb-0" // Remove default margin as it's within a hero
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6 leading-relaxed">
            Whether you have a project in mind, a question about our services, or just want to say hello, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information Column */}
            <div className="relative p-8 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 group transition-all duration-500 hover:scale-[1.01]">
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 delay-100"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-foreground mb-8">Our Details</h3>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start bg-card/70 backdrop-blur-md p-4 rounded-xl border border-border/50 transition-all duration-300 hover:border-primary hover:shadow-md">
                    <MapPin className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">Visit Us</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        No 78, South Sparta Apartments, Flat no 206,
                        <br />JP Nagar 5th phase, Bengaluru, IN
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start bg-card/70 backdrop-blur-md p-4 rounded-xl border border-border/50 transition-all duration-300 hover:border-primary hover:shadow-md">
                    <Mail className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">Email Us</h4>
                      <a
                        href="mailto:writetous@gonagoortech.com"
                        className="text-primary hover:underline font-medium transition-colors text-lg"
                      >
                        writetous@gonagoortech.com
                      </a>
                    </div>
                  </div>

                  {/* Registration Details */}
                  <div className="bg-card/70 backdrop-blur-md p-4 rounded-xl border border-border/50 transition-all duration-300 hover:border-primary hover:shadow-md">
                    <h4 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                      <Building2 className="w-6 h-6 text-primary flex-shrink-0" /> Registration Details
                    </h4>
                    <p className="text-muted-foreground mb-1">
                      <span className="font-medium text-foreground">Udyam Number:</span> UDYAM-KR-03-0464348
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">GST No:</span> 29AWPPP8448J1ZH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="relative p-8 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 group transition-all duration-500 hover:scale-[1.01]">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 delay-100"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h3>

                <form
                  action="https://formspree.io/f/xkgreqrp" // Ensure this is your correct Formspree endpoint
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-5 py-3 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 placeholder:text-muted-foreground"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-5 py-3 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 placeholder:text-muted-foreground"
                      placeholder="user@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5} // Increased rows for more space
                      required
                      className="w-full px-5 py-3 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 placeholder:text-muted-foreground"
                      placeholder="Tell us about your project or inquiry in detail..."
                    />
                  </div>

                  {/* Honeypot field to prevent spam */}
                  <input type="text" name="_honey" style={{ display: "none" }} />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full px-8 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title={<>Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Questions</span></>}
            subtitle="Find quick answers to the most common inquiries about our services and operations."
            centered={true}
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-xl border border-border/60 p-6 md:p-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/40 last:border-0 py-2" // Added vertical padding
                >
                  <AccordionTrigger className="text-left py-4 px-2 text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200 [&[data-state=open]>svg]:rotate-90">
                    <HelpCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> {/* Icon added */}
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="animate-accordion-down">
                    <p className="text-muted-foreground text-base py-2 px-2 pl-8 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;