import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { Lang } from "@/components/lib/use-lang";
import LangSync from "./LangSync";

/* -------------------- META -------------------- */
export const metadata: Metadata = {
  title: "Hakkımızda | Fethiye’nin Ustası",
  description:
    "Fethiye’de üst düzey renovasyon: ipek sıva, boya, alçıpan/asma tavan, dekoratif kaplama ve daha fazlası. Yerinde keşif, sözleşme & garanti, çok dilli ekip.",
};

/* -------------------- I18N -------------------- */
const T = {
  tr: {
    heroTag: "RENOVASYON • FETHİYE",
    heroH1:
      "Fethiye’de üst düzey renovasyon\n— tasarımdan temiz teslim’e tek elden",
    heroSub:
      "İpek sıva başta olmak üzere; boya, alçıpan/asma tavan, dekoratif kaplama ve seçili tamamlayıcı işlerde uçtan uca hizmet. Yerinde keşif, sözleşme ve garanti standart.",
    ctaPrimary: "Keşif Randevusu Al",
    ctaSecondary: "Portföyü Gör",
    stats: [
      { k: "Tamamlanan proje", v: "400+" },
      { k: "Deneyim", v: "12+ yıl" },
      { k: "Memnuniyet", v: "%98" },
      { k: "Teslim süresi", v: "48 sa.+" },
    ],
    valuesTitle: "Güven inşa eden prensipler",
    values: [
      { t: "Sözleşme & garanti", d: "Net kapsam, yazılı süreç ve teslim sonrası garanti." },
      { t: "Sigortalı ekip", d: "Şantiye güvenliği ve çalışırken oluşabilecek risklere karşı koruma." },
      { t: "Tozsuz uygulama", d: "Temiz iş alanı, korumalı yüzeyler ve düzenli ilerleyiş." },
      { t: "Zamanında teslim", d: "Gerçekçi planlama, şeffaf bilgilendirme ve hedefe sadakat." },
      { t: "Tasarım desteği", d: "Renk/doku danışmanlığı ve örnek duvarla karar verme." },
      { t: "Çok dilli ekip", d: "TR • EN • RU iletişim; beklenti ve detayların netleşmesi." },
    ],
    scopeTitle: "Hizmet kapsamlarımız",
    scopeSoon: "Yakında",
    scope: [
      { t: "İpek Sıva", soon: false },
      { t: "Boya", soon: false },
      { t: "Alçıpan / Asma Tavan", soon: false },
      { t: "Dekoratif Kaplama", soon: false },
      { t: "Mikroçimento / Zemin", soon: true },
      { t: "Marangozluk", soon: true },
      { t: "Elektrik & Aydınlatma", soon: true },
      { t: "Banyo Renovasyonu", soon: true },
    ],
    processTitle: "Nasıl çalışıyoruz?",
    process: [
      { t: "Yerinde keşif", d: "Nem/zemin kontrolü, metraj, ihtiyaç analizi." },
      { t: "Tasarım & teklif", d: "Renk/doku önerileri; yazılı, net teklif." },
      { t: "Planlama", d: "Takvim, erişim ve koruma planı; malzeme onayı." },
      { t: "Uygulama", d: "Tozsuz disiplin; düzenli ilerleme ve günlük notlar." },
      { t: "Teslim & garanti", d: "Temiz teslim; bakım/garanti bilgilendirmesi." },
    ],
    trustTitle: "Sertifikalar & iş ortaklıkları",
    galleryTitle: "Şantiyeden kareler",
    teamTitle: "Takım",
    team: [
      { n: "Usta Kemal", r: "Uygulama Lideri" },
      { n: "Mimar Eda", r: "Renk / Doku Danışmanı" },
      { n: "Usta İsmail", r: "Alçıpan & Tavan" },
    ],
    faqTitle: "Sık sorulanlar",
    faq: [
      {
        q: "Keşif ücretsiz mi?",
        a: "Evet, Fethiye ve yakın çevresinde keşif ücretsiz. Uzak bölgeler için uygun yol planı yapılır.",
      },
      {
        q: "Garanti süreniz nedir?",
        a: "İş kapsamına göre değişir; ipek sıva uygulamalarında işçilik garantisi standarttır.",
      },
      {
        q: "Evde eşyalar varken uygulama yapılır mı?",
        a: "Yapılır; koruma ve tozsuz yöntemlerle alan güvenliği sağlanır.",
      },
    ],
    ctaSlabTitle: "Projeni birlikte netleştirelim",
    ctaSlabSub:
      "Kısa bir telefon/WhatsApp görüşmesiyle ihtiyacı, takvimi ve bütçeyi birlikte çıkaralım.",
    btnDiscover: "Keşif Randevusu",
    btnWhatsapp: "WhatsApp",
  },

  en: {
    heroTag: "RENOVATION • FETHIYE",
    heroH1:
      "High-end renovation in Fethiye\n—from design to clean handover",
    heroSub:
      "Beyond silk plaster: painting, drywall/ceilings, decorative finishes and selected trades. On-site survey, written contract & warranty as standard.",
    ctaPrimary: "Book a Survey",
    ctaSecondary: "See Portfolio",
    stats: [
      { k: "Projects delivered", v: "400+" },
      { k: "Experience", v: "12+ yrs" },
      { k: "Satisfaction", v: "98%" },
      { k: "Lead time", v: "48h+" },
    ],
    valuesTitle: "Principles that build trust",
    values: [
      { t: "Contract & warranty", d: "Clear scope, written process and post-handover support." },
      { t: "Insured team", d: "Site safety and liability covered during works." },
      { t: "Low-dust workflow", d: "Protected surfaces and tidy progress." },
      { t: "On-time delivery", d: "Realistic planning and proactive updates." },
      { t: "Design assistance", d: "Tone/texture consulting and sample walls." },
      { t: "Multilingual team", d: "TR • EN • RU communication — no lost details." },
    ],
    scopeTitle: "Service scope",
    scopeSoon: "Coming soon",
    scope: [
      { t: "Silk Plaster", soon: false },
      { t: "Painting", soon: false },
      { t: "Drywall / Ceilings", soon: false },
      { t: "Decorative Coatings", soon: false },
      { t: "Microcement / Flooring", soon: true },
      { t: "Carpentry", soon: true },
      { t: "Electrical & Lighting", soon: true },
      { t: "Bathroom Renovation", soon: true },
    ],
    processTitle: "How we work",
    process: [
      { t: "On-site survey", d: "Moisture/substrate checks and take-off." },
      { t: "Design & proposal", d: "Tone/texture options; clear written quote." },
      { t: "Planning", d: "Schedule, access & protection plan; material approval." },
      { t: "Execution", d: "Low-dust discipline; daily progress notes." },
      { t: "Handover & warranty", d: "Clean handover and care/warranty briefing." },
    ],
    trustTitle: "Certifications & partners",
    galleryTitle: "From our sites",
    teamTitle: "Team",
    team: [
      { n: "Kemal", r: "Lead Applicator" },
      { n: "Eda", r: "Tone / Texture Consultant" },
      { n: "Ismail", r: "Drywall & Ceilings" },
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Is the survey free?", a: "Yes, within Fethiye area. For distant locations, we plan sensibly." },
      { q: "How long is the warranty?", a: "Depends on scope; silk plaster workmanship is covered as standard." },
      { q: "Can you work with furniture on site?", a: "Yes; with proper protection and low-dust methods." },
    ],
    ctaSlabTitle: "Let’s clarify your project together",
    ctaSlabSub:
      "A short call/WhatsApp to align needs, timing and budget.",
    btnDiscover: "Book Survey",
    btnWhatsapp: "WhatsApp",
  },

  ru: {
    heroTag: "РЕНОВАЦИЯ • ФЕТХИЕ",
    heroH1:
      "Премиальная реновация в Фетхие\n— от дизайна до чистой сдачи",
    heroSub:
      "Не только шелковая штукатурка: покраска, ГКЛ/потолки, декоративные покрытия и сопутствующие работы. Замер на объекте, договор и гарантия — по умолчанию.",
    ctaPrimary: "Записаться на замер",
    ctaSecondary: "Портфолио",
    stats: [
      { k: "Сданные объекты", v: "400+" },
      { k: "Опыт", v: "12+ лет" },
      { k: "Удовлетворенность", v: "98%" },
      { k: "Сроки", v: "48ч+" },
    ],
    valuesTitle: "Принципы доверия",
    values: [
      { t: "Договор и гарантия", d: "Четкий объем, письменный процесс и сопровождение после сдачи." },
      { t: "Застрахованная бригада", d: "Безопасность на площадке и ответственность." },
      { t: "Минимум пыли", d: "Защита поверхностей и аккуратный ход работ." },
      { t: "Сроки — в срок", d: "Реалистичное планирование и прозрачная коммуникация." },
      { t: "Помощь дизайна", d: "Подбор тона/фактуры, образец стены." },
      { t: "Команда TR • EN • RU", d: "Без потери нюансов в коммуникации." },
    ],
    scopeTitle: "Направления работ",
    scopeSoon: "Скоро",
    scope: [
      { t: "Шелковая штукатурка", soon: false },
      { t: "Покраска", soon: false },
      { t: "ГКЛ / Потолки", soon: false },
      { t: "Декоративные покрытия", soon: false },
      { t: "Микроцемент / Полы", soon: true },
      { t: "Столярные работы", soon: true },
      { t: "Электрика и свет", soon: true },
      { t: "Ремонт ванных", soon: true },
    ],
    processTitle: "Как мы работаем",
    process: [
      { t: "Замер на объекте", d: "Проверка влажности/основания и замеры." },
      { t: "Дизайн и предложение", d: "Варианты тона/фактуры; четкая смета." },
      { t: "Планирование", d: "График, доступ, защита; согласование материалов." },
      { t: "Монтаж", d: "Мало пыли; ежедневные заметки о ходе работ." },
      { t: "Сдача и гарантия", d: "Чистая сдача и инструкции по уходу/гарантии." },
    ],
    trustTitle: "Сертификаты и партнеры",
    galleryTitle: "Кадры с объектов",
    teamTitle: "Команда",
    team: [
      { n: "Кемаль", r: "Руководитель работ" },
      { n: "Эда", r: "Подбор тона/фактуры" },
      { n: "Исмaил", r: "ГКЛ и потолки" },
    ],
    faqTitle: "Вопросы и ответы",
    faq: [
      { q: "Замер бесплатный?", a: "Да, в пределах Фетхие. Для удаленных — по согласованию." },
      { q: "На какой срок гарантия?", a: "Зависит от вида работ; на штукатурку — стандартная гарантия." },
      { q: "Работаете с мебелью?", a: "Да, при правильной защите и пылезащите." },
    ],
    ctaSlabTitle: "Проясним проект вместе",
    ctaSlabSub:
      "Короткий созвон/WhatsApp — согласуем задачи, сроки и бюджет.",
    btnDiscover: "Записаться",
    btnWhatsapp: "WhatsApp",
  },
} as const;

