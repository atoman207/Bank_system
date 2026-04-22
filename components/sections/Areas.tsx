type Region = {
  name: string;
  pref: readonly string[];
};

const regions: readonly Region[] = [
  {
    name: "北海道・東北",
    pref: ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
  },
  {
    name: "関東",
    pref: [
      "東京都",
      "神奈川県",
      "埼玉県",
      "千葉県",
      "茨城県",
      "栃木県",
      "群馬県",
    ],
  },
  {
    name: "北陸・甲信越",
    pref: ["石川県", "富山県", "福井県", "新潟県", "長野県", "山梨県"],
  },
  {
    name: "東海",
    pref: ["愛知県", "岐阜県", "静岡県", "三重県"],
  },
  {
    name: "関西",
    pref: ["大阪府", "京都府", "兵庫県", "奈良県", "滋賀県", "和歌山県"],
  },
  {
    name: "中国・四国",
    pref: [
      "岡山県",
      "広島県",
      "山口県",
      "鳥取県",
      "島根県",
      "香川県",
      "愛媛県",
      "徳島県",
      "高知県",
    ],
  },
  {
    name: "九州・沖縄",
    pref: [
      "福岡県",
      "佐賀県",
      "長崎県",
      "熊本県",
      "大分県",
      "宮崎県",
      "鹿児島県",
      "沖縄県",
    ],
  },
];

export function Areas() {
  return (
    <section
      id="areas"
      className="bg-white py-14 md:py-20 lg:py-24"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6 lg:px-0">
        <div className="text-center">
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
            AREA
          </p>
          <h2
            id="areas-heading"
            className="m-0 mt-2 text-[26px] font-bold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[32px] lg:mt-4 lg:text-[40px]"
          >
            対応エリア（全国対応）
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
            金庫の運搬・設置・修理について、北海道から沖縄まで全国へ出張対応しております。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {regions.map((r) => (
            <article
              key={r.name}
              className="border border-neutral-200 bg-white p-5 md:p-6"
            >
              <h3 className="m-0 flex items-center gap-2 text-base font-bold text-im-primary md:text-lg">
                {r.name}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5 md:gap-2">
                {r.pref.map((p) => (
                  <li
                    key={p}
                    className="rounded bg-neutral-100 px-2.5 py-1 text-[12px] font-semibold text-neutral-700 md:text-xs"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-neutral-500 md:text-sm">
          ※離島・遠方の一部地域は別途ご相談ください。金庫運搬・設置は地域を問わず全国承ります。
        </p>
      </div>
    </section>
  );
}
