import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import type { ApiResponse, BuyOrderItem } from "cs2cap";
import { BidsApi, BuyOrderItemFromJSON } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import {
  buildConfiguration,
  loadApiKey,
  requireRealApiKey,
} from "../../_shared/auth.js";
import { parseIntegerOption } from "../../_shared/cli.js";
import { formatMoney, renderTable } from "../../_shared/render.js";
import { decodeLines } from "../../_shared/streaming.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { maxLines: number; top: number; provider?: string } {
  const { values } = parseArgs({
    options: {
      "max-lines": { type: "string" },
      top: { type: "string" },
      provider: { type: "string" },
    },
  });

  return {
    maxLines: parseIntegerOption(values["max-lines"], 5000, "--max-lines"),
    top: parseIntegerOption(values.top, 15, "--top"),
    provider: values.provider,
  };
}

async function main(): Promise<number> {
  const args = readOptions();

  let bearerToken: string;
  try {
    bearerToken = loadApiKey("CS2C_API_KEY", SCRIPT_PATH);
    requireRealApiKey(bearerToken);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }

  const configuration = buildConfiguration(bearerToken);
  const bidsApi = new BidsApi(configuration);
  const collected: BuyOrderItem[] = [];
  let processedLines = 0;
  let response: ApiResponse<string> | undefined;

  try {
    response = await bidsApi.streamBidsSnapshotV1BidsPostRaw();
    for await (const line of decodeLines(response.raw.body)) {
      const item = BuyOrderItemFromJSON(JSON.parse(line));
      processedLines += 1;

      if (args.provider && item.provider !== args.provider) {
        if (args.maxLines > 0 && processedLines >= args.maxLines) {
          break;
        }
        continue;
      }

      collected.push(item);
      if (args.maxLines > 0 && processedLines >= args.maxLines) {
        break;
      }
    }
  } catch (error) {
    console.error(await formatApiError(error));
    return 1;
  } finally {
    if (response?.raw.body) {
      await response.raw.body.cancel().catch(() => undefined);
    }
  }

  if (collected.length === 0) {
    console.log("No rows were collected from the processed bids snapshot window.");
    return 0;
  }

  collected.sort((left, right) => right.highestBid - left.highestBid);
  const topRows = collected.slice(0, args.top);

  console.log("Snapshot summary:");
  console.log(`- processed_lines: ${processedLines}`);
  console.log(`- collected_rows: ${collected.length}`);
  console.log(`- unique_providers: ${new Set(collected.map((item) => item.provider)).size}`);
  if (args.provider) {
    console.log(`- provider_filter: ${args.provider}`);
  }
  console.log();

  console.log(
    renderTable(
      ["provider", "item_id", "market_hash_name", "highest_bid", "num_bids"],
      topRows.map((item) => [
        item.provider,
        item.itemId,
        item.marketHashName,
        formatMoney(item.highestBid),
        item.numBids,
      ]),
    ),
  );
  return 0;
}

void main().then((code) => {
  process.exitCode = code;
});
