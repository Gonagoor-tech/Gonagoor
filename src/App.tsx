import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import PortfolioPage from "./pages/PortfolioPage";
import ResearchPage from "./pages/ResearchPage";
import VisionPage from "./pages/VisionPage";
import ContactPage from "./pages/ContactPage";
import CareerPage from "./pages/CareerPage";
import AerospacePage from "./pages/AerospacePage";
import AIPage from "./pages/AIPage";
import SoftwarePage from "./pages/SoftwarePage";
import AerospaceDetailPage from "./pages/AerospaceDetailPage";
import AIDetailPage from "./pages/AIDetailPage";
import SoftwareDetailPage from "./pages/SoftwareDetailPage";
import NanogetX1Page from "./pages/NanogetX1Page";
import SkycubePage from "./pages/SkycubePage";
import VayuDroidPage from "./pages/VayuDroidPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/aerospace" element={<AerospacePage />} />
          <Route path="/aerospace/details" element={<AerospaceDetailPage />} />
          <Route path="/nanoget-x1" element={<NanogetX1Page />} />
          <Route path="/skycube" element={<SkycubePage />} />
          <Route path="/vayudroid" element={<VayuDroidPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/ai/details" element={<AIDetailPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/software/details" element={<SoftwareDetailPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
