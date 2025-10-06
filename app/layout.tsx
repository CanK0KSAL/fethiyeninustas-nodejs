import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer"; 


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Fethiye’nin Ustası", template: "%s | Fethiye’nin Ustası" },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer /> {/* ← YENİ FOOTER */}
      </body>
    </html>
  );
}