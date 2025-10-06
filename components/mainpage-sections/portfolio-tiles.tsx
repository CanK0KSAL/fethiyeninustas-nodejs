"use client";
import useLang from "@/components/lib/use-lang";
import { homeCopy } from "./home.i18n";
import Image from "next/image";

const shots = [
  { src: "/assets/gallery/ipek-siva1.jpg", capTr:"Salon • Çalış", capEn:"Living room • Calis", capRu:"Гостиная • Чалыш" },
  { src: "/assets/gallery/ipek-siva2.jpg", capTr:"Villa • Göcek", capEn:"Villa • Göcek", capRu:"Вилла • Гёджек" },
  { src: "/assets/gallery/ipek-siva3.jpg", capTr:"Cafe • Fethiye", capEn:"Cafe • Fethiye", capRu:"Кафе • Фетхие"  },
  { src: "/assets/gallery/ipek-siva4.jpg", capTr:"Oda • Ovacık", capEn:"Room • Ovacık", capRu:"Комната • Оваджик"},
  { src: "/assets/gallery/ipek-siva5.jpg", capTr:"Yatak Odası • Karaçulha", capEn:"Bedroom • Karaçulha", capRu:"Спальня • Карачулха" },
  { src: "/assets/gallery/ipek-siva6.jpg", capTr:"Koridor • Faralya", capEn:"Corridor • Faralya", capRu:"Коридор • Фаралья" },
];

export default function PortfolioTiles() {
  const lang = useLang();
  const t = homeCopy.portfolio;

  const cap = (s: typeof shots[number]) =>
    lang === "tr" ? s.capTr : lang === "en" ? s.capEn : s.capRu;

  return (
    <section className="section px-6 md:px-10 pb-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">{t.title[lang]}</h2>
        <div className="text-sm text-neutral-600">{t.subtitle[lang]}</div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {shots.map((s, i) => (
          <figure key={i} className="group relative rounded-2xl overflow-hidden shadow bg-neutral-100">
            <Image src={s.src} alt={cap(s)} width={1000} height={750}
                   className="aspect-[4/3] object-cover group-hover:scale-[1.02] transition" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 text-sm text-white">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="relative z-10">{cap(s)}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
