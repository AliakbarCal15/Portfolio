import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import WelcomeMessage from "./WelcomeMessage";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Motion values for parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform values for the profile image tilt
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Update mouse position state
      setMousePosition({
        x: (e.clientX - centerX) / 25, // Divide to reduce sensitivity
        y: (e.clientY - centerY) / 25,
      });
      
      // Update motion values
      x.set((e.clientX - centerX) / 25);
      y.set((e.clientY - centerY) / 25);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-dark opacity-70"></div>

        {/* Abstract tech background pattern */}
        <div
          className="absolute bottom-0 right-0 w-full h-full opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(30%) contrast(120%)",
          }}
        ></div>

        {/* Geometric pattern */}
        <div className="absolute bottom-0 w-full h-16 flex justify-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L100,0 L100,10 L0,10 Z"
              fill="#121212"
              fillOpacity="0.3"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Welcome Message - time-based greeting */}
        <WelcomeMessage className="mb-8 md:mb-10 max-w-lg mx-auto md:mx-0" />
        
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-7/12 mb-10 md:mb-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neon-blue font-montserrat text-lg sm:text-xl mb-4"
            >
              <Typewriter
                words={['Hello World, I\'m', 'Hi there, I\'m', 'Welcome, I\'m']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-bold text-light mb-4"
            >
              <span>Aliakbar Calcuttawala</span>
              <br />
              <span className="text-neon-blue">Full-Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl sm:text-2xl text-light-darker mb-8"
            >
              Dynamic developer specializing in MERN stack, RESTful APIs, and
              scalable backend systems
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="bg-transparent border-2 border-neon-blue text-neon-blue px-6 py-3 rounded-md font-medium hover:bg-neon-blue hover:bg-opacity-10 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-neon-blue text-dark px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download="Aliakbar_Calcuttawala_Resume.pdf"
                className="flex items-center gap-2 bg-dark-lighter text-light px-6 py-3 rounded-md font-medium hover:bg-dark-light transition-all duration-300"
              >
                <i className="fas fa-file-pdf"></i>
                Download Resume
              </a>
            </motion.div>
          </div>
          
          {/* Profile Image with Tilt Effect */}
          <motion.div 
            className="md:w-4/12 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000,
              transformStyle: "preserve-3d"
            }}
          >
            <div className="relative">
              {/* Decorative circle element */}
              <motion.div
                className="absolute -top-6 -left-6 w-full h-full rounded-full border-2 border-neon-blue"
                animate={{
                  translateX: [0, -5, 0],
                  translateY: [0, 5, 0],
                  rotate: 360
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
              
              {/* Decorative dots pattern */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 opacity-50"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                }}
                animate={{
                  translateX: [0, 10, 0],
                  translateY: [0, -10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              {/* Profile image */}
              <motion.div
                className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-dark-lighter"
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: 10,
                  x: mousePosition.x,
                  y: mousePosition.y,
                }}
              >
                <img
                  src={`/photo1.jpg?v=${Date.now()}`}
                  alt="Aliakbar Calcuttawala"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{
                    transform: `translateZ(20px)`,
                  }}
                />
              </motion.div>
            </div>
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
                ease: "easeInOut",
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
