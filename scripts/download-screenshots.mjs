import fs from "fs";
import path from "path";

const outDir = path.join("public", "images", "portfolio");

/** Manual screenshots live in public/images/portfolio — add Microlink targets here only when needed. */
const targets = [];

async function screenshotUrl(pageUrl) {
  const api =
    `https://api.microlink.io/?url=${encodeURIComponent(pageUrl)}` +
    "&screenshot=true&meta=false&waitForTimeout=5000&viewport.width=1440&viewport.height=900";
  const res = await fetch(api);
  const json = await res.json();
  if (json.status !== "success" || !json.data?.screenshot?.url) {
    throw new Error(`${pageUrl}: ${json.status}`);
  }
  return json.data.screenshot;
}

fs.mkdirSync(outDir, { recursive: true });

for (const { file, url } of targets) {
  try {
    console.log("Fetching screenshot for", url);
    const shot = await screenshotUrl(url);
    console.log("  ->", shot.url, shot.size_pretty);
    const imgRes = await fetch(shot.url);
    if (!imgRes.ok) throw new Error(`download ${imgRes.status}`);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync(path.join(outDir, file), buf);
    console.log("  saved", file);
  } catch (e) {
    console.error("  FAILED", file, e.message);
  }
}
