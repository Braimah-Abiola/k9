import Footer from "@/sections/footer";
import Navigation from "@/sections/navigation";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});


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
    images: ["/assets/thumbnail.webp"],
    url: `${baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy K9 — Find Your Perfect Lifetime Companion",
    description:
      "Legacy K9 specializes in helping you find the perfect loyal companion. We connect you with high-quality dogs that match your lifestyle, providing professional guidance throughout the adoption process.",
    images: ["/assets/thumbnail.webp"],
    creator: "@onlytoolai",
  },
  icons: "/favicon.ico",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${inter.variable} antialiased scroll-smooth font-inter bg-[#F9F4EF]`}
      >
        <Navigation />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
