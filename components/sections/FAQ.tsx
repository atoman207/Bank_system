"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "金庫を2階にあげたいのですが可能ですか？",
    a: "対象商品の重量や大きさにもよりますが、階段または窓からの搬入が可能です。階段幅・曲がり角・床強度を事前に確認する必要があるため、写真を送っていただくか現地下見にて対応方法をご提案いたします。",
  },
  {
    q: "金庫が開かなくなりました。修理は可能ですか？",
    a: "型式・製造番号・鍵番号（ダイヤル番号）がわかればほとんどの場合で対応可能です。不明な場合も、現物確認のうえ開錠できるケースがあります。開錠後は部品交換・メンテナンスまで一貫対応します。",
  },
  {
    q: "見積りに費用はかかりますか？",
    a: "お見積りは完全無料です。現地下見が必要な場合も、原則として費用は頂戴しておりません。LINEで写真をお送りいただければ概算のお見積りも可能です。",
  },
  {
    q: "全国どこでも対応していますか？",
    a: "はい、北海道から沖縄まで47都道府県に出張対応しております。石川県・富山県・福井県など北陸エリアは特に迅速な対応が可能です。離島・遠方の一部は別途ご相談ください。",
  },
  {
    q: "法人からの発注・請求書払いには対応していますか？",
    a: "はい、法人様のご発注・請求書払いに対応しております。オフィス移転・拠点統廃合・店舗リニューアル等、大型案件のご相談も歓迎です。御見積書・請求書等の書類発行もお任せください。",
  },
  {
    q: "依頼から対応までどれくらいかかりますか？",
    a: "地域・現場状況・ご希望日程にもよりますが、最短当日〜3日程度で対応可能なケースも多数あります。お急ぎの方はお電話（076-281-6055）までご連絡ください。",
  },
  {
    q: "金庫の寿命はどのくらいですか？",
    a: "日本金庫協会によれば耐火年数は約20年とされていますが、状態が良ければそれ以上ご利用いただけるケースが大半です。内部の点検・メンテナンスで長く安全にお使いいただけます。",
  },
  {
    q: "盗難保険や防犯対策は用意していますか？",
    a: "商品によっては盗難保険付きのものがございます。また、アンカーボルト固定やアルソックなどの警備会社との連携による防犯強化もご提案可能です。",
  },
  {
    q: "古い金庫の処分（撤去）だけでもお願いできますか？",
    a: "もちろん対応可能です。搬出・処分・産廃処理まで一貫で承ります。買替え時の下取り・引取りもご相談ください。",
  },
  {
    q: "営業時間外や土日祝の対応は可能ですか？",
    a: "基本営業時間は8:00〜18:00（不定休）ですが、法人様の営業終了後・土日祝日の搬入にも柔軟に対応しております。事前にご相談ください。",
  },
] as const;

function ChevronIcon({
  className,
  open,
}: {
  className?: string;
  open: boolean;
}) {
  return (
    <svg
      className={`${className} transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      width={20}
      height={20}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-white py-14 md:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[900px] px-4 md:px-6 lg:px-0">
        <div className="text-center">
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="m-0 mt-2 text-[26px] font-bold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[32px] lg:mt-4 lg:text-[40px]"
          >
            よくあるご質問
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
            お問い合わせの前に、よく頂くご質問をまとめました。
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 md:mt-12 md:gap-4">
          {faqItems.map((item, index) => {
            const open = openIdx === index;
            return (
              <article
                key={index}
                className="overflow-hidden border border-neutral-200 bg-white transition-colors hover:border-im-primary"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIdx(open ? null : index)}
                  className="flex w-full items-center justify-between gap-3 bg-im-primary px-4 py-4 text-left text-white md:px-6 md:py-5"
                >
                  <h3 className="m-0 flex items-start gap-3 text-[15px] font-bold leading-snug md:text-lg">
                    <span className="shrink-0 font-black text-im-accent">
                      Q.
                    </span>
                    <span>{item.q}</span>
                  </h3>
                  <ChevronIcon
                    className="shrink-0 text-white"
                    open={open}
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  hidden={!open}
                  className="bg-white px-4 py-4 md:px-6 md:py-5"
                >
                  <p className="m-0 flex items-start gap-3 text-[14px] leading-relaxed text-[#292929] md:text-[15px] md:leading-[1.8]">
                    <span className="shrink-0 font-bold text-im-accent">
                      A.
                    </span>
                    <span>{item.a}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
