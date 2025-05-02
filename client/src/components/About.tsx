import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute top-0 w-full h-1 bg-dark-lighter"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue opacity-70"></span>
            </h2>
            <p className="text-light-darker mb-6 leading-relaxed">
              I'm a dedicated backend developer with a Master's degree in Computer Applications (MCA), passionate about building robust and scalable systems. My expertise lies in crafting efficient server-side solutions that form the backbone of modern applications.
            </p>
            <p className="text-light-darker mb-6 leading-relaxed">
              With over 6 years of professional experience, I've designed and implemented high-performance APIs, microservices, and data pipelines for a variety of industries. In my spare time, I enjoy motorbike rides for a fresh mind.
            </p>
            <p className="text-light-darker mb-6 leading-relaxed">
              My career goal is to architect systems that solve complex business problems while maintaining code quality and scalability. I'm particularly interested in distributed systems, cloud architecture, and performance optimization.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">Backend Development</span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">System Architecture</span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">Database Design</span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">API Integration</span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">Microservices</span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">Cloud Solutions</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Developer illustration */}
              <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Software Developer" 
                  className="w-full h-full object-cover rounded-lg"
                  style={{ filter: "grayscale(30%) contrast(110%) brightness(70%)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 flex justify-center gap-6">
                  <i className="fab fa-java text-3xl text-neon-blue"></i>
                  <i className="fas fa-database text-3xl text-neon-blue"></i>
                  <i className="fas fa-server text-3xl text-neon-blue"></i>
                  <i className="fas fa-cloud text-3xl text-neon-blue"></i>
                </div>
              </div>
              
              {/* Code snippet overlay */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-dark border border-dark-light rounded-md p-3 shadow-lg transform rotate-3 hidden sm:block"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <pre className="text-xs text-neon-blue font-rajdhani">
                  <code>{`function buildSystem() {
  const expertise = true;
  return expertise ? 
    'scalable_solution' : 
    refactor();
}`}</code>
                </pre>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
