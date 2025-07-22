
import React, { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import LatestClientsSection from "@/components/LatestClientsSection";
import VisitCounter from "@/components/VisitCounter";

const Index = () => {
  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
          el.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Latest Clients Section */}
      <LatestClientsSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Visit Counter */}
      <VisitCounter />
    </PageLayout>
  );
};

export default Index;
