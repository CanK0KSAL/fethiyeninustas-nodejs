"use client";
import useLang from "@/components/lib/use-lang";
import { homeCopy } from "./home.i18n";

export default function Statement() {
  const lang = useLang();
  const t = homeCopy.statement;

  return (
    <section className="section px-6 md:px-10 pt-24 pb-12">
      <div className="max-w-3xl">
        <p className="text-[12px] tracking-[.24em] text-brand-gold/90 uppercase">{t.kicker[lang]}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          {t.title[lang]}
        </h1>
        <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-brand-gold to-transparent rounded-full" />
        <p className="mt-6 text-lg text-neutral-700">{t.body[lang]}</p>
      </div>
    </section>
  );
}
