import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

// Dev server rate limiter (500 req/min per IP)
const devRateBuckets = new Map<string, number[]>();
const DEV_RATE_LIMIT_WINDOW_MS = 60_000;
const DEV_RATE_LIMIT_MAX = 500;

function devRateLimit(req: any, res: any, next: any) {
  const ip = req.ip || req.connection?.remoteAddress || "unknown";
  const now = Date.now();
  const windowStart = now - DEV_RATE_LIMIT_WINDOW_MS;
  const timestamps = devRateBuckets.get(ip)?.filter((t) => t > windowStart) ?? [];
  timestamps.push(now);
  devRateBuckets.set(ip, timestamps);
  if (timestamps.length > DEV_RATE_LIMIT_MAX) {
    return res.status(429).send("Too many requests");
  }
  next();
}

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(devRateLimit, vite.middlewares);

  app.use("*", devRateLimit, async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
