import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const SITE_NAME =
  "株式会社IM｜金庫・耐火庫の運搬・設置・販売・修理【アイエムサービス】";
const SITE_DESCRIPTION =
  "【全国対応・創業30年】金庫・耐火庫の運搬／設置／販売／修理はアイエムサービスへ。法人・個人問わず安全・迅速に対応。累計搬入実績3,500件超。下見・見積り無料。石川県白山市より出張対応。";

export const metadata: Metadata = {
  metadataBase: new URL("https://i-m-service.com"),
  title: {
    default: SITE_NAME,
    template: "%s｜アイエムサービス",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "金庫 運搬",
    "金庫 運送",
    "金庫 設置",
    "金庫 販売",
    "金庫 修理",
    "耐火金庫",
    "業務用金庫",
    "全国対応",
    "石川県",
    "白山市",
    "法人対応",
    "アイエムサービス",
  ],
  authors: [{ name: "株式会社IM" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://i-m-service.com/",
    siteName: "アイエムサービス",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "金庫・耐火庫の運搬・設置・販売・修理｜アイエムサービス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0c2541",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://i-m-service.com/#organization",
  name: "株式会社IM（アイエムサービス）",
  alternateName: "IM Service",
  description: SITE_DESCRIPTION,
  url: "https://i-m-service.com/",
  logo: "https://i-m-service.com/images/logo.png",
  image: "https://i-m-service.com/images/hero-desktop.jpg",
  telephone: "+81-76-281-6055",
  email: "im.service130@fancy.ocn.ne.jp",
  priceRange: "¥¥",
  address: {
    "@type": "PostalAddress",
    streetAddress: "宮永町53",
    addressLocality: "白山市",
    addressRegion: "石川県",
    postalCode: "924-0017",
    addressCountry: "JP",
  },
  areaServed: {
    "@type": "Country",
    name: "日本",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
