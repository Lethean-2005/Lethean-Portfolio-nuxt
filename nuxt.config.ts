import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  // Static file serving configuration
  nitro: {
    serveStatic: true,
    prerender: {
      crawlLinks: false,
    }
  },
  
  // Additional optimization for static assets
  experimental: {
    payloadExtraction: false
  }
});