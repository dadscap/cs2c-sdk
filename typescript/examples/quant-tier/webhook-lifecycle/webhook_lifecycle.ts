import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import { AccountWebhooksApi } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey, requireRealApiKey } from "../../_shared/auth.js";
import { CleanupRegistry } from "../../_shared/cleanup.js";
import { printHelpIfRequested } from "../../_shared/cli.js";
import { renderTable } from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { url: string; label: string; keepResources: boolean } {
  const { values } = parseArgs({
    options: {
      url: { type: "string" },
      label: { type: "string" },
      "keep-resources": { type: "boolean" },
    },
  });
  return {
    url: values.url ?? "https://example.com/cs2cap-webhook",
    label: values.label ?? "SDK example webhook",
    keepResources: values["keep-resources"] ?? false,
  };
}

async function main(): Promise<number> {
  if (printHelpIfRequested("Usage: npm run example -- examples/quant-tier/webhook-lifecycle/webhook_lifecycle.ts [--url https://example.com/cs2cap-webhook] [--label \"SDK example webhook\"] [--keep-resources]")) {
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
    const webhooksApi = new AccountWebhooksApi(configuration);
    const before = await webhooksApi.listWebhooks();
    const created = await webhooksApi.createWebhook({
      webhookCreateRequest: { label: args.label, url: args.url, isActive: false },
    });
    const webhookId = created.webhook.id;
    cleanup.add("delete temporary webhook", () => webhooksApi.deleteWebhook({ webhookId }));
    const updated = await webhooksApi.updateWebhook({
      webhookId,
      webhookUpdateRequest: { label: `${args.label} (updated)`, isActive: false },
    });
    const rotated = await webhooksApi.rotateWebhookSecret({ webhookId });
    const deliveries = await webhooksApi.listWebhookDeliveries({ limit: 5 });
    const deliveryDetail = deliveries.deliveries[0]
      ? await webhooksApi.getWebhookDelivery({ deliveryId: deliveries.deliveries[0].id })
      : null;
    const after = await webhooksApi.listWebhooks();
    const cleanupResults = await cleanup.run();

    console.log("Webhook lifecycle (/v1/account/webhooks):");
    console.log(
      renderTable(
        ["step", "webhook_id", "label", "active", "secret_last4"],
        [
          ["before_count", before.webhooks.length, "N/A", "N/A", "N/A"],
          ["created", created.webhook.id, created.webhook.label, String(created.webhook.isActive), created.webhook.secretLast4],
          ["updated", updated.id, updated.label, String(updated.isActive), updated.secretLast4],
          ["rotated", rotated.webhook.id, rotated.webhook.label, String(rotated.webhook.isActive), rotated.webhook.secretLast4],
          ["after_count", after.webhooks.length, "N/A", "N/A", "N/A"],
        ],
      ),
    );
    console.log();
    console.log("Webhook deliveries (/v1/account/webhooks/deliveries):");
    console.log(`- listed: ${deliveries.deliveries.length}`);
    console.log(`- detail_checked: ${deliveryDetail?.id ?? "N/A"}`);
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
