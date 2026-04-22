import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "株式会社IM - 金庫・耐火庫の運搬・設置・販売・修理なら｜全国対応【アイエムサービス】",
  description:
    "金庫・耐火庫の運送・運搬・設置ならIMサービスへ。全国対応、経験豊富な専門スタッフが安全・迅速に搬送・設置を行います。",
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJp.variable}>
      <body className="bg-white font-sans text-[#292929] antialiased">
        {children}
      </body>
    </html>
  );
}
