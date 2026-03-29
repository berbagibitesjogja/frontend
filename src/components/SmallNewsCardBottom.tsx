"use client";

import Image from "next/image";
import Link from "next/link";

interface ProgramAttribute {
  image?: {
    source_url: string;
    width: number;
    height: number;
  };
  alt_image: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  authorName?: string;
  authorImage?: string;
  orientation?: "horizontal" | "vertical";
}
function formatDate(date: string): string {
  const d = new Date(date);
  const day = d.getUTCDate().toString().padStart(2, "0");
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return `${day} ${month} ${year}`;
}

export default function SmolNewsCard(props: ProgramAttribute) {
  const { image, alt_image, title, slug, date, authorName, authorImage } =
    props;

  const fallbackImageSrc = "/shareable-card-preview.jpg";
  const fallbackAvatarSrc = "/plain-logo-blue.png";
  const imageSrc = image?.source_url || fallbackImageSrc;
  const avatarSrc = authorImage || fallbackAvatarSrc;
  const avatarAlt = authorName || "Author";

  return (
    <Link
      href={`/news/${slug}`}
      className="w-full md:w-1/3 p-2 rounded-md flex flex-col"
    >
      <Image
        className="rounded-xl w-full aspect-[4/3] object-cover"
        src={imageSrc}
        alt={alt_image || title}
        width={image?.width ?? 400}
        height={image?.height ?? 300}
      />
      <h1 className="text-gray-600 font-sm mt-2">{formatDate(date)}</h1>
      <h1 className="text-navy font-semibold text-xl my-2">{title}</h1>
      <p className="text-sm leading-4 font-medium mt-2 mb-2 text-gray-500">
        {props.excerpt
          .replace(/<[^>]*>?/gm, "")
          .replace("[&hellip;]", "")
          .trim()
          .split(" ")
          .slice(0, 15)
          .join(" ") + " ..."}
      </p>
      <div className="flex flex-row items-center justify-items-start mt-auto">
        <Image
          className="rounded-full mr-2"
          src={avatarSrc}
          alt={avatarAlt}
          width={32}
          height={32}
        />
        <p className="text-sm font-medium text-gray-500">{authorName}</p>
      </div>
    </Link>
  );
}
