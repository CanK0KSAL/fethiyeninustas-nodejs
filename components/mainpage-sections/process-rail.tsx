"use client";
import useLang from "@/components/lib/use-lang";
import { homeCopy } from "./home.i18n";

export default function ProcessRail() {
  const lang = useLang();
  const t = homeCopy.process;

  return (
    <section className="section px-6 md:px-10 pb-16">
      <h2 className="text-3xl font-semibold tracking-tight mb-8">{t.title[lang]}</h2>

      <ol className="relative grid gap-6 md:gap-8">
        <div className="pointer-events-none absolute left-0 md:left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-gold to-transparent rounded-full" />
        {t.items.map((s, i) => (
          <li key={s.t[lang]} className="relative pl-6 md:pl-10">
            <div className="absolute left-0 md:left-[2px] top-2 h-3 w-3 rounded-full bg-brand-gold shadow" />
            <div className="bg-white rounded-2xl p-6 shadow border border-black/5">
              <div className="text-sm text-neutral-500">{t.step[lang]} {i + 1}</div>
              <h3 className="font-semibold mt-1">{s.t[lang]}</h3>
              <p className="text-neutral-700 mt-1">{s.d[lang]}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
