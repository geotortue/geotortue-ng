import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { cwd } from 'node:process';

const generatedDir = resolve(cwd(), 'src/infrastructure/antlr/generated');

const shouldBuildGrammar = (): boolean => {
  if (!existsSync(generatedDir)) {
    return true;
  }

  return readdirSync(generatedDir).length === 0;
};

if (shouldBuildGrammar()) {
  console.log(
    '[pretest or prestart:dev] ANTLR generated directory is missing or empty. Running build:grammar...'
  );
  execSync('npm run build:grammar', { stdio: 'inherit' });
} else {
  console.log(
    '[pretest or prestart:dev] ANTLR generated directory already contains files. Skipping build:grammar.'
  );
}
