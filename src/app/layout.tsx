import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vijay Welding",
  description:
    "Vijay Welding — Quality That You Feel.",
  keywords: [
    "welding",
    "CNC design",
    "elevation design",
    "MDF design",
    "wood design",
    "acrylic design",
    "APC design",
    "shutter",
    "fabrication",
    "turmeric boiler",
    "Risod",
    "Washim",
    "Vijay Welding",
  ],
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-welding-black text-welding-text font-body overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
