import React, { useState, useEffect } from 'react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  const [rippleStyle, setRippleStyle] = useState<React.CSSProperties | null>(null);
  
  // Create the ripple effect
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    
    // Calculate ripple position relative to the button
    const rippleX = e.clientX - buttonRect.left;
    const rippleY = e.clientY - buttonRect.top;
    
    // Create the ripple style
    setRippleStyle({
      left: rippleX + 'px',
      top: rippleY + 'px',
      animation: 'ripple 0.8s linear',
      background: isDarkMode 
        ? 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)' 
        : 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(99,102,241,0) 70%)'
    });
    
    // Call the toggle function
    toggleTheme();
    
    // Remove ripple after animation
    setTimeout(() => {
      setRippleStyle(null);
    }, 800);
  };
  
  // Add CSS for ripple animation to document
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        0% {
          transform: translate(-50%, -50%) scale(0.1);
          opacity: 0.8;
        }
        100% {
          transform: translate(-50%, -50%) scale(3);
          opacity: 0;
        }
      }
      
      .theme-toggle-button {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 50;
        width: 48px;
        height: 48px;
        border-radius: 9999px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }
      
      .theme-toggle-button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
      }
      
      .theme-toggle-button:active {
        transform: scale(0.95);
      }
      
      .ripple {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }
      
      .icon-transition {
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <button
      className={`theme-toggle-button ${isDarkMode ? 'bg-dark-lighter' : 'bg-white'}`}
      onClick={handleClick}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Ripple effect */}
      {rippleStyle && (
        <span className="ripple" style={rippleStyle}></span>
      )}
      
      {/* Icons */}
      <div 
        className="icon-transition"
        style={{
          transform: isDarkMode ? 'rotate(0deg)' : 'rotate(180deg)'
        }}
      >
        {isDarkMode ? (
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
            className="text-yellow-400"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
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
            className="text-indigo-700"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;