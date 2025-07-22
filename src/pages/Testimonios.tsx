
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturedSuccessStory from "@/components/testimonials/FeaturedSuccessStory";

const Testimonios = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Testimonios de Clientes"
        description="Descubra lo que nuestros clientes dicen sobre nuestras soluciones"
        breadcrumbs={[
          { label: "Inicio", path: "/" },
          { label: "Testimonios" }
        ]}
      />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Featured Client Success Story */}
      <FeaturedSuccessStory />
    </PageLayout>
  );
};

export default Testimonios;
