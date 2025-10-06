"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useLang from "@/components/lib/use-lang";

// Harici tipe bağlı kalmayalım
type Lang = "tr" | "en" | "ru";

export default function LangSync({ expected }: { expected: Lang }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const lang = useLang();

  useEffect(() => {
    if (!lang || lang === expected) return;
    const params = new URLSearchParams(sp.toString());
    params.set("lang", lang);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [lang, expected, pathname, router, sp]);

  return null;
}
