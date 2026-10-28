"use client"

import Link from "next/link"
import { ArrowRight, Heart, Coffee, Share2, Github } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(9,9,11,0.72)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00e27a] to-[#34d399] flex items-center justify-center shadow-lg shadow-[#00e27a]/20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#04150d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M5 17v-4M12 17V7M19 17v-6" />
            </svg>
          </div>
          <span className="font-display">Hitung<span className="text-[#00e27a]">WR</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/">Beranda</NavLink>
          <NavLink href="/kalkulator">Kalkulator WR</NavLink>
          <NavLink href="/winlose">Win & Lose</NavLink>
          <NavLink href="/losestreak">Lose Streak</NavLink>
          <NavLink href="/donasi" className="text-[#e91e63] hover:text-[#e91e63]">Donasi</NavLink>
        </nav>

        <Link href="/donasi" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e91e63] text-white text-sm font-semibold hover:bg-[#c2185b] transition-colors shadow-pink">
          <Heart className="w-4 h-4" />
          <span className="hidden sm:inline">Dukung</span>
        </Link>
      </div>
    </header>
  )
}

function NavLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`px-4 py-2 rounded-xl text-sm font-medium text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-colors ${className}`}>
      {children}
    </Link>
  )
}
