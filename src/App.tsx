import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Course from "./pages/Course";
import SelfCheckPage from "./pages/SelfCheckPage";
import Speaking from "./pages/Speaking";
import WorkWithMe from "./pages/WorkWithMe";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Privacy from "./pages/Privacy";
import Gulf from "./pages/Gulf";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Canonical from "./components/Canonical";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Canonical />
          <Routes>
            {/* English (default) */}
            <Route path="/" element={<Index />} />
            <Route path="/self-check" element={<SelfCheckPage />} />
            <Route path="/course" element={<Course />} />
            <Route path="/work-with-me" element={<WorkWithMe />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/about" element={<About />} />
            <Route path="/gulf" element={<Gulf />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/impressum" element={<Impressum />} />
            {/* German, under /de. The Gulf page is English only. */}
            <Route path="/de" element={<Index />} />
            <Route path="/de/self-check" element={<SelfCheckPage />} />
            <Route path="/de/course" element={<Course />} />
            <Route path="/de/work-with-me" element={<WorkWithMe />} />
            <Route path="/de/speaking" element={<Speaking />} />
            <Route path="/de/about" element={<About />} />
            <Route path="/de/datenschutz" element={<Datenschutz />} />
            <Route path="/de/impressum" element={<Impressum />} />
            <Route path="/de/gulf" element={<Navigate to="/gulf" replace />} />
            <Route path="/de/privacy" element={<Navigate to="/de/datenschutz" replace />} />
            <Route path="/de/*" element={<NotFound />} />
            {/* Old addresses that may still be shared or indexed. */}
            <Route path="/datenschutz" element={<Navigate to="/de/datenschutz" replace />} />
            <Route path="/booking" element={<Navigate to="/work-with-me" replace />} />
            <Route path="/achievements" element={<Navigate to="/about" replace />} />
            <Route path="/frameworks" element={<Navigate to="/#path" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
