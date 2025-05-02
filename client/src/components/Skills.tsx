import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    icon: "fab fa-java",
    name: "Java",
    description: "Core language for enterprise applications with extensive experience in Spring Boot and microservices.",
    progress: 95,
    color: "neon-orange"
  },
  {
    icon: "fas fa-database",
    name: "MySQL & MongoDB",
    description: "Database design, optimization, and management for both relational and NoSQL platforms.",
    progress: 90,
    color: "neon-blue"
  },
  {
    icon: "fab fa-python",
    name: "Python",
    description: "Data processing, automation, and backend services with Flask and Django.",
    progress: 80,
    color: "neon-green"
  },
  {
    icon: "fab fa-react",
    name: "React",
    description: "Frontend development with React and related ecosystem tools for responsive UI.",
    progress: 75,
    color: "neon-blue"
  },
  {
    icon: "fab fa-node-js",
    name: "Node.js",
    description: "Server-side JavaScript for scalable network applications and APIs.",
    progress: 85,
    color: "neon-green"
  },
  {
    icon: "fas fa-cloud",
    name: "DevOps & Cloud",
    description: "CI/CD pipelines, Docker, AWS, and Azure deployment expertise.",
    progress: 80,
    color: "neon-orange"
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="py-20 md:py-32 bg-gradient-section relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16 relative inline-block">
          Technical Toolkit
          <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-green opacity-70"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className={`bg-gradient-card p-6 rounded-lg shadow-lg border border-dark-light hover:border-${skill.color} transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <i className={`${skill.icon} text-${skill.color} text-3xl mr-3`}></i>
                <h3 className="text-xl font-montserrat font-semibold">{skill.name}</h3>
              </div>
              <p className="text-light-darker mb-4 text-sm">{skill.description}</p>
              <div className="skill-bar bg-dark-lighter">
                <motion.div 
                  className={`skill-bar-progress bg-${skill.color}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.progress}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
