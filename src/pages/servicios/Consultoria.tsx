
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Lightbulb, Compass, LineChart, BadgeCheck, Users } from "lucide-react";

const Consultoria = () => {
  const serviciosConsultoria = [
    {
      titulo: "Consultoría Estratégica",
      descripcion: "Asesoramiento experto en la planificación y ejecución de transformaciones tecnológicas alineadas con sus objetivos de negocio.",
      detalles: [
        "Evaluación de madurez digital",
        "Desarrollo de roadmaps tecnológicos",
        "Análisis de retorno de inversión",
        "Gestión del cambio organizacional"
      ],
      icono: Compass
    },
    {
      titulo: "Optimización de Procesos",
      descripcion: "Identificación y rediseño de procesos para eliminar ineficiencias y maximizar el rendimiento operativo.",
      detalles: [
        "Mapeo y análisis de procesos actuales",
        "Identificación de oportunidades de mejora",
        "Rediseño e implementación de nuevos flujos de trabajo",
        "Medición y optimización continua"
      ],
      icono: LineChart
    },
    {
      titulo: "Auditoría de Sistemas",
      descripcion: "Evaluación exhaustiva de sus sistemas tecnológicos para identificar riesgos, oportunidades de mejora y cumplimiento normativo.",
      detalles: [
        "Análisis de seguridad y vulnerabilidades",
        "Evaluación de rendimiento de sistemas",
        "Revisión de cumplimiento regulatorio",
        "Recomendaciones de optimización"
      ],
      icono: BadgeCheck
    },
    {
      titulo: "Gestión del Cambio",
      descripcion: "Estrategias y tácticas para facilitar la adopción de nuevas tecnologías y procesos en toda su organización.",
      detalles: [
        "Programas de formación a medida",
        "Estrategias de comunicación interna",
        "Gestión de resistencia al cambio",
        "Evaluación del impacto organizacional"
      ],
      icono: Users
    }
  ];

  const testimonios = [
    {
      texto: "El equipo de consultoría de Exertion transformó nuestra visión tecnológica. Su enfoque estratégico nos permitió implementar cambios que han generado un ROI del 300% en solo 18 meses.",
      autor: "Ana García",
      cargo: "Directora de Innovación, Global Retail Corp."
    },
    {
      texto: "La auditoría de sistemas realizada por Exertion identificó vulnerabilidades críticas y nos proporcionó un plan claro para resolverlas. Su expertise fue invaluable para nuestro negocio.",
      autor: "Carlos Martínez",
      cargo: "CTO, FinTech Solutions"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="section-header py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Servicios de Consultoría</h1>
              <p className="text-xl mb-8">
                Asesoramiento experto para optimizar sus operaciones tecnológicas
              </p>
              <div className="flex justify-center space-x-2 text-sm">
                <a href="/" className="hover:underline">Inicio</a>
                <ChevronRight size={16} />
                <a href="/servicios" className="hover:underline">Servicios</a>
                <ChevronRight size={16} />
                <span className="font-medium">Consultoría</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Intro Section */}
        <section className="section-main py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-zinc-800 text-exertion-400 rounded-full flex items-center justify-center">
                  <Lightbulb size={32} />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center text-zinc-100">Consultoría de Sistemas de Gestión Empresarial</h2>
              <p className="text-lg text-zinc-400 text-center mb-8">
                En Exertion Solutions, nuestro equipo de consultores combina experiencia en tecnología y 
                conocimiento de negocios para ayudarle a tomar decisiones informadas y estratégicas que 
                impulsen su crecimiento y competitividad.
              </p>
              
              <div className="bg-zinc-800/50 rounded-xl p-8 shadow-md border border-zinc-700">
                <h3 className="text-xl font-semibold mb-4 text-center text-zinc-100">Nuestro Enfoque de Consultoría</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <h4 className="font-medium mb-2 text-zinc-100">Comprensión</h4>
                    <p className="text-sm text-zinc-400">
                      Analizamos profundamente su empresa, objetivos y desafíos actuales
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <h4 className="font-medium mb-2 text-zinc-100">Asesoramiento</h4>
                    <p className="text-sm text-zinc-400">
                      Desarrollamos estrategias y recomendaciones personalizadas y accionables
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <h4 className="font-medium mb-2 text-zinc-100">Acompañamiento</h4>
                    <p className="text-sm text-zinc-400">
                      Apoyamos la implementación y medimos el impacto para garantizar resultados
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Servicios de Consultoría */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center text-zinc-100">Nuestros Servicios de Consultoría</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {serviciosConsultoria.map((servicio, index) => (
                  <div key={index} className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mb-4">
                      <servicio.icono size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-zinc-100">{servicio.titulo}</h3>
                    <p className="text-zinc-400 mb-4">{servicio.descripcion}</p>
                    <ul className="space-y-1">
                      {servicio.detalles.map((detalle, idx) => (
                        <li key={idx} className="flex items-start text-zinc-400 text-sm">
                          <span className="text-exertion-500 mr-2">•</span>
                          {detalle}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Testimonios */}
              <div className="bg-zinc-800/30 rounded-xl p-8 border border-zinc-700 mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center text-zinc-100">Lo Que Dicen Nuestros Clientes</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonios.map((testimonio, index) => (
                    <div key={index} className="bg-zinc-800 rounded-lg p-6 shadow-sm border border-zinc-700">
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-exertion-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9995 22.0001C6.47931 22.0001 2.00049 17.5213 2.00049 12.0011C2.00049 6.48083 6.47931 2.00201 11.9995 2.00201C17.5198 2.00201 21.9986 6.48083 21.9986 12.0011C21.9986 17.5213 17.5198 22.0001 11.9995 22.0001ZM9.55916 13.4421C9.55916 13.9828 9.86881 14.4443 10.3093 14.6194C10.7497 14.7946 11.2522 14.6627 11.5509 14.3639L14.5517 11.3631C14.7469 11.1679 14.7469 10.8514 14.5517 10.6561C14.3564 10.4609 14.0399 10.4609 13.8447 10.6561L11.1173 13.3835V6.50039C11.1173 6.22425 10.8934 6.00039 10.6173 6.00039C10.3411 6.00039 10.1173 6.22425 10.1173 6.50039L10.1173 13.4421L9.55916 13.4421Z" />
                        </svg>
                      </div>
                      <p className="text-zinc-300 italic mb-4">{testimonio.texto}</p>
                      <div>
                        <p className="font-semibold text-zinc-100">{testimonio.autor}</p>
                        <p className="text-sm text-zinc-500">{testimonio.cargo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA - Removed button as requested */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-zinc-100">¿Necesita asesoramiento experto?</h3>
                <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                  Nuestros consultores están listos para ayudarle a optimizar sus operaciones tecnológicas y alcanzar sus objetivos empresariales.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consultoria;
