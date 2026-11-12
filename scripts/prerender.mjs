import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer, loadEnv } from "vite";

const root = process.cwd();
const env = loadEnv("production", root, "VITE_");
const siteUrl = (process.env.VITE_SITE_URL || env.VITE_SITE_URL || "https://muslim-chat-bots.pages.dev").replace(/\/+$/, "");
const vite = await createServer({ mode: "production", server: { middlewareMode: true }, appType: "custom" });

try {
  const [{ default: App }, { presentation }, { seoPageRoutes }] = await Promise.all([
    vite.ssrLoadModule("/src/App.tsx"),
    vite.ssrLoadModule("/src/presentation.ts"),
    vite.ssrLoadModule("/src/seoPages.ts"),
  ]);
  const template = await readFile(`${root}/dist/index.html`, "utf8");
  const xmlEscape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");

  const renderPage = (route) => {
    const copy = presentation.ja;
    const pageCopy = route ? seoPageRoutes.find((item) => item.slug === route) : null;
    const title = pageCopy?.title ?? copy.seoTitle;
    const description = pageCopy?.description ?? copy.seoDescription;
    const canonicalUrl = route ? `${siteUrl}/${route}` : `${siteUrl}/`;
    const html = renderToString(createElement(App, { locale: "ja", route }));

    return template
      .replace(/<html\b[^>]*>/, '<html lang="ja" dir="ltr">')
      .replace(/<title>.*?<\/title>/s, `<title>${xmlEscape(title)}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${xmlEscape(description)}" />`)
      .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${xmlEscape(title)}" />`)
      .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${xmlEscape(description)}" />`)
      .replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${siteUrl}/images/geometric-arch.jpg" />`)
      .replace("</head>", `<link rel="canonical" href="${canonicalUrl}" /><meta property="og:url" content="${canonicalUrl}" /></head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  };

  await writeFile(`${root}/dist/index.html`, renderPage());
  for (const route of seoPageRoutes) {
    const directory = `${root}/dist/${route.slug}`;
    await mkdir(directory, { recursive: true });
    await writeFile(`${directory}/index.html`, renderPage(route.slug));
  }

  const urls = ["", ...seoPageRoutes.map((route) => route.slug)]
    .map((route) => `  <url><loc>${xmlEscape(route ? `${siteUrl}/${route}` : `${siteUrl}/`)}</loc></url>`)
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  const legacyLocales = ["en", "ar", "zh", "hi", "es", "fr", "bn", "pt", "ru", "ur", "uz", "id", "ms", "tr", "ja"];
  const redirects = legacyLocales.flatMap((locale) => [
    `/${locale} / 301`,
    `/${locale}/ / 301`,
    `/${locale}/* /:splat 301`,
  ]);
  await writeFile(`${root}/dist/_redirects`, `${redirects.join("\n")}\n`);
  await writeFile(`${root}/dist/sitemap.xml`, sitemap);
  await writeFile(`${root}/dist/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  console.log(`日本語ページ${seoPageRoutes.length + 1}件を生成しました：${siteUrl}`);
} finally {
  await vite.close();
}
