import Image from "next/image";

const testimonials = [
  {
    image: "/images/voice-1.jpg",
    alt: "お客様のイラスト１",
    w: 308,
    h: 309,
    title: "迅速で丁寧な対応に大変満足",
    subtitle: "S様／ご自宅搬入（石川県）",
    rating: 5,
    body: "初めてこちらの運送サービスを利用しましたが、迅速な対応と丁寧な搬入に大変満足しています。自宅の床が傷つかないかとドキドキでしたが、養生もしっかりで安心でした！",
  },
  {
    image: "/images/voice-2.jpg",
    alt: "お客様のイラスト２",
    w: 313,
    h: 313,
    title: "特殊な運送でも安心",
    subtitle: "法人業者様／運送会社",
    rating: 5,
    body: "私達では特殊な運送でノウハウがないため、いつもお願いしております。時間通りで仕事が早く、安心してお任せできます。",
  },
  {
    image: "/images/voice-3.jpg",
    alt: "お客様のイラスト３",
    w: 312,
    h: 312,
    title: "価格と専門性が魅力",
    subtitle: "株式会社様／事務所移転",
    rating: 5,
    body: "他の金庫運搬会社と比較しましたが、価格もリーズナブルで運び方も安心しました。金庫専門で長年やっている知識が魅力。また利用させていただきます。",
  },
  {
    image: "/images/voice-4.jpg",
    alt: "お客様のイラスト４",
    w: 311,
    h: 311,
    title: "柔軟な対応に感謝",
    subtitle: "大手企業M様／本社移設",
    rating: 5,
    body: "営業時間後の時間指定にも対応していただき、希望していた場所に設置していただき本当に感謝しております。細かい要望もすべて聞いてくださいました。",
  },
] as const;

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`評価 ${value} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < value ? "#f5a623" : "#e5e7eb"}
          className="h-4 w-4"
          aria-hidden
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

function VoiceCard({
  image,
  alt,
  w,
  h,
  title,
  subtitle,
  rating,
  body,
}: (typeof testimonials)[number]) {
  return (
    <article className="flex h-full flex-col bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7 lg:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e8eaee] sm:h-20 sm:w-20">
          <Image
            src={image}
            alt={alt}
            width={w}
            height={h}
            className="h-full w-full object-cover object-top"
            sizes="80px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <StarRating value={rating} />
          <h3 className="m-0 mt-1 text-base font-bold leading-tight text-im-accent md:text-lg">
            {title}
          </h3>
          <p className="m-0 mt-1 text-xs font-normal text-neutral-500 md:text-sm">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="my-4 h-px w-full shrink-0 bg-neutral-200" aria-hidden />
      <p className="m-0 text-sm leading-relaxed text-[#292929] md:text-base md:leading-[1.85]">
        「{body}」
      </p>
    </article>
  );
}

export function Voice() {
  return (
    <section
      id="voice"
      className="bg-im-secondary py-14 md:py-20 lg:py-24"
      aria-labelledby="voice-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6 lg:px-0">
        <div className="text-center">
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
            VOICE
          </p>
          <h2
            id="voice-heading"
            className="m-0 mt-2 text-[26px] font-bold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[32px] lg:mt-4 lg:text-[40px]"
          >
            お客様の声
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-700 md:text-base">
            累計15,000件を超えるお客様からのご評価をいただいています。
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6 lg:gap-7">
          {testimonials.map((t) => (
            <VoiceCard key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
