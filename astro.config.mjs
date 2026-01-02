// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Site URL - Update before deployment
  site: 'https://hadakoi.tech',

  // Build configuration
  build: {
    // Inline small stylesheets for performance
    inlineStylesheets: 'auto',
  },

  // Compress HTML output
  compressHTML: true,

  // Prefetch configuration for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Development server configuration
  server: {
    port: 4321,
    host: true,
  },

  // Vite configuration
  vite: {
    build: {
      // Generate source maps for debugging
      sourcemap: false,
      // Minify output
      minify: 'esbuild',
      // CSS code splitting
      cssCodeSplit: true,
    },
    css: {
      // CSS minification
      devSourcemap: true,
    },
  },
});
