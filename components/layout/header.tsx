"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useLang from "@/components/lib/use-lang";

function Burger({
  open,
  onClick,
  className = "",
  label = "Menü",
}: {
  open: boolean;
  onClick: () => void;
  className?: string;
  label?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-expanded={open}
      className={[
        "relative inline-flex h-11 w-11 items-center justify-center",
        "rounded-2xl border border-black/10 bg-white/70 backdrop-blur",
        "shadow-sm transition hover:shadow-md hover:ring-1 hover:ring-brand-gold/40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50",
        "active:scale-[.98]",
        className,
      ].join(" ")}
    >
      {/* Altın halo */}
      <span
        className={[
          "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5",
          open ? "ring-brand-gold/40 animate-pulse" : "group-hover:ring-brand-gold/30",
        ].join(" ")}
      />
      {/* Çizgiler */}
      <span className="relative block h-4 w-5">
        <span
          className={[
            "absolute inset-x-0 top-0 h-[2px] rounded-full bg-neutral-900 transition-transform duration-300",
            open ? "translate-y-2 rotate-45" : "",
          ].join(" ")}
        />
        <span
          className={[
            "absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-neutral-900 transition-opacity duration-300",
            open ? "opacity-0" : "opacity-100",
          ].join(" ")}
        />
        <span
          className={[
            "absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-neutral-900 transition-transform duration-300",
            open ? "-translate-y-2 -rotate-45" : "",
          ].join(" ")}
        />
      </span>
    </button>
  );
}


/* --- Çok dilli metinler --- */
const NAV_I18N = {
  tr: {
    hizmetler: "Hizmetler",
    portfoy: "Portföy",
    bolgeler: "Bölgeler",
    blog: "Blog",
    hakkimizda: "Hakkımızda",
    iletisim: "İletişim",
    yakinda: "Yakında",
    sub: {
      ipek: "İpek Sıva",
      boya: "Boya",
      alcipan: "Alçıpan & Asma Tavan",
      dekor: "Dekoratif Kaplama",
      fethiye: "Fethiye",
      calis: "Çalış",
      ovacik: "Ovacık",
      gocek: "Göcek",
    },
  },
  en: {
    hizmetler: "Services",
    portfoy: "Portfolio",
    bolgeler: "Areas",
    blog: "Blog",
    hakkimizda: "About",
    iletisim: "Contact", 
    yakinda: "Coming soon",
    sub: {
      ipek: "Silk Plaster",
      boya: "Painting",
      alcipan: "Drywall & Ceilings",
      dekor: "Decorative Coatings",
      fethiye: "Fethiye",
      calis: "Calis",
      ovacik: "Ovacik",
      gocek: "Gocek",
    },
  },
  ru: {
    hizmetler: "Услуги",
    portfoy: "Портфолио",
    bolgeler: "Районы",
    blog: "Блог",
    hakkimizda: "О нас",
    iletisim: "Контакты",
    yakinda: "Скоро",
    sub: {
      ipek: "Шелковая штукатурка",
      boya: "Покраска",
      alcipan: "ГКЛ и потолки",
      dekor: "Декоративные покрытия",
      fethiye: "Фетхие",
      calis: "Чалыш",
      ovacik: "Оваджик",
      gocek: "Гёджек",
    },
  },
} as const;

/* --- Tipler --- */
type NavItem =
  | { label: string; href: string; external?: boolean }
  | {
      label: string;
      items: { label: string; href: string; disabled?: boolean; badge?: string }[];
    };

