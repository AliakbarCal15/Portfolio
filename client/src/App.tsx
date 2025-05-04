import { useEffect, useState } from "react";
import { Route, Switch } from "wouter";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/EducationAndCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingSidebar from "@/components/FloatingSidebar";
// import ThemeToggle from "@/components/ThemeToggle";
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
    <div className="bg-navy dark:bg-dark min-h-screen text-light overflow-x-hidden">
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
    </div>
  );
};

// Main App component with routing
function App() {
  // Store theme preference in local storage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if there's a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    // If theme preference exists, use it; otherwise default to dark
    return savedTheme ? savedTheme === 'dark' : true;
  });
  
  useEffect(() => {
    // Apply dark mode class to document root element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-light dark:bg-navy text-dark dark:text-light transition-colors duration-300">
      {/* <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> */}
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/resume-view" component={ResumeView} />
        <Route path="/passion" component={PassionPage} />
        <Route path="/message-success" component={MessageSuccess} />
        <Route path="/admin-messages" component={AdminMessages} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </div>
  );
}

export default App;
