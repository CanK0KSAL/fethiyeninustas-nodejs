"use client";

import Link from "next/link";
import useLang, { type Lang } from "@/components/lib/use-lang";

/** WhatsApp numaran: 905xxxxxxxxx (başına + koyma) */
const WA_NUMBER = "905555555555";
const WA_MSG: Record<Lang, string> = {
  tr: "Merhaba, web sitenizden yazıyorum.",
  en: "Hello, I'm writing from your website.",
  ru: "Здравствуйте! Пишу с вашего сайта."
};

const T = {
  tr: {
    tagline: "Premium doku ve temiz uygulama standartları.",
    sections: { services: "Hizmetler", areas: "Bölgeler", company: "Kurumsal", contact: "İletişim", legal: "Hukuki" },
    soon: "Yakında",
    links: {
      silk: "İpek Sıva",
      paint: "Boya (iç/dış)",
      drywall: "Alçıpan & Asma Tavan",
      deco: "Dekoratif Kaplama",
      fethiye: "Fethiye", calis: "Çalış", ovacik: "Ovacık", gocek: "Göcek",
      portfolio: "Portföy", blog: "Blog", about: "Hakkımızda",
      privacy: "Gizlilik", terms: "Kullanım Şartları", kvkk: "KVKK"
    },
    contact: { phone: "Telefon", email: "E-posta", whatsapp: "WhatsApp" },
    rights: "Tüm hakları saklıdır."
  },
  en: {
    tagline: "Premium textures and immaculate application.",
    sections: { services: "Services", areas: "Areas", company: "Company", contact: "Contact", legal: "Legal" },
    soon: "Coming soon",
    links: {
      silk: "Silk Plaster",
      paint: "Painting (interior/exterior)",
      drywall: "Drywall & Ceilings",
      deco: "Decorative Coatings",
      fethiye: "Fethiye", calis: "Calis", ovacik: "Ovacik", gocek: "Gocek",
      portfolio: "Portfolio", blog: "Blog", about: "About",
      privacy: "Privacy", terms: "Terms", kvkk: "KVKK"
    },
    contact: { phone: "Phone", email: "Email", whatsapp: "WhatsApp" },
    rights: "All rights reserved."
  },
  ru: {
    tagline: "Премиальные фактуры и безупречный монтаж.",
    sections: { services: "Услуги", areas: "Районы", company: "Компания", contact: "Контакты", legal: "Правовая" },
    soon: "Скоро",
    links: {
      silk: "Шелковая штукатурка",
      paint: "Покраска (внутри/снаружи)",
      drywall: "ГКЛ и потолки",
      deco: "Декоративные покрытия",
      fethiye: "Фетхие", calis: "Чалыш", ovacik: "Оваджик", gocek: "Гёджек",
      portfolio: "Портфолио", blog: "Блог", about: "О нас",
      privacy: "Конфиденциальность", terms: "Условия", kvkk: "KVKK"
    },
    contact: { phone: "Телефон", email: "E-mail", whatsapp: "WhatsApp" },
    rights: "Все права защищены."
  }
} as const;

const WhatsAppIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M12.04 2C6.6 2 2.2 6.34 2.2 11.72c0 2 .57 3.85 1.56 5.42L2 22l4.99-1.68a10.06 10.06 0 0 0 5.05 1.35h.01c5.45 0 9.85-4.34 9.85-9.72C21.9 6.34 17.49 2 12.04 2Zm5.83 13.94c-.25.7-1.22 1.14-1.7 1.17-.45.03-1.02.04-1.65-.1-.38-.08-.87-.29-1.5-.56-2.64-1.14-4.36-3.82-4.49-4-.13-.18-1.08-1.45-1.08-2.77s.68-1.97.93-2.24c.25-.27.55-.34.73-.34.18 0 .36.01.52.01.17 0 .39-.06.61.47.23.56.78 1.94.85 2.08.07.14.11.31.02.5-.09.2-.14.32-.27.49-.14.17-.29.38-.41.51-.14.14-.28.3-.12.58.16.27.72 1.19 1.55 1.93 1.07.95 1.96 1.25 2.23 1.39.28.14.44.12.61-.07.18-.2.7-.81.89-1.09.2-.27.38-.23.63-.14.26.09 1.64.77 1.93.91.29.14.48.21.55.33.07.12.07.68-.18 1.38Z"/>
  </svg>
);

