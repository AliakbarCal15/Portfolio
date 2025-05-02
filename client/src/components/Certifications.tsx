import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const certifications = [
  {
    icon: "fas fa-code",
    title: "Data Structures",
    description: "Comprehensive knowledge of data structures and algorithms with practical implementation skills.",
    score: "82.08/100",
    year: "Nov 2023"
  },
  {
    icon: "fab fa-python",
    title: "Python Data Structures",
    description: "Advanced mastery of Python-specific data structures and their implementation in real-world scenarios.",
    score: "96.40/100",
    year: "Nov 2023"
  },
  {
    icon: "fas fa-tasks",
    title: "Introduction to Scrum Master Training",
    description: "Proficiency in Agile methodologies, sprint planning, and team coordination for efficient project delivery.",
    score: "84/100",
    year: "Dec 2024"
  },
  {
    icon: "fas fa-leaf",
    title: "Spring - Ecosystem and Core",
    description: "Expertise in Spring Framework, dependency injection, and application configuration for enterprise Java applications.",
    score: "92.47/100",
    year: "Dec 2024"
  },
  {
    icon: "fas fa-database",
    title: "Oracle SQL Proficiency",
    description: "Advanced SQL query writing, database design, and optimization techniques for Oracle database environments.",
    score: "90.10/100",
    year: "Dec 2024"
  }
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="py-20 md:py-32 bg-dark-lighter bg-opacity-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16 relative inline-block">
          Certifications
          <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue opacity-70"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              className="bg-dark bg-opacity-40 p-6 rounded-lg shadow-lg border border-dark-light hover:border-neon-blue group transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4 h-16 flex items-center justify-center">
                <i className={`${cert.icon} text-5xl text-neon-blue group-hover:text-light transition-colors`}></i>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-center mb-2">{cert.title}</h3>
              <p className="text-light-darker text-center text-sm">{cert.description}</p>
              <div className="flex flex-col items-center mt-4">
                <span className="px-3 py-1 bg-dark-lighter rounded-full text-neon-blue text-xs mb-2">Score: {cert.score}</span>
                <span className="px-3 py-1 bg-dark-lighter rounded-full text-light-darker text-xs">Issued {cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
