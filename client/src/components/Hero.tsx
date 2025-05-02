import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-dark opacity-70"></div>
        
        {/* Motorcycle silhouette background */}
        <div 
          className="absolute bottom-0 right-0 w-full h-full opacity-10" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize: "cover", 
            backgroundPosition: "right center",
            filter: "grayscale(100%) contrast(200%)"
          }}
        ></div>
        
        {/* Tire marks */}
        <div className="tire-mark absolute bottom-16 w-full h-16"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neon-green font-montserrat text-lg sm:text-xl mb-4"
          >
            Hello World, I'm
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-bold text-light mb-4"
          >
            <span>Aliakbar —</span><br />
            <span className="text-glow text-neon-green">Backend Developer & Code Mechanic</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl sm:text-2xl text-light-darker mb-8"
          >
            I architect scalable backend systems and chase the open road when off-screen.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="bg-transparent border-2 border-neon-green text-neon-green px-6 py-3 rounded-md font-medium hover:bg-neon-green hover:bg-opacity-10 transition-all duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-neon-green text-dark px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.5)]"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <p className="text-light-darker mb-2 text-sm">Scroll Down</p>
          <div className="w-5 h-10 border-2 border-light-darker rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-2 bg-light-darker rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
