import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from 'nodemailer';

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Define contact message type
  interface ContactMessage {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: string;
    read: boolean;
  }
  
  // Store contact messages in memory (in a real app, these would be in a database)
  const contactMessages: ContactMessage[] = [];
  
  // Create a reusable nodemailer transporter using Gmail (WORKING CONFIGURATION)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aliakbarcal15@gmail.com',
      pass: 'jzsdousldbrklmxd', // App password
    }
  });
  
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
      
      // Prepare email using Nodemailer (EXACT WORKING FORMAT)
      const mailOptions = {
        from: email, // sender's email from the form
        to: 'aliakbarcal15@gmail.com', // your email
        subject: `New Contact Message from ${name}`,
        text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      };
      
      // Send email using nodemailer
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully with Nodemailer. Message ID:', info.messageId);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Your message has been sent! Thank you for reaching out.',
        contactId: contactMessage.id
      });
    } catch (error) {
      console.error('Error sending email with Nodemailer:', error);
      
      // Even if the email fails, we still have the message in our in-memory storage
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to send email. Please try again later.',
        contactId: Date.now().toString()
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
