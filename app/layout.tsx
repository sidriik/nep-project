import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin", "cyrillic"], weight: ["400", "700"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "НЭП: Исследование экономики",
  description: "Проект по истории: причины, этапы и итоги НЭП",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}