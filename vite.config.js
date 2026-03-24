import { defineConfig, loadEnv } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    // Default to relative asset paths so the built app works from any folder.
    // Set VITE_BASE_PATH (for example "/CoilQuiz/") when a fixed base is required.
    base: env.VITE_BASE_PATH || "./",
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  };
});
