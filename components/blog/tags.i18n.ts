import type { Lang } from "./posts.data";

export const TAG_I18N: Record<string, Record<Lang, string>> = {
  "ipek-siva":     { tr: "İpek Sıva", en: "Silk Plaster",   ru: "Шелковая штукатурка" },
  "rehber":        { tr: "Rehber",    en: "Guide",          ru: "Гид" },
  "malzeme":       { tr: "Malzeme",   en: "Material",       ru: "Материал" },
  "iklim":         { tr: "İklim",     en: "Climate",        ru: "Климат" },
  "karsilastirma": { tr: "Karşılaştırma", en: "Comparison", ru: "Сравнение" },
  "uygulama":      { tr: "Uygulama",  en: "Application",    ru: "Монтаж" },
  "bakim":         { tr: "Bakım",     en: "Care",           ru: "Уход" },
};

export function tagLabel(slug: string, lang: Lang): string {
  const m = TAG_I18N[slug];
  return m ? m[lang] : slug; 
}
