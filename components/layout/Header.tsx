import Image from "next/image";
import Link from "next/link";

const TEL_DISPLAY = "076-281-6055";
const TEL_HREF = "tel:0762816055";

/** Override with `NEXT_PUBLIC_LINE_URL` in `.env.local` if the LINE entry URL changes. */
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
      width={24}
      height={24}
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

/**
 * Wide masthead: project logo (left), phone + LINE (right). No free-estimate CTA.
 */
export function Header() {
  return (
    <header
      className="sticky top-0 z-50 shrink-0 border-b border-im-border bg-white shadow-sm backdrop-blur-sm"
      aria-label="サイトヘッダー"
    >
      <div className="mx-auto flex w-[90%] max-w-full flex-col items-stretch gap-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-10 md:gap-12 lg:gap-14 md:py-3.5">
        <Link
          href="/"
          className="flex shrink-0 items-center outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-im-primary"
        >
          <Image
            src="/images/logo.png"
            alt="アイエムサービス IM Service"
            width={360}
            height={93}
            className="h-[52px] w-auto max-w-[min(260px,88vw)] object-contain object-left sm:h-[56px] md:h-[58px]"
            priority
          />
        </Link>

        <div className="flex flex-wrap items-center justify-start gap-5 sm:justify-end md:gap-7">
          <a
            href={TEL_HREF}
            className="group flex min-w-0 items-start gap-3 rounded-sm outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-im-primary"
          >
            <PhoneIcon className="mt-0.5 h-6 w-6 shrink-0 text-[#0f9b9e] transition-colors group-hover:text-[#0d7f82]" />
            <div className="min-w-0 text-left">
              <p className="m-0 text-[11px] font-semibold leading-tight text-[#0f9b9e] md:text-xs">
                お急ぎの方はお電話ください
              </p>
              <p className="m-0 mt-0.5 text-xl font-bold tabular-nums tracking-tight text-[#0d7f82] md:text-[22px]">
                {TEL_DISPLAY}
              </p>
            </div>
          </a>

          <Link
            href={lineHref}
            {...(lineLinkIsExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-im-accent bg-white px-5 py-2 text-xs font-semibold text-im-accent outline-offset-4 transition-colors hover:bg-im-accent/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-im-primary md:px-6 md:text-sm"
          >
            LINE相談
          </Link>
        </div>
      </div>
    </header>
  );
}
