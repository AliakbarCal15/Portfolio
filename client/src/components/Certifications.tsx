import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const certifications = [
  {
    icon: "fab fa-aws",
    title: "AWS Certified Solutions Architect",
    description: "Comprehensive understanding of AWS architecture best practices and cloud solutions.",
    year: "2023",
    color: "neon-orange",
    hoverColor: "neon-green"
  },
  {
    icon: "fas fa-cloud",
    title: "Google Cloud Professional Developer",
    description: "Expert-level certification for building scalable applications on Google Cloud Platform.",
    year: "2022",
    color: "neon-blue",
    hoverColor: "neon-blue"
  },
  {
    icon: "fab fa-java",
    title: "Oracle Certified Professional: Java SE Developer",
    description: "Mastery of Java SE platform and related frameworks for enterprise applications.",
    year: "2021",
    color: "neon-green",
    hoverColor: "neon-orange"
  }
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="py-20 md:py-32 bg-gradient-section relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16 relative inline-block">
          Certifications
          <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-orange opacity-70"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              className={`bg-gradient-card p-6 rounded-lg shadow-lg border border-dark-light hover:border-${cert.hoverColor} group transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4 h-16 flex items-center justify-center">
                <i className={`${cert.icon} text-5xl text-${cert.color} group-hover:text-${cert.hoverColor} transition-colors`}></i>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-center mb-2">{cert.title}</h3>
              <p className="text-light-darker text-center text-sm">{cert.description}</p>
              <div className="flex justify-center mt-4">
                <span className={`px-3 py-1 bg-dark-lighter rounded-full text-${cert.color} text-xs`}>Issued {cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
