import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submission
  // Temporary solution that stores messages in memory until full email functionality is set up
  const contactMessages = [];
  
  app.post('/api/send-email', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
      }
      
      // Store the contact message
      const timestamp = new Date().toISOString();
      const contactMessage = {
        id: Date.now().toString(),
        name,
        email,
        message,
        timestamp,
        read: false
      };
      
      // Add to our in-memory storage
      contactMessages.push(contactMessage);
      
      console.log('New contact form submission:', contactMessage);
      
      // In a real application, you would persist this to a database
      // For a full email solution, we will implement nodemailer with Gmail SMTP
      // We need to ask the user for an app password for the Gmail account
      
      return res.status(200).json({ 
        success: true, 
        message: 'Message received successfully! We will implement email delivery in the next iteration.',
        contactId: contactMessage.id
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        error: 'An error occurred while processing your message. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  // API endpoint to get all contact messages (for admin purposes)
  app.get('/api/contact-messages', (req, res) => {
    return res.status(200).json(contactMessages);
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)
  
  // Basic API endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
  });
  
  // Simple API endpoint to test if server is working
  app.get('/api/file-test', (req, res) => {
    res.json({ 
      message: 'Static files path',
      publicPath: '/public', 
      imageExample: '/photo1.jpg',
      resumePath: '/resume.pdf'
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
