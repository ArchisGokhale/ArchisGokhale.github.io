import express, { type Express } from "express";
import fs from "fs";
import path from "path";

// Simple static file rate limiter (500 req/min per IP)
const staticRateBuckets = new Map<string, number[]>();
const STATIC_RATE_LIMIT_WINDOW_MS = 60_000;
const STATIC_RATE_LIMIT_MAX = 500;

function staticRateLimit(req: any, res: any, next: any) {
  const ip = req.ip || req.connection?.remoteAddress || "unknown";
  const now = Date.now();
  const windowStart = now - STATIC_RATE_LIMIT_WINDOW_MS;
  const timestamps = staticRateBuckets.get(ip)?.filter((t) => t > windowStart) ?? [];
  timestamps.push(now);
  staticRateBuckets.set(ip, timestamps);
  if (timestamps.length > STATIC_RATE_LIMIT_MAX) {
    return res.status(429).send("Too many requests");
  }
  next();
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(staticRateLimit, staticRateLimit, express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", staticRateLimit, (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
