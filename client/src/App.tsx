import { useEffect, useState } from "react";
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

function App() {
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
    <div className="bg-navy min-h-screen text-light overflow-x-hidden">
      <Navbar 
        activeSection={activeSection} 
        scrollY={scrollY} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <FloatingSidebar activeSection={activeSection} />
      <main>
        <section id="home" ref={el => sectionRefs.current.home = el}>
          <Hero />
        </section>
        <section id="about" ref={el => sectionRefs.current.about = el}>
          <About />
        </section>
        <section id="skills" ref={el => sectionRefs.current.skills = el}>
          <Skills />
        </section>
        <section id="projects" ref={el => sectionRefs.current.projects = el}>
          <Projects />
        </section>
        <section id="certifications" ref={el => sectionRefs.current.certifications = el}>
          <Certifications />
        </section>
        <section id="contact" ref={el => sectionRefs.current.contact = el}>
          <Contact />
        </section>
      </main>
      <Footer />
      <BackToTop visible={scrollY > 300} />
      <Toaster />
    </div>
  );
}

export default App;
