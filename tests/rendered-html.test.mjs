import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete Tekra Run website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Tekra Run Technologies \| Engineering What(?:&apos;|&#x27;|’|')s Next<\/title>/i);
  assert.match(html, /Build what(?:&apos;|&#x27;|’|')s/);
  assert.match(html, /id="capabilities"/);
  assert.match(html, /id="partners"/);
  assert.match(html, /id="approach"/);
  assert.match(html, /id="contact"/);

  for (const capability of [
    "Data Engineering",
    "Cloud Engineering &amp; Modernization",
    "Software Delivery",
    "Security Architecture",
    "Operations &amp; Design",
    "OEM Licensing",
  ]) {
    assert.match(html, new RegExp(capability));
  }

  for (const partner of ["Cisco", "Check Point", "Microsoft", "AWS", "Tanium"]) {
    assert.match(html, new RegExp(`>${partner}<`));
  }

  for (const logo of [
    "/partners/cisco.svg",
    "/partners/check-point.svg",
    "/partners/microsoft.svg",
    "/partners/aws.svg",
    "/partners/tanium.svg",
  ]) {
    assert.match(html, new RegExp(`src="${logo}"`));
  }

  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
  assert.doesNotMatch(html, /cdn\.jsdelivr\.net/i);
});

test("keeps required local brand assets and production metadata", async () => {
  const [page, layout, packageJson, partnerFiles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readdir(new URL("../public/partners/", import.meta.url)),
  ]);

  assert.deepEqual(partnerFiles.sort(), [
    "aws.svg",
    "check-point.svg",
    "cisco.svg",
    "microsoft.svg",
    "tanium.svg",
  ]);

  assert.match(page, /Tekra Run turns complex technology/);
  assert.doesNotMatch(page, /cdn\.jsdelivr\.net|_sites-preview/);
  assert.match(layout, /Tekra Run Technologies \| Engineering What/);
  assert.match(layout, /openGraph:/);
  assert.match(layout, /twitter:/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await Promise.all([
    access(new URL("../public/tekra-brand-board.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL(".openai/hosting.json", projectRoot)),
  ]);
});
