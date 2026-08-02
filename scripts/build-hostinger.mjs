import { access, readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const vinextCli = path.join(
  projectRoot,
  "node_modules",
  "vinext",
  "dist",
  "cli.js",
);

const build = spawnSync(process.execPath, [vinextCli, "build"], {
  cwd: projectRoot,
  env: {
    ...process.env,
    HOSTINGER_STATIC_EXPORT: "1",
  },
  stdio: "inherit",
});

if (build.error) {
  throw build.error;
}

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const outputDirectory = path.join(projectRoot, "dist", "client");
const indexPath = path.join(outputDirectory, "index.html");

await access(indexPath);
const html = await readFile(indexPath, "utf8");

for (const requiredText of [
  "Tekra Run Technologies",
  "https://tekrarun.com/",
  'id="capabilities"',
  'id="partners"',
  'id="contact"',
]) {
  if (!html.includes(requiredText)) {
    throw new Error(
      `Hostinger output validation failed: index.html is missing ${requiredText}`,
    );
  }
}

const rootAssetReferences = [
  ...html.matchAll(/\b(?:href|src)="\/([^"?#]+)(?:[?#][^"]*)?"/g),
].map((match) => decodeURIComponent(match[1]));

for (const relativeAssetPath of new Set(rootAssetReferences)) {
  await access(path.join(outputDirectory, ...relativeAssetPath.split("/")));
}

console.log(
  `\nHostinger static output verified: ${path.relative(projectRoot, indexPath)}`,
);
