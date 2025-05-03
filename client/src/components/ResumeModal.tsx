import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      // Reset iframe error state when opening
      setIframeError(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Handle iframe loading errors
  const handleIframeError = () => {
    setIframeError(true);
    console.error("Failed to load PDF in iframe");
  };

  // If modal is closed, don't render anything
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-[95%] h-[90%] bg-white dark:bg-dark-lighter rounded-xl shadow-2xl overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with title and actions */}
            <div className="bg-neon-blue/10 dark:bg-dark-light p-3 flex justify-between items-center border-b border-gray-200 dark:border-dark-light">
              <h3 className="text-lg font-semibold text-dark dark:text-light pl-2">
                Aliakbar Calcuttawala Resume
              </h3>
              
              <div className="flex items-center gap-3">
                <a 
                  href="/resume.pdf" 
                  download="Aliakbar_Calcuttawala_Resume.pdf"
                  className="flex items-center gap-2 bg-neon-blue text-dark px-3 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
                  aria-label="Download resume"
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
                  <span className="hidden sm:inline">Download</span>
                </a>
                
                <button 
                  onClick={onClose}
                  className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white bg-white dark:bg-dark rounded-full p-2 shadow-md flex items-center justify-center transition-colors"
                  aria-label="Close resume modal"
                >
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
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* PDF Content */}
            <div className="w-full h-full overflow-hidden bg-gray-100 dark:bg-dark">
              {!iframeError ? (
                <object
                  data="/resume.pdf" 
                  type="application/pdf"
                  className="w-full h-full"
                  aria-label="Aliakbar Calcuttawala Resume"
                  data-testid="modal-resume-object"
                  onError={handleIframeError}
                >
                  <iframe 
                    src={`https://docs.google.com/viewer?url=${window.location.origin}/resume.pdf&embedded=true`}
                    className="w-full h-full border-0"
                    title="Aliakbar Calcuttawala Resume"
                    onError={handleIframeError}
                    data-testid="modal-resume-iframe-fallback"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;