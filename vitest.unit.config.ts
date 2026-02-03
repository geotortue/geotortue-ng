import { mergeConfig } from 'vitest/config';
import baseConfig from './vitest.config';

export default mergeConfig(baseConfig, {
  test: {
    include: ['src/**/*.test.ts'],
    exclude: ['src/**/*.integration.test.ts', 'node_modules/**']
  }
});
