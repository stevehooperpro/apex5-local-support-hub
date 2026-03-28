import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const Services = lazy(() => import("./pages/Services.tsx"));
const Pricing = lazy(() => import("./pages/Pricing.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Areas = lazy(() => import("./pages/Areas.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Privacy = lazy(() => import("./pages/Privacy.tsx"));
const Cookies = lazy(() => import("./pages/Cookies.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Suspense fallback={null}><Services /></Suspense>} />
            <Route path="/pricing" element={<Suspense fallback={null}><Pricing /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={null}><About /></Suspense>} />
            <Route path="/areas" element={<Suspense fallback={null}><Areas /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={null}><Contact /></Suspense>} />
            <Route path="/privacy" element={<Suspense fallback={null}><Privacy /></Suspense>} />
            <Route path="/cookies" element={<Suspense fallback={null}><Cookies /></Suspense>} />
            <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