/* -------------------- PAGE -------------------- */
export default function AboutPage({
  searchParams,
}: {
  searchParams: { lang?: Lang };
}) {
  const lang: Lang = (searchParams.lang as Lang) || "tr";
  const L = T[lang];

  return (
    <>
      <LangSync expected={lang} />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] tracking-[.28em] text-brand-gold/90 uppercase">
              {L.heroTag}
            </p>
            <h1 className="whitespace-pre-line mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              {L.heroH1}
            </h1>
            <p className="mt-4 text-lg text-neutral-700">{L.heroSub}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/iletisim" className="btn-primary">{L.ctaPrimary}</a>
              <Link href="/galeri" className="btn-ghost">{L.ctaSecondary}</Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {L.stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border bg-white p-4 text-center shadow"
                >
                  <div className="text-2xl font-semibold">{s.v}</div>
                  <div className="text-xs text-neutral-600 mt-1">{s.k}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Collage */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-5 grid-rows-6 gap-3">
              <div className="relative col-span-3 row-span-4 rounded-2xl overflow-hidden shadow">
                <Image
                  src="/assets/about/hero-1.jpg"
                  alt="renovation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative col-span-2 row-span-3 rounded-2xl overflow-hidden shadow">
                <Image
                  src="/assets/about/hero-2.jpg"
                  alt="renovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 row-span-3 rounded-2xl overflow-hidden shadow">
                <Image
                  src="/assets/about/hero-3.jpg"
                  alt="renovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-3 row-span-2 rounded-2xl overflow-hidden shadow">
                <Image
                  src="/assets/about/hero-4.jpg"
                  alt="renovation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Altın çizgi */}
        <div className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {L.valuesTitle}
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {L.values.map((v) => (
              <div key={v.t} className="rounded-2xl border bg-white p-5 shadow flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-black/[.04] flex items-center justify-center">
                  {/* minimalist icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="M4 12l4 4 12-12" stroke="currentColor" strokeWidth="1.8" fill="none" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">{v.t}</div>
                  <p className="text-sm text-neutral-700 mt-1">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="px-6 md:px-10 pb-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {L.scopeTitle}
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {L.scope.map((s, i) => (
              <div key={i} className="rounded-2xl border bg-white p-5 shadow">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{s.t}</div>
                  {s.soon && (
                    <span className="badge">{L.scopeSoon}</span>
                  )}
                </div>
                <div className="mt-3 relative aspect-[4/3] rounded-xl overflow-hidden bg-black/[.03]">
                  <Image
                    src={`/assets/about/scope-${i + 1}.jpg`}
                    alt={s.t}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {L.processTitle}
          </h2>
          <ol className="mt-6 grid lg:grid-cols-5 gap-4">
            {L.process.map((p, i) => (
              <li key={p.t} className="rounded-2xl border bg-white p-5 shadow">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-white text-sm">
                    {i + 1}
                  </span>
                  <span className="font-medium">{p.t}</span>
                </div>
                <p className="text-sm text-neutral-700 mt-2">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARTNERS / TRUST */}
      <section className="px-6 md:px-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg font-medium tracking-tight">{L.trustTitle}</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="relative h-14 rounded-xl border bg-white p-3 shadow flex items-center justify-center"
              >
                <Image
                  src={`/assets/brand/partner-${n}.svg`}
                  alt={`partner-${n}`}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg font-medium tracking-tight">{L.galleryTitle}</h3>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow">
                <Image
                  src={`/assets/about/site-${n}.jpg`}
                  alt={`site-${n}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
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
                <summary className="font-medium cursor-pointer list-none">
                  {f.q}
                </summary>
                <p className="text-neutral-700 mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SLAB */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl border bg-white/85 backdrop-blur p-6 md:p-10 shadow flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                {L.ctaSlabTitle}
              </h3>
              <p className="mt-2 text-neutral-700">{L.ctaSlabSub}</p>
            </div>
            <div className="flex gap-3">
              <a href="/iletisim" className="btn-primary">{L.btnDiscover}</a>
              <a
                href="https://wa.me/90XXXXXXXXXX"
                target="_blank"
                className="btn-ghost inline-flex items-center gap-2"
                rel="noopener noreferrer"
              >
                {/* mini WA icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20.5 11.5a8.5 8.5 0 1 1-15.9 4.4L3 21l5.2-1.6a8.5 8.5 0 1 0 12.3-7.9z" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M8.5 9c.2-.5.7-.7 1.1-.5l.9.4c.3.1.4.5.3.8l-.3.8a.6.6 0 0 0 .1.6c.6.8 1.4 1.5 2.3 2 .2.1.5.1.6-.1l.6-.6c.2-.3.6-.3.9 0l.7.7c.3.3.3.8 0 1.1l-.2.2c-.7.7-1.7.9-2.6.5-1.6-.7-3-1.9-4-3.4-.6-.9-.7-2 .1-2.9z" fill="currentColor"/>
                </svg>
                {L.btnWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
