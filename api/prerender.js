export default async function handler(req, res) {
  const prerenderToken = process.env.PRERENDER_TOKEN; // store in Vercel env vars
  const userAgent = req.headers["user-agent"] || "";

  // List of crawlers to send to Prerender.io
  const crawlerUserAgents = [
    "googlebot",
    "bingbot",
    "yandex",
    "baiduspider",
    "facebookexternalhit",
    "twitterbot",
    "rogerbot",
    "linkedinbot",
    "embedly",
    "quora link preview",
    "showyoubot",
    "outbrain",
    "pinterest",
    "slackbot",
    "vkShare",
    "W3C_Validator",
  ];

  const isCrawler = crawlerUserAgents.some(bot =>
    userAgent.toLowerCase().includes(bot)
  );

  if (isCrawler) {
    // Forward the request to Prerender.io
    const prerenderUrl = `https://service.prerender.io/${req.url}`;
    const response = await fetch(prerenderUrl, {
      headers: {
        "X-Prerender-Token": prerenderToken,
      },
    });

    const html = await response.text();
    res.setHeader("Content-Type", "text/html");
    return res.status(200).send(html);
  }

  // Normal users → just serve your React app
  res.status(200).json({ message: "Not a crawler, normal React app loads." });
}
