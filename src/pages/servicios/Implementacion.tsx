
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Server, Database, BarChart, Users } from "lucide-react";

const Implementacion = () => {
  const servicios = [
    {
      title: "Sistemas ERP",
      icon: Server,
      description: "Implementación de sistemas de planificación de recursos empresariales adaptados a su sector y necesidades específicas, para integrar todas las operaciones comerciales clave.",
      beneficios: [
        "Procesos empresariales centralizados",
        "Mejora en la toma de decisiones",
        "Automatización de tareas repetitivas",
        "Reducción de costos operativos"
      ]
    },
    {
      title: "Sistemas CRM",
      icon: Users,
      description: "Soluciones de gestión de relaciones con clientes que mejoran la experiencia del cliente y optimizan sus procesos de ventas y marketing.",
      beneficios: [
        "Mejor seguimiento de leads y oportunidades",
        "Automatización de marketing",
        "Análisis detallado del rendimiento comercial",
        "Mejora en la retención de clientes"
      ]
    },
    {
      title: "Sistemas de Gestión de Datos",
      icon: Database,
      description: "Implementación de soluciones robustas para almacenar, gestionar y analizar grandes volúmenes de datos empresariales de manera eficiente.",
      beneficios: [
        "Integridad y seguridad de datos",
        "Acceso rápido a información crítica",
        "Mejora en la calidad de datos",
        "Cumplimiento normativo"
      ]
    },
    {
      title: "Sistemas de Inteligencia Empresarial",
      icon: BarChart,
      description: "Herramientas avanzadas de análisis y visualización de datos que transforman la información en conocimientos accionables para su negocio.",
      beneficios: [
        "Dashboards interactivos personalizados",
        "Informes automatizados",
        "Identificación de tendencias de mercado",
        "Análisis predictivo"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Implementación de Sistemas</h1>
              <p className="text-xl mb-8">
                Soluciones tecnológicas adaptadas a las necesidades únicas de su empresa
              </p>
              <div className="flex justify-center space-x-2 text-sm">
                <a href="/" className="hover:underline">Inicio</a>
                <ChevronRight size={16} />
                <a href="/servicios" className="hover:underline">Servicios</a>
                <ChevronRight size={16} />
                <span className="font-medium">Implementación de Sistemas</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Details */}
        <section className="section-main py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Nuestras Soluciones de Implementación</h2>
                <p className="text-lg text-zinc-400">
                  En Exertion Solutions, nos especializamos en implementar sistemas empresariales que optimizan sus operaciones,
                  mejoran la eficiencia y proporcionan la infraestructura tecnológica necesaria para su crecimiento.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {servicios.map((servicio, index) => (
                  <div key={index} className="bg-zinc-800 rounded-xl p-6 shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                    <div className="w-12 h-12 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mb-4">
                      <servicio.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{servicio.title}</h3>
                    <p className="text-zinc-400 mb-4">{servicio.description}</p>
                    <div>
                      <h4 className="font-medium mb-2 text-exertion-400">Beneficios principales:</h4>
                      <ul className="space-y-1">
                        {servicio.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-start text-zinc-300">
                            <span className="text-exertion-500 mr-2">•</span>
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700">
                <h3 className="text-2xl font-bold mb-4 text-center">Nuestro Proceso de Implementación</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4">
                    <div className="w-10 h-10 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">1</div>
                    <h4 className="font-medium mb-2">Análisis</h4>
                    <p className="text-sm text-zinc-400">Evaluación detallada de sus necesidades y objetivos empresariales</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-10 h-10 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">2</div>
                    <h4 className="font-medium mb-2">Diseño</h4>
                    <p className="text-sm text-zinc-400">Creación de una solución personalizada basada en sus requisitos específicos</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-10 h-10 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">3</div>
                    <h4 className="font-medium mb-2">Implementación</h4>
                    <p className="text-sm text-zinc-400">Despliegue eficiente con mínima interrupción en sus operaciones</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-10 h-10 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">4</div>
                    <h4 className="font-medium mb-2">Soporte</h4>
                    <p className="text-sm text-zinc-400">Mantenimiento continuo y asistencia técnica para garantizar resultados óptimos</p>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <a 
                    href="/contacto" 
                    className="px-6 py-3 bg-exertion-600 hover:bg-exertion-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Solicitar una Consulta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Implementacion;
