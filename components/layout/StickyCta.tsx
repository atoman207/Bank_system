"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TEL_HREF = "tel:0762816055";
const lineHref =
  process.env.NEXT_PUBLIC_LINE_URL?.trim() || "https://lin.ee/WEJ3NAF";
const lineLinkIsExternal = /^https?:\/\//i.test(lineHref);

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

function LineIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width={22}
      height={22}
    >
      <path d="M12 2C6.48 2 2 5.58 2 9.99c0 3.95 3.56 7.25 8.36 7.89.33.07.77.21.88.49.1.25.06.64.03.89l-.14.85c-.04.25-.2.98.86.54 1.06-.45 5.74-3.38 7.83-5.79 1.44-1.58 2.18-3.19 2.18-4.87C22 5.58 17.52 2 12 2zM8.54 12.3H6.62c-.28 0-.51-.23-.51-.51V8.05c0-.28.23-.51.51-.51.28 0 .51.23.51.51v3.23h1.41c.28 0 .51.23.51.51 0 .28-.23.51-.51.51zm2.03-.51c0 .28-.23.51-.51.51-.28 0-.51-.23-.51-.51V8.05c0-.28.23-.51.51-.51.28 0 .51.23.51.51v3.74zm4.55 0c0 .22-.14.41-.35.48-.05.02-.11.03-.16.03-.16 0-.31-.07-.41-.2l-1.96-2.66v2.35c0 .28-.23.51-.51.51-.28 0-.51-.23-.51-.51V8.05c0-.22.14-.41.35-.48.05-.02.11-.03.16-.03.16 0 .31.07.41.2l1.96 2.66V8.05c0-.28.23-.51.51-.51.28 0 .51.23.51.51v3.74zm3.23-2.37c.28 0 .51.23.51.51 0 .28-.23.51-.51.51h-1.41v.83h1.41c.28 0 .51.23.51.51 0 .28-.23.51-.51.51h-1.92c-.28 0-.51-.23-.51-.51V8.05c0-.28.23-.51.51-.51h1.92c.28 0 .51.23.51.51 0 .28-.23.51-.51.51h-1.41v.83h1.41z" />
    </svg>
  );
}

function FormIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      width={22}
      height={22}
    >
      <path d="M4 4h16v16H4z" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 280);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="pointer-events-auto mx-auto flex w-full max-w-[640px] items-stretch gap-1 border-t border-neutral-200 bg-white px-2 pt-2 pb-[max(env(safe-area-inset-bottom,0px),8px)] shadow-[0_-8px_28px_rgba(0,0,0,0.12)]">
        <a
          href={TEL_HREF}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-2.5 text-[11px] font-bold text-[#0d7f82] transition-colors hover:bg-[#0d7f82]/5"
          aria-label="電話で相談する"
        >
          <PhoneIcon className="h-5 w-5" />
          <span>電話する</span>
        </a>
        <Link
          href={lineHref}
          {...(lineLinkIsExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-2.5 text-[11px] font-bold text-white bg-[#06c755] transition-colors hover:bg-[#05a948]"
          aria-label="LINEで相談する"
        >
          <LineIcon className="h-5 w-5" />
          <span>LINE相談</span>
        </Link>
        <a
          href="#contact"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg bg-im-accent py-2.5 text-[11px] font-bold text-white transition-colors hover:bg-[#c94a15]"
          aria-label="フォームで見積り依頼"
        >
          <FormIcon className="h-5 w-5" />
          <span>無料見積り</span>
        </a>
      </div>
    </div>
  );
}
