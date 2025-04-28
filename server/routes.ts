import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Basic validation
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "Please provide all required fields" 
        });
      }
      
      // Log the contact message (in a real app, you might want to store this)
      console.log("New contact message:", { name, email, message });
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Message received successfully!" 
      });
    } catch (error) {
      // Handle errors
      console.error("Error processing contact message:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
