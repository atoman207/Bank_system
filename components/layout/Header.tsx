"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const TEL_DISPLAY = "076-281-6055";
const TEL_HREF = "tel:0762816055";

/** Override with `NEXT_PUBLIC_LINE_URL` in `.env.local` if the LINE entry URL changes. */
const lineHref =
  process.env.NEXT_PUBLIC_LINE_URL?.trim() || "https://lin.ee/WEJ3NAF";
const lineLinkIsExternal = /^https?:\/\//i.test(lineHref);

const navItems = [
  { href: "#service", label: "サービス" },
  { href: "#reasons", label: "選ばれる理由" },
  { href: "#works", label: "施工事例" },
  { href: "#voice", label: "お客様の声" },
  { href: "#faq", label: "よくある質問" },
  { href: "#company", label: "会社概要" },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width={24}
      height={24}
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
      aria-hidden
      width={24}
      height={24}
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
      aria-hidden
      width={24}
      height={24}
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const directionThreshold = 8;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY <= 8) {
        setIsVisible(true);
      } else if (delta > directionThreshold) {
        setIsVisible(false);
      } else if (delta < -directionThreshold) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 shrink-0 border-b border-im-border bg-white shadow-sm backdrop-blur-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-label="サイトヘッダー"
    >
      <div className="mx-[5vw] flex items-center justify-between gap-3 py-2.5 md:py-3">
        <Link
          href="/"
          className="flex shrink-0 items-center outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-im-primary"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="アイエムサービス IM Service"
            width={360}
            height={93}
            className="h-[44px] w-auto max-w-[min(200px,60vw)] object-contain object-left sm:h-[50px] md:h-[54px] md:max-w-[240px]"
            priority
          />
        </Link>

        <nav
          className="hidden xl:flex xl:items-center xl:gap-5 xl:text-[13px] xl:font-semibold xl:text-im-primary"
          aria-label="メインナビゲーション"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-im-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
          <a
            href={TEL_HREF}
            className="group hidden min-w-0 items-start gap-2.5 rounded-sm outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-im-primary md:flex"
            aria-label={`電話で相談 ${TEL_DISPLAY}`}
          >
            <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#0f9b9e] transition-colors group-hover:text-[#0d7f82] md:h-6 md:w-6" />
            <div className="min-w-0 text-left">
              <p className="m-0 text-[10px] font-semibold leading-tight text-[#0f9b9e] md:text-[11px]">
                お急ぎの方はお電話ください
              </p>
              <p className="m-0 mt-0.5 text-lg font-bold tabular-nums tracking-tight text-[#0d7f82] md:text-[21px]">
                {TEL_DISPLAY}
              </p>
            </div>
          </a>

          <Link
            href={lineHref}
            {...(lineLinkIsExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="hidden shrink-0 items-center justify-center rounded-full bg-[#06c755] px-4 py-2 text-xs font-bold text-white outline-offset-4 transition-colors hover:bg-[#05a948] focus-visible:outline focus-visible:outline-2 focus-visible:outline-im-primary sm:inline-flex md:px-5 md:text-sm"
          >
            LINE相談
          </Link>

          <a
            href="#contact"
            className="hidden shrink-0 items-center justify-center rounded-full bg-im-accent px-5 py-2 text-xs font-bold text-white shadow-md transition-colors hover:bg-[#c94a15] md:inline-flex md:text-sm"
          >
            無料見積り
          </a>

          <button
            type="button"
            aria-label="メニューを開く"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-im-border text-im-primary transition-colors hover:bg-im-secondary xl:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`xl:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="border-t border-im-border bg-white">
          <nav
            className="mx-[5vw] flex flex-col py-3"
            aria-label="モバイルナビゲーション"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-neutral-100 py-3 text-base font-semibold text-im-primary last:border-b-0 hover:text-im-accent"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2.5">
              <a
                href={TEL_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0d7f82] bg-white px-5 py-3 text-base font-bold text-[#0d7f82]"
                onClick={() => setOpen(false)}
              >
                <PhoneIcon className="h-5 w-5" />
                {TEL_DISPLAY}
              </a>
              <Link
                href={lineHref}
                {...(lineLinkIsExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center justify-center rounded-lg bg-[#06c755] px-5 py-3 text-base font-bold text-white"
                onClick={() => setOpen(false)}
              >
                LINEで相談する
              </Link>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-im-accent px-5 py-3 text-base font-bold text-white"
              >
                無料見積り・お問い合わせ
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
