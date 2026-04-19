import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteJsonLd } from "@/components/Seo";
import Index from "./pages/Index";
import SolutionsPage from "./pages/SolutionsPage";
import EcosystemPage from "./pages/EcosystemPage";
import IndustriesPage from "./pages/IndustriesPage";
import InsightsPage from "./pages/InsightsPage";
import CompanyPage from "./pages/CompanyPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SiteJsonLd />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/company" element={<CompanyPage />} />
            {/* Partner With Us page (also includes contact form) */}
            <Route path="/partner" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
