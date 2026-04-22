import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/ui/CtaButton";

export function Footer() {
  return (
    <footer
      id="colophon"
      className="border-t border-im-border bg-im-primary text-white"
      aria-label="サイトフッター"
    >
      <div className="mx-auto max-w-[1100px] px-4 pt-10 pb-6 text-center md:px-6 md:pt-12 lg:px-0">
        <Link
          href="/"
          className="mx-auto inline-flex rounded-lg bg-white px-4 py-2 outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <Image
            src="/images/logo.png"
            alt="アイエムサービス IM Service"
            width={180}
            height={46}
            className="h-9 w-auto max-w-[180px] object-contain"
          />
        </Link>
      </div>

      <div className="mx-auto flex max-w-[1100px] flex-col items-stretch gap-8 px-4 pb-10 pt-2 md:flex-row md:items-center md:justify-between md:gap-10 md:px-6 md:pb-12 md:pt-0 lg:px-0 lg:pb-14">
        <div className="text-left text-lg font-bold leading-snug md:flex-1 md:text-xl lg:text-2xl">
          <p className="m-0">
            <strong>金庫の運搬・販売・修理のことなら</strong>
          </p>
          <p className="m-0 mt-1 md:mt-2">
            <strong>アイエムサービスにお任せください！</strong>
          </p>
        </div>
        <div className="flex shrink-0 justify-center md:justify-end">
          <CtaButton href="#contact">今すぐ相談する</CtaButton>
        </div>
      </div>

      <div className="border-t border-white/25" aria-hidden />

      <div className="mx-auto px-4 py-6 text-center md:px-6 md:py-7">
        <p className="m-0 text-sm font-normal text-white/90 md:text-base">
          Copyright © アイエムサービス All right reserved.
        </p>
      </div>
    </footer>
  );
}
