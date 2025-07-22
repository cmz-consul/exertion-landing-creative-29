
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Rocket, Database, Cloud, Shield, Cpu } from "lucide-react";

const Transformacion = () => {
  const pilares = [
    {
      titulo: "Estrategia Digital",
      descripcion: "Desarrollamos una hoja de ruta clara para su transformación digital, alineando tecnología con objetivos de negocio.",
      icono: Rocket,
      color: "bg-zinc-800 text-exertion-400"
    },
    {
      titulo: "Gestión de Datos",
      descripcion: "Implementamos soluciones para aprovechar al máximo sus datos, convirtiéndolos en un activo estratégico.",
      icono: Database,
      color: "bg-zinc-800 text-purple-400"
    },
    {
      titulo: "Infraestructura en la Nube",
      descripcion: "Migramos y optimizamos sus sistemas en entornos cloud para mayor flexibilidad y escalabilidad.",
      icono: Cloud,
      color: "bg-zinc-800 text-green-400"
    },
    {
      titulo: "Ciberseguridad",
      descripcion: "Implementamos protecciones robustas para garantizar la seguridad de sus datos y sistemas en el entorno digital.",
      icono: Shield,
      color: "bg-zinc-800 text-red-400"
    },
    {
      titulo: "Inteligencia Artificial",
      descripcion: "Incorporamos IA y machine learning para automatizar procesos y obtener insights valiosos de sus datos.",
      icono: Cpu,
      color: "bg-zinc-800 text-amber-400"
    }
  ];

  const fases = [
    {
      numero: 1,
      titulo: "Evaluación",
      acciones: [
        "Análisis de madurez digital",
        "Identificación de oportunidades",
        "Definición de objetivos clave"
      ]
    },
    {
      numero: 2,
      titulo: "Planificación",
      acciones: [
        "Desarrollo de estrategia digital",
        "Priorización de iniciativas",
        "Asignación de recursos"
      ]
    },
    {
      numero: 3,
      titulo: "Implementación",
      acciones: [
        "Ejecución de iniciativas priorizadas",
        "Gestión del cambio organizacional",
        "Desarrollo de capacidades digitales"
      ]
    },
    {
      numero: 4,
      titulo: "Optimización",
      acciones: [
        "Medición de resultados",
        "Ajustes y mejoras continuas",
        "Escalabilidad de soluciones"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="section-header py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transformación Digital</h1>
              <p className="text-xl mb-8">
                Impulse su negocio hacia el futuro con estrategias digitales innovadoras
              </p>
              <div className="flex justify-center space-x-2 text-sm">
                <a href="/" className="hover:underline">Inicio</a>
                <ChevronRight size={16} />
                <a href="/servicios" className="hover:underline">Servicios</a>
                <ChevronRight size={16} />
                <span className="font-medium">Transformación Digital</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Intro Section */}
        <section className="py-16 bg-zinc-900 text-zinc-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="md:flex items-center gap-12 mb-12">
                <div className="md:w-1/2 mb-8 md:mb-0 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Transformación Digital"
                    className="w-full h-80 object-cover rounded-xl shadow-lg relative z-10"
                  />
                  <div className="absolute top-6 -right-6 w-full h-full bg-zinc-800 rounded-xl -z-0 hidden md:block"></div>
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">Reinvente su Negocio en la Era Digital</h2>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    La transformación digital no se trata solo de implementar nuevas tecnologías. Es un cambio cultural y estratégico que redefine cómo su empresa crea y entrega valor a sus clientes en el mundo digital.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    En Exertion Solutions, le guiamos a través de este viaje, ayudándole a adaptar su modelo de negocio, optimizar procesos y crear experiencias digitales excepcionales que le mantengan competitivo en un mercado en constante evolución.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-zinc-800 rounded-xl shadow-sm">
                <div>
                  <h3 className="text-xl font-semibold mb-3">¿Por qué transformarse digitalmente?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-exertion-500 mr-2">•</span>
                      <span className="text-zinc-300">Aumente su eficiencia operativa y reduzca costos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-exertion-500 mr-2">•</span>
                      <span className="text-zinc-300">Mejore la experiencia y satisfacción del cliente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-exertion-500 mr-2">•</span>
                      <span className="text-zinc-300">Obtenga insights valiosos a partir de sus datos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-exertion-500 mr-2">•</span>
                      <span className="text-zinc-300">Manténgase competitivo en mercados disruptivos</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Desafíos que resolvemos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-exertion-500 mr-2">•</span>
                      <span className="text-zinc-300">Resistencia organizacional al cambio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-exertion-500 mr-2">•</span>
                      <span className="text-zinc-300">Silos de información y sistemas fragmentados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-exertion-500 mr-2">•</span>
                      <span className="text-zinc-300">Carencia de habilidades digitales internas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-exertion-500 mr-2">•</span>
                      <span className="text-zinc-300">Complejidad tecnológica y selección de soluciones</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Pilares de la Transformación Digital */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-10 text-center">Pilares de la Transformación Digital</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pilares.map((pilar, index) => (
                  <div key={index} className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 ${pilar.color} rounded-full flex items-center justify-center mb-4`}>
                      <pilar.icono size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{pilar.titulo}</h3>
                    <p className="text-zinc-400">{pilar.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Metodología */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-10 text-center">Nuestra Metodología</h2>
              
              <div className="bg-zinc-800/70 rounded-xl p-8 border border-zinc-700">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {fases.map((fase, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-exertion-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-bold">{fase.numero}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{fase.titulo}</h3>
                      <ul className="space-y-1 text-left">
                        {fase.acciones.map((accion, idx) => (
                          <li key={idx} className="flex items-start text-zinc-400 text-sm">
                            <span className="text-exertion-500 mr-2">•</span>
                            {accion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Ejemplos de Éxito */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Historias de Transformación</h2>
              
              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-l-4 border-exertion-500 pl-6">
                    <h3 className="text-xl font-semibold mb-3">Empresa Manufacturera</h3>
                    <p className="text-zinc-400 mb-2">
                      Implementamos una solución IoT para monitorización de equipos en tiempo real, 
                      reduciendo el tiempo de inactividad en un 35% y los costos de mantenimiento en un 28%.
                    </p>
                    <div className="text-sm text-exertion-400 font-medium">
                      ROI alcanzado en 9 meses
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-exertion-500 pl-6">
                    <h3 className="text-xl font-semibold mb-3">Compañía de Servicios Financieros</h3>
                    <p className="text-zinc-400 mb-2">
                      Desarrollamos una plataforma digital unificada que redujo los tiempos de procesamiento 
                      de solicitudes en un 75% e incrementó la satisfacción del cliente en un 40%.
                    </p>
                    <div className="text-sm text-exertion-400 font-medium">
                      Aumento del 23% en conversión de clientes potenciales
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Inicie su Viaje de Transformación Digital</h3>
              <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                Descubra cómo podemos ayudarle a navegar por su transformación digital con confianza y obtener resultados tangibles.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="/contacto" 
                  className="px-6 py-3 bg-exertion-600 hover:bg-exertion-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Solicitar Evaluación Digital
                </a>
                <a 
                  href="/casos-de-exito" 
                  className="px-6 py-3 bg-zinc-800 border border-zinc-700 hover:border-exertion-500 text-exertion-400 font-medium rounded-lg shadow-sm hover:shadow transition-all"
                >
                  Ver Casos de Éxito
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transformacion;
