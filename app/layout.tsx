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
      <body className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5] antialiased">
        {/* Background effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_15%_-10%,rgba(0,226,122,0.13),transparent_60%),radial-gradient(50rem_34rem_at_92%_5%,rgba(52,211,153,0.1),transparent_62%)]" />
          <div className="absolute inset-0 opacity-[0.022]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
            backgroundSize: '56px 56px'
          }} />
        </div>
        
        <div className="relative z-10 flex flex-col flex-1">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
