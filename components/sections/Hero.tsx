"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CtaButton } from "@/components/ui/CtaButton";

/**
 * Files are expected at `public/images/{prefix}-{n}.{ext}` (e.g. mw-1.jpg).
 * Defaults match MW-style naming; override if your files use mv- or .png:
 * `NEXT_PUBLIC_MV_SLIDE_PREFIX=mv` and/or `NEXT_PUBLIC_MV_SLIDE_EXT=jpg`
 */
const MV_SLIDE_PREFIX =
  process.env.NEXT_PUBLIC_MV_SLIDE_PREFIX?.replace(/[^a-z0-9-]/gi, "") ||
  "mw";
const MV_SLIDE_EXT =
  process.env.NEXT_PUBLIC_MV_SLIDE_EXT?.replace(/^\./, "").replace(/[^a-z0-9]/gi, "") ||
  "png";

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

const AUTO_INTERVAL_MS = 3000;

/**
 * Full-viewport MV slideshow (4 panels). Dots only change slides; copy and CTAs stay separate.
 * Auto-advance every 3s (paused on hover and when reduced motion is requested).
 */
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
      </div>

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1100px] flex-1 flex-col justify-center px-3 md:px-4 lg:px-0">
        <p className="sr-only" aria-live={reduceMotion ? "off" : "polite"}>
          {MV_SLIDES[active].alt}
        </p>

        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-stretch lg:mx-0">
          <div className="mb-3 w-full max-w-[min(100%,29rem)] sm:mb-4 sm:max-w-[min(100%,32rem)] lg:mb-4 lg:max-w-[min(100%,37rem)]">
            <article className="box-border w-full border border-im-border bg-white px-5 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
              <p className="company-name-sp m-0 mb-3 text-center lg:mb-5 lg:text-left">
                <span className="jp-name-sp inline-block w-full text-[clamp(0.56rem,0.28vw+0.48rem,0.7rem)]">
                  アイエムサービス
                </span>
                <br />
                <span className="en-name-sp inline-block w-full text-[clamp(0.92rem,0.88vw+0.6rem,1.32rem)] leading-tight">
                  <strong>IM Service</strong>
                </span>
              </p>

              <h1 className="m-0 text-center text-[clamp(1.4rem,1.76vw+0.88rem,2.68rem)] font-semibold leading-[1.1] text-im-primary lg:text-left lg:leading-[1.08]">
                金庫・耐火庫<span className="small-no">の</span>
                <br />
                <span className="small-text">運送・運搬・設置</span>
                <br />
                <span className="small-omakase">ならお任せ！</span>
              </h1>

              <div className="mb-0 mt-4 w-full bg-im-primary lg:mt-5">
                <p className="m-0 py-2 text-center text-[clamp(0.8rem,0.72vw+0.52rem,1.15rem)] font-normal leading-snug text-white lg:py-2.5">
                  全国どこでも対応いたします。
                </p>
              </div>
            </article>
          </div>

          <div className="mb-5 flex w-full max-w-[min(100%,29rem)] flex-col items-stretch gap-4 sm:max-w-[min(100%,32rem)] sm:flex-row sm:flex-wrap sm:items-end sm:justify-start sm:gap-4 lg:mb-6 lg:max-w-[min(100%,37rem)]">
            <CtaButton className="w-full justify-center sm:w-auto" href="#contact">
              今すぐ相談する
            </CtaButton>
            <a
              href="#content"
              className="inline-flex w-full items-center justify-center rounded-[38px] border-2 border-white bg-white/10 px-8 py-3 text-center text-[clamp(1rem,0.5vw+0.85rem,1.25rem)] font-medium text-white backdrop-blur-[2px] transition-colors duration-300 hover:border-white hover:bg-white hover:text-im-primary max-sm:rounded-[20px] max-sm:px-6 max-sm:py-3 sm:w-auto lg:rounded-[38px] lg:px-10 lg:py-[0.9rem]"
            >
              サービス紹介
            </a>
          </div>

          <div className="flex w-full max-w-[min(100%,29rem)] justify-end sm:max-w-[min(100%,32rem)] lg:max-w-[min(100%,37rem)]">
            <div
              className="flex shrink-0 gap-2"
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
                      ? "h-2.5 w-2.5 shrink-0 cursor-pointer rounded-full bg-white"
                      : "h-2.5 w-2.5 shrink-0 cursor-pointer rounded-full bg-white/40 hover:bg-white/70"
                  }
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
