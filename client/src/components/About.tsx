import { motion } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ResumeModal from "./ResumeModal";

const About = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-20 md:py-32 relative">
      <div className="absolute top-0 w-full h-1 bg-dark-lighter"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 relative inline-block">
              <span className="mr-2">I'm a</span>
              <span className="text-neon-blue">
                <Typewriter
                  words={['Full Stack Developer', 'MERN Enthusiast', 'Backend Specialist', 'API Engineer']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue opacity-70"></span>
            </h2>

            <p className="text-light-darker mb-4 leading-relaxed">
              I'm a dynamic Full-Stack Developer with expertise in MERN stack
              and data science. I’m currently pursuing my Master's in Computer
              Applications (MCA) at MIT College of Management in Pune.
            </p>
            <p className="text-light-darker mb-4 leading-relaxed">
              Passionate about building scalable server-side architectures, I
              integrate robust backend services with interactive front-end
              solutions.
            </p>
            <p className="text-light-darker mb-4 leading-relaxed">
              At Numetry Technology, I develop and secure RESTful APIs and
              optimize backend systems using MERN technologies. Previously, at
              Next24Tech, I built predictive models and recommendation systems
              as a Data Analyst Intern.
            </p>
            <p className="text-light-darker mb-6 leading-relaxed">
              I earned my Bachelor's in Computer Science from Savitribai Phule
              Pune University with 84% marks and aim to create impactful digital
              products.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">
                MERN Stack
              </span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">
                RESTful APIs
              </span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">
                Database Design
              </span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">
                Data Analytics
              </span>
              <span className="px-4 py-2 bg-dark-lighter rounded-full text-neon-blue text-sm">
                Cloud Deployment
              </span>
            </div>

            <div className="mb-8">
              <button
                onClick={() => setIsResumeModalOpen(true)}
                aria-label="Open resume modal"
                className="inline-flex items-center gap-2 bg-dark-lighter border border-dark-light hover:border-neon-blue px-5 py-2 rounded-md text-light text-sm hover:text-neon-blue transition-all duration-300"
              >
                <i className="fas fa-file-pdf text-neon-blue"></i>
                View Full Resume
              </button>
            </div>

            <ResumeModal
              isOpen={isResumeModalOpen}
              onClose={() => setIsResumeModalOpen(false)}
            />
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Developer Image */}
              <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-xl relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Software Developer"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    filter: "grayscale(30%) contrast(110%) brightness(70%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 flex justify-center gap-6">
                  <i className="fab fa-react text-3xl text-neon-blue"></i>
                  <i className="fab fa-node-js text-3xl text-neon-blue"></i>
                  <i className="fas fa-database text-3xl text-neon-blue"></i>
                  <i className="fas fa-cloud text-3xl text-neon-blue"></i>
                </div>
              </div>

              {/* Animated Code Snippet */}
              <motion.div
                className="absolute -top-4 -right-4 bg-dark border border-dark-light rounded-md p-3 shadow-lg rotate-3 hidden sm:block"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <pre className="text-xs text-neon-blue whitespace-pre-wrap font-mono">
                  {`const skills = ["MERN", "Python", "ML"];
skills.forEach(skill => {
  console.log(\`🚀 Mastering \${skill}\`);
});`}
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
