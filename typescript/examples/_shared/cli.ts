export function parseIntegerOption(
  value: string | undefined,
  fallback: number,
  label: string,
): number {
  if (value === undefined) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    throw new Error(`${label} must be an integer.`);
  }
  return parsed;
}

export function parseFloatOption(
  value: string | undefined,
  fallback: number,
  label: string,
): number {
  if (value === undefined) {
    return fallback;
  }

  const parsed = Number.parseFloat(value);
  if (Number.isNaN(parsed)) {
    throw new Error(`${label} must be a number.`);
  }
  return parsed;
}

export function printHelpIfRequested(usage: string): boolean {
  if (!process.argv.includes("--help") && !process.argv.includes("-h")) {
    return false;
  }
  console.log(usage.trim());
  return true;
}
