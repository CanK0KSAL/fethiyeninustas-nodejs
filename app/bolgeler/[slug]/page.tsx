// app/bolgeler/[slug]/page.tsx
import { AREAS } from "@/components/areas/areas.data";
import AreaSections from "@/components/areas/area-sections";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

// Hangi slug'lar statik üretilecek?
export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

// TR metaya göre metadata (query ile dil değişmediği için SSR meta TR kalır — içerik client tarafında EN/RU'ya geçer)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const area = AREAS.find((a) => a.slug === params.slug);
  if (!area) return {};
  const t = area.copy.tr;

  const title = t.metaTitle;
  const description = t.metaDesc;
  const url = `https://fethiyeninustasi.com.tr/bolgeler/${area.slug}`; // canlı domainde güncelle

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url + "?lang=tr",
        "en-US": url + "?lang=en",
        "ru-RU": url + "?lang=ru",
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: area.image }],
    },
  };
}

function jsonLd(areaSlug: string, t: (typeof AREAS)[number]["copy"]["tr"]) {
  const base = "https://fethiyeninustasi.com.tr"; // canlı domainde güncelle
  const url = `${base}/bolgeler/${areaSlug}`;

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: base },
      { "@type": "ListItem", position: 2, name: "Bölgeler", item: `${base}/bolgeler` },
      { "@type": "ListItem", position: 3, name: t.h1, item: url },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fethiye’nin Ustası",
    url,
    areaServed: "Fethiye",
    image: `${base}${AREAS.find(a=>a.slug===areaSlug)?.image || ""}`,
    telephone: "+90 555 555 55 55", // gerçek numarayla güncelle
    address: { "@type": "PostalAddress", addressLocality: "Fethiye", addressRegion: "Muğla", addressCountry: "TR" },
  };

  return [breadcrumbs, faq, localBusiness];
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = AREAS.find((a) => a.slug === params.slug);
  if (!area) return notFound();

  const t = area.copy.tr; // JSON-LD'yi TR metniyle oluşturuyoruz

  return (
    <>
      {/* JSON-LD (SSR) */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(area.slug, t)) }}
      />
      <AreaSections area={area} />
    </>
  );
}
