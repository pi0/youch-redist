import { build } from "esbuild";
import { cp, rm } from "node:fs/promises";
import { readPackageJSON } from "pkg-types";

const ver = (id) => readPackageJSON(id).then((m) => m.version);

await rm("dist", { recursive: true, force: true });

await build({
  stdin: {
    contents: /* js */ `export { Youch } from "youch"; export { ErrorParser } from "youch-core";`,
    resolveDir: process.cwd(),
  },
  banner: {
    js: [
      "Copyright (c) virk.officials@gmail.com",
      `Bundled https://github.com/poppinss/youch ${await ver("youch")} (MIT)`,
      `Bundled https://github.com/poppinss/youch-core ${await ver("youch-core")} (MIT)`,
    ]
      .map((line) => `// ${line}`)
      .join("\n"),
  },
  bundle: true,
  outfile: "dist/youch.mjs",
  platform: "node",
  target: "esnext",
  format: "esm",
  legalComments: "inline",
});

const youchDir = new URL("public", import.meta.resolve("youch"));

await cp(youchDir, "dist/public", {
  recursive: true,
});
