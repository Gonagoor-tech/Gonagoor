import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const NewsAndEventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      location: "Bangalore Convention Center",
      description: "Annual technology summit showcasing latest innovations in aerospace and AI.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      attendees: "500+"
    },
    {
      id: 2,
      title: "Drone Technology Workshop",
      date: "February 28, 2024",
      location: "GonagoorTech Campus",
      description: "Hands-on workshop on advanced drone technologies and applications.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
      attendees: "100+"
    },
    {
      id: 3,
      title: "AI & Machine Learning Conference",
      date: "January 20, 2024",
      location: "IIT Bangalore",
      description: "Conference focused on cutting-edge AI and machine learning technologies.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      attendees: "300+"
    }
  ];

  const companyUpdates = [
    {
      id: 1,
      title: "GonagoorTech Receives Major Defense Contract",
      date: "March 10, 2024",
      content: "We are proud to announce that GonagoorTech has been awarded a significant contract by the Indian Defense Ministry for developing next-generation surveillance drones.",
      type: "Contract Award"
    },
    {
      id: 2,
      title: "New AI Research Lab Inaugurated",
      date: "February 25, 2024",
      content: "Our state-of-the-art AI research laboratory has been officially inaugurated, featuring advanced computing infrastructure and dedicated research spaces.",
      type: "Infrastructure"
    },
    {
      id: 3,
      title: "Partnership with Leading Universities",
      date: "February 15, 2024",
      content: "GonagoorTech has established strategic partnerships with IIT Bangalore and IISc for collaborative research in aerospace and AI technologies.",
      type: "Partnership"
    },
    {
      id: 4,
      title: "Successful Test Flight of NanoGet X1",
      date: "January 30, 2024",
      content: "Our NanoGet X1 drone successfully completed its first autonomous surveillance mission, demonstrating exceptional performance and reliability.",
      type: "Product Update"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <SectionHeading 
            title="News & Events"
            subtitle="Stay updated with our latest events, achievements, and company milestones"
          />
        </div>

        {/* Event Gallery Section */}
        <section className="mb-20">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Event Gallery</h3>
            <p className="text-gray-600 max-w-2xl">
              Explore our participation in industry events, workshops, and conferences where we showcase our innovations and connect with the tech community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {event.attendees}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="text-sm">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Updates Section */}
        <section>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Updates</h3>
            <p className="text-gray-600 max-w-2xl">
              Latest news and announcements from GonagoorTech, including contract awards, partnerships, and product developments.
            </p>
          </div>

          <div className="space-y-6">
            {companyUpdates.map((update) => (
              <Card key={update.id} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {update.type}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {update.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2">{update.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {update.content}
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer ml-4" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium">
              Load More Updates
            </button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default NewsAndEventsPage;