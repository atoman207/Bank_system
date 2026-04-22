import Image from "next/image";
import Link from "next/link";

const TEL_DISPLAY = "076-281-6055";
const TEL_HREF = "tel:0762816055";

const lineHref =
  process.env.NEXT_PUBLIC_LINE_URL?.trim() || "https://lin.ee/WEJ3NAF";
const lineLinkIsExternal = /^https?:\/\//i.test(lineHref);

const footerNav = [
  { href: "#service", label: "サービス" },
  { href: "#reasons", label: "選ばれる理由" },
  { href: "#works", label: "施工事例" },
  { href: "#voice", label: "お客様の声" },
  { href: "#areas", label: "対応エリア" },
  { href: "#faq", label: "よくある質問" },
  { href: "#company", label: "会社概要" },
  { href: "#contact", label: "お問い合わせ" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="colophon"
      className="border-t border-im-border bg-im-primary text-white"
      aria-label="サイトフッター"
    >
      <div
        className="bg-cover bg-center bg-no-repeat py-10 text-center md:py-12"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/images/mw-2.png')",
        }}
      >
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 lg:px-0">
          <h3 className="m-0 text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
            金庫の運搬・販売・修理のことなら
            <br />
            アイエムサービスにお任せください
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
            全国対応・下見見積り無料。まずはお気軽にご相談ください。
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-7 py-3 text-base font-bold text-im-accent shadow-md transition-colors hover:bg-im-primary hover:text-white"
            >
              ▶ 無料見積り・お問い合わせ
            </a>
            <a
              href={TEL_HREF}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-6 py-3 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              📞 {TEL_DISPLAY}
            </a>
            <Link
              href={lineHref}
              {...(lineLinkIsExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#06c755] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[#05a948]"
            >
              LINEで相談
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-4 pb-10 pt-12 md:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-lg bg-white px-4 py-2 outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <Image
                src="/images/logo.png"
                alt="アイエムサービス IM Service"
                width={180}
                height={46}
                className="h-9 w-auto max-w-[180px] object-contain"
              />
            </Link>
            <address className="mt-5 not-italic text-sm leading-relaxed text-white/85 md:text-[15px]">
              株式会社IM
              <br />
              〒924-0017 石川県白山市宮永町53
              <br />
              TEL:
              <a href={TEL_HREF} className="underline-offset-2 hover:underline">
                {" "}
                {TEL_DISPLAY}
              </a>
              <br />
              営業時間: 8:00〜18:00（不定休）
            </address>
          </div>
          <nav aria-label="フッターナビゲーション">
            <p className="m-0 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Menu
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex text-sm text-white/90 transition-colors hover:text-im-accent md:text-[15px]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/15" aria-hidden />

      <div className="mx-auto px-4 py-5 text-center md:px-6 md:py-6">
        <p className="m-0 text-xs font-normal text-white/80 md:text-sm">
          © {year} 株式会社IM（アイエムサービス） All rights reserved.
        </p>
      </div>
    </footer>
  );
}
