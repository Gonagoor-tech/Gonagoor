
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Working with Gonagoor Tech has enabled us to achieve high efficiency which has enabled us to deliver several key projects on time amidst several constraints.",
    author: "Jayaprakash Rao",
    title: "Vice President",
    company: "Cognitive Clouds"
  },
  {
    quote: "The process efficiency achieved in conducting software guided programs has been outstanding.",
    author: "Prasad MNR",
    title: "President",
    company: "Bengaluru Gayana Samaj"
  },
  {
    quote: "The upskilling and Faculty development programs have helped our department gain a first hand insight into the functioning of the industry on data science and web applications at scale.",
    author: "Dr. Vibha MB",
    title: "Associate Professor",
    company: "Dayananda Sagar"
  },
  {
    quote: "The Startup Incubation program has helped us level up aspects of our business and helped position ourselves in the market in a timely and affordable manner.",
    author: "Chaitra Acharya",
    title: "Founder, CEO",
    company: "Migration Light"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    const intervalId = setInterval(next, 6000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="What our clients say about working with us"
          className="text-background"
          subtitleClassName="text-background/70"
        />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div className="relative h-[350px] md:h-[250px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute w-full opacity-0 transition-all duration-500 ease-in-out",
                    index === activeIndex && "opacity-100",
                    index === activeIndex && direction === 'right' && "animate-slide-in-right",
                    index === activeIndex && direction === 'left' && "animate-slide-in-left"
                  )}
                >
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-primary/60 mx-auto mb-6" />
                    <blockquote className="text-xl md:text-2xl mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-col items-center">
                      <p className="font-medium text-lg">{testimonial.author}</p>
                      <p className="text-background/70">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-background/20 text-background hover:bg-background/10 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    idx === activeIndex ? "bg-primary w-8" : "bg-background/30"
                  )}
                  onClick={() => {
                    const newDirection = idx > activeIndex ? 'right' : 'left';
                    setDirection(newDirection as 'left' | 'right');
                    setActiveIndex(idx);
                  }}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-background/20 text-background hover:bg-background/10 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
