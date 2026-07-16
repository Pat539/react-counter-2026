import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      injectRegister: "auto",
      includeAssets: ["public"],
      manifest: {
        name: "PWA REACT AND VITE",
        short_name: "PWA REACT",
        description: "React and Vite app + PWA",
        theme_color: "#c9c3c3",
        icons: [
          {
            src: "/hero.png",
            sizes: "192x192",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
