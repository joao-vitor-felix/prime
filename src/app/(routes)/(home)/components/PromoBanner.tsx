import Image, { ImageProps } from "next/image";

export const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return <Image alt={alt} {...props} />;
};
