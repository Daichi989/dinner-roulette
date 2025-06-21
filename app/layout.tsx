import type { Metadata } from "next";
import { Noto_Sans_JP} from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import SiteFooter from "@/components/site-footer";

const fontNoto_Sans_JP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${fontNoto_Sans_JP.variable} overscroll-none bg-yellow-200`}>
        {children}
      </body>
    </html>
  );
}
