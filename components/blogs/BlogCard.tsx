import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[1.35rem]
        border
        border-[#E1E8E5]
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#175C5A]/20
        hover:shadow-[0_20px_50px_rgba(36,48,47,0.08)]
      "
    >
      <Link
        href={`/blogs/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="relative block aspect-[1.45/1] overflow-hidden bg-[#E9EFEC]"
      >
        <Image
          src={post.image || "/gallery/gallery-1.png"}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#123B3A]/55 via-transparent to-transparent"
        />

        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#123B3A]/55 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-md">
          {post.category}
        </span>

        <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#175C5A] shadow-lg transition-all duration-300 group-hover:scale-110">
          <FaArrowRight size={13} />
        </span>
      </Link>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#929C99]">
          <span className="inline-flex items-center gap-1.5">
            <FaCalendarAlt size={10} />
            {formatDate(post.publishedAt)}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <FaClock size={10} />
            {post.readingTime}
          </span>
        </div>

        <h3 className="mt-3 font-serif text-xl font-normal leading-tight text-[#24302F] transition-colors duration-300 group-hover:text-[#175C5A]">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-xs leading-6 text-[#727D7A]">
          {post.excerpt}
        </p>

        <Link
          href={`/blogs/${post.slug}`}
          className="group/read mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.13em] text-[#175C5A]"
        >
          Read Article
          <FaArrowRight
            size={13}
            className="transition-transform duration-300 group-hover/read:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
