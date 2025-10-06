import { POSTS, type Lang } from "@/components/blog/posts.data";
import BlogCard from "@/components/blog/blogcard";
import type { Metadata } from "next";
import LangSync from "./LangSync"; // <-- EKLENDİ
// en üst importlara ekle
import { tagLabel } from "@/components/blog/tags.i18n";


export const metadata: Metadata = {
  title: "Blog | Fethiye’nin Ustası",
  description:
    "İpek sıva, uygulama süreçleri, bakım ve Fethiye ikliminde doğru kaplama rehberleri.",
};

const UI = {
  tr: { h1: "Blog", sub: "İpek sıva ve uygulama dünyasından gerçek bilgiler.", search: "Ara", allTags: "Tüm etiketler" },
  en: { h1: "Blog", sub: "Real-world know-how on silk plaster & application.", search: "Search", allTags: "All tags" },
  ru: { h1: "Блог", sub: "Практика: шелковая штукатурка и монтаж.", search: "Поиск", allTags: "Все теги" },
} as const;

export default function BlogIndex({
  searchParams,
}: {
  searchParams: { q?: string; tag?: string; lang?: Lang };
}) {
  const lang: Lang = (searchParams.lang as Lang) || "tr";
  const L = UI[lang];

  const q = (searchParams.q || "").toLowerCase();
  const tag = searchParams.tag;

  const allTags = Array.from(new Set(POSTS.flatMap((p) => p.tags))).sort();

  const filtered = POSTS.filter((p) => {
    const c = p.copy[lang];
    const hit = (c.title + " " + c.excerpt).toLowerCase();
    const okQ = q ? hit.includes(q) : true;
    const okTag = tag ? p.tags.includes(tag) : true;
    return okQ && okTag;
  });

  return (
    <>
      {/* JSX'İN EN BAŞI: önce LangSync, sonra sayfa içeriği */}
      <LangSync expected={lang} />

      <main className="section px-6 md:px-10 pt-24 pb-16">
        <header className="mb-6">
          <h1 className="text-4xl font-semibold tracking-tight">{L.h1}</h1>
          <p className="mt-2 text-neutral-700">{L.sub}</p>
        </header>

        {/* Arama */}
        <form method="get" className="flex flex-wrap items-center gap-3 mb-6">
          <input type="hidden" name="lang" defaultValue={lang} />
          <input
            name="q"
            defaultValue={q}
            placeholder={L.search + "..."}
            className="rounded-xl border px-3 py-2 w-full sm:w-80"
          />
          <button className="btn-ghost" type="submit">{L.search}</button>
        </form>

        {/* Etiketler */}
        <div className="flex flex-wrap gap-2 mb-8">
  <a
    href={`/blog?lang=${lang}`}
    className={`rounded-full px-3 py-1 text-sm ${!tag ? "bg-brand-gold text-white" : "bg-black/[.05]"}`}
  >
    {L.allTags}
  </a>

  {allTags.map((t) => {
    const label = tagLabel(t, lang); // çeviri
    const active = tag === t;
    return (
      <a
        key={t}
        href={`/blog?tag=${encodeURIComponent(t)}&lang=${lang}`} // URL slug
        className={`rounded-full px-3 py-1 text-sm ${active ? "bg-brand-gold text-white" : "bg-black/[.05]"}`}
      >
        #{label}
      </a>
    );
  })}
</div>

        {/* Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const c = p.copy[lang];
            return (
              <BlogCard
                key={p.slug}
                slug={p.slug}
                cover={p.cover}
                title={c.title}
                excerpt={c.excerpt}
                date={p.date}
                tags={p.tags}
                lang={lang}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
