"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 3500,
    unit: "件+",
    label: "累計搬入実績",
    sub: "法人・個人問わず対応",
    step: 100,
  },
  {
    value: 30,
    unit: "年",
    label: "創業からの実績",
    sub: "金庫ひと筋のノウハウ",
    step: 1,
  },
  {
    value: 47,
    unit: "都道府県",
    label: "対応エリア",
    sub: "全国出張・遠方対応OK",
    step: 1,
  },
  {
    value: "最短当日",
    unit: "",
    label: "お見積り回答",
    sub: "LINE・電話・フォーム対応",
  },
] as const;

function AnimatedStatValue({ target, step }: { target: number; step: number }) {
  const [current, setCurrent] = useState(0);
  const [animationCycle, setAnimationCycle] = useState(0);
  const triggerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = triggerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrent(0);
          setAnimationCycle((prev) => prev + 1);
        } else {
          setCurrent(0);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (animationCycle === 0) return;

    const totalSteps = Math.ceil(target / step);
    const intervalMs = Math.max(16, Math.floor(900 / totalSteps));

    const timer = window.setInterval(() => {
      setCurrent((prev) => {
        if (prev >= target) {
          window.clearInterval(timer);
          return target;
        }
        return Math.min(prev + step, target);
      });
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [animationCycle, step, target]);

  return <span ref={triggerRef}>{current.toLocaleString("ja-JP")}</span>;
}

export function Stats() {
  return (
    <section
      id="stats"
      className="bg-im-primary py-14 text-white md:py-16 lg:py-20"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6 lg:px-0">
        <div className="text-center">
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
            TRUST
          </p>
          <h2
            id="stats-heading"
            className="m-0 mt-2 text-[24px] font-bold leading-tight tracking-tight md:mt-3 md:text-[30px] lg:mt-4 lg:text-[36px]"
          >
            数字で見るアイエムサービス
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            高単価の金庫運搬・設置で、選ばれ続ける理由がここにあります。
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center border border-white/15 bg-white/5 px-4 py-6 text-center backdrop-blur-sm md:py-8"
            >
              <dt className="order-2 mt-2 text-xs font-semibold text-white/80 md:text-sm">
                {s.label}
              </dt>
              <dd className="order-1 m-0">
                <span className="block text-[32px] font-extrabold leading-none text-im-accent md:text-[44px] lg:text-[52px]">
                  {typeof s.value === "number" ? (
                    <AnimatedStatValue target={s.value} step={s.step} />
                  ) : (
                    s.value
                  )}
                  <span className="ml-0.5 text-[18px] font-bold md:text-[22px]">
                    {s.unit}
                  </span>
                </span>
              </dd>
              <p className="order-3 m-0 mt-2 text-[11px] leading-tight text-white/70 md:text-xs">
                {s.sub}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
