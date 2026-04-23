"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const MV_SLIDE_PREFIX =
  process.env.NEXT_PUBLIC_MV_SLIDE_PREFIX?.replace(/[^a-z0-9-]/gi, "") || "mw";
const MV_SLIDE_EXT =
  process.env.NEXT_PUBLIC_MV_SLIDE_EXT?.replace(/^\./, "").replace(
    /[^a-z0-9]/gi,
    "",
  ) || "png";

const TEL_DISPLAY = "076-281-6055";
const TEL_HREF = "tel:0762816055";
const lineHref =
  process.env.NEXT_PUBLIC_LINE_URL?.trim() || "https://lin.ee/WEJ3NAF";
const lineLinkIsExternal = /^https?:\/\//i.test(lineHref);

const MV_SLIDE_META = [
  { n: 1, alt: "金庫をトラックへ積み込む運搬作業" },
  { n: 2, alt: "オフィス内での耐火金庫の設置作業" },
  { n: 3, alt: "金庫の丁寧な運搬準備（機材と耐火金庫）" },
  { n: 4, alt: "全国対応の配送トラック（幹線道路）" },
] as const;

const MV_SLIDES = MV_SLIDE_META.map(({ n, alt }) => ({
  src: `/images/${MV_SLIDE_PREFIX}-${n}.${MV_SLIDE_EXT}`,
  alt,
})) as readonly { src: string; alt: string }[];

const AUTO_INTERVAL_MS = 4500;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
      width={20}
      height={20}
    >
      <path d="M9 16.17 5.53 12.7a1 1 0 0 0-1.41 1.41l4.17 4.17a1 1 0 0 0 1.42 0L20.88 7.93a1 1 0 0 0-1.41-1.41z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width={22}
      height={22}
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export function Hero() {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const advance = useCallback(() => {
    setActive((i) => (i + 1) % MV_SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      if (!pauseRef.current) advance();
    }, AUTO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [active, advance, reduceMotion]);

  return (
    <section
      className="relative isolate flex min-h-0 w-full flex-1 flex-col overflow-hidden bg-im-primary"
      aria-label="メインビジュアル"
      onMouseEnter={() => {
        pauseRef.current = true;
      }}
      onMouseLeave={() => {
        pauseRef.current = false;
      }}
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {MV_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity ease-out ${
              reduceMotion ? "duration-0" : "duration-700"
            }`}
            style={{
              opacity: i === active ? 1 : 0,
              zIndex: i === active ? 1 : 0,
            }}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              loading="eager"
              className="object-cover object-center"
              sizes="100vw"
              aria-hidden
            />
          </div>
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-r from-im-primary/75 via-im-primary/55 to-im-primary/10"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-70px)] w-full max-w-[1200px] flex-1 flex-col justify-center px-4 py-10 md:py-14 lg:min-h-[560px] lg:py-16">
        <p className="sr-only" aria-live={reduceMotion ? "off" : "polite"}>
          {MV_SLIDES[active].alt}
        </p>

        <div className="max-w-full lg:max-w-[680px]">
          <div className="inline-flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
            <span className="rounded-full bg-im-accent px-3 py-1 shadow-md">
              全国対応
            </span>
            <span className="rounded-full bg-green-600 px-3 py-1 shadow-md">
              全国最安値‼︎
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 ring-1 ring-inset ring-white/40 backdrop-blur">
              創業33年
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 ring-1 ring-inset ring-white/40 backdrop-blur">
              法人対応
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 ring-1 ring-inset ring-white/40 backdrop-blur">
              下見・見積り無料
            </span>
          </div>

          <h1 className="mt-5 text-white drop-shadow-md">
            <span className="block text-[clamp(0.88rem,1.6vw+0.6rem,1.25rem)] font-semibold tracking-wide text-im-accent">
              金庫のことなら、すべて解決。
            </span>
            <span className="mt-2 block text-[clamp(1.9rem,4.2vw+0.5rem,3.4rem)] font-bold leading-[1.15] tracking-tight">
              金庫・耐火庫の
              <br className="md:hidden" />
              <span className="text-im-accent">運搬・設置・販売・修理</span>
              <br />
              <span className="text-[0.82em]">全国どこでも即対応</span>
            </span>
          </h1>

          <ul className="mt-6 grid gap-2 text-sm font-semibold text-white sm:grid-cols-2 sm:text-base">
            {[
              "創業33年・累計15,000件超の実績",
              "2階以上・階段搬入もプロが対応",
              "全メーカー取扱／開錠・修理OK",
              "最短当日お見積り／下見無料",
            ].map((text) => (
              <li
                key={text}
                className="flex items-start gap-2 rounded-lg bg-black/25 px-3 py-2 ring-1 ring-inset ring-white/10 backdrop-blur-sm"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-im-accent" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-im-accent px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-im-accent/30 transition-transform hover:-translate-y-0.5 hover:bg-[#c94a15] sm:text-lg"
            >
              ▶ 無料見積り・お問い合わせ
            </a>
            <a
              href={TEL_HREF}
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border-2 border-white bg-white/10 px-6 py-3 text-white backdrop-blur transition-colors hover:bg-white hover:text-im-primary"
            >
              <PhoneIcon className="h-5 w-5 shrink-0" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-semibold tracking-wider sm:text-xs">
                  お急ぎの方はお電話
                </span>
                <span className="block text-lg font-bold tabular-nums sm:text-xl">
                  {TEL_DISPLAY}
                </span>
              </span>
            </a>
            <Link
              href={lineHref}
              {...(lineLinkIsExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#06c755] px-6 py-3 text-base font-bold text-white shadow-md transition-colors hover:bg-[#05a948]"
            >
              LINEで相談する
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/80 sm:text-sm">
            受付時間 8:00〜18:00（不定休）／全国対応・出張見積り可
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-4 right-4 z-10 flex gap-2"
        role="tablist"
        aria-label="メインビジュアル切り替え"
      >
        {MV_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-label={`メインビジュアル ${i + 1} / ${MV_SLIDES.length}`}
            aria-selected={i === active}
            className={
              i === active
                ? "pointer-events-auto h-2.5 w-6 cursor-pointer rounded-full bg-white transition-all"
                : "pointer-events-auto h-2.5 w-2.5 cursor-pointer rounded-full bg-white/40 transition-all hover:bg-white/70"
            }
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}
