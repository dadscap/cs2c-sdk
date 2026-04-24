import { ResponseError } from "cs2cap";

function compactWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

async function readResponseDetail(response: Response): Promise<string | undefined> {
  try {
    const detail = compactWhitespace(await response.clone().text());
    return detail || undefined;
  } catch {
    return undefined;
  }
}

export async function formatApiError(error: unknown): Promise<string> {
  if (error instanceof ResponseError) {
    const detail = await readResponseDetail(error.response);
    if (detail) {
      return `API request failed (${error.response.status}): ${detail}`;
    }
    return `API request failed (${error.response.status} ${error.response.statusText || "error"}).`;
  }

  if (error instanceof Error) {
    return `API request failed: ${error.message}`;
  }

  return `API request failed: ${String(error)}`;
}

export async function callOrSkip<T>(
  label: string,
  func: () => Promise<T>,
): Promise<{ data: T | null; note: string | null }> {
  try {
    return { data: await func(), note: null };
  } catch (error) {
    if (error instanceof ResponseError && error.response.status === 403) {
      const detail = await readResponseDetail(error.response);
      return {
        data: null,
        note: `${label} skipped: ${detail || error.response.statusText || "forbidden"}`,
      };
    }

    throw error;
  }
}
