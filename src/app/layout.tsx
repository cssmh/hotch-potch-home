import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ScrollProvider from "./_scrollProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hotch-Potch Innovations | Official site",
  description: "A ai seo content writer platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
