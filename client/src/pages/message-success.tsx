import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function MessageSuccess() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center bg-dark-lighter p-8 rounded-lg shadow-xl border border-neon-blue/30"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-neon-blue rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-light mb-4">Message Sent!</h1>
        
        <p className="text-light-darker mb-8">
          Thank you for reaching out. Your message has been received and I'll get back to you as soon as possible.
        </p>
        
        <div className="space-y-3">
          <Link href="/">
            <a className="block w-full bg-neon-blue text-dark py-3 rounded-md font-medium transition-all duration-300 hover:bg-opacity-90">
              Back to Homepage
            </a>
          </Link>
          <p className="text-sm text-light-darker mt-6">
            If you need immediate assistance, please contact me directly at{' '}
            <a href="mailto:aliakbarcal15@gmail.com" className="text-neon-blue hover:underline">
              aliakbarcal15@gmail.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}