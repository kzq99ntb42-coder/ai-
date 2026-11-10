const configuredSiteUrl = import.meta.env.VITE_SITE_URL || "https://muslim-chat-bots.pages.dev";

export const SITE_URL = configuredSiteUrl.replace(/\/+$/, "");
