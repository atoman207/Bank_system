"use client";

import Link from "next/link";
import { useState } from "react";

const TEL_HREF = "tel:0762816055";
const lineHref =
  process.env.NEXT_PUBLIC_LINE_URL?.trim() || "https://lin.ee/WEJ3NAF";
const lineLinkIsExternal = /^https?:\/\//i.test(lineHref);

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

function LineBadge({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 5.58 2 9.99c0 3.95 3.56 7.25 8.36 7.89.33.07.77.21.88.49.1.25.06.64.03.89l-.14.85c-.04.25-.2.98.86.54 1.06-.45 5.74-3.38 7.83-5.79 1.44-1.58 2.18-3.19 2.18-4.87C22 5.58 17.52 2 12 2z" />
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

function OptionalBadge() {
  return (
    <span className="ml-2 inline-block align-middle rounded bg-neutral-200 px-2 py-0.5 text-[11px] font-bold tracking-wider text-neutral-700 md:text-xs">
      任意
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
  "box-border w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base leading-snug text-im-primary outline-none transition-colors placeholder:text-neutral-400 focus:border-im-accent focus:ring-2 focus:ring-im-accent/30 md:text-base";

const requestOptions = [
  { value: "運搬・設置", emoji: "🚚", hint: "引越・移設・階段搬入" },
  { value: "販売", emoji: "🛒", hint: "新規購入・機種相談" },
  { value: "修理・開錠", emoji: "🔧", hint: "ダイヤル忘れ・故障" },
  { value: "その他", emoji: "✉", hint: "下取・処分など" },
] as const;

const customerTypes = ["個人", "法人", "店舗・事業主"] as const;

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [customerType, setCustomerType] = useState<string>("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [prefecture, setPrefecture] = useState("");
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
      const detailWithMeta = [
        customerType ? `【お客様区分】${customerType}` : "",
        prefecture ? `【お住まい／設置先エリア】${prefecture}` : "",
        detail,
      ]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          tel,
          request,
          detail: detailWithMeta,
          agreed,
        }),
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
      setCustomerType("");
      setEmail("");
      setTel("");
      setPrefecture("");
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
      className="relative bg-gradient-to-b from-im-secondary/50 via-white to-white py-14 md:py-20 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6 lg:px-0">
        <div className="text-center">
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.28em] text-im-accent md:text-base">
            CONTACT
          </p>
          <h2
            id="contact-heading"
            className="m-0 mt-2 text-[26px] font-bold leading-tight tracking-tight text-im-primary md:mt-3 md:text-[32px] lg:mt-4 lg:text-[40px]"
          >
            無料見積り・お問い合わせ
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-700 md:text-base">
            見積り・下見は完全無料。ご相談だけでもお気軽にどうぞ。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3">
          <a
            href={TEL_HREF}
            className="flex flex-col items-center justify-center gap-2 border-2 border-[#0d7f82] bg-white p-6 text-center shadow-sm transition-transform hover:-translate-y-1"
          >
            <PhoneIcon className="h-8 w-8 text-[#0d7f82]" />
            <p className="m-0 text-xs font-semibold text-[#0d7f82] md:text-sm">
              お急ぎの方はお電話
            </p>
            <p className="m-0 text-2xl font-bold tracking-tight text-[#0d7f82] tabular-nums md:text-[26px]">
              076-281-6055
            </p>
            <p className="m-0 text-[11px] text-neutral-500 md:text-xs">
              8:00〜18:00（不定休）
            </p>
          </a>

          <Link
            href={lineHref}
            {...(lineLinkIsExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex flex-col items-center justify-center gap-2 bg-[#06c755] p-6 text-center text-white shadow-sm transition-transform hover:-translate-y-1 hover:bg-[#05a948]"
          >
            <LineBadge className="h-8 w-8" />
            <p className="m-0 text-xs font-semibold md:text-sm">
              写真を送るだけでOK
            </p>
            <p className="m-0 text-xl font-bold md:text-2xl">LINE相談</p>
            <p className="m-0 text-[11px] opacity-90 md:text-xs">
              24時間メッセージ受付
            </p>
          </Link>

          <div className="flex flex-col items-center justify-center gap-2 border-2 border-im-accent bg-im-accent p-6 text-center text-white shadow-sm">
            <span className="text-2xl">📝</span>
            <p className="m-0 text-xs font-semibold md:text-sm">じっくり相談</p>
            <p className="m-0 text-xl font-bold md:text-2xl">メールフォーム</p>
            <p className="m-0 text-[11px] opacity-90 md:text-xs">
              下の入力フォームから
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 w-full max-w-[46rem] border border-neutral-200 bg-white p-6 shadow-sm md:mt-14 md:p-10 lg:p-12"
        >
          <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-im-accent text-sm font-bold text-white">
              ✓
            </span>
            <p className="m-0 text-sm font-semibold text-im-primary md:text-base">
              入力はかんたん1分。24時間以内にご返信いたします。
            </p>
          </div>

          <div className="mt-8 space-y-7">
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

            <fieldset className="m-0 min-w-0 border-0 p-0">
              <legend className="mb-2 w-full text-base font-bold text-im-primary md:text-lg">
                お客様区分
                <OptionalBadge />
              </legend>
              <div className="flex flex-wrap gap-2">
                {customerTypes.map((t) => (
                  <label
                    key={t}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors md:text-base ${
                      customerType === t
                        ? "border-im-accent bg-im-accent text-white"
                        : "border-neutral-300 bg-white text-neutral-700 hover:border-im-accent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="customer-type"
                      value={t}
                      checked={customerType === t}
                      onChange={() => setCustomerType(t)}
                      className="sr-only"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-6">
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
                  <OptionalBadge />
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
            </div>

            <div>
              <label
                htmlFor="contact-pref"
                className="mb-2 block text-base font-bold text-im-primary md:text-lg"
              >
                設置先／搬入先の都道府県
                <OptionalBadge />
              </label>
              <input
                id="contact-pref"
                name="your-pref"
                value={prefecture}
                onChange={(e) => setPrefecture(e.target.value)}
                placeholder="例：東京都渋谷区"
                className={inputClass}
                autoComplete="address-level1"
              />
            </div>

            <fieldset className="m-0 min-w-0 border-0 p-0">
              <legend className="mb-3 w-full text-base font-bold text-im-primary md:text-lg">
                <span className="inline-flex flex-wrap items-center gap-x-0">
                  ご依頼内容
                  <RequiredBadge />
                </span>
              </legend>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {requestOptions.map((v) => {
                  const checked = request === v.value;
                  return (
                    <label
                      key={v.value}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors md:p-4 ${
                        checked
                          ? "border-im-accent bg-im-accent/5"
                          : "border-neutral-300 bg-white hover:border-im-accent/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="request"
                        value={v.value}
                        checked={checked}
                        onChange={() => setRequest(v.value)}
                        className="h-4 w-4 shrink-0 accent-im-accent"
                      />
                      <span className="text-xl md:text-2xl">{v.emoji}</span>
                      <span className="flex flex-col">
                        <span className="text-sm font-bold text-im-primary md:text-base">
                          {v.value}
                        </span>
                        <span className="text-[11px] text-neutral-500 md:text-xs">
                          {v.hint}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="contact-detail"
                className="mb-2 block text-base font-bold text-im-primary md:text-lg"
              >
                詳細（設置場所・金庫のサイズ／型番・ご希望日程など）
                <OptionalBadge />
              </label>
              <textarea
                id="contact-detail"
                name="your-message"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                rows={8}
                maxLength={2000}
                placeholder="例：マンション3階まで業務用金庫（約300kg）の搬入をお願いしたいです。階段搬入予定。希望日は5月中旬。"
                className={`${inputClass} min-h-[10rem] resize-y`}
              />
              <p className="mt-1 text-right text-xs text-neutral-500">
                {detail.length} / 2000
              </p>
            </div>
          </div>

          <div className="mt-8 max-h-40 overflow-y-auto rounded-lg border border-neutral-300 bg-neutral-50/80 p-4 md:max-h-44 md:p-5">
            <p className="mb-2 text-sm font-bold text-im-primary md:text-base">
              プライバシーポリシー
            </p>
            <div className="privacy-policy text-xs leading-relaxed text-neutral-700 md:text-sm">
              {privacyParagraphs.map((p, i) => (
                <p key={i} className="mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center md:mt-7">
            <label className="inline-flex cursor-pointer items-start gap-3 text-left text-sm text-im-primary md:text-base">
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
              className="mt-6 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700 md:text-base"
            >
              ✓ お問い合わせを受け付けました。担当者よりご連絡いたします。
            </p>
          )}
          {status === "error" && errorMessage && (
            <p
              role="alert"
              className="mt-6 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-700 md:text-base"
            >
              {errorMessage}
            </p>
          )}

          <div className="mt-8 flex justify-center md:mt-10">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full max-w-md rounded-full border-0 bg-im-accent px-8 py-4 text-base font-bold tracking-wide text-white shadow-lg shadow-im-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c94a15] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-im-accent md:text-lg"
            >
              {status === "sending"
                ? "送信中..."
                : "▶ この内容で無料見積りを依頼する"}
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-neutral-500 md:text-sm">
            ※24時間以内に担当者よりご返信いたします。返信がない場合は迷惑メールフォルダをご確認ください。
          </p>
        </form>
      </div>
    </section>
  );
}
