import { motion } from "framer-motion";
import { Link } from "wouter";

const PassionPage = () => {
  return (
    <div className="min-h-screen bg-dark dark:bg-dark text-light">
      {/* Header with Navigation */}
      <header className="py-6 px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-neon-blue font-bold text-xl transition-colors hover:text-light">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to Portfolio</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-neon-blue">Passion</span>
            </h1>
            <p className="text-xl text-light-darker max-w-2xl mx-auto">
              Beyond code, I find balance on two wheels
            </p>
          </motion.div>

          {/* Full-width Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full h-auto md:h-[60vh] mb-16 overflow-hidden rounded-xl flex items-center justify-center relative"
            style={{ 
              background: "linear-gradient(rgba(20, 20, 30, 0.7), rgba(10, 10, 18, 0.8))"
            }}
          >
            {/* Blurred Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden"
              style={{
                backgroundImage: `url(/photo3.jpg?v=${Date.now()})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(15px) brightness(0.4)",
                opacity: 0.6
              }}
            ></div>
            
            <div className="w-full h-full flex items-center justify-center p-4 z-10 relative">
              <img
                src={`/photo3.jpg?v=${Date.now()}`}
                alt="Aliakbar biking"
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                loading="lazy"
                onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
                style={{ 
                  objectPosition: "center center",
                  width: "auto",
                  height: "auto",
                  maxHeight: "calc(60vh - 2rem)"
                }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 relative inline-block">
                Off Code, On Road
                <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue opacity-70"></span>
              </h2>
              <p className="text-light-darker mb-6 leading-relaxed text-lg">
                When I'm off-code, I'm on the road. Riding fuels my clarity and creativity.
                There's something about the open road that clears my mind and helps me
                approach technical challenges with fresh perspectives.
              </p>
              <p className="text-light-darker mb-6 leading-relaxed text-lg">
                The problem-solving needed for difficult trails mirrors the analytical
                thinking required in software development. Both require focus, quick
                decision-making, and adaptability.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 relative inline-block">
                Balance in Motion
                <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue opacity-70"></span>
              </h2>
              <p className="text-light-darker mb-6 leading-relaxed text-lg">
                Finding balance between intense focus and complete release is essential.
                Just as I meticulously architect code structures, I plan routes and
                challenges on my bike.
              </p>
              <p className="text-light-darker mb-6 leading-relaxed text-lg">
                This balance keeps me grounded and fuels my creativity as a developer.
                The discipline, endurance, and problem-solving I've honed through biking
                directly translate to how I approach complex coding challenges.
              </p>
            </div>
          </motion.div>

          {/* Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <div className="bg-dark-lighter p-6 rounded-xl">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-neon-blue"
                >
                  <path d="M12 2v8"></path>
                  <path d="m16 6-4-4-4 4"></path>
                  <path d="M8 16H6a2 2 0 0 1-2-2v-4"></path>
                  <path d="M16 16h2a2 2 0 0 0 2-2v-4"></path>
                  <path d="M22 16c0 2.5-1 4-4 4H6c-3 0-4-1.5-4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Physical Wellness</h3>
              <p className="text-light-darker">
                Biking keeps me physically active, building stamina that helps me
                through long coding sessions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-dark-lighter p-6 rounded-xl">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-neon-blue"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M9 15v-6"></path>
                  <path d="M12 18v-9"></path>
                  <path d="M15 15v-6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mental Clarity</h3>
              <p className="text-light-darker">
                The focus required on challenging trails helps clear my mind
                and return to coding problems with fresh perspectives.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-dark-lighter p-6 rounded-xl">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-neon-blue"
                >
                  <line x1="22" x2="2" y1="12" y2="12"></line>
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  <line x1="6" x2="6.01" y1="16" y2="16"></line>
                  <line x1="10" x2="10.01" y1="16" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
              <p className="text-light-darker">
                Complex trails require quick decisions and adaptability,
                skills that directly translate to tackling coding challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PassionPage;