function waHref(lang: Lang) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG[lang])}`;
}

export default function Footer() {
  const lang = useLang();
  const L = T[lang];

  const services = [
    { label: L.links.silk, href: "/ipek-siva" },
    { label: L.links.paint, href: "#", soon: true },
    { label: L.links.drywall, href: "#", soon: true },
    { label: L.links.deco, href: "#", soon: true },
  ];
  const areas = [
    { label: L.links.fethiye, href: "/bolgeler/fethiye" },
    { label: L.links.calis, href: "/bolgeler/calis" },
    { label: L.links.ovacik, href: "/bolgeler/ovacik" },
    { label: L.links.gocek, href: "/bolgeler/gocek" },
  ];
  const company = [
    { label: L.links.portfolio, href: "/galeri" },
    { label: L.links.blog, href: "/blog" },
    { label: L.links.about, href: "/hakkimizda" },
  ];
  const legal = [
    { label: L.links.kvkk, href: "/kvkk" },
    { label: L.links.privacy, href: "/gizlilik" },
    { label: L.links.terms, href: "/kullanim-sartlari" },
  ];

  return (
    <footer className="mt-24 bg-neutral-950 text-neutral-300 relative">
      {/* üst altın saç çizgisi */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />

      <div className="section px-6 md:px-10 py-14">
        {/* üst satır: marka ve mini aksiyon */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src="/assets/brand/logo.png" alt="Logo" className="h-14 w-14 object-contain bg-neutral-900 rounded" />
            <div>
              <div className="text-lg font-semibold tracking-tight text-white">
                Fethiye’nin <span className="text-brand-gold">Ustası</span>
              </div>
              <div className="text-sm text-neutral-400">{L.tagline}</div>
            </div>
          </div>

          {/* WhatsApp — sadece ikon, koyu/zarif */}
          <a
            href={waHref(lang)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={L.contact.whatsapp}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10 hover:bg-neutral-700 transition"
          >
            <WhatsAppIcon className="h-5 w-5 text-green-500" />
          </a>
        </div>

        {/* alt grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {/* Hizmetler */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">{L.sections.services}</h4>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.soon ? "#" : s.href}
                    aria-disabled={s.soon}
                    className={[
                      "text-neutral-300 hover:text-white transition",
                      s.soon ? "opacity-60 cursor-not-allowed" : ""
                    ].join(" ")}
                  >
                    {s.label}
                    {s.soon && <span className="ml-2 rounded-full bg-white/10 text-neutral-200 px-2 py-0.5 text-[11px]">{L.soon}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölgeler */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">{L.sections.areas}</h4>
            <ul className="mt-4 space-y-2">
              {areas.map((a) => (
                <li key={a.label}>
                  <Link href={a.href} className="text-neutral-300 hover:text-white transition">{a.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">{L.sections.company}</h4>
            <ul className="mt-4 space-y-2">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-neutral-300 hover:text-white transition">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim (adres YOK) */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">{L.sections.contact}</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <div className="text-xs text-neutral-400">{L.contact.phone}</div>
                <a href="tel:+90-555-555-55-55" className="text-neutral-300 hover:text-white transition">+90 555 555 55 55</a>
              </li>
              <li>
                <div className="text-xs text-neutral-400">{L.contact.email}</div>
                <a href="mailto:info@fethiyeninustasi.com" className="text-neutral-300 hover:text-white transition">info@fethiyeninustasi.com</a>
              </li>
              {/* Adres İSTENMEDİ — eklemiyoruz */}
            </ul>
          </div>
        </div>

        {/* telif + hukuki */}
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-neutral-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Fethiye’nin Ustası — {L.rights}</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legal.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-white transition">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
