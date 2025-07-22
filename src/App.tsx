
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Implementacion from "./pages/servicios/Implementacion";
import Automatizacion from "./pages/servicios/Automatizacion";
import Consultoria from "./pages/servicios/Consultoria";
import Transformacion from "./pages/servicios/Transformacion";
import Testimonios from "./pages/Testimonios";
import Contacto from "./pages/Contacto";
import SobreNosotros from "./pages/SobreNosotros";
import CasosDeExito from "./pages/CasosDeExito";
import CasoDeExitoDetalle from "./pages/CasoDeExitoDetalle";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ScrollToTop component to handle smooth scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
};

// Apply dark mode by default
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark');
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/implementacion" element={<Implementacion />} />
          <Route path="/servicios/automatizacion" element={<Automatizacion />} />
          <Route path="/servicios/consultoria" element={<Consultoria />} />
          <Route path="/servicios/transformacion" element={<Transformacion />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/casos-de-exito" element={<CasosDeExito />} />
          <Route path="/casos-de-exito/:id" element={<CasoDeExitoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
