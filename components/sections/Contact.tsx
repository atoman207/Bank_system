"use client";

import { useState } from "react";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
  );
}

function RequiredBadge() {
  return (
    <span className="ml-2 inline-block align-middle rounded bg-im-accent px-2 py-0.5 text-[11px] font-bold tracking-wider text-white md:text-xs">
      必須
    </span>
  );
}

const privacyParagraphs = [
  <>
    株式会社IM（以下「当社」といいます。）は、お問い合わせに際して取得する個人情報（お名前・メールアドレス・電話番号（任意）・ご依頼内容およびその詳細）を、以下の方針に基づき適切に取り扱います。
  </>,
  <>
    1. 取得する個人情報について
    <br />
    　当社は、次の情報をご提供いただきます。
    <br />
    　・お名前
    <br />
    　・メールアドレス
    <br />
    　・電話番号（任意）
    <br />
    　・ご依頼内容（運搬・搬入・設置に関する詳細）
  </>,
  <>
    2. 個人情報の利用目的
    <br />
    　取得した個人情報は、以下の目的のために利用します。
    <br />
    　・お問い合わせへの対応、回答
    <br />
    　・必要に応じたご連絡
    <br />
    　・運搬・搬入作業に伴う適切なサービス提供
  </>,
  <>
    3. 情報管理について
    <br />
    　当社は、金庫の搬送依頼に関連する情報（搬入先、設置状況など）を含め、特に慎重な管理を行います。
    <br />
    　取得した個人情報は、適切な安全対策を講じ、漏えい・滅失・毀損を防止します。
  </>,
  <>
    4. 個人情報の第三者提供について
    <br />
    　当社は、法令に基づく場合を除き、お客様の個人情報や搬送依頼内容を第三者に提供することはありません。
  </>,
  <>
    5. 個人情報の開示・訂正・削除について
    <br />
    　お客様からのご要望に応じて、本人確認の上、個人情報の開示・訂正・削除に速やかに対応いたします。
  </>,
  <>
    6. プライバシーポリシーの改定
    <br />
    　必要に応じて本ポリシーを変更する場合があります。変更後は本ウェブサイトにてお知らせします。
  </>,
  <>
    7. お問い合わせ窓口
    <br />
    　本ポリシーに関するお問い合わせは、以下までご連絡ください。
  </>,
  <>
    【会社名】株式会社IM
    <br />
    【住所】〒924-0017　石川県白山市宮永町53
    <br />
    【電話番号】076-281-6055
    <br />
    【Eメールアドレス】im.service130@fancy.ocn.ne.jp
  </>,
] as const;

