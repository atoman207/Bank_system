const reasons = [
  {
    num: "01",
    title: "金庫専門33年の熟練技術",
    body: "金庫メーカー出身の代表が指揮する専門チーム。2階への階段搬入、狭小路からのクレーン搬入など、一般引越業者では対応が難しい現場もプロの手順で安全・確実に対応します。",
    tags: ["階段搬入OK", "クレーン対応", "窓からの搬入"],
  },
  {
    num: "02",
    title: "全メーカー対応・開錠／修理も即日",
    body: "エーコー、クマヒラ、サガワ、ダイヤセーフ、コクヨ、ウチダなど主要メーカー全てに対応。ダイヤル忘れ・鍵紛失の開錠、部品交換、メンテナンスまで一気通貫で承ります。",
    tags: ["開錠対応", "部品交換", "点検・メンテ"],
  },
  {
    num: "03",
    title: "個人・法人ともに全国対応",
    body: "北海道から沖縄まで47都道府県に出張対応。店舗移転・オフィス増床・遺品整理・住居建替などシーンを問わず、事前下見から設置完了まで一社完結でお任せいただけます。",
    tags: ["全国出張", "法人対応", "夜間・時間外相談可"],
  },
  {
    num: "04",
    title: "下見・見積り無料／追加料金なし",
    body: "現場条件を事前にしっかり確認し、作業範囲と金額を明記した見積書をご提示。作業当日の『追加費用』は発生しません。法人様は請求書払いにも対応しています。お客様からは「全国で1番安いみたい」とお声をいただくことも多く、安心してご依頼いただけます。",
    tags: ["見積り無料", "追加費用なし", "請求書払OK"],
  },
  {
    num: "05",
    title: "養生・防犯アドバイスまで一貫",
    body: "床・壁・エレベーター内をしっかり養生して施工。設置後はアンカー固定や警備会社との連携など、防犯面のアドバイスもご提案。高単価資産を安心してお任せいただけます。",
    tags: ["養生丁寧", "アンカー固定", "防犯提案"],
  },
  {
    num: "06",
    title: "LINE・電話・フォームで即相談",
    body: "写真を送るだけで概算見積りが可能なLINE相談、緊急時の電話受付、じっくり送れるメールフォーム。ご都合に合わせて選べます。最短当日のスピード対応を心がけています。",
    tags: ["写真で見積り", "最短当日", "24h受付フォーム"],
  },
] as const;

export function Reasons() {
  return (
    <section
      id="reasons"
      className="bg-white py-14 md:py-20 lg:py-24"
      aria-labelledby="reasons-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6 lg:px-0">
        <div className="text-center">
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
            REASONS
          </p>
          <h2
            id="reasons-heading"
            className="m-0 mt-2 text-[26px] font-bold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[32px] lg:mt-4 lg:text-[40px]"
          >
            アイエムサービスが
            <br className="sm:hidden" />
            選ばれる6つの理由
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
            金庫は高単価・高重量。だからこそ、専門のプロを選ぶ価値があります。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {reasons.map((r) => (
            <article
              key={r.num}
              className="group flex h-full flex-col border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-im-accent hover:shadow-lg md:p-7 lg:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-im-accent text-sm font-bold text-white md:h-11 md:w-11 md:text-base">
                  {r.num}
                </span>
                <h3 className="m-0 text-lg font-bold leading-tight text-im-primary md:text-xl">
                  {r.title}
                </h3>
              </div>
              <p className="m-0 mt-4 text-sm leading-relaxed text-[#292929] md:text-[15px] md:leading-[1.8]">
                {r.body}
              </p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {r.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-im-secondary px-3 py-1 text-[11px] font-semibold text-im-primary md:text-xs"
                  >
                    #{t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
