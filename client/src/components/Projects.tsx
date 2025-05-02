import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "Blog Management System",
    description: "Designed and deployed a full-stack blog management platform with user authentication and secure content operations.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["MERN Stack", "Authentication", "Content Management"],
    github: "#",
    demo: "#",
    period: "Jan 2025 - Feb 2025"
  },
  {
    title: "Data Visualization Tool",
    description: "Built a dynamic data visualization platform enabling users to upload datasets and generate real-time charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["MERN Stack", "Chart.js", "Recharts"],
    github: "#",
    demo: "#",
    period: "Oct 2024 - Dec 2024"
  },
  {
    title: "File Sharing Webpage",
    description: "Developed a secure file-sharing application that generated unique download links for uploaded files.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["MERN Stack", "File Handling", "Security"],
    github: "#",
    demo: "#",
    period: "Aug 2024"
  },
  {
    title: "Conversion Doctor",
    description: "Co-developed a cloud-hosted application facilitating file format conversions for images, audio, and documents.",
    image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Flask", "Pillow", "Pydub", "FFmpeg"],
    github: "#",
    demo: "#",
    period: "May 2023"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="bg-dark bg-opacity-40 rounded-lg overflow-hidden shadow-lg border border-dark-light hover:border-neon-blue transition-all duration-300 group"
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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-montserrat font-semibold group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-neon-blue bg-dark-lighter px-2 py-1 rounded">
                    {project.period}
                  </span>
                </div>
                <p className="text-light-darker mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-dark-lighter rounded-full text-neon-blue text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    className="px-4 py-2 bg-dark-lighter rounded-md text-light text-sm hover:bg-neon-blue hover:text-dark transition-colors"
                  >
                    <i className="fab fa-github mr-2"></i>Repository
                  </a>
                  <a 
                    href={project.demo} 
                    className="px-4 py-2 bg-neon-blue rounded-md text-dark text-sm hover:bg-opacity-90 transition-colors"
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
