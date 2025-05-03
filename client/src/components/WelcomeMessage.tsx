import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getTimeBasedGreeting, getTimeBasedEmoji } from '@/lib/utils';

interface WelcomeMessageProps {
  visitorName?: string;
  className?: string;
}

const WelcomeMessage = ({ visitorName: initialName = 'Guest', className = '' }: WelcomeMessageProps) => {
  const [greeting, setGreeting] = useState<string>('');
  const [emoji, setEmoji] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [visitorName, setVisitorName] = useState<string>(initialName);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>(initialName);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle name edit
  const startEditing = () => {
    setIsEditing(true);
    // Focus the input after rendering
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  const saveName = () => {
    if (nameInput.trim()) {
      setVisitorName(nameInput.trim());
      // Save to localStorage
      localStorage.setItem('visitorName', nameInput.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      saveName();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setNameInput(visitorName);
    }
  };

  // Load saved name from localStorage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem('visitorName');
    if (savedName) {
      setVisitorName(savedName);
      setNameInput(savedName);
    }
  }, []);

  // Update the greeting and emoji
  useEffect(() => {
    // Set initial values
    updateTimeBasedContent();
    
    // Update the greeting and time every minute
    const intervalId = setInterval(() => {
      updateTimeBasedContent();
    }, 60000); // every minute
    
    return () => clearInterval(intervalId);
  }, [visitorName]);
  
  const updateTimeBasedContent = () => {
    setGreeting(getTimeBasedGreeting(visitorName));
    setEmoji(getTimeBasedEmoji());
    setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-4 rounded-lg bg-gradient-to-r from-dark-lighter to-dark border border-dark-light shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{emoji}</span>
          <h2 className="text-xl font-medium text-light">
            {greeting}
          </h2>
        </div>
        <div className="text-sm text-light-darker font-mono">
          {currentTime}
        </div>
      </div>
      
      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm text-light-darker">
          Welcome to my portfolio. Feel free to explore my projects and skills!
        </p>
        
        {isEditing ? (
          <div className="flex items-center ml-2">
            <input
              ref={inputRef}
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onBlur={saveName}
              onKeyDown={handleKeyDown}
              className="bg-dark-light text-light px-2 py-1 rounded text-sm w-24 focus:outline-none focus:ring-1 focus:ring-neon-blue"
              maxLength={15}
              placeholder="Your name"
            />
            <button 
              onClick={saveName} 
              className="ml-1 text-neon-blue hover:text-light transition-colors text-sm"
              aria-label="Save name"
            >
              <span className="text-lg">✓</span>
            </button>
          </div>
        ) : (
          <button
            onClick={startEditing}
            className="ml-2 text-xs text-light-darker hover:text-neon-blue transition-colors flex items-center"
            aria-label="Change name"
          >
            <span className="mr-1 text-xs">✏️</span>
            <span>{visitorName !== 'Guest' ? 'Change name' : 'Set name'}</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default WelcomeMessage;