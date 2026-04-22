import Image from "next/image";
import type { ReactNode } from "react";

function SectionHeading() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-10 pt-14 text-center md:px-6 md:pb-14 md:pt-20 lg:px-0 lg:pb-16 lg:pt-24">
      <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
        SERVICE
      </p>
      <h2 className="m-0 mt-2 text-[26px] font-bold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[32px] lg:mt-4 lg:text-[40px]">
        サービス一覧
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
        金庫・耐火庫に関する「運搬／設置／販売／修理」すべてをワンストップで承ります。
      </p>
    </div>
  );
}

type ServiceRowProps = {
  id: string;
  tag: string;
  title: ReactNode;
  body: ReactNode;
  bullets: readonly string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
  };
  reversed?: boolean;
};

function ServiceRow({
  id,
  tag,
  title,
  body,
  bullets,
  image,
  reversed = false,
}: ServiceRowProps) {
  return (
    <div id={id} className="mx-auto max-w-[1100px] px-4 py-8 md:px-6 md:py-12 lg:px-0 lg:py-14">
      <div
        className={`flex flex-col gap-7 md:items-center md:gap-10 ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="w-full shrink-0 md:w-1/2">
          <div className="overflow-hidden shadow-md">
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
        <div className="flex w-full flex-col justify-center md:w-1/2">
          <span className="inline-flex w-fit items-center rounded-full bg-im-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-im-accent md:text-xs">
            {tag}
          </span>
          <h3 className="m-0 mt-3 text-[24px] font-bold leading-tight text-im-primary md:text-[28px] lg:text-[34px]">
            {title}
          </h3>
          <div className="mt-4 text-sm leading-relaxed text-[#292929] md:mt-5 md:text-base md:leading-[1.85] lg:text-lg">
            {body}
          </div>
          <ul className="mt-5 grid grid-cols-1 gap-2 text-sm font-semibold text-im-primary sm:grid-cols-2 md:text-base">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 rounded-lg bg-im-secondary/60 px-3 py-2"
              >
                <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-im-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-im-accent underline-offset-4 hover:underline md:text-base"
          >
            ▶ このサービスを相談する
          </a>
        </div>
      </div>
    </div>
  );
}

function ManufacturerList() {
  return (
    <div className="mx-auto w-full max-w-[min(100%,44rem)] sm:max-w-[min(100%,50rem)] md:max-w-[min(100%,56rem)]">
      <div className="flex flex-col overflow-hidden border border-[#1a2d42] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_28px_rgba(0,0,0,0.08)]">
        <div className="flex shrink-0 flex-col items-center justify-center bg-[#0a1628] px-6 py-5 sm:py-6">
          <h3 className="m-0 text-center text-base font-bold leading-snug text-white md:text-lg lg:text-xl">
            対応メーカー一覧（主要15社以上）
          </h3>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center bg-white px-5 py-6 text-center sm:px-10 md:py-8 lg:py-10">
          <p className="m-0 text-sm font-normal leading-relaxed text-neutral-700 md:text-base lg:text-lg">
            エーコー ／ クマヒラ ／ サガワ ／ ダイヤセーフ ／ コクヨ ／ ウチダ ／ プラス
          </p>
          <p className="m-0 mt-2 text-sm font-normal leading-relaxed text-neutral-700 md:mt-3 md:text-base lg:text-lg">
            コンゴー ／ キング ／ ライオン ／ トヨセット ／ イトーキ ／ オカムラ ／ ナイキ
          </p>
          <p className="m-0 mt-4 text-xs leading-relaxed text-neutral-500 md:text-sm">
            ※上記以外のメーカー・輸入金庫もお気軽にご相談ください。
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
        サービス一覧
      </h2>
      <SectionHeading />

      <ServiceRow
        id="service-transport"
        tag="01 / Transport"
        title={
          <>
            金庫・耐火庫の
            <br className="sm:hidden" />
            運搬・搬入・設置
          </>
        }
        body={
          <>
            <p className="m-0">
              「店舗移転でもう一度使いたい」「2階にあるが人力ではおろせない」
              「新店舗の大事なものを耐火金庫にしまいたい」
              そんなお悩みを、金庫専門のプロチームが安全・確実に解決します。
            </p>
          </>
        }
        bullets={[
          "階段／窓／クレーン搬入対応",
          "養生・アンカー固定まで一貫",
          "法人移転・大型案件OK",
          "全国出張対応",
        ]}
        image={{
          src: "/images/service-crane.png",
          alt: "クレーンで金庫を積み込む運搬作業",
          width: 640,
          height: 430,
          priority: true,
        }}
      />

      <ServiceRow
        id="service-sales"
        tag="02 / Sales"
        title="金庫の販売・機種選定"
        body={
          <p className="m-0">
            エーコー／クマヒラ／サガワなど主要メーカーを多数取り扱い。
            家庭用から業務用、耐火／防盗／手提げ式まで、用途・設置場所に合わせた最適な機種をご提案します。
          </p>
        }
        bullets={[
          "耐火金庫・防盗金庫",
          "家庭用〜業務用まで",
          "下取り・買替えOK",
          "設置込みでお任せ",
        ]}
        image={{
          src: "/images/service-woman.png",
          alt: "金庫の機種提案を行うスタッフ",
          width: 640,
          height: 430,
        }}
        reversed
      />

      <ServiceRow
        id="service-repair"
        tag="03 / Repair"
        title={
          <>
            金庫の修理・
            <br className="sm:hidden" />
            開錠・メンテナンス
          </>
        }
        body={
          <>
            <p className="m-0">
              「ダイヤル番号を忘れた」「鍵が壊れて回らない」「開きにくい」
              など、あらゆる金庫トラブルに対応。非破壊での開錠から部品交換、定期メンテナンスまでお任せください。
            </p>
          </>
        }
        bullets={[
          "ダイヤル忘れ・鍵紛失",
          "部品交換／内部修理",
          "非破壊開錠対応",
          "点検・メンテナンス",
        ]}
        image={{
          src: "/images/service-dial.png",
          alt: "金庫ダイヤルのメンテナンス",
          width: 640,
          height: 430,
        }}
      />

      <div className="mx-auto max-w-[1100px] border-t border-neutral-200 px-4 pb-16 pt-12 md:px-6 md:pb-20 md:pt-16 lg:px-0 lg:pb-24">
        <ManufacturerList />
      </div>
    </section>
  );
}
