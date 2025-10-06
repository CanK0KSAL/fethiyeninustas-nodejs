import type { Lang } from "@/components/lib/use-lang";

type CTA = { label: string; href: string; variant: "primary" | "ghost" };
type ServiceCard = { title: Record<Lang,string>; desc: Record<Lang,string>; href: string; tag?: Record<Lang,string>; soon?: boolean };

export const homeCopy = {
  statement: {
    kicker: { tr:"Fethiye’nin Ustası", en:"Master of Fethiye", ru:"Мастер Фетхие" },
    title:  { tr:"Mekânınıza zamansız bir ifade kazandıran premium yüzeyler",
              en:"Premium surfaces that add a timeless expression to your space",
              ru:"Премиальные поверхности с вневременным характером" },
    body:   { tr:"İpek sıva başta olmak üzere, seçkin dokular ve temiz uygulama standartlarıyla yaşam alanlarını yükseltiyoruz.",
              en:"Starting with silk plaster, we elevate interiors with refined textures and immaculate application standards.",
              ru:"Начиная с шелковой штукатурки, мы повышаем уровень интерьеров благодаря утончённым фактурам и безупречному монтажу." }
  },

  services: {
    title: { tr:"Hizmetler", en:"Services", ru:"Услуги" },
    viewSilk: { tr:"İpek Sıva", en:"Silk Plaster", ru:"Шелковая штукатурка" },
    explore: { tr:"İncele →", en:"Explore →", ru:"Подробнее →" },
    soon:    { tr:"Yakında", en:"Coming soon", ru:"Скоро" },
    featured:{ tr:"Öne Çıkan", en:"Featured", ru:"Топ" },
    cards: [
      {
        title: { tr:"İpek Sıva", en:"Silk Plaster", ru:"Шелковая штукатурка" },
        desc:  { tr:"Elyaf bazlı, nefes alan, tozsuz premium doku.",
                 en:"Fiber-based, breathable, dust-free premium texture.",
                 ru:"Дышащая волокнистая фактура, без пыли." },
        href: "/ipek-siva",
        tag:   { tr:"Öne Çıkan", en:"Featured", ru:"Топ" }
      },
      {
        title: { tr:"Boya (iç/dış)", en:"Painting (interior/exterior)", ru:"Покраска (внутри/снаружи)" },
        desc:  { tr:"Rutubet çözümü ve zemin onarımla birlikte.",
                 en:"Includes damp treatment and surface repairs.",
                 ru:"С обработкой влажных зон и ремонтом поверхности." },
        href: "#",
        soon: true
      },
      {
        title: { tr:"Alçıpan & Asma Tavan", en:"Drywall & Ceilings", ru:"Гипсокартон и потолки" },
        desc:  { tr:"Gizli ışık, akustik ve temiz hatlar.",
                 en:"Hidden lighting, acoustic comfort, clean lines.",
                 ru:"Скрытая подсветка, акустика, чистые линии." },
        href: "#",
        soon: true
      },
      {
        title: { tr:"Dekoratif Kaplama", en:"Decorative Coatings", ru:"Декоративные покрытия" },
        desc:  { tr:"Mikro beton ve efekt yüzeyler.",
                 en:"Microcement and effect finishes.",
                 ru:"Микробетон и фактурные покрытия." },
        href: "#",
        soon: true
      },
      {
        title: { tr:"Duvar Kağıdı", en:"Wallpaper", ru:"Обои" },
        desc:  { tr:"Söküm & pürüzsüz uygulama.",
                 en:"Removal & flawless application.",
                 ru:"Демонтаж и безупречный монтаж." },
        href: "#",
        soon: true
      },
      {
        title: { tr:"Epoksi Zemin", en:"Epoxy Flooring", ru:"Эпоксидные полы" },
        desc:  { tr:"Dayanıklı, şık, hijyenik.",
                 en:"Durable, sleek and hygienic.",
                 ru:"Прочно, стильно и гигиенично." },
        href: "#",
        soon: true
      },
    ] as ServiceCard[]
  },

  portfolio: {
    title: { tr:"Portföy", en:"Portfolio", ru:"Портфолио" },
    subtitle: { tr:"Seçili uygulamalardan kareler", en:"Selected works", ru:"Выбранные проекты" }
  },

  process: {
    title: { tr:"Süreç", en:"Process", ru:"Процесс" },
    step:  { tr:"Adım", en:"Step", ru:"Этап" },
    items: [
      {
        t: { tr:"Keşif & Danışmanlık", en:"Survey & Consulting", ru:"Замер и консультация" },
        d: { tr:"Mekânı yerinde analiz ediyor, doku ve tonları birlikte seçiyoruz.",
             en:"On-site analysis; we decide textures and tones together.",
             ru:"Выездной анализ; вместе подбираем фактуру и оттенки." }
      },
      {
        t: { tr:"Zemin Hazırlığı", en:"Surface Prep", ru:"Подготовка основания" },
        d: { tr:"Astar ve düzeltmelerle pürüzsüz altyapı.",
             en:"Priming and leveling for a smooth base.",
             ru:"Грунт и выравнивание для идеальной основы." }
      },
      {
        t: { tr:"Uygulama", en:"Application", ru:"Нанесение" },
        d: { tr:"Tozsuz süreç ve kontrollü kuruma.",
             en:"Dust-free process and controlled curing.",
             ru:"Процесс без пыли и контролируемая сушка." }
      },
      {
        t: { tr:"Teslim", en:"Handover", ru:"Сдача" },
        d: { tr:"Temizlik, son kontrol ve garanti.",
             en:"Cleaning, final check and warranty.",
             ru:"Уборка, финальная проверка и гарантия." }
      },
    ]
  },

  testimonials: {
    title: { tr:"Yorumlar", en:"Testimonials", ru:"Отзывы" },
    items: [
      { n:"M. Erdem • Çalış",
        q:{ tr:"Salonumuz başka bir seviyeye çıktı. Uygulama tertemizdi.",
            en:"Our living room went to another level. Immaculate application.",
            ru:"Гостиная стала на уровень выше. Монтаж безупречный." } },
      { n:"A. Kuznetsova • Göcek",
        q:{ tr:"İpek sıva dokusu çok zarif. İletişim güçlü.",
            en:"Silk plaster texture is elegant. Communication was superb.",
            ru:"Фактура шелковой штукатурки утончённая. Отличная коммуникация." } },
      { n:"J. Miller • Ovacık",
        q:{ tr:"Detaylar çok özenliydi. Hızlı ve tozsuz.",
            en:"Attention to detail. Fast and dust-free.",
            ru:"Внимание к деталям. Быстро и без пыли." } },
    ]
  },

  cta: {
    title: { tr:"Mekânınızı yükseltelim", en:"Let’s elevate your space", ru:"Поднимем ваш интерьер на новый уровень" },
    text:  { tr:"Keşif randevunuzu planlayalım; en doğru doku ve tonları birlikte seçelim.",
             en:"Book a survey; we’ll choose the right texture and tones together.",
             ru:"Запланируем замер и вместе подберём фактуру и оттенки." },
    primary: { tr:"Keşif Randevusu", en:"Book a Survey", ru:"Записаться на замер" },
    secondary:{ tr:"İpek Sıva", en:"Silk Plaster", ru:"Шелковая штукатурка" }
  }
} as const;
