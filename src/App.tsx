
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

// Pages Institution
import Synode from "./pages/institution/Synode";
import ConseilSynodal from "./pages/institution/ConseilSynodal";
import BureauSynodal from "./pages/institution/BureauSynodal";
import Consistoire from "./pages/institution/Consistoire";

// Pages Départements
import Jeunesse from "./pages/departements/Jeunesse";
import Musique from "./pages/departements/Musique";
import Communication from "./pages/departements/Communication";
import FemmesFamille from "./pages/departements/FemmesFamille";
import Evangelisation from "./pages/departements/Evangelisation";
import Organisation from "./pages/departements/Organisation";

// Pages Relations
import Oecumenisme from "./pages/relations/Oecumenisme";
import Confrerie from "./pages/relations/Confrerie";

// Autres pages
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Routes Institution */}
          <Route path="/institution/synode" element={<Synode />} />
          <Route path="/institution/conseil-synodal" element={<ConseilSynodal />} />
          <Route path="/institution/bureau-synodal" element={<BureauSynodal />} />
          <Route path="/institution/consistoire" element={<Consistoire />} />
          
          {/* Routes Départements */}
          <Route path="/departements/jeunesse" element={<Jeunesse />} />
          <Route path="/departements/musique" element={<Musique />} />
          <Route path="/departements/communication" element={<Communication />} />
          <Route path="/departements/femmes-famille" element={<FemmesFamille />} />
          <Route path="/departements/evangelisation" element={<Evangelisation />} />
          <Route path="/departements/organisation" element={<Organisation />} />
          
          {/* Routes Relations */}
          <Route path="/relations/oecumenisme" element={<Oecumenisme />} />
          <Route path="/relations/confrerie" element={<Confrerie />} />
          
          {/* Autres routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
