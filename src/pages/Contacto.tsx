
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import ContactInfo from "@/components/contacto/ContactInfo";
import ContactFAQ from "@/components/contacto/ContactFAQ";

const Contacto = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Contacto"
        description="Estamos aquí para ayudarle. Contáctenos para cualquier consulta o para programar una demostración."
        breadcrumbs={[
          { label: "Inicio", path: "/" },
          { label: "Contacto" }
        ]}
      />
      
      {/* Contact Information */}
      <section className="section-main py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1">
              {/* Contact Information */}
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-data py-10">
        <div className="container mx-auto px-4">
          <ContactFAQ />
        </div>
      </section>
    </PageLayout>
  );
};

export default Contacto;
