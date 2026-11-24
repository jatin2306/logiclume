async function og(url) {
  const r = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; Webologyx/1.0)" },
    redirect: "follow",
  });
  const html = await r.text();
  const m1 = html.match(/property="og:image"[^>]*content="([^"]+)"/i);
  const m2 = html.match(/content="([^"]+)"[^>]*property="og:image"/i);
  console.log(url, m1?.[1] || m2?.[1] || "NO_OG");
}

for (const u of [
  "https://firstrewards.in/",
  "https://shopwise.giftstacc.com/",
  "https://cc.giftstacc.com/",
  "https://agarwalestates.com/",
]) {
  await og(u);
}
