import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const education = [
  {
    institute: "MIT College of Management",
    location: "Pune",
    degree: "M.C.A. - Data Science",
    score: "CGPA: 7.88/10",
    year: "2023 - 2025"
  },
  {
    institute: "Savitribai Phule Pune University",
    location: "Pune",
    degree: "B.Sc. - Computer Science",
    score: "84%",
    year: "2020 - 2023"
  },
  {
    institute: "Rewachand Bhojwani Academy",
    location: "Pune",
    degree: "HSC - PCM (CS)",
    score: "65%",
    year: "2020"
  },
  {
    institute: "Rosary High School",
    location: "Pune",
    degree: "SSC",
    score: "78%",
    year: "2018"
  }
];

const EducationAndCertifications = () => {
  const [showEducation, setShowEducation] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="py-20 md:py-32 bg-dark-lighter bg-opacity-20 relative" ref={ref}>
      <div className="container mx-auto px-6">

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setShowEducation(true)}
            className={`px-5 py-2 rounded-l-md font-semibold text-sm 
              ${showEducation ? 'bg-neon-blue text-dark' : 'bg-dark text-light'} transition`}
          >
            Education
          </button>
          <button
            onClick={() => setShowEducation(false)}
            className={`px-5 py-2 rounded-r-md font-semibold text-sm 
              ${!showEducation ? 'bg-neon-blue text-dark' : 'bg-dark text-light'} transition`}
          >
            Certifications
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-10 relative inline-block">
          {showEducation ? "Education" : "Certifications"}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue opacity-70"></span>
        </h2>

        {/* Content */}
        {showEducation ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-dark bg-opacity-40 p-6 rounded-lg shadow-lg border border-dark-light hover:border-neon-blue transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-light mb-1">{edu.institute}</h3>
                <p className="text-light-darker text-sm italic mb-1">{edu.location}</p>
                <p className="text-light mb-1">{edu.degree}</p>
                <p className="text-light-darker text-sm mb-1">{edu.score}</p>
                <p className="text-neon-blue text-xs">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        ) : (
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
                <h3 className="text-xl font-semibold text-center mb-2">{cert.title}</h3>
                <p className="text-light-darker text-center text-sm">{cert.description}</p>
                <div className="flex flex-col items-center mt-4">
                  <span className="px-3 py-1 bg-dark-lighter rounded-full text-neon-blue text-xs mb-2">Score: {cert.score}</span>
                  <span className="px-3 py-1 bg-dark-lighter rounded-full text-light-darker text-xs">Issued {cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationAndCertifications;
