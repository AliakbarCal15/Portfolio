import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
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
