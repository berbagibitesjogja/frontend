"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

interface ProgramAttribute {
  id: number;
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
  authorName: string;
  authorImage: string;
}

interface CarouselProps {
  articles: ProgramAttribute[];
}

export function CarouselTry({ articles }: CarouselProps) {
  const fallbackImageSrc = "/shareable-card-preview.jpg";
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        className="w-full mb-8"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="-ml-4">
          {articles.map((article, index) => (
            <CarouselItem key={article.id || index} className="pl-4">
              <Link href={`/news/${article.slug}`} className="block">
                <div className="relative w-full md:aspect-[21/9] aspect-[9/12] rounded-lg overflow-hidden">
                  <Image
                    src={article.image?.source_url || fallbackImageSrc}
                    alt={article.alt_image || article.title}
                    fill
                    className="object-cover z-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

                  <div className="absolute bottom-0 left-0 p-6 md:p-12 z-20 flex justify-between items-end w-full">
                    <div className="flex-1 md:mr-96">
                      <h3 className="text-white font-semibold text-lg">
                        Berita Terbaru
                      </h3>
                      <h1 className="text-white font-medium text-3xl md:text-5xl my-3">
                        {article.title}
                      </h1>
                      <p className="text-md leading-6 font-light mt-2 text-white">
                        {article.excerpt
                          .replace(/<[^>]*>?/gm, "")
                          .replace("[&hellip;]", "")
                          .trim()
                          .split(" ")
                          .slice(0, 35)
                          .join(" ") + " ..."}
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <ArrowRight className="text-white size-12 lg:size-16" />
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <CarouselNext
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </Carousel>

      <div className="flex justify-center gap-2 -mt-4">
        {articles.map((_, index) => {
          const isCurrent = index === current;
          return (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 ${
                isCurrent ? "w-8 h-2 bg-navy" : "w-2 h-2 bg-gray-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
