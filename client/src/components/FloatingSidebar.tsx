import { motion } from 'framer-motion';

type FloatingSidebarProps = {
  activeSection: string;
};

const navLinks = [
  { href: "#home", label: "🏠", section: "home" },
  { href: "#about", label: "🔠", section: "about" },
  { href: "#skills", label: "🤹", section: "skills" },
  { href: "#projects", label: "⚙️", section: "projects" },
  { href: "#certifications", label: "🥇", section: "certifications" },
  { href: "#contact", label: "📱", section: "contact" }
];

const FloatingSidebar = ({ activeSection }: FloatingSidebarProps) => {
  return (
    <div className="hidden xl:block fixed top-1/2 left-6 -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-4">
        {navLinks.map(({ href, label, section }) => {
          const isActive = activeSection === section;
          return (
            <motion.a
              key={href}
              href={href}
              whileHover={{ scale: 1.2 }}
              className={`relative text-2xl pl-3 py-1 border-l border-dark-light hover:border-neon-blue transition-all duration-300 
                ${isActive ? 'text-neon-blue border-neon-blue font-semibold' : 'text-light hover:text-neon-blue'}`}
            >
              <motion.span
                animate={isActive ? { scale: 1.4 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`inline-block`}
              >
                {label}
              </motion.span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingSidebar;
