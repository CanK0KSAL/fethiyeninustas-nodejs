import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Basit yerel tip (harici bağımlılık yok)
type Lang = "tr" | "en" | "ru";

export const metadata: Metadata = {
  title: "İpek Sıva | Fethiye’nin Ustası",
  description:
    "Fethiye’de ipek sıva (silk plaster) uygulaması: tozsuz, dikişsiz, numuneli çalışma. Yerinde keşif, yazılı teklif ve garanti.",
};

const T = {
  tr: {
    tag: "İPEK SIVA",
    h1: "İpek Sıva ile zamansız, dikişsiz bir doku",
    sub: "Tozsuz uygulama, premium finish, usta garantisi. Yerinde keşif ve yazılı teklif standart.",
    bullets: ["48 saatte teslim", "Tozsuz uygulama", "Numuneli karar", "Usta garantisi"],
    details: "İpek Sıva Detayları",
    book: "Keşif Randevusu",
    what: {
      title: "İpek sıva nedir?",
      p1: "Selüloz/elyaf, pigment ve bağlayıcıların karışımıyla elde edilen, nefes alabilen ve dikişsiz bir dekoratif kaplamadır.",
      p2: "Mikro esneklik sayesinde kılcal çatlakları tolere eder, sıcak ve elit bir doku sunar.",
    },
    where: {
      title: "Nerelerde ideal?",
      list: ["Salon & yatak odası", "Koridor ve merdiven holleri", "Ofis ve şık ticari mekanlar", "Yarı korunaklı nişler"],
    },
    faqTitle: "Sık sorulanlar",
    faq: [
      { q: "Banyoda kullanılır mı?", a: "Direkt su sıçramayan yüzeylerde ve doğru astarla mümkündür; duş içi için önerilmez." },
      { q: "Tamir olur mu?", a: "Evet, lokal tamir yapılabilir. Renk/doku eşleşmesi için aynı partiden numune saklanır." },
    ],
    cta: {
      title: "Projeni birlikte netleştirelim",
      sub: "Kısa bir telefon/WhatsApp görüşmesiyle takvim ve bütçeyi birlikte çıkaralım.",
      btn: "İletişime Geç",
    },
  },
  en: {
    tag: "SILK PLASTER",
    h1: "Seamless, timeless texture with silk plaster",
    sub: "Low-dust application, premium finish, guaranteed workmanship. On-site survey and written proposal by default.",
    bullets: ["48h lead time", "Low-dust workflow", "Sample wall", "Warranty"],
    details: "See details",
    book: "Book a Survey",
    what: {
      title: "What is silk plaster?",
      p1: "A breathable, seamless decorative coating made of cellulose fibers, pigments and binders.",
      p2: "Its micro-elastic nature tolerates hairline cracks and brings warm, elegant texture.",
    },
    where: {
      title: "Where does it shine?",
      list: ["Living & bedrooms", "Corridors and stair halls", "Offices and boutique commercial", "Semi-protected niches"],
    },
    faqTitle: "FAQ",
    faq: [
      { q: "Bathrooms?", a: "Yes on non-splash zones with proper priming; not recommended inside shower cabins." },
      { q: "Repairable?", a: "Yes. Keep a small batch for best tone/texture match in touch-ups." },
    ],
    cta: {
      title: "Let’s clarify your project together",
      sub: "A short call/WhatsApp to align needs, timing and budget.",
      btn: "Contact",
    },
  },
  ru: {
    tag: "ШЕЛКОВАЯ ШТУКАТУРКА",
    h1: "Бесшовная, вне времени фактура",
    sub: "Минимум пыли, премиальная отделка и гарантия. Замер на объекте и письменное предложение.",
    bullets: ["Срок 48ч+", "Мало пыли", "Образец стены", "Гарантия"],
    details: "Подробнее",
    book: "Записаться на замер",
    what: {
      title: "Что это такое?",
      p1: "Дышащее бесшовное покрытие из целлюлозных волокон, пигментов и связующего.",
      p2: "Микро-эластичность сглаживает микротрещины и дает теплую благородную фактуру.",
    },
    where: {
      title: "Где особенно уместно?",
      list: ["Гостиные и спальни", "Коридоры и лестничные холлы", "Офисы и бутик-коммерция", "Полузащищённые ниши"],
    },
    faqTitle: "Вопросы и ответы",
    faq: [
      { q: "Подходит для ванной?", a: "Да, вне зон прямого попадания воды и при правильном грунте; внутри душа — не рекомендуем." },
      { q: "Ремонтопригодно?", a: "Да. Для лучшего совпадения тона/фактуры храните немного состава." },
    ],
    cta: {
      title: "Проясним проект вместе",
      sub: "Короткий созвон/WhatsApp — согласуем задачи, сроки и бюджет.",
      btn: "Связаться",
    },
  },
} as const;

export default function IpekSivaPage({
  searchParams,
}: { searchParams: { lang?: Lang } }) {
  const lang: Lang = (searchParams.lang as Lang) || "tr";
  const L = T[lang];

  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] tracking-[.28em] text-brand-gold/90 uppercase">{L.tag}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">{L.h1}</h1>
            <p className="mt-4 text-lg text-neutral-700">{L.sub}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              {L.bullets.map((b) => (
                <span key={b} className="rounded-full bg-black/[.05] px-3 py-1.5">{b}</span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/iletisim" className="btn-primary">{L.book}</a>
              <Link href="/galeri" className="btn-ghost">{L.details}</Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow aspect-[4/3]">
              {/* Kendi görsel yolunu kullan: /hero/ipek-siva.jpg veya /assets/hero/ipek-siva.jpg */}
              <Image src="/hero/ipek-siva.jpg" alt="İpek sıva" fill className="object-cover" priority />
            </div>
          </div>
        </div>
        <div className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />
      </section>

      {/* WHAT / WHERE */}
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white p-6 shadow">
            <h2 className="text-xl font-semibold tracking-tight">{L.what.title}</h2>
            <p className="mt-3 text-neutral-700">{L.what.p1}</p>
            <p className="mt-2 text-neutral-700">{L.what.p2}</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow">
            <h2 className="text-xl font-semibold tracking-tight">{L.where.title}</h2>
            <ul className="mt-3 grid gap-2">
              {L.where.list.map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-white text-xs">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg font-medium tracking-tight">{L.faqTitle}</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-3">
            {L.faq.map((f) => (
              <details key={f.q} className="rounded-2xl border bg-white p-5 shadow">
                <summary className="font-medium cursor-pointer list-none">{f.q}</summary>
                <p className="mt-2 text-neutral-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl border bg-white/85 backdrop-blur p-6 md:p-10 shadow flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{L.cta.title}</h3>
              <p className="mt-2 text-neutral-700">{L.cta.sub}</p>
            </div>
            <a href="/iletisim" className="btn-primary">{L.cta.btn}</a>
          </div>
        </div>
      </section>
    </>
  );
}
