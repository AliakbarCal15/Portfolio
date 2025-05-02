import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    icon: "fab fa-node-js",
    name: "Backend Development",
    description: "Node.js, Express.js, and MongoDB for scalable backend services, REST API design, and data-driven applications.",
    progress: 95,
    color: "neon-blue"
  },
  {
    icon: "fab fa-react",
    name: "Frontend Development",
    description: "React.js with Material UI for building responsive and interactive user interfaces with modern design patterns.",
    progress: 85,
    color: "neon-blue"
  },
  {
    icon: "fas fa-database",
    name: "Database Management",
    description: "SQL (MySQL) and NoSQL (MongoDB) database design, optimization, and integration with application layers.",
    progress: 90,
    color: "neon-blue"
  },
  {
    icon: "fas fa-brain",
    name: "Data Analytics & ML",
    description: "Exploratory Data Analysis, Regression, Natural Language Processing, and predictive modeling techniques.",
    progress: 80,
    color: "neon-blue"
  },
  {
    icon: "fas fa-cloud",
    name: "Cloud Deployment",
    description: "AWS and Heroku deployment, configuration, and management of web applications and services.",
    progress: 82,
    color: "neon-blue"
  },
  {
    icon: "fas fa-server",
    name: "DevOps",
    description: "Apache/Nginx server configuration, Git version control, and Agile methodologies for efficient development workflows.",
    progress: 78,
    color: "neon-blue"
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="py-20 md:py-32 bg-dark-lighter bg-opacity-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16 relative inline-block">
          Technical Toolkit
          <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue opacity-70"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="bg-dark bg-opacity-40 p-6 rounded-lg shadow-lg border border-dark-light hover:border-neon-blue transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <i className={`${skill.icon} text-neon-blue text-3xl mr-3`}></i>
                <h3 className="text-xl font-montserrat font-semibold">{skill.name}</h3>
              </div>
              <p className="text-light-darker mb-4 text-sm">{skill.description}</p>
              <div className="h-2 w-full bg-dark-light rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-neon-blue"
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
