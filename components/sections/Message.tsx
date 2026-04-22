import Image from "next/image";

export function Message() {
  return (
    <section
      id="message"
      className="bg-[#E9EDF2] pb-16 pt-14 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20"
      aria-labelledby="message-heading"
    >
      <h2 id="message-heading" className="sr-only">
        代表からの一言
      </h2>
      <div className="mx-auto max-w-[1100px] px-4 pb-10 text-center md:px-6 md:pb-12 lg:px-0">
        <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
          MESSAGE
        </p>
        <h2 className="m-0 mt-2 text-[28px] font-semibold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[34px] lg:mt-4 lg:text-[40px]">
          代表からの一言
        </h2>
      </div>
      <div className="mx-auto flex max-w-[1100px] flex-col items-stretch gap-8 px-4 md:flex-row md:items-center md:gap-12 md:px-6 lg:gap-14 lg:px-0">
        <div className="mx-auto flex w-full shrink-0 justify-center md:mx-0 md:w-auto md:justify-start">
          <div className="border border-white bg-white p-px shadow-none">
            <div className="relative aspect-square w-[min(100%,220px)] overflow-hidden sm:w-[min(100%,240px)] md:w-[220px] lg:w-[240px]">
              <Image
                src="/images/representative.png"
                alt="代表者の顔写真"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 220px, 240px"
              />
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center text-left">
          <p className="m-0 text-base font-normal leading-[1.7] text-[#292929] md:text-lg md:leading-[1.75] lg:text-[22px] lg:leading-[1.8]">
            金庫メーカーで10年色々な知識を学び、創業30年になります！
            <br />
            作業も丁寧かつスピーディーにおこないます。
            <br />
            なんでもお気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}
