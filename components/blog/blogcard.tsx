import Image from "next/image";
import Link from "next/link";
import type { Lang } from "./posts.data";
import { tagLabel } from "@/components/blog/tags.i18n";

type BlogCardProps = {
  slug: string;
  cover: string;
  title: string;
  excerpt: string;
  date: string;   // ISO
  tags: string[];
  lang: Lang;
};

export default function BlogCard({
  slug, cover, title, excerpt, date, tags, lang,
}: BlogCardProps) {
  return (
    <article className="rounded-2xl border bg-white shadow hover:shadow-md transition overflow-hidden">
      {/* Görsel link */}
      <Link href={`/blog/${slug}?lang=${lang}`} className="relative block aspect-[16/9]">
        <Image src={cover} alt={title} fill className="object-cover" />
      </Link>

      <div className="p-5">
        <div className="flex flex-wrap gap-2 text-xs">
            {tags.map((t) => (
              <Link
                key={t}
                href={`/blog?tag=${encodeURIComponent(t)}&lang=${lang}`} // URL'de slug sabit
                className="rounded-full bg-black/[.05] px-2 py-0.5 hover:bg-black/[.08]"
              >
                #{tagLabel(t, lang)}  {/* ekranda çeviri */}
              </Link>
            ))}
      </div>

        <h3 className="mt-2 text-lg font-semibold tracking-tight">
          <Link href={`/blog/${slug}?lang=${lang}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-neutral-700 line-clamp-3">{excerpt}</p>
        <div className="mt-3 text-xs text-neutral-500">
          {new Date(date).toLocaleDateString()}
        </div>
      </div>
    </article>
  );
}
