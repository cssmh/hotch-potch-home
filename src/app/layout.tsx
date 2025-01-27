import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ScrollProvider from "./_scrollProvider";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hotch-Potch | Home",
  description: "A seo content writer platform.",
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
          <Header />
          {children}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
