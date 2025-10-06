import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LangSync from "./LangSync";
import ContactForm from "./ContactForm";


type Lang = "tr" | "en" | "ru";

export const metadata: Metadata = {
  title: "İletişim | Fethiye’nin Ustası",
  description:
    "Fethiye’de üst düzey renovasyon için keşif randevusu alın. WhatsApp ile hızlı iletişim, çok dilli ekip (TR • EN • RU).",
};
const UI = {
  tr: {
    h1: "Keşif Randevusu ve İletişim",
    sub: "Kısa bir formla talebinizi paylaşın; aynı anda WhatsApp’tan da bize ulaşabilirsiniz.",
    trust: ["Sözleşme & garanti", "Sigortalı ekip", "Tozsuz uygulama"],
    name: "Ad Soyad",
    phone: "Telefon / WhatsApp",
    area: "Bölge",
    service: "Hizmet",
    date: "Tercih edilen tarih",
    msg: "Mesajınız",
    placeholderMsg: "Kısaca ihtiyacınızı yazabilirsiniz…",
    areas: ["Fethiye", "Çalış", "Ovacık", "Göcek", "Diğer"],
    services: [
      "İpek Sıva",
      "Boya",
      "Alçıpan / Asma Tavan",
      "Dekoratif Kaplama",
      "Diğer",
    ],
    sendWa: "WhatsApp’tan Gönder",
    sendMail: "E-posta Taslağı Oluştur",
    required: "Ad ve geçerli bir telefon gerekli.",
    errPhone: "Telefon formatını kontrol edin.",
    ok: "Teşekkürler! WhatsApp/posta penceresi açıldı.",
    sideTitle: "Doğrudan İletişim",
    office: "Çalışma saatleri",
    hours: "Pzt-Cmt 09:00–19:00",
    callUs: "Ara",
    writeUs: "WhatsApp",
    findUs: "Hizmet bölgeleri",
    soon: "Yakında",
  },
  en: {
    h1: "Book a Survey & Contact",
    sub: "Share details via a short form; reach us on WhatsApp instantly.",
    trust: ["Contract & warranty", "Insured team", "Low-dust workflow"],
    name: "Full name",
    phone: "Phone / WhatsApp",
    area: "Area",
    service: "Service",
    date: "Preferred date",
    msg: "Your message",
    placeholderMsg: "Describe your need briefly…",
    areas: ["Fethiye", "Calis", "Ovacik", "Gocek", "Other"],
    services: [
      "Silk Plaster",
      "Painting",
      "Drywall / Ceilings",
      "Decorative Coatings",
      "Other",
    ],
    sendWa: "Send via WhatsApp",
    sendMail: "Create Email Draft",
    required: "Name and a valid phone number are required.",
    errPhone: "Please check phone format.",
    ok: "Thanks! WhatsApp/mail is opening.",
    sideTitle: "Direct Contact",
    office: "Office hours",
    hours: "Mon-Sat 09:00–19:00",
    callUs: "Call",
    writeUs: "WhatsApp",
    findUs: "Service areas",
    soon: "Coming soon",
  },
  ru: {
    h1: "Замер и связь",
    sub: "Заполните короткую форму; напишите нам в WhatsApp сразу.",
    trust: ["Договор и гарантия", "Застрахованная бригада", "Минимум пыли"],
    name: "Имя и фамилия",
    phone: "Телефон / WhatsApp",
    area: "Район",
    service: "Услуга",
    date: "Желаемая дата",
    msg: "Сообщение",
    placeholderMsg: "Коротко опишите задачу…",
    areas: ["Фетхие", "Чалыш", "Оваджик", "Гёджек", "Другое"],
    services: [
      "Шелковая штукатурка",
      "Покраска",
      "ГКЛ / Потолки",
      "Декоративные покрытия",
      "Другое",
    ],
    sendWa: "Отправить в WhatsApp",
    sendMail: "Черновик письма",
    required: "Нужно имя и корректный телефон.",
    errPhone: "Проверьте формат телефона.",
    ok: "Спасибо! Открывается WhatsApp/почта.",
    sideTitle: "Прямые контакты",
    office: "Часы работы",
    hours: "Пн-Сб 09:00–19:00",
    callUs: "Позвонить",
    writeUs: "WhatsApp",
    findUs: "Районы обслуживания",
     soon: "Скоро",
  },
} as const;

