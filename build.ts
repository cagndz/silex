/**
 * Generates every editor port from src/palette.ts.
 *   node build.ts
 * Requires Node 22.18+ (native TypeScript type stripping).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { zedTheme } from "./src/zed.ts";
import { vscodeTheme } from "./src/vscode.ts";

const out = (path: string, data: unknown) => {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
  console.log(`✓ ${path}`);
};

out("zed/themes/silex.json", zedTheme);
out("vscode/themes/silex-color-theme.json", vscodeTheme);
