import { motion } from 'framer-motion';

type FloatingSidebarProps = {
  activeSection: string;
};

const navLinks = [
  { href: "#home", label: "Home", section: "home" },
  { href: "#about", label: "About", section: "about" },
  { href: "#skills", label: "Skills", section: "skills" },
  { href: "#projects", label: "Projects", section: "projects" },
  { href: "#certifications", label: "Certifications", section: "certifications" },
  { href: "#contact", label: "Contact", section: "contact" }
];

const FloatingSidebar = ({ activeSection }: FloatingSidebarProps) => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-6">
        {navLinks.map(({ href, label, section }) => (
          <a 
            key={href}
            href={href}
            className={`text-light hover:text-neon-blue transition-all duration-300 pl-3 py-1 border-l border-dark-light hover:border-neon-blue ${
              activeSection === section ? 'text-neon-blue border-neon-blue' : ''
            }`}
            data-section={section}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingSidebar;
