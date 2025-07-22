
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import PageTitle from "@/components/layout/PageTitle";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { casosDeExito } from "@/data/casosDeExito";
import CasoCard from "@/components/casos-exito/CasoCard";

const CasosDeExito = () => {
  // Filtrar casos destacados para la sección superior
  const featuredCases = casosDeExito.filter(cs => cs.id <= 3);

  return (
    <PageLayout>
      <PageHeader 
        title="Casos de Éxito"
        description="Descubra cómo nuestras soluciones han transformado empresas en diferentes industrias"
        breadcrumbs={[
          { label: "Inicio", path: "/" },
          { label: "Casos de Éxito" }
        ]}
      />
      
      {/* Featured Case Studies */}
      <section className="section-main py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PageTitle 
              title="Casos Destacados" 
              subtitle="Conoce nuestros proyectos más exitosos" 
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredCases.map((caseStudy) => (
                <CasoCard
                  key={caseStudy.id}
                  id={caseStudy.id}
                  image={caseStudy.image}
                  title={caseStudy.title}
                  description={caseStudy.description}
                  industry={caseStudy.industry}
                  readTime={caseStudy.readTime}
                  date={caseStudy.date}
                />
              ))}
            </div>
            
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {casosDeExito.slice(3).map((caseStudy) => (
                <CasoCard
                  key={caseStudy.id}
                  id={caseStudy.id}
                  image={caseStudy.image}
                  title={caseStudy.title}
                  description={caseStudy.description}
                  industry={caseStudy.industry}
                  readTime={caseStudy.readTime}
                  date={caseStudy.date}
                  fullWidth
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-data py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">              
            {/* CTA Block */}
            <div className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Listo para Ser Nuestro Próximo Caso de Éxito?</h3>
              <p className="text-zinc-300 mb-6 max-w-3xl mx-auto">
                Permítanos ayudarle a transformar sus operaciones empresariales con nuestras soluciones personalizadas de gestión y automatización.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contacto">
                  <Button size="lg" className="w-full sm:w-auto bg-exertion-600 hover:bg-exertion-700 text-white">
                    Quiero más info
                    <ExternalLink size={16} />
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-zinc-600 hover:bg-zinc-700">
                    Explorar Nuestros Servicios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CasosDeExito;
