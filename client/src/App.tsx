import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Certifications from "@/pages/Certifications";
import Experience from "@/pages/Experience";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import { useEffect } from "react";

// Import web fonts
function App() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500&family=Fira+Code:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Add Font Awesome
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-background font-roboto text-foreground">
          <Navbar />
          
          <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Experience />
            <Blog />
            <Contact />
          </main>
          
          <Footer />
          <BackToTop />
        </div>
        
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
