"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Area } from "./areas.data";

/* Bu dosyaya özel hafif dil kancası */
type Lang = "tr" | "en" | "ru";
function useInlineLang(): Lang {
  const getInitial = (): Lang => {
    const sp =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null;
    const q =
      (sp?.get("lang") as Lang) ||
      (document?.documentElement.lang as Lang) ||
      (localStorage.getItem("lang") as Lang) ||
      "tr";
    return (["tr", "en", "ru"] as const).includes(q) ? q : "tr";
  };

  const [lang, setLang] = useState<Lang>(getInitial);

  useEffect(() => {
    const el = document.documentElement;

    // <html lang> değişimini izle
    const mo = new MutationObserver(() => {
      const v = (el.lang as Lang) || "tr";
      if (["tr", "en", "ru"].includes(v) && v !== lang) setLang(v);
    });
    mo.observe(el, { attributes: true, attributeFilter: ["lang"] });

    // localStorage('lang') değişimi
    const onStorage = (e: StorageEvent) => {
      if (e.key === "lang" && e.newValue) {
        const v = e.newValue as Lang;
        if (["tr", "en", "ru"].includes(v)) setLang(v);
      }
    };
    window.addEventListener("storage", onStorage);

    // URL query değişimi (router olmadan)
    const onUrlChange = () => {
      const v =
        (new URLSearchParams(window.location.search).get("lang") as Lang) ||
        el.lang ||
        (localStorage.getItem("lang") as Lang) ||
        "tr";
      if (["tr", "en", "ru"].includes(v) && v !== lang) setLang(v);
    };
    window.addEventListener("popstate", onUrlChange);
    window.addEventListener("hashchange", onUrlChange);

    // ilk senkron
    onUrlChange();

    return () => {
      mo.disconnect();
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("popstate", onUrlChange);
      window.removeEventListener("hashchange", onUrlChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return lang;
}

/* UI sabit başlıkları */
const UI_I18N = {
  tr: { neighborhoods: "Mahalleler", faq: "Sık Sorulanlar" },
  en: { neighborhoods: "Neighborhoods", faq: "FAQ" },
  ru: { neighborhoods: "Районы", faq: "FAQ" },
} as const;

export default function AreaSections({ area }: { area: Area }) {
  const lang = useInlineLang();
  const L = UI_I18N[lang];
  const t = useMemo(() => area.copy[lang], [area.copy, lang]);

  return (
    <article className="section px-6 md:px-10 pt-24 pb-20">
      {/* Hero */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6">
          <p className="text-[12px] tracking-[.24em] text-brand-gold/90 uppercase">
            {area.slug}
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
            {t.h1}
          </h1>
          <p className="mt-4 text-lg text-neutral-700">{t.subtitle}</p>
          {t.intro.map((p, i) => (
            <p key={`${i}-${lang}`} className="mt-4 text-neutral-700">
              {p}
            </p>
          ))}

          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {t.checklist.map((c, i) => (
              <li
                key={`${i}-${lang}`}
                className="bg-white rounded-2xl p-4 shadow text-sm"
              >
                ✔ {c}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/iletisim" className="btn-primary">
              {t.ctaPrimary}
            </a>
            <Link href="/ipek-siva" className="btn-ghost">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow">
            <Image
              src={area.image}
              alt={t.h1}
              width={1200}
              height={900}
              className="aspect-[4/3] object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Mahalleler */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          {L.neighborhoods}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {t.neighborhoods.map((n, i) => (
            <span
              key={`${i}-${lang}`}
              className="rounded-full bg-black/[.04] px-3 py-1.5 text-sm"
            >
              {n}
            </span>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">{L.faq}</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-3">
          {t.faq.map((f, i) => (
            <details
              key={`${i}-${lang}`}
              className="bg-white rounded-2xl p-5 shadow"
            >
              <summary className="font-semibold cursor-pointer list-none">
                {f.q}
              </summary>
              <p className="mt-2 text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA slab */}
      <section className="mt-12">
        <div className="relative rounded-2xl border bg-white/80 backdrop-blur p-6 md:p-10 shadow flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              {t.h1}
            </h3>
            <p className="mt-2 text-neutral-700">{t.subtitle}</p>
          </div>
          <div className="flex gap-3">
            <a href="/iletisim" className="btn-primary">
              {t.ctaPrimary}
            </a>
            <Link href="/ipek-siva" className="btn-ghost">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
