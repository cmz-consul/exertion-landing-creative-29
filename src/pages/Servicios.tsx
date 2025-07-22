
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import ServicesSection from "@/components/ServicesSection";
import { Server, Bot, Compass, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import ServicioDetallado from "@/components/servicios/ServicioDetallado";
import ProcesoEtapa from "@/components/servicios/ProcesoEtapa";

const Servicios = () => {
  const serviciosDetallados = [
    {
      title: "Implementación de Sistemas",
      description: "Soluciones tecnológicas adaptadas a las necesidades únicas de su empresa para optimizar operaciones y mejorar la eficiencia.",
      icon: Server,
      path: "/servicios/implementacion",
      features: [
        "Sistemas ERP personalizados",
        "Soluciones CRM",
        "Sistemas de gestión de datos",
        "Inteligencia empresarial"
      ]
    },
    {
      title: "Soluciones de Automatización",
      description: "Transforme sus procesos empresariales mediante la automatización inteligente, reduciendo costos y minimizando errores.",
      icon: Bot,
      path: "/servicios/automatizacion",
      features: [
        "Automatización de procesos (BPA)",
        "Robotización de procesos (RPA)",
        "Flujos de trabajo inteligentes",
        "Integración de sistemas"
      ]
    },
    {
      title: "Servicios de Consultoría",
      description: "Asesoramiento experto para optimizar sus operaciones tecnológicas y alinearlas con sus objetivos de negocio.",
      icon: Compass,
      path: "/servicios/consultoria",
      features: [
        "Consultoría estratégica",
        "Optimización de procesos",
        "Auditoría de sistemas",
        "Gestión del cambio"
      ]
    },
    {
      title: "Transformación Digital",
      description: "Impulse su negocio hacia el futuro con estrategias digitales innovadoras que redefinen cómo crea y entrega valor.",
      icon: Lightbulb,
      path: "/servicios/transformacion",
      features: [
        "Estrategia digital",
        "Gestión de datos",
        "Tecnologías cloud",
        "Inteligencia artificial"
      ]
    }
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="Nuestros Servicios"
        description="Soluciones integrales para la gestión y automatización de su negocio"
        breadcrumbs={[
          { label: "Inicio", path: "/" },
          { label: "Servicios" }
        ]}
      />
      
      {/* Main Services Section */}
      <section className="py-10">
        <ServicesSection />
      </section>
      
      {/* Servicios Detallados */}
      <section className="section-data py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Servicios Especializados</h2>
            
            <div className="space-y-10">
              {serviciosDetallados.map((servicio, index) => (
                <ServicioDetallado 
                  key={index}
                  title={servicio.title}
                  description={servicio.description}
                  icon={servicio.icon}
                  path={servicio.path}
                  features={servicio.features}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services Information */}
      <section className="section-main py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">¿Cómo Funciona Nuestro Proceso?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <ProcesoEtapa 
                number={1}
                title="Consulta Inicial"
                description="Evaluamos sus necesidades actuales y objetivos para desarrollar una estrategia personalizada."
              />
              
              <ProcesoEtapa 
                number={2}
                title="Implementación"
                description="Nuestro equipo de expertos implementa las soluciones diseñadas con mínima interrupción de sus operaciones."
              />
              
              <ProcesoEtapa 
                number={3}
                title="Soporte Continuo"
                description="Proporcionamos capacitación y soporte continuo para garantizar el éxito a largo plazo de su implementación."
              />
            </div>
            
            <div className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700">
              <h3 className="text-2xl font-bold mb-4 text-center">¿Necesita una solución personalizada?</h3>
              <p className="text-center mb-6">Contáctenos hoy para discutir cómo podemos adaptar nuestros servicios a sus necesidades específicas.</p>
              <div className="flex justify-center">
                <Link 
                  to="/contacto" 
                  className="px-6 py-3 bg-exertion-600 hover:bg-exertion-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Solicitar Consulta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Servicios;
