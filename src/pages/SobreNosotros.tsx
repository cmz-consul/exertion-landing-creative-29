
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Clock, Users, Target, MapPin, Trophy, Building } from "lucide-react";

const CompanyStats = () => {
  const stats = [
    { value: "15+", label: "Años de Experiencia", icon: Clock },
    { value: "500+", label: "Empleados de Clientes Satisfechos", icon: Users },
    { value: "4+", label: "Provincias", icon: MapPin },
    { value: "98%", label: "Tasa de Retención", icon: Target }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {stats.map((stat, index) => (
        <div key={index} className="bg-zinc-800 rounded-xl p-4 text-center shadow-sm">
          <div className="w-12 h-12 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mx-auto mb-3">
            <stat.icon size={24} />
          </div>
          <div className="text-3xl font-bold text-zinc-100 mb-1">{stat.value}</div>
          <div className="text-sm text-zinc-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const CompanyValues = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-zinc-800 rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trophy size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-3">Excelencia</h3>
        <p className="text-zinc-300">
          Nos esforzamos por alcanzar los más altos estándares en cada proyecto y solución que desarrollamos.
        </p>
      </div>
      
      <div className="bg-zinc-800 rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-3">Integridad</h3>
        <p className="text-zinc-300">
          Actuamos con honestidad, transparencia y responsabilidad en todas nuestras relaciones comerciales.
        </p>
      </div>
      
      <div className="bg-zinc-800 rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-zinc-700 text-exertion-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-3">Colaboración</h3>
        <p className="text-zinc-300">
          Trabajamos estrechamente con nuestros clientes para entender sus necesidades y crear soluciones que superen sus expectativas.
        </p>
      </div>
    </div>
  );
};

const SobreNosotros = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Sobre Nosotros"
        description="Conozca nuestra historia, visión y el equipo detrás de Exertion Solutions"
        breadcrumbs={[
          { label: "Inicio", path: "/" },
          { label: "Sobre Nosotros" }
        ]}
      />
      
      {/* Company Overview */}
      <section className="section-main py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="md:flex items-center gap-12 mb-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                {/* Misión image with effects */}
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="/lovable-uploads/f68273a8-0860-4d0d-b4ad-c078d07cd22d.png" 
                    alt="Oficina de Exertion Solutions"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-exertion-900/10 to-exertion-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/80 to-transparent h-1/3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  En Exertion Solutions, nos dedicamos a transformar la forma en que las empresas operan mediante la implementación de sistemas de gestión empresarial y soluciones de automatización personalizadas que optimizan procesos, reducen costos y aumentan la eficiencia.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Nuestro compromiso es ofrecer soluciones tecnológicas innovadoras y accesibles que permitan a las organizaciones de todos los tamaños aprovechar al máximo sus recursos y alcanzar sus objetivos de negocio.
                </p>
              </div>
            </div>
            
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 md:order-2 mb-8 md:mb-0">
                {/* Visión image with effects */}
                <div className="relative overflow-hidden rounded-xl shadow-lg perspective-1000">
                  <img 
                    src="/lovable-uploads/50368d86-98ba-415e-8f32-41a7962f527d.png" 
                    alt="Visión de Exertion Solutions"
                    className="w-full h-80 object-cover animate-pulse-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/40 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/10 to-zinc-950/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <div className="md:w-1/2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  Aspiramos a ser líderes globales en la transformación digital de empresas, reconocidos por nuestra excelencia técnica, innovación constante y el impacto positivo que generamos en el éxito de nuestros clientes.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Buscamos crear un futuro donde la tecnología empresarial sea accesible, eficiente y un verdadero impulsor de valor para organizaciones de todos los sectores y tamaños.
                </p>
              </div>
            </div>
            
            {/* Company Stats */}
            <CompanyStats />
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-main py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Valores</h2>
            <CompanyValues />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SobreNosotros;
