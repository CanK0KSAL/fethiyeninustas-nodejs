"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Lang } from "./services.data";
import { services } from "./services.data";

function useLang(): Lang {
  const sp = useSearchParams();
  const [lang, setLang] = useState<Lang>("tr");
  useEffect(() => {
    const p = (sp.get("lang") as Lang) || (typeof document !== "undefined" ? (document.documentElement.lang as Lang) : "tr");
    setLang(["tr", "en", "ru"].includes(p) ? (p as Lang) : "tr");
  }, [sp]);
  return lang;
}

export default function Hero() {
  const lang = useLang();
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const activeSlug = sp.get("service") || services.find(s => s.featured)?.slug || services[0].slug;
  const active = useMemo(() => services.find(s => s.slug === activeSlug) ?? services[0], [activeSlug]);

  function setService(slug: string, disable?: boolean) {
    if (disable) return;
    const url = new URL(window.location.href);
    url.searchParams.set("service", slug);
    router.replace(`${pathname}?${url.searchParams.toString()}`);
  }

  // [[vurgulama]] sözdizimi → <span class="text-brand-gold">
  const title = useMemo(() => {
    const raw = active.copy[lang].title;
    const parts = raw.split(/\[\[(.+?)\]\]/);
    return (
      <>
        {parts.map((p, i) =>
          i % 2 === 1 ? <span key={i} className="text-brand-gold">{p}</span> : <span key={i}>{p}</span>
        )}
      </>
    );
  }, [active, lang]);

  const copy = active.copy[lang];

  return (
    <section className="section px-6 md:px-10 pt-28 pb-16">
      {/* Hizmet seçim çipleri */}
      <div className="mb-5 flex flex-wrap gap-2">
        {services.map(s => {
          const isActive = s.slug === active.slug;
          const disabled = !!s.soon;
          return (
            <button
              key={s.slug}
              onClick={() => setService(s.slug, disabled)}
              aria-pressed={isActive}
              aria-disabled={disabled}
              className={[
                "rounded-full border px-3 py-1.5 text-sm font-semibold transition",
                isActive ? "bg-brand-gold text-white border-brand-gold shadow" : "bg-white hover:bg-black/[.04] border-black/10",
                disabled ? "opacity-60 cursor-not-allowed" : ""
              ].join(" ")}
              title={disabled ? "Yakında" : ""}
            >
              {s.copy[lang].kicker.split(" ")[0] /* kısa isim */}
              {disabled && <span className="ml-2 rounded-full bg-brand-gold/15 text-brand-gold px-2 py-0.5 text-[11px]">Yakında</span>}
            </button>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <p className="text-sm tracking-widest text-brand-gold/90 uppercase">{copy.kicker}</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-5 text-lg text-neutral-700">{copy.subtitle}</p>

          <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
            {copy.bullets.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow">✔ {b}</div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {active.soon ? (
              <span className="rounded-2xl bg-brand-gold/15 text-brand-gold px-4 py-3 font-medium shadow">Yakında</span>
            ) : (
              copy.ctas.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className={
                    c.variant === "primary"
                      ? "btn-primary"
                      : "btn-ghost"
                  }
                >
                  {c.label}
                </Link>
              ))
            )}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow">
            <Image
              src={active.image}
              alt={copy.kicker}
              width={1200}
              height={900}
              className="aspect-[4/3] object-cover"
              priority
              onError={(e:any) => { e.currentTarget.src = "/images/placeholder.jpg"; }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
