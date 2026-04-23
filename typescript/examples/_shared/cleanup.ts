export type CleanupCallback = () => Promise<unknown> | unknown;

export interface CleanupResult {
  label: string;
  ok: boolean;
  detail: string;
}

interface CleanupAction {
  label: string;
  callback: CleanupCallback;
}

function describeResponse(value: unknown): string {
  if (value === undefined) {
    return "void";
  }
  if (value === null) {
    return "null";
  }
  if (typeof value === "object") {
    return value.constructor?.name || "Object";
  }
  return typeof value;
}

export class CleanupRegistry {
  private readonly actions: CleanupAction[] = [];

  constructor(private readonly keepResources = false) {}

  add(label: string, callback: CleanupCallback): void {
    this.actions.push({ label, callback });
  }

  pendingCount(): number {
    return this.actions.length;
  }

  async run(): Promise<CleanupResult[]> {
    if (this.keepResources) {
      return this.actions.map((action) => ({
        label: action.label,
        ok: true,
        detail: "kept (--keep-resources)",
      }));
    }

    const results: CleanupResult[] = [];
    while (this.actions.length > 0) {
      const action = this.actions.pop()!;
      try {
        const response = await action.callback();
        results.push({
          label: action.label,
          ok: true,
          detail: `ok (${describeResponse(response)})`,
        });
      } catch (error) {
        results.push({
          label: action.label,
          ok: false,
          detail: error instanceof Error ? error.message : String(error),
        });
      }
    }

    return results;
  }
}
