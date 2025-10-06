"use client";
import useLang from "@/components/lib/use-lang";
import { homeCopy } from "./home.i18n";
import Link from "next/link";

export default function CtaSlab() {
  const lang = useLang();
  const t = homeCopy.cta;

  return (
    <section className="section px-6 md:px-10 pb-24">
      <div className="relative overflow-hidden rounded-2xl border bg-white/80 backdrop-blur shadow">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-transparent" />
        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{t.title[lang]}</h2>
            <p className="mt-2 text-neutral-700 max-w-xl">{t.text[lang]}</p>
          </div>
          <div className="flex gap-3">
            <a href="/iletisim" className="btn-primary">{t.primary[lang]}</a>
            <Link href="/ipek-siva" className="btn-ghost">{t.secondary[lang]}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
