import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <motion.button
      onClick={handleClick}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-3 bg-white dark:bg-dark-lighter rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ripple effect */}
      <AnimatePresence>
        {isAnimating && (
          <motion.span
            key="ripple"
            initial={{ width: "0%", height: "0%", opacity: 0.7 }}
            animate={{ 
              width: "400%", 
              height: "400%", 
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              position: "absolute", 
              borderRadius: "50%", 
              background: isDarkMode 
                ? "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)" 
                : "radial-gradient(circle, rgba(99,102,241,0.7) 0%, rgba(99,102,241,0) 70%)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: -1
            }}
          />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ 
          scale: 1,
          rotate: isDarkMode ? 0 : 180,
        }}
        transition={{ 
          duration: 0.7, 
          type: "spring", 
          stiffness: 200,
          damping: 20
        }}
        className="relative w-6 h-6"
      >
        <AnimatePresence initial={false} mode="wait">
          {isDarkMode ? (
            <motion.svg
              key="sun"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-yellow-400 absolute"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-indigo-700 absolute"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;