export default function Header() {
  const lang = useLang();
  const L = NAV_I18N[lang];
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Sadece arkaplanı değiştir (kaybolma yok)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  // Mobil sheet açıldığında body’yi kilitle
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [mobileOpen]);

  // Dil değiştir
  function setLanguage(code: "tr" | "en" | "ru") {
    localStorage.setItem("lang", code);
    document.documentElement.lang = code;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", code);
    window.history.replaceState({}, "", url.toString());
  }

  const NAV: NavItem[] = [
    {
      label: L.hizmetler,
      items: [
        { label: L.sub.ipek, href: "/ipek-siva" },
        { label: L.sub.boya, href: "#", disabled: true, badge: L.yakinda },
        { label: L.sub.alcipan, href: "#", disabled: true, badge: L.yakinda },
        { label: L.sub.dekor, href: "#", disabled: true, badge: L.yakinda },
      ],
    },
    { label: L.portfoy, href: "/galeri" },
    {
      label: L.bolgeler,
      items: [
        { label: L.sub.fethiye, href: "/bolgeler/fethiye" },
        { label: L.sub.calis, href: "/bolgeler/calis" },
        { label: L.sub.ovacik, href: "/bolgeler/ovacik" },
        { label: L.sub.gocek, href: "/bolgeler/gocek" },
      ],
    },
    { label: L.blog, href: "/blog" },
    { label: L.hakkimizda, href: "/hakkimizda" },
    { label: L.iletisim, href: "/iletisim" }  
  ];

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 ring-1 ring-black/5 shadow-lg"
          : "bg-transparent",
      ].join(" ")}
      onMouseLeave={() => setOpenMenu(null)}
    >
      {/* Altın saç çizgisi */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />

      {/* İçerik */}
      <div className="max-w-7xl mx-auto h-[74px] px-6 md:px-10 flex items-center justify-between gap-6">
        {/* Logo + ad */}
        <Link href="/" className="group inline-flex items-center gap-3">
          {logoError ? (
            <div className="h-9 w-9 rounded-full bg-brand-gold shadow" />
          ) : (
            <Image
              src="/assets/brand/logo.png"
              alt="Fethiye’nin Ustası"
              width={36}
              height={36}
              priority
              className="h-14 w-14 object-contain"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="font-semibold tracking-tight text-[18px] text-neutral-900">
            Fethiye’nin <span className="text-brand-gold">Ustası</span>
          </span>
        </Link>

        {/* Orta: nav */}
        <nav className="hidden lg:block">
          <ul className="nav-row" role="menubar" aria-label="Ana menü">
            {NAV.map((item) =>
              "items" in item ? (
                <li
                  key={item.label}
                  className="relative"
                  role="none"
                  onMouseEnter={() => setOpenMenu(item.label)}
                >
                  <button
                    className="nav-link"
                    role="menuitem"
                    aria-haspopup="menu"
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}
                  </button>

                  {/* Dropdown */}
                  <div
                    className={[
                      "absolute left-0 top-full mt-2 min-w-72 rounded-2xl border bg-white shadow-xl ring-1 ring-black/5",
                      openMenu === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none",
                      "transition",
                    ].join(" ")}
                  >
                    <ul className="p-2">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.disabled ? "#" : sub.href}
                            aria-disabled={sub.disabled}
                            className={[
                              "flex items-center justify-between rounded-xl px-3 py-2 text-sm hover:bg-black/[.04]",
                              sub.disabled
                                ? "opacity-60 cursor-not-allowed"
                                : "text-neutral-900",
                            ].join(" ")}
                            onClick={() => setOpenMenu(null)}
                          >
                            <span>{sub.label}</span>
                            {sub.badge && (
                              <span className="badge">{sub.badge}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    className={[
                      "nav-link",
                      pathname === item.href ? "nav-link-active" : "",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Sağ: Dil seçici */}
        <div className="hidden lg:flex">
          <div className="lang-pill" role="group" aria-label="Select language">
            {(["tr", "en", "ru"] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={[
                  "lang-btn",
                  lang === code ? "lang-btn-active" : "",
                ].join(" ")}
                aria-pressed={lang === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobil hamburger */}
        <Burger
          open={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        />

      </div>

      {/* Mobil full-overlay panel (tok görünüm) */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[70]">
          {/* Koyu opak overlay */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setMobileOpen(false)}
          />
          {/* Sağdan tam opak panel */}
          <div
            role="dialog"
            aria-modal="true"
            className="absolute inset-y-0 right-0 w-[88%] max-w-sm bg-white text-neutral-900 shadow-2xl ring-1 ring-black/10 p-5 flex flex-col gap-4 overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">Menü</span>
          <Burger open={true} onClick={() => setMobileOpen(false)} />

            </div>

            {/* Mobil nav */}
            <nav className="grid gap-1">
              {NAV.map((item) =>
                "items" in item ? (
                  <details key={item.label} className="group rounded-xl border border-transparent hover:border-black/[.06]">
                    <summary className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 hover:bg-black/[.04]">
                      <span className="font-medium">{item.label}</span>
                      <svg
                        className="transition group-open:rotate-180"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </summary>
                    <ul className="mt-1 ml-1 grid">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.disabled ? "#" : sub.href}
                            className={[
                              "flex items-center justify-between rounded-xl px-3 py-2 text-sm hover:bg-black/[.04]",
                              sub.disabled ? "opacity-60 cursor-not-allowed" : "text-neutral-900",
                            ].join(" ")}
                            aria-disabled={sub.disabled}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span>{sub.label}</span>
                            {sub.badge && <span className="badge">{sub.badge}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-xl px-3 py-2 hover:bg-black/[.04]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Mobil dil seçimi */}
            <div className="mt-2">
              <div className="lang-pill w-full justify-between">
                {(["tr", "en", "ru"] as const).map((code) => (
                  <button
                    key={code}
                    onClick={() => setLanguage(code)}
                    className={["lang-btn flex-1", lang === code ? "lang-btn-active" : ""].join(" ")}
                    aria-pressed={lang === code}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
