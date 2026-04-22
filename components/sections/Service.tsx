import Image from "next/image";
import type { ReactNode } from "react";

function SectionHeading() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-12 pt-16 text-center md:px-6 md:pb-16 md:pt-20 lg:px-0 lg:pb-20 lg:pt-24">
      <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
        SERVICE
      </p>
      <h2 className="m-0 mt-2 text-[28px] font-semibold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[34px] lg:mt-4 lg:text-[40px]">
        サービス紹介
      </h2>
    </div>
  );
}

const rowTitleClass =
  "m-0 text-left text-[28px] font-semibold leading-[1.25] text-im-primary md:text-[34px] lg:text-[40px] lg:leading-[1.2]";
const rowBodyClass =
  "mt-4 text-left text-base font-normal leading-[1.75] text-[#292929] md:mt-5 md:text-lg lg:mt-6 lg:text-[22px] lg:leading-[1.7]";

type ServiceRowProps = {
  /** When true, text column is first (left on `md+`, top on small screens). */
  textFirstDesktop: boolean;
  title: ReactNode;
  body: ReactNode;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
  };
};

/**
 * Zigzag: ~50/50 columns; `order` keeps text↔image order on all breakpoints.
 */
function ServiceRow({ textFirstDesktop, title, body, image }: ServiceRowProps) {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10 md:px-6 md:py-12 lg:px-0 lg:py-14">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-8 lg:gap-12">
        <div
          className={`flex w-full flex-col justify-center md:w-1/2 md:min-w-0 md:max-w-[50%] ${
            textFirstDesktop ? "order-1 md:pr-2 lg:pr-6" : "order-2 md:pl-2 lg:pl-6"
          }`}
        >
          <h3 className={rowTitleClass}>{title}</h3>
          <div className={rowBodyClass}>{body}</div>
        </div>
        <div
          className={`w-full shrink-0 md:w-1/2 md:min-w-0 md:max-w-[50%] ${
            textFirstDesktop ? "order-2 md:pl-2 lg:pl-4" : "order-1 md:pr-2 lg:pr-4"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={image.priority}
            className="h-auto w-full align-middle object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}

/** “対応メーカー一覧” — card with dark header ~⅓ height, soft shadow, centered body copy. */
function ManufacturerList() {
  return (
    <div className="mx-auto w-full max-w-[min(100%,42rem)] sm:max-w-[min(100%,46rem)] md:max-w-[min(100%,52rem)]">
      <div
        className="flex min-h-[12.5rem] flex-col overflow-hidden rounded-[10px] border border-[#1a2d42] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_28px_rgba(0,0,0,0.08)] md:min-h-[13.5rem] md:rounded-[12px] lg:min-h-[14rem]"
      >
        <div className="flex shrink-0 flex-col items-center justify-center bg-[#0a1628] px-6 py-6 sm:px-8 sm:py-7 md:min-h-[5rem] md:py-7 lg:min-h-[5.5rem]">
          <h3 className="m-0 text-center text-base font-bold leading-snug text-white md:text-lg lg:text-xl">
            対応メーカー一覧
          </h3>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-8 text-center sm:px-10 sm:py-9 md:px-12 md:py-10 lg:px-14 lg:py-11">
          <p className="m-0 max-w-full text-base font-normal leading-relaxed tracking-tight text-neutral-700 md:text-lg lg:text-xl">
            エーコー / クマヒラ / サガワ / ダイヤセーフ / コクヨ / ウチダ / プラス
          </p>
          <p className="m-0 mt-3 max-w-full text-base font-normal leading-relaxed tracking-tight text-neutral-700 sm:mt-3.5 md:mt-4 md:text-lg lg:text-xl">
            コンゴー / キング / ライオン / トヨセット / イトーキ / オカムラ / ナイキ
          </p>
        </div>
      </div>
    </div>
  );
}

export function Service() {
  return (
    <section id="service" className="bg-white" aria-labelledby="service-heading">
      <h2 id="service-heading" className="sr-only">
        サービス紹介
      </h2>
      <SectionHeading />

      <>
        <ServiceRow
          textFirstDesktop
          title={
            <>
              金庫・耐火庫の
              <br />
              運搬・設置
            </>
          }
          body={
            <>
              <p className="mb-0">「店舗の移転でもう一度使いたい…」</p>
              <p className="mb-0">「２階にあるが、人力ではおろせない…」</p>
              <p className="mb-0">「新店舗が決まり、大事なものを耐火金庫にしまいたい」</p>
              <p className="mb-0">「最近の治安が気になる」</p>
              <p className="mb-0">などのお悩みに対応！</p>
              <p className="mb-0">プロの技術で安全に搬送いたします。</p>
            </>
          }
          image={{
            src: "/images/service-crane.png",
            alt: "金庫をクレーンでトラックに運ぶ作業風景２",
            width: 640,
            height: 430,
            priority: true,
          }}
        />

        <ServiceRow
          textFirstDesktop={false}
          title={<>金庫の販売</>}
          body={
            <p className="mb-0">
              エーコー、クマヒラ、サガワなど多数のメーカーを取り扱っています。
              <br />
              用途に合わせた最適な金庫をご提案いたします。
            </p>
          }
          image={{
            src: "/images/service-woman.png",
            alt: "おすすめする女性",
            width: 640,
            height: 430,
          }}
        />

        <ServiceRow
          textFirstDesktop
          title={
            <>
              金庫の修理
              <br />
              ・メンテナンス
            </>
          }
          body={
            <>
              <p className="mb-0">「ダイヤル番号を忘れた」</p>
              <p className="mb-0">「鍵が壊れて回らない」</p>
              <p className="mb-0">「開きにくくなった」</p>
              <p className="mb-0">など、修理・メンテナンスもお任せください！</p>
            </>
          }
          image={{
            src: "/images/service-dial.png",
            alt: "金庫のダイヤル",
            width: 640,
            height: 430,
          }}
        />
      </>

      <div className="mx-auto max-w-[1100px] border-t border-neutral-200 px-4 pb-20 pt-16 md:px-6 md:pt-20 lg:px-0">
        <ManufacturerList />
      </div>
    </section>
  );
}
