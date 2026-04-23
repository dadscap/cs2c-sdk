function pad(value: number): string {
  return String(value).padStart(2, "0");
}

export function formatMoney(minorUnits: number | null | undefined, currency = "USD"): string {
  if (minorUnits == null) {
    return "N/A";
  }
  return `${currency} ${(minorUnits / 100).toFixed(2)}`;
}

export function formatDecimalMoney(
  value: number | string | null | undefined,
  currency = "USD",
): string {
  if (value == null || value === "") {
    return "N/A";
  }

  const parsed = typeof value === "number" ? value : Number.parseFloat(value);
  if (Number.isNaN(parsed)) {
    return "N/A";
  }
  return `${currency} ${parsed.toFixed(2)}`;
}

export function formatPercent(value: number | null | undefined): string {
  if (value == null) {
    return "N/A";
  }
  return `${value.toFixed(2)}%`;
}

export function parseIso8601(value: string): Date {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid ISO 8601 timestamp: ${value}`);
  }
  return parsed;
}

export function formatTimestamp(value: Date | string | null | undefined): string {
  if (value == null) {
    return "N/A";
  }

  const parsed = typeof value === "string" ? parseIso8601(value) : value;
  return [
    `${parsed.getUTCFullYear()}-${pad(parsed.getUTCMonth() + 1)}-${pad(parsed.getUTCDate())}`,
    `${pad(parsed.getUTCHours())}:${pad(parsed.getUTCMinutes())} UTC`,
  ].join(" ");
}

export function renderTable(
  headers: string[],
  rows: Array<Array<string | number>>,
): string {
  const stringRows = rows.map((row) => row.map((value) => String(value)));
  const widths = headers.map((header, index) =>
    Math.max(header.length, ...stringRows.map((row) => row[index]?.length ?? 0)),
  );

  const renderRow = (values: Array<string | number>): string =>
    values
      .map((value, index) => String(value).padEnd(widths[index], " "))
      .join(" | ");

  const separator = widths.map((width) => "-".repeat(width)).join("-+-");
  return [renderRow(headers), separator, ...stringRows.map(renderRow)].join("\n");
}
