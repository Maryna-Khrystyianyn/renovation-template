import type { Locale } from "@/lib/i18n";

export type ThemeName = "modern" | "industrial" | "premium";
export type ThemeMode = "light" | "dark";

export const siteConfig = {
  locale: "de" as Locale,          // site language: "de" | "en"
  theme: "modern" as ThemeName,    // website style
  mode: "light" as ThemeMode,      // light or dark theme

  // Функції, які можна вмикати й вимикати
  features: {
    headerCta: true,               // false — кнопка Kosten berechnen зникає
  },
};