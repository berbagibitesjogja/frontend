import BottomArticle from "@/components/BottomArticle";
import SidebarNews from "@/components/SidebarNews";
import type { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  // fetch post information
  const post = await fetch(
    `https://news-api.berbagibitesjogja.com/wp-json/wp/v2/posts?slug=${slug}`,
    { cache: "no-store" }
  ).then((res) => res.json());
  const data = post[0];
  const yoast = data.yoast_head_json;

  return {
    title: data.title.rendered,
    description: yoast.description,
    openGraph: {
      description: yoast.og_description,
      title: yoast.og_title,
      type: "article",
      url: "https://berbagibitesjogja.com/news/" + slug,
      images: yoast.og_image,
    },
    twitter: {
      title: data.title.rendered,
      description: yoast.og_description,
      images: yoast.og_image,
    },
  };
}

function formatDate(date: string): string {
  const dateString = new Date(date);

  const formatted = dateString.toLocaleDateString("id-ID", {
    month: "short", // "Jun"
    day: "numeric", // "1"
    year: "numeric", // "2025"
  });
  return formatted;
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(
    `https://news-api.berbagibitesjogja.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );
  const rawNews = await response.json();
  const post = rawNews[0];
  const cleanedContent = post.content.rendered.replace(
    /^\s*<figure[^>]*>[\s\S]*?<\/figure>/,
    ""
  );
  return (
    <>
      {/* Tanggal, Judul */}
      <h1 className="text-center font-bold text-gray-400 hidden md:block">
        {formatDate(post.date)}
      </h1>
      <h1 className="text-navy text-left md:text-center font-semibold text-3xl md:text-5xl leading-12 md:leading-16 md:pt-0 pt-4">
        {post.title.rendered}
      </h1>
      <div className="flex flex-row items-center justify-items-start mt-8 md:hidden">
        <Image
          className="rounded-full mr-2 "
          src={post.authors?.[0]?.avatar_url || "/plain-logo-blue.png"}
          alt={post.authors?.[0]?.display_name || ""}
          width={46}
          height={46}
        />
        <div>
          <p className="text-md font-medium text-gray-500">
            {post.authors?.[0]?.display_name || ""}
          </p>
          <p className="text-navy">
            Tanggal Publish{" "}
            <span className="text-gray-700">{formatDate(post.date)}</span>
          </p>
        </div>
      </div>
      <div className="px-12">
        <Image
          src={post.yoast_head_json.og_image[0].url}
          alt={post.title.rendered}
          width={post.yoast_head_json.og_image[0].width}
          height={post.yoast_head_json.og_image[0].height}
          className="w-full h-auto rounded-lg my-8"
        />
      </div>

      {/* Konten */}
      <div className="px-6 md:px-12 pt-0 pb-6 flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: cleanedContent }}
          />
        </div>
        <SidebarNews
          slug={slug}
          author={post.yoast_head_json.author}
          date={post.date}
        />
      </div>

      <div className="px-6 md:px-12 pt-12 pb-12 hidden md:block">
        <h2 className="text-navy text-2xl font-semibold mb-4">
          Artikel Lainnya
        </h2>
        <div>
          <BottomArticle
            slug={slug}
            author={post.yoast_head_json.author}
            date={post.date}
          />
        </div>
      </div>
    </>
  );
}
