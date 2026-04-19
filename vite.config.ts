import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DEFAULT_SITE_URL = "https://www.holistechglobalsolutions.com";

const SITEMAP_PATHS = [
  "/",
  "/solutions",
  "/ecosystem",
  "/industries",
  "/insights",
  "/company",
  "/partner",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      {
        name: "inject-site-origin-in-index-html",
        transformIndexHtml(html) {
          return html.replaceAll("__SITE_ORIGIN__", siteUrl);
        },
      },
      {
        name: "generate-seo-files",
        closeBundle() {
          const outDir = path.resolve(__dirname, "dist");
          if (!fs.existsSync(outDir)) return;

          const urlBlocks = SITEMAP_PATHS.map((pathname) => {
            const loc = pathname === "/" ? `${siteUrl}/` : `${siteUrl}${pathname}`;
            const priority = pathname === "/" ? "1.0" : "0.8";
            return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
          }).join("\n");

          const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks}
</urlset>
`;
          fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);

          const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
          fs.writeFileSync(path.join(outDir, "robots.txt"), robots);
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
