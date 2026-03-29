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
  authorName?: string;
  authorImage?: string;
  date: string;
}
export default function SmallNewsCard(props: ProgramAttribute) {
  const { image, alt_image, title, slug, authorName, authorImage, date } =
    props;

  const fallbackImageSrc = "/shareable-card-preview.jpg";
  const fallbackAvatarSrc = "/plain-logo-blue.png";
  const imageSrc = image?.source_url || fallbackImageSrc;
  const avatarSrc = authorImage || fallbackAvatarSrc;
  const safeAuthorName = authorName ?? "";

  function formatDate(date: string): string {
    const dateString = new Date(date);

    const formatted = dateString.toLocaleDateString("id-ID", {
      month: "short", // "Jun"
      day: "numeric", // "1"
      year: "numeric", // "2025"
    });
    return formatted;
  }

  return (
    <Link
      href={`/news/${slug}`}
      className="w-full md:w-1/3 p-2 md:p-6 rounded-md"
    >
      <Image
        className="rounded-xl w-full"
        src={imageSrc}
        alt={alt_image || title}
        width={image?.width ?? 400}
        height={image?.height ?? 300}
      />
      <div className="flex items-center mt-2">
        <Image
          className="rounded-full w-6 h-6 mr-2"
          src={avatarSrc}
          alt={safeAuthorName || "Author"}
          width={24}
          height={24}
        />
        <span className="text-sm text-gray-700">
          {safeAuthorName.split(" ").filter(Boolean).slice(0, 2).join(" ")}
        </span>
        <span className="text-sm text-gray-700 mx-2">|</span>
        <span className="text-sm text-gray-700">{formatDate(date)}</span>
      </div>
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
    </Link>
  );
}
