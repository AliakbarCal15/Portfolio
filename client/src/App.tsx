import { useEffect, useState } from "react";
import { Route, Switch } from "wouter";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingSidebar from "@/components/FloatingSidebar";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { useScroll } from "@/hooks/use-scroll";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import ResumeView from "@/pages/resume-view";
import PassionPage from "@/pages/passion";
import MessageSuccess from "@/pages/message-success";
import AdminMessages from "@/pages/admin-messages";

// Main Portfolio Homepage Component
const HomePage = () => {
  const { activeSection, sectionRefs } = useSectionObserver();
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffbea] via-[#fdf6b2] to-[#fffbe6] text-[#1a1a1a] overflow-x-hidden transition-all duration-300">
      <Navbar 
        activeSection={activeSection} 
        scrollY={scrollY} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <FloatingSidebar activeSection={activeSection} />
      <main>
        <section id="home" ref={el => sectionRefs.current.home = el} className="transition-all duration-300">
          <Hero />
        </section>
        <section id="about" ref={el => sectionRefs.current.about = el} className="transition-all duration-300">
          <About />
        </section>
        <section id="skills" ref={el => sectionRefs.current.skills = el} className="transition-all duration-300">
          <Skills />
        </section>
        <section id="projects" ref={el => sectionRefs.current.projects = el} className="transition-all duration-300">
          <Projects />
        </section>
        <section id="certifications" ref={el => sectionRefs.current.certifications = el} className="transition-all duration-300">
          <Certifications />
        </section>
        <section id="contact" ref={el => sectionRefs.current.contact = el} className="transition-all duration-300">
          <Contact />
        </section>
      </main>
      <Footer />
      <BackToTop visible={scrollY > 300} />
    </div>
  );
};

// Layout component 
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffbea] via-[#fdf6b2] to-[#fffbe6] text-[#1a1a1a] transition-all duration-300">
      {children}
      <Toaster />
    </div>
  );
};

// Main App component with routing
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/resume-view" component={ResumeView} />
        <Route path="/passion" component={PassionPage} />
        <Route path="/message-success" component={MessageSuccess} />
        <Route path="/admin-messages" component={AdminMessages} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
