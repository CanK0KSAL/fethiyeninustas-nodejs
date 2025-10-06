"use client";
import useLang from "@/components/lib/use-lang";
import { homeCopy } from "./home.i18n";

export default function TestimonialsElegant() {
  const lang = useLang();
  const t = homeCopy.testimonials;

  return (
    <section className="section px-6 md:px-10 pb-16">
      <h2 className="text-3xl font-semibold tracking-tight mb-6">{t.title[lang]}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {t.items.map((x, i) => (
          <figure key={i} className="rounded-2xl bg-white p-6 shadow">
            <div className="text-5xl leading-none text-brand-gold">“</div>
            <blockquote className="mt-2 text-neutral-900 leading-relaxed">{x.q[lang]}</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-600">{x.n}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
