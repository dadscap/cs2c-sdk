import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import { AccountAPIKeysApi } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey, requireRealApiKey } from "../../_shared/auth.js";
import { CleanupRegistry } from "../../_shared/cleanup.js";
import { printHelpIfRequested } from "../../_shared/cli.js";
import { renderTable } from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { name: string; keepResources: boolean } {
  const { values } = parseArgs({
    options: {
      name: { type: "string" },
      "keep-resources": { type: "boolean" },
    },
  });
  return {
    name: values.name ?? "SDK example sub-key",
    keepResources: values["keep-resources"] ?? false,
  };
}

async function main(): Promise<number> {
  if (printHelpIfRequested("Usage: npm run example -- examples/quant-tier/sub-key-lifecycle/sub_key_lifecycle.ts [--name \"SDK example sub-key\"] [--keep-resources]")) {
    return 0;
  }
  const args = readOptions();
  const cleanup = new CleanupRegistry(args.keepResources);

  let bearerToken: string;
  try {
    bearerToken = loadApiKey("CS2C_API_KEY", SCRIPT_PATH);
    requireRealApiKey(bearerToken);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }

  const configuration = buildConfiguration(bearerToken);

  try {
    const keysApi = new AccountAPIKeysApi(configuration);
    const before = await keysApi.listSubKeys({ limit: 10 });
    const created = await keysApi.createSubKey({
      childAPIKeyCreateRequest: {
        name: args.name,
        rateRequestsPerMinuteOverride: 60,
      },
    });
    const keyId = created.keyInfo.id;
    cleanup.add("delete temporary sub-key", () => keysApi.deleteSubKey({ keyId }));
    const detail = await keysApi.getSubKey({ keyId });
    const updated = await keysApi.updateSubKey({
      keyId,
      childAPIKeyUpdateRequest: { name: `${args.name} (updated)` },
    });
    const reissued = await keysApi.reissueSubKey({ keyId });
    const after = await keysApi.listSubKeys({ limit: 10 });
    const cleanupResults = await cleanup.run();

    console.log("Sub-key lifecycle (/v1/account/sub-keys):");
    console.log(
      renderTable(
        ["step", "key_id", "prefix", "active", "requests_month"],
        [
          ["before_count", before.keys.length, "N/A", "N/A", "N/A"],
          ["created", created.keyInfo.id, created.keyInfo.keyPrefix, String(created.keyInfo.isActive), "0"],
          ["detail", detail.key.id, detail.key.keyPrefix, String(detail.key.isActive), detail.requestsThisMonth],
          ["updated", updated.key.id, updated.key.keyPrefix, String(updated.key.isActive), updated.requestsThisMonth],
          ["reissued", reissued.keyInfo.id, reissued.keyInfo.keyPrefix, String(reissued.keyInfo.isActive), "0"],
          ["after_count", after.keys.length, "N/A", "N/A", "N/A"],
        ],
      ),
    );
    console.log();
    console.log("Cleanup summary:");
    console.log(
      renderTable(
        ["resource", "status", "detail"],
        cleanupResults.map((result) => [result.label, result.ok ? "ok" : "failed", result.detail]),
      ),
    );
    return 0;
  } catch (error) {
    console.error(await formatApiError(error));
    const cleanupResults = await cleanup.run();
    if (cleanupResults.length > 0) {
      console.error(renderTable(["resource", "status", "detail"], cleanupResults.map((result) => [result.label, result.ok ? "ok" : "failed", result.detail])));
    }
    return 1;
  }
}

void main().then((code) => {
  process.exitCode = code;
});
