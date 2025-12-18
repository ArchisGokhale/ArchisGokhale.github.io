import { build as viteBuild, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { rm } from "fs/promises";

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
    
    console.log("✅ Build complete! Static site ready in docs/ folder");
    console.log("\n📄 Next steps:");
    console.log("   1. git add . && git commit -m 'build: GitHub Pages deployment'");
    console.log("   2. git push");
    console.log("   3. Go to repo Settings > Pages");
    console.log("   4. Set Source to 'Deploy from a branch'");
    console.log("   5. Set Branch to 'main' and Folder to '/docs'");
    console.log("   6. Your site will be live at: https://archisgokhale.github.io");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

buildForGitHubPages();
