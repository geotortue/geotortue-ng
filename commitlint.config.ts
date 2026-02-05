import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  // Optional: detailed rules if you want to force lower-case, etc.
  rules: {
    'body-max-line-length': [2, 'always', 100]
  }
};

export default Configuration;
