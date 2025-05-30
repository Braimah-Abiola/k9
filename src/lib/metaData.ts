import { Metadata } from "next";

const baseUrl = "https://www.legacylinek9.com/";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`),
  keywords: [
    "dog adoption",
    "family dogs",
    "puppy adoption",
    "trained dogs",
    "dog breeders",
    "service dogs",
    "protection dogs",
    "Legacy K9",
    "dog training",
    "dog companions",
    "lifetime companion",
    "dog matching",
    "adopt a dog",
    "dog guidance",
    "dog care",
  ],
  title: "Legacy K9 — Find Your Perfect Lifetime Companion",
  description:
    "Legacy K9 specializes in helping you find the perfect loyal companion. We connect you with high-quality dogs that match your lifestyle, providing professional guidance throughout the adoption process.",
  openGraph: {
    title: "Legacy K9 — Find Your Perfect Lifetime Companion",
    siteName: "Legacy K9",
    description:
      "Legacy K9 specializes in helping you find the perfect loyal companion. We connect you with high-quality dogs that match your lifestyle, providing professional guidance throughout the adoption process.",
    images: ["/assets/hero-img.png"],
    url: `${baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy K9 — Find Your Perfect Lifetime Companion",
    description:
      "Legacy K9 specializes in helping you find the perfect loyal companion. We connect you with high-quality dogs that match your lifestyle, providing professional guidance throughout the adoption process.",
    images: ["/assets/hero-img.png"],
    creator: "@onlytoolai",
  },
  icons: "/favicon.ico",
};
