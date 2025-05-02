import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "E-commerce Microservices",
    description: "A scalable backend architecture for e-commerce platforms using Java Spring Boot, MongoDB, and RabbitMQ.",
    image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Java", "Spring", "MongoDB"],
    github: "#",
    demo: "#",
    color: "neon-green"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard for monitoring system performance using Node.js, Socket.IO, and D3.js.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Node.js", "Socket.IO", "D3.js"],
    github: "#",
    demo: "#",
    color: "neon-blue"
  },
  {
    title: "Rider's Journey",
    description: "A motorcycle route planning and tracking app with social features using Python, Django, and React Native.",
    image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Python", "Django", "React Native"],
    github: "#",
    demo: "#",
    color: "neon-orange"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16 relative inline-block">
          Featured Projects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue opacity-70"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className={`bg-gradient-card rounded-lg overflow-hidden shadow-lg border border-dark-light hover:border-${project.color} transition-all duration-300 group`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-montserrat font-semibold mb-2 group-hover:text-${project.color} transition-colors`}>
                  {project.title}
                </h3>
                <p className="text-light-darker mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className={`px-2 py-1 bg-dark-lighter rounded-full text-${index === 0 ? 'neon-green' : index === 1 ? 'neon-blue' : 'neon-orange'} text-xs`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    className={`px-4 py-2 bg-dark-lighter rounded-md text-light text-sm hover:bg-${project.color} hover:text-dark transition-colors`}
                  >
                    <i className="fab fa-github mr-2"></i>Repository
                  </a>
                  <a 
                    href={project.demo} 
                    className={`px-4 py-2 bg-${project.color} rounded-md text-dark text-sm hover:bg-opacity-90 transition-colors`}
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
