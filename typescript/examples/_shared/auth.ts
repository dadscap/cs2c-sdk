import fs from "node:fs";
import path from "node:path";

import { Configuration } from "cs2cap";

function stripQuotes(value: string): string {
  if (value.length >= 2 && value[0] === value.at(-1) && [`'`, `"`].includes(value[0]!)) {
    return value.slice(1, -1);
  }
  return value;
}

export function findSdkScriptsRoot(startPath: string): string {
  let current = path.resolve(startPath);
  if (!fs.statSync(current).isDirectory()) {
    current = path.dirname(current);
  }

  while (true) {
    if (fs.existsSync(path.join(current, ".env.example"))) {
      return current;
    }

    const parent = path.dirname(current);
    if (parent === current) {
      break;
    }
    current = parent;
  }

  throw new Error("Could not locate the sdk-scripts root from the current example path.");
}

export function findEnvFile(startPath: string): string {
  const envPath = path.join(findSdkScriptsRoot(startPath), ".env");
  if (!fs.existsSync(envPath)) {
    throw new Error(`No .env file found at ${envPath}. Create it from .env.example first.`);
  }
  return envPath;
}

export function readEnvKey(keyName: string, envPath: string): string {
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) {
      continue;
    }

    const [key, ...rest] = line.split("=");
    if (key.trim() !== keyName) {
      continue;
    }

    const cleaned = stripQuotes(rest.join("=").trim());
    if (cleaned) {
      return cleaned;
    }
  }

  throw new Error(`No ${keyName} value found in ${envPath}.`);
}

export function loadApiKey(keyName: string, startPath: string): string {
  const override = process.env.BEARER_TOKEN;
  if (override) {
    return override;
  }

  return readEnvKey(keyName, findEnvFile(startPath));
}

export function buildConfiguration(accessToken: string): Configuration {
  return new Configuration({ accessToken });
}

export function requireRealApiKey(accessToken: string): void {
  if (!accessToken.startsWith("sk_")) {
    throw new Error("This example requires a real sk_* API key, not a session token.");
  }
}
