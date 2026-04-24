import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import { ItemsApi } from "cs2cap-sdk";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { parseIntegerOption } from "../../_shared/cli.js";
import { renderTable } from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { itemType: string; query: string; limit: number } {
  const { values } = parseArgs({
    options: {
      "item-type": { type: "string" },
      query: { type: "string" },
      limit: { type: "string" },
    },
  });

  return {
    itemType: values["item-type"] ?? "Weapon",
    query: values.query ?? "AK-47",
    limit: parseIntegerOption(values.limit, 10, "--limit"),
  };
}

async function main(): Promise<number> {
  const args = readOptions();

  let bearerToken: string;
  try {
    bearerToken = loadApiKey("CS2C_API_KEY", SCRIPT_PATH);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }

  const configuration = buildConfiguration(bearerToken);

  try {
    const itemsApi = new ItemsApi(configuration);

    const itemsResponse = await itemsApi.listItemsV1ItemsGet({
      itemType: args.itemType,
      q: args.query,
      limit: args.limit,
    });

    const rows = itemsResponse.items.map((item) => [
      item.itemId ?? "N/A",
      item.marketHashName,
      item.rarityName ?? "N/A",
      item.collection ?? "N/A",
    ]);

    if (rows.length === 0) {
      console.log("No items matched the provided search.");
      return 0;
    }

    console.log(renderTable(["item_id", "market_hash_name", "rarity", "collection"], rows));
    return 0;
  } catch (error) {
    console.error(await formatApiError(error));
    return 1;
  }
}

void main().then((code) => {
  process.exitCode = code;
});
