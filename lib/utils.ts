import type { ImageLoaderProps } from "next/image";

export function customImageLoader(imageLoaderProps: ImageLoaderProps) {
  return imageLoaderProps.src;
}
