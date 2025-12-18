import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactFormEmail } from "./email";
import { saveContactSubmission } from "./submissions";

// Simple in-memory rate limiter per IP
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 20; // max requests per window
const rateBuckets = new Map<string, number[]>();

function rateLimit(req: any, res: any, next: any) {
  const ip = req.ip || req.connection?.remoteAddress || "unknown";
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = rateBuckets.get(ip)?.filter((t) => t > windowStart) ?? [];
  timestamps.push(now);
  rateBuckets.set(ip, timestamps);
  if (timestamps.length > RATE_LIMIT_MAX) {
    return res.status(429).json({ error: "Too many requests. Please try again soon." });
  }
  next();
}

// Basic input validation
function validateContact(body: any) {
  const errors: string[] = [];
  const isString = (v: any) => typeof v === "string";
  const len = (v: string) => v.trim().length;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!isString(body.name) || len(body.name) < 1 || len(body.name) > 100) errors.push("Invalid name");
  if (!isString(body.email) || !emailRe.test(body.email) || len(body.email) > 254) errors.push("Invalid email");
  if (!isString(body.subject) || len(body.subject) < 1 || len(body.subject) > 200) errors.push("Invalid subject");
  if (!isString(body.message) || len(body.message) < 1 || len(body.message) > 5000) errors.push("Invalid message");
  return errors;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form submission endpoint
  app.post("/api/contact", rateLimit, async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      const validationErrors = validateContact({ name, email, subject, message });
      if (validationErrors.length) {
        return res.status(400).json({ error: validationErrors.join(", ") });
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
