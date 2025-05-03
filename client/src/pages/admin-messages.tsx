import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/contact-messages');
        
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen px-4 py-16 bg-navy dark:bg-dark">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-light">Contact Messages</h1>
          <Link href="/">
            <button className="bg-neon-blue text-dark px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
              Back to Homepage
            </button>
          </Link>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin w-12 h-12 border-4 border-neon-blue border-t-transparent rounded-full"></div>
          </div>
        ) : error ? (
          <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-100 p-4 rounded-md">
            <p>Error: {error}</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="bg-dark-lighter p-8 rounded-lg text-center">
            <p className="text-light text-lg">No messages yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-dark-lighter p-6 rounded-lg shadow-lg border border-dark-light"
              >
                <div className="flex flex-wrap justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-light">{message.name}</h3>
                    <a href={`mailto:${message.email}`} className="text-neon-blue hover:underline">
                      {message.email}
                    </a>
                  </div>
                  <div className="text-light-darker text-sm">
                    {new Date(message.timestamp).toLocaleString()}
                  </div>
                </div>
                <div className="bg-dark bg-opacity-50 p-4 rounded-md mb-4">
                  <p className="text-light whitespace-pre-wrap">{message.message}</p>
                </div>
                <div className="flex justify-end">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    message.read ? 'bg-green-900 bg-opacity-30 text-green-400' : 'bg-yellow-900 bg-opacity-30 text-yellow-400'
                  }`}>
                    {message.read ? 'Read' : 'Unread'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}