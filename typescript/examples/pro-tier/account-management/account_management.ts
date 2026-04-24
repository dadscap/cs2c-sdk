import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import type {
  AlertDefinition,
  AlertEventsResponse,
  AlertListResponse,
  WatchlistCreateRequest,
  WatchlistItem,
  WatchlistResponse,
} from "cs2cap";
import { AccountApi, ItemsApi } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { parseIntegerOption } from "../../_shared/cli.js";
import { CleanupRegistry } from "../../_shared/cleanup.js";
import { collectItemIds, resolveCatalogItems } from "../../_shared/items.js";
import { formatTimestamp, renderTable } from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { query: string; itemType: string; keepResources: boolean } {
  const { values } = parseArgs({
    options: {
      query: { type: "string" },
      "item-type": { type: "string" },
      "keep-resources": { type: "boolean" },
      limit: { type: "string" },
    },
  });

  parseIntegerOption(values.limit, 20, "--limit");

  return {
    query: values.query ?? "AK-47",
    itemType: values["item-type"] ?? "Weapon",
    keepResources: values["keep-resources"] ?? false,
  };
}

async function main(): Promise<number> {
  const args = readOptions();
  const cleanup = new CleanupRegistry(args.keepResources);

  let bearerToken: string;
  try {
    bearerToken = loadApiKey("CS2C_API_KEY", SCRIPT_PATH);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }

  const configuration = buildConfiguration(bearerToken);
  let createdWatchlistItems: WatchlistItem[] = [];
  let alert: AlertDefinition | undefined;
  let updatedAlert: AlertDefinition | undefined;
  let alerts: AlertListResponse | undefined;
  let events: AlertEventsResponse | undefined;
  let watchlist: WatchlistResponse | undefined;
  let cleanupResults: Awaited<ReturnType<CleanupRegistry["run"]>> = [];

  try {
    const itemsApi = new ItemsApi(configuration);
    const accountApi = new AccountApi(configuration);

    const selectedItems = (
      await resolveCatalogItems(itemsApi, {
        query: args.query,
        itemType: args.itemType,
        limit: 2,
      })
    ).slice(0, 2);

    if (selectedItems.length < 2) {
      console.log("Need at least 2 items to demonstrate the account workflows.");
      return 1;
    }

    const itemIds = collectItemIds(selectedItems);
    const watchlistCreateRequest = {
      itemIds,
    } as unknown as WatchlistCreateRequest;
    const watchlistResponse = await accountApi.createWatchlistEntryV1AccountWatchlistPost({
      watchlistCreateRequest,
    });
    createdWatchlistItems = watchlistResponse.items ?? [];

    for (const item of createdWatchlistItems) {
      cleanup.add(`delete watchlist item ${item.marketHashName}`, () =>
        accountApi.deleteWatchlistEntryV1AccountWatchlistItemIdDelete({
          itemId: item.itemId,
        }),
      );
    }

    alert = await accountApi.createAlertRouteV1AccountAlertsPost({
      alertCreateRequest: {
        itemId: itemIds[0]!,
        kind: "price_below",
        thresholdValue: "10.00",
        thresholdCurrency: "USD",
        isEnabled: false,
      },
    });
    cleanup.add(`delete alert ${alert.id}`, () =>
      accountApi.deleteAlertRouteV1AccountAlertsAlertIdDelete({
        alertId: alert!.id,
      }),
    );

    updatedAlert = await accountApi.patchAlertV1AccountAlertsAlertIdPatch({
      alertId: alert.id,
      alertUpdateRequest: {
        thresholdValue: "9.50",
        isEnabled: false,
      },
    });
    alerts = await accountApi.getAlertsV1AccountAlertsGet({ limit: 20 });
    events = await accountApi.getAlertEventHistoryV1AccountAlertsEventsGet({ limit: 10 });
    watchlist = await accountApi.getWatchlistV1AccountWatchlistGet({ limit: 20 });
  } catch (error) {
    console.error(await formatApiError(error));
    return 1;
  } finally {
    cleanupResults = await cleanup.run();
  }

  if (!alert || !updatedAlert || !alerts || !events || !watchlist) {
    return 1;
  }

  console.log("Created watchlist entries:");
  console.log(
    renderTable(
      ["item_id", "market_hash_name", "created_at"],
      createdWatchlistItems.map((item) => [
        item.itemId,
        item.marketHashName,
        formatTimestamp(item.createdAt),
      ]),
    ),
  );
  console.log();

  console.log("Alert lifecycle:");
  console.log(`- created_alert_id: ${alert.id}`);
  console.log(`- updated_threshold: ${updatedAlert.thresholdValue}`);
  console.log(`- enabled: ${updatedAlert.isEnabled}`);
  console.log();

  console.log("Current alerts (/v1/account/alerts):");
  console.log(
    renderTable(
      ["alert_id", "item", "kind", "threshold", "enabled"],
      alerts.alerts.map((row) => [
        row.id,
        row.item.marketHashName,
        row.kind,
        row.thresholdValue,
        row.isEnabled ? "yes" : "no",
      ]),
    ),
  );
  console.log();

  console.log("Current watchlist (/v1/account/watchlist):");
  console.log(
    renderTable(
      ["item_id", "market_hash_name", "created_at"],
      watchlist.items.map((item) => [
        item.itemId,
        item.marketHashName,
        formatTimestamp(item.createdAt),
      ]),
    ),
  );
  console.log();

  console.log("Recent alert events (/v1/account/alerts/events):");
  const eventRows = events.events.slice(0, 5).map((event) => [
    event.id,
    event.item.marketHashName,
    event.kind,
    event.triggeredValue,
    formatTimestamp(event.createdAt),
  ]);
  if (eventRows.length > 0) {
    console.log(renderTable(["event_id", "item", "kind", "value", "created_at"], eventRows));
  } else {
    console.log("No alert events were returned for this account.");
  }
  console.log();

  console.log("Cleanup summary:");
  console.log(
    renderTable(
      ["resource", "status", "detail"],
      cleanupResults.map((result) => [
        result.label,
        result.ok ? "ok" : "failed",
        result.detail,
      ]),
    ),
  );
  return 0;
}

void main().then((code) => {
  process.exitCode = code;
});
