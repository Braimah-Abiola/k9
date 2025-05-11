import { Metadata } from "next";

export function constructMetadata({
  title = "Legacy K9 — Find Your Perfect Lifetime Companion",
  description = "Legacy K9 specializes in helping you find the perfect loyal companion. We connect you with high-quality dogs that match your lifestyle, providing professional guidance throughout the adoption process.",
  image = "/assets/hero-img.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  verification?: { google: string; "data-rh": boolean };
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@legacyk9",
    },
    icons,
    metadataBase: new URL("https://k9-sigma.vercel.app"),
    themeColor: "#d57149",
    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  };
}
