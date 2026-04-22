import Image from "next/image";

export function Message() {
  return (
    <section
      id="message"
      className="bg-[#E9EDF2] py-14 md:py-20 lg:py-24"
      aria-labelledby="message-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6 lg:px-0">
        <div className="text-center">
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
            MESSAGE
          </p>
          <h2
            id="message-heading"
            className="m-0 mt-2 text-[26px] font-bold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[32px] lg:mt-4 lg:text-[40px]"
          >
            代表からのご挨拶
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-stretch gap-8 md:mt-12 md:flex-row md:items-center md:gap-12 lg:gap-16">
          <div className="mx-auto flex w-full shrink-0 justify-center md:mx-0 md:w-auto">
            <div className="relative bg-white p-2 shadow-md">
              <div className="relative aspect-square w-[min(100%,220px)] overflow-hidden sm:w-[240px] md:w-[240px] lg:w-[260px]">
                <Image
                  src="/images/representative.png"
                  alt="株式会社IM 代表"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 240px, 260px"
                />
              </div>
              <p className="m-0 mt-3 text-center text-xs font-semibold text-im-primary md:text-sm">
                株式会社IM 代表
              </p>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center text-left">
            <blockquote className="m-0 border-l-4 border-im-accent pl-5 text-base font-normal leading-[1.85] text-[#292929] md:pl-6 md:text-lg md:leading-[1.9] lg:text-[20px] lg:leading-[2]">
              <p className="m-0">
                金庫メーカーで10年間さまざまな知識を学び、独立して創業30年。
              </p>
              <p className="m-0 mt-4">
                「金庫を安全に、確実に、お客様の想いごとお運びする」
                <br />
                これがアイエムサービスの信条です。
              </p>
              <p className="m-0 mt-4">
                ご家庭の小さな耐火金庫から、法人様の大型業務用金庫まで、
                丁寧かつスピーディーに対応いたします。
                なんでもお気軽にお問い合わせください。
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
