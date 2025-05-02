import React, { useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="w-[90%] h-[90%] bg-white rounded-xl shadow-xl overflow-hidden relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-3 right-3 flex items-center gap-3 z-10">
          <a 
            href="/resume.pdf" 
            download="Aliakbar_Calcuttawala_Resume.pdf"
            className="flex items-center gap-2 bg-neon-blue text-dark px-3 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
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
          
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-black bg-white rounded-full p-2 shadow-md flex items-center justify-center"
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
        
        <div className="w-full h-full overflow-hidden">
          <iframe 
            src="/resume.pdf" 
            className="w-full h-full border-0"
            title="Aliakbar Calcuttawala Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;