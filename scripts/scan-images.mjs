async function scan(url) {
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      redirect: "follow",
    });
    const html = await r.text();
    const imgs = [...html.matchAll(/src="([^"]+\.(?:png|jpg|jpeg|webp)[^"]*)"/gi)]
      .map((m) => m[1])
      .slice(0, 15);
    console.log("\n", url, "status", r.status);
    imgs.forEach((i) => console.log(" ", i.slice(0, 120)));
  } catch (e) {
    console.log(url, e.message);
  }
}

await scan("https://firstrewards.in/");
await scan("https://shopwise.giftstacc.com/");
