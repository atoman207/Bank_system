import Image from "next/image";

const testimonials = [
  {
    image: "/images/voice-1.jpg",
    alt: "お客様のイラスト１",
    w: 308,
    h: 309,
    title: "迅速で丁寧な対応に大変満足",
    subtitle: "S様自宅搬入",
    body: "今回初めてこちらの運送サービスを利用しましたが、迅速な対応と丁寧な搬入に大変満足しています。自宅の床が傷つかないかとドキドキでしたが、全然大丈夫でした！",
  },
  {
    image: "/images/voice-2.jpg",
    alt: "お客様のイラスト２",
    w: 313,
    h: 313,
    title: "特殊な運送でも安心",
    subtitle: "法人業者様",
    body: "私達では特殊な運送になり、ノウハウがないため、いつもお願いしております。 時間通りで仕事が早い！ 安心してお願いできます。",
  },
  {
    image: "/images/voice-3.jpg",
    alt: "お客様のイラスト３",
    w: 312,
    h: 312,
    title: "価格と専門性が魅力",
    subtitle: "一般法人株式会社様",
    body: "他の金庫運搬会社と比較しましたが、価格もリーズナブルで運び方も安心しました。あと、金庫の運送業者が中々見つからないので専属で長年やっている知識が魅力と感じたのも一つの要因ですかね？ また利用させていただきます。",
  },
  {
    image: "/images/voice-4.jpg",
    alt: "お客様のイラスト４",
    w: 311,
    h: 311,
    title: "柔軟な対応に感謝",
    subtitle: "大手企業M様",
    body: "営業時間後の時間指定にも対応していただいたり、希望していた場所に設置していただき本当に感謝しております。",
  },
] as const;

function VoiceCard({
  image,
  alt,
  w,
  h,
  title,
  subtitle,
  body,
}: (typeof testimonials)[number]) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-white px-6 py-8 shadow-sm md:px-8 md:py-9 lg:px-10 lg:py-10">
      <div className="mx-auto flex h-[7.5rem] w-[7.5rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e8eaee] md:h-[8.5rem] md:w-[8.5rem]">
        <Image
          src={image}
          alt={alt}
          width={w}
          height={h}
          className="h-full w-full object-cover object-top"
          sizes="(max-width: 768px) 33vw, 170px"
        />
      </div>
      <h3 className="m-0 mt-5 text-center text-lg font-bold leading-snug text-im-accent md:mt-6 md:text-xl lg:text-2xl">
        {title}
      </h3>
      <p className="m-0 mt-2 text-center text-sm font-normal text-im-text md:mt-2.5 md:text-base lg:text-lg">
        {subtitle}
      </p>
      <div
        className="my-5 h-px w-full shrink-0 bg-im-border md:my-6"
        aria-hidden
      />
      <p className="m-0 text-left text-base font-normal leading-relaxed text-[#292929] md:text-lg lg:text-xl">
        {body}
      </p>
    </article>
  );
}

export function Voice() {
  return (
    <section
      id="voice"
      className="bg-im-secondary pb-14 pt-14 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20"
      aria-labelledby="voice-heading"
    >
      <h2 id="voice-heading" className="sr-only">
        お客様の声
      </h2>
      <div className="mx-auto max-w-[1100px] px-4 pb-10 text-center md:px-6 md:pb-12 lg:px-0">
        <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
          VOICE
        </p>
        <h2 className="m-0 mt-2 text-[28px] font-semibold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[34px] lg:mt-4 lg:text-[40px]">
          お客様の声
        </h2>
      </div>
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 px-4 pb-14 md:grid-cols-2 md:gap-7 md:px-6 md:pb-16 lg:gap-8 lg:px-0 lg:pb-20">
        {testimonials.map((t) => (
          <VoiceCard key={t.title} {...t} />
        ))}
      </div>
    </section>
  );
}
