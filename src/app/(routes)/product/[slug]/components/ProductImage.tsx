"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  name: string;
  images: string[];
};

export const ProductImage = ({ name, images }: ProductImageProps) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const imageIndex = images.indexOf(currentImage) + 1;

  return (
    <div className="bg-accent lg:relative lg:min-h-[400px] lg:w-full lg:rounded-[10px]">
      <div className="size-full lg:flex lg:items-center">
        <Image
          alt={`Imagem ${imageIndex} do produto ${name}`}
          src={currentImage}
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto h-[23.75rem] w-auto max-w-[80%] object-contain lg:flex lg:max-h-[80%] lg:max-w-[60%]"
        />
      </div>

      <div className="rounded-t-2xl bg-background px-5 lg:absolute lg:left-6 lg:top-0 lg:rounded-none lg:bg-transparent lg:p-0">
        <div className="flex justify-center gap-3 pt-8 lg:flex-col">
          {images.map(image => (
            <button
              key={image}
              onClick={() => setCurrentImage(image)}
              className={`size-20 rounded-lg bg-accent focus:outline-none lg:bg-background ${
                image === currentImage ? "border-2 border-primary" : ""
              }`}
            >
              <Image
                alt={`Selecionar imagem ${images.indexOf(image) + 1} do produto ${name}`}
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
