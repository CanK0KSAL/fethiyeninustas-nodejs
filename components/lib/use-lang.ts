// components/lib/use-lang.ts
"use client";

import { useEffect, useState } from "react";

export type Lang = "tr" | "en" | "ru";

/**
 * URL ?lang, localStorage("lang") ve <html lang> üzerinden dili okur.
 * Varsayılan "tr". Sadece client tarafında çalışır.
 */
export default function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("tr");

  useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      const q = (sp.get("lang") || "").toLowerCase();
      const ls = (localStorage.getItem("lang") || "").toLowerCase();
      const html = (document.documentElement.lang || "").toLowerCase();

      const candidate = (q || ls || html || "tr") as string;
      const v: Lang = (["tr", "en", "ru"].includes(candidate) ? candidate : "tr") as Lang;

      setLang(v);

      // html lang senkron
      if (document.documentElement.lang !== v) {
        document.documentElement.lang = v;
      }
    } catch {
      setLang("tr");
    }
  }, []);

  // back/forward veya hash değişiminde senkron
  useEffect(() => {
    const onUrlChange = () => {
      try {
        const sp = new URLSearchParams(window.location.search);
        const q = sp.get("lang") as Lang | null;
        if (q && ["tr", "en", "ru"].includes(q) && q !== lang) {
          document.documentElement.lang = q;
          setLang(q);
        }
      } catch {}
    };
    window.addEventListener("popstate", onUrlChange);
    window.addEventListener("hashchange", onUrlChange);
    return () => {
      window.removeEventListener("popstate", onUrlChange);
      window.removeEventListener("hashchange", onUrlChange);
    };
  }, [lang]);

  return lang;
}
