import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  // const isProd = command === 'build';
  // const basePath = isProd ? '/geotortue-ng/' : '/';
  // Always '/' to be deployed on a subdomain of a web site
  const basePath = '/';

  return {
    base: basePath,
    plugins: [
      tsconfigPaths(),
      viteStaticCopy({
        targets: [
          // Copy language files in build destination folder
          {
            src: 'src/assets/locales',
            dest: '.'
          },
          // Copy all license files, either own or dependencies
          {
            src: [
              './LICENSE',
              './DEPENDENCIES-LICENSES',
              './licenses',
              './third-party-notices.html'
            ],
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
        // Libraries like antlr4 and mathjs heavily rely on reflection (reading Function.name
        // or Class.name at runtime) to map AST nodes and mathematical operations.
        // It's safe to let Terser compress the logic, but it MUST preserve the original
        // names of functions and classes to prevent these engines from crashing.
        keep_classnames: true,
        keep_fnames: true,

        compress: {
          // Drop ONLY log, info, and debug. Keep warn and error!
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          drop_debugger: true,
          ecma: 2020, // ECMA up to 2020
          passes: 2
        },
        format: {
          comments: false // Clean bundles for Prettier-friendly output if inspected
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
          preset: 'recommended'
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
  };
});