export default function ContactPage({
  searchParams,
}: { searchParams: { lang?: Lang } }) {
  const lang: Lang = (searchParams.lang as Lang) || "tr";
  const L = UI[lang];

  // KENDİ NUMARAN: sadece rakam (ör. 90555xxxxxxx)
  const WA_NUMBER = "90XXXXXXXXXX";
  const MAIL_TO = "info@fethiyeninustasi.com";

  return (
    <>
      <LangSync expected={lang} />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{L.h1}</h1>
              <p className="mt-3 text-lg text-neutral-700">{L.sub}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {L.trust.map((t) => (
                  <span key={t} className="rounded-full bg-black/[.05] px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow">
                <Image src="/assets/about/hero-2.jpg" alt="contact" fill className="object-cover" priority />
              </div>
            </div>
          </div>
          <div className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />
        </div>
      </section>

      {/* FORM + SIDE */}
      <section className="px-6 md:px-10 py-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ContactForm
                lang={lang}
                dict={{
                  name: L.name,
                  phone: L.phone,
                  area: L.area,
                  service: L.service,
                  date: L.date,
                  msg: L.msg,
                  areas: L.areas,
                  services: L.services,
                  sendWa: L.sendWa,
                  sendMail: L.sendMail,
                  required: L.required,
                  ok: L.ok,
                  errPhone: L.errPhone,
                  placeholderMsg: L.placeholderMsg,
                  soon: L.soon,            // 👈 EKLENDİ
                }}
                waNumber={WA_NUMBER}
                mailTo={MAIL_TO}
/>

          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border bg-white p-5 shadow grid gap-4">
              <h3 className="text-lg font-medium tracking-tight">{L.sideTitle}</h3>

              <a href={`tel:+${WA_NUMBER}`} className="rounded-xl border px-3 py-2 hover:bg-black/[.04] inline-flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 10.8c1.3 2.5 3.2 4.5 5.7 5.7l2-2a1 1 0 0 1 1.1-.2c1 .4 2 .6 3 .6a1 1 0 0 1 1 1v3.1a1 1 0 0 1-1.1 1A16.9 16.9 0 0 1 3 6.7 1 1 0 0 1 4 5.6h3.1a1 1 0 0 1 1 1c0 1 .2 2 .6 3a1 1 0 0 1-.2 1.1l-2 2z" fill="currentColor"/>
                </svg>
                {L.callUs} +{WA_NUMBER}
              </a>

              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                 className="rounded-xl border px-3 py-2 hover:bg-black/[.04] inline-flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20.5 11.5a8.5 8.5 0 1 1-15.9 4.4L3 21l5.2-1.6a8.5 8.5 0 1 0 12.3-7.9z" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M8.5 9c.2-.5.7-.7 1.1-.5l.9.4c.3.1.4.5.3.8l-.3.8a.6.6 0 0 0 .1.6c.6.8 1.4 1.5 2.3 2 .2.1.5.1.6-.1l.6-.6c.2-.3.6-.3.9 0l.7.7c.3.3.3.8 0 1.1l-.2.2c-.7.7-1.7.9-2.6.5-1.6-.7-3-1.9-4-3.4-.6-.9-.7-2 .1-2.9z" fill="currentColor"/>
                </svg>
                {L.writeUs}
              </a>

              <div className="grid gap-1">
                <div className="text-sm font-medium">{L.office}</div>
                <div className="text-sm text-neutral-700">{L.hours}</div>
              </div>

              <div className="grid gap-1">
                <div className="text-sm font-medium">{L.findUs}</div>
                <div className="text-sm text-neutral-700">Fethiye • Çalış • Ovacık • Göcek ve çevresi</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[1,2].map((n)=>(
                <div key={n} className="relative aspect-[4/3] rounded-2xl overflow-hidden border bg-white shadow">
                  <Image src={`/assets/about/site-${n}.jpg`} alt={`site-${n}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
