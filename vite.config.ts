import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        // Copie des fichiers de langue vers le dossier de build
        {
          src: 'src/assets/locales',
          dest: '.'
        },
        {
          src: './LICENSE',
          dest: '.'
        }
      ]
    }),
    visualizer({ open: true, filename: 'bundle-stats.html' })
  ],
  server: {
    port: 3000
    // open: true  /* see npm script "start:open" */
  },
  build: {
    target: 'es2022',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        // Drop console logs in production
        drop_console: true,
        drop_debugger: true,
        // High-level optimizations for modern JS
        ecma: 2020, // ECMA up to 2020, see tsup ???
        passes: 2
      },
      format: {
        comments: false // Clean bundles for Prettier-friendly output if inspected
      },
      mangle: {
        // If you need to keep specific variables for math.js/three.js logic
        reserved: ['THREE', 'math']
      }
    },
    rollupOptions: {
      output: {
        // Manual Chunking: Group heavy hitters to keep the main bundle lean
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('codemirror') || id.includes('@codemirror')) return 'vendor-cm';
            if (id.includes('mathjs')) return 'vendor-math';
            if (id.includes('antlr')) return 'vendor-antlr';
            return 'vendor'; // Everything else
          }
        }
      },
      // 3. Aggressive Tree Shaking
      treeshake: {
        preset: 'recommended',
        moduleSideEffects: false // Tells Rollup your code is side-effect free
      }
    }
  },
  esbuild: {
    // Must be synch with target in tsconfig.json
    // Force esbuild to produce code compatible with expected target.
    // This ensures Decorators are transpiled into standard JS
    target: 'es2022',
    // Use this to keep specific names if needed for Three.js/Math.js
    keepNames: true
  },
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
  }
});
//
