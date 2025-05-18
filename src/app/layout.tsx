import { constructMetadata } from "@/lib/metaData";
import Footer from "@/sections/footer";
import Navigation from "@/sections/navigation";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata = constructMetadata();


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
