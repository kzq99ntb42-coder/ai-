export const locales = ["ja"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
};

export const rtlLocales: Locale[] = [];

export function getInitialLocale(): Locale {
  return "ja";
}

export function getLocalizedPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "ja") segments.shift();
  const localizedPath = `/${segments.join("/")}`;
  return pathname.endsWith("/") && localizedPath !== "/" ? `${localizedPath}/` : localizedPath;
}
