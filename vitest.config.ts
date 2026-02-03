/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // must be synch. with aliases in tsconfig.json
      '@domain': resolve(__dirname, './src/domain'),
      '@app': resolve(__dirname, './src/application'),
      '@lang': resolve(__dirname, './src/assets/locales'),
      '@ui': resolve(__dirname, './src/presentation'),
      '@infrastructure': resolve(__dirname, './src/infrastructure'),
      '@generated': resolve(__dirname, './src/infrastructure/antlr/generated')
    }
  },
  test: {
    // Enable describe, it, expect globally (optional, but standard)
    globals: true,

    // Simulates a browser environment for Lit components
    environment: 'happy-dom',

    // Parsing options
    passWithNoTests: true,

    // Pattern for test files
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'src/infrastructure/antlr/generated/**', // Exclude generated ANTLR code
        'node_modules/**',
        'dist/**'
      ]
    }
  }
});
