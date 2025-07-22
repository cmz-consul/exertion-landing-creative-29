
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import CasoHero from "@/components/casos-exito/CasoHero";
import CasoContent from "@/components/casos-exito/CasoContent";
import CasoRelated from "@/components/casos-exito/CasoRelated";
import { casosDeExito } from "@/data/casosDeExito";

const CasoDeExitoDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const casoId = parseInt(id || "1");
  
  // Encontrar el caso correspondiente por ID
  const caso = casosDeExito.find(c => c.id === casoId);
  
  if (!caso) {
    return (
      <PageLayout>
        <main className="flex-grow bg-zinc-900 dark:bg-zinc-950 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-zinc-100 dark:text-zinc-50">Caso no encontrado</h1>
              <p className="mt-4 text-zinc-300 dark:text-zinc-400">Lo sentimos, el caso que buscas no existe.</p>
              <div className="mt-8">
                <Link 
                  to="/casos-de-exito" 
                  className="inline-flex items-center px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white font-medium rounded-lg"
                >
                  <ChevronLeft size={16} className="mr-2" />
                  Volver a Casos de Éxito
                </Link>
              </div>
            </div>
          </div>
        </main>
      </PageLayout>
    );
  }

  // Preparar los casos relacionados si existen
  const relatedCases = caso.related 
    ? caso.related.map(relatedId => casosDeExito.find(c => c.id === relatedId))
      .filter(Boolean)
      .map(c => ({
        id: c!.id,
        title: c!.title,
        description: c!.description,
        image: c!.image
      }))
    : [];

  return (
    <PageLayout>
      <CasoHero 
        title={caso.title}
        date={caso.date}
        readTime={caso.readTime}
        industry={caso.industry}
      />
      
      <CasoContent 
        image={caso.image}
        logo={caso.logo}
        company={caso.company}
        challengeDetailed={caso.challengeDetailed}
        solutionDetailed={caso.solutionDetailed}
        keyFeatures={caso.keyFeatures}
        results={caso.results}
        resultsDetailed={caso.resultsDetailed}
        conclusion={caso.conclusion}
      />
      
      {relatedCases.length > 0 && <CasoRelated relatedCases={relatedCases} />}
    </PageLayout>
  );
};

export default CasoDeExitoDetalle;
