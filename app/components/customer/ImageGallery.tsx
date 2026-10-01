"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
};

export function ImageGallery({ images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  const activeImage = images[activeIndex];

  return (
    <div className="grid w-full gap-2 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
      {/* Large image */}
      <div className="relative aspect-square md:aspect-auto min-w-0 min-h-full overflow-hidden rounded border border-secondary">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          className="object-cover "
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>

      {/* Thumbnail area */}
      <div className="relative min-w-0">
        <div
          className="
            flex gap-2 overflow-x-auto justify-between
            md:grid md:grid-cols-1 md:overflow-visible
          "
        >
          {images.slice(0, 4).map((image, index) => {
            const imageIndex = index;

            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(imageIndex)}
                className={`
                  relative aspect-square  w-full  overflow-hidden rounded border 
                  transition
                  ${
                    activeIndex === imageIndex
                      ? "border-accent "
                      : "border-secondary hover:border-accent/50"
                  }
                `}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 20vw"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
