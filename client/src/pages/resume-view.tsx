import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

const ResumeView = () => {
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Set the page title
    document.title = "Resume - Aliakbar Calcuttawala";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Handle iframe loading errors
  const handleIframeError = () => {
    setIframeError(true);
    console.error("Failed to load PDF in iframe");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-dark-lighter shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-dark dark:text-light">
            Resume - Aliakbar Calcuttawala
          </h1>
          
          <div className="flex items-center gap-4">
            <a 
              href="/resume.pdf" 
              download="Aliakbar_Calcuttawala_Resume.pdf"
              className="flex items-center gap-2 bg-neon-blue text-dark px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
              Download Resume
            </a>
            
            <Link href="/">
              <a className="text-dark dark:text-light hover:text-neon-blue dark:hover:text-neon-blue transition-colors">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7 7-7m-14 0l2-2" 
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <motion.main 
        className="flex-1 p-4 md:p-6 container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white dark:bg-dark-lighter shadow-lg rounded-lg overflow-hidden h-[80vh]">
          {!iframeError ? (
            <object
              data="/resume.pdf" 
              type="application/pdf"
              className="w-full h-full"
              aria-label="Aliakbar Calcuttawala Resume"
              data-testid="resume-object"
              onError={handleIframeError}
            >
              <iframe 
                src={`https://docs.google.com/viewer?url=${window.location.origin}/resume.pdf&embedded=true`}
                className="w-full h-full border-0"
                title="Aliakbar Calcuttawala Resume"
                onError={handleIframeError}
                data-testid="resume-iframe-fallback"
              />
            </object>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 text-neon-blue mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-800 dark:text-light mb-2">
                Unable to display PDF
              </h3>
              <p className="text-gray-600 dark:text-light-darker mb-6 max-w-md">
                Your browser couldn't display the PDF. Please download the resume using the button below.
              </p>
              <a 
                href="/resume.pdf" 
                download="Aliakbar_Calcuttawala_Resume.pdf"
                className="flex items-center gap-2 bg-neon-blue text-dark px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
                Download Resume
              </a>
            </div>
          )}
        </div>
      </motion.main>
    </div>
  );
};

export default ResumeView;