const inputClass =
  "box-border w-full rounded border border-neutral-300 bg-white px-3 py-2.5 text-base leading-snug text-im-primary outline-none transition-colors placeholder:text-neutral-400 focus:border-im-primary focus:ring-1 focus:ring-im-primary md:text-lg";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [request, setRequest] = useState("");
  const [detail, setDetail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    if (!request) {
      window.alert("依頼内容を選択してください。");
      return;
    }
    if (!agreed) {
      window.alert("プライバシーポリシーへの同意が必要です。");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, tel, request, detail, agreed }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || "送信に失敗しました。時間をおいて再度お試しください。",
        );
      }

      setStatus("success");
      setName("");
      setEmail("");
      setTel("");
      setRequest("");
      setDetail("");
      setAgreed(false);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "送信に失敗しました。時間をおいて再度お試しください。",
      );
    }
  }

  return (
    <section
      id="contact"
      className="bg-white pb-16 pt-14 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="sr-only">
        お問い合わせ
      </h2>

      <div className="mx-auto max-w-[1100px] px-4 pb-8 text-center md:px-6 md:pb-10 lg:px-0">
        <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
          CONTACT
        </p>
        <h2 className="m-0 mt-2 text-[28px] font-semibold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[34px] lg:mt-4 lg:text-[40px]">
          お問い合わせ
        </h2>
      </div>

      <div className="mx-auto max-w-[1100px] px-4 pb-10 text-center md:px-6 lg:px-0">
        <p className="m-0 text-base font-normal text-neutral-500 md:text-lg">
          \ お急ぎの方はお電話ください /
        </p>
        <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-center gap-4 md:mt-8 md:flex-row md:flex-nowrap md:items-center md:gap-8 lg:gap-10">
          <a
            href="tel:0762816055"
            className="inline-flex items-center gap-3 text-im-accent no-underline transition-opacity hover:opacity-90 md:gap-4"
          >
            <PhoneIcon className="h-10 w-10 shrink-0 md:h-12 md:w-12" />
            <span className="text-[2rem] font-bold leading-none tracking-tight md:text-[2.75rem] lg:text-[3rem]">
              076-281-6055
            </span>
          </a>
          <p className="m-0 text-center text-sm font-normal leading-snug text-neutral-500 md:text-left md:text-base">
            営業時間　8：00～18：00
            <span className="yasumi">（不定休）</span>
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-2 w-full max-w-[42rem] px-4 pb-16 md:mt-4 md:px-6 lg:max-w-[44rem] lg:px-0"
      >
        <div className="space-y-8">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-base font-bold text-im-primary md:text-lg"
            >
              お名前
              <RequiredBadge />
            </label>
            <input
              id="contact-name"
              required
              name="your-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="例：山田　太郎"
              className={inputClass}
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-base font-bold text-im-primary md:text-lg"
            >
              メールアドレス
              <RequiredBadge />
            </label>
            <input
              id="contact-email"
              required
              type="email"
              name="your-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="例：abcd@example.jp"
              className={inputClass}
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="contact-tel"
              className="mb-2 block text-base font-bold text-im-primary md:text-lg"
            >
              お電話番号
            </label>
            <input
              id="contact-tel"
              type="tel"
              name="your-tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder="例：09012345678"
              className={inputClass}
              autoComplete="tel"
            />
          </div>

          <fieldset className="m-0 min-w-0 border-0 p-0">
            <legend className="mb-2 w-full text-base font-bold text-im-primary md:text-lg">
              <span className="inline-flex flex-wrap items-center gap-x-0">
                依頼内容
                <RequiredBadge />
              </span>
            </legend>
            <div className="flex flex-col gap-2.5 pt-1">
              {(
                ["運搬", "修理", "販売", "その他（※詳細記入必須）"] as const
              ).map((v) => (
                <label
                  key={v}
                  className="flex cursor-pointer items-center gap-2.5 text-base text-im-primary md:text-lg"
                >
                  <input
                    type="radio"
                    name="request"
                    value={v}
                    checked={request === v}
                    onChange={() => setRequest(v)}
                    className="h-4 w-4 shrink-0 accent-im-accent"
                  />
                  <span>{v}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="contact-detail"
              className="mb-2 block text-base font-bold text-im-primary md:text-lg"
            >
              詳細（設置場所・金庫の種類など）
            </label>
            <textarea
              id="contact-detail"
              name="your-message"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              rows={10}
              maxLength={2000}
              className={`${inputClass} min-h-[12.5rem] resize-y`}
            />
          </div>
        </div>

        <div className="mt-10 max-h-40 overflow-y-auto rounded-lg border border-neutral-300 bg-neutral-50/80 p-4 md:max-h-44 md:p-5">
          <div className="privacy-policy text-sm leading-relaxed text-neutral-700 md:text-base">
            {privacyParagraphs.map((p, i) => (
              <p key={i} className="mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center md:mt-8">
          <label className="inline-flex cursor-pointer items-start gap-3 text-left text-base text-im-primary md:text-lg">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-im-accent"
            />
            <span>プライバシーポリシーに同意のうえ送信します</span>
          </label>
        </p>

        {status === "success" && (
          <p
            role="status"
            className="mt-8 rounded border border-emerald-300 bg-emerald-50 px-4 py-3 text-center text-base font-semibold text-emerald-700"
          >
            お問い合わせを受け付けました。担当者よりご連絡いたします。
          </p>
        )}
        {status === "error" && errorMessage && (
          <p
            role="alert"
            className="mt-8 rounded border border-red-300 bg-red-50 px-4 py-3 text-center text-base font-semibold text-red-700"
          >
            {errorMessage}
          </p>
        )}

        <div className="mt-10 flex justify-center md:mt-12">
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full max-w-md rounded-[38px] border-0 bg-im-accent px-8 py-3.5 text-lg font-bold tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-im-primary hover:ring-2 hover:ring-im-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-im-accent disabled:hover:text-white disabled:hover:ring-0 md:text-xl"
          >
            {status === "sending" ? "送信中..." : "この内容で送信する"}
          </button>
        </div>
      </form>
    </section>
  );
}
