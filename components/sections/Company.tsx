const companyRows = [
  { label: "会社名", value: "株式会社IM" },
  { label: "所在地", value: "〒924-0017 石川県白山市宮永町53" },
  { label: "電話番号", value: "076-281-6055" },
  { label: "メールアドレス", value: "info@imservice.xsrv.jp" },
  { label: "営業時間", value: "8：00～18：00（不定休）" },
  { label: "対応エリア", value: "全国対応" },
] as const;

export function Company() {
  return (
    <section
      id="company"
      className="pb-16 pt-14 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20"
      aria-labelledby="company-heading"
    >
      <h2 id="company-heading" className="sr-only">
        会社概要
      </h2>
      <div className="mx-auto max-w-[1100px] px-4 pb-10 text-center md:px-6 md:pb-12 lg:px-0">
        <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
          COMPANY
        </p>
        <h2 className="m-0 mt-2 text-[28px] font-semibold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[34px] lg:mt-4 lg:text-[40px]">
          会社概要
        </h2>
      </div>

      <div className="mx-auto max-w-[880px] px-4 md:px-6 lg:px-0">
        <div className="bg-white px-6 py-9 shadow-[0_4px_20px_rgba(0,0,0,0.08),0_12px_40px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] md:px-10 md:py-10 lg:px-12 lg:py-12">
          <dl className="m-0 space-y-0">
            {companyRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 gap-2 py-4 text-left md:grid-cols-[minmax(10.5rem,11.5rem)_1fr] md:gap-x-10 md:gap-y-0 md:py-5 ${
                  i < companyRows.length - 1 ? "border-b border-neutral-100" : ""
                }`}
              >
                <dt className="text-[15px] font-semibold leading-snug text-neutral-600 md:text-base lg:text-lg">
                  {row.label}
                </dt>
                <dd className="m-0 text-[15px] font-normal leading-relaxed text-neutral-600 md:text-base lg:text-lg">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
