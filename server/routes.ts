import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactFormEmail } from "./email";
import { saveContactSubmission } from "./firebaseAdmin";

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

      // Save to Firestore and send email in parallel
      const [firestoreId, emailSent] = await Promise.all([
        saveContactSubmission({ name, email, subject, message, timestamp }),
        sendContactFormEmail({ name, email, subject, message, timestamp }),
      ]);

      if (firestoreId && emailSent) {
        res.json({
          success: true,
          message: "Contact form submitted successfully",
          submissionId: firestoreId,
        });
      } else {
        res.status(500).json({
          error: "Failed to process submission",
        });
      }
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
