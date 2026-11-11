import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer, loadEnv } from "vite";

const root = process.cwd();
const env = loadEnv("production", root, "VITE_");
const siteUrl = (process.env.VITE_SITE_URL || env.VITE_SITE_URL || "https://muslim-chat-bots.pages.dev").replace(/\/+$/, "");
const vite = await createServer({ mode: "production", server: { middlewareMode: true }, appType: "custom" });

try {
  const [{ default: App }, { locales, rtlLocales }, { presentation }] = await Promise.all([
    vite.ssrLoadModule("/src/App.tsx"),
    vite.ssrLoadModule("/src/content.ts"),
    vite.ssrLoadModule("/src/presentation.ts"),
  ]);
  const template = await readFile(`${root}/dist/index.html`, "utf8");
  const xmlEscape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
  const languages = locales.map((locale) => `<link rel="alternate" hreflang="${locale}" href="${siteUrl}/${locale}/" />`);
  languages.push(`<link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />`);

  const renderPage = (locale) => {
    const copy = presentation[locale];
    const html = renderToString(createElement(App, { locale }));
    let page = template
      .replace(/<html\b[^>]*>/, `<html lang="${locale}" dir="${rtlLocales.includes(locale) ? "rtl" : "ltr"}">`)
      .replace(/<title>.*?<\/title>/s, `<title>${xmlEscape(copy.seoTitle)}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${xmlEscape(copy.seoDescription)}" />`)
      .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${xmlEscape(copy.seoTitle)}" />`)
      .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${xmlEscape(copy.seoDescription)}" />`)
      .replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${siteUrl}/images/geometric-arch.jpg" />`)
      .replace("</head>", `<link rel="canonical" href="${siteUrl}/${locale}/" /><meta property="og:url" content="${siteUrl}/${locale}/" /><meta property="og:locale" content="${locale.replace("-", "_")}" />${languages.join("")}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    return page;
  };

  const sitemapUrls = locales.map((locale) => {
    const alternates = locales.map((alternate) => `    <xhtml:link rel="alternate" hreflang="${alternate}" href="${siteUrl}/${alternate}/" />`);
    alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />`);
    return `  <url>\n    <loc>${siteUrl}/${locale}/</loc>\n${alternates.join("\n")}\n  </url>`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapUrls.join("\n")}\n</urlset>\n`;

  for (const locale of locales) {
    const directory = `${root}/dist/${locale}`;
    await mkdir(directory, { recursive: true });
    await writeFile(`${directory}/index.html`, renderPage(locale));
  }
  await writeFile(`${root}/dist/index.html`, renderPage("en"));
  await writeFile(`${root}/dist/_redirects`, [
    ...locales.map((locale) => `/${locale} /${locale}/ 301`),
    "",
  ].join("\n"));
  await writeFile(`${root}/dist/sitemap.xml`, sitemap);
  await writeFile(`${root}/dist/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  console.log(`Pre-rendered ${locales.length} localized pages for ${siteUrl}`);
} finally {
  await vite.close();
}
