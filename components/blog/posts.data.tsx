import React from "react";

export type Lang = "tr" | "en" | "ru";

export type PostCopy = {
  title: string;
  excerpt: string;
  body: React.ReactNode;
};

export type Post = {
  slug: string;
  date: string;                 // ISO
  cover: string;                // /assets/blog/<slug>.jpg
  tags: string[];               // "ipek-siva" | "rehber" | "malzeme" | "uygulama" | "iklim" | "bakim" | "karsilastirma"
  category: "ipek-siva" | "uygulama" | "bakim" | "iklim";
  author: { name: string; url?: string };
  copy: Record<Lang, PostCopy>;
  faq?: { q: string; a: string }[];
};

const A = { name: "Fethiye’nin Ustası" };

export const POSTS: Post[] = [
  // 1
  {
    slug: "ipek-siva-nedir-artilari-eksileri",
    date: "2025-01-12",
    cover: "/assets/blog/ipek-siva-nedir-artilari-eksileri.jpg",
    tags: ["ipek-siva", "rehber", "malzeme"],
    category: "ipek-siva",
    author: A,
    copy: {
      tr: {
        title: "İpek Sıva Nedir? Artılar & Eksiler",
        excerpt:
          "Elyaf bazlı ipek sıvanın tanımı, nerede parladığı ve nerede temkinli olmak gerektiği.",
        body: (
          <>
            <h2>Tanım</h2>
            <p>
              İpek sıva; selüloz/elyaf, mineral pigment ve bağlayıcıların
              karışımından elde edilen nefes alabilen, dikişsiz bir dekoratif
              kaplamadır.
            </p>
            <h3>Artılar</h3>
            <ul>
              <li>Nefes alan sistem; rutubete hassas iç mekânlarda avantaj.</li>
              <li>Dikişsiz ve tozsuz uygulama, mikro esneklik.</li>
              <li>Kılcal çatlakları tolere eder, sıcak doku verir.</li>
            </ul>
            <h3>Eksiler</h3>
            <ul>
              <li>Tam açık dış yüzeyler için uygun değildir.</li>
              <li>Vuruk/çiziklerde lokal tamirat gerekebilir.</li>
            </ul>
          </>
        ),
      },
      en: {
        title: "What is Silk Plaster? Pros & Cons",
        excerpt:
          "Definition of fiber-based silk plaster, where it shines and where to be cautious.",
        body: (
          <>
            <h2>Definition</h2>
            <p>
              A breathable seamless decorative coating made of cellulose fibers,
              pigments and binders; micro-elastic and dust-free to apply.
            </p>
            <h3>Pros</h3>
            <ul>
              <li>Breathability helps in damp-prone interiors.</li>
              <li>Seamless look, micro-elastic behavior.</li>
              <li>Tolerates hairline cracks; warm texture.</li>
            </ul>
            <h3>Cons</h3>
            <ul>
              <li>Not for fully exposed exterior façades.</li>
              <li>Local repair required for dents/scratches.</li>
            </ul>
          </>
        ),
      },
      ru: {
        title: "Что такое шелковая штукатурка? Плюсы и минусы",
        excerpt:
          "Определение покрытия, где оно особенно удачно и где нужна осторожность.",
        body: (
          <>
            <h2>Определение</h2>
            <p>
              Дышащее бесшовное покрытие из целлюлозных волокон, пигментов и
              связующего. Легко наносится, обладает микро-эластичностью.
            </p>
            <h3>Плюсы</h3>
            <ul>
              <li>Хорошо работает во влажных помещениях.</li>
              <li>Бесшовный вид, уютная фактура.</li>
              <li>Переносит микротрещины.</li>
            </ul>
            <h3>Минусы</h3>
            <ul>
              <li>Не для полностью открытых фасадов.</li>
              <li>Локальный ремонт при ударах/царапинах.</li>
            </ul>
          </>
        ),
      },
    },
    faq: [
      {
        q: "Dış cephede kullanılır mı?",
        a: "Tam açık yüzeylerde önerilmez. Yarı korunaklı alanlarda alternatif sistemlerle birlikte değerlendirilebilir.",
      },
    ],
  },

  // 2
  {
    slug: "ipek-siva-uygulama-6-adim",
    date: "2025-02-02",
    cover: "/assets/blog/ipek-siva-uygulama-6-adim.jpg",
    tags: ["uygulama", "rehber"],
    category: "uygulama",
    author: A,
    copy: {
      tr: {
        title: "Keşiften Teslime: İpek Sıva 6 Adım",
        excerpt:
          "Yerinde keşif, doğru astar, örnek duvar ve temiz teslim: adım adım süreç.",
        body: (
          <>
            <ol>
              <li>Keşif: nem & zemin kontrolü, metraj.</li>
              <li>Renk/doku danışmanlığı ve numune.</li>
              <li>Astar ve yüzey hazırlığı.</li>
              <li>İlk kat çekim, doku oturtma.</li>
              <li>Son rötuş ve kuruma.</li>
              <li>Temiz teslim & bakım anlatımı.</li>
            </ol>
          </>
        ),
      },
      en: {
        title: "From Survey to Handover: 6 Steps",
        excerpt:
          "On-site survey, right priming, sample wall and clean handover—step by step.",
        body: (
          <ol>
            <li>Survey & moisture/substrate check.</li>
            <li>Tone/texture consulting & sample.</li>
            <li>Priming & surface preparation.</li>
            <li>First pass, texture setting.</li>
            <li>Touch-ups & curing.</li>
            <li>Clean handover & care guide.</li>
          </ol>
        ),
      },
      ru: {
        title: "От замера до сдачи: 6 шагов",
        excerpt:
          "Замер на объекте, правильный грунт, образец стены и чистая сдача.",
        body: (
          <ol>
            <li>Замер и проверка основания/влажности.</li>
            <li>Подбор тона/фактуры и образец.</li>
            <li>Грунт и подготовка поверхности.</li>
            <li>Первый слой, формирование фактуры.</li>
            <li>Подретушировка и сушка.</li>
            <li>Чистая сдача и рекомендации по уходу.</li>
          </ol>
        ),
      },
    },
  },

  // 3
  {
    slug: "renk-secimi-fethiye-isik-ile-dogru-ton",
    date: "2025-02-10",
    cover: "/assets/blog/renk-secimi-fethiye-isik-ile-dogru-ton.jpg",
    tags: ["rehber", "ipek-siva"],
    category: "ipek-siva",
    author: A,
    copy: {
      tr: {
        title: "Renk Seçimi: Fethiye Işığında Doğru Ton",
        excerpt:
          "Güneybatı ışığı, kuzey cephe ve sıcak/soğuk ton dengesini pratik yöntemlerle bulun.",
        body: (
          <>
            <p>
              Fethiye’de güneş yüksek ve sıcak; gün içinde tonlar sarıya
              yaklaşır. Numuneyi her cephede ve farklı saatlerde görün.
            </p>
            <ul>
              <li>Kuzey cephe: bir tık sıcak tonlar daha doğal.</li>
              <li>Güney cephe: nötr veya kırık soğuk tonlar.</li>
              <li>Akşam aydınlatması: CRI 90+ LED ile test.</li>
            </ul>
          </>
        ),
      },
      en: {
        title: "Choosing Color Under Fethiye Light",
        excerpt:
          "South-west sun shifts tones warmer; test samples by façade and time of day.",
        body: (
          <>
            <p>
              Observe samples in morning/noon/evening; artificial light color
              temperature changes perception dramatically.
            </p>
            <ul>
              <li>North façades: slightly warmer tones feel natural.</li>
              <li>South façades: neutral or cool-broken hues age better.</li>
              <li>Use high-CRI lighting when evaluating at night.</li>
            </ul>
          </>
        ),
      },
      ru: {
        title: "Выбор цвета при свете Фетхие",
        excerpt:
          "Юго-западное солнце уходит в тёплые тона — проверяйте образцы по сторонам и времени суток.",
        body: (
          <>
            <p>
              Смотрите образцы утром/днём/вечером; искусственный свет тоже
              меняет восприятие.
            </p>
            <ul>
              <li>Север: немного более тёплые оттенки выглядят естественно.</li>
              <li>Юг: нейтральные или прохладные оттенки стабильнее.</li>
              <li>Ночная оценка — при светодиодах с высоким CRI.</li>
            </ul>
          </>
        ),
      },
    },
  },

  // 4
  {
    slug: "banyo-mutfak-nemli-ortamlarda-ipek-siva",
    date: "2025-02-14",
    cover: "/assets/blog/banyo-mutfak-nemli-ortamlarda-ipek-siva.jpg",
    tags: ["iklim", "uygulama", "ipek-siva"],
    category: "iklim",
    author: A,
    copy: {
      tr: {
        title: "Banyo & Mutfak: Nemli Ortamlarda İpek Sıva",
        excerpt:
          "Doğru astar, doğru alan ve doğru bakım ile ipek sıva nemli mahallerde de başarılı olur.",
        body: (
          <>
            <p>
              Direkt su sıçraması alanlarından kaçının; lavabo arkası, duş içi
              gibi yüzeylerde farklı sistemler kullanın.
            </p>
            <ul>
              <li>Mineral astar + kurallı havalandırma şart.</li>
              <li>Yarı korunaklı nişler ipek sıva için ideal.</li>
            </ul>
          </>
        ),
      },
      en: {
        title: "Bathrooms & Kitchens: Silk Plaster in Moist Areas",
        excerpt:
          "With proper priming, zoning and maintenance, results are reliable even in humid rooms.",
        body: (
          <>
            <p>
              Avoid direct splash zones; use alternative systems in shower
              interiors and behind sinks.
            </p>
            <ul>
              <li>Mineral primer + ventilation is a must.</li>
              <li>Semi-protected niches work beautifully.</li>
            </ul>
          </>
        ),
      },
      ru: {
        title: "Ванные и кухни: влага и шелковая штукатурка",
        excerpt:
          "При правильном грунте, зонировании и уходе результат стабилен.",
        body: (
          <>
            <p>
              Избегайте прямого контакта с водой; в душевой и за раковиной
              применяйте другие системы.
            </p>
            <ul>
              <li>Минеральный грунт и вентиляция обязательны.</li>
              <li>Полузащищённые ниши подходят отлично.</li>
            </ul>
          </>
        ),
      },
    },
  },

  // 5
  {
    slug: "bakim-ve-temizlik-ipek-siva-kilavuzu",
    date: "2025-02-18",
    cover: "/assets/blog/bakim-ve-temizlik-ipek-siva-kilavuzu.jpg",
    tags: ["bakim", "rehber", "ipek-siva"],
    category: "bakim",
    author: A,
    copy: {
      tr: {
        title: "Bakım & Temizlik: Pratik İpek Sıva Kılavuzu",
        excerpt:
          "Toz alma, lokal tamirat ve leke müdahalesi: en pratik yöntemler.",
        body: (
          <>
            <ul>
              <li>Toz: mikrofiber kuru bez ile nazikçe silin.</li>
              <li>Lokal çizik: üretici karışımı ile minik rötuş.</li>
              <li>Leke: iz bırakmayan süngerle hafif tampon.</li>
            </ul>
          </>
        ),
      },
      en: {
        title: "Care & Cleaning: Practical Guide",
        excerpt:
          "Dusting, local repair and stain treatment—quick, field-tested tips.",
        body: (
          <ul>
            <li>Dust with a dry microfiber cloth.</li>
            <li>Local scratch: small touch-up with mix.</li>
            <li>Stain: dab gently with non-abrasive sponge.</li>
          </ul>
        ),
      },
      ru: {
        title: "Уход и чистка: практический гид",
        excerpt:
          "Удаление пыли, локальный ремонт и работа с пятнами — коротко и по делу.",
        body: (
          <ul>
            <li>Пыль — сухой микрофиброй.</li>
            <li>Царапины — локальная подправка составом.</li>
            <li>Пятна — аккуратная обработка мягкой губкой.</li>
          </ul>
        ),
      },
    },
  },

  // 6
  {
    slug: "yuzey-hazirligi-ve-astar-dogru-sistem",
    date: "2025-02-20",
    cover: "/assets/blog/yuzey-hazirligi-ve-astar-dogru-sistem.jpg",
    tags: ["uygulama", "malzeme", "rehber"],
    category: "uygulama",
    author: A,
    copy: {
      tr: {
        title: "Yüzey Hazırlığı & Astar: Doğru Sistem",
        excerpt:
          "Uzun ömür için astar seçimi ve zemin kontrolünde saha ipuçları.",
        body: (
          <>
            <p>Emicilik farkını eşitleyin; gevşek boyayı mutlaka sökün.</p>
            <ul>
              <li>Mineral bazlı, ipek sıvaya uygun astar kullanın.</li>
              <li>Alçı yüzeyde rutubet/küf kontrolü yapın.</li>
            </ul>
          </>
        ),
      },
      en: {
        title: "Surface Prep & Priming: The Right System",
        excerpt:
          "Field tips on primer selection and substrate checks for longevity.",
        body: (
          <>
            <p>Equalize absorption; remove loose paint completely.</p>
            <ul>
              <li>Use mineral primers compatible with silk plaster.</li>
              <li>Check gypsum boards for damp/mold issues.</li>
            </ul>
          </>
        ),
      },
      ru: {
        title: "Подготовка основания и грунт",
        excerpt:
          "Выбор грунта и проверка основания — залог долговечности.",
        body: (
          <>
            <p>Выровняйте впитываемость; удалите непрочные слои краски.</p>
            <ul>
              <li>Минеральный грунт, совместимый с покрытием.</li>
              <li>Контроль влажности и плесени на ГКЛ.</li>
            </ul>
          </>
        ),
      },
    },
  },

  // 7
  {
    slug: "karsilastirma-ipek-siva-mi-boya-mi",
    date: "2025-02-24",
    cover: "/assets/blog/karsilastirma-ipek-siva-mi-boya-mi.jpg",
    tags: ["karsilastirma", "iklim", "rehber"],
    category: "iklim",
    author: A,
    copy: {
      tr: {
        title: "Karşılaştırma: İpek Sıva mı, Boya mı?",
        excerpt:
          "Nem, bakım ve görünüm açısından iki çözümü dürüstçe kıyaslıyoruz.",
        body: (
          <>
            <ul>
              <li>Bakım: ipek sıva toz alma; boya periyodik yenileme.</li>
              <li>Görünüm: dikişsiz doku vs. düz yüzey.</li>
              <li>Maliyet: uzun vadede ipek sıva avantajlı olabilir.</li>
            </ul>
          </>
        ),
      },
      en: {
        title: "Comparison: Silk Plaster vs Paint",
        excerpt:
          "A frank comparison in terms of humidity, maintenance and look.",
        body: (
          <ul>
            <li>Care: dusting vs periodic repaint.</li>
            <li>Look: seamless texture vs flat surface.</li>
            <li>Cost: silk can win long-term.</li>
          </ul>
        ),
      },
      ru: {
        title: "Сравнение: шелковая штукатурка или краска?",
        excerpt:
          "Влажность, уход и внешний вид — честное сравнение.",
        body: (
          <ul>
            <li>Уход: смахнуть пыль vs. регулярная перекраска.</li>
            <li>Вид: бесшовная фактура vs. ровная поверхность.</li>
            <li>Затраты: в долгую штукатурка выгоднее.</li>
          </ul>
        ),
      },
    },
  },

  // 8
  {
    slug: "isi-ve-ses-yalitimi-etkisi-ipek-siva",
    date: "2025-02-26",
    cover: "/assets/blog/isi-ve-ses-yalitimi-etkisi-ipek-siva.jpg",
    tags: ["malzeme", "rehber", "ipek-siva"],
    category: "ipek-siva",
    author: A,
    copy: {
      tr: {
        title: "Isı & Ses Üzerine İpek Sıvanın Etkisi",
        excerpt:
          "Konfor algısında doku ve mikro liflerin rolü; gerçekçi beklentiler.",
        body: (
          <>
            <p>
              İpek sıva tek başına bir yalıtım malzemesi değildir; fakat
              yüzeydeki lifli yapı yankıyı yumuşatır, dokunsal konfor katar.
            </p>
          </>
        ),
      },
      en: {
        title: "Thermal & Acoustic Comfort with Silk Plaster",
        excerpt:
          "Not an insulation layer; yet fibers soften echo and feel warmer.",
        body: (
          <p>
            Expect a comfort boost rather than measurable insulation ratings.
          </p>
        ),
      },
      ru: {
        title: "Тепло- и звукомфорт с шелковой штукатуркой",
        excerpt:
          "Не утеплитель, но волокна смягчают эхо и добавляют уют.",
        body: <p>Скорее комфорт, чем цифры по сопротивлению теплопередаче.</p>,
      },
    },
  },

  // 9
  {
    slug: "dekoratif-kaplamalarla-kombinler",
    date: "2025-03-02",
    cover: "/assets/blog/dekoratif-kaplamalarla-kombinler.jpg",
    tags: ["rehber", "uygulama", "ipek-siva"],
    category: "uygulama",
    author: A,
    copy: {
      tr: {
        title: "Dekoratif Kaplamalarla Kombinler",
        excerpt:
          "Ahşap, taş ve mikroçimento ile uyumlu kombin önerileri.",
        body: (
          <>
            <ul>
              <li>TV ünitesi: ipek sıva + doğal ahşap raf.</li>
              <li>Yatak başı: taş niş + sıcak dokulu sıva.</li>
              <li>Mutfak dışı: mikroçimento zemin + nötr duvar.</li>
            </ul>
          </>
        ),
      },
      en: {
        title: "Combining with Wood, Stone & Microcement",
        excerpt:
          "Practical pairings for living rooms and bedrooms.",
        body: (
          <ul>
            <li>TV wall: silk plaster + natural wood shelves.</li>
            <li>Headboard: stone niche + warm texture.</li>
            <li>Living/kitchenettes: microcement floor + neutral wall.</li>
          </ul>
        ),
      },
      ru: {
        title: "Сочетания с деревом, камнем и микроцементом",
        excerpt:
          "Рабочие комбинации для гостиной и спальни.",
        body: (
          <ul>
            <li>ТВ-стена: штукатурка + полки из дерева.</li>
            <li>Изголовье: каменная ниша + тёплая фактура.</li>
            <li>Микроцемент на полу + нейтральная стена.</li>
          </ul>
        ),
      },
    },
  },

  // 10
  {
    slug: "renk-trendleri-2025-ipek-siva",
    date: "2025-03-06",
    cover: "/assets/blog/renk-trendleri-2025-ipek-siva.jpg",
    tags: ["rehber", "malzeme"],
    category: "ipek-siva",
    author: A,
    copy: {
      tr: {
        title: "2025 Renk Trendleri ve Doku Önerileri",
        excerpt:
          "Kırık bejler, sıcak griler ve kireç tonlarıyla zarif dokular.",
        body: (
          <ul>
            <li>Soft bej + bronz aksesuar.</li>
            <li>Sıcak gri + açık meşe.</li>
            <li>Kireç tonu + siyah ince çizgi.</li>
          </ul>
        ),
      },
      en: {
        title: "2025 Color Trends for Silk Plaster",
        excerpt:
          "Warm greys, limed whites and soft beiges—timeless pairings.",
        body: (
          <ul>
            <li>Soft beige + bronze details.</li>
            <li>Warm grey + light oak.</li>
            <li>Chalk white + thin black accents.</li>
          </ul>
        ),
      },
      ru: {
        title: "Цветовые тренды 2025 для шелковой штукатурки",
        excerpt:
          "Тёплые серые, известковые белые и мягкие бежевые.",
        body: (
          <ul>
            <li>Мягкий беж + бронзовые детали.</li>
            <li>Тёплый серый + светлый дуб.</li>
            <li>Меловой белый + чёрные акценты.</li>
          </ul>
        ),
      },
    },
  },

  // 11
  {
    slug: "saha-gunlugu-kayakoy-villa",
    date: "2025-03-10",
    cover: "/assets/blog/saha-gunlugu-kayakoy-villa.jpg",
    tags: ["uygulama", "rehber", "ipek-siva"],
    category: "uygulama",
    author: A,
    copy: {
      tr: {
        title: "Saha Günlüğü: Kayaköy’de Bir Villa",
        excerpt:
          "Keşiften teslim gününe kadar alınan kararlar ve uygulama notları.",
        body: (
          <>
            <p>Nem ölçümü, renk denemesi ve TV duvarında doku geçişleri…</p>
            <p>Sonuç: sıcak, dikişsiz ve bakımı kolay bir salon.</p>
          </>
        ),
      },
      en: {
        title: "Site Journal: A Villa in Kayaköy",
        excerpt:
          "Decisions and notes from survey to handover.",
        body: (
          <>
            <p>Moisture checks, tone trials, TV-wall texture transitions…</p>
            <p>Outcome: warm, seamless and easy-care living area.</p>
          </>
        ),
      },
      ru: {
        title: "Журнал объекта: вилла в Каякёе",
        excerpt:
          "Решения и заметки от замера до сдачи.",
        body: (
          <>
            <p>Контроль влажности, подбор тона, переходы фактур…</p>
            <p>Итог: тёплая бесшовная гостиная с простым уходом.</p>
          </>
        ),
      },
    },
  },

  // 12
  {
    slug: "hatalar-ve-cozumler-ipek-siva",
    date: "2025-03-14",
    cover: "/assets/blog/hatalar-ve-cozumler-ipek-siva.jpg",
    tags: ["rehber", "uygulama"],
    category: "uygulama",
    author: A,
    copy: {
      tr: {
        title: "En Sık Hatalar & Hızlı Çözümler",
        excerpt:
          "Astar atlamaktan aşırı sulamaya: şantiyede görülen tipik hatalar.",
        body: (
          <ul>
            <li>Astar atlama → yüzey farkı, lekelenme.</li>
            <li>Aşırı su → bağ kuvveti düşer.</li>
            <li>Yetersiz kuruma → doku bozulur.</li>
          </ul>
        ),
      },
      en: {
        title: "Common Mistakes & Quick Fixes",
        excerpt:
          "From skipping primer to over-watering: field realities.",
        body: (
          <ul>
            <li>No primer → absorption stains.</li>
            <li>Too much water → weak bonding.</li>
            <li>Insufficient curing → texture issues.</li>
          </ul>
        ),
      },
      ru: {
        title: "Ошибки и быстрые решения",
        excerpt:
          "От пропуска грунта до избытка воды — что бывает на практике.",
        body: (
          <ul>
            <li>Без грунта → пятна впитывания.</li>
            <li>Много воды → слабое сцепление.</li>
            <li>Недосушка → проблемы с фактурой.</li>
          </ul>
        ),
      },
    },
  },

  // 13
  {
    slug: "maliyet-analizi-ipek-siva-vs-boya",
    date: "2025-03-18",
    cover: "/assets/blog/maliyet-analizi-ipek-siva-vs-boya.jpg",
    tags: ["karsilastirma", "rehber"],
    category: "iklim",
    author: A,
    copy: {
      tr: {
        title: "Maliyet Analizi: İpek Sıva vs Boya",
        excerpt:
          "Kısa ve uzun vadeli maliyetleri kalem kalem ele alıyoruz.",
        body: (
          <>
            <p>İlk kurulum yakın; bakım periyotları farkı yaratır.</p>
            <ul>
              <li>Boyada 2–3 yılda bir yenileme gerekebilir.</li>
              <li>İpek sıvada lokal rötuş çoğu zaman yeterli.</li>
            </ul>
          </>
        ),
      },
      en: {
        title: "Cost Analysis: Silk Plaster vs Paint",
        excerpt:
          "Upfront vs lifecycle costs compared realistically.",
        body: (
          <>
            <p>Initial cost is similar; maintenance changes the picture.</p>
            <ul>
              <li>Paint often needs periodic full repaint.</li>
              <li>Silk plaster usually needs small touch-ups.</li>
            </ul>
          </>
        ),
      },
      ru: {
        title: "Сравнение затрат: штукатурка и краска",
        excerpt:
          "Стартовые и жизненные затраты без иллюзий.",
        body: (
          <>
            <p>Старт близок; обслуживание решает.</p>
            <ul>
              <li>Краска — регулярная перекраска.</li>
              <li>Штукатурка — локальные подправки.</li>
            </ul>
          </>
        ),
      },
    },
  },

  // 14
  {
    slug: "problemli-duvarlarda-uygulama",
    date: "2025-03-22",
    cover: "/assets/blog/problemli-duvarlarda-uygulama.jpg",
    tags: ["uygulama", "rehber", "bakim"],
    category: "uygulama",
    author: A,
    copy: {
      tr: {
        title: "Problemli Duvarlarda Uygulama",
        excerpt:
          "Eski boya, alçı tamir ve nem geçmişi olan yüzeylerde izlenecek yol.",
        body: (
          <>
            <p>Önce sorun kaynağını giderin; kaplama asla tek başına çözüm değildir.</p>
            <p>Gerekirse yerel kurutma ve yalıtım önlemleri alın.</p>
          </>
        ),
      },
      en: {
        title: "Applying on Challenging Walls",
        excerpt:
          "Dealing with old paint, patch repairs and damp history.",
        body: (
          <>
            <p>Fix the source first; coatings are not magic wands.</p>
            <p>Local drying/insulation measures may be required.</p>
          </>
        ),
      },
      ru: {
        title: "Проблемные стены: как работать",
        excerpt:
          "Старые слои краски, ремонтные участки и следы влаги.",
        body: (
          <>
            <p>Сначала устраните причину; покрытие — не панацея.</p>
            <p>Возможны локальная просушка и изоляционные меры.</p>
          </>
        ),
      },
    },
  },

  // 15
  {
    slug: "neden-dis-yuzey-icin-degil-alternatifler",
    date: "2025-03-26",
    cover: "/assets/blog/neden-dis-yuzey-icin-degil-alternatifler.jpg",
    tags: ["rehber", "iklim", "malzeme"],
    category: "iklim",
    author: A,
    copy: {
      tr: {
        title: "Neden Dış Yüzey İçin Değil? Alternatifler",
        excerpt:
          "Açık cephede ipek sıva neden doğru değil ve hangi sistemler devreye girer.",
        body: (
          <>
            <p>
              UV, yağmur ve rüzgâr yükleri; nefes alma dengesi ve film
              oluşturma tartışılır.
            </p>
            <p>Alternatif: mineral sıvalar + silikonlu dış cephe boyaları.</p>
          </>
        ),
      },
      en: {
        title: "Why Not for Exterior? Better Alternatives",
        excerpt:
          "Discussing UV/rain loads and breathable film balance.",
        body: (
          <>
            <p>Use mineral plasters + silicone exterior paints outside.</p>
          </>
        ),
      },
      ru: {
        title: "Почему не для фасада? Что выбрать вместо",
        excerpt:
          "Нагрузки УФ/дождя и баланс паропроницаемости.",
        body: (
          <>
            <p>Снаружи — минеральные штукатурки и силиконовые фасадные краски.</p>
          </>
        ),
      },
    },
  },

  // 16
  {
    slug: "zaman-planlama-ve-metrekaresi-nasil-hesaplanir",
    date: "2025-03-30",
    cover: "/assets/blog/zaman-planlama-ve-metrekaresi-nasil-hesaplanir.jpg",
    tags: ["rehber", "uygulama", "karsilastirma"],
    category: "uygulama",
    author: A,
    copy: {
      tr: {
        title: "Zaman Planlama & Metraj Nasıl Hesaplanır?",
        excerpt:
          "Tek odada ortalama süreler, metraj hesabı ve ek iş kalemleri.",
        body: (
          <>
            <ul>
              <li>Metrekare = net duvar alanı − boşluklar.</li>
              <li>Bir usta/1 oda ≈ 1–2 gün (zemin durumuna göre).</li>
              <li>Ekstra: astar, tamir ve koruma masrafları.</li>
            </ul>
          </>
        ),
      },
      en: {
        title: "Planning Time & Measuring Quantities",
        excerpt:
          "Room-by-room averages, quantity take-off and extras.",
        body: (
          <ul>
            <li>Net wall area minus openings.</li>
            <li>1 artisan/room ≈ 1–2 days (depends on substrate).</li>
            <li>Extras: primer, repairs, protection.</li>
          </ul>
        ),
      },
      ru: {
        title: "Планирование сроков и замер площадей",
        excerpt:
          "Средние сроки по комнате, замер и дополнительные работы.",
        body: (
          <ul>
            <li>Чистая площадь стен минус проёмы.</li>
            <li>1 мастер/комната ≈ 1–2 дня.</li>
            <li>Дополнительно: грунт, ремонт, укрытие.</li>
          </ul>
        ),
      },
    },
  },
];
