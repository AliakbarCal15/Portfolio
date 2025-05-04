import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

type NavbarProps = {
  activeSection: string;
  scrollY: number;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
};

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" }
];

const Navbar = ({ 
  activeSection, 
  scrollY, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(scrollY > 100);
  }, [scrollY]);

  const toggleMobileMenu = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full bg-dark bg-opacity-90 backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-neon-blue font-montserrat text-xl sm:text-2xl font-bold">
          <span className="relative">
            Wel<span className="text-light">come</span>
            <span className="absolute -bottom-1 left-0 bg-neon-blue h-0.5 w-full opacity-70"></span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(({ href, label }) => (
            <a 
              key={href}
              href={href}
              className={`transition-colors ${
                activeSection === href.substring(1) 
                  ? 'text-neon-blue' 
                  : 'text-light hover:text-neon-blue'
              }`}
            >
              {label}
            </a>
          ))}
          <Link href="/passion" className="text-light hover:text-neon-blue transition-colors flex items-center gap-1">
            <span>Passion</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-light focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark bg-opacity-95 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map(({ href, label }) => (
                <a 
                  key={href}
                  href={href}
                  className={`py-2 transition-colors ${
                    activeSection === href.substring(1) 
                      ? 'text-neon-blue' 
                      : 'text-light hover:text-neon-blue'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <Link 
                href="/passion" 
                className="py-2 text-light hover:text-neon-blue transition-colors flex items-center gap-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Passion</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
