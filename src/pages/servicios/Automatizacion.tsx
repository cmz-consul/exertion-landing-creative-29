
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, FileSearch, FileText, ClipboardCheck, Cog, FileCheck } from "lucide-react";

const Automatizacion = () => {
  const casos = [
    {
      titulo: "Digitalización de Archivos Físicos",
      cliente: "Empresa del Sector Legal",
      resultado: "Reducción del 75% en el tiempo de búsqueda de documentos, eliminación de espacios de almacenamiento físico y acceso instantáneo a documentos históricos.",
      icono: FileSearch
    },
    {
      titulo: "Flujos de Aprobación Documental",
      cliente: "Empresa Farmacéutica",
      resultado: "Reducción del ciclo de aprobación en un 60%, trazabilidad completa del proceso y cumplimiento normativo automatizado.",
      icono: ClipboardCheck
    },
    {
      titulo: "Indexación y Búsqueda Inteligente",
      cliente: "Institución Financiera",
      resultado: "Implementación de búsqueda contextual con un 95% de precisión, reduciendo de horas a segundos la localización de información crítica.",
      icono: FileCheck
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Automatización de Sistemas de Gestión Documental</h1>
              <p className="text-xl mb-8">
                Transforme su gestión documental con soluciones inteligentes y eficientes
              </p>
              <div className="flex justify-center space-x-2 text-sm">
                <a href="/" className="hover:underline">Inicio</a>
                <ChevronRight size={16} />
                <a href="/servicios" className="hover:underline">Servicios</a>
                <ChevronRight size={16} />
                <span className="font-medium">Automatización Documental</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="section-main py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="md:flex items-center gap-12 mb-16">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1470&q=80" 
                    alt="Automatización de gestión documental"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 text-zinc-100">Gestión Documental Inteligente</h2>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    Nuestras soluciones de automatización documental están diseñadas para transformar sus procesos de gestión de documentos, eliminando tareas manuales, garantizando el cumplimiento normativo y mejorando la accesibilidad a la información crítica de su empresa.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    Mediante tecnologías avanzadas de reconocimiento óptico de caracteres (OCR), procesamiento de lenguaje natural (NLP) y flujos de trabajo automatizados, convertimos su sistema de gestión documental en un activo estratégico para la toma de decisiones y la eficiencia operativa.
                  </p>
                </div>
              </div>
              
              {/* Servicios de automatización documental */}
              <h3 className="text-2xl font-bold mb-8 text-center text-zinc-100">Nuestros Servicios de Automatización Documental</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-zinc-800 rounded-xl p-6 shadow-md border border-zinc-700 transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mb-4">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-zinc-100">Digitalización e Indexación</h3>
                  <p className="text-zinc-400 mb-4">
                    Transformamos sus documentos físicos en activos digitales inteligentes mediante tecnologías avanzadas de escaneo, OCR y clasificación automática, facilitando su búsqueda y recuperación inmediata.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start text-zinc-400">
                      <span className="text-exertion-500 mr-2">•</span>
                      Digitalización de alta precisión
                    </li>
                    <li className="flex items-start text-zinc-400">
                      <span className="text-exertion-500 mr-2">•</span>
                      Metadatos inteligentes y categorización
                    </li>
                    <li className="flex items-start text-zinc-400">
                      <span className="text-exertion-500 mr-2">•</span>
                      Indexación contextual avanzada
                    </li>
                  </ul>
                </div>
                
                <div className="bg-zinc-800 rounded-xl p-6 shadow-md border border-zinc-700 transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mb-4">
                    <Cog size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-zinc-100">Flujos de Trabajo Documentales</h3>
                  <p className="text-zinc-400 mb-4">
                    Implementamos flujos de trabajo automatizados para la creación, revisión, aprobación y distribución de documentos, garantizando el cumplimiento de políticas y reduciendo significativamente los tiempos de proceso.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start text-zinc-400">
                      <span className="text-exertion-500 mr-2">•</span>
                      Circuitos de aprobación configurables
                    </li>
                    <li className="flex items-start text-zinc-400">
                      <span className="text-exertion-500 mr-2">•</span>
                      Notificaciones y alertas automáticas
                    </li>
                    <li className="flex items-start text-zinc-400">
                      <span className="text-exertion-500 mr-2">•</span>
                      Trazabilidad y auditoria completa
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Casos de éxito */}
              <div className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700 mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center text-zinc-100">Casos de Éxito en Automatización Documental</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {casos.map((caso, index) => (
                    <div key={index} className="bg-zinc-800 rounded-lg p-6 shadow-sm border border-zinc-700">
                      <div className="w-10 h-10 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mb-4">
                        <caso.icono size={20} />
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-zinc-100">{caso.titulo}</h4>
                      <p className="text-sm text-zinc-500 mb-3">{caso.cliente}</p>
                      <p className="text-zinc-300 text-sm">{caso.resultado}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Beneficios */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center text-zinc-100">Beneficios de la Automatización Documental</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
                    <h4 className="font-semibold mb-2 text-lg text-zinc-100">Reducción de Costos</h4>
                    <p className="text-zinc-400 text-sm">Disminución de hasta un 70% en costos asociados al manejo de documentos físicos y procesos manuales.</p>
                  </div>
                  
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
                    <h4 className="font-semibold mb-2 text-lg text-zinc-100">Cumplimiento Normativo</h4>
                    <p className="text-zinc-400 text-sm">Garantía de conformidad con regulaciones documentales y requisitos de auditoría mediante controles automatizados.</p>
                  </div>
                  
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
                    <h4 className="font-semibold mb-2 text-lg text-zinc-100">Productividad Mejorada</h4>
                    <p className="text-zinc-400 text-sm">Incremento de hasta un 40% en la productividad del personal al liberar tiempo dedicado a tareas documentales rutinarias.</p>
                  </div>
                  
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
                    <h4 className="font-semibold mb-2 text-lg text-zinc-100">Acceso Inmediato</h4>
                    <p className="text-zinc-400 text-sm">Recuperación de documentos en segundos desde cualquier ubicación, mejorando la toma de decisiones y la atención al cliente.</p>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-zinc-100">¿Listo para transformar su gestión documental?</h3>
                <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                  Descubra cómo nuestras soluciones de automatización documental pueden optimizar sus procesos, garantizar el cumplimiento normativo y mejorar el acceso a la información crítica de su empresa.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="/contacto" 
                    className="px-6 py-3 bg-exertion-600 hover:bg-exertion-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Solicitar Demostración
                  </a>
                  <a 
                    href="/casos-de-exito" 
                    className="px-6 py-3 bg-zinc-800 border border-zinc-700 hover:border-exertion-600 text-exertion-400 font-medium rounded-lg shadow-sm hover:shadow transition-all"
                  >
                    Ver Casos de Éxito
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

export default Automatizacion;
