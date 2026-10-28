import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "HitungWR — Kalkulator Win Rate MLBB",
  description: "Kalkulator win rate Mobile Legends gratis. Hitung target WR, cek total win/lose, dan simulasi lose streak.",
  keywords: ["hitung wr", "win rate mlbb", "kalkulator wr", "mobile legends", "mlbb calculator"],
  openGraph: {
    title: "HitungWR — Kalkulator Win Rate MLBB",
    description: "Kalkulator WR gratis. Tentukan berapa win yang kamu butuh untuk mencapai target winrate kamu.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HitungWR — Kalkulator Win Rate MLBB",
    description: "Kalkulator WR gratis. Tentukan berapa win yang kamu butuh untuk mencapai target winrate kamu.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-surface-900 text-white antialiased">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00e27a]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-20 w-72 h-72 bg-[#34d399]/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#00e27a]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
