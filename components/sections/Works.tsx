import Image from "next/image";

const works = [
  {
    image: "/images/mw-1.png",
    alt: "法人オフィスへの業務用金庫搬入事例",
    category: "運搬・設置",
    area: "東京都／法人様",
    title: "オフィス移転に伴う大型耐火金庫の搬入",
    body: "エレベーター不可・階段のみの4階オフィスへ、約400kgの業務用耐火金庫を専用機材で階段搬入。養生から固定まで当日完了。",
    meta: ["作業時間 3時間", "作業員 3名", "階段搬入"],
  },
  {
    image: "/images/mw-2.png",
    alt: "一般住宅への耐火金庫設置事例",
    category: "販売・設置",
    area: "石川県／個人様",
    title: "ご自宅用耐火金庫の選定と設置",
    body: "遺品整理をきっかけに家庭用耐火金庫をお探しのお客様へ、設置スペースに合わせたメーカー機種を提案。床養生のうえ静かに設置。",
    meta: ["機種提案付き", "床養生施工", "アンカー固定"],
  },
  {
    image: "/images/mw-3.png",
    alt: "金庫の開錠・ダイヤル修理事例",
    category: "開錠・修理",
    area: "富山県／個人様",
    title: "ダイヤル番号忘れの開錠・部品交換",
    body: "長年使用していない金庫のダイヤル番号不明のご依頼。型式・製造番号から調査のうえ開錠し、内部部品の点検・部品交換まで対応。",
    meta: ["型式調査", "非破壊開錠", "部品交換"],
  },
  {
    image: "/images/mw-4.png",
    alt: "全国対応の長距離搬送事例",
    category: "長距離運搬",
    area: "九州〜関東／法人様",
    title: "九州→関東間 業務用金庫の長距離搬送",
    body: "拠点統廃合に伴い、業務用金庫を九州から関東まで長距離搬送。専用固定資材で振動を抑え、内部書類・現金含めて安全搬入。",
    meta: ["長距離対応", "時間指定搬入", "法人請求払"],
  },
] as const;

export function Works() {
  return (
    <section
      id="works"
      className="bg-im-secondary py-14 md:py-20 lg:py-24"
      aria-labelledby="works-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6 lg:px-0">
        <div className="text-center">
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
            WORKS
          </p>
          <h2
            id="works-heading"
            className="m-0 mt-2 text-[26px] font-bold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[32px] lg:mt-4 lg:text-[40px]"
          >
            施工事例
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
            これまでに対応させていただいた搬入・設置・修理の一例をご紹介します。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:gap-7 lg:gap-8">
          {works.map((w) => (
            <article
              key={w.title}
              className="flex h-full flex-col overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={w.image}
                  alt={w.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                />
                <span className="absolute left-3 top-3 rounded-full bg-im-accent px-3 py-1 text-[11px] font-bold text-white shadow md:text-xs">
                  {w.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 px-5 py-5 md:px-6 md:py-6">
                <p className="m-0 text-xs font-semibold text-neutral-500 md:text-sm">
                  {w.area}
                </p>
                <h3 className="m-0 text-lg font-bold leading-tight text-im-primary md:text-xl">
                  {w.title}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-[#292929] md:text-[15px] md:leading-[1.75]">
                  {w.body}
                </p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {w.meta.map((m) => (
                    <li
                      key={m}
                      className="rounded bg-im-secondary px-2.5 py-1 text-[11px] font-semibold text-im-primary md:text-xs"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href="#contact"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-im-primary px-8 py-3 text-sm font-bold text-white shadow transition-colors hover:bg-[#081a2f] md:text-base"
          >
            ▶ 同様の事例をご相談する
          </a>
        </div>
      </div>
    </section>
  );
}
