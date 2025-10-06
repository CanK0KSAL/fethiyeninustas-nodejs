"use client";
import useLang from "@/components/lib/use-lang";
import Link from "next/link";
import { homeCopy } from "./home.i18n";

export default function ServicesPremium() {
  const lang = useLang();
  const t = homeCopy.services;

  return (
    <section className="section px-6 md:px-10 pb-14">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">{t.title[lang]}</h2>
        <Link href="/ipek-siva" className="text-sm font-medium text-brand-gold hover:underline">
          {t.viewSilk[lang]}
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {t.cards.map((x, i) => (
          <div key={x.title[lang]} className={[
              "rounded-2xl bg-gradient-to-br from-brand-gold/20 to-transparent p-[1px] shadow",
              i === 0 ? "" : "from-transparent"
            ].join(" ")}>
            <Link href={x.soon ? "#" : x.href}
                  aria-disabled={x.soon}
                  className={[
                    "block rounded-2xl bg-white p-6 h-full hover:-translate-y-0.5 transition",
                    x.soon ? "opacity-60 cursor-not-allowed" : ""
                  ].join(" ")}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{x.title[lang]}</h3>
                {x.tag && <span className="badge">{x.tag[lang]}</span>}
                {x.soon && <span className="badge">{t.soon[lang]}</span>}
              </div>
              <p className="mt-2 text-neutral-700">{x.desc[lang]}</p>
              {!x.soon && <div className="mt-5 text-sm font-semibold text-brand-gold">{t.explore[lang]}</div>}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
