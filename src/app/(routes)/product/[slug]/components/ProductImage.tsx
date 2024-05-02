"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  name: string;
  images: string[];
};

export const ProductImage = ({ name, images }: ProductImageProps) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="bg-accent">
      <div className="w-full">
        <Image
          alt={`Imagem do produto ${name}`}
          src={currentImage}
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto h-[23.75rem] w-auto max-w-[90%] object-contain"
        />
      </div>

      <div className="rounded-t-2xl bg-background px-5">
        <div className="flex justify-center gap-3 pt-8">
          {images.map(image => (
            <button
              key={image}
              onClick={() => setCurrentImage(image)}
              className={`size-20 rounded-lg bg-accent focus:outline-none ${
                image === currentImage ? "border-2 border-primary" : ""
              }`}
            >
              <Image
                alt={`Imagem ${images.indexOf(image) + 1} do produto ${name}`}
                src={image}
                width={0}
                height={0}
                sizes="100vw"
                className="mx-auto size-auto max-h-14 max-w-14 object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
