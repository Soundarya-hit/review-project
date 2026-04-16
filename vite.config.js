import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👉 Replace "YOUR_REPO_NAME" with your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: "/review-project/",
});
