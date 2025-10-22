import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "AMAL — Your Platform for Kindness",
  description: "Transparent, stable and sustainable giving.",
  icons: { icon: "/amal-logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} antialiased text-[15px] md:text-base`}>
        <SiteHeader />
        <main className="overflow-x-hidden">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
