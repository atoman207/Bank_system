const faqItems = [
  {
    q: "金庫を2階にあげたいのですが可能ですか？",
    a: "対象商品の重量や大きさにもよりますが、階段または窓からの搬入は可能です。下見の必要な場合があります。",
  },
  {
    q: "金庫が開かないのですが…",
    a: "商品にもよりますが、型式・製造番号・鍵番号がわかれば対応できるケースもあります。開錠後、部品を交換して修理も可能です。",
  },
  {
    q: "金庫はどのくらい持ちますか？",
    a: "協会などにより耐火年数は20年と言われておりますが、状況により使えるケースがほとんどです。",
  },
  {
    q: "盗難保険はありますか？",
    a: "商品により対応しているものがございます。",
  },
  {
    q: "盗難防止などの対策はありますか？",
    a: "アンカーボルトでの固定やアルソックなどの警備会社との連携で防犯対策は可能です。",
  },
] as const;

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-white pb-16 pt-14 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="sr-only">
        よくあるご質問
      </h2>
      <div className="mx-auto max-w-[1100px] px-4 pb-10 text-center md:px-6 md:pb-12 lg:px-0">
        <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
          FAQ
        </p>
        <h2 className="m-0 mt-2 text-[28px] font-semibold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[34px] lg:mt-4 lg:text-[40px]">
          よくあるご質問
        </h2>
      </div>
      <div className="mx-auto flex max-w-[1100px] flex-col gap-5 px-4 md:gap-6 md:px-6 lg:gap-6 lg:px-0">
        {faqItems.map((item, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-[10px] border border-[#333333] bg-white"
          >
            <h3 className="m-0 bg-im-primary px-5 py-5 text-left text-base font-bold leading-snug text-white md:px-8 md:py-6 md:text-lg lg:text-xl">
              Q. {item.q}
            </h3>
            <div className="border-t-0 bg-white px-5 py-5 text-left md:px-8 md:py-6">
              <p className="m-0 text-base font-normal leading-relaxed text-[#292929] md:text-lg lg:text-xl">
                <span className="font-medium text-[#292929]">A. </span>
                {item.a}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
