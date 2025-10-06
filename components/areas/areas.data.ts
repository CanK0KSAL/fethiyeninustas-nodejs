// components/areas/areas.data.ts
export type Lang = "tr" | "en" | "ru";

export type AreaCopy = {
  metaTitle: string;
  metaDesc: string;
  h1: string;
  subtitle: string;
  intro: string[];
  checklist: string[];
  neighborhoods: string[];
  faq: { q: string; a: string }[];
  ctaPrimary: string;
  ctaSecondary: string;
};

export type Area = {
  slug: string; // "fethiye", "calis" ...
  image: string; // /public altından yol
  copy: Record<Lang, AreaCopy>;
};

export const AREAS: Area[] = [
  // FETHIYE
  {
    slug: "fethiye",
    image: "/assets/hero/ipek-siva.jpg",
    copy: {
      tr: {
        metaTitle: "Fethiye İpek Sıva Ustası | Keşif & Uygulama | Fethiye’nin Ustası",
        metaDesc:
          "Fethiye ve çevresinde ipek sıva uygulaması: tozsuz süreç, doğru astar, yerel referans. Çalış, Taşyaka, Tuzla, Babataşı, Karagözler, Foça, Karaçulha… 48 saatte teslim.",
        h1: "Fethiye’de İpek Sıva Ustası",
        subtitle: "Fethiye’nin yaz–nem dengesine uygun, nefes alan premium ipek sıva.",
        intro: [
          "Fethiye’nin iklimi (yüksek yaz nemi ve deniz etkisi) yanlış boya/kaplamalarda kabarma ve iz yapabilir. Elyaf bazlı ipek sıva, nefes alan yapısıyla yüzeyin sağlıklı kalmasına yardımcı olur.",
          "Keşifte rutubet–zemin durumunu ölçer, doğru astar/katmanla kalıcı bir çözüm kurarız. Villa, yazlık ve butik oteller için temiz teslim standartlarıyla çalışıyoruz."
        ],
        checklist: [
          "Tozsuz uygulama",
          "Doğru astar ile rutubete dayanım",
          "48 saatte örnek salon teslimi",
          "Renk & doku danışmanlığı",
          "Yerel referanslar"
        ],
        neighborhoods: [
          "Çalış",
          "Taşyaka",
          "Tuzla",
          "Babataşı",
          "Karagözler",
          "Foça",
          "Karaçulha",
          "Patlangıç",
          "Faralya (Uzunyurt)",
          "Kayaköy",
          "Ölüdeniz"
        ],
        faq: [
          {
            q: "Fethiye’de rutubet için nasıl çözüm uyguluyorsunuz?",
            a: "Önce yüzey nemini ve zeminin dayanımını kontrol ediyoruz. Gerekirse izolasyon astarı + düzeltme katı kurup, ipek sıvayı nefes alan sistemi bozmadan uyguluyoruz."
          },
          {
            q: "Keşif ücretli mi?",
            a: "Merkez Fethiye için keşif ücretsizdir. Uzak mahalle ve köyler için ulaşım masrafı alınabilir; iş onayında düşülür."
          },
          {
            q: "Teslim süresi nedir?",
            a: "Standart bir salon 1–2 gün; toplam metrekare ve zemin durumuna göre planlıyoruz. Tozsuz süreçle yaşamı minimum etkiler."
          },
          {
            q: "Temizlik ve bakım nasıl yapılır?",
            a: "Kuru-toz alımıyla yeterlidir. Leke durumunda hafif nemli mikrofiber öneririz; aşındırıcı kimyasal kullanılmaz."
          }
        ],
        ctaPrimary: "Keşif Randevusu",
        ctaSecondary: "İpek Sıva Detayları"
      },
      en: {
        metaTitle: "Silk Plaster in Fethiye | Survey & Application | Master of Fethiye",
        metaDesc:
          "Dust-free silk plaster in Fethiye. Correct priming, local references. Calis, Tasyaka, Tuzla, Babatasi, Karagozler, Foca, Karaculha… 48h delivery for living rooms.",
        h1: "Silk Plaster in Fethiye",
        subtitle: "Breathable, premium texture optimised for Fethiye’s humid summers.",
        intro: [
          "Coastal humidity can cause blistering on wrong paints. Fiber-based silk plaster breathes and helps surfaces stay healthy.",
          "We survey damp & substrate, choose the right primer and layers. Villas, holiday homes and boutique hotels welcome."
        ],
        checklist: [
          "Dust-free process",
          "Correct primer for damp",
          "48h for a sample living room",
          "Tone & texture consulting",
          "Local references"
        ],
        neighborhoods: [
          "Calis",
          "Tasyaka",
          "Tuzla",
          "Babatasi",
          "Karagozler",
          "Foca",
          "Karaculha",
          "Patlangic",
          "Faralya",
          "Kayakoy",
          "Oludeniz"
        ],
        faq: [
          { q: "Do you charge for surveys?", a: "Central Fethiye is free. For remote areas a small travel fee may apply and is deducted upon approval." },
          { q: "How long does it take?", a: "Typical living room 1–2 days; depends on m² and substrate." },
          { q: "How do I clean it?", a: "Dusting is enough. For spots use a slightly damp microfiber; avoid harsh chemicals." }
        ],
        ctaPrimary: "Book a Survey",
        ctaSecondary: "See Silk Plaster"
      },
      ru: {
        metaTitle: "Шелковая штукатурка в Фетхие | Замер и монтаж | Мастер Фетхие",
        metaDesc:
          "Шелковая штукатурка в Фетхие без пыли. Правильный грунт, местные рекомендации. Чалыш, Ташьяка, Тузла, Бабаташи, Карагёзлер… Сдача гостиной за 1–2 дня.",
        h1: "Шелковая штукатурка в Фетхие",
        subtitle: "Дышащая премиальная фактура под влажное лето Фетхие.",
        intro: [
          "Морская влажность может вздувать краску. Волокнистая шелковая штукатурка «дышит» и сохраняет поверхность.",
          "На замере проверяем влажность и основание, подбираем грунт и слои. Виллы, апартаменты, бутик-отели."
        ],
        checklist: [
          "Без пыли",
          "Правильный грунт против влаги",
          "1–2 дня для гостиной",
          "Подбор тона и фактуры",
          "Местные рекомендации"
        ],
        neighborhoods: ["Чалыш","Ташьяка","Тузла","Бабаташи","Карагёзлер","Фоча","Карачулха","Патлангич","Фаралья","Каякёй","Олюдениз"],
        faq: [
          { q: "Платный ли выезд?", a: "Центр Фетхие — бесплатно. Для удалённых районов возможен небольшой сбор за дорогу; вычитается при заказе." },
          { q: "Сроки?", a: "Обычно 1–2 дня для гостиной; зависит от м² и основания." },
          { q: "Как ухаживать?", a: "Достаточно сухой уборки. Пятна — слегка влажная микрофибра, без агрессивной химии." }
        ],
        ctaPrimary: "Записаться на замер",
        ctaSecondary: "Подробнее о штукатурке"
      }
    }
  },

  // CALIS
  {
    slug: "calis",
    image: "/assets/hero/ipek-siva.jpg",
    copy: {
      tr: {
        metaTitle:
          "Çalış İpek Sıva Ustası | Sahil İklimine Uygun Uygulama | Fethiye’nin Ustası",
        metaDesc:
          "Çalış ve Koca Çalış’ta ipek sıva: deniz tuzu ve nem için doğru astar, tozsuz uygulama, hızlı teslim. Foça Mah., Karagedik ve çevresi için ücretsiz keşif.",
        h1: "Çalış’ta İpek Sıva Ustası",
        subtitle: "Sahil rüzgârı ve tuzlu neme uyumlu, nefes alan premium doku.",
        intro: [
          "Çalış sahili tuzlu rüzgâr ve yaz nemiyle bilinir. Yanlış kaplamalarda kabarma ve lekelenme kaçınılmazdır. Elyaf bazlı ipek sıva; nefes alan yapısı ve esnek dokusuyla yüzeyi sağlıklı tutar.",
          "Kiralık yazlıklar ve butik oteller için hızlı ve tozsuz teslim standartlarıyla çalışıyoruz. Gündelik yaşamı minimum etkileyen planlama ve sessiz ekipman kullanıyoruz."
        ],
        checklist: [
          "Tozsuz & hızlı uygulama",
          "Tuz–nem için doğru astar sistemi",
          "Renk/doku danışmanlığı",
          "Kiralık yazlık takvime uygun planlama",
          "Yerel referans ve garanti"
        ],
        neighborhoods: ["Çalış Plajı","Koca Çalış","Foça Mahallesi","Karagedik","Kesikkapı","Babataşı","Tuzla"],
        faq: [
          { q: "Çalış’ta tuzlu hava için özel bir işlem yapıyor musunuz?", a: "Evet. Yüzeyi nötralize eden izolasyon astarı ve doğru ara katlarla sistemi kuruyor, ipek sıvayı nefes alan yapıyı bozmadan uyguluyoruz." },
          { q: "Kiralık yazlığım var, teslimi hızlandırabilir miyiz?", a: "Salon gibi örnek alanlar genelde 1–2 günde tamamlanır. Giriş-çıkış takviminize uygun gece/erken saat planlaması yapabiliyoruz." },
          { q: "Bakımı zor mu?", a: "Kuru toz almak çoğu zaman yeterli. Leke durumunda hafif nemli mikrofiber öneriyoruz; aşındırıcı kimyasal kullanılmaz." }
        ],
        ctaPrimary: "Keşif Randevusu",
        ctaSecondary: "İpek Sıva Detayları"
      },
      en: {
        metaTitle: "Silk Plaster in Calis | Salt-Air Ready Finish | Master of Fethiye",
        metaDesc:
          "Silk plaster in Calis & Koca Calis: correct priming for salt & humidity, dust-free application, quick turnaround. Free survey for Foca, Karagedik and nearby.",
        h1: "Silk Plaster in Calis",
        subtitle: "Breathable, premium texture optimized for coastal humidity and salt air.",
        intro: [
          "The Calis promenade faces salty winds and high summer humidity. Wrong coatings blister and stain; fiber-based silk plaster breathes and keeps the surface healthy.",
          "For holiday lets and boutique hotels we work to tight schedules with a quiet, dust-free process."
        ],
        checklist: [
          "Dust-free & fast",
          "Correct primer system for salt & damp",
          "Tone/texture consulting",
          "Fits holiday-rental turnovers",
          "Local references & warranty"
        ],
        neighborhoods: ["Calis Beach","Koca Calis","Foca District","Karagedik","Kesikkapi","Babatasi","Tuzla"],
        faq: [
          { q: "Do you account for salt air near the beach?", a: "Yes. We neutralize and seal the substrate with the right primers and intermediate coats, then apply silk plaster without blocking breathability." },
          { q: "We host guests weekly—can you finish in between?", a: "A living room is typically 1–2 days. We schedule around check-in/out and can work off-hours if needed." },
          { q: "How do I clean it?", a: "Regular dusting is fine. For marks, use a slightly damp microfiber; avoid harsh chemicals." }
        ],
        ctaPrimary: "Book a Survey",
        ctaSecondary: "See Silk Plaster"
      },
      ru: {
        metaTitle: "Шелковая штукатурка в Чалыше | Защита от соли и влаги | Мастер Фетхие",
        metaDesc:
          "Чалыш и Коджа Чалыш: правильный грунт под морской воздух, монтаж без пыли, быстрые сроки. Бесплатный замер для районов Фоча, Карагедик и рядом.",
        h1: "Шелковая штукатурка в Чалыше",
        subtitle: "Дышащая премиальная фактура под морской бриз и влажное лето.",
        intro: [
          "Набережная Чалыша открыта солёным ветрам. Неверные покрытия вздуваются и пачкаются; волокнистая шелковая штукатурка «дышит» и сохраняет поверхность.",
          "Для апартаментов и бутик-отелей работаем по плотным графикам, тихо и без пыли."
        ],
        checklist: [
          "Монтаж без пыли и быстро",
          "Правильная грунтовка от соли и влаги",
          "Подбор тона и фактуры",
          "Гибкое планирование для аренды",
          "Местные рекомендации и гарантия"
        ],
        neighborhoods: ["Пляж Чалыш","Коджа Чалыш","Р-н Фоча","Карагедик","Кесиккапы","Бабаташи","Тузла"],
        faq: [
          { q: "Учитываете солёный морской воздух?", a: "Да. Нейтрализуем и герметизируем основание правильными грунтами и слоями, затем наносим дышащую шелковую штукатурку." },
          { q: "Можно между заездами гостей?", a: "Гостиная обычно 1–2 дня. Подстроимся под check-in/out, возможен режим вне часов." },
          { q: "Как ухаживать?", a: "Достаточно сухой уборки. Пятна — слегка влажная микрофибра; без агрессивной химии." }
        ],
        ctaPrimary: "Записаться на замер",
        ctaSecondary: "Подробнее о покрытии"
      }
    }
  },

  // OVACIK
  {
    slug: "ovacik",
    image: "/assets/hero/ipek-siva.jpg",
    copy: {
      tr: {
        metaTitle:
          "Ovacık İpek Sıva Ustası | Villa Standartlarında Uygulama | Fethiye’nin Ustası",
        metaDesc:
          "Ovacık ve Hisarönü villalarında ipek sıva: sıcaklık farklarına dayanıklı, tozsuz uygulama, doğru astar, renk/doku danışmanlığı. Hızlı ve temiz teslim.",
        h1: "Ovacık’ta İpek Sıva Ustası",
        subtitle:
          "Serin esinti ve gün içi ısı farkına uygun, çatlama yapmayan nefes alan doku.",
        intro: [
          "Ovacık’ta sabah–akşam sıcaklık farkları ve rüzgâr, yanlış malzemelerde kılcal çatlaklara yol açabilir. Elyaf bazlı ipek sıva, mikro esnek yapısıyla bu çalışmaları tolere eder.",
          "Keşifte yüzey dayanımı ve rutubeti kontrol ediyor, doğru astar/ara kat sistemi kuruyoruz. Villa ve dubleks yaşamına uygun, tozsuz ve sessiz uygulama standartlarıyla teslim ediyoruz."
        ],
        checklist: [
          "Mikro esnek yapı — kılcal çatlaklara direnç",
          "Tozsuz uygulama, hızlı kurgu",
          "Doğru astar ve sistem kurulumu",
          "Renk & doku danışmanlığı",
          "Villa teslim standartları"
        ],
        neighborhoods: ["Ovacık Merkez","Hisarönü","Ölüdeniz Yolu","Babadağ Etekleri","Likya Yolu Çevresi"],
        faq: [
          { q: "Sıcaklık farkları ipek sıvada çatlama yapar mı?", a: "Elyaflı yapısı ve mikro elastikiyeti sayesinde çalışmayı tolere eder. Doğru astar ve ara kat ile sistem stabil çalışır." },
          { q: "Balkon/teras kenarlarında uygulanabilir mi?", a: "Dış etkilere açık yüzeylerde ek koruma gerekeceğinden iç mekân ve kapalı balkonlarda öneririz; keşifte alternatif kaplama sunarız." },
          { q: "Ne kadar sürede teslim edersiniz?", a: "Örnek bir salon 1–2 gün. Metrekare ve zemin durumuna göre plan yapar, yaşam alanını minimum etkileriz." }
        ],
        ctaPrimary: "Keşif Randevusu",
        ctaSecondary: "İpek Sıva Detayları"
      },
      en: {
        metaTitle: "Silk Plaster in Ovacik | Villa-Grade Application | Master of Fethiye",
        metaDesc:
          "Silk plaster for Ovacik & Hisaronu villas: resistant to daily temperature swings, dust-free process, correct priming, tone/texture consulting.",
        h1: "Silk Plaster in Ovacik",
        subtitle: "Breathable, micro-elastic finish tuned for wind and temperature swings.",
        intro: [
          "Ovacik’s windy evenings and day–night temperature shifts can cause hairline cracks on wrong coatings. Fiber-based silk plaster adds micro-elasticity and breathability.",
          "We survey substrate/damp, set the right primer system, and deliver with a quiet, dust-free workflow suitable for villas and duplexes."
        ],
        checklist: [
          "Micro-elastic — hairline crack resistance",
          "Dust-free, fast turnaround",
          "Correct primer & system build-up",
          "Tone & texture consulting",
          "Villa-grade handover"
        ],
        neighborhoods: ["Ovacik Center","Hisaronu","Oludeniz Road","Babadag Foothills","Lycian Way Area"],
        faq: [
          { q: "Do temperature swings cause cracking?", a: "The fibrous, micro-elastic structure tolerates movement. With the right primers and intermediate coats, the system stays stable." },
          { q: "Is it suitable for balconies?", a: "For fully exposed areas we recommend protected solutions; for interiors and enclosed balconies, silk plaster is ideal." },
          { q: "Typical timeline?", a: "A living room is 1–2 days depending on m² and substrate; we keep disruption minimal." }
        ],
        ctaPrimary: "Book a Survey",
        ctaSecondary: "See Silk Plaster"
      },
      ru: {
        metaTitle: "Шелковая штукатурка в Оваджике | Уровень виллы | Мастер Фетхие",
        metaDesc:
          "Оваджик и Хисароню: шелковая штукатурка, устойчивая к суточным перепадам температуры. Монтаж без пыли, правильный грунт, подбор тона и фактуры.",
        h1: "Шелковая штукатурка в Оваджике",
        subtitle: "Дышащая микро-эластичная фактура под ветер и перепады температуры.",
        intro: [
          "В Оваджике ветер и перепады день–ночь часто дают «паутинку» на неверных покрытиях. Волокнистая шелковая штукатурка добавляет микро-эластичность и «дыхание».",
          "На замере проверяем основание и влажность, подбираем систему грунтов и слоев. Работаем тихо и без пыли — уровень сдачи для вилл."
        ],
        checklist: [
          "Микро-эластичность — устойчивость к микротрещинам",
          "Монтаж без пыли, быстрые сроки",
          "Правильная система грунтов",
          "Подбор тона и фактуры",
          "Стандарты сдачи для вилл"
        ],
        neighborhoods: ["Центр Оваджика","Хисароню","Дорога в Олюдениз","Подножие Бабадага","Окрестности Ликийской тропы"],
        faq: [
          { q: "Перепады температуры дадут трещины?", a: "Волокнистая структура с микро-эластичностью компенсирует подвижки. При верной системе грунтов покрытие стабильно." },
          { q: "Подходит для балконов?", a: "Для полностью открытых зон предложим альтернативы с защитой; для интерьеров и остеклённых балконов подходит отлично." },
          { q: "Сроки?", a: "Гостиная обычно 1–2 дня. Зависит от площади и основания; работаем максимально деликатно." }
        ],
        ctaPrimary: "Записаться на замер",
        ctaSecondary: "Подробнее о покрытии"
      }
    }
  },
  
  { 
    slug: "gocek",
    image: "/assets/hero/ipek-siva.jpg",
    copy: {
    tr: {
      metaTitle:
        "Göcek İpek Sıva Ustası | Villa & Marina Standartlarında Uygulama | Fethiye’nin Ustası",
      metaDesc:
        "Göcek ve çevresinde ipek sıva: tuzlu hava ve yüksek nem için doğru astar, tozsuz ve sessiz uygulama. Merkez, İnlice, Gökçeovacık, marina çevresi… Hızlı ve temiz teslim.",
      h1: "Göcek’te İpek Sıva Ustası",
      subtitle:
        "Marina ve sahil iklimine uygun, nefes alan premium doku.",
      intro: [
        "Göcek’te deniz tuzu ve yaz nemi, yanlış kaplamalarda kabarma ve iz yapabilir. Elyaf bazlı ipek sıva; nefes alan ve mikro esnek yapısıyla yüzeyin sağlıklı kalmasına yardımcı olur.",
        "Villa, rezidans ve butik otellerde sessiz ekipmanla, tozsuz süreç ve planlı teslim standartlarıyla çalışıyoruz. Kira takvimi ve sezonsal doluluklara göre zamanlama yapıyoruz."
      ],
      checklist: [
        "Tuz–nem için doğru astar sistemi",
        "Tozsuz ve sessiz uygulama",
        "Renk & doku danışmanlığı",
        "Hızlı planlama, sezona uygun teslim",
        "Yerel referans ve garanti"
      ],
      neighborhoods: [
        "Göcek Merkez",
        "Marina Çevresi",
        "İnlice",
        "Gökçeovacık",
        "Sarsala Yolu",
        "Hürriyet Mahallesi"
      ],
      faq: [
        {
          q: "Tuzlu hava ipek sıvada sorun yapar mı?",
          a: "Doğru astar ve ara katlarla yüzeyi nötralize ediyoruz. İpek sıva nefes alan yapısıyla tuz–nem dengesine uyumludur."
        },
        {
          q: "Kira/konuk giriş–çıkışlarına göre çalışabilir misiniz?",
          a: "Evet. Salon gibi örnek alanlar 1–2 günde tamamlanır. Giriş–çıkış aralarında veya sakin saatlerde planlama yapıyoruz."
        },
        {
          q: "Bakımı nasıl yapılır?",
          a: "Kuru toz almak yeterlidir. Leke durumunda hafif nemli mikrofiber önerilir; aşındırıcı kimyasal kullanılmaz."
        }
      ],
      ctaPrimary: "Keşif Randevusu",
      ctaSecondary: "İpek Sıva Detayları"
    },

    en: {
      metaTitle:
        "Silk Plaster in Gocek | Marina & Villa-Grade Finish | Master of Fethiye",
      metaDesc:
        "Silk plaster across Gocek: correct priming for salt air & humidity, dust-free and quiet application. Center, Inlice, Gokceovacik, marina area… Fast, clean handover.",
      h1: "Silk Plaster in Gocek",
      subtitle:
        "Breathable, premium texture tuned for coastal marina climate.",
      intro: [
        "Gocek’s salty breeze and summer humidity can blister wrong coatings. Fiber-based silk plaster breathes and adds micro-elasticity for healthier surfaces.",
        "We work in villas, residences and boutique hotels with a quiet, dust-free workflow and schedule around rental turnovers and the season."
      ],
      checklist: [
        "Correct primer system for salt & damp",
        "Dust-free, quiet application",
        "Tone & texture consulting",
        "Fast planning, in-season delivery",
        "Local references & warranty"
      ],
      neighborhoods: [
        "Gocek Center",
        "Marina Area",
        "Inlice",
        "Gokceovacik",
        "Sarsala Road",
        "Hurriyet District"
      ],
      faq: [
        {
          q: "Does salt air cause issues?",
          a: "We neutralize and seal the substrate with the right primers; silk plaster stays breathable and compatible with coastal humidity."
        },
        {
          q: "Can you work between guest turnovers?",
          a: "Yes. A living room is typically 1–2 days; we schedule between check-in/out or off-hours."
        },
        {
          q: "How do I clean it?",
          a: "Regular dusting is enough. For marks, use a slightly damp microfiber; avoid harsh chemicals."
        }
      ],
      ctaPrimary: "Book a Survey",
      ctaSecondary: "See Silk Plaster"
    },

    ru: {
      metaTitle:
        "Шелковая штукатурка в Гёджеке | Уровень виллы и марины | Мастер Фетхие",
      metaDesc:
        "Гёджек и окрестности: шелковая штукатурка под морской воздух и влажность. Монтаж без пыли и шума. Центр, Инлидже, Гёкчеоваджык, район марины… Быстрая сдача.",
      h1: "Шелковая штукатурка в Гёджеке",
      subtitle:
        "Дышащая премиальная фактура для прибрежного климата марины.",
      intro: [
        "Солёный бриз и летняя влажность Гёджека вздувают неверные покрытия. Волокнистая шелковая штукатурка «дышит» и добавляет микро-эластичность.",
        "Работаем во виллах, резиденциях и бутик-отелях: тихо, без пыли, под график аренды и сезон."
      ],
      checklist: [
        "Верная система грунтов против соли и влаги",
        "Монтаж тихо и без пыли",
        "Подбор тона и фактуры",
        "Быстрое планирование, сдача в сезон",
        "Местные рекомендации и гарантия"
      ],
      neighborhoods: [
        "Центр Гёджека",
        "Район марины",
        "Инлидже",
        "Гёкчеоваджык",
        "Дорога в Сарсалу",
        "Р-н Хюрриет"
      ],
      faq: [
        {
          q: "Морской воздух повредит покрытию?",
          a: "Мы нейтрализуем и запечатываем основание нужными грунтами; шелковая штукатурка остаётся «дышащей» и совместимой с влажностью."
        },
        {
          q: "Можно работать между заездами гостей?",
          a: "Да. Гостиная обычно 1–2 дня; подстроимся под check-in/out или внеурочно."
        },
        {
          q: "Как ухаживать?",
          a: "Достаточно сухой уборки. Пятна — слегка влажная микрофибра; без агрессивной химии."
        }
      ],
      ctaPrimary: "Записаться на замер",
      ctaSecondary: "Подробнее о покрытии"
    }
  }
}

];
