"use client";

import { useMemo, useState } from "react";

// Harici tipe bağlı kalmayalım
type Lang = "tr" | "en" | "ru";

type Dict = {
  name: string;
  phone: string;
  area: string;
  service: string;
  date: string;
  msg: string;

  // readonly diziler
  areas: readonly string[];
  services: readonly string[];

  sendWa: string;
  sendMail: string;
  required: string;
  ok: string;
  errPhone: string;
  placeholderMsg: string;

  // EK: “Yakında” etiketi
  soon: string;
};

export default function ContactForm({
  lang,
  dict,
  waNumber,
  mailTo,
}: {
  lang: Lang;
  dict: Dict;
  waNumber: string;
  mailTo: string;
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: dict.areas[0] ?? "",
    service: dict.services[0] ?? "",
    date: "",
    msg: "",
  });
  const [sent, setSent] = useState<null | "wa" | "mail">(null);

  const phoneOk = useMemo(() => {
    const clean = form.phone.replace(/[^\d+]/g, "");
    return /^(\+?\d{10,15})$/.test(clean);
  }, [form.phone]);

  function onChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function buildMessage() {
    const lines = [
      "Yeni keşif talebi:",
      `• Ad: ${form.name || "-"}`,
      `• Telefon: ${form.phone || "-"}`,
      `• Bölge: ${form.area || "-"}`,
      `• Hizmet: ${form.service || "-"}`,
      `• Tarih: ${form.date || "-"}`,
      "",
      `${form.msg || dict.placeholderMsg}`,
      "",
      `(Dil: ${lang.toUpperCase()})`,
    ];
    return lines.join("\n");
  }

  function openWhatsApp() {
    if (!form.name || !phoneOk) return;
    const txt = encodeURIComponent(buildMessage());
    const num = waNumber.replace(/[^\d]/g, "");
    window.open(`https://wa.me/${num}?text=${txt}`, "_blank");
    setSent("wa");
  }

  function openMail() {
    if (!form.name || !phoneOk) return;
    const subject = `Keşif Talebi • ${form.service} • ${form.area} • ${form.name}`.slice(
      0,
      120
    );
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    setSent("mail");
  }

  return (
    <div className="rounded-2xl border bg-white/90 backdrop-blur p-5 md:p-6 shadow">
      <div className="grid gap-4">
        <div className="grid sm:grid-cols-2 gap-3">
          <label className="grid gap-1">
            <span className="text-sm font-medium">{dict.name} *</span>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="rounded-xl border px-3 py-2"
              placeholder="Ad Soyad"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium">{dict.phone} *</span>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              required
              inputMode="tel"
              className="rounded-xl border px-3 py-2"
              placeholder="+90 5xx xxx xx xx"
            />
            {!phoneOk && form.phone && (
              <span className="text-xs text-red-600">{dict.errPhone}</span>
            )}
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <label className="grid gap-1">
            <span className="text-sm font-medium">{dict.area}</span>
            <select
              name="area"
              value={form.area}
              onChange={onChange}
              className="rounded-xl border px-3 py-2"
            >
              {dict.areas.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">{dict.service}</span>
            <select
              name="service"
              value={form.service}
              onChange={onChange}
              className="rounded-xl border px-3 py-2"
            >
              {dict.services.map((s, i) => (
                <option
                  key={s}
                  value={s}
                  // İpek Sıva dışındakiler kilitli
                  disabled={i > 0}
                  title={i > 0 ? dict.soon : ""}
                >
                  {i > 0 ? `${s} — ${dict.soon}` : s}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-1">
          <span className="text-sm font-medium">{dict.date}</span>
          <input
            name="date"
            type="date"
            className="rounded-xl border px-3 py-2"
            value={form.date}
            onChange={onChange}
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-medium">{dict.msg}</span>
          <textarea
            name="msg"
            rows={5}
            value={form.msg}
            onChange={onChange}
            className="rounded-xl border px-3 py-2"
            placeholder={dict.placeholderMsg}
          />
        </label>

        <div className="flex flex-wrap gap-3 pt-1">
          <button
            onClick={openWhatsApp}
            disabled={!form.name || !phoneOk}
            className="btn-primary inline-flex items-center gap-2 disabled:opacity-60"
          >
            {/* WA icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.5 11.5a8.5 8.5 0 1 1-15.9 4.4L3 21l5.2-1.6a8.5 8.5 0 1 0 12.3-7.9z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M8.5 9c.2-.5.7-.7 1.1-.5l.9.4c.3.1.4.5.3.8l-.3.8a.6.6 0 0 0 .1.6c.6.8 1.4 1.5 2.3 2 .2.1.5.1.6-.1l.6-.6c.2-.3.6-.3.9 0l.7.7c.3.3.3.8 0 1.1l-.2.2c-.7.7-1.7.9-2.6.5-1.6-.7-3-1.9-4-3.4-.6-.9-.7-2 .1-2.9z"
                fill="currentColor"
              />
            </svg>
            {dict.sendWa}
          </button>

          <button
            onClick={openMail}
            disabled={!form.name || !phoneOk}
            className="btn-ghost"
          >
            {dict.sendMail}
          </button>
        </div>

        {(!form.name || !phoneOk) && (
          <p className="text-xs text-neutral-500">* {dict.required}</p>
        )}
        {sent && <div className="text-sm text-green-700">{dict.ok}</div>}
      </div>
    </div>
  );
}
