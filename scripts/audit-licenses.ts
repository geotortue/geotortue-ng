import { init } from 'license-checker-rseidelsohn';
import { mkdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exit } from 'node:process';
import { parseArgs } from 'node:util';

const DEFAULT_CONFIG_FILE_PATH = 'license-config.json';
const DEFAUT_LICENSE_FILES_PATH = 'licences';

// --- Type Definitions ---
interface LicenseConfig {
  production: boolean;
  allowedLicenses: string[];
  excludedPackages?: string[];
  out?: string;
  files?: string;
}

interface CheckerOptions {
  start: string;
  production: boolean;
  onlyAllow: string;
  excludePackages?: string;
  out?: string;
  files?: string;
  [key: string]: any;
}

interface LicenseData {
  licenses?: string | string[]; // licenses is optional to handle missing data
  repository?: string;
  publisher?: string;
  email?: string;
  path?: string;
  licenseFile?: string;
}

interface CheckerResult {
  [packageName: string]: LicenseData;
}

// --- Helper: Parse Arguments ---
function getArgs() {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      config: {
        type: 'string',
        short: 'c',
        default: DEFAULT_CONFIG_FILE_PATH
      },
      summary: {
        type: 'boolean',
        short: 's',
        default: false
      }
    }
  });
  return values;
}

// --- Main Execution ---
async function runAudit() {
  const args = getArgs();
  const rootDir = resolve(fileURLToPath(new URL('..', import.meta.url)));

  // Resolve config path relative to where the command is run, or default to root
  const configPath = resolve(process.cwd(), args.config!);

  console.log(`📄 Reading configuration from: ${configPath}`);

  let config: LicenseConfig;

  try {
    const fileContent = await readFile(configPath, 'utf-8');
    config = JSON.parse(fileContent);
  } catch (error) {
    console.error(`❌ Failed to read configuration file: ${(error as Error).message}`);
    exit(1);
  }

  // Ensure the directory for license files exists if requested
  // empty string selects the default path, see DEFAUT_LICENSE_FILES_PATH
  // to get the root path, use '.' or './'
  if (config.files != null) {
    const configFilesPath = config.files.trim() || DEFAUT_LICENSE_FILES_PATH;
    const filesPath = resolve(process.cwd(), configFilesPath);
    await mkdir(filesPath, { recursive: true });
    console.log(`📂 License files will be copied to: ${filesPath}`);
  }

  // We explicitly set 'summary: false' in options because we want the full raw data
  // to generate our own "Dual Output" (List + Summary) if requested.
  // Transform arrays into semicolon-separated strings required by the tool
  const checkerOptions: CheckerOptions = {
    start: rootDir,
    production: config.production,
    summary: false,
    onlyAllow: config.allowedLicenses.join(';'),
    excludePackages: config.excludedPackages?.join(';'),
    out: config.out,
    files: config.files?.trim()
      ? config.files
      : config.files != null
        ? DEFAUT_LICENSE_FILES_PATH
        : undefined
  };

  if (config.out) {
    console.log(`💾 Output will be written to: ${config.out}`);
  } else {
    console.log('🔍 Starting license audit...');
  }

  // The library uses a callback pattern, so we wrap it in a Promise to use async/await
  const auditPromise = new Promise<CheckerResult>((resolve, reject) => {
    init(checkerOptions, (err: Error | null, packages: CheckerResult) => {
      if (err) {
        // The tool returns an error object if forbidden licenses are found
        reject(err);
      } else {
        resolve(packages);
      }
    });
  });

  try {
    const packages = await auditPromise;

    // 1. Print detailed list only if not writing to a specific 'out' file
    //    using a format similar to --plainVertical
    if (!config.out) {
      console.log('\n--- 📦 Full Dependency List ---');
      Object.entries(packages).forEach(([pkgName, data]) => {
        console.log(pkgName);

        const rawLicense = data.licenses || 'UNKNOWN';
        const licenseStr = Array.isArray(rawLicense) ? rawLicense.join(' OR ') : rawLicense;

        console.log(`  licenses: ${licenseStr}`);
        if (data.repository) console.log(`  repository: ${data.repository}`);
        if (data.publisher) console.log(`  publisher: ${data.publisher}`);
        if (data.email) console.log(`  email: ${data.email}`);
        console.log(''); // Newline separator
      });
    }

    // 2. Conditionally print the summary at the bottom
    if (args.summary) {
      console.log('\n--- 📊 License Summary ---');
      const summaryCount: Record<string, number> = {};

      Object.values(packages).forEach((data) => {
        const rawLicenses = data.licenses || 'UNKNOWN';
        const licenses = Array.isArray(rawLicenses) ? `(${rawLicenses.join(' OR ')})` : rawLicenses;

        summaryCount[licenses] = (summaryCount[licenses] || 0) + 1;
      });

      // Print sorted summary
      Object.entries(summaryCount)
        .sort(([, a], [, b]) => b - a) // Sort by count descending
        .forEach(([license, count]) => {
          console.log(`${license}: ${count}`);
        });
      console.log('--------------------------');
    }

    console.log('\n✅ License Audit Passed: All production dependencies are compliant.');
    exit(0);
  } catch (error) {
    console.error('\n❌ LICENSE AUDIT FAILED');
    console.error('The following forbidden licenses were found or an error occurred:');
    console.error((error as Error).message);
    exit(1);
  }
}

runAudit();
