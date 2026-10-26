export type Locale = "de" | "en";
export type Localized = Record<Locale, string>;

export const t = (text: Localized, locale: Locale) => text[locale];