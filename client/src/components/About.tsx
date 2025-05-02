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
              I'm a dynamic Full-Stack Developer with expertise in MERN stack and data science, currently pursuing a Master's degree in Computer Applications (MCA) at MIT College of Management in Pune. I'm passionate about building scalable server-side architectures and integrating robust backend services with interactive front-end solutions.
            </p>
            <p className="text-light-darker mb-6 leading-relaxed">
              Currently working as a Software Developer at Numetry Technology in Pune, I specialize in developing and securing RESTful APIs while optimizing backend systems using MERN stack technologies. Previously, I gained experience as a Data Analyst Intern at Next24Tech, where I built predictive models and recommendation systems.
            </p>
            <p className="text-light-darker mb-6 leading-relaxed">
              I hold a Bachelor's degree in Computer Science from Savitribai Phule Pune University with 84% marks, and I'm committed to leveraging my technical skills to create impactful digital products in challenging roles.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">MERN Stack</span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">RESTful APIs</span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">Database Design</span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">Machine Learning</span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">Data Analytics</span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">Cloud Deployment</span>
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
                  <i className="fab fa-react text-3xl text-neon-blue"></i>
                  <i className="fab fa-node-js text-3xl text-neon-blue"></i>
                  <i className="fas fa-database text-3xl text-neon-blue"></i>
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
