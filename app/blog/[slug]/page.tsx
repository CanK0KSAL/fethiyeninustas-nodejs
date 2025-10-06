import { POSTS, type Lang, type Post } from "@/components/blog/posts.data";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LangSync from "../LangSync"; // <-- EKLENDİ

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  const c = post.copy.tr;
  const url = `https://fethiyeninustasi.com/blog/${post.slug}`;
  return {
    title: c.title,
    description: c.excerpt,
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url + "?lang=tr",
        "en-US": url + "?lang=en",
        "ru-RU": url + "?lang=ru",
      },
    },
    openGraph: {
      title: c.title,
      description: c.excerpt,
      url,
      type: "article",
      images: [{ url: post.cover }],
    },
  };
}

function jsonLd(post: Post, lang: Lang) {
  const c = post.copy[lang];
  const base = "https://fethiyeninustasi.com";
  const url = `${base}/blog/${post.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: base },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
        { "@type": "ListItem", position: 3, name: c.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.excerpt,
      image: [base + post.cover],
      author: { "@type": "Organization", name: post.author.name },
      datePublished: post.date,
      mainEntityOfPage: url,
    },
  ];
}

export default function BlogPost({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { lang?: Lang };
}) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const lang: Lang = searchParams?.lang || "tr";
  const c = post.copy[lang];

  const related = POSTS.filter(
    (p) =>
      p.slug !== post.slug &&
      (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
  ).slice(0, 3);

  return (
    <>
      {/* JSX'İN EN BAŞI: önce LangSync */}
      <LangSync expected={lang} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(post, lang)) }} />
      <article className="section px-6 md:px-10 pt-24 pb-16">
        <header className="mb-6">
          <div className="text-xs text-neutral-500">{new Date(post.date).toLocaleDateString()}</div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">{c.title}</h1>
          <p className="mt-2 text-neutral-700">{c.excerpt}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {post.tags.map((t) => (
              <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}&lang=${lang}`} className="rounded-full bg-black/[.05] px-2 py-0.5">
                #{t}
              </Link>
            ))}
          </div>
        </header>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow">
          <Image src={post.cover} alt={c.title} fill className="object-cover" />
        </div>

        <div className="prose prose-neutral max-w-none mt-8">{c.body}</div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">İlgili Yazılar</h2>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}?lang=${lang}`} className="rounded-xl border p-4 hover:bg-black/[.03]">
                  <div className="text-sm text-neutral-500">{new Date(p.date).toLocaleDateString()}</div>
                  <div className="font-medium">{p.copy[lang].title}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
