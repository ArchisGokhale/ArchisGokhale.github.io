import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactFormEmail } from "./email";
import { saveContactSubmission } from "./submissions";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const timestamp = new Date();

      // Save to Supabase
      const submissionId = await saveContactSubmission({ name, email, subject, message, timestamp: timestamp.toISOString() });

      // Send email notification (don't fail if email doesn't work)
      sendContactFormEmail({ name, email, subject, message, timestamp }).catch(err => {
        console.error("Email notification failed (but form was saved):", err);
      });

      res.json({
        success: true,
        message: "Contact form submitted successfully",
        submissionId: submissionId,
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({
        error: "Failed to process contact form",
      });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
