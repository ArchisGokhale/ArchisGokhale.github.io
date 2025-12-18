import { build as viteBuild, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { rm, copyFile } from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

async function buildForGitHubPages() {
  try {
    console.log("🏗️  Building for GitHub Pages...");
    
    // Clean docs directory
    const docsDir = path.resolve(projectRoot, "docs");
    await rm(docsDir, { recursive: true, force: true });
    console.log("✓ Cleaned docs folder");
    
    // Build React client to docs/
    console.log("⏳ Building with Vite...");
    await viteBuild(
      defineConfig({
        root: path.resolve(projectRoot, "client"),
        base: "/",
        plugins: [react(), tailwindcss()],
        resolve: {
          alias: {
            "@": path.resolve(projectRoot, "client", "src"),
            "@shared": path.resolve(projectRoot, "shared"),
            "@assets": path.resolve(projectRoot, "attached_assets"),
          },
        },
        css: {
          postcss: {},
        },
        build: {
          outDir: docsDir,
          emptyOutDir: true,
        },
      })
    );
    
    // Preserve CNAME file for custom domain
    const cnameSource = path.resolve(projectRoot, "CNAME");
    const cnameTarget = path.resolve(docsDir, "CNAME");
    try {
      await copyFile(cnameSource, cnameTarget);
      console.log("✓ Preserved CNAME file for custom domain");
    } catch (error) {
      console.warn("⚠ CNAME file not found (optional)");
    }
    
    console.log("✅ Build complete! Static site ready in docs/ folder");
    console.log("\n📄 Your site is ready for: https://archisgokhale.codes");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

buildForGitHubPages();
