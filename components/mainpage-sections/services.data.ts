export type Lang = "tr" | "en" | "ru";

type Copy = {
  kicker: string;
  title: string;          // vurgulamak istediğin kelimeyi [[...]] içine al
  subtitle: string;
  bullets: string[];
  ctas: { label: string; href: string; variant: "primary" | "ghost" }[];
};

export type ServiceItem = {
  slug: string;                // URL/param için: "ipek-siva", "boya"...
  featured?: boolean;          // ana vitrine default gelsin mi?
  soon?: boolean;              // yakında rozetini gösterir + CTA'ları disable eder
  image: string;               // hero görseli
  copy: Record<Lang, Copy>;
};

export const services: ServiceItem[] = [
  {
    slug: "ipek-siva",
    featured: true,
    image: "/assets/hero/ipek-siva.jpg",
    copy: {
      tr: {
        kicker: "İpek-Sıva",
        title: "[[İpek Sıva]] ile zamansız bir doku",
        subtitle: "Tozsuz uygulama, premium finish, usta garantisi.",
        bullets: ["48 saatte teslim", "Tozsuz uygulama", "Yerel referans"],
        ctas: [
          { label: "İpek Sıva Detayları", href: "/ipek-siva", variant: "primary" },
          { label: "Keşif Randevusu", href: "/iletisim", variant: "ghost" },
        ],
      },
      en: {
        kicker: "Silk-Plaster",
        title: "Timeless texture with [[Silk Plaster]]",
        subtitle: "Dust-free application, premium finish, guaranteed workmanship.",
        bullets: ["48h delivery", "Dust-free process", "Local references"],
        ctas: [
          { label: "See Details", href: "/ipek-siva", variant: "primary" },
          { label: "Book a Survey", href: "/iletisim", variant: "ghost" },
        ],
      },
      ru: {
        kicker: "Шелковой-Штукатуркой",
        title: "Вневременная фактура с [[Шелковой Штукатуркой]]",
        subtitle: "Без пыли, премиальная отделка, гарантия мастера.",
        bullets: ["Сдача за 48 часов", "Без пыли", "Местные рекомендации"],
        ctas: [
          { label: "Подробнее", href: "/ipek-siva", variant: "primary" },
          { label: "Записаться на замер", href: "/iletisim", variant: "ghost" },
        ],
      },
    },
  },
  {
    slug: "boya",
    soon: true,
    image: "/images/hero-boya.jpg",
    copy: {
      tr: {
        kicker: "Boya",
        title: "İç/Dış boya ile [[temiz]] bir yenileme",
        subtitle: "Rutubet ve yüzey onarım dahil.",
        bullets: ["Rulo + püskürtme", "Rutubet çözümü", "Temiz teslim"],
        ctas: [{ label: "Yakında", href: "#", variant: "primary" }],
      },
      en: {
        kicker: "Painting",
        title: "A [[clean]] refresh, interior & exterior",
        subtitle: "Includes damp & surface repairs.",
        bullets: ["Roller & spray", "Damp treatment", "Clean handover"],
        ctas: [{ label: "Coming soon", href: "#", variant: "primary" }],
      },
      ru: {
        kicker: "Покраска",
        title: "[[Чистое]] обновление: внутри и снаружи",
        subtitle: "Включая ремонт влажных зон и поверхности.",
        bullets: ["Валик/распыление", "Защита от влаги", "Чистая сдача"],
        ctas: [{ label: "Скоро", href: "#", variant: "primary" }],
      },
    },
  },
  {
    slug: "alcipan",
    soon: true,
    image: "/images/hero-alcipan.jpg",
    copy: {
      tr: {
        kicker: "Alçıpan/Asma-Tavan",
        title: "Işık ve akustiği [[mükemmel]] ayarla",
        subtitle: "Hat temizliği, gizli LED ve yalıtım.",
        bullets: ["Gizli ışık", "Ses konforu", "Hızlı montaj"],
        ctas: [{ label: "Yakında", href: "#", variant: "primary" }],
      },
      en: {
        kicker: "Drywall-Ceilings",
        title: "Tune light & acoustics [[perfectly]]",
        subtitle: "Clean lines, hidden LEDs, insulation.",
        bullets: ["Cove lighting", "Acoustic comfort", "Fast install"],
        ctas: [{ label: "Coming soon", href: "#", variant: "primary" }],
      },
      ru: {
        kicker: "Гипсокартон",
        title: "Идеальный [[свет]] и акустика",
        subtitle: "Чистые линии, скрытые LED, изоляция.",
        bullets: ["Скрытая подсветка", "Акустика", "Быстрый монтаж"],
        ctas: [{ label: "Скоро", href: "#", variant: "primary" }],
      },
    },
  },
   {
    slug: "daha fazlası",
    soon: true,
    image: "/images/hero-alcipan.jpg",
    copy: {
      tr: {
        kicker: "Daha-Fazlası",
        title: "Işık ve akustiği [[mükemmel]] ayarla",
        subtitle: "Hat temizliği, gizli LED ve yalıtım.",
        bullets: ["Gizli ışık", "Ses konforu", "Hızlı montaj"],
        ctas: [{ label: "Yakında", href: "#", variant: "primary" }],
      },
      en: {
        kicker: "More",
        title: "Tune light & acoustics [[perfectly]]",
        subtitle: "Clean lines, hidden LEDs, insulation.",
        bullets: ["Cove lighting", "Acoustic comfort", "Fast install"],
        ctas: [{ label: "Coming soon", href: "#", variant: "primary" }],
      },
      ru: {
        kicker: "больше",
        title: "Идеальный [[свет]] и акустика",
        subtitle: "Чистые линии, скрытые LED, изоляция.",
        bullets: ["Скрытая подсветка", "Акустика", "Быстрый монтаж"],
        ctas: [{ label: "Скоро", href: "#", variant: "primary" }],
      },
    },
  },
];
